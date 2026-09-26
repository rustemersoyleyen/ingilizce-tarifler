# fill_missing_step_photos.py
import urllib.request
import urllib.parse
import json
import os
import sys
import time

sys.path.append(os.path.join(os.path.dirname(__file__)))
from brand_recipe_images import create_branded_image

HEADERS = {'User-Agent': 'KonusarakOgrenRecipeBot/1.0 (https://konusarakogren.com; editor@konusarakogren.com)'}

def search_wikimedia(query):
    time.sleep(0.5)
    search_url = f"https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch={urllib.parse.quote(query + ' filetype:bitmap')}&srnamespace=6&format=json"
    req = urllib.request.Request(search_url, headers=HEADERS)
    try:
        with urllib.request.urlopen(req, timeout=10) as resp:
            data = json.loads(resp.read().decode('utf-8'))
            results = data.get('query', {}).get('search', [])
            for r in results[:5]:
                title = r['title']
                if any(ext in title.lower() for ext in ['.jpg', '.jpeg', '.png', '.webp']):
                    time.sleep(0.5)
                    info_url = f"https://commons.wikimedia.org/w/api.php?action=query&titles={urllib.parse.quote(title)}&prop=imageinfo&iiprop=url&format=json"
                    info_req = urllib.request.Request(info_url, headers=HEADERS)
                    with urllib.request.urlopen(info_req, timeout=10) as i_resp:
                        i_data = json.loads(i_resp.read().decode('utf-8'))
                        pages = i_data.get('query', {}).get('pages', {})
                        for p in pages.values():
                            info = p.get('imageinfo', [])
                            if info and 'url' in info[0]:
                                return info[0]['url']
    except Exception as e:
        print(f"  Search error '{query}': {e}")
    return None

def download_and_brand(url, out_path, title_en, title_tr):
    temp_file = f"temp_fill_{os.path.basename(out_path)}.jpg"
    try:
        req = urllib.request.Request(url, headers=HEADERS)
        with urllib.request.urlopen(req, timeout=15) as resp:
            data = resp.read()
        with open(temp_file, "wb") as f:
            f.write(data)
        create_branded_image(temp_file, title_en, out_path, target_size=(800, 600), subtitle_text=title_tr)
        if os.path.exists(temp_file):
            os.remove(temp_file)
        return True
    except Exception as e:
        print(f"  Brand error {out_path}: {e}")
        if os.path.exists(temp_file):
            os.remove(temp_file)
        return False

# Target steps with multiple fallback queries
STEPS_TO_FILL = [
    # Pizza
    ("public/images/steps/pizza-step-1.webp", ["active dry yeast water", "yeast water bowl", "yeast glass"], "Step 1: Activate Yeast in Warm Water", "(1. Adım: Mayayı Ilık Suda Aktifleştirin)"),
    ("public/images/steps/pizza-step-5.webp", ["tomato sauce pizza dough", "spreading tomato sauce pizza", "pizza sauce"], "Step 5: Spread Tomato Sauce Evenly", "(5. Adım: Domates Sosunu Eşit Şekilde Yayın)"),
    ("public/images/steps/pizza-step-6.webp", ["mozzarella pizza toppings", "adding cheese pizza", "pizza toppings"], "Step 6: Add Mozzarella and Toppings", "(6. Adım: Peynir ve Malzemeleri Ekleyin)"),
    ("public/images/steps/pizza-step-7.webp", ["pizza oven peel", "baking pizza oven", "wood fired pizza oven"], "Step 7: Bake at 220°C Until Golden", "(7. Adım: Fırında Nar Gibi Pişirin)"),

    # Menemen
    ("public/images/steps/menemen-step-3.webp", ["olive oil skillet", "melting butter skillet", "heating oil pan"], "Step 3: Heat Olive Oil or Melt Butter", "(3. Adım: Zeytinyağını veya Tereyağını Isıtın)"),
    ("public/images/steps/menemen-step-4.webp", ["sautéing peppers", "frying peppers pan", "cooking peppers"], "Step 4: Sauté Peppers Until Tender", "(4. Adım: Biberleri Yumuşayana Dek Soteleyin)"),
    ("public/images/steps/menemen-step-5.webp", ["cooking tomatoes skillet", "simmering tomatoes", "chopped tomatoes skillet"], "Step 5: Add Tomatoes and Simmer", "(5. Adım: Domatesleri Ekleyip Kısık Ateşte Pişirin)"),
    ("public/images/steps/menemen-step-6.webp", ["cracking egg frying pan", "cooking eggs pan", "scrambled eggs cooking pan"], "Step 6: Crack Eggs and Fold Gently", "(6. Adım: Yumurtaları Kırıp Nazikçe Karıştırın)"),

    # Kurabiye
    ("public/images/steps/kurabiye-step-1.webp", ["beating butter sugar", "creaming butter sugar", "butter sugar bowl"], "Step 1: Whisk Softened Butter and Sugar", "(1. Adım: Yumuşak Tereyağı ve Şekeri Çırpın)"),
    ("public/images/steps/kurabiye-step-3.webp", ["kneading cookie dough", "kneading pastry dough", "dough ball hands"], "Step 3: Knead into Smooth Dough Ball", "(3. Adım: Pürüzsüz Kurabiye Hamuru Yoğurun)"),
    ("public/images/steps/kurabiye-step-5.webp", ["cookie cutters dough", "biscuit cutters", "cutting cookies tray"], "Step 5: Cut Shapes with Cookie Cutters", "(5. Adım: Kurabiye Kalıplarıyla Şekil Verin)"),
    ("public/images/steps/kurabiye-step-7.webp", ["powdered sugar cookies", "icing sugar pastry", "cookies cooling rack"], "Step 7: Cool and Dust with Sugar", "(7. Adım: Soğutup Pudra Şekeri Serpin)"),

    # Baklava
    ("public/images/steps/baklava-step-1.webp", ["sugar syrup saucepan", "boiling syrup", "sugar water saucepan"], "Step 1: Prepare the Lemon Sugar Syrup", "(1. Adım: Limonlu Şeker Şerbetini Kaynatın)"),
    ("public/images/steps/baklava-step-3.webp", ["chopped pistachios bowl", "crushed walnuts pastry", "ground pistachios"], "Step 3: Spread Crushed Nuts Evenly", "(3. Adım: Çekilmiş Ceviz veya Fıstığı Yayın)"),
    ("public/images/steps/baklava-step-4.webp", ["cutting pastry knife", "slicing dough knife", "cutting baklava"], "Step 4: Slice into Diamond Shapes", "(4. Adım: Pişirmeden Önce Dilimleyin)"),
    ("public/images/steps/baklava-step-6.webp", ["pouring syrup ladle", "syrup baklava", "pouring honey pastry"], "Step 6: Pour Cold Syrup Over Hot Baklava", "(6. Adım: Sıcak Baklavaya Soğuk Şerbeti Dökün)"),

    # Smoothie
    ("public/images/steps/smoothie-step-2.webp", ["frozen berries bowl", "mixed berries bowl", "frozen blueberries"], "Step 2: Add Frozen Berries to Blender", "(2. Adım: Dondurulmuş Meyveleri Blendere Ekleyin)"),
    ("public/images/steps/smoothie-step-3.webp", ["pouring milk glass", "pouring yogurt", "milk measuring cup"], "Step 3: Pour in Milk or Yogurt", "(3. Adım: Süt veya Yoğurdu Blendere Dökün)"),
    ("public/images/steps/smoothie-step-4.webp", ["blender fruit smoothie", "blending smoothie", "smoothie blender kitchen"], "Step 4: Blend Until Smooth and Creamy", "(4. Adım: Pürüzsüz ve Kremamsı Olana Dek Çırpın)"),
    ("public/images/steps/smoothie-step-5.webp", ["berry smoothie glass straw", "strawberry smoothie glass", "fresh smoothie glass"], "Step 5: Pour into Glass and Garnish", "(5. Adım: Bardağa Doldurup Taze Süsleyin)"),

    # Kek
    ("public/images/steps/kek-step-1.webp", ["beating eggs sugar", "whisking eggs bowl", "mixer beating eggs"], "Step 1: Whisk Eggs and Sugar Until Frothy", "(1. Adım: Yumurta ve Şekeri Köpürene Dek Çırpın)"),
    ("public/images/steps/kek-step-5.webp", ["cake batter pan", "pouring cake batter", "cake tin batter"], "Step 5: Pour Batter into Cake Pan", "(5. Adım: Hamuru Yağlanmış Kek Kalıbına Dökün)"),

    # Omlet
    ("public/images/steps/omlet-step-1.webp", ["cracking eggs bowl", "breaking egg bowl", "raw eggs bowl"], "Step 1: Crack 2 Fresh Eggs into Bowl", "(1. Adım: 2 Taze Yumurtayı Kaseye Kırın)"),
    ("public/images/steps/omlet-step-2.webp", ["whisking eggs fork", "beaten eggs bowl", "whisk eggs bowl"], "Step 2: Beat Thoroughly with Salt and Pepper", "(2. Adım: Tuz ve Karabiberle İyice Çırpın)"),
    ("public/images/steps/omlet-step-3.webp", ["butter skillet stove", "melting butter frying pan", "butter pan"], "Step 3: Melt Butter in Non-Stick Skillet", "(3. Adım: Yapışmaz Tavada Tereyağını Eritin)"),
    ("public/images/steps/omlet-step-4.webp", ["pouring eggs frying pan", "cooking omelette pan", "omelette pan"], "Step 4: Pour Egg Mixture into Hot Pan", "(4. Adım: Yumurta Karışımını Sıcak Tavaya Dökün)"),
    ("public/images/steps/omlet-step-5.webp", ["folding omelette spatula", "omelette plate breakfast", "french omelette plate"], "Step 5: Fold in Half and Slide onto Plate", "(5. Adım: Spatulayla İkiye Katlayıp Servis Edin)"),

    # Pancake
    ("public/images/steps/pancake-step-3.webp", ["pancake batter bowl", "batter bowl whisk", "crepe batter bowl"], "Step 3: Rest Batter for 10 Minutes", "(3. Adım: Hamuru 10 Dakika Dinlendirin)"),
    ("public/images/steps/pancake-step-4.webp", ["pancake cooking griddle", "pouring pancake batter", "cooking pancakes pan"], "Step 4: Pour Batter onto Hot Pan", "(4. Adım: Hamuru Sıcak Tavaya Dökün)"),
    ("public/images/steps/pancake-step-5.webp", ["flipping pancake spatula", "pancake spatula pan", "golden pancake skillet"], "Step 5: Flip Pancake When Bubbles Appear", "(5. Adım: Kabarcıklar Oluşunca Pankeki Çevirin)"),
    ("public/images/steps/pancake-step-6.webp", ["pancakes maple syrup butter", "stack pancakes syrup", "pancakes plate berries"], "Step 6: Serve Pancakes with Honey or Syrup", "(6. Adım: Pankekleri Bal veya Şurupla Servis Edin)")
]

def main():
    print(f"Processing {len(STEPS_TO_FILL)} step photos with smart fallbacks...")
    for out_path, queries, title_en, title_tr in STEPS_TO_FILL:
        name = os.path.basename(out_path)
        print(f"\nProcessing {name}...")
        found = False
        for q in queries:
            print(f"  Trying query: '{q}'...")
            url = search_wikimedia(q)
            if url:
                print(f"  Found URL: {url[:70]}...")
                if download_and_brand(url, out_path, title_en, title_tr):
                    print(f"  ✓ Successfully branded: {name}")
                    found = True
                    break
        if not found:
            print(f"  ✗ WARNING: Could not find image for {name}")

if __name__ == "__main__":
    main()
