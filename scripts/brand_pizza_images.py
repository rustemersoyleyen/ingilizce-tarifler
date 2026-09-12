import os
import io
import sys
try:
    if hasattr(sys.stdout, 'buffer') and getattr(sys.stdout, 'encoding', '').lower() != 'utf-8':
        sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')
except Exception:
    pass
from PIL import Image
from brand_recipe_images import create_branded_image

def process_pizza_images():
    output_dir = r'd:\Otomasyonlar\İngilizce Tarifler\public\images'
    brain_dir = r'C:\Users\konusarak\.gemini\antigravity-ide\brain\c64930a3-296b-4d37-ae52-1a79c2f7bcf9'
    
    hero_raw = os.path.join(brain_dir, 'pizza_hero_raw_1788696122251.jpg')
    dough_raw = os.path.join(brain_dir, 'pizza_dough_raw_1788696137098.jpg')
    margherita_raw = os.path.join(brain_dir, 'pizza_margherita_raw_1788696154090.jpg')
    
    # 1. Hero
    if os.path.exists(hero_raw):
        img = Image.open(hero_raw)
        create_branded_image(img, "Homemade Italian Pizza Recipe", os.path.join(output_dir, "pizza-hero.webp"), (1200, 675), subtitle_text="Ev Yapımı İtalyan Pizzası Tarifi")

    # 2. Pizza Dough
    if os.path.exists(dough_raw):
        img = Image.open(dough_raw)
        create_branded_image(img, "Homemade Pizza Dough Recipe", os.path.join(output_dir, "pizza-dough.webp"), (1200, 800), subtitle_text="Ev Yapımı Pizza Hamuru Tarifi")
        
    # 3. Margherita Pizza
    if os.path.exists(margherita_raw):
        img = Image.open(margherita_raw)
        create_branded_image(img, "Classic Margherita Pizza Recipe", os.path.join(output_dir, "pizza-margherita.webp"), (1200, 800), subtitle_text="Klasik Margarita Pizza Tarifi")
        
    # 4. Supreme Pizza (Hero crop with focus on toppings)
    if os.path.exists(hero_raw):
        img = Image.open(hero_raw)
        w, h = img.size
        crop_box = (int(w * 0.15), int(h * 0.25), int(w * 0.85), int(h * 0.95))
        cropped = img.crop(crop_box)
        create_branded_image(cropped, "Supreme Pizza Recipe", os.path.join(output_dir, "pizza-supreme.webp"), (1200, 800), subtitle_text="Karışık Pizza Tarifi")

    # 5. Pan Pizza (Crispy pan / peel focus)
    if os.path.exists(margherita_raw):
        img = Image.open(margherita_raw)
        w, h = img.size
        crop_box = (int(w * 0.1), int(h * 0.2), int(w * 0.9), int(h * 0.95))
        cropped = img.crop(crop_box)
        create_branded_image(cropped, "Crispy Pan Pizza Recipe", os.path.join(output_dir, "pizza-pan.webp"), (1200, 800), subtitle_text="Çıtır Tavada Pizza Tarifi")

if __name__ == "__main__":
    process_pizza_images()
