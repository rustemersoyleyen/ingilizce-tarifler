# build_pancake_page.py
import re

pankek_code = '''
const pancakeVariants = [
  {
    id: "classic-pancake",
    title: "Klasik Pankek Tarifi",
    briefTitle: "İngilizce Klasik Pankek Tarifi (Classic Pancake Recipe)",
    ingredientsHeading: "Klasik Pankek Tarifinin İngilizce Malzemeleri Nelerdir?",
    stepsHeading: "Klasik Pankek Pişirme Adımları İngilizce Nasıl Yazılır?",
    english: "Classic Pancake Recipe",
    description: "Classic Pancake (Klasik Pankek), un, süt, yumurta, şeker ve kabartma tozuyla hazırlanan, tavada pofuduk kabaran geleneksel kahvaltı lezzetidir.",
    image: "/blog/ingilizce-tarifler/images/pancake-fluffy.webp",
    alt: "Fluffy classic stacked pancakes with butter and honey",
    ingredients: [
      ["Flour", "Un — ana hamur yapısını oluşturan tahıl unu.", "200 g (1.5 cup)"],
      ["Milk", "Süt — hamuru akışkan ve yumuşak kılan sıvı.", "240 ml (1 cup)"],
      ["Egg", "Yumurta — bağlayıcı ve zengin kıvam sağlar.", "1 adet"],
      ["Sugar", "Toz şeker — hafif tatlandırıcı bileşen.", "30 g (2 tbsp)"],
      ["Baking Powder", "Kabartma tozu — puf puf kabarmayı sağlayan mayalama ajanı.", "10 g (2 tsp)"],
      ["Melted Butter", "Eritilmiş tereyağı — lezzet ve doku yumuşaklığı.", "30 g (2 tbsp)"]
    ],
    ingredientCards: [
      { icon: "🌾", en: "All-Purpose Flour", tr: "Çok Amaçlı Un", amount: "200 g (1.5 su bardağı)", sentence: "Sift 200 grams of flour into a clean mixing bowl. (Temiz bir karıştırma kasesine 200 gram un eleyin.)" },
      { icon: "🥛", en: "Fresh Milk", tr: "Taze Süt", amount: "240 ml (1 su bardağı)", sentence: "Whisk 240 ml of milk into the egg mixture. (Yumurta karışımına 240 ml süt çırparak ekleyin.)" },
      { icon: "🥚", en: "Fresh Egg", tr: "Taze Yumurta", amount: "1 pcs (1 adet)", sentence: "Beat 1 fresh egg with sugar until lightly frothy. (1 taze yumurtayı şekerle hafifçe köpürene kadar çırpın.)" },
      { icon: "🍬", en: "Granulated Sugar", tr: "Toz Şeker", amount: "30 g (2 yemek kaşığı)", sentence: "Add 2 tablespoons of sugar for balanced sweetness. (Dengeli tatlılık için 2 yemek kaşığı şeker ekleyin.)" },
      { icon: "✨", en: "Baking Powder", tr: "Kabartma Tozu", amount: "10 g (2 çay kaşığı)", sentence: "Baking powder creates airy bubbles in the batter. (Kabartma tozu hamurda havadar kabarcıklar oluşturur.)" },
      { icon: "🧈", en: "Melted Butter", tr: "Eritilmiş Tereyağı", amount: "30 g (2 yemek kaşığı)", sentence: "Stir in melted butter for tender pancake texture. (Yumuşacık pankek dokusu için eritilmiş tereyağı ekleyin.)" }
    ],
    steps: "First, whisk the egg, milk, sugar and melted butter in a large bowl. Then, sift in the flour and baking powder. After that, let the batter rest for 10 minutes. Pour a ladle onto a hot non-stick pan. Next, flip the pancake when bubbles appear on the surface. Finally, stack on a plate and serve with maple syrup or honey."
  },
  {
    id: "american-pancake",
    title: "Amerikan Pankek Tarifi",
    briefTitle: "İngilizce Amerikan Pankek Tarifi (American Pancake Recipe)",
    ingredientsHeading: "Amerikan Pankek Tarifinin İngilizce Malzemeleri Nelerdir?",
    stepsHeading: "Amerikan Pankek Pişirme Adımları İngilizce Nasıl Yazılır?",
    english: "American Pancake Recipe",
    description: "American Pancake (Amerikan Pankek), yayıkaltı sütü (buttermilk) ve ekstra kabartma tozu ile yapılan, ekstra kalın ve puf dokulu ikonik kahvaltılıktır.",
    image: "/blog/ingilizce-tarifler/images/pancake-hero.webp",
    alt: "Thick American style pancakes stack with melting butter",
    ingredients: [
      ["All-Purpose Flour", "Çok amaçlı un — kalın hamur yapısı için.", "250 g (2 cups)"],
      ["Buttermilk", "Yayıkaltı sütü veya kefir — asidik kabarma desteği.", "300 ml (1.25 cups)"],
      ["Eggs", "Yumurta — yapı ve zenginlik katar.", "2 adet"],
      ["Baking Powder", "Kabartma tozu — çift etkili kabarma ajanı.", "15 g (1 tbsp)"],
      ["Baking Soda", "Karbonat — buttermilk ile reaksiyona giren alkali.", "3 g (½ tsp)"],
      ["Melted Butter", "Eritilmiş tereyağı — altın sarısı pişme sağlar.", "45 g (3 tbsp)"]
    ],
    ingredientCards: [
      { icon: "🥛", en: "Buttermilk", tr: "Yayıkaltı Sütü veya Kefir", amount: "300 ml (1.25 su bardağı)", sentence: "Buttermilk reacts with baking soda for extra fluffy pancakes. (Buttermilk, ekstra kabarık pankekler için karbonatla reaksiyona girer.)" },
      { icon: "🌾", en: "Flour", tr: "Un", amount: "250 g (2 su bardağı)", sentence: "Use all-purpose flour for tender crumb. (Yumuşak kırıntı dokusu için çok amaçlı un kullanın.)" },
      { icon: "🥚", en: "Eggs", tr: "Yumurta", amount: "2 pcs (2 adet)", sentence: "Separate eggs and whip whites for cloud-like pancakes. (Bulut gibi pankekler için yumurta aklarını ayırıp çırpın.)" },
      { icon: "🧈", en: "Melted Butter", tr: "Eritilmiş Tereyağı", amount: "45 g (3 yemek kaşığı)", sentence: "Brush the griddle with melted butter. (Döküm tavayı eritilmiş tereyağıyla yağlayın.)" }
    ],
    steps: "First, combine flour, baking powder, baking soda and sugar. Then, whisk buttermilk, eggs and melted butter separately. After that, gently fold wet into dry ingredients without overmixing. Pour thick batter onto a hot griddle. Next, flip when golden and bubbles pop. Finally, stack high and top with butter."
  },
  {
    id: "banana-pancake",
    title: "Muzlu Pankek Tarifi",
    briefTitle: "İngilizce Muzlu Pankek Tarifi (Banana Pancake Recipe)",
    ingredientsHeading: "Muzlu Pankek Tarifinin İngilizce Malzemeleri Nelerdir?",
    stepsHeading: "Muzlu Pankek Pişirme Adımları İngilizce Nasıl Yazılır?",
    english: "Banana Pancake Recipe",
    description: "Banana Pancake (Muzlu Pankek), ezilmiş olgun muz ve tarçın eklenerek doğal tatlılık kazandırılan, rafine şekersiz hazırlanabilen sağlıklı pankektir.",
    image: "/blog/ingilizce-tarifler/images/pancake-banana.webp",
    alt: "Banana pancakes topped with sliced bananas and honey",
    ingredients: [
      ["Ripe Bananas", "Olgun muz — doğal şeker ve nem kaynağı.", "2 adet"],
      ["Eggs", "Yumurta — hamuru bir arada tutan protein.", "2 adet"],
      ["Flour (veya Oat Flour)", "Un veya yulaf unu.", "120 g (1 cup)"],
      ["Ground Cinnamon", "Öğütülmüş tarçın — nefis sıcak koku.", "1 tsp"],
      ["Baking Powder", "Kabartma tozu.", "5 g (1 tsp)"],
      ["Coconut Oil veya Butter", "Pişirme yağı.", "1 tbsp"]
    ],
    ingredientCards: [
      { icon: "🍌", en: "Ripe Bananas", tr: "Olgun Muz", amount: "2 pcs (2 adet)", sentence: "Mash 2 ripe bananas thoroughly with a fork. (2 olgun muz bir çatalla iyice ezin.)" },
      { icon: "🌿", en: "Ground Cinnamon", tr: "Öğütülmüş Tarçın", amount: "1 tsp (1 çay kaşığı)", sentence: "Add cinnamon to complement the sweet banana flavor. (Tatlı muz lezzetini tamamlamak için tarçın ekleyin.)" },
      { icon: "🥚", en: "Eggs", tr: "Yumurta", amount: "2 pcs (2 adet)", sentence: "Beat 2 eggs into the mashed banana puree. (Ezilmiş muz püresine 2 yumurta çırpın.)" },
      { icon: "🌾", en: "Flour or Oats", tr: "Un veya Yulaf Unu", amount: "120 g (1 su bardağı)", sentence: "Fold in flour until just combined. (Unu sadece karışana kadar ekleyin.)" }
    ],
    steps: "First, mash the ripe bananas in a bowl until smooth. Then, whisk in the eggs and cinnamon. After that, fold in the flour and baking powder. Cook spoonfuls on low-medium heat for 2 minutes per side. Finally, garnish with sliced fresh bananas and walnuts."
  },
  {
    id: "chocolate-pancake",
    title: "Kakaolu Pankek Tarifi",
    briefTitle: "İngilizce Kakaolu Pankek Tarifi (Chocolate Pancake Recipe)",
    ingredientsHeading: "Kakaolu Pankek Tarifinin İngilizce Malzemeleri Nelerdir?",
    stepsHeading: "Kakaolu Pankek Pişirme Adımları İngilizce Nasıl Yazılır?",
    english: "Chocolate Pancake Recipe",
    description: "Chocolate Pancake (Kakaolu Pankek), hamuruna elenmiş kakao tozu ve damla çikolata eklenerek hazırlanan, tatlı krizleri için ideal zengin çikolatalı pankektir.",
    image: "/blog/ingilizce-tarifler/images/pancake-chocolate.webp",
    alt: "Decadent chocolate pancakes with chocolate sauce and berries",
    ingredients: [
      ["All-Purpose Flour", "Un — temel tahıl bazı.", "180 g (1.5 cups)"],
      ["Cocoa Powder", "Kakao tozu — yoğun çikolata aroması.", "30 g (3 tbsp)"],
      ["Milk", "Süt — hamuru sulandırıcı süt ürünü.", "250 ml (1 cup)"],
      ["Egg", "Yumurta.", "1 adet"],
      ["Granulated Sugar", "Toz şeker — kakaoyu dengeleyen tatlılık.", "40 g (3 tbsp)"],
      ["Chocolate Chips", "Damla çikolata — eriyen sürpriz taneler.", "50 g (⅓ cup)"]
    ],
    ingredientCards: [
      { icon: "🍫", en: "Cocoa Powder", tr: "Kakao Tozu", amount: "30 g (3 yemek kaşığı)", sentence: "Sift cocoa powder with flour to avoid lumps. (Topaklanmayı önlemek için kakao tozunu unla birlikte eleyin.)" },
      { icon: "🍪", en: "Chocolate Chips", tr: "Damla Çikolata", amount: "50 g (⅓ su bardağı)", sentence: "Fold chocolate chips into the batter right before cooking. (Pişirmeden hemen önce damla çikolataları hamura ekleyin.)" },
      { icon: "🥛", en: "Milk", tr: "Süt", amount: "250 ml (1 su bardağı)", sentence: "Whisk milk with the egg and sugar. (Sütü yumurta ve şekerle çırpın.)" },
      { icon: "🌾", en: "Flour", tr: "Un", amount: "180 g", sentence: "Measure 180 grams of sifted flour. (180 gram elenmiş un ölçün.)" }
    ],
    steps: "First, sift flour, cocoa powder, sugar and baking powder into a bowl. Then, whisk the egg, milk and melted butter together. After that, combine wet and dry mixtures, then fold in chocolate chips. Pour batter onto a hot skillet and cook gently. Finally, drizzle with warm chocolate sauce and serve."
  }
];

const pancakeQuiz = [
  {
    num: 1,
    question: "When should you flip a pancake in the pan?",
    questionTr: "Tavadaki pankeki ne zaman diğer tarafına çevirmelisiniz?",
    options: ["A) When bubbles appear on the surface", "B) Immediately after pouring the batter", "C) After 10 minutes on high heat", "D) When it starts smoking"],
    answer: "A) When bubbles appear on the surface"
  },
  {
    num: 2,
    question: "Which ingredient makes pancakes fluffy and rise in the pan?",
    questionTr: "Pankeklerin tavada pofuduk kabarmasını sağlayan temel malzeme hangisidir?",
    options: ["A) Salt", "B) Baking powder", "C) Cold water", "D) Olive oil"],
    answer: "B) Baking powder"
  },
  {
    num: 3,
    question: "What is the key difference between a pancake and a crepe in English?",
    questionTr: "İngilizcede pancake ile crepe (krep) arasındaki temel fark nedir?",
    options: [
      "A) Pancakes are thick and fluffy; crepes are very thin and flat",
      "B) Crepes contain baking powder; pancakes do not",
      "C) Pancakes are made without flour",
      "D) Crepes can only be baked in the oven"
    ],
    answer: "A) Pancakes are thick and fluffy; crepes are very thin and flat"
  },
  {
    num: 4,
    question: "Which English verb means 'tavada pankeki spatula ile tersyüz etmek'?",
    questionTr: "'Tavada pankeki tersyüz etmek / çevirmek' anlamına gelen İngilizce fiil hangisidir?",
    options: ["A) Whisk", "B) Flip", "C) Boil", "D) Grate"],
    answer: "B) Flip"
  }
];

function renderPankekPage() {
  document.title = "İngilizce Pankek Tarifi (Pankek Yapılışı İngilizce) | Konuşarak Öğren";
  setStructuredData({
    "@context": "https://schema.org", "@type": "Recipe",
    name: "İngilizce Pankek Tarifi (Pankek Yapılışı İngilizce)",
    image: ["/blog/ingilizce-tarifler/images/pancake-hero.webp"],
    author: { "@type": "Organization", name: "Konuşarak Öğren" },
    datePublished: "2026-09-25",
    description: "İngilizce pankek tarifi; klasik, Amerikan, muzlu ve kakaolu pankek çeşitleri, malzemeleri ve 6 adımda kabarık pankek yapılışı.",
    prepTime: "PT10M", cookTime: "PT15M", totalTime: "PT25M", recipeYield: "4 porsiyon",
    recipeCategory: "Kahvaltı", recipeCuisine: "Amerikan",
    nutrition: { "@type": "NutritionInformation", calories: "175 calories" },
    recipeIngredient: ["200 g flour", "240 ml milk", "1 egg", "30 g sugar", "10 g baking powder", "30 g butter"],
    recipeInstructions: [
      { "@type": "HowToStep", position: 1, name: "1. Whisk the Eggs, Milk and Sugar", text: "Whisk the egg, milk and sugar in a bowl until smooth." },
      { "@type": "HowToStep", position: 2, name: "2. Add the Flour and Baking Powder", text: "Sift in the flour and baking powder, whisk gently into a smooth batter." },
      { "@type": "HowToStep", position: 3, name: "3. Rest the Batter for 10 Minutes", text: "Rest the batter at room temperature for 10 minutes to allow gluten to relax." },
      { "@type": "HowToStep", position: 4, name: "4. Pour the Batter onto a Hot Pan", text: "Pour one small ladle of batter onto a hot lightly buttered non-stick pan." },
      { "@type": "HowToStep", position: 5, name: "5. Flip the Pancake When Bubbles Appear", text: "Flip the pancake when bubbles form and pop on the surface." },
      { "@type": "HowToStep", position: 6, name: "6. Serve the Pancakes with Honey or Syrup", text: "Stack warm pancakes on a plate and drizzle with maple syrup or honey." }
    ]
  });

  root.innerHTML = `<article class="pasta-guide">
    <div class="reading-progress" aria-hidden="true"><span></span></div>
    
    <header class="hero">
      <div>
        <p class="eyebrow">RECIPES &amp; COOKING GUIDE (İNGİLİZCE YEMEK TARİFLERİ)</p>
        <h1>İngilizce Pankek Tarifi (Pankek Yapılışı İngilizce)</h1>
        <aside class="course-banner" aria-label="İngilizce kursu">
          <div class="course-banner-text">
            <small class="cta-eyebrow">KONUŞARAK ÖĞREN İNGİLİZCE KURSU</small>
            <strong class="cta-heading">İngilizceyi tarif ezberleyerek değil, konuşarak öğrenin.</strong>
          </div>
          <button class="cta-btn cta-btn-orange" onclick="window.location.href='https://student.konusarakogren.com/auth/register'">Ücretsiz tanışma dersi <span class="arrow">→</span></button>
        </aside>
        <p class="lede"><strong>Classic Fluffy Pancake Recipe.</strong> (İngilizce pankek tarifi; un, süt, yumurta ve kabartma tozuyla hazırlanan pofuduk Amerikan kahvaltılığının malzemelerini, tava pişirme adımlarını ve püf noktalarını Türkçe karşılıklarıyla sunan kapsamlı bir rehberdir.)</p>
        <div class="article-meta"><span class="author-mark" aria-hidden="true">KO</span><span><strong>Konuşarak Öğren Editör</strong><small>Yayınlanma tarihi: <time datetime="2026-09-25">25 Eylül 2026</time></small></span></div>
      </div>
      <figure class="hero-visual">
        <img src="/blog/ingilizce-tarifler/images/pancake-hero.webp" alt="Servis tabağında tereyağlı ve şuruplu kabarık Amerikan pankek kulesi">
        <figcaption>Classic American Pancakes (Klasik Amerikan Pankekleri)</figcaption>
      </figure>
      ${buildFactsCardHTML({
        title: "Pankek",
        prep: { val: "10 mins (10 dk)", en: "Whisking batter and resting takes 10 minutes.", tr: "Hamuru çırpma ve dinlendirme 10 dakika sürer." },
        cook: { val: "15 mins (15 dk)", en: "Skillet frying takes about 15 minutes.", tr: "Tavada iki taraflı pişirme 15 dakika sürer." },
        servings: { val: "4 servings (4 kişilik / 8-10 adet)", en: "Yields 8-10 fluffy breakfast pancakes.", tr: "8 ila 10 adet kabarık kahvaltı pankeki sunar." },
        level: { val: "A1–A2 (Temel Seviye)", en: "Covers batter, flip, pour verbs and imperial measurements.", tr: "Çırpma, dökme, çevirme fiilleri ve mutfak ölçü terimlerini kapsar." }
      })}
    </header>

    <section class="hero-overview-table" id="definition-variations">
      <p class="eyebrow eyebrow-lg">OVERVIEW &amp; COMPARISON (TANIM VE ÇEŞİTLER KARŞILAŞTIRMASI)</p>
      <h2 class="definition-heading">English Pancake Recipes: Variations, Key Ingredients and Cooking Steps (İngilizce Pankek Çeşitleri, Malzemeleri ve Pişirme Adımları)</h2>
      <p class="section-intro">Aşağıdaki tabloda 4 popüler pankek çeşidinin İngilizce isimlerini, ayırt edici malzemelerini ve temel pişirme adımlarını karşılaştırmalı olarak inceleyebilirsiniz. <span class="tr-highlight">(Explore the four main pancake variations with their English names, distinct ingredients, and cooking steps in the comparison table below.)</span></p>
      ${table(["English Recipe Name", "Türkçe Adı", "Main Ingredients (Ana Malzemeler)", "Main Steps (Temel Adımlar)"], [
        ["Classic Pancakes", "Klasik Pankek", "Flour, milk, egg, sugar, baking powder, butter (Un, süt, yumurta, şeker, kabartma tozu, tereyağı)", "Whisk wet ingredients, sift dry ingredients, rest batter and cook on hot pan. (Sıvı malzemeleri çırpın, kuruları eleyin, dinlendirip tavada pişirin.)"],
        ["American Pancakes", "Amerikan Pankek", "Flour, buttermilk, eggs, baking soda, melted butter (Un, buttermilk/kefir, yumurta, karbonat, tereyağı)", "Mix thick batter, pour onto griddle, flip when bubbles form and stack high. (Koyu hamuru karıştırın, tavaya dökün, kabarcıklar patlayınca çevirin.)"],
        ["Banana Pancakes", "Muzlu Pankek", "Mashed ripe bananas, eggs, flour, cinnamon, butter (Ezilmiş muz, yumurta, un, tarçın, tereyağı)", "Mash bananas, whisk with eggs, cook golden on low-medium heat. (Muzları ezin, yumurtayla çırpın, kısık-orta ateşte altın sarısı pişirin.)"],
        ["Chocolate Pancakes", "Kakaolu Pankek", "Flour, cocoa powder, milk, egg, sugar, chocolate chips (Un, kakao tozu, süt, yumurta, şeker, damla çikolata)", "Sift cocoa with flour, whisk batter, fold in chocolate chips and cook gently. (Kakaoyu unla eleyin, hamura damla çikolata ekleyin ve pişirin.)"]
      ], "İngilizce Pankek Çeşitleri ve Pişirme Özeti")}
    </section>

    <div class="page-grid">
      <nav class="toc" aria-label="İçindekiler">
        <a href="#kavramlar" data-scroll-target="kavramlar">Terms (Kavramlar)</a>
        <a href="#tarifler" data-scroll-target="tarifler">Variations (Tarifler)</a>
        <a href="#klasik-pankek" data-scroll-target="klasik-pankek">6 Steps (6 Adım)</a>
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
          <h2>İngilizce Pankek Tarifi İçin Temel Terimler ve Doğru Çeviriler</h2>
          
          ${buildAppBannerHTML("Pankek")}

          <p class="section-intro">Pankek tariflerini okurken ve anlatırken doğru mutfak terimlerini ve pişirme fiillerini bilmek İngilizce iletişimde büyük fark yaratır.</p>

          <div class="grammar-tabs section-tabs">
            <div class="tab-list" role="tablist" aria-label="Pankek Terimleri ve Fiiller">
              <button role="tab" aria-selected="true" tabindex="0" data-tab="pancake-terms" class="active"><span class="tab-idx">01</span><span class="tab-title">Terms (Kavramlar)</span></button>
              <button role="tab" aria-selected="false" tabindex="-1" data-tab="pancake-verbs"><span class="tab-idx">02</span><span class="tab-title">Verbs (Mutfak Fiilleri)</span></button>
            </div>
            <div class="tab-panels">
              <div class="tab-panel active" role="tabpanel" data-panel="pancake-terms">
                <h3>Pancake mi Crepe mi? Kalınlık Farkı İngilizce Nasıl Anlatılır?</h3>
                <p class="section-intro">İngilizcede <strong>pancake</strong> kabartma tozu içeren kalın ve kabarık hamurları, <strong>crepe (krep)</strong> ise kabartma ajanı içermeyen kağıt inceliğindeki hamurları ifade eder.</p>
                ${table(["English Term", "Türkçe Anlamı", "Thickness & Context (Kalınlık ve Bağlam)"], [
                  ["Pancake", "Pankek (Kabarık)", "Thick, fluffy breakfast cake made with baking powder. (Kabartma tozlu kalın ve süngerimsi doku.)"],
                  ["Crepe (Crêpe)", "Krep (İnce hamur)", "Very thin, flat French pancake without leavening agent. (Mayasız, çok ince Fransız usulü krep.)"],
                  ["Batter", "Akışkan unlu hamur", "Liquid mixture of flour, milk and egg before cooking. (Pişmeden önceki akışkan sıvı hamur.)"],
                  ["Griddle / Skillet", "Döküm tava / Pankek tavası", "Flat cooking surface ideal for frying even pancakes. (Düz yüzeyli geniş pankek pişirme tavası.)"],
                  ["Stack", "Üst üste pankek kulesi", "A pile of several cooked pancakes served on a plate. (Tabağa üst üste dizilmiş pankek dizisi.)"]
                ])}
              </div>
              <div class="tab-panel" role="tabpanel" data-panel="pancake-verbs" hidden>
                <h3>İngilizce Tarif Yazımında Kullanılan Fiiller: Whisk, Pour, Flip, Serve</h3>
                <p class="section-intro">Aşağıdaki tabloda pankek yapımının 4 ana aşamasını temsil eden kilit mutfak fiillerini inceleyebilirsiniz.</p>
                ${table(["Verb (Fiil)", "Türkçe Karşılığı", "Example Sentence (Örnek Cümle)"], [
                  ["Whisk", "Telle çırpmak", "Whisk the milk, eggs and sugar until smooth. (Süt, yumurta ve şekeri pürüzsüz olana dek çırpın.)"],
                  ["Pour", "Dökmek / Akıtmak", "Pour a small ladle of batter onto the greased pan. (Yağlanmış tavaya küçük bir kepçe hamur dökün.)"],
                  ["Flip", "Spatulayla ters çevirmek", "Flip the pancake gently when bubbles pop. (Kabarcıklar patlayınca pankeki nazikçe çevirin.)"],
                  ["Serve", "Servis etmek / Sunmak", "Serve hot pancakes with pure maple syrup and berries. (Sıcak pankekleri akçaağaç şurubu ve meyvelerle servis edin.)"],
                  ["Sift", "Elemek (Un/Kakao)", "Sift the dry ingredients to prevent flour lumps. (Topaklanmayı önlemek için kuru malzemeleri eleyin.)"],
                  ["Stack", "Üst üste dizmek", "Stack three pancakes on a warm breakfast plate. (Ilık bir kahvaltı tabağına üç pankeki üst üste dizin.)"]
                ])}
              </div>
            </div>
          </div>
        </section>

        <!-- 2. 4 PANKEK ÇEŞİDİ -->
        <div id="tarifler" class="recipe-chapters">
          <div class="chapter-intro">
            <p class="eyebrow eyebrow-lg">4 DISTINCT PANCAKE VARIATIONS (4 FARKLI PANKEK TARİFİ)</p>
            <p class="section-intro">Her tarifte malzeme tablosu, görsel malzeme listesi, ölçüler ve İngilizce yapılış yönergeleri yer alır.</p>
          </div>

          <nav class="variant-subnav" aria-label="Pankek Çeşitleri Hızlı Erişim">
            <a href="#classic-pancake" class="variant-nav-btn active" title="Classic Pancakes (Klasik Pankek)">
              <span>1. Classic Pancake</span>
              <div class="variant-tooltip">
                <span class="tooltip-en">1. Classic Pancakes</span>
                <span class="tooltip-tr">(Klasik Pankek)</span>
              </div>
            </a>
            <a href="#american-pancake" class="variant-nav-btn" title="American Pancakes (Amerikan Pankek)">
              <span>2. American Pancake</span>
              <div class="variant-tooltip">
                <span class="tooltip-en">2. American Pancakes</span>
                <span class="tooltip-tr">(Amerikan Pankek)</span>
              </div>
            </a>
            <a href="#banana-pancake" class="variant-nav-btn" title="Banana Pancakes (Muzlu Pankek)">
              <span>3. Banana Pancake</span>
              <div class="variant-tooltip">
                <span class="tooltip-en">3. Banana Pancakes</span>
                <span class="tooltip-tr">(Muzlu Pankek)</span>
              </div>
            </a>
            <a href="#chocolate-pancake" class="variant-nav-btn" title="Chocolate Pancakes (Kakaolu Pankek)">
              <span>4. Chocolate Pancake</span>
              <div class="variant-tooltip">
                <span class="tooltip-en">4. Chocolate Pancakes</span>
                <span class="tooltip-tr">(Kakaolu Pankek)</span>
              </div>
            </a>
          </nav>

          ${pancakeVariants.map((v, i) => {
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
                      en: `${variantEn} takes 20-25 mins of total preparation and skillet time.`,
                      tr: `${variantTr} toplam 20-25 dakika hazırlık ve tava pişirme süresinde tamamlanır.`
                    },
                    servings: {
                      val: "4 servings (4 kişilik)",
                      en: `${variantEn} yields 4 fresh servings (8-10 pancakes) for breakfast.`,
                      tr: `${variantTr} kahvaltı için 4 kişilik (8-10 adet) taze porsiyon sunar.`
                    },
                    count: {
                      val: `${v.ingredients.length} ingredients (${v.ingredients.length} malzeme)`,
                      en: `${variantEn} requires ${v.ingredients.length} pantry ingredients for authentic fluffy texture.`,
                      tr: `${variantTr} orijinal pofuduk dokusu için ${v.ingredients.length} temel malzeme gerektirir.`
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

        <!-- 3. 6 ADIMDA KLASİK PANKEK REHBERİ -->
        <section id="klasik-pankek">
          <div class="steps-heading">
            <p class="eyebrow eyebrow-lg">6-STEP CLASSIC PANCAKE GUIDE (6 ADIMDA KLASİK PANKEK REHBERİ)</p>
            <h2>Classic Pancakes İngilizce Adım Adım Nasıl Yapılır? (How Do You Make Classic Pancakes Step by Step?)</h2>
            <p class="section-intro">Kabarık ve yumuşacık bir klasik pankek 6 temel adımda pişirilir. Talimat cümleleri yalın fiille başlayan emir kipiyle (imperative) kurulur.</p>
            <div class="steps-meta">
              <span>📋 6 steps <strong style="font-weight:600; color:#0284c7;">(6 adım)</strong></span>
              <span>⏱️ 15 mins <strong style="font-weight:600; color:#0284c7;">(15 dakika)</strong></span>
              <span>📊 Level A1–A2 <strong style="font-weight:600; color:#0284c7;">(A1–A2 seviye)</strong></span>
            </div>
          </div>
          ${buildStepAccordionHTML([
            {
              number: 1,
              titleEn: "1. Whisk the Eggs, Milk and Sugar",
              titleTr: "1. Adım: Yumurtaları, Sütü ve Şekeri Çırpın",
              sentenceEn: "Whisk 1 egg, 240 ml of milk and 2 tablespoons of sugar in a mixing bowl until frothy.",
              sentenceTr: "Geniş bir kasede 1 yumurta, 240 ml süt ve 2 yemek kaşığı şekeri köpürene dek çırpın.",
              actionEn: "Whisk",
              actionTr: "Çırpmak",
              img: "/blog/ingilizce-tarifler/images/steps/pancake-step-1.webp",
              ingredient: "1 egg, 240 ml milk, 30 g sugar (1 yumurta, süt, şeker)",
              equipment: "Mixing bowl and whisk (Kase ve çırpıcı)",
              time: "2 mins (2 dakika)"
            },
            {
              number: 2,
              titleEn: "2. Add the Flour and Baking Powder",
              titleTr: "2. Adım: Unu ve Kabartma Tozunu Ekleyin",
              sentenceEn: "Sift in 200 grams of flour, 2 teaspoons of baking powder and a pinch of salt, then stir gently.",
              sentenceTr: "200 gram un, 2 çay kaşığı kabartma tozu ve bir tutam tuzu eleyerek ekleyin, ardından nazikçe karıştırın.",
              actionEn: "Sift",
              actionTr: "Elemek",
              img: "/blog/ingilizce-tarifler/images/steps/pancake-step-2.webp",
              ingredient: "200 g flour, 10 g baking powder (Un ve kabartma tozu)",
              equipment: "Flour sieve and spatula (Elek ve spatula)",
              time: "3 mins (3 dakika)"
            },
            {
              number: 3,
              titleEn: "3. Rest the Batter for 10 Minutes",
              titleTr: "3. Adım: Hamuru 10 Dakika Dinlendirin",
              sentenceEn: "Rest the pancake batter at room temperature for 10 minutes so the baking powder activates and flour absorbs liquid.",
              sentenceTr: "Kabartma tozunun harekete geçmesi ve unun sıvıyı çekmesi için hamuru oda sıcaklığında 10 dakika dinlendirin.",
              actionEn: "Rest",
              actionTr: "Dinlendirmek",
              img: "/blog/ingilizce-tarifler/images/steps/pancake-step-3.webp",
              ingredient: "Prepared smooth pancake batter (Hazırlanmış hamur)",
              equipment: "Covered bowl (Üstü kapalı kase)",
              time: "10 mins (10 dakika)"
            },
            {
              number: 4,
              titleEn: "4. Pour the Batter onto a Hot Pan",
              titleTr: "4. Adım: Hamuru Sıcak Tavaya Dökün",
              sentenceEn: "Heat a non-stick skillet over medium heat, brush lightly with butter, and pour one small ladle of batter into the center.",
              sentenceTr: "Yapışmaz tavayı orta ateşte ısıtın, hafifçe tereyağı sürün ve tavanın ortasına küçük bir kepçe hamur dökün.",
              actionEn: "Pour",
              actionTr: "Dökmek",
              img: "/blog/ingilizce-tarifler/images/steps/pancake-step-4.webp",
              ingredient: "1 ladle batter, 1 tsp butter (1 kepçe hamur, tereyağı)",
              equipment: "Non-stick skillet and ladle (Yapışmaz tava ve kepçe)",
              time: "2 mins (2 dakika)"
            },
            {
              number: 5,
              titleEn: "5. Flip the Pancake When Bubbles Appear",
              titleTr: "5. Adım: Kabarcıklar Oluşunca Pankeki Çevirin",
              sentenceEn: "Flip the pancake carefully with a spatula when bubbles form on top, and cook the other side for 1 more minute until golden.",
              sentenceTr: "Yüzeyde hava kabarcıkları patladığında pankeki spatulayla dikkatlice çevirin ve diğer tarafını 1 dakika daha kızartın.",
              actionEn: "Flip",
              actionTr: "Ters çevirmek",
              img: "/blog/ingilizce-tarifler/images/steps/pancake-step-5.webp",
              ingredient: "Partially cooked pancake (Tavadaki pankek)",
              equipment: "Silicone spatula (Silikon spatula)",
              time: "2 mins (2 dakika)"
            },
            {
              number: 6,
              titleEn: "6. Serve the Pancakes with Honey or Syrup",
              titleTr: "6. Adım: Pankekleri Bal veya Şurupla Servis Edin",
              sentenceEn: "Stack the warm golden pancakes on a plate, top with a pat of butter, and drizzle with maple syrup or organic honey.",
              sentenceTr: "Sıcak altın sarısı pankekleri tabağa üst üste dizin, üzerine bir parça tereyağı koyup akçaağaç şurubu veya süzme bal gezdirin.",
              actionEn: "Serve",
              actionTr: "Servis etmek",
              img: "/blog/ingilizce-tarifler/images/steps/pancake-step-6.webp",
              ingredient: "Warm pancake stack, butter, maple syrup (Pankek, tereyağı, şurup)",
              equipment: "Serving plate (Servis tabağı)",
              time: "1 min (1 dakika)"
            }
          ])}
        </section>

        <!-- 4. MALZEMELER VE EKİPMANLAR -->
        <section id="malzemeler-ve-ekipman">
          <p class="eyebrow eyebrow-lg">INGREDIENTS &amp; EQUIPMENT (MALZEMELER VE PİŞİRME GEREÇLERİ)</p>
          <h2>What Ingredients Do You Need for Fluffy Pancakes? (Kabarık Pankek İçin Hangi Malzemeler Gerekir?)</h2>
          <p class="section-intro">Kabarık ve hafif dokulu bir Amerikan pankeki elde etmek için malzemelerin tazeliği ve doğru pişirme ekipmanı büyük önem taşır.</p>

          <div class="grammar-tabs section-tabs">
            <div class="tab-list" role="tablist" aria-label="Malzemeler ve Tava Ekipmanı">
              <button role="tab" aria-selected="true" tabindex="0" data-tab="pancake-ing" class="active"><span class="tab-idx">01</span><span class="tab-title">Core Ingredients (Malzemeler)</span></button>
              <button role="tab" aria-selected="false" tabindex="-1" data-tab="pancake-pan"><span class="tab-idx">02</span><span class="tab-title">Which Pan Works Best? (Hangi Tava?)</span></button>
            </div>
            <div class="tab-panels">
              <div class="tab-panel active" role="tabpanel" data-panel="pancake-ing">
                <h3>Kabarık Pankek İçin Gerekli Olan Temel Malzemeler</h3>
                ${table(["English Ingredient", "Türkçe Karşılığı", "Quantity", "Function in Cooking"], [
                  ["All-Purpose Flour", "Çok amaçlı un", "200 g (1.5 cups)", "Provides gluten structure and body. (Hamurun ana gövdesini ve dokusunu sağlar.)"],
                  ["Baking Powder", "Kabartma tozu", "10 g (2 tsp)", "Releases carbon dioxide bubbles for fluffiness. (Hava kabarcıkları üreterek kabartır.)"],
                  ["Whole Milk", "Tam yağlı süt", "240 ml (1 cup)", "Hydrates dry flour and creates pourable batter. (Unu ıslatarak akışkan kıvam verir.)"],
                  ["Fresh Egg", "Taze yumurta", "1 large (1 adet)", "Binds ingredients and adds golden color. (Malzemeleri birbirine bağlar ve sarı renk verir.)"],
                  ["Granulated Sugar", "Toz şeker", "30 g (2 tbsp)", "Sweetens lightly and aids browning. (Hafif tat verir ve tavadaki kızarmayı hızlandırır.)"],
                  ["Butter", "Tereyağı", "30 g (2 tbsp)", "Enriches crumb and prevents dryness. (Dokuya zenginlik katar ve kurumayı önler.)"]
                ])}
              </div>
              <div class="tab-panel" role="tabpanel" data-panel="pancake-pan" hidden>
                <h3>Which Pan Works Best for Making Pancakes? (Pankek Yapımı İçin Hangi Tava En İyisidir?)</h3>
                <p class="section-intro">Pankeklerin eşit renk alması ve yapışmadan kolayca çevrilebilmesi için yüzey seçimi kritiktir.</p>
                ${table(["English Equipment", "Türkçe Karşılığı", "Used In Step", "Advantage in Cooking"], [
                  ["Non-stick frying pan", "Yapışmaz teflon tava", "Frying & Flipping", "Allows flipping without tearing the delicate batter. (Hamurun yırtılmadan kolayca dönmesini sağlar.)"],
                  ["Cast iron griddle", "Döküm ızgara tavası", "Frying multiple pancakes", "Retains heat evenly across entire surface. (Isıyı homojen tutarak eşit renk dağılımı sağlar.)"],
                  ["Thin silicone spatula", "İnce silikon spatula", "Flipping step", "Slides smoothly under pancake without scratching pan. (Tavayı çizmeden pankekin altına kayar.)"],
                  ["Soup ladle or measuring cup", "Çorba kepçesi veya ölçü kabı", "Portioning batter", "Ensures all pancakes are identical in size. (Tüm pankeklerin eşit porsiyonlarda olmasını garantiler.)"]
                ])}
              </div>
            </div>
          </div>
        </section>

        <!-- 5. BESİN DEĞERLERİ & KALORİ -->
        <section id="besin-degerleri">
          <p class="eyebrow eyebrow-lg">CALORIES &amp; NUTRITION FACTS (BESİN DEĞERLERİ VE KALORİ)</p>
          <h2>How Many Calories Is 1 Pancake? (1 Pankek Kaç Kalori?)</h2>
          <p class="section-intro"><strong>1 standard plain pancake contains approximately 175 calories.</strong> <span class="tr-highlight">(1 standart klasik sade pankek yaklaşık 175 kalori (kcal) içerir.)</span> Şurup, bal veya tereyağı ilavesi porsiyon başına 50–100 kalori ekleyebilir.</p>

          <div class="grammar-tabs section-tabs">
            <div class="tab-list" role="tablist" aria-label="Besin Değerleri ve Soslar">
              <button role="tab" aria-selected="true" tabindex="0" data-tab="pancake-nutr" class="active"><span class="tab-idx">01</span><span class="tab-title">Nutrition Facts (Besin Değerleri)</span></button>
              <button role="tab" aria-selected="false" tabindex="-1" data-tab="pancake-sauces"><span class="tab-idx">02</span><span class="tab-title">Sauces: Maple Syrup &amp; Honey (Soslar)</span></button>
              <button role="tab" aria-selected="false" tabindex="-1" data-tab="pancake-flip"><span class="tab-idx">03</span><span class="tab-title">Using 'Flip' Verb (Flip Fiili)</span></button>
            </div>
            <div class="tab-panels">
              <div class="tab-panel active" role="tabpanel" data-panel="pancake-nutr">
                <h3>What Are the Nutrition Facts of Classic Pancakes? (Klasik Pankekin Besin Değerleri Nelerdir?)</h3>
                ${table(["Nutrient (Besin Öğesi)", "Amount Per Pancake (1 Adet)", "Daily Value % (Günlük Değer)", "Function (İşlev)"], [
                  ["Calories (Kalori)", "175 kcal", "9%", "Energy from healthy grains and milk. (Enerji sağlar.)"],
                  ["Carbohydrates (Karbonhidrat)", "24 g", "8%", "Primary source of quick morning energy. (Sabah enerjisi kaynağı.)"],
                  ["Protein", "5 g", "10%", "Provided by egg and fresh milk. (Yumurta ve sütten gelen yapı taşı.)"],
                  ["Total Fat (Toplam Yağ)", "6 g", "8%", "From butter and egg yolk. (Tereyağı ve yumurta sarısından gelir.)"],
                  ["Dietary Fiber (Diyet Lifi)", "1 g", "4%", "Digestive fiber from wheat grain. (Buğday lifi.)"],
                  ["Calcium (Kalsiyum)", "110 mg", "11%", "Essential bone nutrient from milk. (Sütten gelen kalsiyum minerali.)"]
                ])}
              </div>
              <div class="tab-panel" role="tabpanel" data-panel="pancake-sauces" hidden>
                <h3>Maple Syrup ve Honey: Pankek Sosları İngilizce Nasıl Söylenir?</h3>
                <p class="section-intro">İngilizcede pankek üstüne gezdirilen tatlı soslara <strong>topping</strong> veya <strong>syrup</strong> denir.</p>
                ${table(["Sauce / Topping", "Türkçe Karşılığı", "Example Sentence (İngilizce - Türkçe)"], [
                  ["Maple syrup", "Akçaağaç şurubu", "Drizzle real Canadian maple syrup over your pancake stack. (Pankek kulenizin üstüne hakiki Kanada akçaağaç şurubu gezdirin.)"],
                  ["Honey", "Süzme bal", "Pure organic honey is a wholesome natural pancake topping. (Saf organik bal, doğal ve besleyici bir pankek sosudur.)"],
                  ["Chocolate syrup", "Çikolata sosu", "Kids love warm chocolate syrup and sliced strawberries. (Çocuklar ılık çikolata sosu ve çilek dilimlerini çok sever.)"],
                  ["Whipped cream", "Krem şanti", "Top each pancake stack with a dollop of whipped cream. (Her pankek kulesinin üstüne bir parça krem şanti koyun.)"]
                ])}
              </div>
              <div class="tab-panel" role="tabpanel" data-panel="pancake-flip" hidden>
                <h3>Flip Fiili Pankek Tarifinde Nasıl Kullanılır?</h3>
                <p class="section-intro"><strong>Flip</strong> fiili, tavadaki bir yiyeceği düz bir spatula yardımıyla hızla tersyüz etmek anlamına gelir.</p>
                ${table(["Usage Case", "İngilizce Cümle", "Türkçe Çeviri"], [
                  ["Golden Rule", "Flip the pancake when small bubbles appear on the surface.", "Yüzeyde küçük hava kabarcıkları oluşunca pankeki çevirin."],
                  ["Technique Tip", "Never flip a pancake twice; cook each side once until golden.", "Pankeki asla iki kez çevirmeyin; her iki tarafı birer kez altın sarısı pişirin."],
                  ["Tool Usage", "Use a wide, flexible spatula to flip without breaking.", "Kırmadan çevirmek için geniş ve esnek bir spatula kullanın."]
                ])}
              </div>
            </div>
          </div>
        </section>

        <!-- 6. ÖLÇÜ BİRİMLERİ & MUTFAK KELİMELERİ -->
        <section id="olculer">
          <p class="eyebrow eyebrow-lg">UNITS OF MEASUREMENT &amp; VOCABULARY (ÖLÇÜ BİRİMLERİ VE KELİMELER)</p>
          <h2>İngilizce Pankek Tariflerinde Kullanılan Ölçü Birimleri Nelerdir?</h2>
          <p class="section-intro">İngilizce tariflerde un, süt ve şeker miktarları hem metrik (gram, mililitre) hem de Amerikan ölçü birimleriyle (cup, tablespoon, teaspoon) ifade edilir.</p>

          <div class="grammar-tabs section-tabs">
            <div class="tab-list" role="tablist" aria-label="Ölçü Birimleri ve Kelimeler">
              <button role="tab" aria-selected="true" tabindex="0" data-tab="pancake-units" class="active"><span class="tab-idx">01</span><span class="tab-title">Imperial Units (Ölçü Birimleri)</span></button>
              <button role="tab" aria-selected="false" tabindex="-1" data-tab="pancake-metric"><span class="tab-idx">02</span><span class="tab-title">Metric Units (Gram ve Litre)</span></button>
              <button role="tab" aria-selected="false" tabindex="-1" data-tab="pancake-vocab"><span class="tab-idx">03</span><span class="tab-title">Kitchen Vocabulary (10 Kelime)</span></button>
            </div>
            <div class="tab-panels">
              <div class="tab-panel active" role="tabpanel" data-panel="pancake-units">
                <h3>Tablespoon, Teaspoon, Cup: İngilizce Ölçü Birimlerinin Türkçe Karşılıkları</h3>
                ${table(["English Unit", "Kısaltma", "Türkçe Karşılığı", "Metric Equivalent (Yaklaşık Karşılık)"], [
                  ["Cup", "cup", "Su bardağı", "240 ml sıvı / 130 g un"],
                  ["Tablespoon", "tbsp", "Yemek kaşığı", "15 ml / 15 g şeker"],
                  ["Teaspoon", "tsp", "Tatlı / Çay kaşığı", "5 ml / 5 g kabartma tozu"],
                  ["Pinch", "pinch", "Bir tutam (Parmak ucu)", "1 gramdan az tuz"],
                  ["Ladle", "ladle", "Yemek / Çorba kepçesi", "60 ml hamur dökme ölçüsü"]
                ])}
              </div>
              <div class="tab-panel" role="tabpanel" data-panel="pancake-metric" hidden>
                <h3>Gram ve Litre İngilizce Tariflerde Nasıl Kullanılır?</h3>
                <p class="section-intro">İngilizce metinlerde gram (g), mililitre (ml) ve litre (l) kısaltmaları nokta konulmadan sayıdan hemen sonra boşlukla yazılır.</p>
                ${table(["Metrik Terim", "İngilizce Yazılışı", "Örnek Tarif Cümlesi", "Türkçe Karşılığı"], [
                  ["Gram", "g (gram)", "Add 200 g of all-purpose flour.", "200 g çok amaçlı un ekleyin."],
                  ["Milliliter", "ml (milliliter)", "Pour 240 ml of whole milk.", "240 ml tam yağlı süt dökün."],
                  ["Liter", "l (liter)", "Bring 1 l of water to boil.", "1 litre suyu kaynatın."],
                  ["Kilogram", "kg (kilogram)", "Store in a 1 kg airtight flour tin.", "1 kg hava almaz un kutusunda saklayın."]
                ])}
              </div>
              <div class="tab-panel" role="tabpanel" data-panel="pancake-vocab" hidden>
                <h3>Pankek Tarif Metninde Geçen Temel İngilizce Mutfak Kelimeleri</h3>
                ${table(["English Term", "Türkçe Karşılığı", "Example in Pancake Making"], [
                  ["Batter", "Akışkan unlu hamur", "The batter should be thick yet pourable."],
                  ["Fluffy", "Kabarık ve pofuduk", "Baking powder makes the pancakes fluffy."],
                  ["Griddle", "Düz pişirme sacı / tavası", "Grease the griddle with a drop of butter."],
                  ["Spatula", "Mutfak spatulası", "Slide the spatula under the pancake."],
                  ["Bubbles", "Hava kabarcıkları", "Look for bubbles popping on the wet surface."],
                  ["Golden-brown", "Altın sarısı / Nar gibi", "Cook each side until lightly golden-brown."],
                  ["Topping", "Üst sos ve süsleme", "Maple syrup is the most classic topping."],
                  ["Lump", "Hamur topağı", "Do not worry about small lumps in pancake batter."],
                  ["Overmix", "Aşırı çırpmak / Yoğurmak", "Do not overmix or pancakes will become tough."],
                  ["Stack", "Üst üste dizmek", "Stack warm pancakes high on a breakfast platter."]
                ])}
              </div>
            </div>
          </div>
        </section>

        <!-- 7. DİL KURALLARI -->
        <section id="dil-kurallari">
          <p class="eyebrow eyebrow-lg">RECIPE GRAMMAR &amp; USAGE (TARİF DİL KURALLARI VE ANLATIM BİÇİMİ)</p>
          <h2>İngilizce Pankek Tarifi Yazarken Dikkat Edilmesi Gereken Dil Kuralları</h2>
          <p class="section-intro">İngilizce tarifler emir kipi (imperatives), kronolojik sıra zarfları (sequence adverbs) ve ölçülebilirlik kuralları doğrultusunda yazılır.</p>

          <div class="grammar-tabs section-tabs">
            <div class="tab-list" role="tablist" aria-label="Tarif Dil Kuralları">
              <button role="tab" aria-selected="true" tabindex="0" data-tab="pancake-imperatives" class="active"><span class="tab-idx">01</span><span class="tab-title">Imperatives (Emir Kipi)</span></button>
              <button role="tab" aria-selected="false" tabindex="-1" data-tab="pancake-sequence"><span class="tab-idx">02</span><span class="tab-title">Sequence Adverbs (Sıra Zarfları)</span></button>
              <button role="tab" aria-selected="false" tabindex="-1" data-tab="pancake-rules"><span class="tab-idx">03</span><span class="tab-title">Countable / Uncountable</span></button>
            </div>
            <div class="tab-panels">
              <div class="tab-panel active" role="tabpanel" data-panel="pancake-imperatives">
                <h3>İngilizce Pankek Tarif Metinlerinde Emir Kipi (Imperative) Nasıl Kullanılır?</h3>
                <p class="section-intro">Emir kipi (imperative mood), öznesiz olarak doğrudan fiilin yalın haliyle başlar ve mutfak yönergesi verir.</p>
                ${table(["İngilizce Emir Kipi", "Mutfak Eylemi", "Türkçe Çeviri"], [
                  ["Whisk the egg and milk in a bowl.", "Whisk (Çırpmak)", "Yumurta ve sütü bir kasede çırpın."],
                  ["Sift the flour and baking powder together.", "Sift (Elemek)", "Un ve kabartma tozunu birlikte eleyin."],
                  ["Pour a small ladle onto the hot pan.", "Pour (Dökmek)", "Sıcak tavaya küçük bir kepçe dökün."],
                  ["Flip the pancake when bubbles form.", "Flip (Ters çevirmek)", "Kabarcıklar oluşunca pankeki çevirin."],
                  ["Do not overmix the batter.", "Negative Imperative (Olumsuz)", "Hamuru aşırı çırpmayın veya hırpalamayın."]
                ])}
              </div>
              <div class="tab-panel" role="tabpanel" data-panel="pancake-sequence" hidden>
                <h3>Bağlaçlar ve Sıra Zarfları: First, Then, After That, Finally</h3>
                <p class="section-intro">Sıra zarfları adımların zaman sırasını takip etmeyi kolaylaştırır ve 8. sınıf İngilizce müfredatının merkezinde yer alır.</p>
                ${table(["Sequence Adverb", "Fonksiyon", "Örnek Cümle (İngilizce - Türkçe)"], [
                  ["First (İlk olarak)", "Başlangıç adımı", "First, whisk the egg, milk and sugar until smooth. (İlk olarak yumurta, süt ve şekeri pürüzsüzce çırpın.)"],
                  ["Then (Ardından)", "İkinci adım", "Then, sift in the dry ingredients. (Ardından kuru malzemeleri eleyerek ekleyin.)"],
                  ["Next (Sonra)", "Gelişme adımı", "Next, pour a ladle of batter onto the hot pan. (Sonra sıcak tavaya bir kepçe hamur dökün.)"],
                  ["After that (Daha sonra)", "Çevirme adımı", "After that, flip the pancake when bubbles pop. (Daha sonra kabarcıklar patlayınca pankeki çevirin.)"],
                  ["Finally (Son olarak)", "Servis adımı", "Finally, drizzle warm maple syrup and serve. (Son olarak ılık akçaağaç şurubu gezdirip servis edin.)"]
                ])}
              </div>
              <div class="tab-panel" role="tabpanel" data-panel="pancake-rules" hidden>
                <h3>Countable ve Uncountable İsimler: Pankek Malzemeleri</h3>
                <p class="section-intro">Sıvı ve toz malzemeler sayılamazken tane ile sayılan meyve ve yumurtalar sayılabilir kabul edilir.</p>
                ${table(["Dil Kuralı", "Açıklama & Örnek", "Mutfak Kullanımı"], [
                  ["Countable Nouns", "1 egg, 2 pancakes, 3 bananas", "Tane ile sayılır; çoğul eki (-s) alır."],
                  ["Uncountable Nouns", "some flour, milk, butter, sugar", "Sayılamaz; ölçü kaplarıyla (cup, tbsp) kullanılır."],
                  ["Quantity Expressions", "a cup of milk, two tablespoons of sugar", "Sayılamayanları ölçülebilir hale getirir."],
                  ["Cooking Temperature", "Cook over medium heat for 2 minutes", "Süre ve sıcaklık belirten zarf tümleçleri."]
                ])}
              </div>
            </div>
          </div>
        </section>

        <!-- 8. 8. SINIF QUIZ & ALIŞTIRMALAR -->
        <section id="alistirma" class="exercise">
          <p class="eyebrow" style="color:#93c5fd;">PRACTICE &amp; QUIZ (KAZANIM KONTROLÜ VE ALIŞTIRMALAR)</p>
          <h2 style="color:#ffffff;">8. Sınıf İngilizce Pankek Tarifi Alıştırma ve Quizi</h2>
          <p class="section-intro" style="color:#cbd5e1;">Öğrendiğiniz pankek hazırlama eylemlerini, mutfak fiillerini ve emir cümlelerini bu interaktif test ile pekiştirin.</p>

          <div class="quiz-grid" style="display: flex; flex-direction: column; gap: 1.5rem; margin-top: 2rem;">
            ${pancakeQuiz.map((q, idx) => `
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
        ${getRelatedRecipesHTML("pankek")}
      </div>
    </div>
  </article>`;

  initQuizInteractivity(root, "Pankek", renderPankekPage);
  initVariantSubnavScroll(root);
}
'''

with open("src/app.js", "r", encoding="utf-8") as f:
    app_js = f.read()

# 1. Insert pankek_code before function renderKurabiyePage
if "function renderPankekPage" not in app_js:
    app_js = app_js.replace("function renderKurabiyePage() {", pankek_code + "\n\nfunction renderKurabiyePage() {")

# 2. Add routing dispatch for pankek
old_route_check = '} else if (slug === "kurabiye" || slug === "cookie") {\n    renderKurabiyePage();'
new_route_check = '} else if (slug === "kurabiye" || slug === "cookie") {\n    renderKurabiyePage();\n  } else if (slug === "pankek" || slug === "pancake") {\n    renderPankekPage();'

app_js = app_js.replace(old_route_check, new_route_check)

# 3. Ensure sub-header nav includes Pankek in correct position
# Check if pankek link is in sub-header-nav
if '/blog/ingilizce-tarifler/pankek' not in app_js and '/blog/ingilizce-tarifler/pancake' not in app_js:
    # Look for sub-header links
    app_js = app_js.replace(
        '<a href="/blog/ingilizce-tarifler/kek" data-sub-slug="kek">Kek</a>',
        '<a href="/blog/ingilizce-tarifler/kek" data-sub-slug="kek">Kek</a>\n        <a href="/blog/ingilizce-tarifler/pankek" data-sub-slug="pankek">Pankek</a>'
    )

with open("src/app.js", "w", encoding="utf-8") as f:
    f.write(app_js)

print("Pancake page and router successfully added to src/app.js!")
