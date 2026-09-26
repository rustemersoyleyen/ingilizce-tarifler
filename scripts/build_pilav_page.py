import re
import sys

sys.stdout.reconfigure(encoding="utf-8")

pilav_code = '''
const pilavVariants = [
  {
    id: "buttered-rice",
    title: "Tereyağlı Pirinç Pilavı Tarifi",
    briefTitle: "Buttered Rice Recipe (Tereyağlı Pirinç Pilavı Tarifi)",
    ingredientsHeading: "What Are Buttered Rice Ingredients in English? (Tereyağlı Pirinç Pilavı Malzemeleri)",
    stepsHeading: "How to Write Buttered Rice Cooking Steps in English? (Tereyağlı Pirinç Pilavı Pişirme Adımları)",
    english: "Buttered Rice Recipe",
    description: "Buttered Rice (Tereyağlı Pirinç Pilavı), baldo pirincin bol tereyağında kavrulup sıcak suyla tane tane pişirildiği klasik Türk mutfağı lezzetidir.",
    image: "/blog/ingilizce-tarifler/images/pilav-hero.webp",
    alt: "Steaming hot authentic Turkish buttered rice pilaf served in a copper dish",
    ingredients: [
      ["Baldo Rice", "Baldo pirinç — nişastası arındırılmış iri taneli pirinç.", "2 cups (360 g)"],
      ["Butter", "Tereyağı — lezzet ve altın parlaklığı sağlayan yağ.", "3 tbsp (45 g)"],
      ["Hot Water veya Broth", "Sıcak su veya et suyu — pişirme sıvısı.", "3 cups (720 ml)"],
      ["Salt", "Sofra tuzu — lezzeti öne çıkaran mineral.", "1.5 tsp (8 g)"],
      ["Olive Oil", "Zeytinyağı veya sıvı yağ — pirinçlerin tane tane ayrılması için.", "1 tbsp (15 ml)"]
    ],
    ingredientCards: [
      { icon: "🌾", en: "Baldo Rice", tr: "Baldo Pirinç", quantity: "2 cups (360 g)", sentenceEn: "Buttered Rice requires high-quality Baldo rice for distinct, fluffy and separated grains.", sentenceTr: "Tereyağlı Pirinç Pilavı, tane tane ve dolgun dokusu için kaliteli baldo pirinç gerektirir." },
      { icon: "🧈", en: "Butter", tr: "Köy Tereyağı", quantity: "3 tbsp (45 g)", sentenceEn: "Buttered Rice requires unsalted butter to provide an unmistakable rich, nutty aroma.", sentenceTr: "Tereyağlı Pirinç Pilavı, belirgin ve zengin fındıksı kokusu için tuzsuz tereyağı gerektirir." },
      { icon: "🫒", en: "Olive Oil", tr: "Zeytinyağı veya Sıvı Yağ", quantity: "1 tbsp (15 ml)", sentenceEn: "Buttered Rice requires a spoon of olive oil to coat grains and prevent butter from burning.", sentenceTr: "Tereyağlı Pirinç Pilavı, taneleri parlatmak ve tereyağının yanmasını önlemek için zeytinyağı gerektirir." },
      { icon: "♨️", en: "Hot Broth or Water", tr: "Sıcak Et Suyu veya Su", quantity: "3 cups (720 ml)", sentenceEn: "Buttered Rice requires boiling hot broth to ensure even cooking without mushiness.", sentenceTr: "Tereyağlı Pirinç Pilavı, lapa olmadan eşit pişmesi için kaynar sıcak et suyu gerektirir." },
      { icon: "🧂", en: "Salt", tr: "Sofra Tuzu", quantity: "1.5 tsp (8 g)", sentenceEn: "Buttered Rice requires fine salt to balance savory richness and highlight delicate grain flavor.", sentenceTr: "Tereyağlı Pirinç Pilavı, lezzeti dengelemek ve pirinç tadını ortaya çıkarmak için ince tuz gerektirir." }
    ],
    steps: "First, rinse 2 cups of Baldo rice under warm water until clear. Then, melt 3 tablespoons of butter with 1 tablespoon of olive oil in a wide pot. After that, add the drained rice and saute for 3 minutes until translucent. Pour in 3 cups of boiling broth and add 1.5 teaspoons of salt. Cover with lid and simmer on low heat for 15 minutes. Finally, place a paper towel under the lid and rest for 10 minutes before serving."
  },
  {
    id: "orzo-rice",
    title: "Şehriyeli Pirinç Pilavı Tarifi",
    briefTitle: "Rice with Orzo Recipe (Şehriyeli Pirinç Pilavı Tarifi)",
    ingredientsHeading: "What Are Rice with Orzo Ingredients in English? (Şehriyeli Pilav Malzemeleri)",
    stepsHeading: "How to Write Rice with Orzo Cooking Steps in English? (Şehriyeli Pilav Pişirme Adımları)",
    english: "Rice with Orzo Recipe",
    description: "Rice with Orzo (Şehriyeli Pirinç Pilavı), kavrulmuş altın sarısı arpa şehriyelerin pirinçle harmanlandığı, geleneksel akşam yemeklerinin vazgeçilmez garnitürüdür.",
    image: "/blog/ingilizce-tarifler/images/pilav-sehriyeli.webp",
    alt: "Fluffy Turkish rice pilaf with toasted golden brown orzo vermicelli on ceramic plate",
    ingredients: [
      ["Baldo Rice", "Baldo pirinç — yıkanıp süzülmüş ana tahıl.", "2 cups (360 g)"],
      ["Orzo", "Arpa şehriye — kavrularak renk ve çıtırlık katan makarna.", "3 tbsp (35 g)"],
      ["Butter", "Tereyağı — geleneksel pişirme yağı.", "3 tbsp (45 g)"],
      ["Hot Water", "Sıcak su — 1'e 1.5 oranında kaynar su.", "3 cups (720 ml)"],
      ["Salt", "Kaya tuzu veya sofra tuzu.", "1.5 tsp (8 g)"]
    ],
    ingredientCards: [
      { icon: "🌾", en: "Orzo (Arpa Şehriye)", tr: "Arpa Şehriye", quantity: "3 tbsp (35 g)", sentenceEn: "Rice with Orzo requires toasted orzo pasta to add deep golden color and pleasant nutty contrast.", sentenceTr: "Şehriyeli Pilav, altın rengi ve nefis fındıksı bir kontrast katmak için kavrulmuş arpa şehriye gerektirir." },
      { icon: "🍚", en: "Baldo Rice", tr: "Baldo Pirinç", quantity: "2 cups (360 g)", sentenceEn: "Rice with Orzo requires well-rinsed Baldo rice to release excess surface starch.", sentenceTr: "Şehriyeli Pilav, fazla yüzey nişastasını arındırmak için iyice yıkanmış baldo pirinç gerektirir." },
      { icon: "🧈", en: "Butter", tr: "Tereyağı", quantity: "3 tbsp (45 g)", sentenceEn: "Rice with Orzo requires rich butter to properly brown the orzo without sticking.", sentenceTr: "Şehriyeli Pilav, şehriyeyi yapışmadan mükemmel kavurmak için zengin tereyağı gerektirir." },
      { icon: "♨️", en: "Boiling Water", tr: "Kaynar Su", quantity: "3 cups (720 ml)", sentenceEn: "Rice with Orzo requires boiling water to immediately absorb into hot toasted grains.", sentenceTr: "Şehriyeli Pilav, sıcak kavrulmuş taneler tarafından hemen çekilmesi için kaynar su gerektirir." }
    ],
    steps: "First, melt butter in a pot and saute 3 tablespoons of orzo until golden brown. Then, add the rinsed Baldo rice and stir gently for 2 minutes. After that, pour in 3 cups of hot water and add salt. Close the lid, reduce heat to low, and cook for 15 minutes. Finally, let the rice steam under a cloth towel for 10 minutes and fluff with a fork."
  },
  {
    id: "bulgur-pilaf",
    title: "Bulgur Pilavı Tarifi",
    briefTitle: "Bulgur Pilaf Recipe (Bulgur Pilavı Tarifi)",
    ingredientsHeading: "What Are Bulgur Pilaf Ingredients in English? (Bulgur Pilavı Malzemeleri)",
    stepsHeading: "How to Write Bulgur Pilaf Cooking Steps in English? (Bulgur Pilavı Pişirme Adımları)",
    english: "Bulgur Pilaf Recipe",
    description: "Bulgur Pilaf (Bulgur Pilavı), iri pilavlık bulgurun soğan, sivri biber, domates ve tereyağıyla pişirildiği lif ve mineral deposu geleneksel Anadolu lezzetidir.",
    image: "/blog/ingilizce-tarifler/images/pilav-bulgur.webp",
    alt: "Rustic earthenware pot with steaming Turkish bulgur pilaf with tomatoes and peppers",
    ingredients: [
      ["Coarse Bulgur", "Pilavlık iri bulgur — buğdaydan üretilen lifli tahıl.", "2 cups (340 g)"],
      ["Ripe Tomatoes", "Domates — rendelenmiş taze domates.", "2 medium (200 g)"],
      ["Green Pepper", "Yeşil biber veya çarliston biber.", "2 pcs (50 g)"],
      ["Onion", "Kuru soğan — yemeklik doğranmış.", "1 medium (100 g)"],
      ["Butter and Olive Oil", "Tereyağı ve zeytinyağı.", "2 tbsp butter + 2 tbsp oil"],
      ["Hot Water or Stock", "Sıcak su veya tavuk suyu.", "4 cups (960 ml)"],
      ["Tomato Paste", "Domates veya biber salçası.", "1 tbsp (20 g)"]
    ],
    ingredientCards: [
      { icon: "🌾", en: "Coarse Bulgur", tr: "Pilavlık İri Bulgur", quantity: "2 cups (340 g)", sentenceEn: "Bulgur Pilaf requires coarse durum wheat bulgur to maintain a hearty, chewy texture.", sentenceTr: "Bulgur Pilavı, doyurucu ve diri bir kıvamı korumak için iri durum buğdayı bulguru gerektirir." },
      { icon: "🍅", en: "Fresh Tomatoes", tr: "Taze Domates", quantity: "2 pcs (200 g)", sentenceEn: "Bulgur Pilaf requires grated ripe tomatoes to form a fragrant, naturally sweet culinary base.", sentenceTr: "Bulgur Pilavı, mis kokulu ve doğal tatlı bir mutfak bazı oluşturmak için taze rendelenmiş domates gerektirir." },
      { icon: "🫑", en: "Green Peppers", tr: "Yeşil Köy Biberi", quantity: "2 pcs (50 g)", sentenceEn: "Bulgur Pilaf requires diced green peppers to infuse an authentic rustic Anatolian flavor.", sentenceTr: "Bulgur Pilavı, otantik bir Anadolu köy lezzeti katmak için doğranmış yeşil biber gerektirir." },
      { icon: "🧅", en: "Yellow Onion", tr: "Kuru Soğan", quantity: "1 pcs (100 g)", sentenceEn: "Bulgur Pilaf requires finely chopped onions sauteed until translucent for aromatic depth.", sentenceTr: "Bulgur Pilavı, aromatik derinlik kazandırmak için pembeleşene dek kavrulan kuru soğan gerektirir." }
    ],
    steps: "First, saute chopped onion and green peppers in butter and olive oil until soft. Then, stir in tomato paste and grated tomatoes for 2 minutes. After that, add 2 cups of coarse bulgur and stir to combine. Pour in 4 cups of hot broth and add salt. Simmer on low heat for 15-18 minutes until liquid is fully absorbed. Finally, rest for 15 minutes before serving."
  },
  {
    id: "vegetable-rice",
    title: "Sebzeli Pilav Tarifi",
    briefTitle: "Vegetable Rice Recipe (Sebzeli Pilav Tarifi)",
    ingredientsHeading: "What Are Vegetable Rice Ingredients in English? (Sebzeli Pilav Malzemeleri)",
    stepsHeading: "How to Write Vegetable Rice Cooking Steps in English? (Sebzeli Pilav Pişirme Adımları)",
    english: "Vegetable Rice Recipe",
    description: "Vegetable Rice (Sebzeli Pilav), bezelye, küp havuç ve tatlı mısır tanelerinin pirinç pilavına renk ve tazelik kattığı besleyici ve rengarenk bir yemektir.",
    image: "/blog/ingilizce-tarifler/images/pilav-sebzeli.webp",
    alt: "Vibrant vegetable rice pilaf with green peas, diced sweet carrots and yellow corn kernels",
    ingredients: [
      ["Baldo Rice", "Baldo pirinç — ana tahıl bileşeni.", "2 cups (360 g)"],
      ["Green Peas", "Bezelye — haşlanmış veya taze bezelye.", "½ cup (80 g)"],
      ["Carrots", "Havuç — minik küpler halinde doğranmış.", "1 medium (70 g)"],
      ["Sweet Corn", "Tatlı mısır — haşlanmış mısır taneleri.", "½ cup (70 g)"],
      ["Butter and Oil", "Tereyağı ve zeytinyağı.", "2 tbsp butter + 1 tbsp oil"],
      ["Hot Water or Stock", "Sıcak su veya sebze suyu.", "3 cups (720 ml)"],
      ["Salt and Black Pepper", "Tuz ve karabiber.", "1 tsp salt + ½ tsp pepper"]
    ],
    ingredientCards: [
      { icon: "🍚", en: "Baldo Rice", tr: "Baldo Pirinç", quantity: "2 cups (360 g)", sentenceEn: "Vegetable Rice requires premium white rice to hold colorful vegetable pieces evenly.", sentenceTr: "Sebzeli Pilav, renkli sebze parçalarını eşit dağıtarak tutması için kaliteli beyaz pirinç gerektirir." },
      { icon: "🟢", en: "Green Peas", tr: "Taze Bezelye", quantity: "½ cup (80 g)", sentenceEn: "Vegetable Rice requires tender green peas for a burst of vibrant color and plant-based protein.", sentenceTr: "Sebzeli Pilav, canlı renk ve bitkisel protein katmak için taze bezelye gerektirir." },
      { icon: "🥕", en: "Diced Carrots", tr: "Küp Havuç", quantity: "1 pcs (70 g)", sentenceEn: "Vegetable Rice requires finely diced carrots to provide natural sweetness and pleasant crunch.", sentenceTr: "Sebzeli Pilav, doğal tatlılık ve hafif çıtırlık sağlamak için ince küp doğranmış havuç gerektirir." },
      { icon: "🌽", en: "Sweet Corn", tr: "Tatlı Mısır", quantity: "½ cup (70 g)", sentenceEn: "Vegetable Rice requires golden sweet corn kernels for joyful visual appeal and juicy bite.", sentenceTr: "Sebzeli Pilav, iştah açıcı görsel sunum ve sulu bir doku için sarı tatlı mısır gerektirir." }
    ],
    steps: "First, saute finely diced carrots in butter and oil for 3 minutes. Then, add the rinsed Baldo rice and stir for 2 minutes. After that, add the green peas, sweet corn, hot broth, salt and pepper. Bring to a boil, cover with a lid, and simmer on low heat for 15 minutes. Finally, let it rest for 10 minutes, fluff gently with a fork and serve warm."
  }
];

const pilavQuiz = [
  {
    num: 1,
    question: "Which kitchen verb means 'pirinci pişirmeden önce nişastasından arındırmak için suda yıkamak'?",
    questionTr: "'Pirinci pişirmeden önce nişastasından arındırmak için suda yıkamak' anlamına gelen İngilizce fiil hangisidir?",
    options: ["A) Rinse", "B) Grate", "C) Knead", "D) Chop"],
    answer: "A) Rinse"
  },
  {
    num: 2,
    question: "What is the key cooking difference between Turkish 'Rice Pilaf' and Western 'Steamed Rice'?",
    questionTr: "Geleneksel Türk pirinç pilavı ile haşlama pirinç (steamed rice) arasındaki temel pişirme farkı nedir?",
    options: [
      "A) In pilaf, the rice grains and orzo are first sauteed in butter before adding liquid",
      "B) Steamed rice is always baked inside an oven",
      "C) Pilaf never contains butter or salt",
      "D) Steamed rice requires tomato paste"
    ],
    answer: "A) In pilaf, the rice grains and orzo are first sauteed in butter before adding liquid"
  },
  {
    num: 3,
    question: "Fill in the blank: 'Cover the pot with a lid and _____ on low heat for 15 minutes.'",
    questionTr: "Boşluğu doldurunuz: 'Tencerenin kapağını kapatın ve kısık ateşte 15 dakika _____.'",
    options: ["A) simmer", "B) slice", "C) peel", "D) whip"],
    answer: "A) simmer"
  },
  {
    num: 4,
    question: "Which ingredient is toasted in butter to add a golden brown color to classic Turkish pilaf?",
    questionTr: "Klasik Türk pilavına altın sarısı rengini vermek için tereyağında kavrulan malzeme hangisidir?",
    options: ["A) Orzo (Arpa şehriye)", "B) Vanilla powder", "C) Yeast", "D) Cocoa"],
    answer: "A) Orzo (Arpa şehriye)"
  }
];

function renderPilavPage() {
  document.title = "İngilizce Pilav Tarifi (Pilav Yapılışı İngilizce) | Konuşarak Öğren";
  setStructuredData({
    "@context": "https://schema.org", "@type": "Recipe",
    name: "İngilizce Pilav Tarifi (Pilav Yapılışı İngilizce)",
    image: ["/blog/ingilizce-tarifler/images/pilav-hero.webp"],
    author: { "@type": "Organization", name: "Konuşarak Öğren" },
    datePublished: "2026-09-26",
    description: "İngilizce pilav tarifi; tereyağlı, şehriyeli, bulgur ve sebzeli pilav çeşitleri, malzemeleri ve 6 adımda tane tane pilav yapılışı.",
    prepTime: "PT10M", cookTime: "PT15M", totalTime: "PT25M", recipeYield: "4 porsiyon",
    recipeCategory: "Garnitür ve Ana Yemek", recipeCuisine: "Türk",
    nutrition: { "@type": "NutritionInformation", calories: "260 calories" },
    recipeIngredient: ["360 g Baldo rice", "45 g butter", "15 ml olive oil", "720 ml hot broth", "8 g salt"],
    recipeInstructions: [
      { "@type": "HowToStep", position: 1, name: "Rinse the Rice with Warm Water", text: "Rinse the rice in a sieve under warm running water until starch is removed." },
      { "@type": "HowToStep", position: 2, name: "Melt the Butter in a Pot", text: "Melt 3 tablespoons of butter with 1 tablespoon of olive oil in a wide pot." },
      { "@type": "HowToStep", position: 3, name: "Saute the Orzo Until Golden", text: "Saute 3 tablespoons of orzo pasta over medium heat until golden brown." },
      { "@type": "HowToStep", position: 4, name: "Add the Rice and Stir for 2 Minutes", text: "Add the drained rice and saute for 2 minutes to coat each grain." },
      { "@type": "HowToStep", position: 5, name: "Pour in the Hot Water and Add Salt", text: "Pour in 3 cups of boiling broth and add 1.5 teaspoons of salt." },
      { "@type": "HowToStep", position: 6, name: "Simmer the Rice on Low Heat for 15 Minutes", text: "Cover tightly, simmer on low heat for 15 minutes, then rest for 10 minutes." }
    ]
  });

  root.innerHTML = `<article class="pasta-guide recipe-guide">
    <div class="reading-progress" aria-hidden="true"><span></span></div>
    
    <header class="hero">
      <div>
        <p class="eyebrow">RECIPES &amp; COOKING GUIDE (İNGİLİZCE YEMEK TARİFLERİ)</p>
        <h1>İngilizce Pilav Tarifi (Pilav Yapılışı İngilizce)</h1>
        <aside class="course-banner" aria-label="İngilizce kursu">
          <div class="course-banner-text">
            <small class="cta-eyebrow">KONUŞARAK ÖĞREN İNGİLİZCE KURSU</small>
            <strong class="cta-heading">İngilizceyi tarif ezberleyerek değil, konuşarak öğrenin.</strong>
          </div>
          <button class="cta-btn cta-btn-orange" onclick="window.location.href='https://student.konusarakogren.com/auth/register'">Ücretsiz tanışma dersi <span class="arrow">→</span></button>
        </aside>
        <p class="lede"><strong>Authentic Turkish Rice Pilaf Recipe.</strong> <span class="tr-highlight">(İngilizce pilav tarifi; baldo pirincin tereyağında kavrulup kaynar et suyuyla demlenerek tane tane pişirilmesini, temel mutfak fiillerini ve püf noktalarını Türkçe açıklamalarıyla sunan kapsamlı bir rehberdir.)</span></p>
        <div class="article-meta"><span class="author-mark" aria-hidden="true">KO</span><span><strong>Konuşarak Öğren Editör</strong><small>Yayınlanma tarihi: <time datetime="2026-09-26">26 Eylül 2026</time></small></span></div>
      </div>
      <figure class="hero-visual">
        <img src="/blog/ingilizce-tarifler/images/pilav-hero.webp" alt="Bakır sahanda dumanı tüten tereyağlı ve şehriyeli geleneksel Türk pirinç pilavı">
        <figcaption>Turkish Rice Pilaf (Geleneksel Türk Pirinç Pilavı)</figcaption>
      </figure>
      ${buildFactsCardHTML({
        title: "Pilav",
        prep: { val: "10 mins (10 dk)", en: "Rinsing rice and soaking takes about 10 minutes.", tr: "Pirinci ılık suda yıkama ve süzme 10 dakika sürer." },
        cook: { val: "15 mins (15 dk)", en: "Simmering on low heat takes 15 minutes.", tr: "Kısık ateşte kapağı kapalı demleme 15 dakika sürer." },
        servings: { val: "4 servings (4 kişilik)", en: "Yields 4 generous dinner side servings.", tr: "Akşam yemekleri için 4 doyurucu porsiyon sunar." },
        level: { val: "A1–A2 (Temel Seviye)", en: "Covers rinse, saute, boil, simmer verbs and ratio expressions.", tr: "Yıkama, kavurma, kaynatma fiilleri ve 1'e 1.5 ölçü oranlarını kapsar." }
      })}
    </header>

    <section class="hero-overview-table" id="definition-variations">
      <p class="eyebrow eyebrow-lg">OVERVIEW &amp; COMPARISON (TANIM VE ÇEŞİTLER KARŞILAŞTIRMASI)</p>
      <h2 class="definition-heading">English Rice Pilaf Recipes: Variations, Key Ingredients and Cooking Steps (İngilizce Pilav Çeşitleri, Malzemeleri ve Pişirme Adımları)</h2>
      <p class="section-intro">Explore the four main rice pilaf variations with their English names, distinct ingredients, and cooking steps in the comparison table below. <span class="tr-highlight">(Aşağıdaki tabloda 4 popüler pilav çeşidinin İngilizce isimlerini, ayırt edici malzemelerini ve temel pişirme adımlarını karşılaştırmalı olarak inceleyebilirsiniz.)</span></p>
      ${table(["English Recipe Name", "Türkçe Adı", "Main Ingredients (Ana Malzemeler)", "Main Steps (Temel Adımlar)"], [
        ["Buttered Rice", "Tereyağlı Pirinç Pilavı", "Baldo rice, butter, hot water or broth, salt (Baldo pirinç, tereyağı, sıcak su veya et suyu, tuz)", "Rinse rice, melt butter, saute rice grains, add boiling broth and simmer. (Pirinci yıkayın, yağı eritin, kavurun, sıcak suyu ekleyip demleyin.)"],
        ["Rice with Orzo", "Şehriyeli Pirinç Pilavı", "Rice, orzo pasta, butter, boiling water, salt (Pirinç, arpa şehriye, tereyağı, kaynar su, tuz)", "Brown orzo until golden, add rice and stir, pour hot liquid and steam. (Şehriyeyi kavurun, pirinci ekleyin, sıcak suyu döküp demlemeye bırakın.)"],
        ["Bulgur Pilaf", "Bulgur Pilavı", "Coarse bulgur, onion, green pepper, tomatoes, butter, broth (İri bulgur, soğan, yeşil biber, domates, tereyağı, et suyu)", "Saute vegetables with paste, add bulgur, pour broth and simmer until absorbed. (Sebzeleri salçayla kavurun, bulguru ekleyin, suyu çekene kadar pişirin.)"],
        ["Vegetable Rice", "Sebzeli Pilav", "Rice, green peas, diced carrots, corn, butter, vegetable stock (Pirinç, bezelye, küp havuç, mısır, tereyağı, sebze suyu)", "Saute carrots, stir in rice and peas, simmer with broth and fluff gently. (Havuçları soteleyin, pirinç ve bezelyeyi ekleyin, suyla pişirip havalandırın.)"]
      ], "İngilizce Pilav Çeşitleri ve Pişirme Özeti")}
    </section>

    <div class="page-grid">
      <nav class="toc" aria-label="İçindekiler">
        <a href="#kavramlar" data-scroll-target="kavramlar">Terms (Kavramlar)</a>
        <a href="#tarifler" data-scroll-target="tarifler">Variations (Tarifler)</a>
        <a href="#klasik-pilav" data-scroll-target="klasik-pilav">6 Steps (6 Adım)</a>
        <a href="#malzemeler-ve-ekipman" data-scroll-target="malzemeler-ve-ekipman">Ingredients (Malzemeler)</a>
        <a href="#besin-degerleri" data-scroll-target="besin-degerleri">Nutrition (Besin Değerleri)</a>
        <a href="#olculer" data-scroll-target="olculer">Units (Ölçüler)</a>
        <a href="#dil-kurallari" data-scroll-target="dil-kurallari">Grammar (Dil Kuralları)</a>
        <a href="#alistirma" data-scroll-target="alistirma">Quiz (Alıştırma)</a>
      </nav>

      <div class="content">
        <!-- 1. TEMEL KAVRAMLAR -->
        <section id="kavramlar">
          <p class="eyebrow eyebrow-lg">CORE CONCEPTS &amp; VOCABULARY (TEMEL KAVRAMLAR VE SÖZLÜK)</p>
          <h2>Key Rice Pilaf Terms and English Translations (İngilizce Pilav Tarifi Kavramları ve Türkçe Karşılıkları)</h2>
          
          ${buildAppBannerHTML("Pilav")}

          <p class="section-intro"><strong>Mastering the historical origin of the word 'pilaf' and its core cooking verbs creates immediate clarity in English culinary speech.</strong> <span class="tr-highlight">(Pilaf kelimesinin kökenini ve temel mutfak fiillerini kavramak İngilizce yemek tariflerinde akıcı anlatım sağlar.)</span></p>

          <div class="grammar-tabs section-tabs">
            <div class="tab-list" role="tablist" aria-label="Pilav Terimleri ve Fiiller">
              <button role="tab" aria-selected="true" tabindex="0" data-tab="pilav-terms" class="active"><span class="tab-idx">01</span><span class="tab-title">Terms &amp; Origin (Pilaf Kökeni)</span></button>
              <button role="tab" aria-selected="false" tabindex="-1" data-tab="pilav-verbs"><span class="tab-idx">02</span><span class="tab-title">Verbs (Rinse, Saute, Boil, Simmer)</span></button>
            </div>
            <div class="tab-panels">
              <div class="tab-panel active" role="tabpanel" data-panel="pilav-terms">
                <h3>Did the Word 'Pilaf' Enter English from Turkish? (Pilaf Kelimesi İngilizceye Türkçeden mi Geçti?)</h3>
                <p class="section-intro"><strong>The English word 'pilaf' or 'pilau' directly entered English dictionaries from the Turkish word 'pilav', tracing back to Ottoman culinary traditions.</strong> <span class="tr-highlight">(İngilizce sözlüklerde yer alan pilaf terimi doğrudan Türkçe pilav kelimesinden geçmiştir; aşağıdaki tabloda dünya mutfaklarındaki pirinç terimlerini karşılaştırabilirsiniz.)</span></p>
                ${table(["Term (İngilizce Terim)", "Köken & Anlamı (Origin)", "Pişirme Farkı (Culinary Technique)"], [
                  ["Pilaf (Pilau)", "Türkçe 'pilav' kelimesinden İngilizceye geçmiştir.", "Grains are first sauteed in butter or oil before broth is added to produce separated grains. (Taneler önce yağda kavrulur, sonra sıcak suyla demlenir.)"],
                  ["Steamed Rice", "Doğu Asya mutfağı kökenli sade pirinç.", "Cooked purely in plain boiling water or steam without butter, oil, or seasonings. (Yağ veya tuz eklenmeden doğrudan buharda haşlanır.)"],
                  ["Risotto", "İtalyan mutfağına özgü arborio pirinci yemeği.", "Short grain rice cooked by adding hot stock gradually while stirring continuously for creamy starch. (Sürekli karıştırılarak kremsi nişasta açığa çıkarılır.)"],
                  ["Fried Rice", "Çin ve Güneydoğu Asya mutfağı.", "Pre-cooked chilled rice stir-fried in a hot wok with egg, vegetables, and soy sauce. (Önceden haşlanıp soğutulmuş pirinç tavada kızgın ateşte sotelenir.)"]
                ])}
              </div>
              <div class="tab-panel" role="tabpanel" data-panel="pilav-verbs" hidden>
                <h3>Kitchen Verbs Used in Pilaf Recipes: Rinse, Saute, Boil, Simmer (İngilizce Tarif Yazımında Kullanılan Fiiller)</h3>
                <p class="section-intro"><strong>The table below defines the four core culinary verbs representing each critical stage of making authentic Turkish rice pilaf.</strong> <span class="tr-highlight">(Aşağıdaki tabloda geleneksel pilav yapımının 4 temel aşamasını temsil eden fiilleri ve tarif içi örnek cümlelerini inceleyebilirsiniz.)</span></p>
                ${table(["Verb (Fiil)", "Türkçe Karşılığı", "Example Sentence (İngilizce - Türkçe)"], [
                  ["Rinse", "Suyla yıkamak veya durulamak", "Rinse the Baldo rice with warm water to wash away surface starch. (Yüzey nişastasını arındırmak için baldo pirinci ılık suyla yıkayın.)"],
                  ["Saute", "Yağda hafif kavurmak veya sotelemek", "Saute the orzo in melted butter until it turns golden brown. (Şehriyeyi eritilmiş tereyağında altın sarısı olana dek kavurun.)"],
                  ["Boil", "Kaynatmak veya fokurdatmak", "Bring the chicken broth to a rapid boil before pouring it over the rice. (Tavuk suyunu pirincin üzerine dökmeden önce hızla kaynatın.)"],
                  ["Simmer", "Kısık ateşte ağır ağır pişirmek veya demlemek", "Simmer the rice on low heat for 15 minutes with the lid firmly closed. (Kapağı sıkıca kapalı olarak pilavı kısık ateşte 15 dakika demleyin.)"]
                ])}
              </div>
            </div>
          </div>
        </section>

        <!-- 2. ALT TARİFLER -->
        <div class="varieties-header" id="tarifler">
          <p class="eyebrow eyebrow-lg">DISTINCT VARIATIONS (FARKLI İNGİLİZCE PİLAV TARİFLERİ)</p>
          <h2>4 Popular English Rice Pilaf Recipes (En Çok Tercih Edilen 4 İngilizce Pilav Tarifi)</h2>
          <p class="section-intro">Explore classic buttered rice, toasted orzo rice, rustic bulgur, and colorful vegetable rice with detailed ingredient lists and instructions. <span class="tr-highlight">(Klasik tereyağlı, şehriyeli, bulgur ve sebzeli pilav çeşitlerinin İngilizce malzeme listelerini ve yapılış adımlarını aşağıda keşfedebilirsiniz.)</span></p>

          <nav class="variant-subnav" aria-label="Pilav Çeşitleri">
            <a href="#buttered-rice" class="variant-nav-btn active" title="Buttered Rice (Tereyağlı Pirinç Pilavı)">
              <span>1. Buttered Rice</span>
              <div class="variant-tooltip">
                <span class="tooltip-en">1. Buttered Rice Recipe</span>
                <span class="tooltip-tr">(Tereyağlı Pirinç Pilavı)</span>
              </div>
            </a>
            <a href="#orzo-rice" class="variant-nav-btn" title="Rice with Orzo (Şehriyeli Pilav)">
              <span>2. Rice with Orzo</span>
              <div class="variant-tooltip">
                <span class="tooltip-en">2. Rice with Orzo Recipe</span>
                <span class="tooltip-tr">(Şehriyeli Pirinç Pilavı)</span>
              </div>
            </a>
            <a href="#bulgur-pilaf" class="variant-nav-btn" title="Bulgur Pilaf (Bulgur Pilavı)">
              <span>3. Bulgur Pilaf</span>
              <div class="variant-tooltip">
                <span class="tooltip-en">3. Bulgur Pilaf Recipe</span>
                <span class="tooltip-tr">(Geleneksel Bulgur Pilavı)</span>
              </div>
            </a>
            <a href="#vegetable-rice" class="variant-nav-btn" title="Vegetable Rice (Sebzeli Pilav)">
              <span>4. Vegetable Rice</span>
              <div class="variant-tooltip">
                <span class="tooltip-en">4. Vegetable Rice Recipe</span>
                <span class="tooltip-tr">(Sebzeli Pilav Tarifi)</span>
              </div>
            </a>
          </nav>

          ${pilavVariants.map((v, i) => {
            const variantEn = v.english.replace(/ Recipe$/, "");
            const variantTr = v.title.replace(/ Tarifi$/, "");
            return `
            <section id="${v.id}" class="recipe-chapter">
              <div class="chapter-head">
                <span class="variant-number">${String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h2>${v.briefTitle}</h2>
                  <p>${v.description}</p>
                  ${buildChapterMetaHTML({
                    time: {
                      val: "20-25 mins (20-25 dakika)",
                      en: `${variantEn} takes 20-25 mins of total preparation and cooking time.`,
                      tr: `${variantTr} toplam 20-25 dakika hazırlık ve pişirme süresinde tamamlanır.`
                    },
                    servings: {
                      val: "4 servings (4 kişilik)",
                      en: `${variantEn} yields 4 fresh servings for dinner.`,
                      tr: `${variantTr} akşam yemeği için 4 kişilik taze porsiyon sunar.`
                    },
                    count: {
                      val: `${v.ingredients.length} ingredients (${v.ingredients.length} malzeme)`,
                      en: `${variantEn} requires ${v.ingredients.length} pantry ingredients for authentic fluffy texture.`,
                      tr: `${variantTr} orijinal tane tane dokusu için ${v.ingredients.length} temel malzeme gerektirir.`
                    }
                  })}
                </div>
              </div>
              <figure>
                <img src="${v.image}" alt="${v.alt}" loading="lazy">
                <figcaption>${v.english}</figcaption>
              </figure>
              <div class="chapter-panels">
                <details class="learning-panel" ${i === 0 ? "open" : ""}>
                  <summary><h3>${v.ingredientsHeading}</h3><span>Malzeme kartları &amp; tablosu</span></summary>
                  <div class="panel-body">
                    ${table(["English Ingredient (İngilizce Malzeme)", "Türkçe Karşılığı", "Quantity (Miktar)"], v.ingredients)}
                    <div class="cards-subhead-badge">Visual Ingredient List (Görsel Malzeme Listesi)</div>
                    ${buildIngredientCardsHTML(v.ingredientCards)}
                  </div>
                </details>
                <details class="learning-panel">
                  <summary><h3>${v.stepsHeading}</h3><span>Adım adım yapılışı göster</span></summary>
                  <div class="panel-body">
                    <p class="method-note">${v.steps}</p>
                  </div>
                </details>
              </div>
            </section>
          `;
          }).join("")}
        </div>

        <!-- 3. 6 ADIMDA BUTTERED RICE REHBERİ -->
        <section id="klasik-pilav">
          <div class="steps-heading">
            <p class="eyebrow eyebrow-lg">6-STEP CLASSIC PILAF GUIDE (6 ADIMDA KLASİK PİRİNÇ PİLAVI REHBERİ)</p>
            <h2>How Do You Make Buttered Rice Step by Step? (Buttered Rice İngilizce Adım Adım Nasıl Yapılır?)</h2>
            <p class="section-intro"><strong>Mastering perfect, non-sticky Turkish rice pilaf is accomplished in 6 precise chronological steps.</strong> <span class="tr-highlight">(Tane tane ve lezzetli bir tereyağlı pirinç pilavı 6 kesin kronolojik adımda hazırlanır; emir kipi talimatları ve mutfak püf noktaları aşağıda sıralanmıştır.)</span></p>
            ${buildStepsMetaHTML({
              steps: { val: "6 steps (6 adım)", en: "Follow the 6 sequential cooking steps to prepare fluffy buttered rice.", tr: "Tane tane tereyağlı pilav için 6 adımlı pişirme yönergesini sırasıyla takip edin." },
              time: { val: "25 mins (25 dakika)", en: "10 minutes of active prep and 15 minutes of low-heat simmer.", tr: "10 dakika aktif hazırlık ve 15 dakika kısık ateşte demleme sürer." },
              level: { val: "Level A1–A2 (A1–A2 seviye)", en: "Practices rinse, saute, stir, simmer verbs and measurement ratios.", tr: "Yıkama, kavurma, karıştırma, demleme fiilleri ve ölçü oranlarını pekiştirir." }
            })}
          </div>
          ${buildStepAccordionHTML([
            {
              number: 1,
              titleEn: "Rinse the Rice with Warm Water",
              titleTr: "Pirinci Ilık Suyla Yıkayın",
              sentenceEn: "Rinse 2 cups of Baldo rice thoroughly in a fine-mesh sieve under warm running water until the water runs clear.",
              sentenceTr: "2 su bardağı baldo pirinci, süzgeçte ılık musluk suyu altında akan su berraklaşana kadar iyice yıkayın.",
              actionEn: "Rinse",
              actionTr: "Suyla yıkamak",
              img: "/blog/ingilizce-tarifler/images/steps/pilav-step-1.webp",
              ingredient: "2 cups Baldo rice (2 su bardağı pirinç)",
              equipment: "Fine mesh colander (İnce telli süzgeç)",
              time: "3 mins (3 dakika)"
            },
            {
              number: 2,
              titleEn: "Melt the Butter in a Pot",
              titleTr: "Tereyağını Tencerede Eritin",
              sentenceEn: "Melt 3 tablespoons of unsalted butter with 1 tablespoon of olive oil in a wide cooking pot over medium heat.",
              sentenceTr: "Geniş ve yayvan bir pilav tenceresinde 3 yemek kaşığı tereyağını 1 yemek kaşığı zeytinyağıyla birlikte orta ateşte eritin.",
              actionEn: "Melt",
              actionTr: "Eritmek",
              img: "/blog/ingilizce-tarifler/images/steps/pilav-step-2.webp",
              ingredient: "3 tbsp butter, 1 tbsp olive oil (Tereyağı ve zeytinyağı)",
              equipment: "Wide shallow pot (Pilav tenceresi)",
              time: "2 mins (2 dakika)"
            },
            {
              number: 3,
              titleEn: "Saute the Orzo Until Golden",
              titleTr: "Şehriyeyi Altın Rengi Alana Kadar Kavurun",
              sentenceEn: "Saute 3 tablespoons of orzo pasta in the melted butter, stirring continuously with a wooden spoon until golden brown.",
              sentenceTr: "3 yemek kaşığı arpa şehriyeyi eritilmiş tereyağında tahta kaşıkla sürekli karıştırarak altın sarısı kahverengiye dönene dek kavurun.",
              actionEn: "Saute",
              actionTr: "Kavurmak",
              img: "/blog/ingilizce-tarifler/images/steps/pilav-step-3.webp",
              ingredient: "3 tbsp orzo pasta (3 yemek kaşığı arpa şehriye)",
              equipment: "Wooden spoon (Tahta kaşık)",
              time: "3 mins (3 dakika)"
            },
            {
              number: 4,
              titleEn: "Add the Rice and Stir for 2 Minutes",
              titleTr: "Pirinci Ekleyin ve 2 Dakika Karıştırın",
              sentenceEn: "Add the well-drained rice into the pot and stir gently for 2 minutes until every single grain turns glossy and translucent.",
              sentenceTr: "Suyu iyice süzülmüş pirinçleri tencereye ekleyin ve her bir tane parlak ve şeffaf bir görünüm alana kadar 2 dakika nazikçe kavurun.",
              actionEn: "Stir & Saute",
              actionTr: "Karıştırmak ve kavurmak",
              img: "/blog/ingilizce-tarifler/images/steps/pilav-step-4.webp",
              ingredient: "Drained Baldo rice (Süzülmüş pirinç)",
              equipment: "Wooden spoon (Tahta kaşık)",
              time: "2 mins (2 dakika)"
            },
            {
              number: 5,
              titleEn: "Pour in the Hot Water and Add Salt",
              titleTr: "Sıcak Suyu Ekleyin ve Tuzu Atın",
              sentenceEn: "Pour in 3 cups of boiling water or chicken broth, add 1.5 teaspoons of fine salt, and give it one final gentle stir.",
              sentenceTr: "3 su bardağı kaynar su veya tavuk suyunu dikkatlice dökün, 1.5 tatlı kaşığı tuz ekleyin ve son kez nazikçe karıştırın.",
              actionEn: "Pour & Season",
              actionTr: "Dökmek ve tuzlamak",
              img: "/blog/ingilizce-tarifler/images/steps/pilav-step-5.webp",
              ingredient: "3 cups boiling broth, 1.5 tsp salt (Sıcak su ve tuz)",
              equipment: "Measuring cup (Ölçü kabı)",
              time: "1 min (1 dakika)"
            },
            {
              number: 6,
              titleEn: "Simmer the Rice on Low Heat for 15 Minutes",
              titleTr: "Pilavı Kısık Ateşte 15 Dakika Pişirin",
              sentenceEn: "Cover the pot tightly with its lid, reduce the heat to the lowest setting, and simmer for 15 minutes until all liquid is completely absorbed.",
              sentenceTr: "Tencerenin kapağını sıkıca kapatın, ocağı en kısık dereceye getirin ve tüm sıvı tamamen çekilene kadar 15 dakika pişirin.",
              actionEn: "Simmer & Rest",
              actionTr: "Demlemek ve dinlendirmek",
              img: "/blog/images/steps/pilav-step-6.webp",
              ingredient: "Tightly covered pot (Kapağı kapalı tencere)",
              equipment: "Cotton kitchen towel (Temiz mutfak bezi)",
              time: "15 mins (15 dakika)"
            }
          ])}

          <div style="margin-top: 2rem;">
            <h3>Summary Table of the 6 Cooking Steps (6 Adımlı Pişirme Süreci Özeti)</h3>
            <p class="section-intro">Here is the complete bilingual summary table of all 6 steps for reference. <span class="tr-highlight">(İşte başvuru için 6 adımın tamamının iki dilli özet tablosu:)</span></p>
            ${table(["Step (Adım)", "English Instruction (İngilizce Talimat)", "Türkçe Açıklama (Turkish Explanation)"], [
              ["Step 1", "Rinse the Baldo rice with warm water until clear.", "Pirinci ılık suda nişastası gidene kadar yıkayın."],
              ["Step 2", "Melt the butter with olive oil in a wide pot.", "Geniş tencerede tereyağını zeytinyağıyla eritin."],
              ["Step 3", "Saute the orzo pasta until golden brown.", "Arpa şehriyeyi altın sarısı olana dek kavurun."],
              ["Step 4", "Add the drained rice and stir for 2 minutes.", "Süzülen pirinci ekleyip taneler parlayana kadar kavurun."],
              ["Step 5", "Pour in 3 cups of hot broth and add salt.", "3 su bardağı sıcak suyu dökün ve tuzu ekleyin."],
              ["Step 6", "Simmer covered on low heat for 15 minutes.", "Kapağı kapalı kısık ateşte 15 dakika demlenmeye bırakın."]
            ])}
          </div>
        </section>

        <!-- 4. MALZEMELER VE EKİPMAN -->
        <section id="malzemeler-ve-ekipman">
          <p class="eyebrow eyebrow-lg">INGREDIENTS &amp; EQUIPMENT (MALZEME VE EKİPMAN LİSTESİ)</p>
          <h2>What Ingredients Are Needed for Turkish Rice Pilaf? (Pirinç Pilavı İçin Hangi Malzemeler Gerekir?)</h2>
          <p class="section-intro"><strong>Turkish rice pilaf is made with staple ingredients and standard cookware designed for even heat distribution.</strong> <span class="tr-highlight">(Geleneksel Türk pirinç pilavı, ısının eşit yayılmasını sağlayan standart mutfak ekipmanları ve temel kiler malzemeleriyle hazırlanır.)</span></p>

          <div class="grammar-tabs section-tabs">
            <div class="tab-list" role="tablist" aria-label="Malzeme ve Ekipman Tabloları">
              <button role="tab" aria-selected="true" tabindex="0" data-tab="pilav-ing" class="active"><span class="tab-idx">01</span><span class="tab-title">Ingredients (Malzemeler)</span></button>
              <button role="tab" aria-selected="false" tabindex="-1" data-tab="pilav-eq"><span class="tab-idx">02</span><span class="tab-title">Cookware (Pişirme Gereçleri)</span></button>
            </div>
            <div class="tab-panels">
              <div class="tab-panel active" role="tabpanel" data-panel="pilav-ing">
                <h3>Ingredients for Classic Turkish Rice Pilaf (Geleneksel Pilav Malzemeleri)</h3>
                <p class="section-intro">Explore the precise ingredient measurements and Turkish translations below. <span class="tr-highlight">(Aşağıdaki tabloda ölçüleriyle birlikte malzeme listesini inceleyebilirsiniz:)</span></p>
                ${table(["English Ingredient", "Türkçe Karşılığı", "Quantity (Miktar)"], [
                  ["Baldo Rice", "Baldo pirinç", "2 cups (360 g)"],
                  ["Orzo Pasta", "Arpa şehriye", "3 tbsp (35 g)"],
                  ["Butter", "Köy tereyağı", "3 tbsp (45 g)"],
                  ["Olive Oil", "Zeytinyağı veya sıvı yağ", "1 tbsp (15 ml)"],
                  ["Hot Broth or Water", "Sıcak et suyu veya kaynar su", "3 cups (720 ml)"],
                  ["Fine Salt", "Sofra tuzu", "1.5 tsp (8 g)"]
                ])}
              </div>
              <div class="tab-panel" role="tabpanel" data-panel="pilav-eq" hidden>
                <h3>Which Cookware Is Used to Make Rice Pilaf? (Pilav Yapımında Hangi Pişirme Gereçleri Kullanılır?)</h3>
                <p class="section-intro">Each kitchen tool plays a key role across the 6 cooking steps. <span class="tr-highlight">(Her mutfak aleti 6 pişirme adımında belirli bir işleve sahiptir:)</span></p>
                ${table(["English Equipment", "Türkçe Karşılığı", "Used In Step (Kullanıldığı Adım)"], [
                  ["Wide shallow pot", "Yayvan pilav tenceresi", "Step 2, 3, 4, 5, 6 (Eritme, kavurma ve demleme)"],
                  ["Fine-mesh sieve", "İnce telli süzgeç", "Step 1 (Pirinci yıkama ve süzme)"],
                  ["Wooden spoon", "Tahta kaşık veya spatula", "Step 2, 3, 4 (Kavurma ve nazikçe karıştırma)"],
                  ["Kettle", "Su ısıtıcısı veya çaydanlık", "Step 5 (Sıcak su kaynatma)"],
                  ["Cotton tea towel", "Temiz pamuklu mutfak bezi", "Step 6 (Tencere kapağı altına buhar emici örtü)"]
                ])}
              </div>
            </div>
          </div>
        </section>

        <!-- 5. BESİN DEĞERLERİ VE FARKLAR -->
        <section id="besin-degerleri">
          <p class="eyebrow eyebrow-lg">CALORIES &amp; NUTRITION (KALORİ VE BESİN DEĞERLERİ ANALİZİ)</p>
          <h2>How Many Calories Are in 1 Serving of Rice Pilaf? (1 Porsiyon Pirinç Pilavı Kaç Kalori?)</h2>
          <p class="section-intro"><strong>One standard 150-gram serving of traditional buttered rice pilaf contains approximately 260 calories.</strong> <span class="tr-highlight">(1 standart porsiyon olan 150 gram tereyağlı pirinç pilavı yaklaşık 260 kalori içerir; kalori ve besin analizini aşağıdaki sekmelerden inceleyebilirsiniz.)</span></p>

          <div class="grammar-tabs section-tabs">
            <div class="tab-list" role="tablist" aria-label="Besin Değerleri ve Karşılaştırma">
              <button role="tab" aria-selected="true" tabindex="0" data-tab="pilav-cal" class="active"><span class="tab-idx">01</span><span class="tab-title">Calories (Kalori)</span></button>
              <button role="tab" aria-selected="false" tabindex="-1" data-tab="pilav-nut"><span class="tab-idx">02</span><span class="tab-title">Nutrition Facts (Besin Değerleri)</span></button>
              <button role="tab" aria-selected="false" tabindex="-1" data-tab="pilav-comp"><span class="tab-idx">03</span><span class="tab-title">Pilaf vs Steamed Rice (Karşılaştırma)</span></button>
              <button role="tab" aria-selected="false" tabindex="-1" data-tab="pilav-bulgur-comp"><span class="tab-idx">04</span><span class="tab-title">Bulgur Pilaf (Bulgur Farkı)</span></button>
            </div>
            <div class="tab-panels">
              <div class="tab-panel active" role="tabpanel" data-panel="pilav-cal">
                <h3>Calorie Breakdown per Serving (Porsiyon Başına Kalori Dağılımı)</h3>
                <p class="section-intro">Compare calories across standard weights and portions. <span class="tr-highlight">(Farklı porsiyon miktarlarının kalori değerleri:)</span></p>
                ${table(["Serving (Porsiyon)", "Calories (kcal)", "Açıklama (Nutritional Context)"], [
                  ["100 g portion", "175 kcal", "Standard 100 grams of cooked buttered rice. (100 gram pişmiş tereyağlı pilav.)"],
                  ["1 serving (150 g)", "260 kcal", "Standard dinner side plate serving. (Standart 1 tabak akşam yemeği garnitürü.)"],
                  ["Large portion (200 g)", "350 kcal", "Generous dinner portion with extra butter. (Bol tereyağlı büyük porsiyon.)"]
                ])}
              </div>
              <div class="tab-panel" role="tabpanel" data-panel="pilav-nut" hidden>
                <h3>What Are the Nutrition Facts of Buttered Rice? (Tereyağlı Pilavın Besin Değerleri Nelerdir?)</h3>
                <p class="section-intro">Nutritional breakdown per 100 grams of cooked rice pilaf. <span class="tr-highlight">(100 gram pişmiş pirinç pilavının makro besin analizi:)</span></p>
                ${table(["Nutrient (Besin Ögesi)", "Türkçe Karşılığı", "Amount per 100 g (100 g İçin Miktar)"], [
                  ["Carbohydrates", "Karbonhidrat", "32.0 g"],
                  ["Fats (Lipids)", "Yağ (Tereyağı ve zeytinyağı)", "4.8 g"],
                  ["Protein", "Protein", "3.2 g"],
                  ["Dietary Fiber", "Diyet lifi", "0.9 g"],
                  ["Sodium", "Sodyum", "240 mg"]
                ])}
              </div>
              <div class="tab-panel" role="tabpanel" data-panel="pilav-comp" hidden>
                <h3>Rice Pilaf ile Steamed Rice Farkı İngilizce Nasıl Anlatılır? (Pilaf vs Steamed Rice)</h3>
                <p class="section-intro">The key culinary distinction lies in the sauteing technique and butter usage. <span class="tr-highlight">(Temel pişirme farkı pirincin yağda kavrulma aşaması ve tereyağı kullanımından kaynaklanır:)</span></p>
                ${table(["Preparation Method", "Sauteing in Butter (Yağda Kavurma)", "Final Grain Texture (Tane Dokusu)"], [
                  ["Rice Pilaf (Türk Pilavı)", "Yes — grains are coated and toasted in butter before liquid. (Evet, taneler önce yağda kavrulur.)", "Grains remain distinct, separated, glossy, and never mushy. (Taneler parlak, tane tane ve asla lapa olmaz.)"],
                  ["Steamed Rice (Sade Haşlama)", "No — boiled directly in plain water or steam without fats. (Hayır, doğrudan su veya buharda haşlanır.)", "Soft, slightly sticky, and absorbent grains without rich aroma. (Yumuşak, hafif yapışkan ve yağsız taneler.)"]
                ])}
              </div>
              <div class="tab-panel" role="tabpanel" data-panel="pilav-bulgur-comp" hidden>
                <h3>Bulgur Pilavı İngilizce Nasıl Söylenir? (Bulgur Pilaf in English)</h3>
                <p class="section-intro"><strong>The word 'bulgur' is an accepted English culinary noun referring to cracked durum wheat.</strong> <span class="tr-highlight">(Bulgur kelimesi İngilizce sözlüklerde tam karşılığıyla yer alır; pirinç pilavından temel farkı buğday lifi ve salça bazlı sosudur:)</span></p>
                ${table(["Feature (Özellik)", "Rice Pilaf (Pirinç Pilavı)", "Bulgur Pilaf (Bulgur Pilavı)"], [
                  ["Grain Type", "White Baldo rice (Beyaz pirinç)", "Coarse cracked wheat (Durum buğdayı bulguru)"],
                  ["Fiber Content", "Low fiber (0.9 g per 100 g)", "High dietary fiber (4.5 g per 100 g)"],
                  ["Cooking Liquid", "Broth with butter (Et suyu ve tereyağı)", "Tomato paste broth with onions and peppers (Salçalı sebze sosu)"]
                ])}
              </div>
            </div>
          </div>
        </section>

        <!-- 6. ÖLÇÜ BİRİMLERİ VE SÖZLÜK -->
        <section id="olculer">
          <p class="eyebrow eyebrow-lg">MEASUREMENT UNITS &amp; GLOSSARY (ÖLÇÜ BİRİMLERİ VE MUTFAK SÖZLÜĞÜ)</p>
          <h2>What Measurement Units Are Used in English Rice Recipes? (İngilizce Pilav Tariflerinde Kullanılan Ölçü Birimleri Nelerdir?)</h2>
          <p class="section-intro"><strong>English rice pilaf recipes primarily use cup, tablespoon, teaspoon, gram, and milliliter to express the golden 1:1.5 rice-to-water ratio.</strong> <span class="tr-highlight">(İngilizce pilav tariflerinde 1'e 1.5 pirinç-su oranını kurmak için cup, tablespoon, teaspoon, gram ve mililitre birimleri kullanılır.)</span></p>

          <div class="grammar-tabs section-tabs">
            <div class="tab-list" role="tablist" aria-label="Ölçü Birimleri ve Kelimeler">
              <button role="tab" aria-selected="true" tabindex="0" data-tab="pilav-units" class="active"><span class="tab-idx">01</span><span class="tab-title">Cup, Tbsp, Tsp (Ölçüler)</span></button>
              <button role="tab" aria-selected="false" tabindex="-1" data-tab="pilav-vocab"><span class="tab-idx">02</span><span class="tab-title">Kitchen Glossary (10 Kelime)</span></button>
              <button role="tab" aria-selected="false" tabindex="-1" data-tab="pilav-metric"><span class="tab-idx">03</span><span class="tab-title">Metric &amp; Imperial (Dönüşümler)</span></button>
            </div>
            <div class="tab-panels">
              <div class="tab-panel active" role="tabpanel" data-panel="pilav-units">
                <h3>Tablespoon, Teaspoon, Cup: İngilizce Ölçü Birimlerinin Türkçe Karşılıkları</h3>
                <p class="section-intro"><strong>In recipe writing, 1 cup equals 240 ml, 1 tablespoon equals 15 ml, and 1 teaspoon equals 5 ml.</strong> <span class="tr-highlight">(Mutfak tariflerinde 1 su bardağı 240 ml, 1 yemek kaşığı 15 ml ve 1 tatlı/çay kaşığı 5 ml hacme karşılık gelir:)</span></p>
                ${table(["English Unit", "Türkçe Karşılığı", "Metric Equivalent", "Recipe Example (Pilav Tarifindeki Kullanımı)"], [
                  ["1 Cup", "Su bardağı", "240 ml (veya ~180 g pirinç)", "Use 2 cups of Baldo rice for 4 servings. (4 kişilik porsiyon için 2 su bardağı baldo pirinç kullanın.)"],
                  ["1 Tablespoon (tbsp)", "Yemek kaşığı", "15 ml (veya 15 g tereyağı)", "Melt 3 tablespoons of butter in the pot. (Tencerede 3 yemek kaşığı tereyağı eritin.)"],
                  ["1 Teaspoon (tsp)", "Çay veya tatlı kaşığı", "5 ml (veya 5 g tuz)", "Add 1.5 teaspoons of fine sea salt. (1.5 tatlı kaşığı ince deniz tuzu ekleyin.)"]
                ])}
              </div>
              <div class="tab-panel" role="tabpanel" data-panel="pilav-vocab" hidden>
                <h3>10 Essential Kitchen Vocabulary Words for Rice Pilaf (Temel Mutfak Kelimeleri)</h3>
                <p class="section-intro">10 core culinary terms and context sentences used in English pilaf preparation. <span class="tr-highlight">(İngilizce pilav anlatımında geçen 10 temel mutfak kelimesi ve örnek cümleleri:)</span></p>
                ${table(["English Term", "Türkçe Karşılığı", "Context Example (İngilizce - Türkçe)"], [
                  ["Grain", "Tane veya pirinç tanesi", "Each grain of rice should remain separated. (Her bir pirinç tanesi tane tane ayrılmalıdır.)"],
                  ["Starch", "Nişasta", "Rinsing removes the excess surface starch. (Yıkamak fazla yüzey nişastasını giderir.)"],
                  ["Colander / Sieve", "Süzgeç", "Drain the rinsed rice in a fine-mesh sieve. (Yıkanan pirinci ince telli süzgeçte süzün.)"],
                  ["Broth / Stock", "Et suyu veya kemik suyu", "Hot chicken broth adds irresistible savory depth. (Sıcak tavuk suyu nefis bir lezzet katar.)"],
                  ["Lid", "Tencere kapağı", "Close the lid tightly during the simmering stage. (Kısık ateşte pişerken tencerenin kapağını sıkıca kapatın.)"],
                  ["Steam", "Demlenmek veya buharlaşmak", "Let the pilaf steam under a towel for 10 minutes. (Pilavı bezin altında 10 dakika demlendirin.)"],
                  ["Fluff", "Çatalla nazikçe havalandırmak", "Fluff the cooked rice gently with a fork. (Pişen pirinci çatalla nazikçe havalandırın.)"],
                  ["Translucent", "Şeffaf veya yarı saydam", "Saute the rice until the grains turn translucent. (Pirinci taneleri şeffaflaşana kadar kavurun.)"],
                  ["Ratio", "Oran (Pirinç/su oranı)", "The golden ratio is 1 cup rice to 1.5 cups broth. (Altın oran 1 bardak pirince 1.5 bardak sudur.)"],
                  ["Rest", "Dinlendirmek", "Rest the pot off the heat before plating. (Servis etmeden önce tencereyi ocaktan alıp dinlendirin.)"]
                ])}
              </div>
              <div class="tab-panel" role="tabpanel" data-panel="pilav-metric" hidden>
                <h3>Gram ve Litre İngilizce Tariflerde Nasıl Kullanılır? (Metric and Imperial Conversions)</h3>
                <p class="section-intro"><strong>In English cooking guides, grams are abbreviated as 'g', milliliters as 'ml', and liters as 'l'.</strong> <span class="tr-highlight">(İngilizce tariflerde gram (g), mililitre (ml) ve litre (l) kısaltmaları emperyal ölçülerle şöyle eşleşir:)</span></p>
                ${table(["Metric Unit", "Imperial Equivalent", "Türkçe Açıklama & Pilav Örneği"], [
                  ["100 g", "3.5 oz", "100 gram yaklaşık 3.5 ons ağırlığa karşılık gelir."],
                  ["360 g rice", "12.7 oz (2 cups)", "2 su bardağı baldo pirinç yaklaşık 360 gramdır."],
                  ["720 ml liquid", "3 cups (24.3 fl oz)", "3 su bardağı kaynar su veya et suyu yaklaşık 720 mililitredir."],
                  ["1 liter (1 l)", "4.2 cups (33.8 fl oz)", "1 litre su yaklaşık 4.2 su bardağına denk gelir."]
                ])}
              </div>
            </div>
          </div>
        </section>

        <!-- 7. DİL BİLGİSİ KURALLARI -->
        <section id="dil-kurallari">
          <p class="eyebrow eyebrow-lg">RECIPE GRAMMAR &amp; USAGE RULES (TARİF DİL BİLGİSİ VE ANLATIM KURALLARI)</p>
          <h2>Grammar Rules for Writing English Rice Recipes (İngilizce Pilav Tarifi Yazarken Dikkat Edilmesi Gereken Dil Kuralları)</h2>
          <p class="section-intro"><strong>Writing recipe guides in English requires four foundational grammar pillars: the imperative mood, sequence adverbs, countable/uncountable nouns, and measurement expressions.</strong> <span class="tr-highlight">(İngilizce tarif yazımı; emir kipi, sıra zarfları, sayılabilir-sayılamayan isimler ve ölçü kalıpları olmak üzere 4 ana dil kuralına dayanır.)</span></p>

          <div class="grammar-tabs section-tabs">
            <div class="tab-list" role="tablist" aria-label="Pilav Dil Kuralları Sekmeleri">
              <button role="tab" aria-selected="true" tabindex="0" data-tab="pilav-imperatives" class="active"><span class="tab-idx">01</span><span class="tab-title">Imperatives (Emir Kipi)</span></button>
              <button role="tab" aria-selected="false" tabindex="-1" data-tab="pilav-sequence"><span class="tab-idx">02</span><span class="tab-title">Sequence Adverbs (Sıra Zarfları)</span></button>
              <button role="tab" aria-selected="false" tabindex="-1" data-tab="pilav-rules"><span class="tab-idx">03</span><span class="tab-title">Grammar Rules (Dil Kuralları)</span></button>
            </div>
            <div class="tab-panels">
              <div class="tab-panel active" role="tabpanel" data-panel="pilav-imperatives">
                <h3>İngilizce Pilav Tarif Metinlerinde Emir Kipi (Imperative) Nasıl Kullanılır?</h3>
                <p class="section-intro"><strong>In recipe writing, the imperative mood starts directly with the base verb without a grammatical subject (you).</strong> <span class="tr-highlight">(Tariflerde emir kipi, özne kullanılmaksızın doğrudan fiilin yalın haliyle başlar; olumsuz talimatlarda 'Do not' kullanılır:)</span></p>
                ${table(["English Imperative", "Türkçe Karşılığı", "Action Verb (Fiil)"], [
                  ["Rinse the rice in warm water.", "Pirinci ılık suda yıkayın.", "Rinse (Yıkamak)"],
                  ["Melt the butter over medium heat.", "Tereyağını orta ateşte eritin.", "Melt (Eritmek)"],
                  ["Saute the orzo until golden.", "Şehriyeyi altın sarısı olana dek kavurun.", "Saute (Kavurmak)"],
                  ["Pour the hot chicken broth slowly.", "Sıcak tavuk suyunu yavaşça dökün.", "Pour (Dökmek)"],
                  ["Simmer on low heat with the lid closed.", "Kapağı kapalı olarak kısık ateşte pişirin.", "Simmer (Kısıkta pişirmek)"],
                  ["Do not open the lid while steaming!", "Demlenme esnasında kapağı açmayın! (Olumsuz)", "Do not open (Açmayın)"]
                ])}
              </div>
              <div class="tab-panel" role="tabpanel" data-panel="pilav-sequence" hidden>
                <h3>Bağlaçlar ve Sıra Zarfları: First, Then, After That, Finally (Sequence Adverbs)</h3>
                <p class="section-intro"><strong>Sequence adverbs establish chronological order, guiding the reader step by step from preparation to presentation.</strong> <span class="tr-highlight">(Sıra zarfları adımların zaman sırasını belirler; 5 temel zarf ve pilav paragrafı:)</span></p>
                ${table(["Sequence Adverb", "Fonksiyon", "Example Sentence (İngilizce - Türkçe)"], [
                  ["First (İlk olarak)", "Başlangıç adımı", "First, rinse 2 cups of rice thoroughly under warm water. (İlk olarak 2 bardak pirinci ılık suda iyice yıkayın.)"],
                  ["Then (Ardından)", "İkinci adım", "Then, melt the butter and saute the orzo until golden brown. (Ardından tereyağını eritin ve şehriyeyi altın sarısı olana dek kavurun.)"],
                  ["Next (Sonra)", "Gelişme adımı", "Next, add the drained rice and stir for 2 minutes. (Sonra süzülen pirinci ekleyip 2 dakika kavurun.)"],
                  ["After that (Daha sonra)", "Pişirme adımı", "After that, pour in boiling water, add salt, and cover tightly. (Daha sonra kaynar suyu dökün, tuz ekleyin ve kapağı kapatın.)"],
                  ["Finally (Son olarak)", "Dinlendirme ve servis", "Finally, let it rest for 10 minutes and fluff with a fork. (Son olarak 10 dakika dinlendirip çatalla havalandırın.)"]
                ])}
              </div>
              <div class="tab-panel" role="tabpanel" data-panel="pilav-rules" hidden>
                <h3>Core Language Rules: Countable vs Uncountable &amp; Measurement Units (Dil Kuralları)</h3>
                <p class="section-intro">Key constraints for countable vegetables versus uncountable grains and liquids. <span class="tr-highlight">(Sayılabilir sebzeler ile sayılamayan pirinç ve sıvıların mutfak kuralları:)</span></p>
                ${table(["Dil Kuralı (Rule)", "English Example", "Türkçe Açıklama & Karşılığı"], [
                  ["Uncountable Grains", "Rice, bulgur, salt, butter, water", "Sayılamaz isimler; 'a rice' denmez, 'a cup of rice' veya 'some rice' denir."],
                  ["Countable Ingredients", "2 peppers, 1 onion, 2 tomatoes", "Sayılabilir sebzeler; adet ve çoğul eki alırlar (2 green peppers)."],
                  ["Negative Imperatives", "Do not overcook the rice into mush.", "'Do not' ile kurulan olumsuz talimat; lapa yapacak kadar fazla pişirmeyin."],
                  ["Ratio Quantifiers", "1.5 times as much water as rice", "Ölçü oranları; pirinç miktarının 1.5 katı kadar kaynar su kullanın."]
                ])}
              </div>
            </div>
          </div>
        </section>

        <!-- 8. QUIZ VE ALIŞTIRMALAR -->
        <section id="alistirma" class="exercise">
          <p class="eyebrow eyebrow-lg">8TH GRADE PRACTICE &amp; QUIZ (8. SINIF QUIZ VE KAZANIM ALIŞTIRMALARI)</p>
          <h2>8th Grade English Rice Pilaf Practice Test (8. Sınıf İngilizce Pilav Tarifi Alıştırma Soruları)</h2>
          <p class="section-intro">Öğrendiğiniz mutfak fiillerini (Rinse, Saute, Boil, Simmer), pişirme yöntemlerini ve ölçü kalıplarını pekiştirmek için 4 soruluk testi çözün.</p>

          <div class="quiz-grid" style="display: flex; flex-direction: column; gap: 1.5rem; margin-top: 2rem;">
            ${pilavQuiz.map((q, idx) => `
              <div class="quiz-card" data-idx="${idx}" data-correct="${q.answer}" style="background:#ffffff; border:1px solid #e2e8f0; border-radius:14px; padding:1.6rem; text-align:left; color:#0f172a; box-shadow:0 4px 14px rgba(0,0,0,0.06);">
                <span class="quiz-badge" style="background:#0284c7; color:#ffffff; padding:4px 10px; border-radius:6px; font-size:0.85rem; font-weight:700;">Soru ${q.num} · Çoktan Seçmeli</span>
                <p style="font-size:1.15rem; font-weight:700; margin-top:1rem; color:#0f172a;">${q.question}</p>
                <p style="font-size:0.95rem; margin-top:0.4rem; line-height:1.6;"><span class="tr-highlight">(${q.questionTr})</span></p>
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
        ${getRelatedRecipesHTML("pilav")}
      </div>
    </div>
  </article>`;

  initQuizInteractivity(root, "Pilav", renderPilavPage);
  initVariantSubnavScroll(root);
}
'''

pilav_recipe_item = '''  pilav: {
    label: "Garnitür ve Ana Yemek",
    title: "İngilizce Pilav Tarifi",
    englishTitle: "Turkish Rice Pilaf Recipe",
    image: "/blog/ingilizce-tarifler/images/pilav-hero.webp",
    introEn: "Turkish rice pilaf is made by sauteing Baldo rice with butter and simmering in hot broth until fluffy.",
    introTr: "Türk pirinç pilavı; baldo pirincin tereyağında kavrulup sıcak et suyuyla demlenerek tane tane pişirilmesiyle hazırlanır.",
    time: "25 dakika", serves: "4 kişilik", level: "A1–A2", calories: "260 kcal",
    ingredients: [["Baldo Rice", "Baldo pirinç", "2 cups"], ["Butter", "Tereyağı", "3 tbsp"], ["Orzo", "Arpa şehriye", "3 tbsp"], ["Hot Broth", "Sıcak et suyu", "3 cups"], ["Salt", "Tuz", "1.5 tsp"]],
    steps: [
      ["1. Rinse the Rice with Warm Water (Pirinci Ilık Suyla Yıkayın)", "Rinse 2 cups of rice until the water runs clear.", "Pirinci suyu berraklaşana kadar ılık suyla yıkayın."],
      ["2. Melt the Butter in a Pot (Tereyağını Tencerede Eritin)", "Melt 3 tablespoons of butter with 1 tablespoon of olive oil in a wide pot.", "Geniş tencerede tereyağını zeytinyağıyla eritin."],
      ["3. Saute the Orzo Until Golden (Şehriyeyi Altın Rengi Alana Kadar Kavurun)", "Saute 3 tablespoons of orzo pasta until golden brown.", "Arpa şehriyeyi altın sarısı olana kadar kavurun."],
      ["4. Add the Rice and Stir for 2 Minutes (Pirinci Ekleyin ve 2 Dakika Karıştırın)", "Add the drained rice and saute for 2 minutes.", "Süzülen pirinci ekleyip taneler parlayana dek 2 dakika kavurun."],
      ["5. Pour in the Hot Water and Add Salt (Sıcak Suyu Ekleyin ve Tuzu Atın)", "Pour in 3 cups of boiling broth and add 1.5 teaspoons of salt.", "3 su bardağı kaynar suyu dökün ve tuzu atın."],
      ["6. Simmer the Rice on Low Heat for 15 Minutes (Pilavı Kısık Ateşte 15 Dakika Pişirin)", "Cover tightly and simmer on low heat for 15 minutes, then rest for 10 minutes.", "Kapağı kapatıp kısık ateşte 15 dakika pişirin ve 10 dakika demlendirin."]
    ],
    equipment: [["Wide shallow pot", "Yayvan pilav tenceresi", "Step 2, 3, 4, 5, 6"], ["Fine-mesh sieve", "İnce telli süzgeç", "Step 1"], ["Wooden spoon", "Tahta kaşık", "Step 2, 3, 4"], ["Cotton tea towel", "Pamuklu bez", "Step 6"]],
    vocab: [["rinse", "suyla yıkamak", "Rinse the Baldo rice with warm water."], ["saute", "kavurmak", "Saute the orzo until golden brown."], ["simmer", "kısık ateşte demlemek", "Simmer on low heat for 15 minutes."], ["fluff", "çatalla havalandırmak", "Fluff the rice gently with a fork."]]
  },
'''

with open("src/app.js", "r", encoding="utf-8") as f:
    app_js = f.read()

# 1. Add pilav to recipes dictionary if not present
if "pilav: {" not in app_js:
    app_js = app_js.replace("kurabiye: {", pilav_recipe_item + "kurabiye: {")

# 2. Add pilav code before renderKurabiyePage
if "function renderPilavPage" not in app_js:
    app_js = app_js.replace("function renderKurabiyePage() {", pilav_code + "\n\nfunction renderKurabiyePage() {")

# 3. Add routing dispatch for pilav
old_route = '} else if (slug === "kurabiye" || slug === "cookie") {\n    renderKurabiyePage();'
new_route = '} else if (slug === "kurabiye" || slug === "cookie") {\n    renderKurabiyePage();\n  } else if (slug === "pilav" || slug === "rice") {\n    renderPilavPage();'

if "slug === \"pilav\"" not in app_js:
    app_js = app_js.replace(old_route, new_route)

with open("src/app.js", "w", encoding="utf-8") as f:
    f.write(app_js)

print("Updated src/app.js with renderPilavPage, recipes.pilav and route dispatch.")

# 4. Update index.html sub-header-nav (Pilav is newest, so it goes to the far right after Kurabiye)
with open("index.html", "r", encoding="utf-8") as f:
    index_html = f.read()

old_nav_end = '<a href="/blog/ingilizce-tarifler/kurabiye" class="sub-nav-link" data-slug="kurabiye">Kurabiye</a>'
new_nav_end = '<a href="/blog/ingilizce-tarifler/kurabiye" class="sub-nav-link" data-slug="kurabiye">Kurabiye</a>\n          <a href="/blog/ingilizce-tarifler/pilav" class="sub-nav-link" data-slug="pilav">Pilav</a>'

if 'data-slug="pilav"' not in index_html:
    index_html = index_html.replace(old_nav_end, new_nav_end)
    with open("index.html", "w", encoding="utf-8") as f:
        f.write(index_html)
    print("Updated index.html with Pilav sub-nav link (newest at far right).")

print("All Pilav integration complete!")
