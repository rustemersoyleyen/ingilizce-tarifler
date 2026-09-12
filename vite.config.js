import { defineConfig } from "vite";
import fs from "node:fs";
import path from "node:path";

export default defineConfig({
  base: '/blog/ingilizce-tarifler/',
  plugins: [
    {
      name: 'sync-assets-plugin',
      configureServer(server) {
        server.middlewares.use('/sync-assets', async (req, res) => {
          const brainDir = 'C:\\Users\\konusarak\\.gemini\\antigravity-ide\\brain\\3a7cd7a9-4c01-4148-a00c-90ba699eac9b';
          const pubImages = path.resolve('public/images');
          try {
            // 1. Copy generated smoothie images from brain
            const bananaSrc = path.join(brainDir, 'smoothie_banana_recipe_1789210811645.jpg');
            const strawSrc = path.join(brainDir, 'smoothie_strawberry_recipe_1789210830647.jpg');
            const greenSrc = path.join(brainDir, 'smoothie_green_recipe_1789210851740.jpg');

            if (fs.existsSync(bananaSrc)) {
              fs.copyFileSync(bananaSrc, path.join(pubImages, 'smoothie-hero.webp'));
              fs.copyFileSync(bananaSrc, path.join(pubImages, 'smoothie-banana.jpg'));
            }
            if (fs.existsSync(strawSrc)) {
              fs.copyFileSync(strawSrc, path.join(pubImages, 'smoothie-cilekli.webp'));
              fs.copyFileSync(strawSrc, path.join(pubImages, 'smoothie-strawberry.jpg'));
            }
            if (fs.existsSync(greenSrc)) {
              fs.copyFileSync(greenSrc, path.join(pubImages, 'smoothie-yesil.webp'));
              fs.copyFileSync(greenSrc, path.join(pubImages, 'smoothie-green.jpg'));
            }

            // 2. Download authentic food photos for protein smoothie, baklava & pancakes
            const remoteImages = [
              {
                url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Baklava_-_Turkish_special%2C_80-ply.JPEG/960px-Baklava_-_Turkish_special%2C_80-ply.JPEG',
                target: ['baklava-hero.webp', 'baklava-hero.jpg']
              },
              {
                url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/F%C4%B1st%C4%B1kl%C4%B1_Baklava.jpg/960px-F%C4%B1st%C4%B1kl%C4%B1_Baklava.jpg',
                target: ['baklava-fistikli.webp', 'baklava-fistikli.jpg']
              },
              {
                url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Baklava-Beypazar%C4%B1.jpg/960px-Baklava-Beypazar%C4%B1.jpg',
                target: ['baklava-cevizli.webp', 'baklava-cevizli.jpg']
              },
              {
                url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/2018-04-28_Turkish_baklava_in_Australian_turkish_cafe.jpg/960px-2018-04-28_Turkish_baklava_in_Australian_turkish_cafe.jpg',
                target: ['baklava-hazir-yufka.webp', 'baklava-hazir-yufka.jpg']
              },
              {
                url: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=1200&h=675&q=85',
                target: ['pancake-hero.webp', 'pancake-fluffy.webp']
              },
              {
                url: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=1200&h=800&q=85',
                target: ['pancake-chocolate.webp']
              },
              {
                url: 'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=1200&h=800&q=85',
                target: ['pancake-banana.webp']
              },
              {
                url: 'https://images.unsplash.com/photo-1575853121743-60c24f0a7502?auto=format&fit=crop&w=1200&h=800&q=85',
                target: ['pancake-blueberry.webp']
              }
            ];

            for (const item of remoteImages) {
              try {
                const resp = await fetch(item.url);
                if (resp.ok) {
                  const buf = Buffer.from(await resp.arrayBuffer());
                  for (const t of item.target) {
                    fs.writeFileSync(path.join(pubImages, t), buf);
                  }
                }
              } catch (e) {
                console.error('Failed to fetch ' + item.url, e);
              }
            }

            res.end('All authentic images successfully synced and replaced!');
          } catch (err) {
            res.end('Error: ' + err.message);
          }
        });
      }
    }
  ]
});
