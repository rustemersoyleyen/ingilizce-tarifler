# download_unique_step_photos.py
import urllib.request
import urllib.parse
import json
import os
import sys
import time

sys.path.append(os.path.join(os.path.dirname(__file__)))
from brand_recipe_images import create_branded_image

HEADERS = {'User-Agent': 'KonusarakOgrenRecipeBot/1.0 (https://konusarakogren.com; editor@konusarakogren.com)'}

def search_wikimedia_direct_image(query):
    """Searches Wikimedia Commons for the first valid image matching query and returns direct URL."""
    time.sleep(0.8)
    search_url = f"https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch={urllib.parse.quote(query + ' filetype:bitmap')}&srnamespace=6&format=json"
    req = urllib.request.Request(search_url, headers=HEADERS)
    try:
        with urllib.request.urlopen(req, timeout=12) as resp:
            data = json.loads(resp.read().decode('utf-8'))
            results = data.get('query', {}).get('search', [])
            for r in results[:4]:
                title = r['title']
                if any(ext in title.lower() for ext in ['.jpg', '.jpeg', '.png', '.webp']):
                    time.sleep(0.8)
                    info_url = f"https://commons.wikimedia.org/w/api.php?action=query&titles={urllib.parse.quote(title)}&prop=imageinfo&iiprop=url&format=json"
                    info_req = urllib.request.Request(info_url, headers=HEADERS)
                    with urllib.request.urlopen(info_req, timeout=12) as i_resp:
                        i_data = json.loads(i_resp.read().decode('utf-8'))
                        pages = i_data.get('query', {}).get('pages', {})
                        for p in pages.values():
                            info = p.get('imageinfo', [])
                            if info and 'url' in info[0]:
                                return info[0]['url']
    except Exception as e:
        print(f"Search failed for '{query}': {e}")
    return None

def download_and_brand_step(url, out_path, title_en, title_tr, temp_name):
    try:
        req = urllib.request.Request(url, headers=HEADERS)
        with urllib.request.urlopen(req, timeout=15) as resp:
            data = resp.read()
        with open(temp_name, "wb") as f:
            f.write(data)
        create_branded_image(temp_name, title_en, out_path, target_size=(800, 600), subtitle_text=title_tr)
        if os.path.exists(temp_name):
            os.remove(temp_name)
        return True
    except Exception as e:
        print(f"Download/brand error for {out_path}: {e}")
        return False

# Step definitions with curated distinct search queries
ALL_STEPS = {
    "pizza": [
        ("yeast dissolved warm water glass", "Step 1: Activate Yeast in Warm Water", "(1. Adım: Mayayı Ilık Suda Aktifleştirin)"),
        ("kneading dough hands baker", "Step 2: Knead Dough into Smooth Ball", "(2. Adım: Hamuru Pürüzsüz Top Halinde Yoğurun)"),
        ("dough rising bowl proofing", "Step 3: Let Dough Rise in Warm Place", "(3. Adım: Hamuru Ilık Yerde Mayalandırın)"),
        ("rolling dough rolling pin counter", "Step 4: Roll Out and Shape Pizza Dough", "(4. Adım: Hamuru Merdaneyle Açın)"),
        ("spreading tomato sauce pizza ladle", "Step 5: Spread Tomato Sauce Evenly", "(5. Adım: Domates Sosunu Eşit Şekilde Yayın)"),
        ("topping pizza mozzarella cheese basil", "Step 6: Add Mozzarella and Toppings", "(6. Adım: Peynir ve Malzemeleri Ekleyin)"),
        ("pizza oven peel baking hot", "Step 7: Bake at 220°C Until Golden", "(7. Adım: Fırında Nar Gibi Pişirin)")
    ],
    "menemen": [
        ("chopping green peppers cutting board", "Step 1: Chop the Green Peppers", "(1. Adım: Yeşil Biberleri İnce İnce Doğrayın)"),
        ("cutting tomatoes knife cutting board", "Step 2: Dice the Fresh Tomatoes", "(2. Adım: Taze Domatesleri Küp Küp Doğrayın)"),
        ("heating olive oil skillet pan stove", "Step 3: Heat Olive Oil or Melt Butter", "(3. Adım: Zeytinyağını veya Tereyağını Isıtın)"),
        ("frying peppers skillet wooden spoon", "Step 4: Sauté Peppers Until Tender", "(4. Adım: Biberleri Yumuşayana Dek Soteleyin)"),
        ("simmering tomatoes skillet pan cooking", "Step 5: Add Tomatoes and Simmer", "(5. Adım: Domatesleri Ekleyip Kısık Ateşte Pişirin)"),
        ("cracking eggs frying pan skillet", "Step 6: Crack Eggs and Fold Gently", "(6. Adım: Yumurtaları Kırıp Nazikçe Karıştırın)")
    ],
    "kurabiye": [
        ("whisking butter sugar bowl baking", "Step 1: Whisk Softened Butter and Sugar", "(1. Adım: Yumuşak Tereyağı ve Şekeri Çırpın)"),
        ("sifting flour sieve mixing bowl", "Step 2: Sift Flour and Vanilla", "(2. Adım: Unu ve Vanilyayı Elekten Geçirin)"),
        ("kneading cookie dough hands pastry", "Step 3: Knead into Smooth Dough Ball", "(3. Adım: Pürüzsüz Kurabiye Hamuru Yoğurun)"),
        ("rolling dough rolling pin baking", "Step 4: Roll Dough to 5 mm Thickness", "(4. Adım: Hamuru 5 mm Kalınlığında Açın)"),
        ("cookie cutters cutting dough tray", "Step 5: Cut Shapes with Cookie Cutters", "(5. Adım: Kurabiye Kalıplarıyla Şekil Verin)"),
        ("cookies baking sheet oven golden", "Step 6: Bake in Oven at 170°C", "(6. Adım: 170°C Fırında 15 Dakika Pişirin)"),
        ("cookies cooling rack powdered sugar", "Step 7: Cool and Dust with Sugar", "(7. Adım: Soğutup Pudra Şekeri Serpin)")
    ],
    "baklava": [
        ("boiling sugar syrup saucepan stove", "Step 1: Prepare the Lemon Sugar Syrup", "(1. Adım: Limonlu Şeker Şerbetini Kaynatın)"),
        ("brushing melted butter pastry brush", "Step 2: Layer and Brush Phyllo Sheets", "(2. Adım: Yufkaları Dizip Tereyağı ile Yağlayın)"),
        ("crushed walnuts pistachios bowl pastry", "Step 3: Spread Crushed Nuts Evenly", "(3. Adım: Çekilmiş Ceviz veya Fıstığı Yayın)"),
        ("slicing pastry knife cutting baking", "Step 4: Slice into Diamond Shapes", "(4. Adım: Pişirmeden Önce Dilimleyin)"),
        ("baking tray oven golden pastry", "Step 5: Bake at 170°C Until Golden Brown", "(5. Adım: Fırında Nar Gibi Kızarana Dek Pişirin)"),
        ("pouring syrup ladle pastry sweet", "Step 6: Pour Cold Syrup Over Hot Baklava", "(6. Adım: Sıcak Baklavaya Soğuk Şerbeti Dökün)")
    ],
    "smoothie": [
        ("slicing banana knife cutting board", "Step 1: Peel and Slice Fresh Banana", "(1. Adım: Taze Muzu Soyun ve Dilimleyin)"),
        ("frozen berries bowl kitchen blender", "Step 2: Add Frozen Berries to Blender", "(2. Adım: Dondurulmuş Meyveleri Blendere Ekleyin)"),
        ("pouring milk pitcher glass measuring", "Step 3: Pour in Milk or Yogurt", "(3. Adım: Süt veya Yoğurdu Blendere Dökün)"),
        ("blender blending smoothie kitchen", "Step 4: Blend Until Smooth and Creamy", "(4. Adım: Pürüzsüz ve Kremamsı Olana Dek Çırpın)"),
        ("smoothie glass straw breakfast berries", "Step 5: Pour into Glass and Garnish", "(5. Adım: Bardağa Doldurup Taze Süsleyin)")
    ],
    "kek": [
        ("beating eggs sugar mixer bowl", "Step 1: Whisk Eggs and Sugar Until Frothy", "(1. Adım: Yumurta ve Şekeri Köpürene Dek Çırpın)"),
        ("pouring vegetable oil mixing bowl", "Step 2: Pour in Milk and Vegetable Oil", "(2. Adım: Süt ve Sıvı Yağı Kaseye Ekleyin)"),
        ("sifting flour baking powder sieve", "Step 3: Sift in Flour and Baking Powder", "(3. Adım: Unu ve Kabartma Tozunu Eleyin)"),
        ("mixing batter spatula bowl baking", "Step 4: Fold Batter Gently with Spatula", "(4. Adım: Spatulayla Nazikçe Havalandırın)"),
        ("pouring batter cake pan tin", "Step 5: Pour Batter into Cake Pan", "(5. Adım: Hamuru Yağlanmış Kek Kalıbına Dökün)"),
        ("cake baking oven golden crust", "Step 6: Bake at 180°C for 40 Minutes", "(6. Adım: 180°C Fırında 40 Dakika Pişirin)")
    ],
    "omlet": [
        ("cracking eggs bowl hands cooking", "Step 1: Crack 2 Fresh Eggs into Bowl", "(1. Adım: 2 Taze Yumurtayı Kaseye Kırın)"),
        ("whisking eggs fork bowl seasoning", "Step 2: Beat Thoroughly with Salt and Pepper", "(2. Adım: Tuz ve Karabiberle İyice Çırpın)"),
        ("melting butter frying pan stove", "Step 3: Melt Butter in Non-Stick Skillet", "(3. Adım: Yapışmaz Tavada Tereyağını Eritin)"),
        ("pouring beaten eggs frying pan skillet", "Step 4: Pour Egg Mixture into Hot Pan", "(4. Adım: Yumurta Karışımını Sıcak Tavaya Dökün)"),
        ("folding omelette spatula pan breakfast", "Step 5: Fold in Half and Slide onto Plate", "(5. Adım: Spatulayla İkiye Katlayıp Servis Edin)")
    ],
    "pancake": [
        ("whisking eggs milk sugar bowl", "Step 1: Whisk Eggs, Milk and Sugar", "(1. Adım: Yumurtaları, Sütü ve Şekeri Çırpın)"),
        ("sifting flour baking powder bowl", "Step 2: Add Flour and Baking Powder", "(2. Adım: Unu ve Kabartma Tozunu Ekleyin)"),
        ("pancake batter bowl resting kitchen", "Step 3: Rest Batter for 10 Minutes", "(3. Adım: Hamuru 10 Dakika Dinlendirin)"),
        ("pouring batter frying pan skillet", "Step 4: Pour Batter onto Hot Pan", "(4. Adım: Hamuru Sıcak Tavaya Dökün)"),
        ("flipping pancake spatula pan", "Step 5: Flip Pancake When Bubbles Appear", "(5. Adım: Kabarcıklar Oluşunca Pankeki Çevirin)"),
        ("pancakes maple syrup honey butter stack", "Step 6: Serve Pancakes with Honey or Syrup", "(6. Adım: Pankekleri Bal veya Şurupla Servis Edin)")
    ]
}

def main():
    print("Starting unique action step images downloader...")
    os.makedirs("public/images/steps", exist_ok=True)
    
    for recipe, steps in ALL_STEPS.items():
        print(f"\n=== SOURCING UNIQUE ACTION PHOTOS FOR: {recipe.upper()} ===")
        for idx, (query, title_en, title_tr) in enumerate(steps, 1):
            out_file = f"public/images/steps/{recipe}-step-{idx}.webp"
            print(f"[{recipe} Step {idx}] Finding action photo for '{query}'...")
            img_url = search_wikimedia_direct_image(query)
            if img_url:
                success = download_and_brand_step(img_url, out_file, title_en, title_tr, f"temp_{recipe}_{idx}.jpg")
                if success:
                    print(f"  ✓ SUCCESS: {out_file} (from {img_url[:60]}...)")
                else:
                    print(f"  ✗ FAILED to brand: {out_file}")
            else:
                print(f"  ✗ No bitmap image found for '{query}'")

if __name__ == "__main__":
    main()
