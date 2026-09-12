import os
import shutil

def backup_raw_images():
    raw_dir = r'd:\Otomasyonlar\İngilizce Tarifler\public\images\raw'
    os.makedirs(raw_dir, exist_ok=True)
    img_dir = r'd:\Otomasyonlar\İngilizce Tarifler\public\images'

    files_to_copy = [
        ('baklava-hero.jpg', 'baklava-hero.jpg'),
        ('baklava-fistikli.jpg', 'baklava-fistikli.jpg'),
        ('baklava-cevizli.jpg', 'baklava-cevizli.jpg'),
        ('baklava-hazir-yufka.jpg', 'baklava-hazir-yufka.jpg'),
        ('smoothie-banana.jpg', 'smoothie-hero.jpg'),
        ('smoothie-strawberry.jpg', 'smoothie-cilekli.jpg'),
        ('smoothie-green.jpg', 'smoothie-yesil.jpg'),
        ('smoothie-protein.jpg', 'smoothie-protein.jpg'),
        ('pancake-hero.webp', 'pancake-hero.jpg'),
        ('pancake-fluffy.webp', 'pancake-fluffy.jpg'),
        ('pancake-chocolate.webp', 'pancake-chocolate.jpg'),
        ('pancake-banana.webp', 'pancake-banana.jpg'),
        ('pancake-blueberry.webp', 'pancake-blueberry.jpg')
    ]

    for src_name, dst_name in files_to_copy:
        src_path = os.path.join(img_dir, src_name)
        dst_path = os.path.join(raw_dir, dst_name)
        if os.path.exists(src_path) and not os.path.exists(dst_path):
            shutil.copy2(src_path, dst_path)
            print(f"Backed up: {dst_name}")

if __name__ == '__main__':
    backup_raw_images()
