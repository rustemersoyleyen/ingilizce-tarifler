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
            <a href="#/${slug}" class="related-card">
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
    <div class="page-cards">
      ${Object.entries(recipes).map(([slug, r]) => `
        <a href="#/${slug}">
          <span>${r.label} · ${r.level}</span>
          <section>
            <h2>${r.title}</h2>
            <p>${r.englishTitle}</p>
          </section>
          <strong>Sayfayı incele →</strong>
        </a>
      `).join("")}
    </div>
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
        <span class="toc-title">İÇİNDEKİLER</span>
        <a href="#definition" data-scroll-target="definition">Tanım</a>
        <a href="#ingredients" data-scroll-target="ingredients">Malzemeler</a>
        <a href="#steps" data-scroll-target="steps">Adımlar</a>
        <a href="#equipment" data-scroll-target="equipment">Ekipman</a>
        <a href="#language" data-scroll-target="language">Dil bilgisi</a>
        <a href="#exercise" data-scroll-target="exercise">Alıştırma</a>
      </nav>
      <div class="content">
        <section id="definition">
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
        <section id="ingredients">
          <p class="eyebrow">Malzemeler</p>
          <h2>Hangi malzemeler gerekir?</h2>
          <p>Malzemeler İngilizce ve Türkçe karşılıklarıyla, ölçüleri rakamla gösterilmiştir.</p>
          ${table(["İngilizce malzeme", "Türkçe karşılığı", "Miktar"], r.ingredients)}
        </section>
        <section id="steps">
          <p class="eyebrow">Yapılış</p>
          <h2>Adım adım nasıl yapılır?</h2>
          <p>Talimatlar İngilizce emir kipiyle başlar; <em>first, then, after that</em> ve <em>finally</em> adımları sıralar.</p>
          <ol class="steps">${r.steps.map(s => `<li><div><h3>${s[0]}</h3><p><strong>${s[1]}</strong></p><p class="translation">${s[2]}</p></div></li>`).join("")}</ol>
        </section>
        <section id="equipment">
          <p class="eyebrow">Mutfak araçları</p>
          <h2>Hangi mutfak araçları kullanılır?</h2>
          ${table(["İngilizce araç adı", "Türkçe karşılığı", "Kullanıldığı adım"], r.equipment)}
        </section>
        <section id="language">
          <p class="eyebrow">Mutfakta İngilizce</p>
          <h2>Temel İngilizce mutfak kelimeleri</h2>
          <div class="vocab">${(r.vocab || sharedVocab).map(v => `<article><h3>${v[0]}</h3><strong>${v[1]}</strong><p>${v[2]}</p></article>`).join("")}</div>
          <h3>Emir kipi</h3>
          <p>İngilizce tarif talimatları özne almadan fiilin yalın hâliyle başlar: <strong>${r.steps[0][1]}</strong> Olumsuz talimatta <em>do not</em> kullanılır: <strong>Do not overcook it.</strong></p>
        </section>
        <section id="exercise">
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
    image: "https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?auto=format&fit=crop&w=1200&q=80",
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
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1200&q=80",
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
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=1200&q=80",
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
    image: "https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=1200&q=80",
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
    image: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?auto=format&fit=crop&w=1200&q=80",
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
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1200&q=80",
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
    <header class="hero"><div><p class="eyebrow">İngilizce yemek tarifleri</p><h1>İngilizce Makarna Tarifi (Makarna Yapılışı İngilizce)</h1><aside class="course-banner" aria-label="İngilizce kursu"><div class="course-banner-text"><small class="cta-eyebrow">KONUŞARAK ÖĞREN İNGİLİZCE KURSU</small><strong class="cta-heading">İngilizceyi tarif ezberleyerek değil, konuşarak öğrenin.</strong></div><button class="cta-btn cta-btn-orange" onclick="window.location.href='https://student.konusarakogren.com/auth/register'">Ücretsiz tanışma dersi <span class="arrow">→</span></button></aside><p class="lede"><strong>Plain Pasta Recipe.</strong> İngilizce makarna tarifi; malzemeleri, emir kipindeki pişirme adımlarını ve Türkçe karşılıklarını birlikte öğreten uygulamalı bir İngilizce rehberidir.</p><div class="article-meta"><span class="author-mark" aria-hidden="true">KO</span><span><strong>Konuşarak Öğren Editör</strong><small>Yayınlanma tarihi: <time datetime="2026-07-29">29 Temmuz 2026</time></small></span></div></div><figure class="hero-visual"><img src="https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?auto=format&fit=crop&w=1600&q=85" alt="Masada servis edilmeye hazır sade makarna tabağı"><figcaption>Plain pasta · sade makarna</figcaption></figure><aside class="hero-card pasta-facts" aria-label="Tarif özeti"><table class="recipe-facts"><caption>Sade makarna tarifi özeti</caption><thead><tr><th scope="col">Hazırlık</th><th scope="col">Pişirme</th><th scope="col">Porsiyon</th><th scope="col">Seviye</th></tr></thead><tbody><tr><td><span class="fact-value" tabindex="0" aria-label="Hazırlık süresi 5 dakikadır." data-verbalization="Hazırlık süresi 5 dakikadır.">5 dakika</span></td><td><span class="fact-value" tabindex="0" aria-label="Pişirme süresi 10 dakikadır." data-verbalization="Pişirme süresi 10 dakikadır.">10 dakika</span></td><td><span class="fact-value" tabindex="0" aria-label="Tarif 2 kişiliktir." data-verbalization="Tarif 2 kişiliktir.">2 kişilik</span></td><td><span class="fact-value" tabindex="0" aria-label="İngilizce seviyesi A2 ile B1 arasındadır." data-verbalization="İngilizce seviyesi A2 ile B1 arasındadır.">A2–B1</span></td></tr></tbody></table></aside></header>
    <div class="page-grid"><nav class="toc" aria-label="İçindekiler"><span class="toc-title">İÇİNDEKİLER</span><a href="#concepts" data-scroll-target="concepts">Kavramlar</a><a href="#recipes" data-scroll-target="recipes">Tarifler</a><a href="#plain-pasta" data-scroll-target="plain-pasta">6 adım</a><a href="#nutrition" data-scroll-target="nutrition">Besin değerleri</a><a href="#measurements" data-scroll-target="measurements">Ölçüler</a><a href="#grammar" data-scroll-target="grammar">Dil kuralları</a><a href="#exercise" data-scroll-target="exercise">Alıştırma</a></nav>
    <div class="content">
      <section id="concepts"><p class="eyebrow">Temel kavramlar ve çeviriler</p><h2>İngilizce Makarna Tarifi Nedir? Temel Kavramlar ve Çeviriler</h2><h3>Makarna İngilizcede Ne Anlama Gelir?</h3><p class="section-intro">İngilizcede <strong>pasta</strong> genel kategoriyi, <strong>spaghetti</strong>, <strong>penne</strong> ve <strong>fettuccine</strong> ise belirli makarna biçimlerini anlatır. Tarif boyunca İngilizce talimat önce, Türkçe açıklama hemen sonra verilir.</p>${table(["İngilizce kavram", "Türkçe karşılığı", "İlgili tarif"], [["pasta","makarna","Tüm tarifler"],["plain pasta","sade makarna","Sade makarna"],["spaghetti","spagetti","Bolonez"],["fettuccine","şerit makarna","Alfredo"],["penne","kalem makarna","Domates soslu veya fırında makarna"]])}<h3>İngilizce Tarif Yazımında Kullanılan Fiiller: Boil, Drain, Saute, Cook</h3>${table(["Fiil", "Türkçe karşılığı", "Örnek cümle"], [["Boil","Kaynatmak","Boil 2 l of water. / 2 l su kaynatın."],["Drain","Süzmek","Drain the pasta. / Makarnayı süzün."],["Saute / Sauté","Sotelemek","Sauté the garlic. / Sarımsağı soteleyin."],["Cook","Pişirmek","Cook for 10 minutes. / 10 dakika pişirin."]])}</section>
      <div id="recipes" class="recipe-chapters"><div class="chapter-intro"><p class="eyebrow">6 tarif çeşidi</p><p class="section-intro">Her tarifte tanım, İngilizce–Türkçe malzemeler, miktarlar ve kısa yapılış birlikte verilmiştir. Başlıklara dokunarak öğrenme panellerini açabilirsiniz.</p></div>${pastaVariants.map((v, i) => `<section class="recipe-chapter"><div class="chapter-head"><span class="variant-number">${String(i + 1).padStart(2,"0")}</span><div><h2>${v.briefTitle}</h2><p>${v.description}</p></div></div><figure><img src="${v.image}" alt="${v.alt}" loading="lazy"><figcaption>${v.english}</figcaption></figure><div class="chapter-panels"><details class="learning-panel" ${i === 0 ? "open" : ""}><summary><h3>${v.ingredientsHeading}</h3><span>Malzeme tablosu</span></summary><div class="panel-body">${table(["İngilizce malzeme","Türkçe karşılığı","Miktar"],v.ingredients)}</div></details><details class="learning-panel"><summary><h3>${v.stepsHeading}</h3><span>Yöntemi göster</span></summary><div class="panel-body"><p class="method-note">${v.steps}</p></div></details></div></section>`).join("")}</div>
      <section id="plain-pasta"><div class="steps-heading"><p class="eyebrow">Sabit 6 adım</p><h2>Plain Pasta İngilizce Adım Adım Nasıl Yapılır? (How Do You Make Plain Pasta Step by Step?)</h2><p class="section-intro">Bu sade makarna tarifi 6 adımdan oluşur ve yaklaşık 15 dakika sürer. İngilizce cümleler emir kipiyle başlar.</p><div class="steps-meta"><span>6 adım</span><span>15 dakika</span><span>A2–B1 seviye</span></div></div><ol class="steps">${r.steps.map(s => `<li><div class="step-copy"><h3>${s[0]}</h3><div class="step-language"><span class="lang-label">English</span><p><strong>${s[1]}</strong></p></div><div class="step-language turkish"><span class="lang-label">Türkçe</span><p>${s[2]}</p></div></div></li>`).join("")}</ol>${table(["Adım","İngilizce talimat","Türkçe açıklama"],r.steps.map((s,i)=>[i+1,s[1],s[2]]))}</section>
      <section id="ingredients-equipment"><p class="eyebrow">Malzemeler ve ekipman</p><h2>Which Ingredients Do You Need to Cook Pasta? (Makarna Pişirmek İçin Hangi Malzemeler Gerekir?)</h2>${table(["İngilizce malzeme","Türkçe karşılığı","Miktar"],r.ingredients)}<h3>Which Kitchen Equipment Is Used to Cook Pasta? (Makarna Pişirmek İçin Hangi Mutfak Ekipmanları Kullanılır?)</h3>${table(["İngilizce ekipman","Türkçe karşılığı","Kullanıldığı adım"],[["Large pot","Büyük tencere","1–3"],["Measuring spoon","Ölçü kaşığı","2 ve 5"],["Wooden spoon","Tahta kaşık","2, 3 ve 5"],["Colander","Süzgeç","4"],["Serving bowl","Servis kasesi","6"]])}</section>
      <section id="nutrition"><p class="eyebrow">Kalori ve besin değerleri</p><h2>How Many Calories Are in a Serving of Pasta? (Bir Porsiyon Makarna Kaç Kalori?)</h2><p class="section-intro">Sossuz, pişmiş makarnanın enerji değeri yaklaşık <strong>158 kcal/100 g</strong>; 180 g'lık örnek bir porsiyonun enerji değeri yaklaşık <strong>284 kcal</strong> kabul edilebilir. Kullanılan makarna ve yağ miktarı sonucu değiştirir.</p>${table(["Porsiyon","Kalori","Açıklama"],[["100 g pişmiş makarna","158 kcal","Sossuz yaklaşık değer"],["1 porsiyon (180 g)","284 kcal","Yağ ve sos hariç yaklaşık değer"]])}<h3>What Are the Nutrition Facts of Plain Pasta? (Sade Makarnanın Besin Değerleri Nelerdir?)</h3>${table(["İngilizce besin ögesi","Türkçe karşılığı","100 g'daki miktar"],[["Protein","Protein","5.8 g"],["Carbohydrate","Karbonhidrat","30.9 g"],["Fat","Yağ","0.9 g"],["Dietary fiber","Lif","1.8 g"]])}<p class="source-note">Değerler genel pişmiş makarna verilerine dayalı yaklaşık eğitim değerleridir. Kaynak yöntemi: <a href="https://fdc.nal.usda.gov/" target="_blank" rel="noreferrer">USDA FoodData Central</a>.</p></section>
      <section id="measurements"><p class="eyebrow">Ölçü birimleri ve kelimeler</p><h2>İngilizce Makarna Tariflerinde Kullanılan Ölçü Birimleri Nelerdir?</h2><p class="section-intro">İngilizce makarna tariflerinde <strong>cup, tablespoon, teaspoon, gram</strong> ve <strong>milliliter</strong> birimleri kullanılır.</p><h3>Makarna Tarif Metninde Geçen Temel İngilizce Mutfak Kelimeleri Nelerdir?</h3><div class="vocab vocab-wide">${vocab.map(v=>`<article><h4>${v[0]}</h4><strong>${v[1]}</strong><p>${v[2]}</p></article>`).join("")}</div><h3>Tablespoon, Teaspoon, Cup: İngilizce Ölçü Birimlerinin Türkçe Karşılıkları</h3>${table(["İngilizce birim","Türkçe karşılığı","Metrik karşılığı","Tarif örneği"],[["cup","su bardağı","240 ml","Add 1 cup of sauce."],["tablespoon (tbsp)","yemek kaşığı","15 ml","Add 1 tablespoon of oil."],["teaspoon (tsp)","çay kaşığı","5 ml","Add 1 teaspoon of salt."]])}<h3>Gram ve Litre İngilizce Tariflerde Nasıl Kullanılır?</h3>${table(["Metrik birim","Emperyal karşılığı","Türkçe açıklama"],[["100 g","3.5 oz","Yaklaşık 100 gram"],["1 l","4.2 cups","Yaklaşık 1 litre"]])}</section>
      <section id="grammar"><p class="eyebrow">İngilizce dil kuralları</p><h2>İngilizce Makarna Tarifi Yazarken Dikkat Edilmesi Gereken Dil Kuralları</h2>${table(["Kural","İngilizce örnek","Türkçe karşılığı"],[["Emir kipi","Boil the water.","Suyu kaynatın."],["Sıra zarfları","First, boil the water.","Önce suyu kaynatın."],["Sayılabilen/sayılamayan isimler","Add two tomatoes and some salt.","İki domates ve biraz tuz ekleyin."],["Ölçü ifadeleri","Add 1 tablespoon of oil.","1 yemek kaşığı yağ ekleyin."]])}<h3>İngilizce Makarna Tarif Metinlerinde Emir Kipi (Imperative) Nasıl Kullanılır?</h3><p class="section-intro">Emir kipi, özne kullanmadan fiilin yalın hâliyle başlar: <strong>Boil, add, cook, drain, serve.</strong> Olumsuz talimatta <em>do not</em> kullanılır: <strong>Do not overcook the pasta. / Makarnayı fazla pişirmeyin.</strong></p>${table(["İngilizce emir","Türkçe karşılığı","Fiil"],[["Boil the water.","Suyu kaynatın.","boil"],["Add the pasta.","Makarnayı ekleyin.","add"],["Cook for 10 minutes.","10 dakika pişirin.","cook"],["Drain the pasta.","Makarnayı süzün.","drain"],["Serve while hot.","Sıcakken servis edin.","serve"]])}<h3>Bağlaçlar ve Sıra Zarfları: First, Then, After That, Finally</h3>${table(["Sıra zarfı","Türkçe karşılığı","Örnek"],[["First","Önce","First, boil the water."],["Then","Ardından","Then, add the pasta."],["After that","Daha sonra","After that, cook for 10 minutes."],["Next","Sonra","Next, drain the pasta."],["Finally","Son olarak","Finally, serve while hot."]])}<div class="language-card sequence"><small>Kısa tarif paragrafı</small><p>First, boil the water. Then, add the salt and pasta. After that, cook for 8–10 minutes. Next, drain the pasta and add butter. Finally, serve it while hot.</p><p class="translation">Önce suyu kaynatın. Ardından tuz ve makarnayı ekleyin. Daha sonra 8–10 dakika pişirin. Sonra makarnayı süzüp tereyağı ekleyin. Son olarak sıcakken servis edin.</p></div></section>
      <section id="exercise"><div class="exercise"><p class="eyebrow">Kazanım kontrolü</p><h2>8. sınıf İngilizce Makarna Tarifi</h2><p>Tarif sıralama, emir kipi ve temel mutfak kelimelerini birlikte pekiştirin.</p><ol><li>“Drain the pasta” cümlesinin Türkçe karşılığı nedir?</li><li>Makarnayı kaç dakika pişirmelisiniz?</li><li>Tarifin son adımını İngilizce yazın.</li><li><em>First</em> ve <em>finally</em> kelimelerini kullanarak iki tarif cümlesi kurun.</li></ol></div></section>
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
  const grammarSection = root.querySelector("#grammar");
  if (grammarSection) grammarSection.innerHTML = grammarTabs();
  root.querySelector("#concepts h2")?.insertAdjacentHTML("afterend", `<aside class="app-banner"><div class="app-icon" aria-hidden="true"><img src="ko-logo-papagan.png" alt="Konuşarak Öğren Logo" /></div><div class="app-banner-text"><small class="cta-eyebrow">KONUŞARAK ÖĞREN UYGULAMASI</small><strong class="cta-heading">Her gün 10 dakika konuşma pratiğini cebinize alın.</strong></div><div class="app-actions"><a href="https://apps.apple.com/tr/app/konu%C5%9Farak-%C3%B6%C4%9Fren-i-ngilizce/id1099431274" target="_blank" rel="noopener" class="cta-btn cta-btn-outline">App Store</a><a href="https://play.google.com/store/apps/details?id=com.konusarakogren.m.konusarakogrenmobil&hl=tr" target="_blank" rel="noopener" class="cta-btn cta-btn-blue">Google Play</a></div></aside>`);
}

function updateSubHeaderActive(currentSlug) {
  document.querySelectorAll(".sub-nav-link").forEach(link => {
    const slug = link.dataset.slug || "";
    link.classList.toggle("active", slug === currentSlug);
  });
}

function route() {
  const hash = location.hash;
  const slug = hash.replace(/^#\/?/, "");
  updateSubHeaderActive(slug);

  if (!slug || slug === "index" || slug === "home") {
    renderHome();
  } else if (slug === "makarna") {
    renderPastaPage();
  } else if (recipes[slug]) {
    renderRecipe(recipes[slug], slug);
  } else {
    renderHome();
  }

  window.scrollTo(0, 0);
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
window.addEventListener("hashchange", route);
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
  const progress = document.querySelector(".reading-progress span");
  if (!progress) return;
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.transform = `scaleX(${scrollable > 0 ? Math.min(1, window.scrollY / scrollable) : 0})`;
}, { passive: true });
route();
