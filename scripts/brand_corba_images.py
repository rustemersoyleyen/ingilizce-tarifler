import os
import shutil
import sys
from PIL import Image, ImageDraw, ImageFont

sys.stdout.reconfigure(encoding="utf-8")

BASE_DIR = r"d:\Otomasyonlar\İngilizce Tarifler"
brain_dir = r"C:\Users\konusarak\.gemini\antigravity-ide\brain\bd26e41b-278d-44a5-bdcf-2821fac098fe"
public_images = os.path.join(BASE_DIR, "public", "images")
raw_dir = os.path.join(public_images, "raw")
steps_dir = os.path.join(public_images, "steps")
logo_path = os.path.join(BASE_DIR, "public", "ko-logo-yatay.png")

os.makedirs(raw_dir, exist_ok=True)
os.makedirs(steps_dir, exist_ok=True)

# Copy source images to raw_dir
raw_map = {
    "corba-hero.jpg": os.path.join(brain_dir, "corba_hero_1790859023513.jpg"),
    "corba-mercimek.jpg": os.path.join(brain_dir, "corba_mercimek_1790859042092.jpg"),
    "corba-domates.jpg": os.path.join(brain_dir, "corba_domates_1790859063000.jpg"),
    "corba-tavuk.jpg": os.path.join(BASE_DIR, "scratch", "test_chicken.jpg"),
    "corba-yayla.jpg": os.path.join(BASE_DIR, "scratch", "test_yayla.jpg"),
    "corba-step-1.jpg": os.path.join(BASE_DIR, "scratch", "test_step1.jpg"),
    "corba-step-2.jpg": os.path.join(BASE_DIR, "scratch", "test_step2.jpg"),
    "corba-step-3.jpg": os.path.join(BASE_DIR, "scratch", "test_step3.jpg"),
    "corba-step-4.jpg": os.path.join(BASE_DIR, "scratch", "test_step4.jpg"),
    "corba-step-5.jpg": os.path.join(BASE_DIR, "scratch", "test_step5.jpg"),
    "corba-step-6.jpg": os.path.join(BASE_DIR, "scratch", "test_step6.jpg"),
}

for name, src in raw_map.items():
    if os.path.exists(src):
        dst = os.path.join(raw_dir, name)
        shutil.copy2(src, dst)
        print(f"Copied {name} to raw/")
    else:
        print(f"Warning: Source not found: {src}")

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
brand_image(os.path.join(raw_dir, "corba-hero.jpg"), os.path.join(public_images, "corba-hero.webp"), "Turkish Soup Recipe", "(Geleneksel Türk Çorba Tarifleri)", (1200, 675))
brand_image(os.path.join(raw_dir, "corba-mercimek.jpg"), os.path.join(public_images, "corba-mercimek.webp"), "Red Lentil Soup Recipe", "(Kırmızı Mercimek Çorbası Tarifi)", (1200, 800))
brand_image(os.path.join(raw_dir, "corba-domates.jpg"), os.path.join(public_images, "corba-domates.webp"), "Creamy Tomato Soup Recipe", "(Kremalı Domates Çorbası Tarifi)", (1200, 800))
brand_image(os.path.join(raw_dir, "corba-tavuk.jpg"), os.path.join(public_images, "corba-tavuk.webp"), "Chicken Noodle Soup Recipe", "(Tavuklu Şehriye Çorbası Tarifi)", (1200, 800))
brand_image(os.path.join(raw_dir, "corba-yayla.jpg"), os.path.join(public_images, "corba-yayla.webp"), "Turkish Yogurt Soup Recipe", "(Geleneksel Yayla Çorbası Tarifi)", (1200, 800))

# Steps
steps_data = [
    ("corba-step-1.jpg", "corba-step-1.webp", "Step 1: Chop Onion and Carrot", "(1. Adım: Soğanı ve Havucu Doğrayın)"),
    ("corba-step-2.jpg", "corba-step-2.webp", "Step 2: Saute Vegetables in Butter", "(2. Adım: Sebzeleri Tereyağında Kavurun)"),
    ("corba-step-3.jpg", "corba-step-3.webp", "Step 3: Add Red Lentils and Hot Water", "(3. Adım: Mercimeği ve Sıcak Suyu Ekleyin)"),
    ("corba-step-4.jpg", "corba-step-4.webp", "Step 4: Simmer Soup for 25 Minutes", "(4. Adım: Çorbayı 25 Dakika Kaynatın)"),
    ("corba-step-5.jpg", "corba-step-5.webp", "Step 5: Blend the Soup Until Smooth", "(5. Adım: Çorbayı Blenderdan Geçirin)"),
    ("corba-step-6.jpg", "corba-step-6.webp", "Step 6: Season and Serve with Lemon", "(6. Adım: Baharatlayın ve Limonla Servis Edin)"),
]

for raw_name, webp_name, title_en, title_tr in steps_data:
    brand_image(
        os.path.join(raw_dir, raw_name),
        os.path.join(steps_dir, webp_name),
        title_en,
        title_tr,
        (800, 600)
    )

print("ALL CORBA IMAGES BRANDED SUCCESSFULLY!")
