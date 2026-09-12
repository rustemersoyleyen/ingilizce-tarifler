"""
brand_recipe_images.py — Konuşarak Öğren Kurumsal Tarif Görseli Damgalama ve Optimizasyon Motoru

AGENTS.md Kural 3 Standardı:
1. Format: Web için optimize edilmiş gerçek .webp (kalite: 92)
2. Sağ Üst Köşe: Konuşarak Öğren kurumsal logo rozeti (public/ko-logo-yatay.png)
   - Beyaz yarı saydam yuvarlatılmış kart: rgba(255, 255, 255, 0.94), radius 10
3. Sol Alt Köşe: Çift satırlı iki dilli rozet
   - 1. Satır: Kalın beyaz Segoe UI font ile İngilizce Adı (Örn: "Pistachio Baklava Recipe")
   - 2. Satır: İtalik/gri tonda parantezli Türkçe Adı (Örn: "(Fıstıklı Baklava Tarifi)")
   - Zemin: Koyu lacivert yarı saydam cam rozet: rgba(15, 23, 42, 0.88), radius 10
4. Standart Ebatlar:
   - Hero Görselleri: 1200x675 (16:9 oran)
   - Çeşit / Bölüm Görselleri: 1200x800 (3:2 oran)

Kullanım:
  python scripts/brand_recipe_images.py --recipe smoothie
  python scripts/brand_recipe_images.py --recipe baklava
  python scripts/brand_recipe_images.py --recipe pancake
  python scripts/brand_recipe_images.py --all
"""

import os
import io
import sys
import re
import base64
import argparse
from PIL import Image, ImageDraw, ImageFont

# Windows konsolu için UTF-8 stdout desteği
try:
    if hasattr(sys.stdout, 'buffer') and getattr(sys.stdout, 'encoding', '').lower() != 'utf-8':
        sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')
except Exception:
    pass

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PUBLIC_DIR = os.path.join(BASE_DIR, "public")
IMAGES_DIR = os.path.join(PUBLIC_DIR, "images")
RAW_DIR = os.path.join(IMAGES_DIR, "raw")
LOGO_PATH = os.path.join(PUBLIC_DIR, "ko-logo-yatay.png")


def create_branded_image(input_img, title_text, output_path, target_size=(1200, 675), subtitle_text=None):
    """
    Tarif görselini kurumsal Konuşarak Öğren standartlarıyla damgalar ve WebP olarak kaydeder.
    """
    if isinstance(input_img, str):
        if not os.path.exists(input_img):
            raise FileNotFoundError(f"Giriş görseli bulunamadı: {input_img}")
        img = Image.open(input_img)
    else:
        img = input_img

    img = img.convert("RGBA")
    src_w, src_h = img.size
    target_w, target_h = target_size

    # 1. Cover fit ve merkez kırpma
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

    # 2. Sağ Üst Köşe: Konuşarak Öğren Logo Rozeti
    if os.path.exists(LOGO_PATH):
        logo = Image.open(LOGO_PATH).convert("RGBA")
        logo_target_w = 170
        logo_target_h = int(logo.height * (logo_target_w / logo.width))
        logo = logo.resize((logo_target_w, logo_target_h), Image.Resampling.LANCZOS)

        pad_x, pad_y = 14, 8
        badge_w = logo_target_w + pad_x * 2
        badge_h = logo_target_h + pad_y * 2

        badge = Image.new("RGBA", (badge_w, badge_h), (0, 0, 0, 0))
        draw_badge = ImageDraw.Draw(badge)
        draw_badge.rounded_rectangle(
            [(0, 0), (badge_w - 1, badge_h - 1)],
            radius=10,
            fill=(255, 255, 255, 240),
            outline=(255, 255, 255, 255),
            width=1
        )
        badge.paste(logo, (pad_x, pad_y), logo)

        margin = 24
        badge_x = target_w - badge_w - margin
        badge_y = margin
        canvas.paste(badge, (badge_x, badge_y), badge)

    # 3. Sol Alt Köşe: İki Dilli Başlık Rozeti (İngilizce Başlık + Parantezli Türkçe Açıklama)
    font_main = None
    font_sub = None
    for font_name in ["segoeuib.ttf", "arialbd.ttf"]:
        try:
            font_main = ImageFont.truetype(font_name, 22)
            break
        except Exception:
            continue
    for font_name in ["segoeui.ttf", "arial.ttf"]:
        try:
            font_sub = ImageFont.truetype(font_name, 17)
            break
        except Exception:
            continue
    if font_main is None:
        font_main = ImageFont.load_default()
    if font_sub is None:
        font_sub = font_main

    dummy_draw = ImageDraw.Draw(canvas)
    bbox_main = dummy_draw.textbbox((0, 0), title_text, font=font_main)
    w_main = bbox_main[2] - bbox_main[0]
    h_main = bbox_main[3] - bbox_main[1]

    if subtitle_text:
        sub_formatted = f"({subtitle_text.strip('()')})"
        bbox_sub = dummy_draw.textbbox((0, 0), sub_formatted, font=font_sub)
        w_sub = bbox_sub[2] - bbox_sub[0]
        h_sub = bbox_sub[3] - bbox_sub[1]
        t_badge_w = max(w_main, w_sub) + 36
        t_badge_h = h_main + h_sub + 26
    else:
        sub_formatted = None
        t_badge_w = w_main + 32
        t_badge_h = h_main + 20

    t_pad_x = 18
    t_pad_y = 10

    title_badge = Image.new("RGBA", (t_badge_w, t_badge_h), (0, 0, 0, 0))
    draw_tbadge = ImageDraw.Draw(title_badge)
    draw_tbadge.rounded_rectangle(
        [(0, 0), (t_badge_w - 1, t_badge_h - 1)],
        radius=10,
        fill=(15, 23, 42, 225),
        outline=(255, 255, 255, 70),
        width=1
    )
    draw_tbadge.text((t_pad_x, t_pad_y), title_text, font=font_main, fill=(255, 255, 255, 255))
    if sub_formatted:
        draw_tbadge.text((t_pad_x, t_pad_y + h_main + 6), sub_formatted, font=font_sub, fill=(203, 213, 225, 255))

    t_badge_x = 24
    t_badge_y = target_h - t_badge_h - 24
    canvas.paste(title_badge, (t_badge_x, t_badge_y), title_badge)

    # 4. Yüksek Kaliteli WebP Olarak Kaydet (92 kalite)
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    canvas.convert("RGB").save(output_path, "WEBP", quality=92, method=6)
    print(f"✓ Damgalandı: {os.path.basename(output_path)} ({target_w}x{target_h}) -> {title_text}")


def get_source_path(filename_candidates):
    """
    Aday dosya adları arasından önce RAW dizininde, yoksa IMAGES dizininde ilk var olanı döner.
    """
    for candidate in filename_candidates:
        p_raw = os.path.join(RAW_DIR, candidate)
        if os.path.exists(p_raw):
            return p_raw
        p_img = os.path.join(IMAGES_DIR, candidate)
        if os.path.exists(p_img):
            return p_img
    return None


def process_baklava():
    print("\n--- BAKLAVA GÖRSELLERİ İŞLENİYOR ---")
    items = [
        {
            "src": ["baklava-hero.jpg", "baklava-hero.webp"],
            "out": "baklava-hero.webp",
            "size": (1200, 675),
            "title": "Traditional Turkish Baklava Recipe",
            "subtitle": "Geleneksel Ev Yapımı Baklava Tarifi"
        },
        {
            "src": ["baklava-fistikli.jpg", "baklava-fistikli.webp"],
            "out": "baklava-fistikli.webp",
            "size": (1200, 800),
            "title": "Pistachio Baklava Recipe",
            "subtitle": "Fıstıklı Baklava Tarifi"
        },
        {
            "src": ["baklava-cevizli.jpg", "baklava-cevizli.webp"],
            "out": "baklava-cevizli.webp",
            "size": (1200, 800),
            "title": "Walnut Baklava Recipe",
            "subtitle": "Cevizli Baklava Tarifi"
        },
        {
            "src": ["baklava-hazir-yufka.jpg", "baklava-hazir-yufka.webp"],
            "out": "baklava-hazir-yufka.webp",
            "size": (1200, 800),
            "title": "Ready Phyllo Baklava Recipe",
            "subtitle": "Hazır Yufkadan Baklava Tarifi"
        }
    ]
    for item in items:
        src_path = get_source_path(item["src"])
        if src_path:
            out_path = os.path.join(IMAGES_DIR, item["out"])
            create_branded_image(src_path, item["title"], out_path, item["size"], subtitle_text=item["subtitle"])
        else:
            print(f"! Kaynak bulunamadı: {item['src']}")


def process_smoothie():
    print("\n--- SMOOTHIE GÖRSELLERİ İŞLENİYOR ---")
    items = [
        {
            "src": ["smoothie-hero.jpg", "smoothie-banana.jpg", "smoothie-hero.webp"],
            "out": "smoothie-hero.webp",
            "size": (1200, 675),
            "title": "Creamy Banana Smoothie Recipe",
            "subtitle": "Muzlu Smoothie Tarifi"
        },
        {
            "src": ["smoothie-cilekli.jpg", "smoothie-strawberry.jpg", "smoothie-cilekli.webp"],
            "out": "smoothie-cilekli.webp",
            "size": (1200, 800),
            "title": "Strawberry Smoothie Recipe",
            "subtitle": "Çilekli Smoothie Tarifi"
        },
        {
            "src": ["smoothie-yesil.jpg", "smoothie-green.jpg", "smoothie-yesil.webp"],
            "out": "smoothie-yesil.webp",
            "size": (1200, 800),
            "title": "Green Detox Smoothie Recipe",
            "subtitle": "Yeşil Detoks Smoothie Tarifi"
        },
        {
            "src": ["smoothie-protein.jpg", "smoothie-protein.webp"],
            "out": "smoothie-protein.webp",
            "size": (1200, 800),
            "title": "Post-Workout Protein Smoothie Recipe",
            "subtitle": "Proteinli Smoothie Tarifi"
        }
    ]
    for item in items:
        src_path = get_source_path(item["src"])
        if src_path:
            out_path = os.path.join(IMAGES_DIR, item["out"])
            create_branded_image(src_path, item["title"], out_path, item["size"], subtitle_text=item["subtitle"])
        else:
            print(f"! Kaynak bulunamadı: {item['src']}")


def process_pancake():
    print("\n--- PANKEK GÖRSELLERİ İŞLENİYOR ---")
    items = [
        {
            "src": ["pancake-hero.jpg", "pancake-fluffy.jpg", "pancake-hero.webp", "pancake-fluffy.webp"],
            "out": "pancake-hero.webp",
            "size": (1200, 675),
            "title": "Classic Fluffy Pancake Recipe",
            "subtitle": "Pofuduk Klasik Pankek Tarifi"
        },
        {
            "src": ["pancake-fluffy.jpg", "pancake-hero.jpg", "pancake-fluffy.webp"],
            "out": "pancake-fluffy.webp",
            "size": (1200, 800),
            "title": "Classic Fluffy Pancake Recipe",
            "subtitle": "Pofuduk Klasik Pankek Tarifi"
        },
        {
            "src": ["pancake-chocolate.jpg", "pancake-chocolate.webp"],
            "out": "pancake-chocolate.webp",
            "size": (1200, 800),
            "title": "Chocolate Chip Pancake Recipe",
            "subtitle": "Damla Çikolatalı Pankek Tarifi"
        },
        {
            "src": ["pancake-banana.jpg", "pancake-banana.webp"],
            "out": "pancake-banana.webp",
            "size": (1200, 800),
            "title": "Banana Oat Pancake Recipe",
            "subtitle": "Muzlu ve Yulaflı Pankek Tarifi"
        },
        {
            "src": ["pancake-blueberry.jpg", "pancake-blueberry.webp"],
            "out": "pancake-blueberry.webp",
            "size": (1200, 800),
            "title": "Blueberry Buttermilk Pancake Recipe",
            "subtitle": "Yaban Mersinli Pankek Tarifi"
        }
    ]
    for item in items:
        src_path = get_source_path(item["src"])
        if src_path:
            out_path = os.path.join(IMAGES_DIR, item["out"])
            create_branded_image(src_path, item["title"], out_path, item["size"], subtitle_text=item["subtitle"])
        else:
            print(f"! Kaynak bulunamadı: {item['src']}")


def process_menemen():
    print("\n--- MENEMEN GÖRSELLERİ İŞLENİYOR ---")
    brain_dir = r'C:\Users\konusarak\.gemini\antigravity-ide\brain\c64930a3-296b-4d37-ae52-1a79c2f7bcf9'
    hero_raw = os.path.join(brain_dir, 'menemen_hero_1788460293093.jpg')
    classic_raw = os.path.join(brain_dir, 'menemen_classic_1788460310533.jpg')
    cheese_raw = os.path.join(brain_dir, 'menemen_cheese_1788460326072.jpg')

    if os.path.exists(hero_raw):
        create_branded_image(hero_raw, "Classic Menemen Recipe", os.path.join(IMAGES_DIR, "menemen-hero.webp"), (1200, 675), subtitle_text="Klasik Menemen Tarifi")
    if os.path.exists(classic_raw):
        create_branded_image(classic_raw, "Classic Menemen Recipe", os.path.join(IMAGES_DIR, "menemen-classic.webp"), (1200, 800), subtitle_text="Klasik Menemen Tarifi")
    if os.path.exists(cheese_raw):
        create_branded_image(cheese_raw, "Menemen with Cheese Recipe", os.path.join(IMAGES_DIR, "menemen-cheese.webp"), (1200, 800), subtitle_text="Peynirli Menemen Tarifi")

    html_path = os.path.join(BASE_DIR, "docs", "İngilizce Menemen Tarifi (Menemen Yapılışı İngilizce) _ Konuşarak Öğren.html")
    if os.path.exists(html_path):
        with open(html_path, 'r', encoding='utf-8') as f:
            html = f.read()
        matches = re.findall(r'src="data:image/(?:jpeg|png|webp);base64,([^"]+)"', html)
        if len(matches) >= 5:
            onion_bytes = base64.b64decode(matches[2])
            onion_img = Image.open(io.BytesIO(onion_bytes))
            create_branded_image(onion_img, "Menemen with Onion Recipe", os.path.join(IMAGES_DIR, "menemen-onion.webp"), (1200, 800), subtitle_text="Soğanlı Menemen Tarifi")

            sujuk_bytes = base64.b64decode(matches[4])
            sujuk_img = Image.open(io.BytesIO(sujuk_bytes))
            create_branded_image(sujuk_img, "Menemen with Sujuk Recipe", os.path.join(IMAGES_DIR, "menemen-sujuk.webp"), (1200, 800), subtitle_text="Sucuklu Menemen Tarifi")


def process_pizza():
    print("\n--- PIZZA GÖRSELLERİ İŞLENİYOR ---")
    brain_dir = r'C:\Users\konusarak\.gemini\antigravity-ide\brain\c64930a3-296b-4d37-ae52-1a79c2f7bcf9'
    hero_raw = os.path.join(brain_dir, 'pizza_hero_raw_1788696122251.jpg')
    dough_raw = os.path.join(brain_dir, 'pizza_dough_raw_1788696137098.jpg')
    margherita_raw = os.path.join(brain_dir, 'pizza_margherita_raw_1788696154090.jpg')

    if os.path.exists(hero_raw):
        create_branded_image(hero_raw, "Homemade Italian Pizza Recipe", os.path.join(IMAGES_DIR, "pizza-hero.webp"), (1200, 675), subtitle_text="Ev Yapımı İtalyan Pizzası Tarifi")
    if os.path.exists(dough_raw):
        create_branded_image(dough_raw, "Homemade Pizza Dough Recipe", os.path.join(IMAGES_DIR, "pizza-dough.webp"), (1200, 800), subtitle_text="Ev Yapımı Pizza Hamuru Tarifi")
    if os.path.exists(margherita_raw):
        create_branded_image(margherita_raw, "Classic Margherita Pizza Recipe", os.path.join(IMAGES_DIR, "pizza-margherita.webp"), (1200, 800), subtitle_text="Klasik Margarita Pizza Tarifi")

    if os.path.exists(hero_raw):
        img = Image.open(hero_raw)
        w, h = img.size
        crop_box = (int(w * 0.15), int(h * 0.25), int(w * 0.85), int(h * 0.95))
        cropped = img.crop(crop_box)
        create_branded_image(cropped, "Supreme Pizza Recipe", os.path.join(IMAGES_DIR, "pizza-supreme.webp"), (1200, 800), subtitle_text="Karışık Pizza Tarifi")

    if os.path.exists(margherita_raw):
        img = Image.open(margherita_raw)
        w, h = img.size
        crop_box = (int(w * 0.1), int(h * 0.2), int(w * 0.9), int(h * 0.95))
        cropped = img.crop(crop_box)
        create_branded_image(cropped, "Crispy Pan Pizza Recipe", os.path.join(IMAGES_DIR, "pizza-pan.webp"), (1200, 800), subtitle_text="Çıtır Tavada Pizza Tarifi")


def process_kurabiye():
    print("\n--- KURABİYE GÖRSELLERİ İŞLENİYOR ---")
    items = [
        {
            "src": ["kurabiye-hero.jpg", "kurabiye-hero.webp"],
            "out": "kurabiye-hero.webp",
            "size": (1200, 675),
            "title": "Classic Butter Cookies Recipe",
            "subtitle": "Geleneksel Tereyağlı Kurabiye Tarifi"
        },
        {
            "src": ["kurabiye-butter.jpg", "kurabiye-butter.webp"],
            "out": "kurabiye-butter.webp",
            "size": (1200, 800),
            "title": "Classic Butter Cookies Recipe",
            "subtitle": "Klasik Tereyağlı Kurabiye Tarifi"
        },
        {
            "src": ["kurabiye-chocolate-chip.jpg", "kurabiye-chocolate-chip.webp"],
            "out": "kurabiye-chocolate-chip.webp",
            "size": (1200, 800),
            "title": "Chocolate Chip Cookie Recipe",
            "subtitle": "Damla Çikolatalı Kurabiye Tarifi"
        },
        {
            "src": ["kurabiye-oatmeal.jpg", "kurabiye-oatmeal.webp"],
            "out": "kurabiye-oatmeal.webp",
            "size": (1200, 800),
            "title": "Oatmeal Cookie Recipe",
            "subtitle": "Yulaflı Kurabiye Tarifi"
        },
        {
            "src": ["kurabiye-gingerbread.jpg", "kurabiye-gingerbread.webp"],
            "out": "kurabiye-gingerbread.webp",
            "size": (1200, 800),
            "title": "Gingerbread Cookie Recipe",
            "subtitle": "Zencefilli Kurabiye Tarifi"
        }
    ]
    for item in items:
        src_path = get_source_path(item["src"])
        if src_path:
            out_path = os.path.join(IMAGES_DIR, item["out"])
            create_branded_image(src_path, item["title"], out_path, item["size"], subtitle_text=item["subtitle"])
        else:
            print(f"! Kaynak bulunamadı: {item['src']}")


REGISTRY = {
    "baklava": process_baklava,
    "smoothie": process_smoothie,
    "pancake": process_pancake,
    "menemen": process_menemen,
    "pizza": process_pizza,
    "kurabiye": process_kurabiye
}


def main():
    parser = argparse.ArgumentParser(description="Konuşarak Öğren Tarif Görselleri Damgalama Motoru")
    parser.add_argument("--recipe", choices=list(REGISTRY.keys()), help="Belirli bir tarifin görsellerini işle")
    parser.add_argument("--all", action="store_true", help="Tüm tarif görsellerini işle")
    parser.add_argument("--input", help="Tekil giriş görseli yolu")
    parser.add_argument("--output", help="Tekil çıkış görseli yolu (.webp)")
    parser.add_argument("--title", help="Tekil görsel İngilizce başlığı")
    parser.add_argument("--subtitle", help="Tekil görsel Türkçe alt başlığı")
    parser.add_argument("--size", default="1200x675", help="Görsel ebatı (örn: 1200x675 veya 1200x800)")

    args = parser.parse_args()

    if args.input and args.output and args.title:
        w, h = map(int, args.size.lower().split("x"))
        create_branded_image(args.input, args.title, args.output, target_size=(w, h), subtitle_text=args.subtitle)
        return

    if args.recipe:
        REGISTRY[args.recipe]()
    elif args.all:
        for r_name, r_func in REGISTRY.items():
            r_func()
    else:
        # Varsayılan: yeni eklenenleri işle
        process_baklava()
        process_smoothie()
        process_pancake()


if __name__ == "__main__":
    main()
