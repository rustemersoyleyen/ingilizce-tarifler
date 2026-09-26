import os
import shutil
import sys

sys.stdout.reconfigure(encoding="utf-8")
from PIL import Image, ImageDraw, ImageFont

brain_dir = r"C:\Users\konusarak\.gemini\antigravity-ide\brain\1e080654-a7ba-44f4-9aa2-ea52c9c77869"
public_images = r"d:\Otomasyonlar\İngilizce Tarifler\public\images"
raw_dir = os.path.join(public_images, "raw")
steps_dir = os.path.join(public_images, "steps")
logo_path = r"d:\Otomasyonlar\İngilizce Tarifler\public\ko-logo-yatay.png"

os.makedirs(raw_dir, exist_ok=True)
os.makedirs(steps_dir, exist_ok=True)

# Find generated files in brain dir
def find_latest(pattern):
    files = [f for f in os.listdir(brain_dir) if f.startswith(pattern) and f.endswith(".jpg")]
    if not files:
        raise FileNotFoundError(f"Pattern {pattern} not found in {brain_dir}")
    files.sort(key=lambda x: os.path.getmtime(os.path.join(brain_dir, x)), reverse=True)
    return os.path.join(brain_dir, files[0])

# Copy raw images
raw_map = {
    "pilav-hero.jpg": find_latest("pilav_hero_"),
    "pilav-sehriyeli.jpg": find_latest("pilav_sehriyeli_"),
    "pilav-bulgur.jpg": find_latest("pilav_bulgur_"),
    "pilav-sebzeli.jpg": find_latest("pilav_sebzeli_"),
    "pilav-step-1.jpg": find_latest("pilav_step_1_pixar_"),
    "pilav-step-2.jpg": find_latest("pilav_step_2_pixar_"),
    "pilav-step-3.jpg": find_latest("pilav_step_3_pixar_"),
    "pilav-step-4.jpg": find_latest("pilav_step_4_pixar_"),
    "pilav-step-5.jpg": find_latest("pilav_step_5_pixar_"),
    "pilav-step-6.jpg": find_latest("pilav_step_6_pixar_"),
}

for name, src in raw_map.items():
    dst = os.path.join(raw_dir, name)
    shutil.copy2(src, dst)
    print(f"Copied {name} to raw/")

# Branding function
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

# Brand all
brand_image(os.path.join(raw_dir, "pilav-hero.jpg"), os.path.join(public_images, "pilav-hero.webp"), "Turkish Rice Pilaf Recipe", "(Geleneksel Türk Pirinç Pilavı Tarifi)", (1200, 675))
brand_image(os.path.join(raw_dir, "pilav-sehriyeli.jpg"), os.path.join(public_images, "pilav-sehriyeli.webp"), "Rice with Orzo Recipe", "(Şehriyeli Pirinç Pilavı Tarifi)", (1200, 800))
brand_image(os.path.join(raw_dir, "pilav-bulgur.jpg"), os.path.join(public_images, "pilav-bulgur.webp"), "Bulgur Pilaf Recipe", "(Geleneksel Bulgur Pilavı Tarifi)", (1200, 800))
brand_image(os.path.join(raw_dir, "pilav-sebzeli.jpg"), os.path.join(public_images, "pilav-sebzeli.webp"), "Vegetable Rice Recipe", "(Sebzeli Pilav Tarifi)", (1200, 800))

# Steps
steps_data = [
    ("pilav-step-1.jpg", "pilav-step-1.webp", "Step 1: Rinse Rice with Warm Water", "(1. Adım: Pirinci Ilık Suyla Yıkayın)"),
    ("pilav-step-2.jpg", "pilav-step-2.webp", "Step 2: Melt the Butter in a Pot", "(2. Adım: Tereyağını Tencerede Eritin)"),
    ("pilav-step-3.jpg", "pilav-step-3.webp", "Step 3: Saute Orzo Until Golden", "(3. Adım: Şehriyeyi Kavurun)"),
    ("pilav-step-4.jpg", "pilav-step-4.webp", "Step 4: Add Rice and Stir for 2 Mins", "(4. Adım: Pirinci Ekleyin ve Kavurun)"),
    ("pilav-step-5.jpg", "pilav-step-5.webp", "Step 5: Pour Hot Water & Add Salt", "(5. Adım: Sıcak Suyu ve Tuzu Ekleyin)"),
    ("pilav-step-6.jpg", "pilav-step-6.webp", "Step 6: Simmer on Low Heat for 15 Mins", "(6. Adım: Pilavı Kısık Ateşte Demleyin)"),
]

for raw_name, webp_name, title_en, title_tr in steps_data:
    brand_image(
        os.path.join(raw_dir, raw_name),
        os.path.join(steps_dir, webp_name),
        title_en,
        title_tr,
        (800, 600)
    )

print("ALL PILAV IMAGES BRANDED SUCCESSFULLY!")
