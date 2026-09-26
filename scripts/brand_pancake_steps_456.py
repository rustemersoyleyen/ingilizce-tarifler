import os
import sys
import io
from PIL import Image, ImageDraw, ImageFont

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

brain_dir = r"C:\Users\konusarak\.gemini\antigravity-ide\brain\59c01912-91f7-439d-9998-f8f9418c49b9"
steps_dir = r"d:\Otomasyonlar\İngilizce Tarifler\public\images\steps"
raw_dir = r"d:\Otomasyonlar\İngilizce Tarifler\public\images\raw"
logo_path = r"d:\Otomasyonlar\İngilizce Tarifler\public\ko-logo-yatay.png"

items = [
    {
        "src": os.path.join(brain_dir, "pancake_step_4_raw_1790358459416.jpg"),
        "raw_out": os.path.join(raw_dir, "pancake-step-4-pixar.jpg"),
        "step_out": os.path.join(steps_dir, "pancake-step-4.webp"),
        "title": "Step 4: Pour Batter onto Hot Pan",
        "sub": "(4. Adım: Hamuru Sıcak Tavaya Dökün)"
    },
    {
        "src": os.path.join(brain_dir, "pancake_step_5_raw_1790358479781.jpg"),
        "raw_out": os.path.join(raw_dir, "pancake-step-5-pixar.jpg"),
        "step_out": os.path.join(steps_dir, "pancake-step-5.webp"),
        "title": "Step 5: Flip the Pancake",
        "sub": "(5. Adım: Pankeki Spatulayla Çevirin)"
    },
    {
        "src": os.path.join(brain_dir, "pancake_step_6_raw_1790358497474.jpg"),
        "raw_out": os.path.join(raw_dir, "pancake-step-6-pixar.jpg"),
        "step_out": os.path.join(steps_dir, "pancake-step-6.webp"),
        "title": "Step 6: Serve with Syrup or Honey",
        "sub": "(6. Adım: Şurup veya Balla Servis Edin)"
    }
]

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

for item in items:
    if not os.path.exists(item["src"]):
        print(f"Error: {item['src']} not found!")
        continue

    # Save raw
    img_orig = Image.open(item["src"])
    img_orig.save(item["raw_out"], "JPEG", quality=95)

    # Resize to 800x600 for step accordion
    img = img_orig.convert("RGBA")
    target_w, target_h = 800, 600
    img = img.resize((target_w, target_h), Image.Resampling.LANCZOS)

    # 1. Top Right Logo
    if os.path.exists(logo_path):
        logo = Image.open(logo_path).convert("RGBA")
        logo_w = 130
        logo_h = int(logo.height * (logo_w / logo.width))
        logo = logo.resize((logo_w, logo_h), Image.Resampling.LANCZOS)
        
        pad_x, pad_y = 10, 6
        bw = logo_w + pad_x * 2
        bh = logo_h + pad_y * 2
        badge = Image.new("RGBA", (bw, bh), (0, 0, 0, 0))
        draw_b = ImageDraw.Draw(badge)
        draw_b.rounded_rectangle([(0,0), (bw-1, bh-1)], radius=8, fill=(255, 255, 255, 240), outline=(255, 255, 255, 255))
        badge.paste(logo, (pad_x, pad_y), logo)
        img.paste(badge, (target_w - bw - 16, 16), badge)

    # 2. Bottom Left Badge
    title_text = item["title"]
    sub_text = item["sub"]
    
    draw_dummy = ImageDraw.Draw(img)
    bb_main = draw_dummy.textbbox((0,0), title_text, font=font_main)
    bb_sub = draw_dummy.textbbox((0,0), sub_text, font=font_sub)
    w_main = bb_main[2] - bb_main[0]
    h_main = bb_main[3] - bb_main[1]
    w_sub = bb_sub[2] - bb_sub[0]
    h_sub = bb_sub[3] - bb_sub[1]

    tb_w = max(w_main, w_sub) + 28
    tb_h = h_main + h_sub + 22

    t_badge = Image.new("RGBA", (tb_w, tb_h), (0, 0, 0, 0))
    draw_tb = ImageDraw.Draw(t_badge)
    draw_tb.rounded_rectangle([(0,0), (tb_w-1, tb_h-1)], radius=8, fill=(15, 23, 42, 225), outline=(255, 255, 255, 70))
    draw_tb.text((14, 8), title_text, font=font_main, fill=(255, 255, 255, 255))
    draw_tb.text((14, 8 + h_main + 4), sub_text, font=font_sub, fill=(147, 197, 253, 255))

    img.paste(t_badge, (16, target_h - tb_h - 16), t_badge)
    img.convert("RGB").save(item["step_out"], "WEBP", quality=92, method=6)
    print(f"Successfully branded {os.path.basename(item['step_out'])}")

print("All 3 pancake steps branded with Pixar 3D models!")
