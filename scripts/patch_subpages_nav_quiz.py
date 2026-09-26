# patch_subpages_nav_quiz.py
import re

with open("src/app.js", "r", encoding="utf-8") as f:
    content = f.read()

# ----------------- 1. BAKLAVA SUBNAV & QUIZ -----------------
old_baklava_subnav = """          <nav class="variant-subnav" aria-label="Baklava Çeşitleri Navigasyonu">
            <div class="variant-subnav-inner">
              <a href="#homemade-baklava" class="variant-subnav-btn active" data-target="homemade-baklava">
                <span class="v-num">01</span>
                <span class="v-label">Homemade</span>
                <div class="variant-tooltip">1. Homemade Baklava (Ev Yapımı Baklava)</div>
              </a>
              <a href="#fistikli-baklava" class="variant-subnav-btn" data-target="fistikli-baklava">
                <span class="v-num">02</span>
                <span class="v-label">Pistachio</span>
                <div class="variant-tooltip">2. Pistachio Baklava (Fıstıklı Baklava)</div>
              </a>
              <a href="#cevizli-baklava" class="variant-subnav-btn" data-target="cevizli-baklava">
                <span class="v-num">03</span>
                <span class="v-label">Walnut</span>
                <div class="variant-tooltip">3. Walnut Baklava (Cevizli Baklava)</div>
              </a>
              <a href="#hazir-yufka-baklava" class="variant-subnav-btn" data-target="hazir-yufka-baklava">
                <span class="v-num">04</span>
                <span class="v-label">Ready Phyllo</span>
                <div class="variant-tooltip">4. Ready Phyllo Baklava (Hazır Yufkadan Baklava)</div>
              </a>
            </div>
          </nav>"""

new_baklava_subnav = """          <nav class="variant-subnav" aria-label="Baklava Çeşitleri Hızlı Erişim">
            <a href="#homemade-baklava" class="variant-nav-btn active" title="Homemade Baklava (Ev Yapımı Baklava)">
              <span>1. Homemade Baklava</span>
              <div class="variant-tooltip">
                <span class="tooltip-en">1. Homemade Baklava</span>
                <span class="tooltip-tr">(Ev Yapımı Baklava)</span>
              </div>
            </a>
            <a href="#fistikli-baklava" class="variant-nav-btn" title="Pistachio Baklava (Fıstıklı Baklava)">
              <span>2. Pistachio Baklava</span>
              <div class="variant-tooltip">
                <span class="tooltip-en">2. Pistachio Baklava</span>
                <span class="tooltip-tr">(Fıstıklı Baklava)</span>
              </div>
            </a>
            <a href="#cevizli-baklava" class="variant-nav-btn" title="Walnut Baklava (Cevizli Baklava)">
              <span>3. Walnut Baklava</span>
              <div class="variant-tooltip">
                <span class="tooltip-en">3. Walnut Baklava</span>
                <span class="tooltip-tr">(Cevizli Baklava)</span>
              </div>
            </a>
            <a href="#hazir-yufka-baklava" class="variant-nav-btn" title="Ready Phyllo Baklava (Hazır Yufkadan Baklava)">
              <span>4. Ready Phyllo</span>
              <div class="variant-tooltip">
                <span class="tooltip-en">4. Ready Phyllo Baklava</span>
                <span class="tooltip-tr">(Hazır Yufkadan Baklava)</span>
              </div>
            </a>
          </nav>"""

content = content.replace(old_baklava_subnav, new_baklava_subnav)

# Move Baklava app banner from bottom into #kavramlar
old_baklava_kavramlar_head = """        <section id="kavramlar">
          <p class="eyebrow">CORE CONCEPTS &amp; VOCABULARY (TEMEL KAVRAMLAR VE SÖZLÜK)</p>
          <h2>İngilizce Baklava Tarifi Kavramları ve Türkçe Karşılıkları</h2>"""

new_baklava_kavramlar_head = """        <section id="kavramlar">
          <p class="eyebrow">CORE CONCEPTS &amp; VOCABULARY (TEMEL KAVRAMLAR VE SÖZLÜK)</p>
          <h2>İngilizce Baklava Tarifi Kavramları ve Türkçe Karşılıkları</h2>
          
          ${buildAppBannerHTML("Baklava")}"""

content = content.replace(old_baklava_kavramlar_head, new_baklava_kavramlar_head)

# Remove bottom banner from Baklava
content = content.replace('${buildAppBannerHTML("Baklava")}\n        ${getMidPageCTAHTML()}', '${getMidPageCTAHTML()}')

# ----------------- 2. SMOOTHIE SUBNAV & APP BANNER -----------------
old_smoothie_subnav = """          <nav class="variant-subnav" aria-label="Smoothie Çeşitleri Navigasyonu">
            <div class="variant-subnav-inner">
              <a href="#banana-smoothie" class="variant-subnav-btn active" data-target="banana-smoothie">
                <span class="v-num">01</span>
                <span class="v-label">Banana</span>
                <div class="variant-tooltip">1. Banana Smoothie (Muzlu Smoothie)</div>
              </a>
              <a href="#strawberry-smoothie" class="variant-subnav-btn" data-target="strawberry-smoothie">
                <span class="v-num">02</span>
                <span class="v-label">Strawberry</span>
                <div class="variant-tooltip">2. Strawberry Smoothie (Çilekli Smoothie)</div>
              </a>
              <a href="#green-smoothie" class="variant-subnav-btn" data-target="green-smoothie">
                <span class="v-num">03</span>
                <span class="v-label">Green Detox</span>
                <div class="variant-tooltip">3. Green Smoothie (Yeşil Detoks Smoothie)</div>
              </a>
              <a href="#protein-smoothie" class="variant-subnav-btn" data-target="protein-smoothie">
                <span class="v-num">04</span>
                <span class="v-label">Protein</span>
                <div class="variant-tooltip">4. Protein Smoothie (Proteinli Smoothie)</div>
              </a>
            </div>
          </nav>"""

new_smoothie_subnav = """          <nav class="variant-subnav" aria-label="Smoothie Çeşitleri Hızlı Erişim">
            <a href="#banana-smoothie" class="variant-nav-btn active" title="Banana Smoothie (Muzlu Smoothie)">
              <span>1. Banana Smoothie</span>
              <div class="variant-tooltip">
                <span class="tooltip-en">1. Banana Smoothie</span>
                <span class="tooltip-tr">(Muzlu Smoothie)</span>
              </div>
            </a>
            <a href="#strawberry-smoothie" class="variant-nav-btn" title="Strawberry Smoothie (Çilekli Smoothie)">
              <span>2. Strawberry Smoothie</span>
              <div class="variant-tooltip">
                <span class="tooltip-en">2. Strawberry Smoothie</span>
                <span class="tooltip-tr">(Çilekli Smoothie)</span>
              </div>
            </a>
            <a href="#green-smoothie" class="variant-nav-btn" title="Green Smoothie (Yeşil Detoks Smoothie)">
              <span>3. Green Smoothie</span>
              <div class="variant-tooltip">
                <span class="tooltip-en">3. Green Smoothie</span>
                <span class="tooltip-tr">(Yeşil Detoks Smoothie)</span>
              </div>
            </a>
            <a href="#protein-smoothie" class="variant-nav-btn" title="Protein Smoothie (Proteinli Smoothie)">
              <span>4. Protein Smoothie</span>
              <div class="variant-tooltip">
                <span class="tooltip-en">4. Protein Smoothie</span>
                <span class="tooltip-tr">(Proteinli Smoothie)</span>
              </div>
            </a>
          </nav>"""

content = content.replace(old_smoothie_subnav, new_smoothie_subnav)

old_smoothie_kavramlar_head = """        <section id="kavramlar">
          <p class="eyebrow">CORE CONCEPTS &amp; VOCABULARY (TEMEL KAVRAMLAR VE SÖZLÜK)</p>
          <h2>İngilizce Smoothie Tarifi Kavramları ve Türkçe Karşılıkları</h2>"""

new_smoothie_kavramlar_head = """        <section id="kavramlar">
          <p class="eyebrow">CORE CONCEPTS &amp; VOCABULARY (TEMEL KAVRAMLAR VE SÖZLÜK)</p>
          <h2>İngilizce Smoothie Tarifi Kavramları ve Türkçe Karşılıkları</h2>
          
          ${buildAppBannerHTML("Smoothie")}"""

content = content.replace(old_smoothie_kavramlar_head, new_smoothie_kavramlar_head)
content = content.replace('${buildAppBannerHTML("Smoothie")}\n        ${getMidPageCTAHTML()}', '${getMidPageCTAHTML()}')

# ----------------- 3. KEK SUBNAV & APP BANNER -----------------
old_kek_subnav = """          <nav class="variant-subnav" aria-label="Kek Çeşitleri Navigasyonu">
            <div class="variant-subnav-inner">
              <a href="#plain-cake" class="variant-subnav-btn active" data-target="plain-cake">
                <span class="v-num">01</span>
                <span class="v-label">Plain Cake</span>
                <div class="variant-tooltip">1. Plain Cake (Sade Kek)</div>
              </a>
              <a href="#chocolate-cake" class="variant-subnav-btn" data-target="chocolate-cake">
                <span class="v-num">02</span>
                <span class="v-label">Chocolate</span>
                <div class="variant-tooltip">2. Chocolate Cake (Çikolatalı Kek)</div>
              </a>
              <a href="#carrot-cake" class="variant-subnav-btn" data-target="carrot-cake">
                <span class="v-num">03</span>
                <span class="v-label">Carrot Cake</span>
                <div class="variant-tooltip">3. Carrot Cake (Havuçlu Kek)</div>
              </a>
              <a href="#lemon-cake" class="variant-subnav-btn" data-target="lemon-cake">
                <span class="v-num">04</span>
                <span class="v-label">Lemon Cake</span>
                <div class="variant-tooltip">4. Lemon Cake (Limonlu Kek)</div>
              </a>
            </div>
          </nav>"""

new_kek_subnav = """          <nav class="variant-subnav" aria-label="Kek Çeşitleri Hızlı Erişim">
            <a href="#plain-cake" class="variant-nav-btn active" title="Plain Sponge Cake (Sade Sünger Kek)">
              <span>1. Plain Cake</span>
              <div class="variant-tooltip">
                <span class="tooltip-en">1. Plain Sponge Cake</span>
                <span class="tooltip-tr">(Sade Sünger Kek)</span>
              </div>
            </a>
            <a href="#chocolate-cake" class="variant-nav-btn" title="Chocolate Cake (Çikolatalı Kek)">
              <span>2. Chocolate Cake</span>
              <div class="variant-tooltip">
                <span class="tooltip-en">2. Chocolate Cake</span>
                <span class="tooltip-tr">(Çikolatalı Kek)</span>
              </div>
            </a>
            <a href="#carrot-cake" class="variant-nav-btn" title="Carrot Cake (Havuçlu Kek)">
              <span>3. Carrot Cake</span>
              <div class="variant-tooltip">
                <span class="tooltip-en">3. Carrot Cake</span>
                <span class="tooltip-tr">(Havuçlu Kek)</span>
              </div>
            </a>
            <a href="#lemon-cake" class="variant-nav-btn" title="Lemon Cake (Limonlu Kek)">
              <span>4. Lemon Cake</span>
              <div class="variant-tooltip">
                <span class="tooltip-en">4. Lemon Cake</span>
                <span class="tooltip-tr">(Limonlu Kek)</span>
              </div>
            </a>
          </nav>"""

content = content.replace(old_kek_subnav, new_kek_subnav)

old_kek_kavramlar_head = """        <section id="kavramlar">
          <p class="eyebrow">CORE CONCEPTS &amp; VOCABULARY (TEMEL KAVRAMLAR VE SÖZLÜK)</p>
          <h2>İngilizce Kek Tarifi Kavramları ve Türkçe Karşılıkları</h2>"""

new_kek_kavramlar_head = """        <section id="kavramlar">
          <p class="eyebrow">CORE CONCEPTS &amp; VOCABULARY (TEMEL KAVRAMLAR VE SÖZLÜK)</p>
          <h2>İngilizce Kek Tarifi Kavramları ve Türkçe Karşılıkları</h2>
          
          ${buildAppBannerHTML("Kek")}"""

content = content.replace(old_kek_kavramlar_head, new_kek_kavramlar_head)
content = content.replace('${buildAppBannerHTML("Kek")}\n        ${getMidPageCTAHTML()}', '${getMidPageCTAHTML()}')

# ----------------- 4. OMLET SUBNAV & APP BANNER -----------------
old_omlet_subnav = """          <nav class="variant-subnav" aria-label="Omlet Çeşitleri Navigasyonu">
            <div class="variant-subnav-inner">
              <a href="#plain-omelette" class="variant-subnav-btn active" data-target="plain-omelette">
                <span class="v-num">01</span>
                <span class="v-label">Plain Omelette</span>
                <div class="variant-tooltip">1. Plain Omelette (Sade Omlet)</div>
              </a>
              <a href="#cheese-omelette" class="variant-subnav-btn" data-target="cheese-omelette">
                <span class="v-num">02</span>
                <span class="v-label">Cheese Omelette</span>
                <div class="variant-tooltip">2. Cheese Omelette (Peynirli Omlet)</div>
              </a>
              <a href="#vegetable-omelette" class="variant-subnav-btn" data-target="vegetable-omelette">
                <span class="v-num">03</span>
                <span class="v-label">Vegetable Omelette</span>
                <div class="variant-tooltip">3. Vegetable Omelette (Sebzeli Omlet)</div>
              </a>
              <a href="#mushroom-omelette" class="variant-subnav-btn" data-target="mushroom-omelette">
                <span class="v-num">04</span>
                <span class="v-label">Mushroom Omelette</span>
                <div class="variant-tooltip">4. Mushroom Omelette (Mantarlı Omlet)</div>
              </a>
            </div>
          </nav>"""

new_omlet_subnav = """          <nav class="variant-subnav" aria-label="Omlet Çeşitleri Hızlı Erişim">
            <a href="#plain-omelette" class="variant-nav-btn active" title="Plain Omelette (Sade Omlet)">
              <span>1. Plain Omelette</span>
              <div class="variant-tooltip">
                <span class="tooltip-en">1. Plain Omelette</span>
                <span class="tooltip-tr">(Sade Omlet)</span>
              </div>
            </a>
            <a href="#cheese-omelette" class="variant-nav-btn" title="Cheese Omelette (Peynirli Omlet)">
              <span>2. Cheese Omelette</span>
              <div class="variant-tooltip">
                <span class="tooltip-en">2. Cheese Omelette</span>
                <span class="tooltip-tr">(Peynirli Omlet)</span>
              </div>
            </a>
            <a href="#vegetable-omelette" class="variant-nav-btn" title="Vegetable Omelette (Sebzeli Omlet)">
              <span>3. Vegetable Omelette</span>
              <div class="variant-tooltip">
                <span class="tooltip-en">3. Vegetable Omelette</span>
                <span class="tooltip-tr">(Sebzeli Omlet)</span>
              </div>
            </a>
            <a href="#mushroom-omelette" class="variant-nav-btn" title="Mushroom Omelette (Mantarlı Omlet)">
              <span>4. Mushroom Omelette</span>
              <div class="variant-tooltip">
                <span class="tooltip-en">4. Mushroom Omelette</span>
                <span class="tooltip-tr">(Mantarlı Omlet)</span>
              </div>
            </a>
          </nav>"""

content = content.replace(old_omlet_subnav, new_omlet_subnav)

old_omlet_kavramlar_head = """        <section id="kavramlar">
          <p class="eyebrow eyebrow-lg">CORE CONCEPTS &amp; VOCABULARY (TEMEL KAVRAMLAR VE KELİMELER)</p>
          <h2>İngilizce Omlet Tarifi: Temel Fiiller, Kelimeler ve Malzemeler (English Omelette Concepts and Vocabulary)</h2>"""

new_omlet_kavramlar_head = """        <section id="kavramlar">
          <p class="eyebrow eyebrow-lg">CORE CONCEPTS &amp; VOCABULARY (TEMEL KAVRAMLAR VE KELİMELER)</p>
          <h2>İngilizce Omlet Tarifi: Temel Fiiller, Kelimeler ve Malzemeler (English Omelette Concepts and Vocabulary)</h2>
          
          ${buildAppBannerHTML("Omlet")}"""

content = content.replace(old_omlet_kavramlar_head, new_omlet_kavramlar_head)
content = content.replace('${buildAppBannerHTML("Omlet")}\n        ${getMidPageCTAHTML()}', '${getMidPageCTAHTML()}')

with open("src/app.js", "w", encoding="utf-8") as f:
    f.write(content)

print("Nav & Banner patches applied successfully!")
