# source_action_step_images.py
import urllib.request
import urllib.parse
import json
import os
import sys
from PIL import Image

sys.path.append(os.path.join(os.path.dirname(__file__)))
from brand_recipe_images import create_branded_image

HEADERS = {'User-Agent': 'KonusarakOgrenRecipeBot/1.0 (https://konusarakogren.com; editor@konusarakogren.com)'}

def get_wikimedia_action_image(query, fallback_title=None):
    """Searches Wikimedia Commons for an action photo matching the culinary query."""
    import time
    time.sleep(1.1)
    search_url = f"https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch={urllib.parse.quote(query)}&srnamespace=6&format=json"
    req = urllib.request.Request(search_url, headers=HEADERS)
    try:
        with urllib.request.urlopen(req, timeout=12) as resp:
            data = json.loads(resp.read().decode('utf-8'))
            results = data.get('query', {}).get('search', [])
            if not results:
                print(f"No results for query '{query}'")
                return None
            title = results[0]['title']
            
            time.sleep(1.1)
            # Fetch direct URL
            info_url = f"https://commons.wikimedia.org/w/api.php?action=query&titles={urllib.parse.quote(title)}&prop=imageinfo&iiprop=url&format=json"
            info_req = urllib.request.Request(info_url, headers=HEADERS)
            with urllib.request.urlopen(info_req, timeout=12) as info_resp:
                info_data = json.loads(info_resp.read().decode('utf-8'))
                pages = info_data.get('query', {}).get('pages', {})
                for p in pages.values():
                    img_info = p.get('imageinfo', [])
                    if img_info:
                        return img_info[0]['url']
    except Exception as e:
        print(f"Error fetching '{query}': {e}")
    return None

def download_and_brand(img_url, out_path, title_en, title_tr, temp_filename="temp_step.jpg"):
    if not img_url:
        return False
    try:
        req = urllib.request.Request(img_url, headers=HEADERS)
        with urllib.request.urlopen(req, timeout=15) as resp:
            data = resp.read()
        with open(temp_filename, "wb") as f:
            f.write(data)
        
        create_branded_image(temp_filename, title_en, out_path, target_size=(800, 600), subtitle_text=title_tr)
        if os.path.exists(temp_filename):
            os.remove(temp_filename)
        return True
    except Exception as e:
        print(f"Failed to download/brand {out_path}: {e}")
        return False

# Plan of steps to source
STEPS_PLAN = {
    # 1. PANKEK (6 steps)
    "pancake": [
        ("mixing eggs bowl whisk kitchen", "Step 1: Whisk the Eggs, Milk and Sugar", "(1. Adım: Yumurtaları, Sütü ve Şekeri Çırpın)"),
        ("sifting flour baking powder bowl", "Step 2: Add the Flour and Baking Powder", "(2. Adım: Unu ve Kabartma Tozunu Ekleyin)"),
        ("pancake batter bowl resting kitchen", "Step 3: Rest the Batter for 10 Minutes", "(3. Adım: Hamuru 10 Dakika Dinlendirin)"),
        ("pouring batter frying pan skillet", "Step 4: Pour the Batter onto a Hot Pan", "(4. Adım: Hamuru Sıcak Tavaya Dökün)"),
        ("flipping pancake spatula pan", "Step 5: Flip the Pancake When Bubbles Appear", "(5. Adım: Kabarcıklar Oluşunca Pankeki Çevirin)"),
        ("pancakes maple syrup honey butter stack", "Step 6: Serve the Pancakes with Honey or Syrup", "(6. Adım: Pankekleri Bal veya Şurupla Servis Edin)")
    ],
    # 2. PIZZA (7 steps)
    "pizza": [
        ("yeast warm water cup measuring", "Step 1: Activate the Yeast in Warm Water", "(1. Adım: Mayayı Ilık Suda Aktifleştirin)"),
        ("kneading pizza dough floured counter hands", "Step 2: Knead the Dough into a Smooth Ball", "(2. Adım: Hamuru Pürüzsüz Bir Top Haline Yoğurun)"),
        ("dough rising covered bowl cloth", "Step 3: Let the Dough Rise in a Warm Place", "(3. Adım: Hamuru Ilık Bir Yerde Mayalandırın)"),
        ("rolling pizza dough rolling pin", "Step 4: Roll Out and Shape the Dough", "(4. Adım: Hamuru Merdaneyle Açın ve Şekillendirin)"),
        ("spreading tomato sauce pizza dough ladle", "Step 5: Spread the Tomato Sauce Evenly", "(5. Adım: Domates Sosunu Eşit Şekilde Yayın)"),
        ("topping pizza mozzarella basil cheese", "Step 6: Add Mozzarella and Toppings", "(6. Adım: Mozzarella ve Malzemeleri Ekleyin)"),
        ("baking pizza oven peel golden", "Step 7: Bake at 220°C Until Crust Is Golden", "(7. Adım: 220°C Fırında Altın Sarısı Pişirin)")
    ],
    # 3. MENEMEN (6 steps)
    "menemen": [
        ("chopping green peppers cutting board knife", "Step 1: Chop the Green Peppers", "(1. Adım: Yeşil Biberleri İnce İnce Doğrayın)"),
        ("dicing tomatoes cutting board knife", "Step 2: Dice the Fresh Tomatoes", "(2. Adım: Taze Domatesleri Küp Küp Doğrayın)"),
        ("melting butter skillet copper pan", "Step 3: Melt Butter or Heat Olive Oil", "(3. Adım: Tereyağını veya Zeytinyağını Isıtın)"),
        ("sautéing peppers wooden spoon pan", "Step 4: Sauté the Peppers Until Tender", "(4. Adım: Biberleri Yumuşayana Kadar Soteleyin)"),
        ("cooking tomatoes skillet simmering", "Step 5: Add Tomatoes and Simmer Gently", "(5. Adım: Domatesleri Ekleyip Kısık Ateşte Pişirin)"),
        ("cracking eggs skillet folding menemen", "Step 6: Crack Eggs and Fold Gently", "(6. Adım: Yumurtaları Kırıp Nazikçe Karıştırın)")
    ],
    # 4. KURABIYE (7 steps)
    "kurabiye": [
        ("beating butter powdered sugar bowl whisk", "Step 1: Whisk the Softened Butter and Sugar", "(1. Adım: Yumuşak Tereyağı ve Şekeri Çırpın)"),
        ("sifting flour vanilla bowl sieve", "Step 2: Sift the Flour and Vanilla", "(2. Adım: Unu ve Vanilyayı Eleğe Ekleyin)"),
        ("kneading cookie dough ball hands", "Step 3: Knead into a Smooth Cookie Dough", "(3. Adım: Pürüzsüz Bir Kurabiye Hamuru Yoğurun)"),
        ("rolling cookie dough rolling pin parchment", "Step 4: Roll the Dough to 5 mm Thickness", "(4. Adım: Hamuru 5 mm Kalınlığında Açın)"),
        ("cutting cookie shapes cutter baking sheet", "Step 5: Cut into Shapes with Cookie Cutters", "(5. Adım: Kurabiye Kalıplarıyla Şekil Verin)"),
        ("baking tray cookies oven golden", "Step 6: Bake in Preheated Oven at 170°C", "(6. Adım: 170°C Fırında 15 Dakika Pişirin)"),
        ("cookies cooling rack powdered sugar plate", "Step 7: Cool Completely and Dust with Sugar", "(7. Adım: Tamamen Soğutup Pudra Şekeri Serpin)")
    ],
    # 5. BAKLAVA (6 steps)
    "baklava": [
        ("boiling sugar syrup saucepan lemon stove", "Step 1: Prepare the Lemon Sugar Syrup", "(1. Adım: Limonlu Şeker Şerbetini Kaynatın)"),
        ("brushing melted butter phyllo pastry brush", "Step 2: Layer and Brush Phyllo Sheets with Butter", "(2. Adım: Yufkaları Dizip Tereyağı ile Yağlayın)"),
        ("sprinkling crushed pistachios walnuts pastry", "Step 3: Spread Crushed Pistachios or Walnuts", "(3. Adım: Çekilmiş Fıstık veya Cevizi Eşit Yayın)"),
        ("slicing baklava diamond shapes sharp knife", "Step 4: Slice into Diamond Shapes Before Baking", "(4. Adım: Pişirmeden Önce Baklava Dilimi Kesin)"),
        ("baking tray baklava oven golden brown", "Step 5: Bake at 170°C Until Deep Golden", "(5. Adım: 170°C Fırında Nar Gibi Kızarana Dek Pişirin)"),
        ("pouring cold syrup hot baklava ladle", "Step 6: Pour Cold Syrup Over Hot Baklava", "(6. Adım: Sıcak Baklavaya Soğuk Şerbeti Dökün)")
    ],
    # 6. SMOOTHIE (5 steps)
    "smoothie": [
        ("peeling slicing fresh banana board knife", "Step 1: Peel and Slice the Fresh Banana", "(1. Adım: Taze Muzu Soyun ve Dilimleyin)"),
        ("frozen berries spinach blender jar", "Step 2: Add Frozen Berries and Greens to Blender", "(2. Adım: Dondurulmuş Meyveleri Blendere Ekleyin)"),
        ("pouring milk yogurt blender pitcher", "Step 3: Pour in Milk, Yogurt or Plant Milk", "(3. Adım: Süt veya Yoğurdu Blendere Dökün)"),
        ("blending smoothie high speed vortex pitcher", "Step 4: Blend on High Speed Until Creamy", "(4. Adım: Pürüzsüz ve Kremamsı Olana Dek Çırpın)"),
        ("pouring smoothie tall glass garnish straw", "Step 5: Pour into Glass and Garnish Freshly", "(5. Adım: Bardağa Doldurup Taze Süsleyin)")
    ],
    # 7. KEK (6 steps)
    "kek": [
        ("whisking eggs sugar bowl electric mixer", "Step 1: Whisk Eggs and Sugar Until Frothy", "(1. Adım: Yumurta ve Şekeri Köpürene Dek Çırpın)"),
        ("pouring milk vegetable oil mixing bowl", "Step 2: Pour in the Milk and Vegetable Oil", "(2. Adım: Süt ve Sıvı Yağı Kaseye Ekleyin)"),
        ("sifting flour baking powder sieve bowl", "Step 3: Sift in the Flour and Baking Powder", "(3. Adım: Unu ve Kabartma Tozunu Eleyin)"),
        ("folding cake batter silicone spatula", "Step 4: Fold the Batter Gently with Spatula", "(4. Adım: Silikon Spatulayla Nazikçe Havalandırın)"),
        ("pouring batter greased cake pan bundt", "Step 5: Pour the Batter into Prepared Cake Pan", "(5. Adım: Hamuru Yağlanmış Kek Kalıbına Dökün)"),
        ("baking cake oven golden crust toothpick", "Step 6: Bake at 180°C for 40 Minutes", "(6. Adım: 180°C Fırında 40 Dakika Pişirin)")
    ],
    # 8. OMLET (5 steps)
    "omlet": [
        ("cracking fresh eggs clean bowl hands", "Step 1: Crack 2 Fresh Eggs into a Bowl", "(1. Adım: 2 Taze Yumurtayı Kaseye Kırın)"),
        ("whisking eggs salt black pepper fork bowl", "Step 2: Beat Thoroughly with Salt and Pepper", "(2. Adım: Tuz ve Karabiberle İyice Çırpın)"),
        ("melting butter non stick frying pan stove", "Step 3: Melt Butter in a Non-Stick Pan", "(3. Adım: Yapışmaz Tavada Tereyağını Eritin)"),
        ("pouring beaten eggs hot skillet sizzling", "Step 4: Pour Egg Mixture into the Skillet", "(4. Adım: Yumurta Karışımını Sıcak Tavaya Dökün)"),
        ("folding omelette spatula half serving plate", "Step 5: Fold in Half and Slide onto Plate", "(5. Adım: Spatulayla İkiye Katlayıp Tabağa Alın)")
    ]
}

def main():
    print("Starting action step images sourcing & branding...")
    os.makedirs("public/images/steps", exist_ok=True)
    
    for recipe, steps in STEPS_PLAN.items():
        print(f"\n=== Processing {recipe.upper()} steps ===")
        for idx, (query, title_en, title_tr) in enumerate(steps, 1):
            out_file = f"public/images/steps/{recipe}-step-{idx}.webp"
            print(f"[{recipe} Step {idx}] Searching: '{query}'...")
            img_url = get_wikimedia_action_image(query)
            if img_url:
                success = download_and_brand(img_url, out_file, title_en, title_tr, f"temp_{recipe}_{idx}.jpg")
                if success:
                    print(f"  ✓ Sourced & branded: {out_file}")
                else:
                    print(f"  ✗ Failed to brand {out_file}")
            else:
                print(f"  ✗ Could not find image for '{query}'")

if __name__ == "__main__":
    main()
