import os
import io
import sys
import re
import base64
try:
    if hasattr(sys.stdout, 'buffer') and getattr(sys.stdout, 'encoding', '').lower() != 'utf-8':
        sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')
except Exception:
    pass
from PIL import Image, ImageDraw, ImageFont

def create_branded_image(input_img, title_text, output_path, target_size=(1200, 675)):
    """
    Brands a recipe image with:
    - Top-right: Konusarak Ogren logo inside a rounded semi-transparent white card.
    - Bottom-left: Recipe title inside a sleek dark rounded card.
    - Exports as optimized WebP.
    """
    # 1. Resize and crop to target_size (cover fit)
    img = input_img.convert("RGBA")
    src_w, src_h = img.size
    target_w, target_h = target_size
    
    src_ratio = src_w / src_h
    target_ratio = target_w / target_h
    
    if src_ratio > target_ratio:
        new_h = target_h
        new_w = int(src_w * (target_h / src_h))
    else:
        new_w = target_w
        new_h = int(src_h * (target_w / src_w))
        
    img_resized = img.resize((new_w, new_h), Image.Resampling.LANCZOS)
    
    # Center crop
    left = (new_w - target_w) // 2
    top = (new_h - target_h) // 2
    canvas = img_resized.crop((left, top, left + target_w, top + target_h))
    
    # 2. Top-Right: Konusarak Ogren Logo Badge
    logo_path = r'd:\Otomasyonlar\İngilizce Tarifler\public\ko-logo-yatay.png'
    if os.path.exists(logo_path):
        logo = Image.open(logo_path).convert("RGBA")
        logo_target_w = 170
        logo_target_h = int(logo.height * (logo_target_w / logo.width))
        logo = logo.resize((logo_target_w, logo_target_h), Image.Resampling.LANCZOS)
        
        # Create white rounded background badge
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
        # Paste logo onto badge
        badge.paste(logo, (pad_x, pad_y), logo)
        
        # Paste badge onto top-right of canvas
        margin = 24
        badge_x = target_w - badge_w - margin
        badge_y = margin
        canvas.paste(badge, (badge_x, badge_y), badge)

    # 3. Bottom-Left: Title Badge
    # Try to load a nice font, fallback to default if not found
    font = None
    for font_name in ["segoeui.ttf", "segoeuib.ttf", "arialbd.ttf", "arial.ttf"]:
        try:
            font = ImageFont.truetype(font_name, 22)
            break
        except Exception:
            continue
    if font is None:
        font = ImageFont.load_default()

    # Calculate text bounding box
    dummy_draw = ImageDraw.Draw(canvas)
    bbox = dummy_draw.textbbox((0, 0), title_text, font=font)
    tw = bbox[2] - bbox[0]
    th = bbox[3] - bbox[1]
    
    t_pad_x, t_pad_y = 16, 10
    t_badge_w = tw + t_pad_x * 2
    t_badge_h = th + t_pad_y * 2
    
    title_badge = Image.new("RGBA", (t_badge_w, t_badge_h), (0, 0, 0, 0))
    draw_tbadge = ImageDraw.Draw(title_badge)
    draw_tbadge.rounded_rectangle(
        [(0, 0), (t_badge_w - 1, t_badge_h - 1)],
        radius=8,
        fill=(15, 23, 42, 210),
        outline=(255, 255, 255, 60),
        width=1
    )
    draw_tbadge.text((t_pad_x, t_pad_y - 2), title_text, font=font, fill=(255, 255, 255, 255))
    
    t_badge_x = 24
    t_badge_y = target_h - t_badge_h - 24
    canvas.paste(title_badge, (t_badge_x, t_badge_y), title_badge)
    
    # 4. Save as WebP
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    canvas.convert("RGB").save(output_path, "WEBP", quality=92)
    print(f"Saved branded image: {output_path} ({target_w}x{target_h})")

def process_menemen_images():
    output_dir = r'd:\Otomasyonlar\İngilizce Tarifler\public\images'
    
    # 1. Hero
    hero_raw = r'C:\Users\konusarak\.gemini\antigravity-ide\brain\c64930a3-296b-4d37-ae52-1a79c2f7bcf9\menemen_hero_1788460293093.jpg'
    if os.path.exists(hero_raw):
        img = Image.open(hero_raw)
        create_branded_image(img, "Classic Menemen Recipe", os.path.join(output_dir, "menemen-hero.webp"), (1200, 675))
    
    # 2. Classic
    classic_raw = r'C:\Users\konusarak\.gemini\antigravity-ide\brain\c64930a3-296b-4d37-ae52-1a79c2f7bcf9\menemen_classic_1788460310533.jpg'
    if os.path.exists(classic_raw):
        img = Image.open(classic_raw)
        create_branded_image(img, "Classic Menemen Recipe", os.path.join(output_dir, "menemen-classic.webp"), (1200, 800))
        
    # 3. Cheese
    cheese_raw = r'C:\Users\konusarak\.gemini\antigravity-ide\brain\c64930a3-296b-4d37-ae52-1a79c2f7bcf9\menemen_cheese_1788460326072.jpg'
    if os.path.exists(cheese_raw):
        img = Image.open(cheese_raw)
        create_branded_image(img, "Menemen with Cheese Recipe", os.path.join(output_dir, "menemen-cheese.webp"), (1200, 800))

    # 4 & 5. Extract Onion and Sujuk from Codex HTML base64
    html_path = r'd:\Otomasyonlar\İngilizce Tarifler\docs\İngilizce Menemen Tarifi (Menemen Yapılışı İngilizce) _ Konuşarak Öğren.html'
    if os.path.exists(html_path):
        with open(html_path, 'r', encoding='utf-8') as f:
            html = f.read()
        
        matches = re.findall(r'src="data:image/(?:jpeg|png|webp);base64,([^"]+)"', html)
        # Codex has 5 images: [0: Hero, 1: Classic, 2: Onion, 3: Cheese, 4: Sujuk]
        if len(matches) >= 5:
            # Onion (index 2)
            onion_bytes = base64.b64decode(matches[2])
            onion_img = Image.open(io.BytesIO(onion_bytes))
            create_branded_image(onion_img, "Menemen with Onion Recipe", os.path.join(output_dir, "menemen-onion.webp"), (1200, 800))
            
            # Sujuk (index 4)
            sujuk_bytes = base64.b64decode(matches[4])
            sujuk_img = Image.open(io.BytesIO(sujuk_bytes))
            create_branded_image(sujuk_img, "Menemen with Sujuk Recipe", os.path.join(output_dir, "menemen-sujuk.webp"), (1200, 800))

if __name__ == "__main__":
    process_menemen_images()
