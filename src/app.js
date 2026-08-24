import "./styles.css";

const sharedVocab = [
  ["boil", "kaynatmak", "Boil the water before adding the ingredients."],
  ["add", "eklemek", "Add the ingredients to the bowl."],
  ["mix", "karıştırmak", "Mix everything until combined."],
  ["serve", "servis etmek", "Serve the dish while it is fresh."],
];

const recipes = {
  makarna: {
    label: "Ana yemek",
    title: "İngilizce Makarna Tarifi",
    englishTitle: "Plain Pasta Recipe",
    image: "/blog/ingilizce-tarifler/images/makarna-hero.webp",
    introEn: "A plain pasta recipe is a simple set of instructions for boiling, draining and serving pasta.",
    introTr: "Sade makarna tarifi; makarnayı kaynatma, süzme ve servis etme adımlarını anlatan basit bir yönergedir.",
    time: "15 dakika", serves: "2 kişilik", level: "A2–B1", calories: "310 kcal",
    ingredients: [["Pasta", "Makarna", "200 g"], ["Water", "Su", "2 l"], ["Salt", "Tuz", "1 tsp"], ["Butter", "Tereyağı", "1 tbsp"]],
    steps: [
      ["1. Boil the Water in a Large Pot (Büyük Bir Tencerede Suyu Kaynatın)", "First, boil 2 l of water in a large pot.", "Önce büyük bir tencerede 2 l suyu kaynatın."],
      ["2. Add Salt and the Pasta (Tuzu ve Makarnayı Ekleyin)", "Then, add 1 teaspoon of salt and 200 g of pasta.", "Ardından 1 çay kaşığı tuz ve 200 g makarna ekleyin."],
      ["3. Cook the Pasta for 8 to 10 Minutes (Makarnayı 8-10 Dakika Pişirin)", "After that, cook the pasta for 8–10 minutes.", "Daha sonra makarnayı 8–10 dakika pişirin."],
      ["4. Drain the Pasta in a Colander (Makarnayı Süzgeçte Süzün)", "Next, drain the pasta in a colander.", "Sonra makarnayı bir süzgeçte süzün."],
      ["5. Add Butter or Olive Oil (Tereyağı veya Zeytinyağı Ekleyin)", "Add 1 tablespoon of butter or olive oil and stir gently.", "1 yemek kaşığı tereyağı veya zeytinyağı ekleyip nazikçe karıştırın."],
      ["6. Serve the Pasta While It Is Hot (Makarnayı Sıcakken Servis Edin)", "Finally, serve the pasta while it is hot.", "Son olarak makarnayı sıcakken servis edin."],
    ],
    equipment: [["Large pot", "Büyük tencere", "1–3"], ["Colander", "Süzgeç", "4"], ["Wooden spoon", "Tahta kaşık", "2–4"]],
    vocab: [["boil", "kaynatmak", "Boil 2 l of water."], ["drain", "süzmek", "Drain the cooked pasta."], ["stir", "karıştırmak", "Stir the pasta gently."], ["serve", "servis etmek", "Serve while hot."]],
  },
  baklava: {
    label: "Tatlı",
    title: "İngilizce Baklava Tarifi",
    englishTitle: "Turkish Baklava Recipe",
    image: "/blog/ingilizce-tarifler/images/baklava-hero.webp",
    introEn: "Baklava is a layered pastry made with thin phyllo sheets, nuts, butter and sweet syrup.",
    introTr: "Baklava; ince yufka katları, kuruyemiş, tereyağı ve şerbetle hazırlanan katmanlı bir tatlıdır.",
    time: "70 dakika", serves: "12 dilim", level: "B1", calories: "330 kcal",
    ingredients: [["Phyllo sheets", "Baklavalık yufka", "24 sheets"], ["Pistachios", "Antep fıstığı", "250 g"], ["Melted butter", "Eritilmiş tereyağı", "180 g"], ["Sugar", "Şeker", "300 g"], ["Water", "Su", "300 ml"]],
    steps: [
      ["Prepare the Syrup", "First, boil 300 ml of water with 300 g of sugar for 10 minutes.", "Önce 300 ml suyu 300 g şekerle 10 dakika kaynatın."],
      ["Layer the Phyllo", "Then, brush each phyllo sheet with melted butter and stack 12 sheets.", "Ardından her yufkayı eritilmiş tereyağıyla yağlayın ve 12 kat dizin."],
      ["Add the Pistachios", "Next, spread 250 g of pistachios evenly over the layers.", "Sonra 250 g Antep fıstığını katların üzerine eşitçe yayın."],
      ["Bake and Sweeten", "Finally, bake at 180°C for 35 minutes and pour the cool syrup over the hot baklava.", "Son olarak 180°C'de 35 dakika pişirin ve sıcak baklavanın üzerine soğuk şerbeti dökün."],
    ],
    equipment: [["Baking tray", "Fırın tepsisi", "2–4"], ["Pastry brush", "Yumurta fırçası", "2"], ["Saucepan", "Sos tenceresi", "1"]],
    vocab: [["layer", "katman", "Layer the phyllo sheets."], ["brush", "sürmek", "Brush each sheet with butter."], ["spread", "yaymak", "Spread the pistachios evenly."], ["pour", "dökmek", "Pour the syrup slowly."]],
  },
  smoothie: {
    label: "İçecek",
    title: "İngilizce Smoothie Tarifi",
    englishTitle: "Banana Smoothie Recipe",
    image: "/blog/ingilizce-tarifler/images/smoothie-hero.webp",
    introEn: "A banana smoothie is a cold drink made by blending bananas with milk, yogurt and honey.",
    introTr: "Muzlu smoothie; muzun süt, yoğurt ve balla blenderda karıştırılmasıyla hazırlanan soğuk bir içecektir.",
    time: "5 dakika", serves: "2 bardak", level: "A2", calories: "210 kcal",
    ingredients: [["Bananas", "Muz", "2"], ["Milk", "Süt", "1 cup"], ["Yogurt", "Yoğurt", "½ cup"], ["Honey", "Bal", "1 tbsp"], ["Ice cubes", "Buz küpü", "4"]],
    steps: [
      ["Peel and Slice", "First, peel and slice 2 bananas.", "Önce 2 muzu soyun ve dilimleyin."],
      ["Add the Ingredients", "Then, add 1 cup of milk, ½ cup of yogurt and 1 tablespoon of honey to the blender.", "Ardından blendera 1 su bardağı süt, ½ su bardağı yoğurt ve 1 yemek kaşığı bal ekleyin."],
      ["Blend Until Smooth", "After that, blend the mixture for 45 seconds until smooth.", "Daha sonra karışımı pürüzsüz olana kadar 45 saniye çekin."],
      ["Pour and Serve", "Finally, pour the smoothie into 2 glasses and serve immediately.", "Son olarak smoothieyi 2 bardağa dökün ve hemen servis edin."],
    ],
    equipment: [["Blender", "Blender", "2–3"], ["Kitchen knife", "Mutfak bıçağı", "1"], ["Measuring cup", "Ölçü kabı", "2"]],
    vocab: [["peel", "soymak", "Peel the bananas."], ["slice", "dilimlemek", "Slice the fruit."], ["blend", "blenderda çekmek", "Blend for 45 seconds."], ["pour", "dökmek", "Pour into a glass."]],
  },
  pizza: {
    label: "Fast Food",
    title: "İngilizce Pizza Tarifi",
    englishTitle: "Homemade Pizza Recipe",
    image: "/blog/ingilizce-tarifler/images/pizza-hero.webp",
    introEn: "Homemade pizza is made by topping dough with tomato sauce, cheese and baking it.",
    introTr: "Ev yapımı pizza; hamurun domates sosu ve peynirle kaplanıp fırında pişirilmesiyle hazırlanır.",
    time: "30 dakika", serves: "4 dilim", level: "A2", calories: "280 kcal",
    ingredients: [["Pizza dough", "Pizza hamuru", "1 ball"], ["Tomato sauce", "Domates sosu", "½ cup"], ["Mozzarella", "Mozzarella peyniri", "150 g"], ["Olive oil", "Zeytinyağı", "1 tbsp"]],
    steps: [
      ["Roll the Dough", "First, roll out the pizza dough into a circle.", "Önce pizza hamurunu yuvarlak biçimde açın."],
      ["Add Sauce and Cheese", "Then, spread tomato sauce and sprinkle mozzarella.", "Ardından domates sosunu sürün ve mozzarella serpin."],
      ["Bake in Oven", "Finally, bake at 220°C for 15 minutes until golden.", "Son olarak 220°C'de kızarana kadar 15 dakika pişirin."],
    ],
    equipment: [["Rolling pin", "Oklava", "1"], ["Baking sheet", "Fırın tepsisi", "3"], ["Oven", "Fırın", "3"]],
    vocab: [["roll", "açmak", "Roll out the dough."], ["spread", "yaymak", "Spread the sauce."], ["bake", "fırınlamak", "Bake at high temperature."]],
  },
  pancake: {
    label: "Kahvaltı",
    title: "İngilizce Pankek Tarifi",
    englishTitle: "Fluffy Pancake Recipe",
    image: "/blog/ingilizce-tarifler/images/pancake-hero.webp",
    introEn: "Fluffy pancakes are soft breakfast cakes made from flour, milk, egg and butter.",
    introTr: "Yumuşak pankekler; un, süt, yumurta ve tereyağı ile yapılan hafif kahvaltılık keklerdir.",
    time: "15 dakika", serves: "6 adet", level: "A1–A2", calories: "190 kcal",
    ingredients: [["Flour", "Un", "1 cup"], ["Milk", "Süt", "¾ cup"], ["Egg", "Yumurta", "1"], ["Sugar", "Şeker", "2 tbsp"]],
    steps: [
      ["Mix the Batter", "First, whisk the flour, milk, egg and sugar in a bowl.", "Önce bir kapta un, süt, yumurta ve şekeri çırpın."],
      ["Cook on Pan", "Then, pour batter onto a hot pan and flip when bubbles appear.", "Ardından sıcak tavaya harcı dökün ve kabarcıklar oluşunca çevirin."],
      ["Serve Hot", "Finally, serve with honey or syrup.", "Son olarak bal veya şerbetle servis edin."],
    ],
    equipment: [["Non-stick pan", "Tava", "2"], ["Whisk", "Çırpıcı", "1"], ["Ladle", "Kepçe", "2"]],
    vocab: [["whisk", "çırpmak", "Whisk the batter."], ["flip", "çevirmek", "Flip the pancake."], ["pour", "dökmek", "Pour onto the pan."]],
  },
  kek: {
    label: "Tatlı",
    title: "İngilizce Kek Tarifi",
    englishTitle: "Plain Cake Recipe",
    image: "/blog/ingilizce-tarifler/images/kek-hero.webp",
    introEn: "A plain cake recipe is a simple baked dessert made with flour, sugar, eggs, milk, and oil.",
    introTr: "İngilizce kek tarifi, malzeme ve pişirme adımlarının İngilizce talimat cümleleriyle verildiği bir metin türüdür.",
    time: "45 dakika", serves: "8 dilim", level: "A2–B1", calories: "275 kcal",
    ingredients: [["Flour", "Un", "200 g"], ["Sugar", "Şeker", "150 g"], ["Eggs", "Yumurta", "3 adet"], ["Milk", "Süt", "120 ml"], ["Vegetable Oil", "Sıvı yağ", "100 ml"], ["Baking Powder", "Kabartma tozu", "10 g (2 tsp)"]],
    steps: [
      ["1. Preheat the Oven to 180 Degrees (Fırını 180 Dereceye Isıtın)", "Preheat the oven to 180°C before you start mixing the ingredients.", "Malzemeleri karıştırmaya başlamadan önce fırını 180 dereceye ısıtın."],
      ["2. Whisk the Eggs and Sugar (Yumurtaları ve Şekeri Çırpın)", "Whisk 3 eggs and 150 g of sugar for 2 minutes until pale and fluffy.", "3 yumurta ve 150 gram şekeri, açık renk ve köpüklü hale gelene kadar 2 dakika çırpın."],
      ["3. Add the Milk and Oil (Sütü ve Sıvı Yağı Ekleyin)", "Add 120 ml of milk and 100 ml of oil, then stir for 30 seconds.", "120 ml süt ve 100 ml sıvı yağ ekleyin, ardından 30 saniye karıştırın."],
      ["4. Sift the Flour and Baking Powder (Unu ve Kabartma Tozunu Eleyin)", "Sift 200 g of flour and 10 g of baking powder directly into the bowl.", "200 gram unu ve 10 gram kabartma tozunu doğrudan kabın içine eleyin."],
      ["5. Mix the Batter Until Smooth (Hamuru Pürüzsüz Olana Kadar Karıştırın)", "Mix the batter for 1 minute until no lumps remain.", "Hamuru, topak kalmayana kadar 1 dakika karıştırın."],
      ["6. Pour the Batter into the Cake Pan (Hamuru Kek Kalıbına Dökün)", "Pour the batter into a greased 20 cm cake pan.", "Hamuru yağlanmış 20 cm çapındaki kek kalıbına dökün."],
      ["7. Bake the Cake for 40 Minutes (Keki 40 Dakika Pişirin)", "Bake the cake for 40 minutes and check it with a toothpick.", "Keki 40 dakika pişirin ve kürdanla kontrol edin."],
    ],
    equipment: [["Oven", "Fırın", "Step 1, Step 7"], ["Whisk", "Çırpıcı", "Step 2"], ["Mixing Bowl", "Karıştırma kabı", "Step 2, Step 3, Step 5"], ["Sieve", "Elek", "Step 4"], ["Cake Pan", "Kek kalıbı", "Step 6"], ["Toothpick", "Kürdan", "Step 7"]],
    vocab: [["batter", "kek hamuru", "Pour the batter into the pan."], ["sift", "elemek", "Sift the flour."], ["whisk", "çırpmak", "Whisk the eggs."], ["fold in", "hafifçe karıştırarak eklemek", "Fold in the carrots."], ["grease", "yağlamak", "Grease the cake pan."], ["preheat", "önceden ısıtmak", "Preheat the oven."], ["zest", "kabuk rendesi", "Add the lemon zest."], ["toothpick test", "kürdan testi", "Do the toothpick test."], ["cool down", "soğumaya bırakmak", "Let the cake cool down."], ["slice", "dilimlemek", "Slice the cake."]],
  },
  omlet: {
    label: "Kahvaltı",
    title: "İngilizce Omlet Tarifi",
    englishTitle: "Plain Omelette Recipe",
    image: "/blog/ingilizce-tarifler/images/omlet-hero.webp",
    introEn: "A plain omelette recipe is a simple set of instructions for beating, cooking and folding eggs in butter.",
    introTr: "İngilizce omlet tarifi; çırpılmış yumurtanın tavada tereyağıyla pişirilip ikiye katlanmasıyla hazırlanan kahvaltı yemeğinin İngilizce anlatımıdır.",
    time: "10 dakika", serves: "1 kişilik", level: "A1–A2", calories: "200 kcal",
    ingredients: [["Eggs", "Yumurta — omletin temel malzemesi.", "2 adet"], ["Butter", "Tereyağı — omletin yapışmasını önler.", "1 tbsp"], ["Salt", "Tuz — lezzet verir.", "1 pinch"], ["Black pepper", "Karabiber — baharatsı tat katar.", "1 pinch"]],
    steps: [
      ["1. Crack the Eggs into a Bowl (Yumurtaları Bir Kaseye Kırın)", "Crack 2 eggs into a bowl.", "2 yumurtayı bir kaseye kırın."],
      ["2. Beat the Eggs with Salt and Pepper (Yumurtaları Çırpın)", "Beat the eggs with 1 pinch of salt and pepper for 30 seconds.", "Yumurtaları 1 tutam tuz ve karabiberle 30 saniye çırpın."],
      ["3. Heat the Butter in a Pan (Tereyağını Tavada Isıtın)", "Heat 1 tablespoon of butter in a pan for 1 minute.", "Tavada 1 yemek kaşığı tereyağını 1 dakika ısıtın."],
      ["4. Pour the Egg Mixture into the Pan (Yumurtaları Tavaya Dökün)", "Pour the egg mixture into the pan and cook for 2 minutes.", "Yumurta karışımını tavaya dökün ve 2 dakika pişirin."],
      ["5. Fold the Omelette and Serve (Omleti Katlayın ve Servis Edin)", "Fold the omelette in half and serve it hot.", "Omleti ikiye katlayın ve sıcak servis edin."],
    ],
    equipment: [["Non-stick pan", "Tava", "Adım 3, 4, 5"], ["Mixing bowl", "Kase", "Adım 1, 2"], ["Whisk / Fork", "Çırpıcı veya çatal", "Adım 2"], ["Spatula", "Spatula", "Adım 5"]],
    vocab: [["crack", "kırmak", "Crack 2 eggs into a bowl."], ["beat", "çırpmak", "Beat the eggs for 30 seconds."], ["heat", "ısıtmak", "Heat 1 tbsp of butter."], ["pour", "dökmek", "Pour the mixture into the pan."], ["fold", "katlamak", "Fold the omelette in half."], ["whisk", "telle çırpmak", "Whisk to add air for a fluffy texture."], ["fluffy", "kabarık / yumuşak", "Whisk the eggs for a fluffy omelette."]],
  },
};

const root = document.querySelector("#content");
const table = (headers, rows) => `<table><thead><tr>${headers.map(h => `<th>${h}</th>`).join("")}</tr></thead><tbody>${rows.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join("")}</tr>`).join("")}</tr></tbody></table>`;

function setStructuredData(data = null) {
  document.querySelector("#recipe-structured-data")?.remove();
  if (!data) return;
  const script = document.createElement("script");
  script.id = "recipe-structured-data";
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
}

function getRelatedRecipesHTML(currentSlug) {
  const availableSlugs = Object.keys(recipes).filter(s => s !== currentSlug).slice(0, 3);
  return `
    <section class="related-recipes" aria-labelledby="related-title">
      <div>
        <p class="eyebrow">DERS GEÇİŞLERİ</p>
        <h2 id="related-title">Diğer İngilizce Tarifler</h2>
        <p class="section-intro">Farklı mutfak kelimelerini ve tarif kalıplarını diğer lezzetli tariflerle öğrenmeye devam edin.</p>
      </div>
      <div class="related-grid">
        ${availableSlugs.map(slug => {
          const item = recipes[slug];
          return `
            <a href="/blog/ingilizce-tarifler/${slug}" class="related-card">
              <span class="recipe-badge">${item.label} · ${item.level}</span>
              <strong>${item.title}</strong>
              <small>${item.englishTitle}</small>
              <b class="card-link-btn">Tarife git →</b>
            </a>
          `;
        }).join("")}
      </div>
    </section>
  `;
}

function getMidPageCTAHTML() {
  return `
    <aside class="pro-course-banner" aria-label="Konuşarak Öğren Kurs CTA">
      <div class="pro-banner-content">
        <div class="pro-banner-header">
          <img src="ko-logo-yatay.png" alt="Konuşarak Öğren Logo" class="pro-banner-logo" />
        </div>
        <div class="pro-banner-body">
          <small class="cta-eyebrow">BİREBİR İNGİLİZCE KONUŞMA PRATİĞİ</small>
          <h2 class="pro-cta-heading">Ana Dili İngilizce Olan Eğitmenlerle Günde 10 Dakika Konuşarak İngilizce Öğrenin!</h2>
          <ul class="pro-banner-features">
            <li><span>✓</span> Ezber Yok, Doğal Konuşma</li>
            <li><span>✓</span> Birebir Canlı Dersler</li>
            <li><span>✓</span> Esnek Ders Saatleri</li>
          </ul>
        </div>
        <div class="pro-banner-action">
          <button class="cta-btn cta-btn-orange cta-btn-lg" onclick="window.location.href='https://student.konusarakogren.com/auth/register'">
            Ücretsiz Tanışma Dersi Al <span class="arrow">→</span>
          </button>
        </div>
      </div>
    </aside>
  `;
}

function renderHome() {
  setStructuredData();
  root.innerHTML = `<div class="index">
    <p class="eyebrow">Temsilci tarif sayfaları</p>
    <h1>Bildiğiniz tariflerle İngilizce öğrenin.</h1>
    <p class="lede">Ana yemek, tatlı ve içecek kategorilerindeki tariflerle İngilizce mutfak kelimelerini ve yönergeleri adım adım öğrenin.</p>
    <ul class="page-cards">
      ${Object.entries(recipes).map(([slug, r]) => `
        <li class="recipe-card">
          <span class="recipe-card-badge">${r.label} · ${r.level}</span>
          <p class="recipe-card-title">
            <a href="/blog/ingilizce-tarifler/${slug}">${r.title}</a>
          </p>
          <p class="recipe-card-subtitle">${r.englishTitle}</p>
          <strong class="recipe-card-action">Sayfayı incele →</strong>
        </li>
      `).join("")}
    </ul>
  </div>`;
  document.title = "İngilizce Tarifler | Konuşarak Öğren Blog";
}

function renderRecipe(r, slug) {
  setStructuredData();
  document.title = `${r.title} | Konuşarak Öğren`;
  root.innerHTML = `<article class="recipe-guide">
    <div class="reading-progress" aria-hidden="true"><span></span></div>
    <header class="hero">
      <div>
        <p class="eyebrow">${r.label}</p>
        <h1>${r.title}</h1>
        <aside class="course-banner" aria-label="İngilizce kursu">
          <div class="course-banner-text">
            <small class="cta-eyebrow">KONUŞARAK ÖĞREN İNGİLİZCE KURSU</small>
            <strong class="cta-heading">İngilizceyi tarif ezberleyerek değil, konuşarak öğrenin.</strong>
          </div>
          <button class="cta-btn cta-btn-orange" onclick="window.location.href='https://student.konusarakogren.com/auth/register'">
            Ücretsiz tanışma dersi <span class="arrow">→</span>
          </button>
        </aside>
        <p class="lede"><strong>${r.englishTitle}.</strong> ${r.introTr}</p>
      </div>
      <figure class="hero-visual">
        <img src="${r.image || '/blog/ingilizce-tarifler/images/baklava-hero.webp'}" alt="${r.title}">
        <figcaption>${r.englishTitle} · ${r.title}</figcaption>
      </figure>
      <aside class="hero-card" aria-label="Tarif özeti">
        <dl>
          <div><dt>Süre</dt><dd>${r.time}</dd></div>
          <div><dt>Porsiyon</dt><dd>${r.serves}</dd></div>
          <div><dt>İngilizce seviyesi</dt><dd>${r.level}</dd></div>
          <div><dt>Kalori</dt><dd>${r.calories}</dd></div>
        </dl>
      </aside>
    </header>
    <div class="page-grid">
      <nav class="toc" aria-label="İçindekiler">
        <a href="#tanim" data-scroll-target="tanim">Tanım</a>
        <a href="#malzemeler" data-scroll-target="malzemeler">Malzemeler</a>
        <a href="#adimlar" data-scroll-target="adimlar">Adımlar</a>
        <a href="#ekipman" data-scroll-target="ekipman">Ekipman</a>
        <a href="#dil-bilgisi" data-scroll-target="dil-bilgisi">Dil bilgisi</a>
        <a href="#alistirma" data-scroll-target="alistirma">Alıştırma</a>
      </nav>
      <div class="content">
        <section id="tanim">
          <p class="eyebrow">Tanım</p>
          <h2>${r.englishTitle} nedir?</h2>
          <div class="bilingual">
            <div class="language-card"><small>İngilizce</small><p>${r.introEn}</p></div>
            <div class="language-card"><small>Türkçe</small><p>${r.introTr}</p></div>
          </div>
          <aside class="app-banner">
            <div class="app-icon" aria-hidden="true"><img src="ko-logo-papagan.png" alt="Konuşarak Öğren Logo" /></div>
            <div class="app-banner-text">
              <small class="cta-eyebrow">KONUŞARAK ÖĞREN UYGULAMASI</small>
              <strong class="cta-heading">Her gün 10 dakika konuşma pratiğini cebinize alın.</strong>
            </div>
            <div class="app-actions">
              <a href="https://apps.apple.com/tr/app/konu%C5%9Farak-%C3%B6%C4%9Fren-i-ngilizce/id1099431274" target="_blank" rel="noopener" class="cta-btn cta-btn-outline">App Store</a>
              <a href="https://play.google.com/store/apps/details?id=com.konusarakogren.m.konusarakogrenmobil&hl=tr" target="_blank" rel="noopener" class="cta-btn cta-btn-blue">Google Play</a>
            </div>
          </aside>
        </section>
        <section id="malzemeler">
          <p class="eyebrow">Malzemeler</p>
          <h2>Hangi malzemeler gerekir?</h2>
          <p>Malzemeler İngilizce ve Türkçe karşılıklarıyla, ölçüleri rakamla gösterilmiştir.</p>
          ${table(["İngilizce malzeme", "Türkçe karşılığı", "Miktar"], r.ingredients)}
        </section>
        <section id="adimlar">
          <p class="eyebrow">Yapılış</p>
          <h2>Adım adım nasıl yapılır?</h2>
          <p>Talimatlar İngilizce emir kipiyle başlar; <em>first, then, after that</em> ve <em>finally</em> adımları sıralar.</p>
          <ol class="steps">${r.steps.map(s => `<li><div><h3>${s[0]}</h3><p><strong>${s[1]}</strong></p><p class="translation">${s[2]}</p></div></li>`).join("")}</ol>
        </section>
        <section id="ekipman">
          <p class="eyebrow">Mutfak araçları</p>
          <h2>Hangi mutfak araçları kullanılır?</h2>
          ${table(["İngilizce araç adı", "Türkçe karşılığı", "Kullanıldığı adım"], r.equipment)}
        </section>
        <section id="dil-bilgisi">
          <p class="eyebrow">Mutfakta İngilizce</p>
          <h2>Temel İngilizce mutfak kelimeleri</h2>
          <div class="vocab">${(r.vocab || sharedVocab).map(v => `<article><h3>${v[0]}</h3><strong>${v[1]}</strong><p>${v[2]}</p></article>`).join("")}</div>
          <h3>Emir kipi</h3>
          <p>İngilizce tarif talimatları özne almadan fiilin yalın hâliyle başlar: <strong>${r.steps[0][1]}</strong> Olumsuz talimatta <em>do not</em> kullanılır: <strong>Do not overcook it.</strong></p>
        </section>
        <section id="alistirma">
          <div class="exercise">
            <p class="eyebrow">8. sınıf İngilizce</p>
            <h2>4 soruluk mini alıştırma</h2>
            <ol>
              <li>Tarifin ana malzemesi nedir?</li>
              <li>İlk talimat hangi İngilizce fiille başlıyor?</li>
              <li>Tarifin hazırlanması ne kadar sürüyor?</li>
              <li>Son adımı Türkçe olarak yazın.</li>
            </ol>
          </div>
        </section>
        ${getMidPageCTAHTML()}
        ${getRelatedRecipesHTML(slug)}
      </div>
    </div>
  </article>`;
}

const pastaVariants = [
  {
    title: "Sade Makarna Tarifi",
    briefTitle: "İngilizce Pasta Recipe: Sade Makarna Tarifi",
    ingredientsHeading: "Sade Makarna Tarifinin İngilizce Malzemeleri Nelerdir?",
    stepsHeading: "İngilizce Makarna Pişirme Adımları Nasıl Yazılır?",
    english: "Plain Pasta Recipe",
    description: "Plain pasta is boiled pasta finished with butter or olive oil. / Sade makarna, haşlandıktan sonra tereyağı veya zeytinyağıyla tamamlanan makarnadır.",
    image: "/blog/ingilizce-tarifler/images/makarna-hero.webp",
    alt: "A bowl of plain cooked pasta ready to serve",
    ingredients: [["Pasta", "Makarna", "200 g"], ["Water", "Su", "2 l"], ["Salt", "Tuz", "1 tsp"], ["Butter", "Tereyağı", "1 tbsp"]],
    steps: "Boil the water, add the pasta, cook for 8–10 minutes, drain and serve. / Suyu kaynatın, makarnayı ekleyin, 8–10 dakika pişirin, süzün ve servis edin.",
  },
  {
    title: "Domates Soslu Makarna",
    briefTitle: "İngilizce Domates Soslu Makarna Tarifi (Pasta with Tomato Sauce)",
    ingredientsHeading: "Domates Soslu Makarnanın İngilizce Malzeme Listesi",
    stepsHeading: "Sos Hazırlama Adımları İngilizce Nasıl Anlatılır?",
    english: "Pasta with Tomato Sauce",
    description: "Pasta with tomato sauce combines cooked pasta with a quick garlic and tomato sauce. / Domates soslu makarna, pişmiş makarnayı sarımsaklı hızlı bir domates sosuyla birleştirir.",
    image: "/blog/ingilizce-tarifler/images/makarna-domatesli.webp",
    alt: "Pasta coated with tomato sauce in a serving bowl",
    ingredients: [["Pasta", "Makarna", "200 g"], ["Crushed tomatoes", "Ezilmiş domates", "250 g"], ["Garlic", "Sarımsak", "2 cloves"], ["Olive oil", "Zeytinyağı", "1 tbsp"]],
    steps: "First, sauté the garlic for 1 minute. Then, add the tomatoes and cook for 10 minutes. Finally, toss with the pasta. / Önce sarımsağı 1 dakika soteleyin. Ardından domatesi ekleyip 10 dakika pişirin. Son olarak makarnayla karıştırın.",
  },
  {
    title: "Spagetti Bolonez",
    briefTitle: "İngilizce Spagetti Bolonez Tarifi (Spaghetti Bolognese Recipe)",
    ingredientsHeading: "Bolonez Sosunun İngilizce Malzemeleri ve Türkçe Karşılıkları",
    stepsHeading: "Kıymalı Sos Pişirme Süreci İngilizce Nasıl Tarif Edilir?",
    english: "Spaghetti Bolognese Recipe",
    description: "Spaghetti Bolognese is spaghetti served with a slow-cooked minced-beef and tomato sauce. / Spagetti Bolonez, kıymalı domates sosuyla servis edilen spagettidir.",
    image: "/blog/ingilizce-tarifler/images/makarna-bolonez.webp",
    alt: "Spaghetti Bolognese with minced beef and tomato sauce",
    ingredients: [["Spaghetti", "Spagetti", "200 g"], ["Minced beef", "Kıyma", "200 g"], ["Tomato purée", "Domates püresi", "250 g"], ["Onion", "Soğan", "1"]],
    steps: "First, brown the beef. Then, add the onion and tomato purée. After that, simmer for 25 minutes and serve over spaghetti. / Önce kıymayı kavurun. Ardından soğan ve domates püresini ekleyin. Daha sonra 25 dakika pişirip spagettinin üzerinde servis edin.",
  },
  {
    title: "Fırında Makarna",
    briefTitle: "İngilizce Fırında Makarna Tarifi (Baked Pasta Recipe)",
    ingredientsHeading: "Beşamel Sos İçin İngilizce Terimler Nelerdir?",
    stepsHeading: "Fırında Makarna Hazırlama Adımları İngilizce Olarak Nasıl Verilir?",
    english: "Baked Pasta Recipe",
    description: "Baked pasta is pasta covered with béchamel sauce and cheese, then browned in the oven. / Fırında makarna, beşamel sos ve peynirle kaplanıp fırında kızartılan makarnadır.",
    image: "/blog/ingilizce-tarifler/images/makarna-firinda.webp",
    alt: "Golden baked pasta with béchamel sauce and cheese",
    ingredients: [["Pasta", "Makarna", "250 g"], ["Milk", "Süt", "500 ml"], ["Flour", "Un", "2 tbsp"], ["Grated cheese", "Rendelenmiş peynir", "150 g"]],
    steps: "First, prepare the béchamel sauce. Then, combine it with the pasta. Finally, add cheese and bake at 190°C for 25 minutes. / Önce beşamel sosu hazırlayın. Ardından makarnayla karıştırın. Son olarak peynir ekleyip 190°C'de 25 dakika pişirin.",
  },
  {
    title: "Fettuccine Alfredo",
    briefTitle: "İngilizce Fettucini Alfredo Tarifi (Fettuccine Alfredo Recipe)",
    ingredientsHeading: "Kremalı Tavuklu Sos için İngilizce Malzeme İsimleri",
    stepsHeading: "Fettucini Alfredo Pişirme Teknikleri İngilizce Nasıl Açıklanır?",
    english: "Fettuccine Alfredo Recipe",
    description: "Fettuccine Alfredo coats ribbon pasta with a creamy butter and Parmesan sauce. / Fettuccine Alfredo, şerit makarnayı tereyağlı ve Parmesanlı kremalı sosla kaplar.",
    image: "/blog/ingilizce-tarifler/images/makarna-alfredo.webp",
    alt: "Creamy Fettuccine Alfredo served with Parmesan",
    ingredients: [["Fettuccine", "Fettuccine makarna", "200 g"], ["Chicken breast", "Tavuk göğsü", "150 g"], ["Cream", "Krema", "200 ml"], ["Parmesan", "Parmesan", "80 g"], ["Butter", "Tereyağı", "2 tbsp"]],
    steps: "First, melt the butter. Then, add the cream and Parmesan. Finally, toss the cooked fettuccine in the sauce. / Önce tereyağını eritin. Ardından krema ve Parmesanı ekleyin. Son olarak pişmiş fettuccineyi sosla karıştırın.",
  },
  {
    title: "Ton Balıklı Makarna",
    briefTitle: "İngilizce Ton Balıklı Makarna Tarifi (Tuna Pasta Recipe)",
    ingredientsHeading: "Ton Balıklı Makarnanın İngilizce Malzemeleri ve Anlamları",
    stepsHeading: "Soğuk Servis Edilen Makarna Tarifleri İngilizce Nasıl Yazılır?",
    english: "Tuna Pasta Recipe",
    description: "Tuna pasta is a quick pasta dish mixed with drained tuna, lemon and olive oil. / Ton balıklı makarna, süzülmüş ton balığı, limon ve zeytinyağıyla karıştırılan hızlı bir makarna yemeğidir.",
    image: "/blog/ingilizce-tarifler/images/makarna-ton-balikli.webp",
    alt: "Tuna pasta with lemon and herbs in a bowl",
    ingredients: [["Pasta", "Makarna", "200 g"], ["Tuna", "Ton balığı", "160 g"], ["Lemon juice", "Limon suyu", "1 tbsp"], ["Olive oil", "Zeytinyağı", "1 tbsp"]],
    steps: "First, cook and cool the pasta. Then, add the drained tuna, lemon juice and olive oil. Finally, mix and serve. / Önce makarnayı pişirip soğutun. Ardından süzülmüş ton balığını, limon suyunu ve zeytinyağını ekleyin. Son olarak karıştırıp servis edin.",
  },
];

function grammarTabs() {
  return `<p class="eyebrow">İngilizce dil kuralları</p><h2>İngilizce Makarna Tarifi Yazarken Dikkat Edilmesi Gereken Dil Kuralları</h2><p class="section-intro">Üç kısa derste kuralı inceleyin, örneği okuyun ve Türkçe karşılığıyla pekiştirin.</p><div class="grammar-tabs"><div class="tab-list" role="tablist" aria-label="Dil kuralı konuları"><button id="tab-overview" role="tab" aria-selected="true" aria-controls="panel-overview" tabindex="0" data-tab="overview"><span>01</span>Genel kurallar</button><button id="tab-imperative" role="tab" aria-selected="false" aria-controls="panel-imperative" tabindex="-1" data-tab="imperative"><span>02</span>Emir kipi</button><button id="tab-sequence" role="tab" aria-selected="false" aria-controls="panel-sequence" tabindex="-1" data-tab="sequence"><span>03</span>Sıra zarfları</button></div><div class="tab-panels"><div id="panel-overview" class="tab-panel" role="tabpanel" aria-labelledby="tab-overview" data-panel="overview">${table(["Kural","İngilizce örnek","Türkçe karşılığı"],[["Emir kipi","Boil the water.","Suyu kaynatın."],["Sıra zarfları","First, boil the water.","Önce suyu kaynatın."],["Sayılabilen/sayılamayan isimler","Add two tomatoes and some salt.","İki domates ve biraz tuz ekleyin."],["Ölçü ifadeleri","Add 1 tablespoon of oil.","1 yemek kaşığı yağ ekleyin."]])}</div><div id="panel-imperative" class="tab-panel" role="tabpanel" aria-labelledby="tab-imperative" data-panel="imperative" hidden><h3>İngilizce Makarna Tarif Metinlerinde Emir Kipi (Imperative) Nasıl Kullanılır?</h3><p class="section-intro">Emir kipi, özne kullanmadan fiilin yalın hâliyle başlar: <strong>Boil, add, cook, drain, serve.</strong> Olumsuz talimatta <em>do not</em> kullanılır.</p>${table(["İngilizce emir","Türkçe karşılığı","Fiil"],[["Boil the water.","Suyu kaynatın.","boil"],["Add the pasta.","Makarnayı ekleyin.","add"],["Cook for 10 minutes.","10 dakika pişirin.","cook"],["Drain the pasta.","Makarnayı süzün.","drain"],["Serve while hot.","Sıcakken servis edin.","serve"]])}</div><div id="panel-sequence" class="tab-panel" role="tabpanel" aria-labelledby="tab-sequence" data-panel="sequence" hidden><h3>Bağlaçlar ve Sıra Zarfları: First, Then, After That, Finally</h3>${table(["Sıra zarfı","Türkçe karşılığı","Örnek"],[["First","Önce","First, boil the water."],["Then","Ardından","Then, add the pasta."],["After that","Daha sonra","After that, cook for 10 minutes."],["Next","Sonra","Next, drain the pasta."],["Finally","Son olarak","Finally, serve while hot."]])}<div class="language-card sequence"><small>Kısa tarif paragrafı</small><p>First, boil the water. Then, add the salt and pasta. After that, cook for 8–10 minutes. Next, drain the pasta and add butter. Finally, serve it while hot.</p><p class="translation">Önce suyu kaynatın. Ardından tuz ve makarnayı ekleyin. Daha sonra 8–10 dakika pişirin. Sonra makarnayı süzüp tereyağı ekleyin. Son olarak sıcakken servis edin.</p></div></div></div></div>`;
}

function renderPastaPage() {
  const r = recipes.makarna;
  const vocab = [
    ["boil", "kaynatmak", "Boil the water."], ["drain", "süzmek", "Drain the pasta."],
    ["sauté", "sotelemek", "Sauté the garlic."], ["cook", "pişirmek", "Cook for 10 minutes."],
    ["add", "eklemek", "Add the salt."], ["stir", "karıştırmak", "Stir gently."],
    ["simmer", "kısık ateşte pişirmek", "Simmer the sauce."], ["toss", "harmanlamak", "Toss with the sauce."],
    ["bake", "fırında pişirmek", "Bake at 190°C."], ["serve", "servis etmek", "Serve while hot."],
  ];
  document.title = "İngilizce Makarna Tarifi (Makarna Yapılışı İngilizce) | Konuşarak Öğren";
  setStructuredData({
    "@context": "https://schema.org", "@type": "Recipe",
    name: "İngilizce Makarna Tarifi (Makarna Yapılışı İngilizce)",
    image: ["https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?auto=format&fit=crop&w=1600&q=85"],
    author: { "@type": "Organization", name: "Konuşarak Öğren" },
    datePublished: "2026-07-29",
    description: "İngilizce sade makarna tarifi; malzemeler, pişirme adımları ve Türkçe karşılıkları.",
    prepTime: "PT5M", cookTime: "PT10M", totalTime: "PT15M", recipeYield: "2 porsiyon",
    recipeCategory: "Ana yemek", recipeCuisine: "İtalyan",
    nutrition: { "@type": "NutritionInformation", calories: "310 calories" },
    recipeIngredient: ["200 g pasta", "2 l water", "1 teaspoon salt", "1 tablespoon butter or olive oil"],
    recipeInstructions: r.steps.map((step, index) => ({ "@type": "HowToStep", position: index + 1, name: step[0], text: step[1] }))
  });
  root.innerHTML = `<article class="pasta-guide">
    <div class="reading-progress" aria-hidden="true"><span></span></div>
    <header class="hero"><div><p class="eyebrow">İngilizce yemek tarifleri</p><h1>İngilizce Makarna Tarifi (Makarna Yapılışı İngilizce)</h1><aside class="course-banner" aria-label="İngilizce kursu"><div class="course-banner-text"><small class="cta-eyebrow">KONUŞARAK ÖĞREN İNGİLİZCE KURSU</small><strong class="cta-heading">İngilizceyi tarif ezberleyerek değil, konuşarak öğrenin.</strong></div><button class="cta-btn cta-btn-orange" onclick="window.location.href='https://student.konusarakogren.com/auth/register'">Ücretsiz tanışma dersi <span class="arrow">→</span></button></aside><p class="lede"><strong>Plain Pasta Recipe.</strong> İngilizce makarna tarifi; malzemeleri, emir kipindeki pişirme adımlarını ve Türkçe karşılıklarını birlikte öğreten uygulamalı bir İngilizce rehberidir.</p><div class="article-meta"><span class="author-mark" aria-hidden="true">KO</span><span><strong>Konuşarak Öğren Editör</strong><small>Yayınlanma tarihi: <time datetime="2026-07-29">29 Temmuz 2026</time></small></span></div></div><figure class="hero-visual"><img src="/blog/ingilizce-tarifler/images/makarna-hero.webp" alt="Masada servis edilmeye hazır sade makarna tabağı"><figcaption>Plain pasta · sade makarna</figcaption></figure><aside class="hero-card pasta-facts" aria-label="Tarif özeti"><table class="recipe-facts"><caption>Sade makarna tarifi özeti</caption><thead><tr><th scope="col">Hazırlık</th><th scope="col">Pişirme</th><th scope="col">Porsiyon</th><th scope="col">Seviye</th></tr></thead><tbody><tr><td><span class="fact-value" tabindex="0" aria-label="Hazırlık süresi 5 dakikadır." data-verbalization="Hazırlık süresi 5 dakikadır.">5 dakika</span></td><td><span class="fact-value" tabindex="0" aria-label="Pişirme süresi 10 dakikadır." data-verbalization="Pişirme süresi 10 dakikadır.">10 dakika</span></td><td><span class="fact-value" tabindex="0" aria-label="Tarif 2 kişiliktir." data-verbalization="Tarif 2 kişiliktir.">2 kişilik</span></td><td><span class="fact-value" tabindex="0" aria-label="İngilizce seviyesi A2 ile B1 arasındadır." data-verbalization="İngilizce seviyesi A2 ile B1 arasındadır.">A2–B1</span></td></tr></tbody></table></aside></header>
    <div class="page-grid"><nav class="toc" aria-label="İçindekiler"><a href="#kavramlar" data-scroll-target="kavramlar">Kavramlar</a><a href="#tarifler" data-scroll-target="tarifler">Tarifler</a><a href="#sade-makarna" data-scroll-target="sade-makarna">Adımlar</a><a href="#besin-degerleri" data-scroll-target="besin-degerleri">Besin değerleri</a><a href="#olculer" data-scroll-target="olculer">Ölçüler</a><a href="#dil-kurallari" data-scroll-target="dil-kurallari">Dil kuralları</a><a href="#alistirma" data-scroll-target="alistirma">Alıştırma</a></nav>
    <div class="content">
      <section id="kavramlar"><p class="eyebrow">Temel kavramlar ve çeviriler</p><h2>İngilizce Makarna Tarifi Nedir? Temel Kavramlar ve Çeviriler</h2><h3>Makarna İngilizcede Ne Anlama Gelir?</h3><p class="section-intro">İngilizcede <strong>pasta</strong> genel kategoriyi, <strong>spaghetti</strong>, <strong>penne</strong> ve <strong>fettuccine</strong> ise belirli makarna biçimlerini anlatır. Tarif boyunca İngilizce talimat önce, Türkçe açıklama hemen sonra verilir.</p>${table(["İngilizce kavram", "Türkçe karşılığı", "İlgili tarif"], [["pasta","makarna","Tüm tarifler"],["plain pasta","sade makarna","Sade makarna"],["spaghetti","spagetti","Bolonez"],["fettuccine","şerit makarna","Alfredo"],["penne","kalem makarna","Domates soslu veya fırında makarna"]])}<h3>İngilizce Tarif Yazımında Kullanılan Fiiller: Boil, Drain, Saute, Cook</h3>${table(["Fiil", "Türkçe karşılığı", "Örnek cümle"], [["Boil","Kaynatmak","Boil 2 l of water. / 2 l su kaynatın."],["Drain","Süzmek","Drain the pasta. / Makarnayı süzün."],["Saute / Sauté","Sotelemek","Sauté the garlic. / Sarımsağı soteleyin."],["Cook","Pişirmek","Cook for 10 minutes. / 10 dakika pişirin."]])}</section>
      <div id="tarifler" class="recipe-chapters"><div class="chapter-intro"><p class="eyebrow">6 tarif çeşidi</p><p class="section-intro">Her tarifte tanım, İngilizce–Türkçe malzemeler, miktarlar ve kısa yapılış birlikte verilmiştir. Başlıklara dokunarak öğrenme panellerini açabilirsiniz.</p></div>${pastaVariants.map((v, i) => `<section class="recipe-chapter"><div class="chapter-head"><span class="variant-number">${String(i + 1).padStart(2,"0")}</span><div><h2>${v.briefTitle}</h2><p>${v.description}</p></div></div><figure><img src="${v.image}" alt="${v.alt}" loading="lazy"><figcaption>${v.english}</figcaption></figure><div class="chapter-panels"><details class="learning-panel" ${i === 0 ? "open" : ""}><summary><h3>${v.ingredientsHeading}</h3><span>Malzeme tablosu</span></summary><div class="panel-body">${table(["İngilizce malzeme","Türkçe karşılığı","Miktar"],v.ingredients)}</div></details><details class="learning-panel"><summary><h3>${v.stepsHeading}</h3><span>Yöntemi göster</span></summary><div class="panel-body"><p class="method-note">${v.steps}</p></div></details></div></section>`).join("")}</div>
      <section id="sade-makarna"><div class="steps-heading"><p class="eyebrow">Sabit 6 adım</p><h2>Plain Pasta İngilizce Adım Adım Nasıl Yapılır? (How Do You Make Plain Pasta Step by Step?)</h2><p class="section-intro">Bu sade makarna tarifi 6 adımdan oluşur ve yaklaşık 15 dakika sürer. İngilizce cümleler emir kipiyle başlar.</p><div class="steps-meta"><span>6 adım</span><span>15 dakika</span><span>A2–B1 seviye</span></div></div><ol class="steps">${r.steps.map(s => `<li><div class="step-copy"><h3>${s[0]}</h3><div class="step-language"><span class="lang-label">English</span><p><strong>${s[1]}</strong></p></div><div class="step-language turkish"><span class="lang-label">Türkçe</span><p>${s[2]}</p></div></div></li>`).join("")}</ol>${table(["Adım","İngilizce talimat","Türkçe açıklama"],r.steps.map((s,i)=>[i+1,s[1],s[2]]))}</section>
      <section id="malzemeler-ve-ekipman"><p class="eyebrow">Malzemeler ve ekipman</p><h2>Which Ingredients Do You Need to Cook Pasta? (Makarna Pişirmek İçin Hangi Malzemeler Gerekir?)</h2>${table(["İngilizce malzeme","Türkçe karşılığı","Miktar"],r.ingredients)}<h3>Which Kitchen Equipment Is Used to Cook Pasta? (Makarna Pişirmek İçin Hangi Mutfak Ekipmanları Kullanılır?)</h3>${table(["İngilizce ekipman","Türkçe karşılığı","Kullanıldığı adım"],[["Large pot","Büyük tencere","1–3"],["Measuring spoon","Ölçü kaşığı","2 ve 5"],["Wooden spoon","Tahta kaşık","2, 3 ve 5"],["Colander","Süzgeç","4"],["Serving bowl","Servis kasesi","6"]])}</section>
      <section id="besin-degerleri"><p class="eyebrow">Kalori ve besin değerleri</p><h2>How Many Calories Are in a Serving of Pasta? (Bir Porsiyon Makarna Kaç Kalori?)</h2><p class="section-intro">Sossuz, pişmiş makarnanın enerji değeri yaklaşık <strong>158 kcal/100 g</strong>; 180 g'lık örnek bir porsiyonun enerji değeri yaklaşık <strong>284 kcal</strong> kabul edilebilir. Kullanılan makarna ve yağ miktarı sonucu değiştirir.</p>${table(["Porsiyon","Kalori","Açıklama"],[["100 g pişmiş makarna","158 kcal","Sossuz yaklaşık değer"],["1 porsiyon (180 g)","284 kcal","Yağ ve sos hariç yaklaşık değer"]])}<h3>What Are the Nutrition Facts of Plain Pasta? (Sade Makarnanın Besin Değerleri Nelerdir?)</h3>${table(["İngilizce besin ögesi","Türkçe karşılığı","100 g'daki miktar"],[["Protein","Protein","5.8 g"],["Carbohydrate","Karbonhidrat","30.9 g"],["Fat","Yağ","0.9 g"],["Dietary fiber","Lif","1.8 g"]])}<p class="source-note">Değerler genel pişmiş makarna verilerine dayalı yaklaşık eğitim değerleridir. Kaynak yöntemi: <a href="https://fdc.nal.usda.gov/" target="_blank" rel="noreferrer">USDA FoodData Central</a>.</p></section>
      <section id="olculer"><p class="eyebrow">Ölçü birimleri ve kelimeler</p><h2>İngilizce Makarna Tariflerinde Kullanılan Ölçü Birimleri Nelerdir?</h2><p class="section-intro">İngilizce makarna tariflerinde <strong>cup, tablespoon, teaspoon, gram</strong> ve <strong>milliliter</strong> birimleri kullanılır.</p><h3>Makarna Tarif Metninde Geçen Temel İngilizce Mutfak Kelimeleri Nelerdir?</h3><div class="vocab vocab-wide">${vocab.map(v=>`<article><h4>${v[0]}</h4><strong>${v[1]}</strong><p>${v[2]}</p></article>`).join("")}</div><h3>Tablespoon, Teaspoon, Cup: İngilizce Ölçü Birimlerinin Türkçe Karşılıkları</h3>${table(["İngilizce birim","Türkçe karşılığı","Metrik karşılığı","Tarif örneği"],[["cup","su bardağı","240 ml","Add 1 cup of sauce."],["tablespoon (tbsp)","yemek kaşığı","15 ml","Add 1 tablespoon of oil."],["teaspoon (tsp)","çay kaşığı","5 ml","Add 1 teaspoon of salt."]])}<h3>Gram ve Litre İngilizce Tariflerde Nasıl Kullanılır?</h3>${table(["Metrik birim","Emperyal karşılığı","Türkçe açıklama"],[["100 g","3.5 oz","Yaklaşık 100 gram"],["1 l","4.2 cups","Yaklaşık 1 litre"]])}</section>
      <section id="dil-kurallari"><p class="eyebrow">İngilizce dil kuralları</p><h2>İngilizce Makarna Tarifi Yazarken Dikkat Edilmesi Gereken Dil Kuralları</h2>${table(["Kural","İngilizce örnek","Türkçe karşılığı"],[["Emir kipi","Boil the water.","Suyu kaynatın."],["Sıra zarfları","First, boil the water.","Önce suyu kaynatın."],["Sayılabilen/sayılamayan isimler","Add two tomatoes and some salt.","İki domates ve biraz tuz ekleyin."],["Ölçü ifadeleri","Add 1 tablespoon of oil.","1 yemek kaşığı yağ ekleyin."]])}<h3>İngilizce Makarna Tarif Metinlerinde Emir Kipi (Imperative) Nasıl Kullanılır?</h3><p class="section-intro">Emir kipi, özne kullanmadan fiilin yalın hâliyle başlar: <strong>Boil, add, cook, drain, serve.</strong> Olumsuz talimatta <em>do not</em> kullanılır: <strong>Do not overcook the pasta. / Makarnayı fazla pişirmeyin.</strong></p>${table(["İngilizce emir","Türkçe karşılığı","Fiil"],[["Boil the water.","Suyu kaynatın.","boil"],["Add the pasta.","Makarnayı ekleyin.","add"],["Cook for 10 minutes.","10 dakika pişirin.","cook"],["Drain the pasta.","Makarnayı süzün.","drain"],["Serve while hot.","Sıcakken servis edin.","serve"]])}<h3>Bağlaçlar ve Sıra Zarfları: First, Then, After That, Finally</h3>${table(["Sıra zarfı","Türkçe karşılığı","Örnek"],[["First","Önce","First, boil the water."],["Then","Ardından","Then, add the pasta."],["After that","Daha sonra","After that, cook for 10 minutes."],["Next","Sonra","Next, drain the pasta."],["Finally","Son olarak","Finally, serve while hot."]])}<div class="language-card sequence"><small>Kısa tarif paragrafı</small><p>First, boil the water. Then, add the salt and pasta. After that, cook for 8–10 minutes. Next, drain the pasta and add butter. Finally, serve it while hot.</p><p class="translation">Önce suyu kaynatın. Ardından tuz ve makarnayı ekleyin. Daha sonra 8–10 dakika pişirin. Sonra makarnayı süzüp tereyağı ekleyin. Son olarak sıcakken servis edin.</p></div></section>
      <section id="alistirma"><div class="exercise"><p class="eyebrow">Kazanım kontrolü</p><h2>8. sınıf İngilizce Makarna Tarifi</h2><p>Tarif sıralama, emir kipi ve temel mutfak kelimelerini birlikte pekiştirin.</p><ol><li>“Drain the pasta” cümlesinin Türkçe karşılığı nedir?</li><li>Makarnayı kaç dakika pişirmelisiniz?</li><li>Tarifin son adımını İngilizce yazın.</li><li><em>First</em> ve <em>finally</em> kelimelerini kullanarak iki tarif cümlesi kurun.</li></ol></div></section>
      ${getMidPageCTAHTML()}
      ${getRelatedRecipesHTML("makarna")}
    </div></div></article>`;

  const heroCopy = root.querySelector(".pasta-guide .hero > div");
  if (heroCopy) heroCopy.className = "hero-copy";
  const articleMeta = root.querySelector(".article-meta");
  if (articleMeta) articleMeta.outerHTML = `<address class="article-meta" rel="author"><span class="author-mark" aria-hidden="true">KO</span><span><strong>Konuşarak Öğren Editör</strong><small>Yayınlanma tarihi: <time datetime="2026-07-29">29 Temmuz 2026</time></small></span></address>`;
  const heroImage = root.querySelector(".hero-visual img");
  if (heroImage) { heroImage.loading = "eager"; heroImage.fetchPriority = "high"; }
  const heroCaption = root.querySelector(".hero-visual figcaption");
  if (heroCaption) heroCaption.innerHTML = `<strong>Plain Pasta Recipe</strong><span>Domates sosuyla servis edilen makarna tabağı.</span>`;
  root.querySelectorAll(".recipe-chapter figure").forEach((figure, index) => {
    const caption = figure.querySelector("figcaption");
    const variant = pastaVariants[index];
    if (caption && variant) caption.innerHTML = `<strong>${variant.english}</strong><span>${variant.title}</span>`;
  });
  const grammarSection = root.querySelector("#dil-kurallari");
  if (grammarSection) grammarSection.innerHTML = grammarTabs();
  root.querySelector("#kavramlar h2")?.insertAdjacentHTML("afterend", `<aside class="app-banner"><div class="app-icon" aria-hidden="true"><img src="ko-logo-papagan.png" alt="Konuşarak Öğren Logo" /></div><div class="app-banner-text"><small class="cta-eyebrow">KONUŞARAK ÖĞREN UYGULAMASI</small><strong class="cta-heading">Her gün 10 dakika konuşma pratiğini cebinize alın.</strong></div><div class="app-actions"><a href="https://apps.apple.com/tr/app/konu%C5%9Farak-%C3%B6%C4%9Fren-i-ngilizce/id1099431274" target="_blank" rel="noopener" class="cta-btn cta-btn-outline">App Store</a><a href="https://play.google.com/store/apps/details?id=com.konusarakogren.m.konusarakogrenmobil&hl=tr" target="_blank" rel="noopener" class="cta-btn cta-btn-blue">Google Play</a></div></aside>`);
}

const kekVariants = [
  {
    title: "Sade Kek Tarifi",
    briefTitle: "İngilizce Plain Cake Recipe: Sade Kek Tarifi",
    ingredientsHeading: "Sade Kek Tarifinin İngilizce Malzemeleri Nelerdir?",
    stepsHeading: "Sade Kek Pişirme Adımları İngilizce Nasıl Yazılır?",
    english: "Plain Cake Recipe",
    description: "Plain Cake (Sade Kek), diğer üç tarifin de temelini oluşturur: un, şeker, yumurta, süt ve sıvı yağ dışında ekstra bir aroma malzemesi kullanılmaz.",
    image: "/blog/ingilizce-tarifler/images/kek-hero.webp",
    alt: "Plain cake slice on a serving plate",
    ingredients: [["Flour", "Un — kekin ana yapısını oluşturan tahıl unu.", "200 g"], ["Sugar", "Şeker — tatlandırıcı, karbonhidrat kaynağı.", "150 g"], ["Eggs", "Yumurta — hamura bağlayıcılık ve hacim katar.", "3 adet"], ["Milk", "Süt — hamuru sulandıran süt ürünü.", "120 ml"], ["Vegetable Oil", "Sıvı yağ — kekin nem oranını artırır.", "100 ml"], ["Baking Powder", "Kabartma tozu — kekin kabarmasını sağlayan katkı.", "10 g (2 tsp)"], ["Vanilla Extract", "Vanilya özütü — aroma verici sıvı ekstrakt.", "1 tsp"]],
    steps: "First, whisk the eggs and sugar for 2 minutes. Then, add the milk and oil. After that, sift in the flour and baking powder. Finally, pour the batter into the pan and bake at 180°C for 40 minutes.",
  },
  {
    title: "Çikolatalı Kek Tarifi",
    briefTitle: "İngilizce Çikolatalı Kek Tarifi (Chocolate Cake Recipe)",
    ingredientsHeading: "Çikolatalı Kek Malzemeleri ve Kakao Miktarı",
    stepsHeading: "Çikolatalı Kek Pişirme Adımları İngilizce Nasıl Yazılır?",
    english: "Chocolate Cake Recipe",
    description: "Chocolate Cake (Çikolatalı Kek) için sade kek hamuruna sadece kakao tozu eklenir; sonuç koyu renkli ve yoğun aromalı bir kektir.",
    image: "/blog/ingilizce-tarifler/images/kek-cikolatali.webp",
    alt: "Chocolate cake slice on a serving plate",
    ingredients: [["Flour", "Un", "180 g"], ["Cocoa Powder", "Kakao tozu", "30 g"], ["Sugar", "Şeker", "150 g"], ["Eggs", "Yumurta", "3 adet"], ["Milk", "Süt", "120 ml"], ["Vegetable Oil", "Sıvı yağ", "100 ml"], ["Baking Powder", "Kabartma tozu", "10 g (2 tsp)"]],
    steps: "First, whisk the eggs and sugar for 2 minutes. Then, add the milk, oil, and cocoa powder. After that, sift in the flour and baking powder. Finally, pour the batter into the pan and bake at 180°C for 40 minutes.",
  },
  {
    title: "Havuçlu Kek Tarifi",
    briefTitle: "İngilizce Havuçlu Kek Tarifi (Carrot Cake Recipe)",
    ingredientsHeading: "Havuçlu Kek Malzemeleri ve Tarçın Ölçüsü",
    stepsHeading: "Havuçlu Kek Pişirme Adımları İngilizce Nasıl Yazılır?",
    english: "Carrot Cake Recipe",
    description: "Carrot Cake (Havuçlu Kek) rendelenmiş havuç ve tarçın ilavesiyle nemli bir dokuya kavuşur. Süt yerine daha fazla sıvı yağ kullanılır.",
    image: "/blog/ingilizce-tarifler/images/kek-havuclu.webp",
    alt: "Carrot cake topped with cinnamon",
    ingredients: [["Flour", "Un", "200 g"], ["Grated Carrot", "Rendelenmiş havuç", "150 g"], ["Sugar", "Şeker", "150 g"], ["Eggs", "Yumurta", "3 adet"], ["Vegetable Oil", "Sıvı yağ", "120 ml"], ["Cinnamon", "Tarçın", "1 tsp"], ["Baking Powder", "Kabartma tozu", "10 g (2 tsp)"]],
    steps: "First, whisk the eggs and sugar for 2 minutes. Then, add the oil and grated carrot. After that, fold in the flour, cinnamon, and baking powder. Finally, pour the batter into the pan and bake at 180°C for 45 minutes.",
  },
  {
    title: "Limonlu Kek Tarifi",
    briefTitle: "İngilizce Limonlu Kek Tarifi (Lemon Cake Recipe)",
    ingredientsHeading: "Limonlu Kek Malzemeleri ve Aroması",
    stepsHeading: "Limonlu Kek Pişirme Adımları İngilizce Nasıl Yazılır?",
    english: "Lemon Cake Recipe",
    description: "Lemon Cake (Limonlu Kek), limon kabuğu rendesi ve limon suyuyla ekşi-tatlı bir aroma kazanır.",
    image: "/blog/ingilizce-tarifler/images/kek-limonlu.webp",
    alt: "Fresh lemon cake slice garnished with lemon zest",
    ingredients: [["Flour", "Un", "200 g"], ["Sugar", "Şeker", "150 g"], ["Eggs", "Yumurta", "3 adet"], ["Lemon Zest", "Limon kabuğu rendesi", "1 tbsp"], ["Lemon Juice", "Limon suyu", "2 tbsp"], ["Vegetable Oil", "Sıvı yağ", "100 ml"], ["Baking Powder", "Kabartma tozu", "10 g (2 tsp)"]],
    steps: "First, whisk the eggs and sugar for 2 minutes. Then, add the lemon zest and lemon juice. After that, sift in the flour and baking powder. Finally, pour the batter into the pan and bake at 180°C for 40 minutes.",
  },
];

const omletVariants = [
  {
    title: "Sade Omlet Tarifi",
    briefTitle: "İngilizce Plain Omelette Recipe: Sade Omlet Tarifi",
    ingredientsHeading: "Sade Omlet Tarifinin İngilizce Malzemeleri Nelerdir?",
    stepsHeading: "Sade Omlet Pişirme Adımları İngilizce Nasıl Yazılır?",
    english: "Plain Omelette Recipe",
    description: "Plain Omelette (Sade Omlet), çırpılmış yumurtanın tereyağında pişirilip katlanmasıyla hazırlanır; iç harç içermez.",
    image: "/blog/ingilizce-tarifler/images/omlet-hero.webp",
    alt: "Folded plain omelette on a serving plate",
    ingredients: [["Eggs", "Yumurta — temel malzeme.", "2 adet"], ["Butter", "Tereyağı — pişirme yağı.", "1 tbsp"], ["Salt", "Tuz", "1 pinch"], ["Black Pepper", "Karabiber", "1 pinch"]],
    steps: "First, crack 2 eggs into a bowl and beat for 30 seconds. Then, heat 1 tbsp of butter in a pan. After that, pour the eggs and cook for 2 minutes. Finally, fold in half and serve hot.",
  },
  {
    title: "Peynirli Omlet Tarifi",
    briefTitle: "İngilizce Peynirli Omlet Tarifi (Cheese Omelette Recipe)",
    ingredientsHeading: "Peynirli Omlet Malzemeleri ve Peynir Ölçüsü",
    stepsHeading: "Peynirli Omlet Pişirme Adımları İngilizce Nasıl Yazılır?",
    english: "Cheese Omelette Recipe",
    description: "Cheese Omelette (Peynirli Omlet), katlanmadan önce ortasına rendelenmiş peynir eklenen lezzetli bir omlet çeşididir.",
    image: "/blog/ingilizce-tarifler/images/omlet-peynirli.webp",
    alt: "Cheese omelette with melted cheese inside",
    ingredients: [["Eggs", "Yumurta", "2 adet"], ["Grated Cheese", "Rendelenmiş peynir", "3 tbsp"], ["Butter", "Tereyağı", "1 tbsp"], ["Salt", "Tuz", "1 pinch"]],
    steps: "First, beat 2 eggs with salt. Then, pour into the pan with butter. After that, add 3 tbsp of grated cheese over half of the omelette. Finally, fold over the cheese and cook for 1 more minute.",
  },
  {
    title: "Sebzeli Omlet Tarifi",
    briefTitle: "İngilizce Sebzeli Omlet Tarifi (Vegetable Omelette Recipe)",
    ingredientsHeading: "Sebzeli Omlet Malzemeleri ve Çeşitleri",
    stepsHeading: "Sebzeli Omlet Pişirme Adımları İngilizce Nasıl Yazılır?",
    english: "Vegetable Omelette Recipe",
    description: "Vegetable Omelette (Sebzeli Omlet), önceden sotelenmiş biber, domates ve soğan eklenerek hazırlanan besleyici bir omlettir.",
    image: "/blog/ingilizce-tarifler/images/omlet-sebzeli.webp",
    alt: "Vegetable omelette with peppers and tomatoes",
    ingredients: [["Eggs", "Yumurta", "2 adet"], ["Green Pepper", "Yeşil biber", "½ adet"], ["Tomato", "Domates", "½ adet"], ["Onion", "Soğan", "2 tbsp"], ["Butter", "Tereyağı", "1 tbsp"]],
    steps: "First, sauté the chopped vegetables in 1 tbsp of butter for 3 minutes. Then, beat 2 eggs and pour them over the vegetables. After that, cook on low heat for 3 minutes. Finally, fold in half and serve warm.",
  },
  {
    title: "Mantarlı Omlet Tarifi",
    briefTitle: "İngilizce Mantarlı Omlet Tarifi (Mushroom Omelette Recipe)",
    ingredientsHeading: "Mantarlı Omlet Malzemeleri ve Mantar Ölçüsü",
    stepsHeading: "Mantarlı Omlet Pişirme Adımları İngilizce Nasıl Yazılır?",
    english: "Mushroom Omelette Recipe",
    description: "Mushroom Omelette (Mantarlı Omlet), dilimlenmiş ve tereyağında soteleşmiş mantarlarla doldurulan omlet çeşididir.",
    image: "/blog/ingilizce-tarifler/images/omlet-mantarli.webp",
    alt: "Mushroom omelette with sliced cooked mushrooms",
    ingredients: [["Eggs", "Yumurta", "2 adet"], ["Mushrooms", "Dilimlenmiş mantar", "5 adet"], ["Butter", "Tereyağı", "1 tbsp"], ["Salt", "Tuz", "1 pinch"]],
    steps: "First, cook 5 sliced mushrooms in 1 tbsp of butter for 4 minutes. Then, beat 2 eggs and pour over the mushrooms. After that, cook for 2 minutes until set. Finally, fold and serve.",
  },
];

function kekGrammarTabs() {
  return `<p class="eyebrow">İngilizce dil kuralları</p><h2>İngilizce Kek Tarifi Yazarken Dikkat Edilmesi Gereken Dil Kuralları</h2><p class="section-intro">İngilizce tarif yazımının 4 temel dil kuralı şunlardır: emir kipi (imperative mood), sıra zarfları (sequence adverbs), sayılabilir-sayılamayan isimler (countable-uncountable nouns) ve ölçü ifadeleri (measurement expressions).</p><div class="grammar-tabs"><div class="tab-list" role="tablist" aria-label="Dil kuralı konuları"><button id="tab-overview-kek" role="tab" aria-selected="true" aria-controls="panel-overview-kek" tabindex="0" data-tab="overview"><span>01</span>Genel kurallar</button><button id="tab-imperative-kek" role="tab" aria-selected="false" aria-controls="panel-imperative-kek" tabindex="-1" data-tab="imperative"><span>02</span>Emir kipi</button><button id="tab-sequence-kek" role="tab" aria-selected="false" aria-controls="panel-sequence-kek" tabindex="-1" data-tab="sequence"><span>03</span>Sıra zarfları</button></div><div class="tab-panels"><div id="panel-overview-kek" class="tab-panel" role="tabpanel" aria-labelledby="tab-overview-kek" data-panel="overview">${table(["Kural","İngilizce örnek","Türkçe karşılığı"],[["Imperative mood (Emir kipi)","Whisk the eggs.","Yumurtaları çırpın."],["Sequence adverbs (Sıra zarfları)","Then, add the milk.","Ardından sütü ekleyin."],["Countable-uncountable nouns","Add 200 g of flour and 3 eggs.","200 gram un ve 3 yumurta ekleyin."],["Measurement expressions","Add 120 ml of milk.","120 mililitre süt ekleyin."]])}</div><div id="panel-imperative-kek" class="tab-panel" role="tabpanel" aria-labelledby="tab-imperative-kek" data-panel="imperative" hidden><h3>İngilizce Kek Tarif Metinlerinde Emir Kipi (Imperative) Nasıl Kullanılır?</h3><p class="section-intro">Emir kipi (imperative mood), fiilin yalın haliyle başlayan ve özne içermeyen talimat cümlesidir.</p>${table(["English Imperative","Türkçe Karşılığı","Verb"],[["Whisk the eggs and sugar.","Yumurta ve şekeri çırpın.","Whisk"],["Add the milk and oil.","Sütü ve sıvı yağı ekleyin.","Add"],["Sift the flour.","Unu eleyin.","Sift"],["Pour the batter into the pan.","Hamuru kalıba dökün.","Pour"],["Bake the cake for 40 minutes.","Keki 40 dakika pişirin.","Bake"]])}<p class="method-note">Olumsuz emir kipi örneği: <strong>Do not overcook the cake. (Keki fazla pişirmeyin.)</strong></p></div><div id="panel-sequence-kek" class="tab-panel" role="tabpanel" aria-labelledby="tab-sequence-kek" data-panel="sequence" hidden><h3>Bağlaçlar ve Sıra Zarfları: First, Then, After That, Finally</h3><p class="section-intro">First, then, after that, next ve finally zarfları, tarif adımlarını sıralamak için kullanılır.</p>${table(["Sequence Adverb","Türkçe Karşılığı","Example Sentence"],[["First","Önce","First, whisk the eggs and sugar."],["Then","Ardından","Then, add the milk and oil."],["After that","Bunun ardından","After that, sift in the flour."],["Next","Sonra","Next, mix the batter until smooth."],["Finally","Son olarak","Finally, bake the cake for 40 minutes."]])}<div class="language-card sequence"><small>Kısa tarif paragrafı</small><p>First, whisk the eggs and sugar for 2 minutes. Then, add the milk and oil. After that, sift in the flour and baking powder. Next, mix the batter until smooth. Finally, pour the batter into the pan and bake it for 40 minutes.</p><p class="translation">Önce yumurta ve şekeri 2 dakika çırpın. Ardından süt ve sıvı yağı ekleyin. Bunun ardından unu ve kabartma tozunu eleyerek ekleyin. Sonra hamuru pürüzsüz olana kadar karıştırın. Son olarak hamuru kalıba dökün ve 40 dakika pişirin.</p></div></div></div></div>`;
}

function renderKekPage() {
  const r = recipes.kek;
  const vocab = r.vocab;
  document.title = "İngilizce Kek Tarifi (Kek Yapılışı İngilizce) | Konuşarak Öğren";
  setStructuredData({
    "@context": "https://schema.org", "@type": "Recipe",
    name: "İngilizce Kek Tarifi (Kek Yapılışı İngilizce)",
    image: ["https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1600&q=85"],
    author: { "@type": "Organization", name: "Konuşarak Öğren" },
    datePublished: "2026-07-31",
    description: "İngilizce sade kek tarifi; malzemeler, pişirme adımları ve Türkçe karşılıkları.",
    prepTime: "PT15M", cookTime: "PT40M", totalTime: "PT55M", recipeYield: "8 porsiyon",
    recipeCategory: "Tatlı", recipeCuisine: "Uluslararası",
    nutrition: { "@type": "NutritionInformation", calories: "275 calories" },
    recipeIngredient: ["200 g flour", "150 g sugar", "3 eggs", "120 ml milk", "100 ml vegetable oil", "10 g baking powder"],
    recipeInstructions: r.steps.map((step, index) => ({ "@type": "HowToStep", position: index + 1, name: step[0], text: step[1] }))
  });
  root.innerHTML = `<article class="pasta-guide">
    <div class="reading-progress" aria-hidden="true"><span></span></div>
    <header class="hero">
      <div>
        <p class="eyebrow">İngilizce yemek tarifleri</p>
        <h1>İngilizce Kek Tarifi (Kek Yapılışı İngilizce)</h1>
        <aside class="course-banner" aria-label="İngilizce kursu">
          <div class="course-banner-text">
            <small class="cta-eyebrow">KONUŞARAK ÖĞREN İNGİLİZCE KURSU</small>
            <strong class="cta-heading">İngilizceyi tarif ezberleyerek değil, konuşarak öğrenin.</strong>
          </div>
          <button class="cta-btn cta-btn-orange" onclick="window.location.href='https://student.konusarakogren.com/auth/register'">Ücretsiz tanışma dersi <span class="arrow">→</span></button>
        </aside>
        <p class="lede"><strong>Plain Cake Recipe.</strong> İngilizce kek tarifi, malzeme ve pişirme adımlarının İngilizce talimat cümleleriyle verildiği uygulamalı bir rehberdir.</p>
        <div class="article-meta"><span class="author-mark" aria-hidden="true">KO</span><span><strong>Konuşarak Öğren Editör</strong><small>Yayınlanma tarihi: <time datetime="2026-07-31">31 Temmuz 2026</time></small></span></div>
      </div>
      <figure class="hero-visual"><img src="/blog/ingilizce-tarifler/images/kek-hero.webp" alt="Servis tabağında taze pişmiş kek dilimi"><figcaption>Plain Cake · Sade Kek</figcaption></figure>
      <aside class="hero-card pasta-facts" aria-label="Tarif özeti">
        <table class="recipe-facts">
          <caption>Sade kek tarifi özeti</caption>
          <thead><tr><th scope="col">Hazırlık</th><th scope="col">Pişirme</th><th scope="col">Porsiyon</th><th scope="col">Seviye</th></tr></thead>
          <tbody><tr><td><span class="fact-value" tabindex="0">15 dakika</span></td><td><span class="fact-value" tabindex="0">40 dakika</span></td><td><span class="fact-value" tabindex="0">8 dilim</span></td><td><span class="fact-value" tabindex="0">A2–B1</span></td></tr></tbody>
        </table>
      </aside>
    </header>
    <div class="page-grid">
      <nav class="toc" aria-label="İçindekiler">
        <a href="/blog/ingilizce-tarifler/kek#kavramlar" data-scroll-target="kavramlar">Kavramlar</a>
        <a href="/blog/ingilizce-tarifler/kek#tarifler" data-scroll-target="tarifler">Tarifler</a>
        <a href="/blog/ingilizce-tarifler/kek#sade-kek" data-scroll-target="sade-kek">Adımlar</a>
        <a href="/blog/ingilizce-tarifler/kek#besin-degerleri" data-scroll-target="besin-degerleri">Besin değerleri</a>
        <a href="/blog/ingilizce-tarifler/kek#olculer" data-scroll-target="olculer">Ölçüler</a>
        <a href="/blog/ingilizce-tarifler/kek#dil-kurallari" data-scroll-target="dil-kurallari">Dil kuralları</a>
        <a href="/blog/ingilizce-tarifler/kek#alistirma" data-scroll-target="alistirma">Alıştırma</a>
      </nav>
      <div class="content">
        <section id="kavramlar">
          <p class="eyebrow">Temel kavramlar ve çeviriler</p>
          <h2>İngilizce Kek Tarifi Nedir? Temel Kavramlar ve Çeviriler</h2>
          <p class="section-intro">İngilizce kek tarifi nedir sorusunun cevabı, tarifte geçen temel kavramların hangi kek türüyle ilgili olduğunu bilmekten geçer. Aşağıdaki tablo bu kavramları ilgili tarifle eşleştirir.</p>
          ${table(["Kavram (English)", "Türkçe Karşılığı", "İlgili Tarif"], [["Batter", "Kek hamuru (sıvı kıvamda)", "Tüm kek türleri"], ["Icing / Frosting", "Kek kreması / sürme şeker", "Chocolate Cake, Carrot Cake"], ["Zest", "Rende (kabuk rendesi)", "Lemon Cake"], ["Fold in", "Hafifçe karıştırarak eklemek", "Carrot Cake (rendelenmiş havuç)"], ["Cake Pan", "Kek kalıbı", "Tüm kek türleri"]])}
          <h3>Kek İngilizcede Ne Anlama Gelir?</h3>
          <p>İngilizcede <strong>cake</strong>, fırında pişirilen, un ve şeker temelli tatlıların genel adıdır; kek türevleri bu ana kelimeye bir sıfat veya malzeme adı eklenerek oluşur.</p>
          ${table(["English Term", "Türkçe Karşılığı", "Fark"], [["Cake", "Kek (genel terim)", "Tüm fırınlanmış tatlıları kapsar."], ["Sponge Cake", "Pandispanya / Süngerimsi kek", "Yağsız veya az yağlı, hafif dokuludur."], ["Pound Cake", "Tereyağlı ağır kek", "Eşit oranda yağ, şeker, un, yumurta içerir."], ["Cupcake", "Kek (küçük, tek porsiyonluk)", "Küçük kalıplarda pişirilen tekil kek."]])}
          <h3>İngilizce Tarif Yazımında Kullanılan Fiiller: Mix, Whisk, Bake, Pour</h3>
          <p>Kek tarifi yazımında en sık kullanılan dört fiil <strong>mix, whisk, bake ve pour</strong> fiilleridir.</p>
          ${table(["Verb", "Türkçe Karşılığı", "Example Sentence"], [["Mix", "Karıştırmak", "Mix the flour and sugar. / Unu ve şekeri karıştırmaya başlayın."], ["Whisk", "Çırpmak", "Whisk the eggs. / Yumurtaları çırpın."], ["Bake", "Pişirmek (fırında)", "Bake the cake for 40 minutes. / Keki 40 dakika pişirin."], ["Pour", "Dökmek", "Pour the batter into the pan. / Hamuru kalıba dökün."]])}
        </section>
        <div id="tarifler" class="recipe-chapters">
          <div class="chapter-intro">
            <p class="eyebrow">4 kek çeşidi</p>
            <p class="section-intro">Her tarifte tanım, İngilizce–Türkçe malzemeler, miktarlar ve kısa yapılış birlikte verilmiştir. Başlıklara dokunarak öğrenme panellerini açabilirsiniz.</p>
          </div>
          ${kekVariants.map((v, i) => `<section class="recipe-chapter">
            <div class="chapter-head"><span class="variant-number">${String(i + 1).padStart(2, "0")}</span><div><h2>${v.briefTitle}</h2><p>${v.description}</p></div></div>
            <figure><img src="${v.image}" alt="${v.alt}" loading="lazy"><figcaption>${v.english}</figcaption></figure>
            <div class="chapter-panels">
              <details class="learning-panel" ${i === 0 ? "open" : ""}><summary><h3>${v.ingredientsHeading}</h3><span>Malzeme tablosu</span></summary><div class="panel-body">${table(["İngilizce malzeme", "Türkçe karşılığı", "Miktar"], v.ingredients)}</div></details>
              <details class="learning-panel"><summary><h3>${v.stepsHeading}</h3><span>Yöntemi göster</span></summary><div class="panel-body"><p class="method-note">${v.steps}</p></div></details>
            </div>
          </section>`).join("")}
        </div>
        <section id="sade-kek">
          <div class="steps-heading">
            <p class="eyebrow">Sabit 7 adım</p>
            <h2>Plain Cake İngilizce Adım Adım Nasıl Yapılır? (How Do You Make Plain Cake Step by Step?)</h2>
            <p class="section-intro">Bu sade kek tarifi 7 adımdan oluşur ve yaklaşık 40 dakika pişirme süresi gerektirir.</p>
            <div class="steps-meta"><span>7 adım</span><span>40 dakika pişirme</span><span>A2–B1 seviye</span></div>
          </div>
          <ol class="steps">
            ${r.steps.map(s => `<li><div class="step-copy"><h3>${s[0]}</h3><div class="step-language"><span class="lang-label">English</span><p><strong>${s[1]}</strong></p></div><div class="step-language turkish"><span class="lang-label">Türkçe</span><p>${s[2]}</p></div></div></li>`).join("")}
          </ol>
          ${table(["Adım", "İngilizce talimat", "Türkçe açıklama"], r.steps.map((s, i) => [i + 1, s[1], s[2]]))}
        </section>
        <section id="malzemeler-ve-ekipman">
          <p class="eyebrow">Malzemeler ve ekipman</p>
          <h2>What Do You Need to Bake a Cake in English? (İngilizce Kek Yapmak İçin Neler Gerekir?)</h2>
          <p class="section-intro">Kek yapmak için gereken temel malzemeler flour, sugar, eggs, milk, oil ve baking powder'dır.</p>
          ${table(["İngilizce malzeme", "Türkçe karşılığı", "Miktar"], r.ingredients)}
          <h3>Which Baking Equipment Is Required for a Cake? (Kek İçin Hangi Pişirme Ekipmanları Gerekir?)</h3>
          ${table(["İngilizce araç adı", "Türkçe karşılığı", "Kullanıldığı adım"], r.equipment)}
        </section>
        <section id="besin-degerleri">
          <p class="eyebrow">Kalori ve besin değerleri</p>
          <h2>How Many Calories Does a Slice of Cake Contain? (Bir Dilim Kek Kaç Kalori İçerir?)</h2>
          <p class="section-intro">Bir dilim sade kek (yaklaşık 80 gram) ortalama 260-290 kalori içerir. Bu değer, tarifteki yağ ve şeker oranına göre değişir.</p>
          ${table(["Serving", "Calories (kcal)", "Açıklama"], [["100 g", "~350 kcal", "Standart sade kek hamurunun 100 gramı için ortalama değer."], ["1 dilim (~80 g)", "~275 kcal", "Orta boy bir dilim için yaklaşık değer."]])}
          <h3>What Are the Nutrition Facts of Plain Cake? (Sade Kekin Besin Değerleri Nelerdir?)</h3>
          ${table(["Nutrient", "Besin Ögesi", "Amount per 100 g"], [["Protein", "Protein", "~5 g"], ["Carbohydrate", "Karbonhidrat", "~45 g"], ["Fat", "Yağ", "~15 g"], ["Fiber", "Lif", "~1 g"]])}
        </section>
        <section id="olculer">
          <p class="eyebrow">Ölçü birimleri ve kelimeler</p>
          <h2>İngilizce Kek Tariflerinde Kullanılan Ölçü Birimleri Nelerdir?</h2>
          <p class="section-intro">İngilizce kek tariflerinde en sık kullanılan ölçü birimleri cup, tablespoon, teaspoon, gram ve milliliter'dır.</p>
          ${table(["English Unit", "Türkçe Karşılığı", "Metric Equivalent"], [["Cup", "Su bardağı", "240 ml"], ["Tablespoon (tbsp)", "Yemek kaşığı", "15 ml"], ["Teaspoon (tsp)", "Çay kaşığı", "5 ml"], ["Gram (g)", "Gram", "1 g"], ["Milliliter (ml)", "Mililitre", "1 ml"]])}
          <h3>Kek Tarif Metninde Geçen Temel İngilizce Mutfak Kelimeleri Nelerdir?</h3>
          <div class="vocab vocab-wide">
            ${vocab.map(v => `<article><h4>${v[0]}</h4><strong>${v[1]}</strong><p>${v[2]}</p></article>`).join("")}
          </div>
          <h3>Tablespoon, Teaspoon, Cup: İngilizce Ölçü Birimlerinin Türkçe Karşılıkları</h3>
          ${table(["English Unit", "Türkçe Karşılığı", "Metric Equivalent"], [["1 tablespoon", "1 yemek kaşığı", "15 ml"], ["1 teaspoon", "1 çay kaşığı", "5 ml"], ["1 cup", "1 su bardağı", "240 ml"]])}
          <h3>Gram ve Litre İngilizce Tariflerde Nasıl Kullanılır?</h3>
          ${table(["Metric Unit", "Imperial Equivalent", "Türkçe Açıklama"], [["100 g", "3.5 oz", "100 gram, yaklaşık 3.5 ons'a karşılık gelir."], ["1 l", "4.2 cups", "1 litre, yaklaşık 4.2 su bardağına karşılık gelir."]])}
        </section>
        <section id="dil-kurallari">
          ${kekGrammarTabs()}
        </section>
        <section id="alistirma">
          <div class="exercise">
            <p class="eyebrow">Kazanım kontrolü</p>
            <h2>8. Sınıf İngilizce Kek Tarifi Alıştırması</h2>
            <p>Aşağıdaki soruları yanıtlayarak kek tarifi kelimelerini pekiştirin:</p>
            <ol>
              <li>Which verb comes first in the recipe: whisk or bake?</li>
              <li>Fill in the blank: "_____ the flour and baking powder." (Sift)</li>
              <li>How many minutes does the cake bake for? (40 minutes)</li>
              <li>Which word connects the third and fourth steps: first or after that?</li>
            </ol>
          </div>
        </section>
        ${getMidPageCTAHTML()}
        ${getRelatedRecipesHTML("kek")}
      </div>
    </div>
  </article>`;

  const heroCopy = root.querySelector(".pasta-guide .hero > div");
  if (heroCopy) heroCopy.className = "hero-copy";
  const articleMeta = root.querySelector(".article-meta");
  if (articleMeta) articleMeta.outerHTML = `<address class="article-meta" rel="author"><span class="author-mark" aria-hidden="true">KO</span><span><strong>Konuşarak Öğren Editör</strong><small>Yayınlanma tarihi: <time datetime="2026-07-31">31 Temmuz 2026</time></small></span></address>`;
  const heroImage = root.querySelector(".hero-visual img");
  if (heroImage) { heroImage.loading = "eager"; heroImage.fetchPriority = "high"; }
  const heroCaption = root.querySelector(".hero-visual figcaption");
  if (heroCaption) heroCaption.innerHTML = `<strong>Plain Cake Recipe</strong><span>Taze pişmiş sade kek dilimi.</span>`;
  root.querySelectorAll(".recipe-chapter figure").forEach((figure, index) => {
    const caption = figure.querySelector("figcaption");
    const variant = kekVariants[index];
    if (caption && variant) caption.innerHTML = `<strong>${variant.english}</strong><span>${variant.title}</span>`;
  });
  const grammarSection = root.querySelector("#dil-kurallari");
  if (grammarSection) grammarSection.innerHTML = kekGrammarTabs();
  root.querySelector("#kavramlar h2")?.insertAdjacentHTML("afterend", `<aside class="app-banner"><div class="app-icon" aria-hidden="true"><img src="ko-logo-papagan.png" alt="Konuşarak Öğren Logo" /></div><div class="app-banner-text"><small class="cta-eyebrow">KONUŞARAK ÖĞREN UYGULAMASI</small><strong class="cta-heading">Her gün 10 dakika konuşma pratiğini cebinize alın.</strong></div><div class="app-actions"><a href="https://apps.apple.com/tr/app/konu%C5%9Farak-%C3%B6%C4%9Fren-i-ngilizce/id1099431274" target="_blank" rel="noopener" class="cta-btn cta-btn-outline">App Store</a><a href="https://play.google.com/store/apps/details?id=com.konusarakogren.m.konusarakogrenmobil&hl=tr" target="_blank" rel="noopener" class="cta-btn cta-btn-blue">Google Play</a></div></aside>`);
}

function updateSubHeaderActive(currentSlug) {
  document.querySelectorAll(".sub-nav-link").forEach(link => {
    const slug = link.dataset.slug || "";
    link.classList.toggle("active", slug === currentSlug);
  });
}

function handleNavVisibility() {
  const isRecipePage = document.body.classList.contains("is-recipe-page");
  const subHeader = document.querySelector(".sub-header");
  const toc = document.querySelector(".toc");

  if (!isRecipePage || !subHeader) {
    if (subHeader) subHeader.classList.remove("is-hidden");
    return;
  }

  if (toc) {
    const tocRect = toc.getBoundingClientRect();
    if (tocRect.top <= 80) {
      subHeader.classList.add("is-hidden");
    } else {
      subHeader.classList.remove("is-hidden");
    }
  } else {
    subHeader.classList.remove("is-hidden");
  }
}

const BASE_PATH = "/blog/ingilizce-tarifler";

function getSlugFromURL() {
  if (location.hash && location.hash.startsWith("#/")) {
    const hashSlug = location.hash.replace(/^#\/?/, "");
    history.replaceState(null, "", `${BASE_PATH}/${hashSlug}`);
    return hashSlug;
  }
  let pathname = location.pathname;
  if (pathname.endsWith("/")) pathname = pathname.slice(0, -1);
  if (pathname === BASE_PATH || pathname === "" || pathname === "/") {
    return "";
  }
  const slug = pathname.replace(`${BASE_PATH}/`, "").replace(/^\//, "");
  return slug;
}

function navigateTo(url) {
  history.pushState(null, "", url);
  route();
}

function renderOmletPage() {
  const r = recipes.omlet;
  document.title = "İngilizce Omlet Tarifi (Omlet Yapılışı İngilizce) | Konuşarak Öğren";
  setStructuredData({
    "@context": "https://schema.org", "@type": "Recipe",
    name: "İngilizce Omlet Tarifi (Omlet Yapılışı İngilizce)",
    image: ["/blog/ingilizce-tarifler/images/omlet-hero.webp"],
    author: { "@type": "Organization", name: "Konuşarak Öğren" },
    datePublished: "2026-08-24",
    description: "İngilizce sade omlet tarifi; malzemeler, pişirme adımları ve Türkçe karşılıkları.",
    prepTime: "PT3M", cookTime: "PT7M", totalTime: "PT10M", recipeYield: "1 porsiyon",
    recipeCategory: "Kahvaltı", recipeCuisine: "Uluslararası",
    nutrition: { "@type": "NutritionInformation", calories: "200 calories" },
    recipeIngredient: ["2 eggs", "1 tablespoon butter", "1 pinch salt", "1 pinch black pepper"],
    recipeInstructions: r.steps.map((step, index) => ({ "@type": "HowToStep", position: index + 1, name: step[0], text: step[1] }))
  });
  root.innerHTML = `<article class="pasta-guide">
    <div class="reading-progress" aria-hidden="true"><span></span></div>
    <header class="hero">
      <div>
        <p class="eyebrow">İngilizce yemek tarifleri</p>
        <h1>İngilizce Omlet Tarifi (Omlet Yapılışı İngilizce)</h1>
        <aside class="course-banner" aria-label="İngilizce kursu">
          <div class="course-banner-text">
            <small class="cta-eyebrow">KONUŞARAK ÖĞREN İNGİLİZCE KURSU</small>
            <strong class="cta-heading">İngilizceyi tarif ezberleyerek değil, konuşarak öğrenin.</strong>
          </div>
          <button class="cta-btn cta-btn-orange" onclick="window.location.href='https://student.konusarakogren.com/auth/register'">Ücretsiz tanışma dersi <span class="arrow">→</span></button>
        </aside>
        <p class="lede"><strong>Plain Omelette Recipe.</strong> İngilizce omlet tarifi; malzemeleri, çırpma ve katlama adımlarını Türkçe karşılıklarıyla anlatan pratik bir rehberdir.</p>
        <div class="article-meta"><span class="author-mark" aria-hidden="true">KO</span><span><strong>Konuşarak Öğren Editör</strong><small>Yayınlanma tarihi: <time datetime="2026-08-24">24 Ağustos 2026</time></small></span></div>
      </div>
      <figure class="hero-visual"><img src="/blog/ingilizce-tarifler/images/omlet-hero.webp" alt="Servis tabağında sıcak sade omlet"><figcaption>Plain Omelette · Sade Omlet</figcaption></figure>
      <aside class="hero-card pasta-facts" aria-label="Tarif özeti">
        <table class="recipe-facts">
          <caption>Sade omlet tarifi özeti</caption>
          <thead><tr><th scope="col">Hazırlık</th><th scope="col">Pişirme</th><th scope="col">Porsiyon</th><th scope="col">Seviye</th></tr></thead>
          <tbody><tr><td><span class="fact-value" tabindex="0">3 dakika</span></td><td><span class="fact-value" tabindex="0">7 dakika</span></td><td><span class="fact-value" tabindex="0">1 kişilik</span></td><td><span class="fact-value" tabindex="0">A1–A2</span></td></tr></tbody>
        </table>
      </aside>
    </header>
    <div class="page-grid">
      <nav class="toc" aria-label="İçindekiler">
        <a href="/blog/ingilizce-tarifler/omlet#kavramlar" data-scroll-target="kavramlar">Kavramlar</a>
        <a href="/blog/ingilizce-tarifler/omlet#tarifler" data-scroll-target="tarifler">Tarifler</a>
        <a href="/blog/ingilizce-tarifler/omlet#sade-omlet" data-scroll-target="sade-omlet">Adımlar</a>
        <a href="/blog/ingilizce-tarifler/omlet#besin-degerleri" data-scroll-target="besin-degerleri">Besin değerleri</a>
        <a href="/blog/ingilizce-tarifler/omlet#olculer" data-scroll-target="olculer">Ölçüler</a>
        <a href="/blog/ingilizce-tarifler/omlet#dil-kurallari" data-scroll-target="dil-kurallari">Dil kuralları</a>
        <a href="/blog/ingilizce-tarifler/omlet#alistirma" data-scroll-target="alistirma">Alıştırma</a>
      </nav>
      <div class="content">
        <section id="kavramlar">
          <p class="eyebrow">Temel kavramlar ve malzemeler</p>
          <h2>İngilizce Omlet Tarifi: Temel Fiiller, Kelimeler ve Malzemeler</h2>
          <p class="section-intro">İngilizce omlet tarifi okurken ve yazarken bilmeniz gereken temel fiiller, işlem adımları ve mutfak malzemeleri aşağıda 16:9 geniş ekran görsel kartlarımızla sunulmuştur.</p>
          <figure class="vocab-card-visual" style="margin: 2rem 0; text-align: center;">
            <img src="/blog/ingilizce-tarifler/images/omlet-vocab-card.webp" alt="Cooking in English - Omelette Verbs Widescreen Visual Card" style="width: 100%; border-radius: 20px; box-shadow: 0 12px 36px rgba(0,0,0,0.12); border: 1px solid var(--ko-border);" />
            <figcaption style="margin-top: 10px; color: var(--ko-gray-muted); font-size: 14px;"><strong>Cooking in English:</strong> Omlet tariflerinde kullanılan temel fiiller ve işlem adımları kartı.</figcaption>
          </figure>
          ${table(["Fiil / Terim (English)", "Türkçe Karşılığı", "Tarifteki Cümle Örneği"], [["Crack", "Kırmak (Yumurta)", "Crack 2 eggs into a bowl."], ["Beat", "Çırpmak", "Beat the eggs with salt and pepper."], ["Heat", "Isıtmak (Tava/Tereyağı)", "Heat 1 tbsp of butter in a pan."], ["Pour", "Dökmek", "Pour the egg mixture into the pan."], ["Fold", "Katlamak", "Fold the omelette in half."], ["Whisk / Fluffy", "Telle çırpmak / Kabarık", "Whisk the eggs for a fluffy texture."]])}
          
          <h3 style="margin-top: 3rem;">İngilizce Omlet Malzemeleri ve Mutfak Gereçleri</h3>
          <p class="section-intro">Sade, peynirli, sebzeli ve mantarlı omlet yapımında kullanılan ana malzemeler ve İngilizce karşılıkları:</p>
          <figure class="vocab-card-visual" style="margin: 2rem 0; text-align: center;">
            <img src="/blog/ingilizce-tarifler/images/omlet-ingredients-card.webp" alt="Cooking in English - Omelette Ingredients and Tools Widescreen Card" style="width: 100%; border-radius: 20px; box-shadow: 0 12px 36px rgba(0,0,0,0.12); border: 1px solid var(--ko-border);" />
            <figcaption style="margin-top: 10px; color: var(--ko-gray-muted); font-size: 14px;"><strong>Cooking in English:</strong> Omlet malzemeleri ve mutfak araç-gereçleri görsel kartı.</figcaption>
          </figure>
          ${table(["Malzeme / Araç (English)", "Türkçe Karşılığı", "Miktar / Kullanım"], [["Eggs", "Yumurta", "2 adet (base ingredient)"], ["Butter", "Tereyağı", "1 tbsp (pişirme yağı)"], ["Grated Cheese", "Rendelenmiş Peynir", "3 tbsp (iç harç)"], ["Mushrooms", "Dilimlenmiş Mantar", "5 adet (sotelenmiş mantar)"], ["Salt & Pepper", "Tuz ve Karabiber", "1 pinch (baharat)"], ["Non-stick Pan", "Yapışmaz Tava", "1 adet (pişirme gereci)"]])}
        </section>
        <section id="tarifler" class="recipe-chapters">
          <div class="chapter-intro">
            <p class="eyebrow">4 omlet çeşidi</p>
            <p class="section-intro">Her tarifte tanım, İngilizce–Türkçe malzemeler ve adım detayları yer almaktadır.</p>
          </div>
          ${omletVariants.map((v, i) => `<section class="recipe-chapter"><div class="chapter-head"><span class="variant-number">${String(i + 1).padStart(2,"0")}</span><div><h2>${v.briefTitle}</h2><p>${v.description}</p></div></div><figure><img src="${v.image}" alt="${v.alt}" loading="lazy"><figcaption><strong>${v.english}</strong><span>${v.title}</span></figcaption></figure><div class="chapter-panels"><details class="learning-panel" ${i === 0 ? "open" : ""}><summary><h3>${v.ingredientsHeading}</h3><span>Malzeme tablosu</span></summary><div class="panel-body">${table(["İngilizce malzeme","Türkçe karşılığı","Miktar"],v.ingredients)}</div></details><details class="learning-panel"><summary><h3>${v.stepsHeading}</h3><span>Yöntemi göster</span></summary><div class="panel-body"><p class="method-note">${v.steps}</p></div></details></div></section>`).join("")}
        </section>
        <section id="sade-omlet">
          <div class="steps-heading">
            <p class="eyebrow">Adım adım omlet yapılışı</p>
            <h2>Plain Omelette İngilizce Adım Adım Nasıl Yapılır?</h2>
            <p class="section-intro">Sade omlet 5 adımda hazırlanır. İngilizce cümleler emir kipiyle (imperative) kurulur.</p>
          </div>
          <ol class="steps">${r.steps.map(s => `<li><div class="step-copy"><h3>${s[0]}</h3><div class="step-language"><span class="lang-label">English</span><p><strong>${s[1]}</strong></p></div><div class="step-language turkish"><span class="lang-label">Türkçe</span><p>${s[2]}</p></div></div></li>`).join("")}</ol>
        </section>
        <section id="besin-degerleri">
          <p class="eyebrow">Kalori ve besin değerleri</p>
          <h2>How Many Calories Does an Omelette Have? (Omlet Kaç Kalori?)</h2>
          <p class="section-intro">2 yumurtalı sade omlet yaklaşık <strong>200 kcal</strong> kabul edilir.</p>
          ${table(["Porsiyon", "Kalori", "Açıklama"], [["100 g sade omlet", "154 kcal", "Tereyağlı ortalama değer"], ["1 porsiyon (2 yumurta)", "200 kcal", "Sade omlet porsiyon değeri"]])}
        </section>
        <section id="dil-kurallari">
          <p class="eyebrow">İngilizce dil kuralları</p>
          <h2>Omlet Tarifi Yazarken Dikkat Edilmesi Gereken Dil Kuralları</h2>
          ${table(["Dil Kuralı", "İngilizce Örnek", "Türkçe Karşılığı"], [["Imperative (Emir kipi)", "Beat the eggs with salt.", "Yumurtaları tuzla çırpın."], ["Sequence Adverbs", "First, crack the eggs.", "Önce yumurtaları kırın."], ["Countable / Uncountable", "2 eggs (sayılabilir), salt (sayılamaz)", "2 yumurta, biraz tuz"], ["Negative Imperative", "Do not overcook the omelette.", "Omleti fazla pişirmeyin."]])}
        </section>
        <section id="alistirma">
          <div class="exercise">
            <p class="eyebrow">Kazanım kontrolü</p>
            <h2>8. Sınıf İngilizce Omlet Tarifi Alıştırması</h2>
            <ol>
              <li>“____ the eggs into a bowl.” &nbsp; <strong>Answer: Crack</strong></li>
              <li>“____ the omelette in half.” &nbsp; <strong>Answer: Fold</strong></li>
              <li>“Beat the eggs with salt and pepper.” cümlesinin Türkçe karşılığı nedir? &nbsp; <strong>(Yumurtaları tuz ve karabiberle çırpın)</strong></li>
            </ol>
          </div>
        </section>
        ${getMidPageCTAHTML()}
        ${getRelatedRecipesHTML("omlet")}
      </div>
    </div>
  </article>`;
}

function route() {
  const slug = getSlugFromURL();
  updateSubHeaderActive(slug);

  const isHome = !slug || slug === "index" || slug === "home";
  document.body.classList.toggle("is-recipe-page", !isHome);
  document.body.classList.toggle("is-home-page", isHome);

  if (isHome) {
    renderHome();
  } else if (slug === "makarna") {
    renderPastaPage();
  } else if (slug === "kek") {
    renderKekPage();
  } else if (slug === "omlet") {
    renderOmletPage();
  } else if (recipes[slug]) {
    renderRecipe(recipes[slug], slug);
  } else {
    renderHome();
  }

  window.scrollTo(0, 0);
  handleNavVisibility();

  const tocLinks = [...document.querySelectorAll(".toc [data-scroll-target]")];
  if (tocLinks.length) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      tocLinks.forEach(link => link.classList.toggle("is-active", link.dataset.scrollTarget === entry.target.id));
    }), { rootMargin: "-35% 0px -55%", threshold: 0 });
    tocLinks.forEach(link => {
      const target = document.getElementById(link.dataset.scrollTarget);
      if (target) observer.observe(target);
    });
    tocLinks[0]?.classList.add("is-active");
  }
}

window.addEventListener("popstate", route);
function activateGrammarTab(tab) {
  const tabs = [...tab.closest("[role='tablist']").querySelectorAll("[role='tab']")];
  const container = tab.closest(".grammar-tabs");
  tabs.forEach(item => {
    const active = item === tab;
    item.setAttribute("aria-selected", String(active));
    item.tabIndex = active ? 0 : -1;
  });
  container.querySelectorAll("[role='tabpanel']").forEach(panel => {
    panel.hidden = panel.dataset.panel !== tab.dataset.tab;
  });
  tab.focus();
}
document.addEventListener("click", event => {
  const navLink = event.target.closest("a[href^='/blog/ingilizce-tarifler']");
  if (navLink && !event.ctrlKey && !event.metaKey && !event.shiftKey) {
    const href = navLink.getAttribute("href");
    if (!href.includes("#")) {
      event.preventDefault();
      navigateTo(href);
      return;
    }
  }

  const tab = event.target.closest("[role='tab'][data-tab]");
  if (tab) {
    activateGrammarTab(tab);
    return;
  }
  const link = event.target.closest("[data-scroll-target]");
  if (!link) return;
  const section = document.getElementById(link.dataset.scrollTarget);
  if (!section) return;
  event.preventDefault();
  section.scrollIntoView({ behavior: "smooth", block: "start" });
});
document.addEventListener("keydown", event => {
  const tab = event.target.closest("[role='tab'][data-tab]");
  if (!tab || !["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
  event.preventDefault();
  const tabs = [...tab.closest("[role='tablist']").querySelectorAll("[role='tab']")];
  const current = tabs.indexOf(tab);
  const next = event.key === "Home" ? 0 : event.key === "End" ? tabs.length - 1 : event.key === "ArrowRight" ? (current + 1) % tabs.length : (current - 1 + tabs.length) % tabs.length;
  activateGrammarTab(tabs[next]);
});
window.addEventListener("scroll", () => {
  handleNavVisibility();
  const progress = document.querySelector(".reading-progress span");
  if (!progress) return;
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.transform = `scaleX(${scrollable > 0 ? Math.min(1, window.scrollY / scrollable) : 0})`;
}, { passive: true });
route();
