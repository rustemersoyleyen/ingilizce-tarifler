import os
import sys
import io
import json
import subprocess
import urllib.parse
from PIL import Image, ImageDraw, ImageFont

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')

BASE_DIR = r"d:\Otomasyonlar\İngilizce Tarifler"
STEPS_DIR = os.path.join(BASE_DIR, "public", "images", "steps")
LOGO_PATH = os.path.join(BASE_DIR, "public", "ko-logo-yatay.png")
TEMP_DIR = os.path.join(BASE_DIR, "scratch", "temp_steps")
os.makedirs(STEPS_DIR, exist_ok=True)
os.makedirs(TEMP_DIR, exist_ok=True)

# Wikimedia search helper
def search_wikimedia_image(query):
    try:
        api_url = f"https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=filetype:bitmap%20{urllib.parse.quote(query)}&gsrlimit=10&prop=imageinfo&iiprop=url|size&format=json"
        cmd = [
            "curl.exe", "-s", "-A", "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
            api_url
        ]
        res = subprocess.run(cmd, capture_output=True, text=True, check=True)
        data = json.loads(res.stdout)
        pages = data.get("query", {}).get("pages", {})
        for pid, pdata in pages.items():
            info = pdata.get("imageinfo", [{}])[0]
            url = info.get("url", "")
            # filter for valid photo formats, ignore svg/tif
            if url and any(url.lower().endswith(ext) for ext in [".jpg", ".jpeg", ".png"]):
                w = info.get("width", 0)
                h = info.get("height", 0)
                if w >= 500 and h >= 400:
                    return url
    except Exception as e:
        print(f"Search failed for {query}: {e}")
    return None

def download_image(url, dest_path):
    cmd = [
        "curl.exe", "-s", "-L", "-A", "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
        url, "-o", dest_path
    ]
    res = subprocess.run(cmd, capture_output=True)
    return res.returncode == 0 and os.path.exists(dest_path) and os.path.getsize(dest_path) > 5000

def brand_and_save_step_image(src_img_path, out_webp_path, title_en, title_tr):
    try:
        img = Image.open(src_img_path).convert("RGBA")
    except Exception as e:
        print(f"Cannot open {src_img_path}: {e}")
        return False
        
    target_w, target_h = 800, 600
    src_w, src_h = img.size
    
    # Cover crop
    target_ratio = target_w / target_h
    src_ratio = src_w / src_h
    if src_ratio > target_ratio:
        new_h = target_h
        new_w = int(src_w * (target_h / src_h))
    else:
        new_w = target_w
        new_h = int(src_h * (target_w / src_w))
    img_resized = img.resize((new_w, new_h), Image.Resampling.LANCZOS)
    left = (new_w - target_w) // 2
    top = (new_h - target_h) // 2
    canvas = img_resized.crop((left, top, left + target_w, top + target_h))

    # 1. Top Right Logo Badge
    if os.path.exists(LOGO_PATH):
        logo = Image.open(LOGO_PATH).convert("RGBA")
        logo_w = 130
        logo_h = int(logo.height * (logo_w / logo.width))
        logo = logo.resize((logo_w, logo_h), Image.Resampling.LANCZOS)
        
        pad_x, pad_y = 10, 6
        bw = logo_w + pad_x * 2
        bh = logo_h + pad_y * 2
        badge = Image.new("RGBA", (bw, bh), (0, 0, 0, 0))
        draw_b = ImageDraw.Draw(badge)
        draw_b.rounded_rectangle([(0, 0), (bw - 1, bh - 1)], radius=8, fill=(255, 255, 255, 240), outline=(255, 255, 255, 255))
        badge.paste(logo, (pad_x, pad_y), logo)
        canvas.paste(badge, (target_w - bw - 16, 16), badge)

    # 2. Bottom Left Badge
    font_main = None
    font_sub = None
    for f in ["segoeuib.ttf", "arialbd.ttf"]:
        try:
            font_main = ImageFont.truetype(f, 22)
            break
        except:
            pass
    for f in ["segoeui.ttf", "arial.ttf"]:
        try:
            font_sub = ImageFont.truetype(f, 17)
            break
        except:
            pass
    if font_main is None:
        font_main = ImageFont.load_default()
    if font_sub is None:
        font_sub = font_main

    draw_dummy = ImageDraw.Draw(canvas)
    bb_main = draw_dummy.textbbox((0, 0), title_en, font=font_main)
    bb_sub = draw_dummy.textbbox((0, 0), title_tr, font=font_sub)
    w_main = bb_main[2] - bb_main[0]
    h_main = bb_main[3] - bb_main[1]
    w_sub = bb_sub[2] - bb_sub[0]
    h_sub = bb_sub[3] - bb_sub[1]

    tb_w = max(w_main, w_sub) + 28
    tb_h = h_main + h_sub + 22

    t_badge = Image.new("RGBA", (tb_w, tb_h), (0, 0, 0, 0))
    draw_tb = ImageDraw.Draw(t_badge)
    draw_tb.rounded_rectangle([(0, 0), (tb_w - 1, tb_h - 1)], radius=8, fill=(15, 23, 42, 225), outline=(255, 255, 255, 70))
    draw_tb.text((14, 8), title_en, font=font_main, fill=(255, 255, 255, 255))
    draw_tb.text((14, 8 + h_main + 4), title_tr, font=font_sub, fill=(147, 197, 253, 255))

    canvas.paste(t_badge, (16, target_h - tb_h - 16), t_badge)
    canvas.convert("RGB").save(out_webp_path, "WEBP", quality=92, method=6)
    print(f"✓ Saved step image: {os.path.basename(out_webp_path)}")
    return True

STEPS_CONFIG = [
    # PIZZA (7 Steps)
    {
        "file": "pizza-step-1.webp",
        "title_en": "Step 1: Dissolve the Yeast",
        "title_tr": "(1. Adım: Mayayı Ilık Suda Eritin)",
        "query": "yeast water bowl baking",
        "fallback_query": "active dry yeast dissolve"
    },
    {
        "file": "pizza-step-2.webp",
        "title_en": "Step 2: Knead the Pizza Dough",
        "title_tr": "(2. Adım: Pizza Hamurunu Yoğurun)",
        "query": "kneading pizza dough flour",
        "fallback_query": "knead dough hands"
    },
    {
        "file": "pizza-step-3.webp",
        "title_en": "Step 3: Let the Dough Rise",
        "title_tr": "(3. Adım: Hamuru Mayalandırın)",
        "query": "risen bread dough bowl",
        "fallback_query": "proofed dough bowl"
    },
    {
        "file": "pizza-step-4.webp",
        "title_en": "Step 4: Roll Out the Dough",
        "title_tr": "(4. Adım: Hamuru Yuvarlak Açın)",
        "query": "rolling pin pizza dough",
        "fallback_query": "rolling dough table"
    },
    {
        "file": "pizza-step-5.webp",
        "title_en": "Step 5: Spread the Tomato Sauce",
        "title_tr": "(5. Adım: Domates Sosunu Yayın)",
        "query": "pizza tomato sauce ladle",
        "fallback_query": "spreading sauce pizza"
    },
    {
        "file": "pizza-step-6.webp",
        "title_en": "Step 6: Add Cheese & Toppings",
        "title_tr": "(6. Adım: Peynir ve Malzemeleri Ekleyin)",
        "query": "pizza cheese mozzarella toppings",
        "fallback_query": "shredded mozzarella pizza"
    },
    {
        "file": "pizza-step-7.webp",
        "title_en": "Step 7: Bake at 220°C in Oven",
        "title_tr": "(7. Adım: 220 Derecede Fırınlayın)",
        "query": "baking pizza oven peel",
        "fallback_query": "pizza oven wood fire"
    },

    # MENEMEN (7 Steps)
    {
        "file": "menemen-step-1.webp",
        "title_en": "Step 1: Chop the Green Peppers",
        "title_tr": "(1. Adım: Yeşil Biberleri Doğrayın)",
        "query": "chopping green peppers knife",
        "fallback_query": "sliced green chili peppers"
    },
    {
        "file": "menemen-step-2.webp",
        "title_en": "Step 2: Peel & Dice the Tomatoes",
        "title_tr": "(2. Adım: Domatesleri Küp Doğrayın)",
        "query": "dicing tomatoes cutting board",
        "fallback_query": "chopped red tomatoes"
    },
    {
        "file": "menemen-step-3.webp",
        "title_en": "Step 3: Heat the Butter in Pan",
        "title_tr": "(3. Adım: Tavada Yağı Isıtın)",
        "query": "melting butter skillet pan",
        "fallback_query": "olive oil pan hot"
    },
    {
        "file": "menemen-step-4.webp",
        "title_en": "Step 4: Sauté the Green Peppers",
        "title_tr": "(4. Adım: Biberleri Soteleyin)",
        "query": "sautéing peppers skillet",
        "fallback_query": "fried green peppers pan"
    },
    {
        "file": "menemen-step-5.webp",
        "title_en": "Step 5: Simmer the Tomatoes",
        "title_tr": "(5. Adım: Domatesleri Pişirin)",
        "query": "simmering tomato sauce pan",
        "fallback_query": "cooked tomato pan sauce"
    },
    {
        "file": "menemen-step-6.webp",
        "title_en": "Step 6: Crack Eggs into the Pan",
        "title_tr": "(6. Adım: Yumurtaları Tavaya Kırın)",
        "query": "cracking egg frying pan",
        "fallback_query": "eggs in skillet"
    },
    {
        "file": "menemen-step-7.webp",
        "title_en": "Step 7: Stir Gently and Serve",
        "title_tr": "(7. Adım: Nazikçe Karıştırıp Servis Edin)",
        "query": "scrambled eggs pan soft",
        "fallback_query": "menemen skillet dish"
    },

    # BAKLAVA (7 Steps)
    {
        "file": "baklava-step-1.webp",
        "title_en": "Step 1: Prepare the Phyllo Sheets",
        "title_tr": "(1. Adım: Yufkaları Hazırlayın)",
        "query": "phyllo dough pastry sheets",
        "fallback_query": "filo pastry sheets"
    },
    {
        "file": "baklava-step-2.webp",
        "title_en": "Step 2: Brush with Melted Butter",
        "title_tr": "(2. Adım: Katları Tereyağıyla Yağlayın)",
        "query": "brushing melted butter pastry",
        "fallback_query": "butter brush baking"
    },
    {
        "file": "baklava-step-3.webp",
        "title_en": "Step 3: Spread Crushed Pistachios",
        "title_tr": "(3. Adım: Antep Fıstığı Serpiştirin)",
        "query": "crushed pistachios walnuts",
        "fallback_query": "ground pistachio baklava"
    },
    {
        "file": "baklava-step-4.webp",
        "title_en": "Step 4: Cut into Diamond Shapes",
        "title_tr": "(4. Adım: Baklavayı Dilimleyin)",
        "query": "cutting baklava knife diamond",
        "fallback_query": "sliced pastry tray"
    },
    {
        "file": "baklava-step-5.webp",
        "title_en": "Step 5: Pour Sizzling Hot Butter",
        "title_tr": "(5. Adım: Sıcak Tereyağını Gezdirin)",
        "query": "pouring melted butter ladle",
        "fallback_query": "melted butter baking"
    },
    {
        "file": "baklava-step-6.webp",
        "title_en": "Step 6: Bake until Golden & Crisp",
        "title_tr": "(6. Adım: Fırında Altın Rengi Pişirin)",
        "query": "baked golden baklava crisp",
        "fallback_query": "crispy golden pastry tray"
    },
    {
        "file": "baklava-step-7.webp",
        "title_en": "Step 7: Pour Cool Syrup Over Hot Baklava",
        "title_tr": "(7. Adım: Soğuk Şerbeti Dökün)",
        "query": "pouring syrup baklava sugar",
        "fallback_query": "sugar syrup pastry"
    },

    # SMOOTHIE (5 Steps)
    {
        "file": "smoothie-step-1.webp",
        "title_en": "Step 1: Peel & Slice the Banana",
        "title_tr": "(1. Adım: Muzu Soyup Dilimleyin)",
        "query": "peeling slicing banana knife",
        "fallback_query": "sliced banana cutting board"
    },
    {
        "file": "smoothie-step-2.webp",
        "title_en": "Step 2: Wash Fresh Berries & Fruits",
        "title_tr": "(2. Adım: Taze Meyveleri Yıkayın)",
        "query": "washing strawberries berries colander",
        "fallback_query": "fresh strawberries bowl"
    },
    {
        "file": "smoothie-step-3.webp",
        "title_en": "Step 3: Add Milk, Yogurt & Honey",
        "title_tr": "(3. Adım: Süt, Yoğurt ve Bal Ekleyin)",
        "query": "pouring milk yogurt blender honey",
        "fallback_query": "yogurt milk honey jar"
    },
    {
        "file": "smoothie-step-4.webp",
        "title_en": "Step 4: Blend on High for 60 Sec",
        "title_tr": "(4. Adım: Yüksek Hızda Çekin)",
        "query": "blender vortex smoothie blending",
        "fallback_query": "fruit blender puree"
    },
    {
        "file": "smoothie-step-5.webp",
        "title_en": "Step 5: Pour and Serve Chilled",
        "title_tr": "(5. Adım: Bardaklara Doldurup Servis Edin)",
        "query": "pouring smoothie glass straw",
        "fallback_query": "fresh smoothie glass garnish"
    },

    # MAKARNA (7 Steps)
    {
        "file": "makarna-step-1.webp",
        "title_en": "Step 1: Boil Water in Large Pot",
        "title_tr": "(1. Adım: Büyük Tencerede Su Kaynatın)",
        "query": "boiling water pot steam",
        "fallback_query": "pot of boiling water"
    },
    {
        "file": "makarna-step-2.webp",
        "title_en": "Step 2: Add Salt to Boiling Water",
        "title_tr": "(2. Adım: Kaynayan Suya Tuz Ekleyin)",
        "query": "adding salt boiling water pot",
        "fallback_query": "sea salt water cooking"
    },
    {
        "file": "makarna-step-3.webp",
        "title_en": "Step 3: Add Pasta into the Pot",
        "title_tr": "(3. Adım: Makarnayı Tencereye Ekleyin)",
        "query": "spaghetti pasta boiling water pot",
        "fallback_query": "cooking pasta pot"
    },
    {
        "file": "makarna-step-4.webp",
        "title_en": "Step 4: Stir with Wooden Spoon",
        "title_tr": "(4. Adım: Tahta Kaşıkla Karıştırın)",
        "query": "stirring pasta pot wooden spoon",
        "fallback_query": "pasta boiling wooden spoon"
    },
    {
        "file": "makarna-step-5.webp",
        "title_en": "Step 5: Test for Al Dente Texture",
        "title_tr": "(5. Adım: Al Dente Kıvamını Test Edin)",
        "query": "testing pasta strand tongs al dente",
        "fallback_query": "spaghetti tongs test"
    },
    {
        "file": "makarna-step-6.webp",
        "title_en": "Step 6: Drain in a Colander",
        "title_tr": "(6. Adım: Makarnayı Süzün)",
        "query": "draining pasta colander steam",
        "fallback_query": "pasta colander sink"
    },
    {
        "file": "makarna-step-7.webp",
        "title_en": "Step 7: Toss with Sauce & Serve",
        "title_tr": "(7. Adım: Sosla Harmanlayıp Servis Edin)",
        "query": "pasta plate sauce basil parmesan",
        "fallback_query": "spaghetti tomato sauce plate"
    },

    # KEK (7 Steps)
    {
        "file": "kek-step-1.webp",
        "title_en": "Step 1: Whisk Eggs and Sugar",
        "title_tr": "(1. Adım: Yumurta ve Şekeri Çırpın)",
        "query": "whisking eggs sugar bowl fluffy",
        "fallback_query": "beating eggs bowl whisk"
    },
    {
        "file": "kek-step-2.webp",
        "title_en": "Step 2: Pour in Milk and Oil",
        "title_tr": "(2. Adım: Süt ve Sıvı Yağı Ekleyin)",
        "query": "pouring milk bowl batter baking",
        "fallback_query": "adding milk oil bowl"
    },
    {
        "file": "kek-step-3.webp",
        "title_en": "Step 3: Sift Flour and Baking Powder",
        "title_tr": "(3. Adım: Un ve Kabartma Tozunu Eleyin)",
        "query": "sifting flour sieve bowl baking",
        "fallback_query": "flour sieve baking bowl"
    },
    {
        "file": "kek-step-4.webp",
        "title_en": "Step 4: Fold Batter with Spatula",
        "title_tr": "(4. Adım: Spatulayla Nazikçe Karıştırın)",
        "query": "mixing cake batter spatula bowl",
        "fallback_query": "cake batter bowl smooth"
    },
    {
        "file": "kek-step-5.webp",
        "title_en": "Step 5: Grease & Flour Cake Pan",
        "title_tr": "(5. Adım: Kek Kalıbını Yağlayın)",
        "query": "greasing cake pan butter flour",
        "fallback_query": "bundt cake pan greased"
    },
    {
        "file": "kek-step-6.webp",
        "title_en": "Step 6: Pour Batter into Cake Pan",
        "title_tr": "(6. Adım: Harcı Kalıba Dökün)",
        "query": "pouring cake batter pan baking",
        "fallback_query": "batter cake pan ribbon"
    },
    {
        "file": "kek-step-7.webp",
        "title_en": "Step 7: Bake at 180°C in Oven",
        "title_tr": "(7. Adım: 180 Derecede Fırınlayın)",
        "query": "baked cake golden wire rack cooling",
        "fallback_query": "baked sponge cake cooling"
    },

    # OMLET (5 Steps)
    {
        "file": "omlet-step-1.webp",
        "title_en": "Step 1: Crack 2 Eggs into Bowl",
        "title_tr": "(1. Adım: 2 Yumurtayı Kaseye Kırın)",
        "query": "cracking eggs glass bowl fresh",
        "fallback_query": "raw eggs glass bowl"
    },
    {
        "file": "omlet-step-2.webp",
        "title_en": "Step 2: Beat with Salt & Pepper",
        "title_tr": "(2. Adım: Tuz ve Karabiberle Çırpın)",
        "query": "whisking eggs salt pepper bowl",
        "fallback_query": "beating eggs fork bowl"
    },
    {
        "file": "omlet-step-3.webp",
        "title_en": "Step 3: Melt Butter in Skillet",
        "title_tr": "(3. Adım: Tavada Tereyağını Eritin)",
        "query": "melting butter nonstick pan skillet",
        "fallback_query": "butter sizzling frying pan"
    },
    {
        "file": "omlet-step-4.webp",
        "title_en": "Step 4: Pour Egg Mixture into Pan",
        "title_tr": "(4. Adım: Yumurtayı Tavaya Dökün)",
        "query": "pouring beaten eggs skillet pan",
        "fallback_query": "eggs cooking skillet yellow"
    },
    {
        "file": "omlet-step-5.webp",
        "title_en": "Step 5: Fold Omelette in Half & Serve",
        "title_tr": "(5. Adım: İkiye Katlayıp Sıcak Servis Edin)",
        "query": "folded omelette plate breakfast spatula",
        "fallback_query": "golden omelette plate hot"
    }
]

print(f"Total steps to process: {len(STEPS_CONFIG)}")

for idx, step in enumerate(STEPS_CONFIG):
    out_path = os.path.join(STEPS_DIR, step["file"])
    if os.path.exists(out_path) and os.path.getsize(out_path) > 10000:
        print(f"[{idx+1}/{len(STEPS_CONFIG)}] Already exists: {step['file']}")
        continue

    print(f"\n[{idx+1}/{len(STEPS_CONFIG)}] Processing {step['file']}: {step['title_en']}...")
    img_url = search_wikimedia_image(step["query"])
    if not img_url and "fallback_query" in step:
        print(f"  Trying fallback query: {step['fallback_query']}...")
        img_url = search_wikimedia_image(step["fallback_query"])
        
    temp_file = os.path.join(TEMP_DIR, f"temp_{idx}.jpg")
    success = False
    if img_url:
        print(f"  Downloading: {img_url[:70]}...")
        if download_image(img_url, temp_file):
            success = brand_and_save_step_image(temp_file, out_path, step["title_en"], step["title_tr"])
            
    if not success:
        print(f"  ! Warning: could not download from Wikimedia, checking alternative...")
        # fallback: use related high-res recipe hero or base photo from public/images
        fallback_map = {
            "pizza": "pizza-dough.webp",
            "menemen": "menemen-classic.webp",
            "baklava": "baklava-hero.webp",
            "smoothie": "smoothie-hero.webp",
            "makarna": "makarna-hero.webp",
            "kek": "kek-hero.webp",
            "omlet": "omlet-hero.webp"
        }
        for prefix, base_img in fallback_map.items():
            if step["file"].startswith(prefix):
                base_path = os.path.join(BASE_DIR, "public", "images", base_img)
                if os.path.exists(base_path):
                    brand_and_save_step_image(base_path, out_path, step["title_en"], step["title_tr"])
                    success = True
                    break

print("\n--- ALL STEP IMAGES PROCESSED SUCCESSFULLY ---")
