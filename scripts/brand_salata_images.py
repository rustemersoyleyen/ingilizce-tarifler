import os
import shutil
import sys
import urllib.request
from PIL import Image, ImageDraw, ImageFont

sys.stdout.reconfigure(encoding="utf-8")

BASE_DIR = r"d:\Otomasyonlar\İngilizce Tarifler"
brain_dir = r"C:\Users\konusarak\.gemini\antigravity-ide\brain\92ae9418-fa6f-4771-9736-fff08a15dee0"
public_images = os.path.join(BASE_DIR, "public", "images")
raw_dir = os.path.join(public_images, "raw")
steps_dir = os.path.join(public_images, "steps")
logo_path = os.path.join(BASE_DIR, "public", "ko-logo-yatay.png")

os.makedirs(raw_dir, exist_ok=True)
os.makedirs(steps_dir, exist_ok=True)

# 1. Local AI generated raw images
local_raw_map = {
    "salata-hero.jpg": os.path.join(brain_dir, "salata_hero_raw_1790930305271.jpg"),
    "salata-coban.jpg": os.path.join(brain_dir, "salata_coban_raw_1790930326578.jpg"),
    "salata-sezar.jpg": os.path.join(brain_dir, "salata_sezar_raw_1790930345734.jpg"),
}

for name, src in local_raw_map.items():
    if os.path.exists(src):
        dst = os.path.join(raw_dir, name)
        shutil.copy2(src, dst)
        print(f"Copied {name} to raw/")
    else:
        print(f"Warning: Local source not found: {src}")

# 2. Remote high-res authentic food photos for other chapters and steps
remote_map = {
    "salata-ton-balikli.jpg": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&h=800&q=85",
    "salata-meyve.jpg": "https://images.unsplash.com/photo-1568158879083-c42860933ed7?auto=format&fit=crop&w=1200&h=800&q=85",
    "salata-step-1.jpg": "https://images.unsplash.com/photo-1584473457406-6240486418e9?auto=format&fit=crop&w=800&h=600&q=85",
    "salata-step-2.jpg": "https://images.unsplash.com/photo-1590779033100-9f60a05a013d?auto=format&fit=crop&w=800&h=600&q=85",
    "salata-step-3.jpg": "https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&w=800&h=600&q=85",
    "salata-step-4.jpg": "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=800&h=600&q=85",
    "salata-step-5.jpg": "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&w=800&h=600&q=85",
}

headers = {'User-Agent': 'Mozilla/5.0'}
for name, url in remote_map.items():
    dst = os.path.join(raw_dir, name)
    if not os.path.exists(dst):
        try:
            req = urllib.request.Request(url, headers=headers)
            with urllib.request.urlopen(req, timeout=15) as resp:
                with open(dst, "wb") as f:
                    f.write(resp.read())
            print(f"Downloaded and saved {name} to raw/")
        except Exception as e:
            print(f"Failed to download {name}: {e}")
    else:
        print(f"{name} already exists in raw/")

def brand_image(src_path, dst_path, title_en, title_tr, target_size=(1200, 675)):
    img = Image.open(src_path).convert("RGBA")
    src_w, src_h = img.size
    target_w, target_h = target_size

    # Cover crop
    src_ratio = src_w / src_h
    target_ratio = target_w / target_h
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

    # Top-right KO logo badge
    if os.path.exists(logo_path):
        logo = Image.open(logo_path).convert("RGBA")
        logo_w = 160 if target_w >= 1000 else 120
        logo_h = int(logo.height * (logo_w / logo.width))
        logo = logo.resize((logo_w, logo_h), Image.Resampling.LANCZOS)

        pad_x, pad_y = 12, 7
        bw = logo_w + pad_x * 2
        bh = logo_h + pad_y * 2
        badge = Image.new("RGBA", (bw, bh), (0, 0, 0, 0))
        d_badge = ImageDraw.Draw(badge)
        d_badge.rounded_rectangle([(0, 0), (bw - 1, bh - 1)], radius=8, fill=(255, 255, 255, 240))
        badge.paste(logo, (pad_x, pad_y), logo)

        margin = 20 if target_w >= 1000 else 14
        canvas.paste(badge, (target_w - bw - margin, margin), badge)

    # Bottom-left Bilingual Title Badge
    is_step = (target_size == (800, 600))
    f_size_main = 22 if is_step else 26
    f_size_sub = 16 if is_step else 19

    font_main = None
    font_sub = None
    for f in ["segoeuib.ttf", "arialbd.ttf"]:
        try:
            font_main = ImageFont.truetype(f, f_size_main)
            break
        except:
            pass
    for f in ["segoeui.ttf", "arial.ttf"]:
        try:
            font_sub = ImageFont.truetype(f, f_size_sub)
            break
        except:
            pass
    if not font_main: font_main = ImageFont.load_default()
    if not font_sub: font_sub = ImageFont.load_default()

    d_temp = ImageDraw.Draw(canvas)
    b_main = d_temp.textbbox((0, 0), title_en, font=font_main)
    w_main = b_main[2] - b_main[0]
    h_main = b_main[3] - b_main[1]

    b_sub = d_temp.textbbox((0, 0), title_tr, font=font_sub)
    w_sub = b_sub[2] - b_sub[0]
    h_sub = b_sub[3] - b_sub[1]

    pad_x = 18 if not is_step else 14
    pad_y = 12 if not is_step else 9
    spacing = 5

    bw = max(w_main, w_sub) + pad_x * 2
    bh = h_main + h_sub + pad_y * 2 + spacing

    badge_b = Image.new("RGBA", (bw, bh), (0, 0, 0, 0))
    d_b = ImageDraw.Draw(badge_b)
    d_b.rounded_rectangle(
        [(0, 0), (bw - 1, bh - 1)],
        radius=10,
        fill=(15, 23, 42, 224), # dark slate with 0.88 opacity
        outline=(255, 255, 255, 70),
        width=1
    )
    d_b.text((pad_x, pad_y), title_en, font=font_main, fill=(255, 255, 255, 255))
    d_b.text((pad_x, pad_y + h_main + spacing), title_tr, font=font_sub, fill=(203, 213, 225, 240))

    margin = 20 if target_w >= 1000 else 14
    canvas.paste(badge_b, (margin, target_h - bh - margin), badge_b)

    # Save as WebP
    out_rgb = canvas.convert("RGB")
    out_rgb.save(dst_path, "WEBP", quality=92, method=6)
    print(f"Branded & saved -> {dst_path}")

# Brand main recipe chapters
brand_image(os.path.join(raw_dir, "salata-hero.jpg"), os.path.join(public_images, "salata-hero.webp"), "Turkish Salad Recipes", "(Geleneksel Salata Tarifleri)", (1200, 675))
brand_image(os.path.join(raw_dir, "salata-coban.jpg"), os.path.join(public_images, "salata-coban.webp"), "Shepherd's Salad Recipe", "(Çoban Salatası Tarifi)", (1200, 800))
brand_image(os.path.join(raw_dir, "salata-sezar.jpg"), os.path.join(public_images, "salata-sezar.webp"), "Caesar Salad Recipe", "(Sezar Salatası Tarifi)", (1200, 800))
brand_image(os.path.join(raw_dir, "salata-ton-balikli.jpg"), os.path.join(public_images, "salata-ton-balikli.webp"), "Tuna Salad Recipe", "(Ton Balıklı Salata Tarifi)", (1200, 800))
brand_image(os.path.join(raw_dir, "salata-meyve.jpg"), os.path.join(public_images, "salata-meyve.webp"), "Fruit Salad Recipe", "(Meyve Salatası Tarifi)", (1200, 800))

# Steps
steps_data = [
    ("salata-step-1.jpg", "salata-step-1.webp", "Step 1: Wash the Vegetables Thoroughly", "(1. Adım: Sebzeleri İyice Yıkayın)"),
    ("salata-step-2.jpg", "salata-step-2.webp", "Step 2: Chop the Tomatoes and Cucumbers", "(2. Adım: Domatesleri ve Salatalıkları Doğrayın)"),
    ("salata-step-3.jpg", "salata-step-3.webp", "Step 3: Slice the Onion and Peppers Thinly", "(3. Adım: Soğanı ve Biberleri İnce Dilimleyin)"),
    ("salata-step-4.jpg", "salata-step-4.webp", "Step 4: Toss All the Vegetables in a Bowl", "(4. Adım: Tüm Sebzeleri Bir Kasede Karıştırın)"),
    ("salata-step-5.jpg", "salata-step-5.webp", "Step 5: Dress the Salad with Olive Oil and Lemon", "(5. Adım: Salatayı Zeytinyağı ve Limonla Soslandırın)"),
]

for raw_name, webp_name, title_en, title_tr in steps_data:
    brand_image(
        os.path.join(raw_dir, raw_name),
        os.path.join(steps_dir, webp_name),
        title_en,
        title_tr,
        (800, 600)
    )

print("ALL SALATA IMAGES BRANDED SUCCESSFULLY!")
