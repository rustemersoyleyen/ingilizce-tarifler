import re

app_path = r"d:\Otomasyonlar\İngilizce Tarifler\src\app.js"

with open(app_path, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Add import
if 'import salataData from "./data/salata.json";' not in content:
    content = content.replace(
        'import corbaData from "./data/corba.json";',
        'import corbaData from "./data/corba.json";\nimport salataData from "./data/salata.json";'
    )
    print("Added salataData import")

# 2. Add salata to recipes dictionary
salata_recipe_entry = '''  salata: {
    category: "healthy",
    label: "Sağlıklı ve Taze",
    title: "İngilizce Salata Tarifi",
    englishTitle: "Shepherd's Salad Recipe",
    image: "/blog/ingilizce-tarifler/images/salata-hero.webp",
    introEn: salataData.page.introEnglish,
    introTr: salataData.page.introTurkish,
    time: "15 dakika", serves: "4 kişilik", level: "A1–A2", calories: "95 kcal (1 kase)",
    ingredients: [["Ripe Tomatoes", "Olgun domates", "4 medium"], ["Cucumbers", "Salatalık", "3 medium"], ["Green Peppers", "Yeşil sivri biber", "2 pieces"], ["Red Onion", "Kırmızı soğan", "1 medium"], ["Olive Oil", "Sızma zeytinyağı", "3 tbsp"], ["Lemon Juice", "Taze limon suyu", "2 tbsp"]],
    steps: [
      ["1. Wash the Vegetables Thoroughly (Sebzeleri İyice Yıkayın)", "Wash 4 ripe tomatoes, 3 crisp cucumbers, and 2 green peppers thoroughly under cold water.", "4 olgun domatesi, 3 çıtır salatalığı ve 2 yeşil biberi soğuk su altında iyice yıkayın."],
      ["2. Chop the Tomatoes and Cucumbers (Domatesleri ve Salatalıkları Doğrayın)", "Chop the washed tomatoes and peeled cucumbers into even 1 cm bite-sized cubes.", "Yıkanmış domatesleri ve soyulmuş salatalıkları 1 santimetrelik eşit küpler halinde doğrayın."],
      ["3. Slice the Onion and Peppers Thinly (Soğanı ve Biberleri İnce Dilimleyin)", "Slice 1 medium red onion and 2 green peppers into thin crescent strips.", "1 orta boy kırmızı soğanı ve 2 yeşil biberi ince yarım ay şeritler halinde dilimleyin."],
      ["4. Toss All the Vegetables in a Bowl (Tüm Sebzeleri Bir Kasede Karıştırın)", "Toss all the diced vegetables and finely chopped parsley gently in a large ceramic bowl.", "Doğranmış tüm sebzeleri ve ince kıyılmış maydanozu geniş bir kasede nazikçe harmanlayın."],
      ["5. Dress the Salad with Olive Oil and Lemon (Salatayı Zeytinyağı ve Limonla Soslandırın)", "Dress the salad with 3 tablespoons of olive oil, 2 tablespoons of lemon juice, and salt, then serve.", "Salatayı 3 yemek kaşığı zeytinyağı, 2 yemek kaşığı limon suyu ve tuzla soslayıp servis edin."]
    ],
    equipment: [["Chef's knife", "Şef bıçağı", "Step 2, 3"], ["Cutting board", "Kesme tahtası", "Step 2, 3"], ["Vegetable colander", "Sebze süzgeci", "Step 1"], ["Salad bowl", "Salata kasesi", "Step 4, 5"], ["Salad servers", "Ahşap salata kaşıkları", "Step 4"]],
    vocab: [["wash", "yıkamak", "Wash the fresh vegetables under cold water."], ["chop", "doğramak", "Chop the tomatoes into cubes."], ["slice", "dilimlemek", "Slice the red onion thinly."], ["toss", "harmanlamak", "Toss the salad gently."], ["dress", "soslamak", "Dress with olive oil and lemon juice."]]
  },'''

if 'salata: {' not in content:
    target = '    vocab: [["simmer", "kısık ateşte kaynatmak", "Simmer the lentils for 20 minutes."], ["blend", "blenderdan geçirmek", "Blend the soup until smooth."], ["saute", "sotelemek", "Saute the onions in butter."], ["ladle", "kepçeyle doldurmak", "Ladle the hot soup into bowls."]]\n  },'
    if target in content:
        content = content.replace(target, target + "\n" + salata_recipe_entry)
        print("Added salata to recipes dictionary")
    else:
        print("Warning: target not found for recipes entry")

# 3. Add renderSalataPage function
salata_page_func = '''

function renderSalataPage() {
  const p = salataData.page;
  const overviewTbl = p.overviewVariationsTable;

  const bTerms = salataData.contentBlocks.find(b => b.id === "kavramlar");
  const bVariations = salataData.contentBlocks.find(b => b.id === "tarifler");
  const bSteps = salataData.contentBlocks.find(b => b.id === "klasik-salata");
  const bIng = salataData.contentBlocks.find(b => b.id === "malzemeler-ve-ekipman");
  const bCal = salataData.contentBlocks.find(b => b.id === "besin-degerleri");
  const bUnits = salataData.contentBlocks.find(b => b.id === "olculer");
  const bGrammar = salataData.contentBlocks.find(b => b.id === "dil-kurallari");
  const bQuiz = salataData.contentBlocks.find(b => b.id === "alistirma");

  document.title = p.title;
  setStructuredData({
    "@context": "https://schema.org",
    "@type": "Recipe",
    name: p.h1,
    image: [p.heroImage],
    author: { "@type": "Organization", name: "Konuşarak Öğren" },
    datePublished: "2026-10-02",
    description: p.metaDescription,
    prepTime: "PT15M",
    cookTime: "PT0M",
    totalTime: "PT15M",
    recipeYield: p.servings,
    recipeCategory: p.label,
    recipeCuisine: "Akdeniz / Türk",
    nutrition: { "@type": "NutritionInformation", calories: "95 calories" },
    recipeIngredient: [
      "500 g ripe tomatoes",
      "350 g cucumbers",
      "80 g green bell peppers",
      "120 g red onion",
      "30 g fresh flat-leaf parsley",
      "45 ml extra virgin olive oil",
      "30 ml fresh lemon juice",
      "5 g sea salt"
    ],
    recipeInstructions: bSteps.accordion.map((s, idx) => ({
      "@type": "HowToStep",
      position: idx + 1,
      name: s.titleEn,
      text: s.sentenceEn
    }))
  });

  root.innerHTML = `<article class="salata-guide recipe-guide">
    <div class="reading-progress" aria-hidden="true"><span></span></div>
    
    <header class="hero">
      <div class="hero-copy">
        <p class="eyebrow">${formatBilingualText("RECIPES & COOKING GUIDE (İNGİLİZCE YEMEK TARİFLERİ)")}</p>
        <h1>${formatBilingualText(p.h1)}</h1>
        <aside class="course-banner" aria-label="İngilizce kursu">
          <div class="course-banner-text">
            <small class="cta-eyebrow">KONUŞARAK ÖĞREN İNGİLİZCE KURSU</small>
            <strong class="cta-heading">İngilizceyi tarif ezberleyerek değil, konuşarak öğrenin.</strong>
          </div>
          <button class="cta-btn cta-btn-orange" onclick="window.location.href='https://student.konusarakogren.com/auth/register'">Ücretsiz tanışma dersi <span class="arrow">→</span></button>
        </aside>
        <p class="lede"><strong>Authentic Fresh Salad Recipes.</strong> <span class="tr-highlight">(${p.introTurkish})</span></p>
        <div class="article-meta">
          <span class="author-mark" aria-hidden="true">KO</span>
          <span><strong>${p.author}</strong><small>Yayınlanma tarihi: <time datetime="2026-10-02">${p.publishDate}</time></small></span>
        </div>
      </div>
      <figure class="hero-visual">
        <img src="${p.heroImage}" alt="Mediterranean kitchen chef presenting a vibrant bowl of fresh Turkish Shepherd's salad">
        <figcaption>${formatBilingualText("Turkish Salad Recipe (Geleneksel Salata Tarifleri)")}</figcaption>
      </figure>
      ${buildFactsCardHTML({
        title: "Salata",
        prep: { val: "15 mins (15 dk)", en: "Washing, peeling, and dicing fresh vegetables takes 15 minutes.", tr: "Taze sebzeleri yıkama, soyma ve doğrama 15 dakika sürer." },
        cook: { val: "0 mins (0 dk)", en: "Fresh salads require zero skillet or oven cooking time.", tr: "Taze salatalar ocak veya fırın pişirme süresi gerektirmez." },
        servings: { val: "4 servings (4 kişilik)", en: "Yields 4 fresh bowls for a vibrant lunch or dinner starter.", tr: "Öğle veya akşam yemekleri için 4 taze kase sunar." },
        level: { val: "A1–A2 (Temel Seviye)", en: "Practices wash, chop, slice, toss, dress verbs and imperial units.", tr: "Yıkama, doğrama, dilimleme, harmanlama, soslama fiilleri ve ölçüleri pekiştirir." }
      })}
    </header>

    <section class="hero-overview-table" id="definition-variations">
      <p class="eyebrow eyebrow-lg">${formatBilingualText("OVERVIEW & COMPARISON (TANIM VE ÇEŞİTLER KARŞILAŞTIRMASI)")}</p>
      <h2 class="definition-heading">${formatBilingualText("English Salad Recipes: Variations, Key Ingredients and Preparation Steps (İngilizce Salata Çeşitleri, Malzemeleri ve Hazırlık Adımları)")}</h2>
      <p class="section-intro">${formatBilingualText(overviewTbl.intro)}</p>
      ${table(overviewTbl.headers, overviewTbl.rows, overviewTbl.caption)}
    </section>

    <div class="page-grid">
      <nav class="toc" aria-label="İçindekiler">
        <a href="#kavramlar" data-scroll-target="kavramlar">Terms (Kavramlar)</a>
        <a href="#tarifler" data-scroll-target="tarifler">Variations (Tarifler)</a>
        <a href="#klasik-salata" data-scroll-target="klasik-salata">5 Steps (5 Adım)</a>
        <a href="#malzemeler-ve-ekipman" data-scroll-target="malzemeler-ve-ekipman">Ingredients (Malzemeler)</a>
        <a href="#besin-degerleri" data-scroll-target="besin-degerleri">Nutrition (Besin Değerleri)</a>
        <a href="#olculer" data-scroll-target="olculer">Units (Ölçüler)</a>
        <a href="#dil-kurallari" data-scroll-target="dil-kurallari">Grammar (Dil Kuralları)</a>
        <a href="#alistirma" data-scroll-target="alistirma">Quiz (Alıştırma)</a>
      </nav>

      <div class="content">
        <!-- 1. TEMEL KAVRAMLAR -->
        <section id="kavramlar">
          <p class="eyebrow eyebrow-lg">${formatBilingualText(bTerms.eyebrow)}</p>
          <h2>${formatBilingualText(bTerms.heading)}</h2>
          
          ${buildAppBannerHTML("Salata")}

          <p class="section-intro">${formatBilingualText(bTerms.intro)}</p>

          <div class="grammar-tabs section-tabs">
            <div class="tab-list" role="tablist" aria-label="Salata Terimleri ve Fiiller">
              <button role="tab" aria-selected="true" tabindex="0" data-tab="salata-core-terms" class="active"><span class="tab-idx">01</span><span class="tab-title">Core Concepts (Temel Kavramlar)</span></button>
              <button role="tab" aria-selected="false" tabindex="-1" data-tab="salata-origin"><span class="tab-idx">02</span><span class="tab-title">Salad &amp; Dressings (Salata ve Soslar)</span></button>
              <button role="tab" aria-selected="false" tabindex="-1" data-tab="salata-verbs"><span class="tab-idx">03</span><span class="tab-title">Verbs (Wash, Chop, Toss, Dress)</span></button>
            </div>
            <div class="tab-panels">
              <div class="tab-panel active" role="tabpanel" data-panel="salata-core-terms">
                <h3>${formatBilingualText(bTerms.coreConcepts.heading)}</h3>
                <p class="section-intro">${formatBilingualText(bTerms.coreConcepts.intro)}</p>
                ${table(bTerms.coreConcepts.headers, bTerms.coreConcepts.rows)}
              </div>
              <div class="tab-panel" role="tabpanel" data-panel="salata-origin" hidden>
                <h3>${formatBilingualText(bTerms.origin.heading)}</h3>
                <p class="section-intro">${formatBilingualText(bTerms.origin.intro)}</p>
                ${table(bTerms.origin.headers, bTerms.origin.rows)}
              </div>
              <div class="tab-panel" role="tabpanel" data-panel="salata-verbs" hidden>
                <h3>${formatBilingualText(bTerms.verbs.heading)}</h3>
                <p class="section-intro">${formatBilingualText(bTerms.verbs.intro)}</p>
                ${table(bTerms.verbs.headers, bTerms.verbs.rows)}
              </div>
            </div>
          </div>
        </section>

        <!-- 2. ALT TARİFLER -->
        <div class="varieties-header" id="tarifler">
          <p class="eyebrow eyebrow-lg">${formatBilingualText(bVariations.eyebrow)}</p>
          <h2>${formatBilingualText(bVariations.heading)}</h2>
          <p class="section-intro">${formatBilingualText(bVariations.intro)}</p>

          <nav class="variant-subnav" aria-label="Salata Çeşitleri">
            <a href="#coban-salatasi" class="variant-nav-btn active" title="Shepherd's Salad (Çoban Salatası)">
              <span>1. Shepherd's Salad</span>
              <div class="variant-tooltip">
                <span class="tooltip-en">1. Shepherd's Salad Recipe</span>
                <span class="tooltip-tr">(Çoban Salatası Tarifi)</span>
              </div>
            </a>
            <a href="#sezar-salatasi" class="variant-nav-btn" title="Caesar Salad (Sezar Salatası)">
              <span>2. Caesar Salad</span>
              <div class="variant-tooltip">
                <span class="tooltip-en">2. Caesar Salad Recipe</span>
                <span class="tooltip-tr">(Sezar Salatası Tarifi)</span>
              </div>
            </a>
            <a href="#ton-balikli-salata" class="variant-nav-btn" title="Tuna Salad (Ton Balıklı Salata)">
              <span>3. Tuna Salad</span>
              <div class="variant-tooltip">
                <span class="tooltip-en">3. Tuna Salad Recipe</span>
                <span class="tooltip-tr">(Ton Balıklı Salata Tarifi)</span>
              </div>
            </a>
            <a href="#meyve-salatasi" class="variant-nav-btn" title="Fruit Salad (Meyve Salatası)">
              <span>4. Fruit Salad</span>
              <div class="variant-tooltip">
                <span class="tooltip-en">4. Fruit Salad Recipe</span>
                <span class="tooltip-tr">(Meyve Salatası Tarifi)</span>
              </div>
            </a>
          </nav>

          ${bVariations.variations.map((v, i) => {
            const variantEn = v.english.replace(/ Recipe$/, "");
            const variantTr = v.title.replace(/ Tarifi$/, "");
            return `
            <section id="${v.id}" class="recipe-chapter">
              <div class="chapter-head">
                <span class="variant-number">${String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h2>${formatBilingualText(v.briefTitle)}</h2>
                  <p>${formatBilingualText(v.description)}</p>
                  ${buildChapterMetaHTML({
                    time: {
                      val: "10-15 mins (10-15 dakika)",
                      en: `${variantEn} takes 10-15 mins of total preparation and tossing time.`,
                      tr: `${variantTr} toplam 10-15 dakika hazırlık ve harmanlama süresinde tamamlanır.`
                    },
                    servings: {
                      val: "2-4 servings (2-4 kişilik)",
                      en: `${variantEn} yields fresh servings for a Mediterranean meal starter.`,
                      tr: `${variantTr} Akdeniz sofrası için 2-4 kişilik taze porsiyon sunar.`
                    },
                    count: {
                      val: `${v.ingredients.length} ingredients (${v.ingredients.length} malzeme)`,
                      en: `${variantEn} requires ${v.ingredients.length} fresh pantry ingredients for crisp garden texture.`,
                      tr: `${variantTr} çıtır bahçe dokusu için ${v.ingredients.length} taze malzeme gerektirir.`
                    }
                  })}
                </div>
              </div>
              <figure>
                <img src="${v.image}" alt="${v.alt}" loading="lazy">
                <figcaption>${formatBilingualText(v.english)}</figcaption>
              </figure>
              <div class="chapter-panels">
                <details class="learning-panel" ${i === 0 ? "open" : ""}>
                  <summary><h3>${formatBilingualText(v.ingredientsHeading)}</h3><span>Malzeme kartları &amp; tablosu</span></summary>
                  <div class="panel-body">
                    ${table(["English Ingredient (İngilizce Malzeme)", "Türkçe Karşılığı", "Quantity (Miktar)"], v.ingredients)}
                    <div class="cards-subhead-badge">Visual Ingredient List (Görsel Malzeme Listesi)</div>
                    ${buildIngredientCardsHTML(v.ingredientCards)}
                  </div>
                </details>
                <details class="learning-panel">
                  <summary><h3>${formatBilingualText(v.stepsHeading)}</h3><span>Adım adım yapılışı göster</span></summary>
                  <div class="panel-body">
                    <p class="method-note">${formatBilingualText(v.steps)}</p>
                  </div>
                </details>
              </div>
            </section>
          `;
          }).join("")}
        </div>

        <!-- 3. 5 ADIMDA ÇOBAN SALATASI REHBERİ -->
        <section id="klasik-salata">
          <div class="steps-heading">
            <p class="eyebrow eyebrow-lg">${formatBilingualText(bSteps.eyebrow)}</p>
            <h2>${formatBilingualText(bSteps.heading)}</h2>
            <p class="section-intro">${formatBilingualText(bSteps.intro)}</p>
            ${buildStepsMetaHTML(bSteps.meta)}
          </div>

          ${buildStepAccordionHTML(bSteps.accordion)}

          <div style="margin-top: 2rem;">
            <h3>${formatBilingualText(bSteps.summaryTable.heading)}</h3>
            <p class="section-intro">${formatBilingualText(bSteps.summaryTable.intro)}</p>
            ${table(bSteps.summaryTable.headers, bSteps.summaryTable.rows)}
          </div>
        </section>

        <!-- 4. MALZEMELER VE EKİPMAN -->
        <section id="malzemeler-ve-ekipman">
          <p class="eyebrow eyebrow-lg">${formatBilingualText(bIng.eyebrow)}</p>
          <h2>${formatBilingualText(bIng.heading)}</h2>
          <p class="section-intro">${formatBilingualText(bIng.intro)}</p>

          <div class="grammar-tabs section-tabs">
            <div class="tab-list" role="tablist" aria-label="Malzeme ve Gereç Tabloları">
              <button role="tab" aria-selected="true" tabindex="0" data-tab="salata-ing" class="active"><span class="tab-idx">01</span><span class="tab-title">Fresh Ingredients (Malzemeler)</span></button>
              <button role="tab" aria-selected="false" tabindex="-1" data-tab="salata-eq"><span class="tab-idx">02</span><span class="tab-title">Kitchen Tools (Salata Gereçleri)</span></button>
            </div>
            <div class="tab-panels">
              <div class="tab-panel active" role="tabpanel" data-panel="salata-ing">
                <h3>${formatBilingualText(bIng.ingredientsTable.heading)}</h3>
                <p class="section-intro">${formatBilingualText(bIng.ingredientsTable.intro)}</p>
                ${table(bIng.ingredientsTable.headers, bIng.ingredientsTable.rows)}
              </div>
              <div class="tab-panel" role="tabpanel" data-panel="salata-eq" hidden>
                <h3>${formatBilingualText(bIng.cookwareTable.heading)}</h3>
                <p class="section-intro">${formatBilingualText(bIng.cookwareTable.intro)}</p>
                ${table(bIng.cookwareTable.headers, bIng.cookwareTable.rows)}
              </div>
            </div>
          </div>
        </section>

        <!-- 5. BESİN DEĞERLERİ VE KALORİ -->
        <section id="besin-degerleri">
          <p class="eyebrow eyebrow-lg">${formatBilingualText(bCal.eyebrow)}</p>
          <h2>${formatBilingualText(bCal.heading)}</h2>
          <p class="section-intro">${formatBilingualText(bCal.intro)}</p>

          <div class="grammar-tabs section-tabs">
            <div class="tab-list" role="tablist" aria-label="Besin Değerleri ve Tanıtım">
              <button role="tab" aria-selected="true" tabindex="0" data-tab="salata-cal" class="active"><span class="tab-idx">01</span><span class="tab-title">Calories (Kalori Değerleri)</span></button>
              <button role="tab" aria-selected="false" tabindex="-1" data-tab="salata-nut"><span class="tab-idx">02</span><span class="tab-title">Nutrition Facts (Besin Ögeleri)</span></button>
              <button role="tab" aria-selected="false" tabindex="-1" data-tab="salata-pres"><span class="tab-idx">03</span><span class="tab-title">Introduction (Salata Tanıtımı)</span></button>
              <button role="tab" aria-selected="false" tabindex="-1" data-tab="salata-toss-dress"><span class="tab-idx">04</span><span class="tab-title">Toss vs Dress (Fiil Kullanımı)</span></button>
            </div>
            <div class="tab-panels">
              <div class="tab-panel active" role="tabpanel" data-panel="salata-cal">
                <h3>${formatBilingualText(bCal.caloriesTable.heading)}</h3>
                <p class="section-intro">${formatBilingualText(bCal.caloriesTable.intro)}</p>
                ${table(bCal.caloriesTable.headers, bCal.caloriesTable.rows)}
              </div>
              <div class="tab-panel" role="tabpanel" data-panel="salata-nut" hidden>
                <h3>${formatBilingualText(bCal.nutritionTable.heading)}</h3>
                <p class="section-intro">${formatBilingualText(bCal.nutritionTable.intro)}</p>
                ${table(bCal.nutritionTable.headers, bCal.nutritionTable.rows)}
              </div>
              <div class="tab-panel" role="tabpanel" data-panel="salata-pres" hidden>
                <h3>${formatBilingualText(bCal.presentationTable.heading)}</h3>
                <p class="section-intro">${formatBilingualText(bCal.presentationTable.intro)}</p>
                ${table(bCal.presentationTable.headers, bCal.presentationTable.rows)}
              </div>
              <div class="tab-panel" role="tabpanel" data-panel="salata-toss-dress" hidden>
                <h3>${formatBilingualText(bCal.tossDressTable.heading)}</h3>
                <p class="section-intro">${formatBilingualText(bCal.tossDressTable.intro)}</p>
                ${table(bCal.tossDressTable.headers, bCal.tossDressTable.rows)}
              </div>
            </div>
          </div>
        </section>

        <!-- 6. ÖLÇÜ BİRİMLERİ VE SÖZLÜK -->
        <section id="olculer">
          <p class="eyebrow eyebrow-lg">${formatBilingualText(bUnits.eyebrow)}</p>
          <h2>${formatBilingualText(bUnits.heading)}</h2>
          <p class="section-intro">${formatBilingualText(bUnits.intro)}</p>

          <div class="grammar-tabs section-tabs">
            <div class="tab-list" role="tablist" aria-label="Ölçü Birimleri ve Kelimeler">
              <button role="tab" aria-selected="true" tabindex="0" data-tab="salata-units" class="active"><span class="tab-idx">01</span><span class="tab-title">Cup, Tbsp, Tsp (Ölçüler)</span></button>
              <button role="tab" aria-selected="false" tabindex="-1" data-tab="salata-vocab"><span class="tab-idx">02</span><span class="tab-title">Kitchen Glossary (10 Kelime)</span></button>
              <button role="tab" aria-selected="false" tabindex="-1" data-tab="salata-tbsp-tsp"><span class="tab-idx">03</span><span class="tab-title">Tbsp &amp; Tsp (Kaşık Ölçüleri)</span></button>
              <button role="tab" aria-selected="false" tabindex="-1" data-tab="salata-metric"><span class="tab-idx">04</span><span class="tab-title">Gram &amp; Liter (Metrik &amp; Emperyal)</span></button>
            </div>
            <div class="tab-panels">
              <div class="tab-panel active" role="tabpanel" data-panel="salata-units">
                <h3>${formatBilingualText(bUnits.unitsTable.heading)}</h3>
                <p class="section-intro">${formatBilingualText(bUnits.unitsTable.intro)}</p>
                ${table(bUnits.unitsTable.headers, bUnits.unitsTable.rows)}
              </div>
              <div class="tab-panel" role="tabpanel" data-panel="salata-vocab" hidden>
                <h3>${formatBilingualText(bUnits.glossaryTable.heading)}</h3>
                <p class="section-intro">${formatBilingualText(bUnits.glossaryTable.intro)}</p>
                ${table(bUnits.glossaryTable.headers, bUnits.glossaryTable.rows)}
              </div>
              <div class="tab-panel" role="tabpanel" data-panel="salata-tbsp-tsp" hidden>
                <h3>${formatBilingualText(bUnits.tbspTspCupTable.heading)}</h3>
                <p class="section-intro">${formatBilingualText(bUnits.tbspTspCupTable.intro)}</p>
                ${table(bUnits.tbspTspCupTable.headers, bUnits.tbspTspCupTable.rows)}
              </div>
              <div class="tab-panel" role="tabpanel" data-panel="salata-metric" hidden>
                <h3>${formatBilingualText(bUnits.gramLiterTable.heading)}</h3>
                <p class="section-intro">${formatBilingualText(bUnits.gramLiterTable.intro)}</p>
                ${table(bUnits.gramLiterTable.headers, bUnits.gramLiterTable.rows)}
              </div>
            </div>
          </div>
        </section>

        <!-- 7. DİL BİLGİSİ KURALLARI -->
        <section id="dil-kurallari">
          <p class="eyebrow eyebrow-lg">${formatBilingualText(bGrammar.eyebrow)}</p>
          <h2>${formatBilingualText(bGrammar.heading)}</h2>
          <p class="section-intro">${formatBilingualText(bGrammar.intro)}</p>

          <div class="grammar-tabs section-tabs">
            <div class="tab-list" role="tablist" aria-label="Salata Dil Kuralları Sekmeleri">
              <button role="tab" aria-selected="true" tabindex="0" data-tab="salata-imperatives" class="active"><span class="tab-idx">01</span><span class="tab-title">Imperatives (Emir Kipi)</span></button>
              <button role="tab" aria-selected="false" tabindex="-1" data-tab="salata-sequence"><span class="tab-idx">02</span><span class="tab-title">Sequence Adverbs (Sıra Zarfları)</span></button>
              <button role="tab" aria-selected="false" tabindex="-1" data-tab="salata-rules"><span class="tab-idx">03</span><span class="tab-title">Grammar Rules (Dil Kuralları)</span></button>
            </div>
            <div class="tab-panels">
              <div class="tab-panel active" role="tabpanel" data-panel="salata-imperatives">
                <h3>${formatBilingualText(bGrammar.imperativesTable.heading)}</h3>
                <p class="section-intro">${formatBilingualText(bGrammar.imperativesTable.intro)}</p>
                ${table(bGrammar.imperativesTable.headers, bGrammar.imperativesTable.rows)}
              </div>
              <div class="tab-panel" role="tabpanel" data-panel="salata-sequence" hidden>
                <h3>${formatBilingualText(bGrammar.sequenceTable.heading)}</h3>
                <p class="section-intro">${formatBilingualText(bGrammar.sequenceTable.intro)}</p>
                ${table(bGrammar.sequenceTable.headers, bGrammar.sequenceTable.rows)}
                <div style="margin-top:1.5rem; padding:1.2rem; background:#f8fafc; border-left:4px solid #0284c7; border-radius:8px;">
                  <strong style="display:block; color:#0f172a; margin-bottom:0.5rem;">Connected Recipe Paragraph (Bağlaçlı Tarif Paragrafı):</strong>
                  <p style="margin-bottom:0.5rem; color:#1e293b; font-weight:600;">${bGrammar.sequenceTable.connectedParagraphEn}</p>
                  <p style="color:#475569;"><span class="tr-highlight">(${bGrammar.sequenceTable.connectedParagraphTr})</span></p>
                </div>
              </div>
              <div class="tab-panel" role="tabpanel" data-panel="salata-rules" hidden>
                <h3>${formatBilingualText(bGrammar.rulesTable.heading)}</h3>
                <p class="section-intro">${formatBilingualText(bGrammar.rulesTable.intro)}</p>
                ${table(bGrammar.rulesTable.headers, bGrammar.rulesTable.rows)}
              </div>
            </div>
          </div>
        </section>

        <!-- 8. QUIZ VE ALIŞTIRMALAR -->
        <section id="alistirma" class="exercise">
          <p class="eyebrow eyebrow-lg">${formatBilingualText(bQuiz.eyebrow)}</p>
          <h2>${formatBilingualText(bQuiz.heading)}</h2>
          <p class="section-intro">${bQuiz.intro}</p>

          <div class="quiz-grid" style="display: flex; flex-direction: column; gap: 1.5rem; margin-top: 2rem;">
            ${bQuiz.questions.map((q, idx) => `
              <div class="quiz-card" data-idx="${idx}" data-correct="${q.answer}" style="background:#ffffff; border:1px solid #e2e8f0; border-radius:14px; padding:1.6rem; text-align:left; color:#0f172a; box-shadow:0 4px 14px rgba(0,0,0,0.06);">
                <span class="quiz-badge" style="background:#0284c7; color:#ffffff; padding:4px 10px; border-radius:6px; font-size:0.85rem; font-weight:700;">Soru ${q.num} · ${q.type}</span>
                <p style="font-size:1.15rem; font-weight:700; margin-top:1rem; color:#0f172a;">${q.question}</p>
                <p style="font-size:0.95rem; margin-top:0.4rem; line-height:1.6;"><span class="tr-highlight" style="color:#075985; background-color:#e0f2fe; font-weight:600;">(${q.questionTr})</span></p>
                <div class="quiz-options" style="display:flex; flex-wrap:wrap; gap:0.6rem; margin-top:1.2rem;">
                  ${q.options.map(opt => `
                    <button type="button" class="quiz-option-btn" data-val="${opt}" style="background:#f8fafc; border:1px solid #cbd5e1; border-radius:8px; padding:10px 16px; cursor:pointer; font-weight:600; font-size:0.95rem; text-align:left; transition:all 0.2s; color:#0f172a;">${opt}</button>
                  `).join("")}
                </div>
                <div class="quiz-feedback" style="display:none; margin-top:1rem; padding:0.85rem 1.1rem; border-radius:8px; font-size:0.95rem;"></div>
              </div>
            `).join("")}
          </div>

          <div id="quiz-summary-box" style="display:none;"></div>
        </section>

        ${getMidPageCTAHTML()}
        ${getRelatedRecipesHTML("salata")}
      </div>
    </div>
  </article>`;

  initQuizInteractivity(root, "Salata", renderSalataPage);
  initVariantSubnavScroll(root);
}
'''

if 'function renderSalataPage' not in content:
    target_pos = '  initQuizInteractivity(root, "Çorba", renderCorbaPage);\n  initVariantSubnavScroll(root);\n}'
    if target_pos in content:
        content = content.replace(target_pos, target_pos + salata_page_func)
        print("Added renderSalataPage function")
    else:
        print("Warning: target_pos for renderCorbaPage not found")

# 4. Add route
if 'slug === "salata"' not in content:
    target_route = '  } else if (slug === "corba" || slug === "soup") {\n    renderCorbaPage();'
    replacement_route = '  } else if (slug === "corba" || slug === "soup") {\n    renderCorbaPage();\n  } else if (slug === "salata" || slug === "salad") {\n    renderSalataPage();'
    if target_route in content:
        content = content.replace(target_route, replacement_route)
        print("Added salata to router")
    else:
        print("Warning: target_route not found")

with open(app_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Updated app.js successfully!")
