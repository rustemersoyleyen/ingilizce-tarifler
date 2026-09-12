import "./styles.css";
import menemenData from "./data/menemen.json";
import pizzaData from "./data/pizza.json";
import kurabiyeData from "./data/kurabiye.json";

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
  menemen: {
    label: "Kahvaltı",
    title: "İngilizce Menemen Tarifi",
    englishTitle: "Classic Menemen Recipe",
    image: "/blog/ingilizce-tarifler/images/menemen-hero.webp",
    introEn: menemenData.page.introEnglish,
    introTr: menemenData.page.introTurkish,
    time: "20 dakika", serves: "2 kişilik", level: "A1–A2", calories: "220 kcal",
    ingredients: [["Eggs", "Yumurta", "2 large"], ["Tomatoes", "Domates", "2 ripe"], ["Green Peppers", "Yeşil Biber", "2 fresh"], ["Olive Oil", "Zeytinyağı", "2 tbsp"]],
    steps: [
      ["1. Chop the Green Peppers and Tomatoes", "Chop 2 green peppers into thin rings and dice 2 ripe tomatoes into small cubes.", "2 yeşil biberi ince halkalar halinde doğrayın ve 2 olgun domatesi küçük küpler halinde kesin."],
      ["2. Saute the Peppers in Olive Oil", "Heat 2 tablespoons of olive oil in a skillet and saute the chopped peppers for 3 minutes.", "Bir tavada 2 yemek kaşığı zeytinyağını ısıtın ve doğranmış biberleri yumuşayana kadar 3 dakika soteleyin."],
      ["3. Add the Tomatoes and Cook for 10 Minutes", "Add the diced tomatoes to the pan and cook over medium heat for 10 minutes.", "Doğranmış domatesleri tavaya ekleyin ve koyu bir sos kıvamına gelene kadar orta ateşte 10 dakika pişirin."],
      ["4. Crack the Eggs into the Pan", "Crack 2 fresh eggs directly into the simmering tomato and pepper sauce.", "2 taze yumurtayı doğrudan kaynamakta olan domates ve biber sosunun içine kırın."],
      ["5. Stir the Eggs Gently on Low Heat", "Stir the egg whites gently on low heat for 2 minutes while leaving the yolks slightly soft.", "Yumurta aklarını kısık ateşte 2 dakika nazikçe karıştırırken sarılarını hafif yumuşak bırakın."],
      ["6. Season the Menemen and Serve with Bread", "Season with 1 pinch of salt and pepper, remove from heat, and serve immediately with fresh crusty bread.", "1 tutam tuz ve karabiberle baharatlayın, ocaktan alın ve taze çıtır ekmekle hemen servis edin."]
    ],
    equipment: [["Copper Pan / Sahan", "Bakır Tava / Sahan", "Adım 2, 3, 4, 5, 6"], ["Chef Knife", "Mutfak Bıçağı", "Adım 1"], ["Cutting Board", "Kesme Tahtası", "Adım 1"], ["Wooden Spoon", "Tahta Kaşık", "Adım 2, 3, 5"]],
    vocab: [["chop", "doğramak", "Chop the peppers into small rings."], ["dice", "küp küp doğramak", "Dice 2 ripe tomatoes into small cubes."], ["saute", "sotelemek", "Saute the peppers in hot oil."], ["simmer", "kısık ateşte pişirmek", "Simmer the tomatoes for 10 minutes."], ["crack", "kırmak", "Crack 2 eggs into the skillet."], ["stir", "karıştırmak", "Stir gently on low heat."]]
  },
  kurabiye: {
    label: "Tatlı ve Atıştırmalık",
    title: "İngilizce Kurabiye Tarifi",
    englishTitle: "Butter Cookie Recipe",
    image: "/blog/ingilizce-tarifler/images/kurabiye-hero.webp",
    introEn: kurabiyeData.page.introEnglish,
    introTr: kurabiyeData.page.introTurkish,
    time: "35 dakika", serves: "24 adet", level: "A1–A2", calories: "140 kcal (1 adet)",
    ingredients: [["Butter", "Tuzsuz tereyağı", "200 g"], ["Powdered Sugar", "Pudra şekeri", "100 g"], ["All-Purpose Flour", "Çok amaçlı un", "280 g"], ["Vanilla", "Vanilya özütü", "1 tsp"]],
    steps: [
      ["1. Soften the Butter (Tereyağını Yumuşatın)", "Soften 200 g of unsalted butter at room temperature.", "200 g tuzsuz tereyağını oda sıcaklığında yumuşatın."],
      ["2. Mix with Powdered Sugar (Pudra Şekeriyle Karıştırın)", "Beat butter and 100 g powdered sugar until creamy.", "Tereyağı ve 100 g pudra şekerini kremsi olana dek çırpın."],
      ["3. Add Flour and Vanilla (Un ve Vanilyayı Ekleyin)", "Sift 280 g flour and 1 tsp vanilla into the bowl.", "280 g un ve 1 çay kaşığı vanilyayı kaseye eleyin."],
      ["4. Knead Soft Dough (Hamuru Yoğurun)", "Knead gently into a smooth, pliable dough.", "Pürüzsüz ve yumuşak bir hamur olana dek nazikçe yoğurun."],
      ["5. Shape into Balls (Toplar Halinde Şekillendirin)", "Roll walnut-sized pieces into 24 round balls.", "Ceviz büyüklüğündeki hamur parçalarını 24 yuvarlak top halinde yuvarlayın."],
      ["6. Place on Baking Tray (Tepsiye Dizin)", "Arrange cookies on parchment-lined sheet 3 cm apart.", "Kurabiyeleri pişirme kağıdı serili tepsiye 3 cm arayla dizin."],
      ["7. Bake for 15 Minutes (15 Dakika Pişirin)", "Bake at 170°C for 15 minutes until golden.", "170°C'de 15 dakika altın rengi alana kadar pişirin."]
    ],
    equipment: [["Baking sheet", "Fırın tepsisi", "Step 6, 7"], ["Mixing bowl", "Karıştırma kabı", "Step 2, 3, 4"], ["Flour sieve", "Un eleği", "Step 3"], ["Cooling rack", "Tel ızgara", "Step 7"]],
    vocab: [["cream", "kremalaştırmak", "Cream the butter and sugar."], ["sift", "elemek", "Sift the flour."], ["roll", "yuvarlamak", "Roll the dough into balls."], ["shape", "şekil vermek", "Shape with a fork."], ["bake", "fırında pişirmek", "Bake for 15 minutes."]]
  }
};

const root = document.querySelector("#content");
const table = (headers, rows, caption = "") => `<div class="table-container"><table>${caption ? `<caption class="table-caption">${caption}</caption>` : ""}<thead><tr>${headers.map(h => `<th scope="col">${h}</th>`).join("")}</tr></thead><tbody>${rows.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;

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
        <p class="eyebrow">OTHER RECIPES (DİĞER İNGİLİZCE TARİFLER)</p>
        <h2 id="related-title">Other English Recipes (Diğer İngilizce Tarifler)</h2>
        <p class="section-intro">Öğrendiğiniz mutfak terimlerini ve adım adım anlatım kalıplarını pekiştirmek için diğer popüler tarifleri de inceleyebilirsiniz.</p>
      </div>
      <div class="related-grid">
        ${availableSlugs.map(slug => {
          const item = recipes[slug];
          return `
            <article class="related-card">
              <span class="recipe-badge">${item.label} · ${item.level}</span>
              <h3 class="related-card-title">
                <a href="/blog/ingilizce-tarifler/${slug}" class="related-card-link">${item.title}</a>
              </h3>
              <small>${item.englishTitle}</small>
              <b class="card-link-btn" aria-hidden="true">Tarife git →</b>
            </article>
          `;
        }).join("")}
      </div>
    </section>
  `;
}


function buildFactsCardHTML(facts) {
  return `
    <aside class="hero-card pasta-facts" aria-label="Tarif özeti">
      <table class="recipe-facts">
        <caption>Tarif özeti</caption>
        <thead>
          <tr>
            <th scope="col"><span class="fact-th-en">PREPARATION</span><span class="fact-th-tr">(HAZIRLIK)</span></th>
            <th scope="col"><span class="fact-th-en">COOKING</span><span class="fact-th-tr">(PİŞİRME)</span></th>
            <th scope="col"><span class="fact-th-en">SERVINGS</span><span class="fact-th-tr">(PORSİYON)</span></th>
            <th scope="col"><span class="fact-th-en">LEVEL</span><span class="fact-th-tr">(SEVİYE)</span></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div class="fact-tooltip-wrap">
                <span class="fact-value" tabindex="0">${facts.prep.val}</span>
                <div class="fact-tooltip">
                  <span class="tooltip-en">${facts.prep.en}</span>
                  <span class="tooltip-tr">${facts.prep.tr}</span>
                </div>
              </div>
            </td>
            <td>
              <div class="fact-tooltip-wrap">
                <span class="fact-value" tabindex="0">${facts.cook.val}</span>
                <div class="fact-tooltip">
                  <span class="tooltip-en">${facts.cook.en}</span>
                  <span class="tooltip-tr">${facts.cook.tr}</span>
                </div>
              </div>
            </td>
            <td>
              <div class="fact-tooltip-wrap">
                <span class="fact-value" tabindex="0">${facts.servings.val}</span>
                <div class="fact-tooltip">
                  <span class="tooltip-en">${facts.servings.en}</span>
                  <span class="tooltip-tr">${facts.servings.tr}</span>
                </div>
              </div>
            </td>
            <td>
              <div class="fact-tooltip-wrap">
                <span class="fact-value" tabindex="0">${facts.level.val}</span>
                <div class="fact-tooltip">
                  <span class="tooltip-en">${facts.level.en}</span>
                  <span class="tooltip-tr">${facts.level.tr}</span>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </aside>
  `;
}

function buildChapterMetaHTML(meta) {
  const time = meta?.time?.val ? meta.time : null;
  const servings = meta?.servings?.val ? meta.servings : null;
  const count = meta?.count?.val ? meta.count : null;
  return `
    <div class="chapter-meta">
      ${time ? `
      <div class="meta-tooltip-wrap">
        <span class="meta-badge">${time.val}</span>
        <div class="fact-tooltip">
          <span class="tooltip-en">${time.en}</span>
          <span class="tooltip-tr">${time.tr}</span>
        </div>
      </div>` : ""}
      ${servings ? `
      <div class="meta-tooltip-wrap">
        <span class="meta-badge">${servings.val}</span>
        <div class="fact-tooltip">
          <span class="tooltip-en">${servings.en}</span>
          <span class="tooltip-tr">${servings.tr}</span>
        </div>
      </div>` : ""}
      ${count ? `
      <div class="meta-tooltip-wrap">
        <span class="meta-badge">${count.val}</span>
        <div class="fact-tooltip">
          <span class="tooltip-en">${count.en}</span>
          <span class="tooltip-tr">${count.tr}</span>
        </div>
      </div>` : ""}
    </div>
  `;
}

function buildIngredientCardsHTML(cards) {
  if (!cards || !cards.length) return "";
  return `
    <div class="ingredient-cards-section">
      <h4 class="cards-subhead">Visual Ingredient Cards (Görsel Malzeme Kartları):</h4>
      <div class="ingredient-grid">
        ${cards.map(c => `
          <article class="ingredient-card">
            <div class="ingredient-card-header">
              <div class="ingredient-thumb"><span class="ingredient-icon">${c.icon || "🥗"}</span></div>
              <span class="quantity-badge">${c.quantity || ""}</span>
            </div>
            <h4>${c.en} <small>(${c.tr})</small></h4>
            <p class="card-en">${c.sentenceEn || ""}</p>
            <p class="card-tr">${c.sentenceTr || ""}</p>
          </article>
        `).join("")}
      </div>
    </div>
  `;
}

function buildStepAccordionHTML(items) {
  return `
    <div class="step-accordion">
      ${items.map((s, idx) => `
        <details class="step-accordion-item" ${idx === 0 ? "open" : ""}>
          <summary class="step-accordion-summary">
            <div class="step-acc-header">
              <span class="step-acc-badge">${s.number || idx + 1}</span>
              <h3 class="step-acc-title">${s.titleEn} <span style="font-weight:500; font-size:0.92em; color:#64748b;">(${s.titleTr})</span></h3>
            </div>
            <span class="step-acc-icon" aria-hidden="true">↓</span>
          </summary>
          <div class="step-accordion-body">
            <p class="step-acc-en"><strong>${s.sentenceEn}</strong></p>
            <p class="step-acc-tr">${s.sentenceTr}</p>
            <div class="step-acc-action-badge">
              <span>Cooking Action (Mutfak Eylemi):</span> <strong>${s.actionEn || "Cooking"} (${s.actionTr || "Pişirme"})</strong>
            </div>
          </div>
        </details>
      `).join("")}
    </div>
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
          <p class="eyebrow">DEFINITION &amp; OVERVIEW (TANIM VE GENEL BAKIŞ)</p>
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
            <p class="eyebrow">8TH GRADE PRACTICE & QUIZ (8. SINIF QUIZ VE ALIŞTIRMALAR)</p>
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
  return `<p class="eyebrow">RECIPE GRAMMAR & USAGE RULES (TARİF DİL BİLGİSİ VE ANLATIM KURALLARI)</p><h2>İngilizce Makarna Tarifi Yazarken Dikkat Edilmesi Gereken Dil Kuralları</h2><p class="section-intro">Üç kısa derste kuralı inceleyin, örneği okuyun ve Türkçe karşılığıyla pekiştirin.</p><div class="grammar-tabs"><div class="tab-list" role="tablist" aria-label="Dil kuralı konuları"><button id="tab-overview" role="tab" aria-selected="true" aria-controls="panel-overview" tabindex="0" data-tab="overview"><span>01</span>Genel kurallar</button><button id="tab-imperative" role="tab" aria-selected="false" aria-controls="panel-imperative" tabindex="-1" data-tab="imperative"><span>02</span>Emir kipi</button><button id="tab-sequence" role="tab" aria-selected="false" aria-controls="panel-sequence" tabindex="-1" data-tab="sequence"><span>03</span>Sıra zarfları</button></div><div class="tab-panels"><div id="panel-overview" class="tab-panel" role="tabpanel" aria-labelledby="tab-overview" data-panel="overview">${table(["Kural","İngilizce örnek","Türkçe karşılığı"],[["Emir kipi","Boil the water.","Suyu kaynatın."],["Sıra zarfları","First, boil the water.","Önce suyu kaynatın."],["Sayılabilen/sayılamayan isimler","Add two tomatoes and some salt.","İki domates ve biraz tuz ekleyin."],["Ölçü ifadeleri","Add 1 tablespoon of oil.","1 yemek kaşığı yağ ekleyin."]])}</div><div id="panel-imperative" class="tab-panel" role="tabpanel" aria-labelledby="tab-imperative" data-panel="imperative" hidden><h3>İngilizce Makarna Tarif Metinlerinde Emir Kipi (Imperative) Nasıl Kullanılır?</h3><p class="section-intro">Emir kipi, özne kullanmadan fiilin yalın hâliyle başlar: <strong>Boil, add, cook, drain, serve.</strong> Olumsuz talimatta <em>do not</em> kullanılır.</p>${table(["İngilizce emir","Türkçe karşılığı","Fiil"],[["Boil the water.","Suyu kaynatın.","boil"],["Add the pasta.","Makarnayı ekleyin.","add"],["Cook for 10 minutes.","10 dakika pişirin.","cook"],["Drain the pasta.","Makarnayı süzün.","drain"],["Serve while hot.","Sıcakken servis edin.","serve"]])}</div><div id="panel-sequence" class="tab-panel" role="tabpanel" aria-labelledby="tab-sequence" data-panel="sequence" hidden><h3>Bağlaçlar ve Sıra Zarfları: First, Then, After That, Finally</h3>${table(["Sıra zarfı","Türkçe karşılığı","Örnek"],[["First","Önce","First, boil the water."],["Then","Ardından","Then, add the pasta."],["After that","Daha sonra","After that, cook for 10 minutes."],["Next","Sonra","Next, drain the pasta."],["Finally","Son olarak","Finally, serve while hot."]])}<div class="language-card sequence"><small>Kısa tarif paragrafı</small><p>First, boil the water. Then, add the salt and pasta. After that, cook for 8–10 minutes. Next, drain the pasta and add butter. Finally, serve it while hot.</p><p class="translation">Önce suyu kaynatın. Ardından tuz ve makarnayı ekleyin. Daha sonra 8–10 dakika pişirin. Sonra makarnayı süzüp tereyağı ekleyin. Son olarak sıcakken servis edin.</p></div></div></div></div>`;
}


const pastaCards = [
  [
    {
      "en": "Pasta",
      "tr": "Makarna",
      "quantity": "200 g",
      "icon": "🍝",
      "sentenceEn": "Boil the dry pasta in well-salted water.",
      "sentenceTr": "Kuru makarnayı bol tuzlu suda haşlayın."
    },
    {
      "en": "Water",
      "tr": "Su",
      "quantity": "2 l",
      "icon": "💧",
      "sentenceEn": "Bring cold water to a rolling boil before adding pasta.",
      "sentenceTr": "Makarnayı eklemeden önce soğuk suyu fokurdayana kadar kaynatın."
    },
    {
      "en": "Salt",
      "tr": "Tuz",
      "quantity": "1 tsp",
      "icon": "🧂",
      "sentenceEn": "Salt seasons the pasta noodles from the inside out.",
      "sentenceTr": "Tuz, makarna hamurunu içten dışa doğru lezzetlendirir."
    },
    {
      "en": "Butter",
      "tr": "Tereyağı",
      "quantity": "1 tbsp",
      "icon": "🧈",
      "sentenceEn": "Melt butter into hot pasta for a glossy, rich coat.",
      "sentenceTr": "Parlak ve zengin bir kaplama için sıcak makarnada tereyağını eritin."
    }
  ],
  [
    {
      "en": "Pasta",
      "tr": "Makarna",
      "quantity": "200 g",
      "icon": "🍝",
      "sentenceEn": "Cook your pasta to al dente firmness.",
      "sentenceTr": "Makarnanızı al dente (dişe dokunur) kıvamda pişirin."
    },
    {
      "en": "Crushed tomatoes",
      "tr": "Ezilmiş domates",
      "quantity": "250 g",
      "icon": "🥫",
      "sentenceEn": "Crushed tomatoes create a rich, savory sauce base.",
      "sentenceTr": "Ezilmiş domatesler lezzetli ve zengin bir sos bazı oluşturur."
    },
    {
      "en": "Garlic",
      "tr": "Sarımsak",
      "quantity": "2 cloves",
      "icon": "🧄",
      "sentenceEn": "Gently sauté sliced garlic to release sweet aroma.",
      "sentenceTr": "Tatlı aromasını açığa çıkarmak için dilimlenmiş sarımsağı hafifçe soteleyin."
    },
    {
      "en": "Olive oil",
      "tr": "Zeytinyağı",
      "quantity": "1 tbsp",
      "icon": "🫒",
      "sentenceEn": "Extra virgin olive oil brings Mediterranean flavor.",
      "sentenceTr": "Sızma zeytinyağı Akdeniz lezzetini yemeğe kazandırır."
    }
  ],
  [
    {
      "en": "Fettuccine",
      "tr": "Fettuccine makarna",
      "quantity": "250 g",
      "icon": "🍝",
      "sentenceEn": "Wide fettuccine ribbons hold thick cream sauce gracefully.",
      "sentenceTr": "Geniş fettuccine şeritleri yoğun kremalı sosu mükemmel taşır."
    },
    {
      "en": "Chicken breast",
      "tr": "Tavuk göğsü",
      "quantity": "200 g",
      "icon": "🍗",
      "sentenceEn": "Sear seasoned chicken strips until golden brown.",
      "sentenceTr": "Baharatlanmış tavuk dilimlerini altın sarısı olana kadar mühürleyin."
    },
    {
      "en": "Heavy cream",
      "tr": "Sıvı krema",
      "quantity": "150 ml",
      "icon": "🥛",
      "sentenceEn": "Simmer heavy cream on low heat to thicken naturally.",
      "sentenceTr": "Doğal şekilde koyulaşması için sıvı kremayı kısık ateşte kaynatın."
    },
    {
      "en": "Parmesan",
      "tr": "Parmesan peyniri",
      "quantity": "50 g",
      "icon": "🧀",
      "sentenceEn": "Grated Parmesan adds a sharp, nutty savoriness.",
      "sentenceTr": "Rendelenmiş Parmesan keskin ve fındıksı bir lezzet katar."
    }
  ],
  [
    {
      "en": "Macaroni",
      "tr": "Dirsek makarna",
      "quantity": "250 g",
      "icon": "🧀",
      "sentenceEn": "Curved macaroni catches creamy sauce in every curve.",
      "sentenceTr": "Kıvrımlı makarna kremamsı sosu her kıvrımında tutar."
    },
    {
      "en": "Cheddar cheese",
      "tr": "Cheddar peyniri",
      "quantity": "150 g",
      "icon": "🧀",
      "sentenceEn": "Cheddar melts into a bubbly, deeply golden gratin crust.",
      "sentenceTr": "Cheddar, üzeri kabarcıklı altın rengi bir graten kabuğuna dönüşür."
    },
    {
      "en": "Milk",
      "tr": "Süt",
      "quantity": "200 ml",
      "icon": "🥛",
      "sentenceEn": "Warm whole milk yields a velvety, smooth béchamel sauce.",
      "sentenceTr": "Ilık tam yağlı süt kadifemsi ve pürüzsüz bir beşamel sos sağlar."
    },
    {
      "en": "Butter",
      "tr": "Tereyağı",
      "quantity": "30 g",
      "icon": "🧈",
      "sentenceEn": "Whisk butter with flour to form a golden roux.",
      "sentenceTr": "Altın sarısı bir meyane elde etmek için tereyağını unla çırpın."
    }
  ],
  [
    {
      "en": "Spaghetti",
      "tr": "Spagetti makarna",
      "quantity": "250 g",
      "icon": "🍝",
      "sentenceEn": "Long spaghetti strands twine perfectly around rich meat sauce.",
      "sentenceTr": "Uzun spagetti telleri zengin etli sosa mükemmel sarılır."
    },
    {
      "en": "Ground beef",
      "tr": "Kıyma",
      "quantity": "200 g",
      "icon": "🥩",
      "sentenceEn": "Brown minced beef until all moisture evaporates.",
      "sentenceTr": "Tüm suyunu çekene kadar kıymayı kavurun."
    },
    {
      "en": "Tomato paste",
      "tr": "Domates salçası",
      "quantity": "2 tbsp",
      "icon": "🥫",
      "sentenceEn": "Tomato paste infuses deep umami sweetness into the sauce.",
      "sentenceTr": "Domates salçası sosa derin bir umami tatlılığı katar."
    },
    {
      "en": "Onion",
      "tr": "Kuru soğan",
      "quantity": "1 piece",
      "icon": "🧅",
      "sentenceEn": "Finely diced onion creates the savory flavor foundation.",
      "sentenceTr": "İnce doğranmış kuru soğan lezzetli bir aroma temeli oluşturur."
    }
  ],
  [
    {
      "en": "Pasta",
      "tr": "Burgu makarna",
      "quantity": "200 g",
      "icon": "🍝",
      "sentenceEn": "Fusilli twists trap savory chunks of tuna and corn.",
      "sentenceTr": "Burgu makarna ton balığı ve mısır tanelerini içine hapseder."
    },
    {
      "en": "Canned tuna",
      "tr": "Konserve ton balığı",
      "quantity": "160 g",
      "icon": "🐟",
      "sentenceEn": "Drain high-quality tuna before flaking into pasta.",
      "sentenceTr": "Makarnaya ufalamadan önce kaliteli ton balığını süzün."
    },
    {
      "en": "Sweet corn",
      "tr": "Tatlı mısır",
      "quantity": "80 g",
      "icon": "🌽",
      "sentenceEn": "Sweet corn provides juicy crunch and bright yellow pop.",
      "sentenceTr": "Tatlı mısır sulu bir çıtırlık ve canlı sarı bir renk katar."
    },
    {
      "en": "Olive oil",
      "tr": "Zeytinyağı",
      "quantity": "2 tbsp",
      "icon": "🫒",
      "sentenceEn": "Cold-pressed olive oil ties all Mediterranean flavors together.",
      "sentenceTr": "Soğuk sıkım zeytinyağı tüm Akdeniz aromalarını birbirine bağlar."
    }
  ]
];
const kekCards = [
  [
    {
      "en": "Flour",
      "tr": "Un",
      "quantity": "200 g",
      "icon": "🌾",
      "sentenceEn": "Sift all-purpose flour for a delicate, fluffy sponge.",
      "sentenceTr": "Yumuşak ve kabarık bir kek için çok amaçlı unu eleyin."
    },
    {
      "en": "Granulated Sugar",
      "tr": "Toz şeker",
      "quantity": "150 g",
      "icon": "🍬",
      "sentenceEn": "Whisk sugar with eggs until pale and frothy.",
      "sentenceTr": "Şekeri yumurtalarla köpük köpük ve açık renk olana dek çırpın."
    },
    {
      "en": "Eggs",
      "tr": "Yumurta",
      "quantity": "3 large",
      "icon": "🥚",
      "sentenceEn": "Room-temperature eggs create maximum batter volume.",
      "sentenceTr": "Oda sıcaklığındaki yumurtalar hamura en yüksek hacmi kazandırır."
    },
    {
      "en": "Milk",
      "tr": "Süt",
      "quantity": "120 ml",
      "icon": "🥛",
      "sentenceEn": "Milk provides rich moisture and a tender crumb.",
      "sentenceTr": "Süt zengin bir nem ve yumuşak bir doku kazandırır."
    }
  ],
  [
    {
      "en": "Cocoa powder",
      "tr": "Kakao tozu",
      "quantity": "40 g",
      "icon": "🍫",
      "sentenceEn": "Dutch-process cocoa yields a dark, intense chocolate aroma.",
      "sentenceTr": "Kaliteli kakao tozu koyu ve yoğun bir çikolata aroması verir."
    },
    {
      "en": "Milk",
      "tr": "Süt",
      "quantity": "200 ml",
      "icon": "🥛",
      "sentenceEn": "Simmer milk with cocoa to create the glossy soak syrup.",
      "sentenceTr": "Parlak ıslatma sosunu oluşturmak için sütü kakaoyla kaynatın."
    },
    {
      "en": "Eggs",
      "tr": "Yumurta",
      "quantity": "3 large",
      "icon": "🥚",
      "sentenceEn": "Beat eggs thoroughly to support the dense cocoa batter.",
      "sentenceTr": "Yoğun kakaolu hamuru desteklemek için yumurtaları iyice çırpın."
    },
    {
      "en": "Vegetable Oil",
      "tr": "Sıvı yağ",
      "quantity": "100 ml",
      "icon": "🫒",
      "sentenceEn": "Vegetable oil ensures the cake stays moist for days.",
      "sentenceTr": "Sıvı yağ kekin günlerce nemli kalmasını güvenceye alır."
    }
  ],
  [
    {
      "en": "Grated carrots",
      "tr": "Rendelenmiş havuç",
      "quantity": "200 g",
      "icon": "🥕",
      "sentenceEn": "Fresh grated carrots release sweet moisture during baking.",
      "sentenceTr": "Taze rendelenmiş havuç pişme sırasında tatlı bir nem salar."
    },
    {
      "en": "Ground cinnamon",
      "tr": "Toz tarçın",
      "quantity": "1 tbsp",
      "icon": "🪵",
      "sentenceEn": "Cinnamon gives the cake an inviting, warm bakery aroma.",
      "sentenceTr": "Tarçın keke davetkar, sıcacık bir fırın kokusu kazandırır."
    },
    {
      "en": "Walnuts",
      "tr": "Ceviz içi",
      "quantity": "60 g",
      "icon": "🌰",
      "sentenceEn": "Toasted walnuts offer a delightful crunchy contrast.",
      "sentenceTr": "Kavrulmuş cevizler harika bir çıtır lezzet tezatı sunar."
    },
    {
      "en": "Flour",
      "tr": "Un",
      "quantity": "220 g",
      "icon": "🌾",
      "sentenceEn": "Whisk flour with warm spices before combining.",
      "sentenceTr": "Karıştırmadan önce unu ılık baharatlarla birlikte harmanlayın."
    }
  ],
  [
    {
      "en": "Lemon zest",
      "tr": "Limon kabuğu rendesi",
      "quantity": "1 tbsp",
      "icon": "🍋",
      "sentenceEn": "Rub lemon zest into sugar to release fragrant citrus oils.",
      "sentenceTr": "Aromatik narenciye yağlarını çıkarmak için kabuğu şekerle ovun."
    },
    {
      "en": "Lemon juice",
      "tr": "Taze limon suyu",
      "quantity": "50 ml",
      "icon": "🍋",
      "sentenceEn": "Fresh lemon juice adds a zesty, bright tang to the crumb.",
      "sentenceTr": "Taze limon suyu kek dokusuna mayhoş ve parlak bir canlılık katar."
    },
    {
      "en": "Poppy seeds",
      "tr": "Mavi haşhaş",
      "quantity": "20 g",
      "icon": "🌱",
      "sentenceEn": "Tiny poppy seeds add pleasant crunch and speckled beauty.",
      "sentenceTr": "Minik haşhaş tohumları hoş bir çıtırlık ve benekli güzellik katar."
    },
    {
      "en": "Flour",
      "tr": "Un",
      "quantity": "200 g",
      "icon": "🌾",
      "sentenceEn": "Sift flour with baking powder for a lofty, cloud-like rise.",
      "sentenceTr": "Bulut gibi hafif bir kabarma için unu kabartma tozuyla eleyin."
    }
  ]
];
const omletCards = [
  [
    {
      "en": "Eggs",
      "tr": "Taze yumurta",
      "quantity": "2 large",
      "icon": "🥚",
      "sentenceEn": "Beat fresh eggs until yolk and white form a silky blend.",
      "sentenceTr": "Sarı ve beyaz ipeksi bir kıvam alana kadar taze yumurtaları çırpın."
    },
    {
      "en": "Butter",
      "tr": "Tereyağı",
      "quantity": "1 tbsp",
      "icon": "🧈",
      "sentenceEn": "Melt butter gently without letting it turn brown.",
      "sentenceTr": "Tereyağını yakmadan orta-kısık ateşte nazikçe eritin."
    },
    {
      "en": "Salt",
      "tr": "İnce tuz",
      "quantity": "1 pinch",
      "icon": "🧂",
      "sentenceEn": "A pinch of fine salt enhances the savory richness of eggs.",
      "sentenceTr": "Bir tutam ince tuz yumurtanın zengin lezzetini öne çıkarır."
    },
    {
      "en": "Black pepper",
      "tr": "Karabiber",
      "quantity": "1 pinch",
      "icon": "🌶️",
      "sentenceEn": "Freshly ground black pepper adds warmth and aroma.",
      "sentenceTr": "Taze çekilmiş karabiber sıcaklık ve aroma katar."
    }
  ],
  [
    {
      "en": "Eggs",
      "tr": "Yumurta",
      "quantity": "2 large",
      "icon": "🥚",
      "sentenceEn": "Whisk eggs until light and slightly frothy.",
      "sentenceTr": "Yumurtaları hafif ve köpüklü olana kadar çırpın."
    },
    {
      "en": "Feta or Cheddar",
      "tr": "Beyaz peynir veya kaşar",
      "quantity": "50 g",
      "icon": "🧀",
      "sentenceEn": "Crumbled cheese melts luxuriously within the hot folded egg.",
      "sentenceTr": "Ufalanmış peynir sıcak katlanmış yumurtanın içinde erir."
    },
    {
      "en": "Butter",
      "tr": "Tereyağı",
      "quantity": "1 tbsp",
      "icon": "🧈",
      "sentenceEn": "Butter guarantees a smooth non-stick slide out of the pan.",
      "sentenceTr": "Tereyağı omletin tavadan kayarak çıkmasını sağlar."
    },
    {
      "en": "Parsley",
      "tr": "Maydanoz",
      "quantity": "1 tbsp",
      "icon": "🌿",
      "sentenceEn": "Chopped parsley adds herbal freshness to rich cheese.",
      "sentenceTr": "Kıyılmış maydanoz zengin peynire ferah bir tat katar."
    }
  ],
  [
    {
      "en": "Eggs",
      "tr": "Yumurta",
      "quantity": "3 large",
      "icon": "🥚",
      "sentenceEn": "Three eggs create a hearty base to hold the vegetables.",
      "sentenceTr": "Üç yumurta sebzeleri taşıyacak doyurucu bir taban oluşturur."
    },
    {
      "en": "Bell pepper",
      "tr": "Renkli biber",
      "quantity": "½ cup",
      "icon": "🫑",
      "sentenceEn": "Diced bell peppers bring crisp sweetness and crunch.",
      "sentenceTr": "Küp doğranmış biberler çıtır bir tatlılık katar."
    },
    {
      "en": "Cherry tomato",
      "tr": "Çeri domates",
      "quantity": "4 pieces",
      "icon": "🍅",
      "sentenceEn": "Ripe tomatoes offer tangy bursts of juicy flavor.",
      "sentenceTr": "Olgun domatesler sulu ve mayhoş lezzet patlamaları sunar."
    },
    {
      "en": "Baby spinach",
      "tr": "Bebek ıspanak",
      "quantity": "1 handful",
      "icon": "🥬",
      "sentenceEn": "Tender spinach wilts softly into the warm fluffy eggs.",
      "sentenceTr": "Taze ıspanak sıcak kabarık yumurtaların içinde nazikçe erir."
    }
  ],
  [
    {
      "en": "Button mushrooms",
      "tr": "Kültür mantarı",
      "quantity": "100 g",
      "icon": "🍄",
      "sentenceEn": "Sauté sliced mushrooms until golden and caramelized.",
      "sentenceTr": "Dilimlenmiş mantarları karamelize ve altın rengi olana dek soteleyin."
    },
    {
      "en": "Eggs",
      "tr": "Yumurta",
      "quantity": "2 large",
      "icon": "🥚",
      "sentenceEn": "Whisk eggs gently for a soft and delicate texture.",
      "sentenceTr": "Yumuşak ve narin bir doku için yumurtaları nazikçe çırpın."
    },
    {
      "en": "Butter",
      "tr": "Tereyağı",
      "quantity": "1.5 tbsp",
      "icon": "🧈",
      "sentenceEn": "Sautéing mushrooms in rich butter unlocks deep earthy flavors.",
      "sentenceTr": "Mantarları tereyağında sotelemek derin topraksı tatları açığa çıkarır."
    },
    {
      "en": "Fresh thyme",
      "tr": "Taze kekik",
      "quantity": "1 sprig",
      "icon": "🌿",
      "sentenceEn": "Earthy thyme is the quintessential herb companion for mushrooms.",
      "sentenceTr": "Topraksı kekik mantarların en kusursuz baharat eşlikçisidir."
    }
  ]
];

pastaVariants.forEach((v, idx) => { v.ingredientCards = pastaCards[idx]; });


const baklavaVariants = [
  {
    title: "Ev Yapımı Baklava",
    briefTitle: "İngilizce Ev Yapımı Baklava Tarifi (Homemade Baklava Recipe)",
    ingredientsHeading: "Ev Yapımı Baklava Tarifinin İngilizce Malzemeleri Nelerdir?",
    stepsHeading: "Ev Yapımı Baklava Pişirme Adımları İngilizce Nasıl Yazılır?",
    english: "Homemade Baklava Recipe",
    description: "Homemade Baklava (Ev Yapımı Baklava); incecik açılan yufka katları arasına ceviz içi serpilip tereyağıyla fırınlanan ve soğuk şerbetle tatlandırılan geleneksel Türk tatlısıdır.",
    image: "/blog/ingilizce-tarifler/images/baklava-hero.webp",
    alt: "A tray of golden Turkish homemade baklava cut into diamond shapes",
    ingredients: [
      ["Phyllo sheets", "Baklavalık yufka", "40 sheets"],
      ["Walnuts", "Dövülmüş ceviz içi", "300 g"],
      ["Clarified butter", "Eritilmiş sade yağ veya tereyağı", "250 g"],
      ["Granulated sugar", "Toz şeker (şerbet için)", "400 g (2 cups)"],
      ["Water", "Su (şerbet için)", "400 ml (2 cups)"],
      ["Lemon juice", "Taze limon suyu", "1 tbsp"]
    ],
    steps: "First, prepare the sugar syrup and let it cool. Then, brush each phyllo sheet with butter and layer 20 sheets. Next, spread crushed walnuts evenly and layer the remaining 20 sheets. Finally, cut into diamond shapes, bake at 170°C for 45 minutes, and pour cold syrup over hot baklava.",
    ingredientCards: [
      { en: "Phyllo sheets", tr: "Baklavalık yufka", quantity: "40 sheets", icon: "📜", sentenceEn: "Keep phyllo sheets covered with a damp cloth so they do not dry out.", sentenceTr: "Kurumamaları için baklavalık yufkaların üzerini nemli bir bezle örtün." },
      { en: "Crushed walnuts", tr: "Dövülmüş ceviz", quantity: "300 g", icon: "🌰", sentenceEn: "Crush fresh walnuts into coarse crumbs for authentic crunch.", sentenceTr: "Otantik bir çıtırlık için taze cevizleri iri kırıntılar halinde dövün." },
      { en: "Clarified butter", tr: "Sade yağ", quantity: "250 g", icon: "🧈", sentenceEn: "Clarified butter prevents burning and produces a golden, flaky pastry.", sentenceTr: "Sade yağ yanmayı önler ve altın sarısı, çıtır katlar oluşturur." },
      { en: "Sugar syrup", tr: "Şeker şerbeti", quantity: "400 ml", icon: "🍯", sentenceEn: "Simmer sugar and water with a dash of lemon juice until thickened.", sentenceTr: "Şeker ve suyu kıvam alana kadar bir miktar limon suyuyla kaynatın." }
    ]
  },
  {
    title: "Fıstıklı Baklava",
    briefTitle: "İngilizce Fıstıklı Baklava Tarifi (Pistachio Baklava Recipe)",
    ingredientsHeading: "Fıstıklı Baklava Tarifinin İngilizce Malzemeleri Nelerdir?",
    stepsHeading: "Fıstıklı Baklava Pişirme Adımları İngilizce Nasıl Yazılır?",
    english: "Pistachio Baklava Recipe",
    description: "Pistachio Baklava (Fıstıklı Baklava); Gaziantep'in meşhur zümrüt yeşili boz Antep fıstığı ve saf sade yağ ile hazırlanan en asil baklava çeşididir.",
    image: "/blog/ingilizce-tarifler/images/baklava-fistikli.webp",
    alt: "Pistachio baklava garnished with bright green ground pistachios",
    ingredients: [
      ["Phyllo sheets", "İnce baklavalık yufka", "40 sheets"],
      ["Gaziantep pistachios", "Boz Antep fıstığı içi", "350 g"],
      ["Clarified butter", "Sade yağ (urfa yağı)", "250 g"],
      ["Sugar", "Toz şeker", "450 g"],
      ["Water", "Su", "450 ml"],
      ["Lemon juice", "Limon suyu", "1 tsp"]
    ],
    steps: "First, boil water, sugar and lemon juice for 15 minutes, then cool completely. Then, layer 20 buttered phyllo sheets in the tray. Next, distribute ground green pistachios generously. After that, top with 20 more sheets, slice, and bake at 165°C for 50 minutes. Finally, pour cold syrup over the bubbling pastry.",
    ingredientCards: [
      { en: "Green pistachios", tr: "Boz Antep fıstığı", quantity: "350 g", icon: "🥜", sentenceEn: "Vibrant early-harvest green pistachios deliver unsurpassed aroma.", sentenceTr: "Canlı erken hasat boz fıstıklar eşsiz bir aroma sunar." },
      { en: "Phyllo sheets", tr: "İnce yufka", quantity: "40 sheets", icon: "📜", sentenceEn: "Brush each paper-thin layer lightly with hot melted butter.", sentenceTr: "Her kağıt inceliğindeki katı sıcak eritilmiş yağla hafifçe yağlayın." },
      { en: "Clarified butter", tr: "Sade yağ", quantity: "250 g", icon: "🧈", sentenceEn: "Skim milk solids off melted butter to achieve clarified perfection.", sentenceTr: "Sade yağ elde etmek için eritilmiş tereyağının köpüğünü ve tortusunu süzün." },
      { en: "Sweet syrup", tr: "Tatlı şerbet", quantity: "450 ml", icon: "🍯", sentenceEn: "Add lemon juice to prevent the sugar syrup from crystallizing.", sentenceTr: "Şeker şerbetinin kristalleşmesini veya şekerlenmesini önlemek için limon suyu ekleyin." }
    ]
  },
  {
    title: "Cevizli Baklava",
    briefTitle: "İngilizce Cevizli Baklava Tarifi (Walnut Baklava Recipe)",
    ingredientsHeading: "Cevizli Baklava Tarifinin İngilizce Malzemeleri Nelerdir?",
    stepsHeading: "Cevizli Baklava Pişirme Adımları İngilizce Nasıl Yazılır?",
    english: "Walnut Baklava Recipe",
    description: "Walnut Baklava (Cevizli Baklava); ince yufka katları arasında bol ceviz dolgusu ve dengeli şerbetiyle Türk evlerinin en sevilen geleneksel bayram tatlısıdır.",
    image: "/blog/ingilizce-tarifler/images/baklava-cevizli.webp",
    alt: "Classic walnut baklava pieces cut in diamonds on a brass platter",
    ingredients: [
      ["Phyllo pastry", "Baklavalık yufka", "36 sheets"],
      ["Fresh walnuts", "Taze ceviz içi", "300 g"],
      ["Butter", "Tuzsuz tereyağı", "220 g"],
      ["Sugar", "Şeker", "350 g"],
      ["Water", "Su", "350 ml"],
      ["Lemon slice", "Limon dilimi", "1 slice"]
    ],
    steps: "First, prepare and chill the lemon syrup. Then, layer 18 sheets in a baking pan, brushing each with melted butter. Next, spread crushed walnuts in an even layer. Then, stack the remaining 18 buttered sheets. Finally, cut into diamonds, bake at 175°C for 45 minutes, and ladle cool syrup over the hot pastry.",
    ingredientCards: [
      { en: "Fresh walnuts", tr: "Taze ceviz içi", quantity: "300 g", icon: "🌰", sentenceEn: "Use light-colored fresh walnuts to prevent bitterness.", sentenceTr: "Acılığı önlemek için açık renkli taze ceviz içi kullanın." },
      { en: "Unsalted butter", tr: "Tuzsuz tereyağı", quantity: "220 g", icon: "🧈", sentenceEn: "Always use unsalted butter when preparing delicate sweet pastries.", sentenceTr: "Hassas tatlı hamur işleri hazırlarken daima tuzsuz tereyağı kullanın." },
      { en: "Phyllo pastry", tr: "Yufka katları", quantity: "36 sheets", icon: "📜", sentenceEn: "Trim phyllo sheets to fit your baking pan precisely.", sentenceTr: "Yufkaları fırın tepsinizin ebadına tam uyacak şekilde kesin." },
      { en: "Lemon slice", tr: "Limon dilimi", quantity: "1 slice", icon: "🍋", sentenceEn: "A slice of lemon adds gentle citrus brightness to the sweet syrup.", sentenceTr: "Bir dilim limon tatlı şerbete hafif narenciye ferahlığı katar." }
    ]
  },
  {
    title: "Hazır Yufkadan Baklava",
    briefTitle: "İngilizce Hazır Yufkadan Baklava Tarifi (Baklava with Ready Phyllo Recipe)",
    ingredientsHeading: "Hazır Yufkadan Baklava Tarifinin İngilizce Malzemeleri Nelerdir?",
    stepsHeading: "Hazır Yufkadan Baklava Pişirme Adımları İngilizce Nasıl Yazılır?",
    english: "Baklava with Ready Phyllo Recipe",
    description: "Baklava with Ready Phyllo (Hazır Yufkadan Baklava); marketten alınan hazır baklavalık yufka ile sadece 20 dakikada tepsiye dizilip fırına verilen pratik ev baklavasıdır.",
    image: "/blog/ingilizce-tarifler/images/baklava-hazir-yufka.webp",
    alt: "Crispy homemade baklava prepared using store-bought ready phyllo dough",
    ingredients: [
      ["Ready phyllo dough", "Hazır baklavalık yufka", "1 package (500 g)"],
      ["Butter or ghee", "Eritilmiş tereyağı veya sade yağ", "200 g"],
      ["Chopped nuts", "Dövülmüş ceviz veya fıstık", "250 g"],
      ["Granulated sugar", "Toz şeker", "3 cups (600 g)"],
      ["Water", "Su", "3 cups (600 ml)"],
      ["Lemon juice", "Limon suyu", "1 tbsp"]
    ],
    steps: "First, simmer sugar, water and lemon juice for 12 minutes and cool. Then, layer half of the store-bought phyllo sheets, buttering every two sheets. Next, scatter the chopped nuts across the surface. Cover with the remaining sheets, slice into squares or diamonds, bake at 180°C for 40 minutes, and drench with cold syrup.",
    ingredientCards: [
      { en: "Ready phyllo dough", tr: "Hazır baklavalık yufka", quantity: "500 g", icon: "📜", sentenceEn: "Ready phyllo makes home baklava preparation remarkably quick.", sentenceTr: "Hazır yufka evde baklava yapımını olağanüstü derecede hızlandırır." },
      { en: "Chopped nuts", tr: "Dövülmüş kuruyemiş", quantity: "250 g", icon: "🥜", sentenceEn: "Combine walnuts and pistachios for a mixed nutty flavor.", sentenceTr: "Karışık fındıksı bir tat için ceviz ve Antep fıstığını harmanlayın." },
      { en: "Melted butter", tr: "Eritilmiş tereyağı", quantity: "200 g", icon: "🧈", sentenceEn: "Brush melted butter generously across the top layer before baking.", sentenceTr: "Fırınlamadan önce en üst katmana cömertçe eritilmiş tereyağı sürün." },
      { en: "Lemon juice", tr: "Limon suyu", quantity: "1 tbsp", icon: "🍋", sentenceEn: "Lemon juice balances the intense sweetness of the sugar syrup.", sentenceTr: "Limon suyu şeker şerbetinin yoğun tatlılığını dengeler." }
    ]
  }
];

function renderBaklavaPage() {
  document.title = "İngilizce Baklava Tarifi (Baklava Yapılışı İngilizce) | Konuşarak Öğren";
  setStructuredData({
    "@context": "https://schema.org", "@type": "Recipe",
    name: "İngilizce Baklava Tarifi (Baklava Yapılışı İngilizce)",
    image: ["https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=1600&q=85"],
    author: { "@type": "Organization", name: "Konuşarak Öğren" },
    datePublished: "2026-08-01",
    description: "İngilizce baklava tarifi; malzemeler, şerbet kuralları, pişirme adımları ve Türkçe karşılıkları.",
    prepTime: "PT45M", cookTime: "PT40M", totalTime: "PT85M", recipeYield: "24 dilim",
    recipeCategory: "Tatlı", recipeCuisine: "Türk",
    nutrition: { "@type": "NutritionInformation", calories: "380 calories" },
    recipeIngredient: ["40 phyllo sheets", "300 g walnuts", "250 g clarified butter", "400 g sugar", "400 ml water", "1 tbsp lemon juice"],
    recipeInstructions: [
      { "@type": "HowToStep", position: 1, name: "Prepare the Syrup", text: "Boil 400 g sugar and 400 ml water with 1 tbsp lemon juice for 15 minutes, then cool completely." },
      { "@type": "HowToStep", position: 2, name: "Brush the Baking Tray", text: "Brush a large rectangular baking tray generously with melted clarified butter." },
      { "@type": "HowToStep", position: 3, name: "Layer Half of Phyllo", text: "Layer 20 phyllo sheets in the tray, brushing each individual sheet with melted butter." },
      { "@type": "HowToStep", position: 4, name: "Spread Walnuts", text: "Spread 300 g of crushed walnuts evenly across the layered phyllo surface." },
      { "@type": "HowToStep", position: 5, name: "Layer Remaining Sheets", text: "Layer the remaining 20 phyllo sheets on top, brushing each sheet with butter." },
      { "@type": "HowToStep", position: 6, name: "Cut into Diamonds", text: "Cut the layered pastry diagonally into traditional diamond-shaped pieces with a sharp knife." },
      { "@type": "HowToStep", position: 7, name: "Bake Golden Brown", text: "Bake in a preheated oven at 170°C for 45 minutes until the pastry is deep golden brown." },
      { "@type": "HowToStep", position: 8, name: "Soak with Syrup", text: "Pour the cool syrup immediately over the boiling hot baklava straight out of the oven." }
    ]
  });

  const baklavaSteps = [
    { number: 1, titleEn: "Prepare the Syrup with Sugar, Water and Lemon", titleTr: "Şeker, Su ve Limonla Şerbeti Hazırlayın", sentenceEn: "First, boil 400 g of sugar and 400 ml of water with 1 tablespoon of lemon juice for 15 minutes, then remove from heat and let it cool completely.", sentenceTr: "İlk olarak 400 g şeker ve 400 ml suyu 1 yemek kaşığı limon suyuyla 15 dakika kaynatın, ardından ocaktan alıp tamamen soğumaya bırakın.", actionEn: "Boiling (Kaynatma)", actionTr: "Şerbet kaynatma" },
    { number: 2, titleEn: "Brush the Baking Tray with Melted Butter", titleTr: "Fırın Tepsisini Eritilmiş Tereyağıyla Yağlayın", sentenceEn: "Then, brush a large baking tray generously with melted clarified butter so the pastry does not stick.", sentenceTr: "Ardından hamurun yapışmaması için geniş bir fırın tepsisini eritilmiş sade yağla cömertçe yağlayın.", actionEn: "Brushing (Yağlama)", actionTr: "Tepsi tabanını yağlama" },
    { number: 3, titleEn: "Layer Half of the Phyllo Sheets with Butter", titleTr: "Yufkaların Yarısını Tereyağıyla Katlayın", sentenceEn: "After that, place 20 sheets of phyllo dough one by one into the tray, brushing each individual layer with melted butter.", sentenceTr: "Daha sonra her bir katmanı eritilmiş tereyağıyla yağlayarak 20 adet baklavalık yufkayı tepsiye tek tek dizin.", actionEn: "Layering (Kat Kat Dizme)", actionTr: "Yufka katlama" },
    { number: 4, titleEn: "Spread the Crushed Walnuts Evenly", titleTr: "Dövülmüş Cevizi Eşit Şekilde Yayın", sentenceEn: "Next, spread 300 g of finely crushed walnuts evenly across the entire surface of the layered phyllo sheets.", sentenceTr: "Sonra 300 g ince dövülmüş cevizi katlanmış yufka tabanının tüm yüzeyine eşit biçimde yayın.", actionEn: "Spreading (Eşit Yayma)", actionTr: "İç harcı yayma" },
    { number: 5, titleEn: "Layer the Remaining Sheets on Top", titleTr: "Kalan Yufkaları Üzerine Serin", sentenceEn: "Cover the walnut layer with the remaining 20 sheets of phyllo, brushing each layer with butter as before.", sentenceTr: "Ceviz katmanının üzerini kalan 20 yufkayla kapatın ve daha önce olduğu gibi her katı tereyağıyla yağlayın.", actionEn: "Covering (Üstünü Kapatma)", actionTr: "Üst katmanları dizme" },
    { number: 6, titleEn: "Cut the Baklava into Diamond Shapes", titleTr: "Baklavayı Baklava Dilimi Şeklinde Kesin", sentenceEn: "Using a sharp chef's knife, slice the layered pastry diagonally into traditional diamond or square shapes before baking.", sentenceTr: "Keskin bir mutfak bıçağı kullanarak pişirmeden önce katmanlı tatlıyı geleneksel baklava dilimi veya kare şeklinde kesin.", actionEn: "Slicing (Dilimleme)", actionTr: "Baklava dilimi kesme" },
    { number: 7, titleEn: "Bake the Baklava Until Golden Brown", titleTr: "Baklavayı Altın Rengi Alana Kadar Pişirin", sentenceEn: "Bake in a preheated oven at 170°C for 45 minutes until the pastry is puffed and golden brown.", sentenceTr: "Önceden 170°C ısıtılmış fırında tatlı kabarıp altın rengini alana dek 45 dakika pişirin.", actionEn: "Baking (Fırınlama)", actionTr: "Fırında pişirme" },
    { number: 8, titleEn: "Soak the Hot Baklava with Cold Syrup", titleTr: "Sıcak Baklavayı Soğuk Şerbetle Islatın", sentenceEn: "Finally, pour the cool syrup evenly over the boiling hot baklava straight out of the oven and let it soak for at least 4 hours.", sentenceTr: "Son olarak fırından yeni çıkmış kaynar baklavanın üzerine soğuk şerbeti eşitçe dökün ve en az 4 saat şerbeti çekmeye bırakın.", actionEn: "Soaking (Şerbetleme)", actionTr: "Şerbet dökme" }
  ];

  const baklavaVocab = [
    ["phyllo dough", "baklavalık yufka", "Handle paper-thin phyllo dough gently."],
    ["syrup (sorbet)", "şerbet", "Pour cool syrup over hot pastry."],
    ["clarified butter", "sade yağ (tortusuz tereyağı)", "Clarified butter gives baklava its signature crispness."],
    ["pistachio", "Antep fıstığı", "Sprinkle emerald green pistachios over the dessert."],
    ["walnut", "ceviz", "Spread freshly crushed walnuts evenly."],
    ["layer", "katman veya kat kat dizmek", "Layer forty micro-thin sheets of pastry."],
    ["brush", "fırçayla yağ sürmek", "Brush melted butter across every single sheet."],
    ["soak", "şerbeti emmek veya ıslatmak", "Allow the pastry to soak up the sweet syrup."],
    ["diamond shape", "baklava dilimi kesimi", "Slice the pastry into neat diamond shapes."],
    ["Crispy or Crunchy", "Çıtır veya gevrek", "Baklava must stay crispy, not soggy."]
  ];

  root.innerHTML = `<article class="pasta-guide recipe-guide">
    <div class="reading-progress" aria-hidden="true"><span></span></div>
    <header class="hero">
      <div>
        <p class="eyebrow">DESSERT & SWEET RECIPES (TATLI VE YEMEK TARİFLERİ)</p>
        <h1>İngilizce Baklava Tarifi (Baklava Yapılışı İngilizce)</h1>
        <aside class="course-banner" aria-label="İngilizce kursu">
          <div class="course-banner-text">
            <small class="cta-eyebrow">KONUŞARAK ÖĞREN İNGİLİZCE KURSU</small>
            <strong class="cta-heading">İngilizceyi tarif ezberleyerek değil, konuşarak öğrenin.</strong>
          </div>
          <button class="cta-btn cta-btn-orange" onclick="window.location.href='https://student.konusarakogren.com/auth/register'">Ücretsiz tanışma dersi <span class="arrow">→</span></button>
        </aside>
        <p class="lede"><strong>Turkish Baklava Recipe.</strong> İngilizce baklava tarifi; incecik yufka katlarını (phyllo layers), şerbet (syrup) dökme kurallarını ve emir kipindeki hazırlık adımlarını Türkçe karşılıklarıyla öğreten kapsamlı bir gastronomi ve dil rehberidir.</p>
        <address class="article-meta" rel="author"><span class="author-mark" aria-hidden="true">KO</span><span><strong>Konuşarak Öğren Editör</strong><small>Yayınlanma tarihi: <time datetime="2026-08-01">1 Ağustos 2026</time></small></span></address>
      </div>
      <figure class="hero-visual">
        <img src="/blog/ingilizce-tarifler/images/baklava-hero.webp" alt="Tepside altın sarısı geleneksel ev yapımı baklava dilimleri" loading="eager" fetchpriority="high">
        <figcaption>Homemade Baklava (Ev Yapımı Türk Baklavası)</figcaption>
      </figure>
      ${buildFactsCardHTML({
        prep: { val: "45 mins (45 dk)", en: "Layering and buttering forty phyllo sheets takes 45 minutes.", tr: "Kırk kat yufkayı tek tek yağlayıp dizmek yaklaşık 45 dakika sürer." },
        cook: { val: "40 mins (40 dk)", en: "Baking until golden and crisp takes 40 to 45 minutes.", tr: "Fırında altın sarısı ve çıtır olana dek pişirme 40-45 dakika sürer." },
        servings: { val: "24 slices (24 dilim)", en: "Yields 24 generous diamond-shaped dessert portions.", tr: "24 dilim zengin ve geleneksel tatlı porsiyonu sunar." },
        level: { val: "B1–B2 (Orta-İleri)", en: "Covers pastry terminology, sequence adverbs and culinary techniques.", tr: "Hamur işi terimleri, sıra zarfları ve püf noktalarına odaklanan orta-ileri düzey." }
      })}
      <div class="hero-overview-table" id="definition-variations">
        <p class="eyebrow">OVERVIEW &amp; COMPARISON (TANIM VE ÇEŞİTLER KARŞILAŞTIRMASI)</p>
        <h2 class="definition-heading">English Baklava Recipes: Variations, Fillings and Baking Times (İngilizce Baklava Çeşitleri, İç Harçları ve Pişirme Süreleri)</h2>
        <p class="section-intro"><strong>İngilizce ve Türkçe Baklava Çeşitleri Karşılaştırması</strong>: Aşağıdaki tabloda 4 temel baklava çeşidinin İngilizce isimlerini, iç malzemelerini, yufka katlarını ve fırınlama sürelerini karşılaştırmalı olarak inceleyebilirsiniz.</p>
        ${table(["Baklava Variation (Baklava Çeşidi)", "Main Filling & Fat (Ana Harç ve Yağ Türü)", "Layers & Time (Kat Sayısı ve Süre)", "Calories (Kalori)"], [
          ["Homemade Baklava (Ev Yapımı Baklava)", "Walnuts, clarified butter, sugar syrup (Ceviz, sade yağ, şerbet)", "40 sheets, 45 mins (40 kat, 45 dk)", "380 kcal / 1 piece"],
          ["Pistachio Baklava (Fıstıklı Baklava)", "Gaziantep green pistachios, clarified butter (Boz Antep fıstığı, sade yağ)", "40 sheets, 50 mins (40 kat, 50 dk)", "410 kcal / 1 piece"],
          ["Walnut Baklava (Cevizli Baklava)", "Crushed walnuts, unsalted butter (Dövülmüş ceviz içi, tereyağı)", "36 sheets, 45 mins (36 kat, 45 dk)", "390 kcal / 1 piece"],
          ["Ready Phyllo Baklava (Hazır Yufkadan Baklava)", "Store-bought phyllo, mixed nuts, butter (Hazır baklavalık yufka, ceviz/fıstık, yağ)", "30-40 sheets, 40 mins (30-40 kat, 40 dk)", "370 kcal / 1 piece"]
        ])}
      </div>
    </header>

    <div class="page-grid">
      <nav class="toc" aria-label="İçindekiler">
        <a href="/blog/ingilizce-tarifler/baklava#kavramlar" data-scroll-target="kavramlar">Terms (Kavramlar)</a>
        <a href="/blog/ingilizce-tarifler/baklava#tarifler" data-scroll-target="tarifler">Variations (Tarifler)</a>
        <a href="/blog/ingilizce-tarifler/baklava#adim-adim" data-scroll-target="adim-adim">8 Steps (8 Adım)</a>
        <a href="/blog/ingilizce-tarifler/baklava#malzemeler-ve-ekipman" data-scroll-target="malzemeler-ve-ekipman">Ingredients (Malzemeler)</a>
        <a href="/blog/ingilizce-tarifler/baklava#besin-degerleri" data-scroll-target="besin-degerleri">Nutrition (Besin Değerleri)</a>
        <a href="/blog/ingilizce-tarifler/baklava#puf-noktalari" data-scroll-target="puf-noktalari">Rules (Püf Noktaları)</a>
        <a href="/blog/ingilizce-tarifler/baklava#olculer" data-scroll-target="olculer">Units (Ölçüler)</a>
        <a href="/blog/ingilizce-tarifler/baklava#dil-kurallari" data-scroll-target="dil-kurallari">Grammar (Dil Kuralları)</a>
        <a href="/blog/ingilizce-tarifler/baklava#alistirma" data-scroll-target="alistirma">Quiz (Alıştırma)</a>
      </nav>

      <div class="content">
        <section id="kavramlar">
          <p class="eyebrow">CORE CONCEPTS &amp; VOCABULARY (TEMEL KAVRAMLAR VE SÖZLÜK)</p>
          <h2>İngilizce Baklava Tarifi Kavramları ve Türkçe Karşılıkları</h2>
          <h3>Baklava Kelimesi İngilizce Sözlüklerde: Phyllo, Syrup, Pistachio Terimleri</h3>
          <p class="section-intro">İngilizcede <strong>phyllo pastry</strong> kağıt inceliğindeki özel baklava yufkasını, <strong>clarified butter</strong> suyu ve süt köpüğü ayrıştırılmış saf sade yağı, <strong>sugar syrup</strong> ise limonlu tatlı şerbeti ifade eder.</p>
          ${table(["İngilizce Kavram", "Türkçe Karşılığı", "Kullanım Alanı"], [
            ["Phyllo pastry (veya Filo dough)", "Baklavalık yufka", "Baklavanın katmanlarını oluşturan çok ince hamur"],
            ["Sugar syrup (veya Simple syrup)", "Tatlı şerbet", "Pişen sıcak baklavaya dökülen şekerli ve limonlu sıvı"],
            ["Clarified butter (Ghee)", "Sade yağ", "Yanmayı önleyen, süt proteini ayrılmış saf tereyağı"],
            ["Pistachio", "Antep fıstığı", "Fıstıklı baklavanın zümrüt yeşili zengin iç dolgusu"],
            ["Walnut", "Ceviz", "Geleneksel ev baklavasının klasik iç harcı"],
            ["Diamond cut", "Baklava dilimi kesimi", "Fırınlamadan önce yapılan geleneksel verev kesim"]
          ])}

          <h3>İngilizce Tarif Yazımında Kullanılan Fiiller: Layer, Brush, Bake, Soak</h3>
          ${table(["İngilizce Fiil", "Türkçe Karşılığı", "Örnek Tarif Cümlesi"], [
            ["Layer", "Kat kat dizmek veya sermek", "Layer twenty sheets of phyllo into the pan."],
            ["Brush", "Fırçayla yağ sürmek", "Brush each layer generously with melted butter."],
            ["Spread", "Eşit biçimde yaymak", "Spread crushed walnuts evenly across the surface."],
            ["Bake", "Fırında pişirmek", "Bake in the oven at 170°C for 45 minutes."],
            ["Soak", "Şerbeti çekmek veya ıslatmak", "Pour cold syrup so the hot pastry can soak it up."],
            ["Slice", "Dilimlemek veya kesmek", "Slice into neat diamond shapes before baking."]
          ])}
        </section>

        <div id="tarifler" class="recipe-chapters">
          <div class="chapter-intro">
            <p class="eyebrow">4 BAKLAVA VARIATIONS (4 FARKLI BAKLAVA TARİFİ)</p>
            <p class="section-intro">Her tarifte malzeme listesi, ölçüler, görsel malzeme kartları ve İngilizce yapılış özeti yer alır.</p>
          </div>
          ${baklavaVariants.map((v, i) => `
            <section class="recipe-chapter">
              <div class="chapter-head">
                <span class="variant-number">${String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h2>${v.briefTitle}</h2>
                  <p>${v.description}</p>
                  ${buildChapterMetaHTML({
                    time: { val: "45-50 dakika", en: "Total baking and preparation time.", tr: "Toplam hazırlık ve fırınlama süresi." },
                    servings: { val: "24 dilim", en: "Serves 24 dessert portions.", tr: "24 dilim porsiyon sunar." },
                    count: { val: "${v.ingredients.length} malzeme", en: "Made with authentic ingredients.", tr: "${v.ingredients.length} geleneksel malzeme içerir." }
                  })}
                </div>
              </div>
              <figure>
                <img src="${v.image}" alt="${v.alt}" loading="lazy">
                <figcaption>${v.english}</figcaption>
              </figure>
              <div class="chapter-panels">
                <details class="learning-panel" ${i === 0 ? "open" : ""}>
                  <summary><h3>${v.ingredientsHeading}</h3><span>Malzeme tablosu</span></summary>
                  <div class="panel-body">
                    ${table(["İngilizce malzeme", "Türkçe karşılığı", "Miktar"], v.ingredients)}
                    ${buildIngredientCardsHTML(v.ingredientCards)}
                  </div>
                </details>
                <details class="learning-panel">
                  <summary><h3>${v.stepsHeading}</h3><span>Yöntemi göster</span></summary>
                  <div class="panel-body">
                    <p class="method-note">${v.steps}</p>
                  </div>
                </details>
              </div>
            </section>
          `).join("")}
        </div>

        <section id="adim-adim">
          <div class="steps-heading">
            <p class="eyebrow">FIXED 8 STEPS (SABİT 8 ADIM)</p>
            <h2>Homemade Baklava İngilizce Adım Adım Nasıl Yapılır? (How Do You Make Homemade Baklava Step by Step?)</h2>
            <p class="section-intro">Ev yapımı cevizli baklava 8 temel adımdan oluşur. Mutfak eylemleri (actions) ve emir kipi kalıpları aşağıda detaylandırılmıştır.</p>
            <div class="steps-meta"><span>8 adım</span><span>85 dakika</span><span>B1–B2 seviye</span></div>
          </div>
          ${buildStepAccordionHTML(baklavaSteps)}
          ${table(["Adım No", "İngilizce Talimat", "Türkçe Karşılığı"], baklavaSteps.map((s, i) => [i + 1, s.sentenceEn, s.sentenceTr]))}
        </section>

        <section id="malzemeler-ve-ekipman">
          <p class="eyebrow">ESSENTIAL INGREDIENTS &amp; TOOLS (MALZEMELER VE EKİPMANLAR)</p>
          <h2>Which Ingredients Are Essential for Baklava? (Baklava İçin Hangi Malzemeler Şarttır?)</h2>
          <p class="section-intro">Kusursuz bir baklava için kaliteli taze un veya baklavalık yufka, yanmayan sade yağ, taze kuruyemiş ve kristalleşmeyen berrak şeker şerbeti şarttır.</p>
          ${table(["Malzeme (Ingredient)", "Önemi ve İşlevi", "Kalite Kriteri"], [
            ["Phyllo Sheets (Baklavalık Yufka)", "Kat kat çıtır dokuyu sağlayan temel yapı", "Tül inceliğinde, yırtılmamış ve nemini korumuş olmalıdır"],
            ["Clarified Butter (Sade Yağ)", "Yufkaların kabarmasını ve çıtırlaşmasını sağlar", "Suyu ve süt tortusu tamamen ayrıştırılmış saf tereyağı"],
            ["Walnuts veya Pistachios (Kuruyemiş)", "Tatlıya gövde ve karakteristik lezzet verir", "Yeni mahsul, taze dövülmüş ve acılaşmamış olmalıdır"],
            ["Sugar and Water (Şeker ve Su)", "Şerbetin tatlılık dengesini ve viskozitesini sağlar", "Doğal pancar şekeri ve taze sıkılmış limon suyu kullanılmalıdır"]
          ])}

          <h3>What Equipment Do You Need to Make Baklava? (Baklava Yapmak İçin Hangi Ekipmanlar Gerekir?)</h3>
          ${table(["İngilizce Ekipman", "Türkçe Karşılığı", "Kullanıldığı Aşama"], [
            ["Rectangular baking tray", "Köşeli fırın tepsisi", "Yufkaların kat kat dizilmesi ve fırınlanması"],
            ["Pastry brush", "Yumurta veya yağ sürme fırçası", "Yufkaların arasına tereyağı sürülmesi"],
            ["Sharp chef's knife", "Keskin şef bıçağı", "Baklavanın fırına girmeden önce dilimlenmesi"],
            ["Saucepan", "Sos tenceresi", "Şeker şerbetinin kaynatılması"],
            ["Rolling pin (veya Oklava)", "İnce oklava", "El açması yufkaların inceltilmesi"]
          ])}
        </section>

        <section id="besin-degerleri">
          <p class="eyebrow">CALORIES &amp; NUTRITION (KALORİ VE BESİN DEĞERLERİ)</p>
          <h2>How Many Calories Is 1 Piece of Baklava? (1 Dilim Baklava Kaç Kalori?)</h2>
          <p class="section-intro">Standart bir dilim cevizli baklava (yaklaşık 40–45 g) yaklaşık <strong>160–180 kcal</strong> enerji içerir; porsiyon olarak iki dilim tüketildiğinde enerji değeri <strong>350–380 kcal</strong> bandına ulaşır.</p>
          ${table(["Porsiyon Ölçüsü", "Kalori (Energy)", "Açıklama"], [
            ["1 dilim cevizli baklava (40 g)", "175 kcal", "Tek dilim ortalama değer"],
            ["1 dilim fıstıklı baklava (40 g)", "190 kcal", "Fıstığın doğal yağı nedeniyle biraz daha zengin"],
            ["1 porsiyon (2 dilim, 80 g)", "360 kcal", "Geleneksel tatlı tabağı servisi"]
          ])}

          <h3>What Are the Nutrition Facts of Walnut Baklava? (Cevizli Baklavanın Besin Değerleri Nelerdir?)</h3>
          ${table(["Besin Ögesi (Nutrient)", "100 g Miktar", "1 Dilim (40 g) Miktar"], [
            ["Carbohydrate (Karbonhidrat)", "52 g", "21 g"],
            ["Sugar (Şeker)", "29 g", "12 g"],
            ["Fat (Yağ)", "24 g", "9.6 g"],
            ["Protein (Protein)", "6.8 g", "2.7 g"],
            ["Dietary Fiber (Lif)", "2.4 g", "1.0 g"]
          ])}
          <p class="source-note">Besin değerleri Türk mutfağı cevizli baklava analizlerine ve <a href="https://fdc.nal.usda.gov/" target="_blank" rel="noreferrer">USDA FoodData Central</a> verilerine dayanmaktadır.</p>
        </section>

        <section id="puf-noktalari">
          <p class="eyebrow">CRITICAL PASTRY RULES (ÖNEMLİ PÜF NOKTALARI)</p>
          <h2>Kaç Kat Yufka? Baklava Katmanları İngilizce Nasıl Anlatılır?</h2>
          <p class="section-intro">Geleneksel Türk baklavasında en az <strong>36 ila 40 kat</strong> yufka kullanılır. İngilizce tarif metinlerinde katman anlatımı şöyle yapılır: <em>"A classic Turkish baklava requires at least 40 paper-thin sheets of phyllo dough to create its signature flaky structure." (Klasik bir Türk baklavası, kendine has çıtır katmanlarını oluşturmak için en az 40 tül inceliğinde yufka katı gerektirir.)</em></p>

          <h3>Şerbet (Syrup) Dökme Kuralı: Hot on Cold İngilizce Nasıl Açıklanır?</h3>
          <p class="section-intro">Baklavanın hamurlaşmadan çıtır çıtır kalmasının altın kuralı <strong>sıcak tatlıya soğuk şerbet</strong> (veya ılık tatlıya sıcak şerbet) dökmektir. İngilizce bu kural şöyle ifade edilir: <strong>"Always pour cold syrup over bubbling hot baklava. If both are hot, the pastry will become soggy." (Daima fırından yeni çıkmış kaynar baklavanın üzerine soğuk şerbet dökün. İkisi de sıcak olursa tatlı hamurlaşır.)</strong></p>
        </section>

        <section id="olculer">
          <p class="eyebrow">MEASUREMENT UNITS &amp; VOCABULARY (ÖLÇÜ BİRİMLERİ VE MUTFAK KELİMELERİ)</p>
          <h2>İngilizce Baklava Tariflerinde Kullanılan Ölçü Birimleri Nelerdir?</h2>
          <p class="section-intro">Baklava tariflerinde hassas gramaj tartımı, cup (su bardağı) ve tablespoon (yemek kaşığı) ölçüleri kullanılır.</p>
          <h3>Baklava Tarif Metninde Geçen Temel İngilizce Mutfak Kelimeleri Nelerdir?</h3>
          <div class="vocab vocab-wide">
            ${baklavaVocab.map(v => `<article><h4>${v[0]}</h4><strong>${v[1]}</strong><p>${v[2]}</p></article>`).join("")}
          </div>

          <h3>Tablespoon, Teaspoon, Cup: İngilizce Ölçü Birimlerinin Türkçe Karşılıkları</h3>
          ${table(["İngilizce Ölçü Birimi", "Türkçe Karşılığı", "Metrik Eşdeğeri", "Tarif Cümlesi Örneği"], [
            ["1 cup (c)", "1 su bardağı", "200 g şeker / 240 ml su", "Add 2 cups of sugar to the saucepan."],
            ["1 tablespoon (tbsp)", "1 yemek kaşığı", "15 ml / 15 g", "Add 1 tablespoon of fresh lemon juice."],
            ["1 teaspoon (tsp)", "1 tatlı / çay kaşığı", "5 ml / 5 g", "Add 1 teaspoon of ground cinnamon if desired."]
          ])}

          <h3>Gram ve Litre İngilizce Tariflerde Nasıl Kullanılır?</h3>
          ${table(["Metrik Ölçü", "İngilizce Yazımı", "Kullanım Şekli"], [
            ["300 gram", "300 g / 300 grams", "Weigh 300 g of crushed walnuts."],
            ["250 gram", "250 g of clarified butter", "Melt 250 g of butter gently."],
            ["400 mililitre", "400 ml of water", "Simmer 400 ml of water with sugar."]
          ])}
        </section>

        <section id="dil-kurallari">
          <p class="eyebrow">GRAMMAR RULES (DİL BİLGİSİ VE YAZIM KURALLARI)</p>
          <h2>İngilizce Baklava Tarifi Yazarken Dikkat Edilmesi Gereken Dil Kuralları</h2>
          <p class="section-intro">İngilizce tariflerde doğrudan emir kipi (imperatives) ve adım geçişlerini bağlayan zaman zarfları (sequencing adverbs) esastır.</p>

          <div class="grammar-tabs">
            <div class="tab-list" role="tablist" aria-label="Dil kuralı konuları">
              <button id="baklava-tab-imperative" role="tab" aria-selected="true" aria-controls="baklava-panel-imperative" tabindex="0" data-tab="imperative" class="active"><span>01</span>Emir Kipi (Imperatives)</button>
              <button id="baklava-tab-sequence" role="tab" aria-selected="false" aria-controls="baklava-panel-sequence" tabindex="-1" data-tab="sequence"><span>02</span>Sıra Zarfları (Connectors)</button>
            </div>
            <div class="tab-panels">
              <div id="baklava-panel-imperative" class="tab-panel active" role="tabpanel" aria-labelledby="baklava-tab-imperative">
                <h3>İngilizce Baklava Tarif Metinlerinde Emir Kipi (Imperative) Nasıl Kullanılır?</h3>
                <p class="section-intro">Emir cümleleri özne içermez; doğrudan fiilin yalın haliyle başlar: <strong>Brush each layer, cut into diamond shapes, pour the cool syrup.</strong></p>
                ${table(["İngilizce Emir Cümlesi", "Türkçe Anlamı", "Kullanılan Fiil"], [
                  ["Brush every phyllo sheet with butter.", "Her yufkayı tereyağıyla yağlayın.", "Brush (Fırçayla yağlamak)"],
                  ["Spread the crushed nuts evenly.", "Dövülmüş kuruyemişi eşitçe yayın.", "Spread (Yaymak)"],
                  ["Cut the pastry diagonally.", "Hamuru verev biçimde dilimleyin.", "Cut / Slice (Kesmek)"],
                  ["Do not pour hot syrup on hot baklava.", "Sıcak baklavaya sıcak şerbet dökmeyin.", "Do not pour (Dökmeyin)"]
                ])}
              </div>
              <div id="baklava-panel-sequence" class="tab-panel" role="tabpanel" aria-labelledby="baklava-tab-sequence" hidden>
                <h3>Bağlaçlar ve Sıra Zarfları: First, Then, After That, Finally</h3>
                <p class="section-intro">Adımları kronolojik sıraya koymak için <em>First, Then, After that, Next, Finally</em> zarfları kullanılır.</p>
                <div class="language-card sequence">
                  <small>Örnek Tarif Paragrafı (Example Recipe Paragraph)</small>
                  <p>First, prepare the sugar syrup and let it cool completely. Then, brush each phyllo sheet with clarified butter and layer twenty sheets. After that, spread the walnuts evenly. Next, layer the remaining twenty sheets. Finally, cut into diamonds, bake until golden, and pour the cool syrup over the hot pastry.</p>
                  <p class="translation">Önce şeker şerbetini hazırlayıp tamamen soğumaya bırakın. Ardından her yufkayı sade yağla yağlayarak yirmi kat dizin. Daha sonra cevizleri eşitçe yayın. Sonrasında kalan yirmi katı dizin. Son olarak baklava dilimi kesin, altın sarısı olana dek pişirin ve sıcak tatlının üzerine soğuk şerbeti dökün.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="alistirma">
          <div class="exercise">
            <p class="eyebrow">PRACTICE &amp; QUIZ (KAZANIM KONTROLÜ VE ALIŞTIRMA)</p>
            <h2>8. Sınıf İngilizce Baklava Tarifi Alıştırma ve Quizi</h2>
            <p class="section-intro">Öğrendiğiniz baklava mutfak terimlerini, şerbet kurallarını ve bağlaçları bu interaktif mini test ile test edin.</p>
            <ol>
              <li>
                <span class="quiz-q-num">Soru 1</span>
                <p class="quiz-q-title">What is the golden rule of pouring syrup onto baklava?</p>
                <p class="quiz-q-tr">(Baklavaya şerbet dökmenin altın kuralı nedir?)</p>
                <ul class="quiz-options">
                  <li class="quiz-option" onclick="this.parentElement.querySelectorAll('.quiz-option').forEach(el=>el.classList.remove('selected','correct','wrong')); this.classList.add('correct');">A) Cold syrup over hot baklava ✓</li>
                  <li class="quiz-option" onclick="this.parentElement.querySelectorAll('.quiz-option').forEach(el=>el.classList.remove('selected','correct','wrong')); this.classList.add('wrong');">B) Boiling hot syrup over hot baklava</li>
                  <li class="quiz-option" onclick="this.parentElement.querySelectorAll('.quiz-option').forEach(el=>el.classList.remove('selected','correct','wrong')); this.classList.add('wrong');">C) Cold syrup over cold baklava</li>
                  <li class="quiz-option" onclick="this.parentElement.querySelectorAll('.quiz-option').forEach(el=>el.classList.remove('selected','correct','wrong')); this.classList.add('wrong');">D) Never use lemon in syrup</li>
                </ul>
              </li>
              <li>
                <span class="quiz-q-num">Soru 2</span>
                <p class="quiz-q-title">Which kitchen action means "fırçayla yağ sürmek" in English?</p>
                <p class="quiz-q-tr">("Fırçayla yağ sürmek" anlamına gelen İngilizce mutfak fiili hangisidir?)</p>
                <ul class="quiz-options">
                  <li class="quiz-option" onclick="this.parentElement.querySelectorAll('.quiz-option').forEach(el=>el.classList.remove('selected','correct','wrong')); this.classList.add('wrong');">A) Boil</li>
                  <li class="quiz-option" onclick="this.parentElement.querySelectorAll('.quiz-option').forEach(el=>el.classList.remove('selected','correct','wrong')); this.classList.add('correct');">B) Brush ✓</li>
                  <li class="quiz-option" onclick="this.parentElement.querySelectorAll('.quiz-option').forEach(el=>el.classList.remove('selected','correct','wrong')); this.classList.add('wrong');">C) Drain</li>
                  <li class="quiz-option" onclick="this.parentElement.querySelectorAll('.quiz-option').forEach(el=>el.classList.remove('selected','correct','wrong')); this.classList.add('wrong');">D) Sift</li>
                </ul>
              </li>
              <li>
                <span class="quiz-q-num">Soru 3</span>
                <p class="quiz-q-title">What does "phyllo pastry" mean in Turkish?</p>
                <p class="quiz-q-tr">("Phyllo pastry" teriminin Türkçe karşılığı nedir?)</p>
                <ul class="quiz-options">
                  <li class="quiz-option" onclick="this.parentElement.querySelectorAll('.quiz-option').forEach(el=>el.classList.remove('selected','correct','wrong')); this.classList.add('wrong');">A) Ekmek hamuru</li>
                  <li class="quiz-option" onclick="this.parentElement.querySelectorAll('.quiz-option').forEach(el=>el.classList.remove('selected','correct','wrong')); this.classList.add('correct');">B) Baklavalık yufka ✓</li>
                  <li class="quiz-option" onclick="this.parentElement.querySelectorAll('.quiz-option').forEach(el=>el.classList.remove('selected','correct','wrong')); this.classList.add('wrong');">C) Kabartma tozu</li>
                  <li class="quiz-option" onclick="this.parentElement.querySelectorAll('.quiz-option').forEach(el=>el.classList.remove('selected','correct','wrong')); this.classList.add('wrong');">D) Mayalı çörek</li>
                </ul>
              </li>
              <li>
                <span class="quiz-q-num">Soru 4</span>
                <p class="quiz-q-title">Which sentence correctly instructs someone to cut baklava?</p>
                <p class="quiz-q-tr">(Baklavayı dilimlemeyi doğru şekilde tarif eden emir cümlesi hangisidir?)</p>
                <ul class="quiz-options">
                  <li class="quiz-option" onclick="this.parentElement.querySelectorAll('.quiz-option').forEach(el=>el.classList.remove('selected','correct','wrong')); this.classList.add('wrong');">A) You are cutting into diamond shapes.</li>
                  <li class="quiz-option" onclick="this.parentElement.querySelectorAll('.quiz-option').forEach(el=>el.classList.remove('selected','correct','wrong')); this.classList.add('correct');">B) Cut the baklava into diamond shapes. ✓</li>
                  <li class="quiz-option" onclick="this.parentElement.querySelectorAll('.quiz-option').forEach(el=>el.classList.remove('selected','correct','wrong')); this.classList.add('wrong');">C) Cutting diamonds is fun.</li>
                  <li class="quiz-option" onclick="this.parentElement.querySelectorAll('.quiz-option').forEach(el=>el.classList.remove('selected','correct','wrong')); this.classList.add('wrong');">D) Diamond shapes are cut by us.</li>
                </ul>
              </li>
            </ol>
            <details class="answer-key">
              <summary>Cevap Anahtarını Göster</summary>
              <div class="key-content">
                <ol>
                  <li><strong>Soru 1: A) Cold syrup over hot baklava</strong> — <em>Baklavanın çıtırlığını koruması için şerbet daima tamamen soğuk, tatlı ise fırından yeni çıkmış kaynar sıcaklıkta olmalıdır.</em></li>
                  <li><strong>Soru 2: B) Brush</strong> — <em>Yufkaların arasına fırçayla eritilmiş tereyağı sürme işlemi İngilizcede "brush" fiili ile ifade edilir.</em></li>
                  <li><strong>Soru 3: B) Baklavalık yufka</strong> — <em>Phyllo (veya filo), baklava ve börek yapımında kullanılan kağıt inceliğindeki yufkadır.</em></li>
                  <li><strong>Soru 4: B) Cut the baklava into diamond shapes.</strong> — <em>İngilizce tariflerde talimatlar öznesiz ve fiilin yalın haliyle başlayan emir kipi (imperative) ile yazılır.</em></li>
                </ol>
              </div>
            </details>
          </div>
        </section>

        ${getMidPageCTAHTML()}
        ${getRelatedRecipesHTML("baklava")}
      </div>
    </div>
  </article>`;

  // Attach grammar tabs interactivity
  const tabButtons = root.querySelectorAll(".grammar-tabs button[role='tab']");
  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("aria-controls");
      tabButtons.forEach(b => {
        b.setAttribute("aria-selected", "false");
        b.classList.remove("active");
        b.tabIndex = -1;
      });
      btn.setAttribute("aria-selected", "true");
      btn.classList.add("active");
      btn.tabIndex = 0;
      root.querySelectorAll(".grammar-tabs .tab-panel").forEach(p => {
        p.hidden = p.id !== targetId;
        p.classList.toggle("active", p.id === targetId);
      });
    });
  });
}


const smoothieVariants = [
  {
    title: "Muzlu Smoothie",
    briefTitle: "İngilizce Muzlu Smoothie Tarifi (Banana Smoothie Recipe)",
    ingredientsHeading: "Muzlu Smoothie Tarifinin İngilizce Malzemeleri Nelerdir?",
    stepsHeading: "Muzlu Smoothie Pişirme Adımları İngilizce Nasıl Yazılır?",
    english: "Banana Smoothie Recipe",
    description: "Banana Smoothie (Muzlu Smoothie); muzun süt, yoğurt ve balla blenderda homojen ve kremsi olana dek çekilmesiyle hazırlanan besleyici bir kahvaltılık içecektir.",
    image: "/blog/ingilizce-tarifler/images/smoothie-hero.webp",
    alt: "A tall glass of creamy banana smoothie garnished with fresh banana slices",
    ingredients: [
      ["Bananas", "Olgun muz", "2 medium"],
      ["Milk", "Soğuk süt veya bitkisel süt", "1 cup (240 ml)"],
      ["Yogurt", "Süzme yoğurt", "½ cup (120 g)"],
      ["Honey", "Bal", "1 tbsp (15 ml)"],
      ["Ice cubes", "Buz küpü", "4-5 cubes"]
    ],
    steps: "First, peel and slice 2 ripe bananas into rounds. Then, add milk, yogurt, honey and ice cubes to the blender jar. After that, blend on high speed for 45 seconds until velvety smooth. Finally, pour into a chilled glass and serve immediately.",
    ingredientCards: [
      { en: "Ripe bananas", tr: "Olgun muz", quantity: "2 pieces", icon: "🍌", sentenceEn: "Ripe bananas provide natural sweetness and thick creaminess.", sentenceTr: "Olgun muzlar doğal tatlılık ve yoğun bir kremamsılık kazandırır." },
      { en: "Cold milk", tr: "Soğuk süt", quantity: "1 cup", icon: "🥛", sentenceEn: "Cold whole milk or oat milk blends the ingredients effortlessly.", sentenceTr: "Soğuk tam yağlı süt veya yulaf sütü malzemeleri kolayca karıştırır." },
      { en: "Greek yogurt", tr: "Süzme yoğurt", quantity: "½ cup", icon: "🥣", sentenceEn: "Thick yogurt adds protein and a delightful, subtle tang.", sentenceTr: "Koyu kıvamlı yoğurt protein ve hoş, hafif bir mayhoşluk katar." },
      { en: "Natural honey", tr: "Doğal bal", quantity: "1 tbsp", icon: "🍯", sentenceEn: "Honey imparts gentle floral sweetness without refined sugar.", sentenceTr: "Bal, rafine şeker içermeden zarif çiçeksi bir tatlılık sağlar." }
    ]
  },
  {
    title: "Çilekli Smoothie",
    briefTitle: "İngilizce Çilekli Smoothie Tarifi (Strawberry Smoothie Recipe)",
    ingredientsHeading: "Çilekli Smoothie Tarifinin İngilizce Malzemeleri Nelerdir?",
    stepsHeading: "Çilekli Smoothie Pişirme Adımları İngilizce Nasıl Yazılır?",
    english: "Strawberry Smoothie Recipe",
    description: "Strawberry Smoothie (Çilekli Smoothie); taze veya dondurulmuş çileklerin badem sütü ve chia tohumuyla buluştuğu pembe, canlı ve ferahlatıcı bir yaz içeceğidir.",
    image: "/blog/ingilizce-tarifler/images/smoothie-cilekli.webp",
    alt: "Vibrant pink strawberry smoothie in a mason jar with a straw",
    ingredients: [
      ["Strawberries", "Taze veya dondurulmuş çilek", "200 g (1.5 cups)"],
      ["Almond milk", "Badem sütü", "1 cup (240 ml)"],
      ["Greek yogurt", "Yoğurt", "½ cup (120 g)"],
      ["Chia seeds", "Chia tohumu", "1 tsp"],
      ["Maple syrup veya honey", "Akçaağaç şurubu veya bal", "1 tbsp"]
    ],
    steps: "First, wash, hull and slice fresh strawberries. Then, put sliced strawberries, almond milk, yogurt and chia seeds into the blender. Next, blend on high for 50 seconds until completely smooth. Finally, garnish with a whole strawberry and enjoy cold.",
    ingredientCards: [
      { en: "Strawberries", tr: "Taze çilek", quantity: "200 g", icon: "🍓", sentenceEn: "Strawberries impart vibrant pink color and bright berry aroma.", sentenceTr: "Çilekler canlı pembe bir renk ve ferah kırmızı meyve aroması verir." },
      { en: "Almond milk", tr: "Badem sütü", quantity: "1 cup", icon: "🥛", sentenceEn: "Unsweetened almond milk keeps the drink light and refreshing.", sentenceTr: "Şekersiz badem sütü içeceği hafif ve ferahlatıcı tutar." },
      { en: "Chia seeds", tr: "Chia tohumu", quantity: "1 tsp", icon: "🌱", sentenceEn: "Chia seeds add healthy omega-3 fats and natural thickening.", sentenceTr: "Chia tohumu sağlıklı omega-3 yağları ve doğal kıvam artışı sağlar." },
      { en: "Honey or syrup", tr: "Bal veya şurup", quantity: "1 tbsp", icon: "🍯", sentenceEn: "Drizzle honey to balance the natural tartness of strawberries.", sentenceTr: "Çileğin doğal mayhoşluğunu dengelemek için bal gezdirin." }
    ]
  },
  {
    title: "Yeşil Smoothie",
    briefTitle: "İngilizce Yeşil Smoothie Tarifi (Green Smoothie Recipe)",
    ingredientsHeading: "Yeşil Smoothie Tarifinin İngilizce Malzemeleri Nelerdir?",
    stepsHeading: "Yeşil Smoothie Pişirme Adımları İngilizce Nasıl Yazılır?",
    english: "Green Smoothie Recipe",
    description: "Green Smoothie (Yeşil Smoothie); taze bebek ıspanak, yeşil elma, salatalık ve limon suyuyla hazırlanan lif ve vitamin zengini alkali bir detoks içeceğidir.",
    image: "/blog/ingilizce-tarifler/images/smoothie-yesil.webp",
    alt: "Bright green detox smoothie with cucumber slices and fresh spinach leaves",
    ingredients: [
      ["Baby spinach", "Taze bebek ıspanak", "2 cups packed (60 g)"],
      ["Green apple", "Ekşi yeşil elma (Granny Smith)", "1 medium"],
      ["Cucumber", "Salatalık", "½ medium"],
      ["Water veya coconut water", "Su veya Hindistan cevizi suyu", "1 cup (240 ml)"],
      ["Lemon juice", "Taze limon suyu", "1 tbsp"]
    ],
    steps: "First, blend the baby spinach and coconut water together for 30 seconds to break down the greens. Then, add chopped green apple, cucumber and lemon juice. Next, blend on high speed for 1 minute until silky smooth with no leaf fragments. Finally, pour into a tall glass and drink fresh.",
    ingredientCards: [
      { en: "Baby spinach", tr: "Bebek ıspanak", quantity: "2 cups", icon: "🥬", sentenceEn: "Baby spinach has a mild taste that disappears into sweet fruit flavors.", sentenceTr: "Bebek ıspanak tatlı meyve tatları arasında kaybolan hafif bir lezzete sahiptir." },
      { en: "Green apple", tr: "Yeşil elma", quantity: "1 piece", icon: "🍏", sentenceEn: "Crisp green apple adds refreshing tartness and cleansing fiber.", sentenceTr: "Çıtır yeşil elma ferahlatıcı mayhoşluk ve arındırıcı lif kazandırır." },
      { en: "Cucumber", tr: "Salatalık", quantity: "½ piece", icon: "🥒", sentenceEn: "Hydrating cucumber gives the smoothie clean, cool crispness.", sentenceTr: "Su zengini salatalık smoothieye tertemiz ve serin bir tazelik verir." },
      { en: "Lemon juice", tr: "Limon suyu", quantity: "1 tbsp", icon: "🍋", sentenceEn: "Lemon juice prevents browning and brightens all green notes.", sentenceTr: "Limon suyu kararmayı önler ve tüm yeşil notaları canlandırır." }
    ]
  },
  {
    title: "Proteinli Smoothie",
    briefTitle: "İngilizce Proteinli Smoothie Tarifi (Protein Smoothie Recipe)",
    ingredientsHeading: "Proteinli Smoothie Tarifinin İngilizce Malzemeleri Nelerdir?",
    stepsHeading: "Proteinli Smoothie Pişirme Adımları İngilizce Nasıl Yazılır?",
    english: "Protein Smoothie Recipe",
    description: "Protein Smoothie (Proteinli Smoothie); spor öncesi veya sonrası kas onarımını desteklemek için fıstık ezmesi, protein tozu, muz ve yulaf sütüyle hazırlanan yüksek enerjili bir karışımdır.",
    image: "/blog/ingilizce-tarifler/images/smoothie-protein.webp",
    alt: "Thick post-workout protein smoothie topped with chia and peanut butter drizzle",
    ingredients: [
      ["Whey or plant protein powder", "Protein tozu (vanilyalı veya çikolatalı)", "1 scoop (30 g)"],
      ["Peanut butter", "Doğal fıstık ezmesi", "1.5 tbsp (25 g)"],
      ["Banana", "Muz", "1 frozen banana"],
      ["Oat milk", "Yulaf sütü", "1.5 cups (350 ml)"],
      ["Rolled oats", "Yulaf ezmesi", "2 tbsp (20 g)"]
    ],
    steps: "First, pour the oat milk into the blender first to prevent powder from sticking to the blades. Then, add protein powder, peanut butter, rolled oats and frozen banana chunks. Next, blend on medium-high speed for 60 seconds until thick and velvety. Finally, pour into a shaker cup and consume within 30 minutes after your workout.",
    ingredientCards: [
      { en: "Protein powder", tr: "Protein tozu", quantity: "1 scoop", icon: "🏋️", sentenceEn: "Whey or plant-based protein helps rebuild and repair muscle tissue.", sentenceTr: "Peynir altı suyu veya bitkisel protein kas dokusunu onarmaya yardımcı olur." },
      { en: "Peanut butter", tr: "Fıstık ezmesi", quantity: "1.5 tbsp", icon: "🥜", sentenceEn: "Natural peanut butter adds healthy fats and a satisfying nutty body.", sentenceTr: "Doğal fıstık ezmesi sağlıklı yağlar ve doyurucu fındıksı gövde sağlar." },
      { en: "Oat milk", tr: "Yulaf sütü", quantity: "1.5 cups", icon: "🥛", sentenceEn: "Creamy oat milk creates a dairy-free, silky beverage foundation.", sentenceTr: "Kremamsı yulaf sütü sütsüz, ipeksi bir içecek bazı oluşturur." },
      { en: "Rolled oats", tr: "Yulaf ezmesi", quantity: "2 tbsp", icon: "🌾", sentenceEn: "Oats release slow-burning complex carbohydrates for lasting stamina.", sentenceTr: "Yulaf kalıcı dayanıklılık için yavaş sindirilen kompleks karbonhidrat sağlar." }
    ]
  }
];

function renderSmoothiePage() {
  document.title = "İngilizce Smoothie Tarifi (Smoothie Yapılışı İngilizce) | Konuşarak Öğren";
  setStructuredData({
    "@context": "https://schema.org", "@type": "Recipe",
    name: "İngilizce Smoothie Tarifi (Smoothie Yapılışı İngilizce)",
    image: ["https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=1600&q=85"],
    author: { "@type": "Organization", name: "Konuşarak Öğren" },
    datePublished: "2026-08-01",
    description: "İngilizce muzlu smoothie tarifi; malzemeler, blender ayarları, besin değerleri ve Türkçe karşılıkları.",
    prepTime: "PT5M", cookTime: "PT0M", totalTime: "PT5M", recipeYield: "2 bardak",
    recipeCategory: "İçecek", recipeCuisine: "Uluslararası",
    nutrition: { "@type": "NutritionInformation", calories: "210 calories" },
    recipeIngredient: ["2 ripe bananas", "1 cup cold milk", "½ cup yogurt", "1 tbsp honey", "4 ice cubes"],
    recipeInstructions: [
      { "@type": "HowToStep", position: 1, name: "Peel and Slice", text: "Peel 2 bananas and slice them into thick rounds." },
      { "@type": "HowToStep", position: 2, name: "Add to Blender", text: "Add the milk, yogurt, honey and ice cubes into the blender jar." },
      { "@type": "HowToStep", position: 3, name: "Blend Until Smooth", text: "Blend the mixture on high speed for 45 seconds until completely smooth." },
      { "@type": "HowToStep", position: 4, name: "Pour and Serve", text: "Pour the smoothie into glasses and serve chilled immediately." }
    ]
  });

  const smoothieSteps = [
    { number: 1, titleEn: "Peel and Slice 2 Bananas", titleTr: "2 Muzu Soyun ve Dilimleyin", sentenceEn: "First, peel 2 ripe bananas with your hands and slice them into thick rounds with a kitchen knife.", sentenceTr: "İlk olarak 2 olgun muzu elinizle soyun ve bir mutfak bıçağıyla kalın halkalar halinde dilimleyin.", actionEn: "Peeling & Slicing (Soyma ve Dilimleme)", actionTr: "Meyve hazırlığı" },
    { number: 2, titleEn: "Add the Milk, Yogurt and Honey to the Blender", titleTr: "Sütü, Yoğurdu ve Balı Blendera Ekleyin", sentenceEn: "Then, pour 1 cup of cold milk into the blender jar first, followed by ½ cup of yogurt, sliced bananas and 1 tablespoon of natural honey.", sentenceTr: "Ardından blender haznesine önce 1 su bardağı soğuk sütü dökün, ardından ½ su bardağı yoğurdu, dilimlenmiş muzları ve 1 yemek kaşığı doğal balı ekleyin.", actionEn: "Adding (Malzemeleri Hazneye Ekleme)", actionTr: "Sıvı ve katıları ekleme" },
    { number: 3, titleEn: "Blend the Mixture Until Smooth", titleTr: "Karışımı Pürüzsüz Olana Kadar Çekin", sentenceEn: "After that, secure the lid and blend the ingredients on high speed for 45 to 60 seconds until completely creamy and velvety smooth.", sentenceTr: "Daha sonra kapağı sıkıca kapatın ve malzemeleri tamamen kremamsı ve ipeksi bir kıvama gelene kadar yüksek hızda 45-60 saniye çekin.", actionEn: "Blending (Blenderda Çekme)", actionTr: "Yüksek hızda püre yapma" },
    { number: 4, titleEn: "Pour the Smoothie into a Glass and Serve", titleTr: "Smoothie'yi Bardağa Dökün ve Servis Edin", sentenceEn: "Finally, pour the fresh smoothie into 2 chilled drinking glasses, garnish with a fresh mint leaf or banana slice, and serve immediately.", sentenceTr: "Son olarak taze smoothieyi 2 soğuk bardağa dökün, taze nane yaprağı veya muz dilimiyle süsleyip bekletmeden servis edin.", actionEn: "Pouring & Serving (Dökme ve Servis)", actionTr: "Bardağa aktarma" }
  ];

  const smoothieVocab = [
    ["smoothie", "meyveli soğuk içecek", "A fresh fruit smoothie is full of vitamins."],
    ["milkshake", "dondurmalı sütlü içecek", "Milkshakes use ice cream, while smoothies use yogurt or fruit."],
    ["peel", "kabuğunu soymak", "Peel the bananas before placing them in the blender."],
    ["slice", "dilimlemek", "Slice the fresh strawberries into halves."],
    ["blend", "blenderda homojen çekmek", "Blend on high speed until completely smooth."],
    ["puree", "püre haline getirmek", "Puree leafy greens with cold water first."],
    ["pour", "bardağa dökmek", "Pour the chilled smoothie into tall glasses."],
    ["garnish", "süslemek", "Garnish with chia seeds or fresh berries."],
    ["pulse", "aralıklı çalıştırmak", "Pulse the blender a few times to crush ice cubes."],
    ["thick & creamy", "yoğun ve kremamsı", "Frozen fruit gives a thick, creamy consistency."]
  ];

  root.innerHTML = `<article class="pasta-guide recipe-guide">
    <div class="reading-progress" aria-hidden="true"><span></span></div>
    <header class="hero">
      <div>
        <p class="eyebrow">DRINK & BEVERAGE RECIPES (İÇECEK TARİFLERİ)</p>
        <h1>İngilizce Smoothie Tarifi (Smoothie Yapılışı İngilizce)</h1>
        <aside class="course-banner" aria-label="İngilizce kursu">
          <div class="course-banner-text">
            <small class="cta-eyebrow">KONUŞARAK ÖĞREN İNGİLİZCE KURSU</small>
            <strong class="cta-heading">İngilizceyi tarif ezberleyerek değil, konuşarak öğrenin.</strong>
          </div>
          <button class="cta-btn cta-btn-orange" onclick="window.location.href='https://student.konusarakogren.com/auth/register'">Ücretsiz tanışma dersi <span class="arrow">→</span></button>
        </aside>
        <p class="lede"><strong>Banana Smoothie Recipe.</strong> İngilizce smoothie tarifi; taze meyveleri, blender ayarlarını, sıvı–meyve dengesini ve emir kipindeki hazırlama adımlarını Türkçe karşılıklarıyla öğreten modern ve enerjik bir İngilizce içecek rehberidir.</p>
        <address class="article-meta" rel="author"><span class="author-mark" aria-hidden="true">KO</span><span><strong>Konuşarak Öğren Editör</strong><small>Yayınlanma tarihi: <time datetime="2026-08-01">1 Ağustos 2026</time></small></span></address>
      </div>
      <figure class="hero-visual">
        <img src="/blog/ingilizce-tarifler/images/smoothie-hero.webp" alt="Cam bardakta servis edilen taze kremamsı muzlu smoothie" loading="eager" fetchpriority="high">
        <figcaption>Banana Smoothie (Muzlu Smoothie)</figcaption>
      </figure>
      ${buildFactsCardHTML({
        prep: { val: "5 mins (5 dk)", en: "Peeling, slicing fruit and measuring liquids takes 5 minutes.", tr: "Meyve soyma, dilimleme ve sıvıları ölçme yaklaşık 5 dakika sürer." },
        cook: { val: "0 mins (0 dk)", en: "No stove or baking needed; made entirely in a blender.", tr: "Ocak veya fırın gerekmez; tamamen blenderda hazırlanır." },
        servings: { val: "2 glasses (2 bardak)", en: "Yields 2 large refreshing drinking glasses.", tr: "2 büyük ferahlatıcı servis bardağı sunar." },
        level: { val: "A1–A2 (Temel Seviye)", en: "Focuses on daily action verbs, kitchen equipment and fruit terms.", tr: "Günlük eylem fiilleri, mutfak aletleri ve meyve terimlerine odaklanan temel seviye." }
      })}
      <div class="hero-overview-table" id="definition-variations">
        <p class="eyebrow">OVERVIEW &amp; COMPARISON (TANIM VE ÇEŞİTLER KARŞILAŞTIRMASI)</p>
        <h2 class="definition-heading">English Smoothie Recipes: Variations, Ingredients and Nutrient Profiles (İngilizce Smoothie Çeşitleri, Malzemeleri ve Besin Profilleri)</h2>
        <p class="section-intro"><strong>İngilizce ve Türkçe Smoothie Çeşitleri Karşılaştırması</strong>: Aşağıdaki tabloda 4 popüler smoothie çeşidinin İngilizce isimlerini, sıvı ve meyve bileşenlerini ve enerji değerlerini inceleyebilirsiniz.</p>
        ${table(["Smoothie Variation (Çeşit)", "Key Ingredients (Temel Malzemeler)", "Function & Best Time (İşlev ve Tüketim Zamanı)", "Calories (Kalori)"], [
          ["Banana Smoothie (Muzlu Smoothie)", "Bananas, milk, yogurt, honey (Muz, süt, yoğurt, bal)", "Energy breakfast (Kahvaltı ve enerji)", "210 kcal / glass"],
          ["Strawberry Smoothie (Çilekli Smoothie)", "Strawberries, almond milk, chia (Çilek, badem sütü, chia)", "Refreshing snack (Serinletici ara öğün)", "185 kcal / glass"],
          ["Green Smoothie (Yeşil Smoothie)", "Spinach, green apple, cucumber, lemon (Ispanak, elma, salatalık, limon)", "Detox & wellness (Detoks ve zindelik)", "140 kcal / glass"],
          ["Protein Smoothie (Proteinli Smoothie)", "Protein powder, peanut butter, oat milk (Protein tozu, fıstık ezmesi, yulaf sütü)", "Post-workout recovery (Antrenman sonrası)", "320 kcal / glass"]
        ])}
      </div>
    </header>

    <div class="page-grid">
      <nav class="toc" aria-label="İçindekiler">
        <a href="/blog/ingilizce-tarifler/smoothie#kavramlar" data-scroll-target="kavramlar">Terms (Kavramlar)</a>
        <a href="/blog/ingilizce-tarifler/smoothie#tarifler" data-scroll-target="tarifler">Variations (Tarifler)</a>
        <a href="/blog/ingilizce-tarifler/smoothie#adim-adim" data-scroll-target="adim-adim">4 Steps (4 Adım)</a>
        <a href="/blog/ingilizce-tarifler/smoothie#malzemeler-ve-ekipman" data-scroll-target="malzemeler-ve-ekipman">Ingredients (Malzemeler)</a>
        <a href="/blog/ingilizce-tarifler/smoothie#besin-degerleri" data-scroll-target="besin-degerleri">Nutrition (Besin Değerleri)</a>
        <a href="/blog/ingilizce-tarifler/smoothie#puf-noktalari" data-scroll-target="puf-noktalari">Tips (İpuçları)</a>
        <a href="/blog/ingilizce-tarifler/smoothie#olculer" data-scroll-target="olculer">Units (Ölçüler)</a>
        <a href="/blog/ingilizce-tarifler/smoothie#dil-kurallari" data-scroll-target="dil-kurallari">Grammar (Dil Kuralları)</a>
        <a href="/blog/ingilizce-tarifler/smoothie#alistirma" data-scroll-target="alistirma">Quiz (Alıştırma)</a>
      </nav>

      <div class="content">
        <section id="kavramlar">
          <p class="eyebrow">CORE CONCEPTS &amp; VOCABULARY (TEMEL KAVRAMLAR VE SÖZLÜK)</p>
          <h2>Smoothie Tarifinin İngilizce Terim Sözlüğü: Temel Kavramlar</h2>
          <h3>Smoothie mi Shake mi? İçerik Farkı İngilizce Nasıl Anlatılır?</h3>
          <p class="section-intro">İngilizcede <strong>smoothie</strong> meyve, sebze, yoğurt ve süt/su karışımıyla yapılan sağlıklı ve posalı içecekleri anlatırken; <strong>milkshake</strong> ise dondurma, süt ve aromatik şuruplarla hazırlanan tatlı bir süt tatlısıdır. <em>"A smoothie focuses on fruit, greens and yogurt, whereas a milkshake is made with ice cream and milk."</em></p>
          ${table(["İngilizce Kavram", "Türkçe Karşılığı", "Temel Ayrım"], [
            ["Smoothie", "Meyveli / Sebzeli Püre İçecek", "Meyve, yoğurt ve sağlıklı sıvılarla hazırlanır; lif oranı yüksektir"],
            ["Milkshake", "Dondurmalı Sütlü İçecek", "Süt ve dondurma bazlıdır; tatlı ve kalorili bir içecektir"],
            ["Green smoothie", "Yeşil detoks içeceği", "Ispanak veya karalahana gibi taze yeşilliklerle meyvelerin karışımıdır"],
            ["Slushie", "Kırılmış buzlu meyve içeceği", "Yoğurt veya süt içermeyen, tamamen buz ve meyve suyu bazlı içecektir"]
          ])}

          <h3>İngilizce Tarif Yazımında Kullanılan Fiiller: Peel, Slice, Blend, Serve</h3>
          ${table(["İngilizce Fiil", "Türkçe Karşılığı", "Örnek Cümle"], [
            ["Peel", "Kabuğunu soymak", "Peel 2 bananas before adding them to the pitcher."],
            ["Slice", "Dilimlemek", "Slice the fresh fruit into smaller pieces for easy blending."],
            ["Blend", "Blenderda homojen çekmek", "Blend on high speed for 45 seconds until smooth."],
            ["Pour", "Bardağa dökmek", "Pour the cold drink into glasses and serve right away."],
            ["Puree", "Püre yapmak", "Puree the ingredients until completely velvety."]
          ])}
        </section>

        <div id="tarifler" class="recipe-chapters">
          <div class="chapter-intro">
            <p class="eyebrow">4 SMOOTHIE VARIATIONS (4 FARKLI SMOOTHIE ÇEŞİDİ)</p>
            <p class="section-intro">Her tarifte malzeme listesi, ölçüler, görsel malzeme kartları ve İngilizce yapılış özeti yer alır.</p>
          </div>
          ${smoothieVariants.map((v, i) => `
            <section class="recipe-chapter">
              <div class="chapter-head">
                <span class="variant-number">${String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h2>${v.briefTitle}</h2>
                  <p>${v.description}</p>
                  ${buildChapterMetaHTML({
                    time: { val: "5 dakika", en: "Total blending and prep time.", tr: "Toplam hazırlık ve blender süresi." },
                    servings: { val: "2 bardak", en: "Yields 2 refreshing glasses.", tr: "2 bardak porsiyon sunar." },
                    count: { val: "${v.ingredients.length} malzeme", en: "Simple and nutritious ingredients.", tr: "${v.ingredients.length} doğal malzeme içerir." }
                  })}
                </div>
              </div>
              <figure>
                <img src="${v.image}" alt="${v.alt}" loading="lazy">
                <figcaption>${v.english}</figcaption>
              </figure>
              <div class="chapter-panels">
                <details class="learning-panel" ${i === 0 ? "open" : ""}>
                  <summary><h3>${v.ingredientsHeading}</h3><span>Malzeme tablosu</span></summary>
                  <div class="panel-body">
                    ${table(["İngilizce malzeme", "Türkçe karşılığı", "Miktar"], v.ingredients)}
                    ${buildIngredientCardsHTML(v.ingredientCards)}
                  </div>
                </details>
                <details class="learning-panel">
                  <summary><h3>${v.stepsHeading}</h3><span>Yöntemi göster</span></summary>
                  <div class="panel-body">
                    <p class="method-note">${v.steps}</p>
                  </div>
                </details>
              </div>
            </section>
          `).join("")}
        </div>

        <section id="adim-adim">
          <div class="steps-heading">
            <p class="eyebrow">FIXED 4 STEPS (SABİT 4 ADIM)</p>
            <h2>Banana Smoothie İngilizce Adım Adım Nasıl Yapılır? (How Do You Make Banana Smoothie Step by Step?)</h2>
            <p class="section-intro">Klasik muzlu smoothie 4 pratik adımdan oluşur ve yaklaşık 5 dakikada hazırlanır.</p>
            <div class="steps-meta"><span>4 adım</span><span>5 dakika</span><span>A1–A2 seviye</span></div>
          </div>
          ${buildStepAccordionHTML(smoothieSteps)}
          ${table(["Adım No", "İngilizce Talimat", "Türkçe Karşılığı"], smoothieSteps.map((s, i) => [i + 1, s.sentenceEn, s.sentenceTr]))}
        </section>

        <section id="malzemeler-ve-ekipman">
          <p class="eyebrow">FRUITS, LIQUIDS &amp; TOOLS (MEYVELER, SIVILAR VE EKİPMANLAR)</p>
          <h2>Which Fruits and Liquids Go into a Smoothie? (Smoothie'ye Hangi Meyveler ve Sıvılar Girer?)</h2>
          <p class="section-intro">İdeal bir smoothie; taban meyvesi, lezzet meyvesi, sıvı ve protein/lif kaynağının dengeli birleşiminden oluşur.</p>
          ${table(["Bileşen Grubu", "İngilizce Örnekler", "Türkçe Karşılıkları", "İşlevi"], [
            ["Base Fruit (Taban)", "Bananas, mango, avocado", "Muz, mango, avokado", "İçeceğe kıvam, gövde ve kadifemsi pürüzsüzlük katar"],
            ["Flavor Fruit (Aroma)", "Strawberries, blueberries, peaches", "Çilek, yaban mersini, şeftali", "Canlı renk, antioksidan ve mayhoş lezzet katar"],
            ["Liquids (Sıvılar)", "Cow's milk, almond milk, oat milk, coconut water", "İnek sütü, badem sütü, yulaf sütü, Hindistan cevizi suyu", "Bıçakların rahat dönmesini ve içilebilir akışkanlığı sağlar"],
            ["Boosters (Katkılar)", "Chia seeds, flaxseeds, peanut butter, honey", "Chia tohumu, keten tohumu, fıstık ezmesi, bal", "Omega-3, sağlıklı yağ ve doğal enerji takviyesi sağlar"]
          ])}

          <h3>Which Blender Settings Are Used for Smoothies? (Smoothie İçin Hangi Blender Ayarları Kullanılır?)</h3>
          ${table(["Blender Ayarı (Setting)", "Ne Zaman Kullanılır?", "İngilizce Kullanım Talimatı"], [
            ["Pulse", "Buzları ve donmuş meyveleri ilk başta kırmak için", "Pulse 3 to 4 times to crush hard frozen chunks."],
            ["Low Speed", "Sıvı ve yeşillikleri ilk karıştırma anında", "Start on low speed for 10 seconds to create a whirlpool."],
            ["High Speed", "Tamamen pürüzsüz ve homojen krema dokusu için", "Switch to high speed for 45 seconds for a velvety texture."]
          ])}
        </section>

        <section id="besin-degerleri">
          <p class="eyebrow">CALORIES &amp; NUTRITION (KALORİ VE BESİN DEĞERLERİ)</p>
          <h2>How Many Calories Does a Banana Smoothie Have? (Muzlu Smoothie Kaç Kalori?)</h2>
          <p class="section-intro">1 büyük su bardağı (yaklaşık 300 ml) klasik muzlu smoothie ortalama <strong>210 kcal</strong> enerji içerir; kullanılan süt türü ve eklenen bala göre kalori miktarı değişebilir.</p>
          ${table(["Porsiyon (Serving)", "Kalori (Energy)", "Açıklama"], [
            ["1 bardak Muzlu Smoothie (300 ml)", "210 kcal", "Muz, az yağlı süt, yoğurt ve 1 tatlı kaşığı bal"],
            ["1 bardak Çilekli Smoothie (300 ml)", "185 kcal", "Badem sütü ile yapıldığında daha düşük kalorilidir"],
            ["1 bardak Yeşil Smoothie (300 ml)", "140 kcal", "Şekersiz, bol ıspanak ve yeşil elmalı hafif içecek"],
            ["1 bardak Proteinli Smoothie (400 ml)", "320 kcal", "Protein tozu ve fıstık ezmeli sporcu öğünü"]
          ])}

          <h3>What Are the Nutrition Facts of a Banana Smoothie? (Muzlu Smoothie'nin Besin Değerleri Nelerdir?)</h3>
          ${table(["Besin Ögesi (Nutrient)", "Miktar (1 Bardak / 300 ml)", "Günlük Değer Oranı (% DV)"], [
            ["Potassium (Potasyum)", "540 mg", "%12 DV (Kalp ve kas sağlığı)"],
            ["Carbohydrate (Karbonhidrat)", "42 g", "%14 DV (Doğal meyve şekeri)"],
            ["Dietary Fiber (Diyet Lifi)", "4.2 g", "%15 DV (Sindirim dostu)"],
            ["Protein (Protein)", "7.5 g", "%15 DV (Süt ve yoğurt katkısı)"],
            ["Calcium (Kalsiyum)", "220 mg", "%17 DV (Kemik sağlığı)"]
          ])}
          <p class="source-note">Besin değerleri standart taze meyve ve süt bileşimlerine dayalı <a href="https://fdc.nal.usda.gov/" target="_blank" rel="noreferrer">USDA FoodData Central</a> verileridir.</p>
        </section>

        <section id="puf-noktalari">
          <p class="eyebrow">PRO TIPS &amp; TECHNIQUES (PÜF NOKTALARI VE TEKNİKLER)</p>
          <h2>Frozen Fruit ve Fresh Fruit: Smoothie Tarifinde Hangisi Kullanılır?</h2>
          <p class="section-intro">Smoothie yaparken en lezzetli sonuç için <strong>donmuş meyve (frozen fruit)</strong> tercih edilir. Dondurulmuş meyveler buz küpüne ihtiyaç duymadan yoğun, dondurma kıvamında ve sulanmayan bir doku sağlar. Taze meyve kullanıyorsanız içeceğin serin olması için 3–4 adet buz küpü ekleyebilirsiniz.</p>

          <h3>Green Smoothie İngilizce Tarifte Nasıl Anlatılır?</h3>
          <p class="section-intro">Yeşil smoothielerde yaprakların ağza gelmemesi için iki aşamalı karıştırma kuralı uygulanır: <strong>"First, blend your leafy greens with the liquid for 30 seconds. Then, add the fruits and blend again until silky smooth." (Önce yeşillikleri sıvıyla 30 saniye çekin. Ardından meyveleri ekleyip pürüzsüz olana dek tekrar çekin.)</strong></p>
        </section>

        <section id="olculer">
          <p class="eyebrow">MEASUREMENT UNITS &amp; VOCABULARY (ÖLÇÜ BİRİMLERİ VE MUTFAK KELİMELERİ)</p>
          <h2>İngilizce Smoothie Tariflerinde Kullanılan Ölçü Birimleri Nelerdir?</h2>
          <p class="section-intro">İngilizce içecek tariflerinde <strong>cup (su bardağı), tablespoon (tbsp), teaspoon (tsp), ml (milliliter)</strong> ve <strong>grams</strong> birimleri kullanılır.</p>

          <h3>Smoothie Tarif Metninde Geçen Temel İngilizce Mutfak Kelimeleri Nelerdir?</h3>
          <div class="vocab vocab-wide">
            ${smoothieVocab.map(v => `<article><h4>${v[0]}</h4><strong>${v[1]}</strong><p>${v[2]}</p></article>`).join("")}
          </div>

          <h3>Tablespoon, Teaspoon, Cup: İngilizce Ölçü Birimlerinin Türkçe Karşılıkları</h3>
          ${table(["İngilizce Birim", "Türkçe Karşılığı", "Metrik Eşdeğeri", "Örnek Cümle"], [
            ["1 cup (c)", "1 su bardağı", "240 ml", "Add 1 cup of almond milk into the blender."],
            ["½ cup", "Yarım su bardağı", "120 ml / 120 g", "Add ½ cup of Greek yogurt for thickness."],
            ["1 tablespoon (tbsp)", "1 yemek kaşığı", "15 ml", "Add 1 tablespoon of pure honey."],
            ["1 teaspoon (tsp)", "1 tatlı / çay kaşığı", "5 ml / 3 g", "Sprinkle 1 teaspoon of chia seeds on top."]
          ])}

          <h3>Gram ve Litre İngilizce Tariflerde Nasıl Kullanılır?</h3>
          ${table(["Metrik Değer", "İngilizce Yazımı", "Kullanım Örneği"], [
            ["200 gram", "200 g of strawberries", "Wash and hull 200 g of fresh strawberries."],
            ["250 mililitre", "250 ml of cold milk", "Measure 250 ml of milk before pouring."]
          ])}
        </section>

        <section id="dil-kurallari">
          <p class="eyebrow">GRAMMAR RULES (DİL BİLGİSİ VE YAZIM KURALLARI)</p>
          <h2>İngilizce Smoothie Tarifi Yazarken Dikkat Edilmesi Gereken Dil Kuralları</h2>
          <p class="section-intro">İçecek tariflerinde eylemler anında ve dinamiktir; emir cümleleri (imperatives) ve sıralama zarfları (first, then, after that, finally) kullanılır.</p>

          <div class="grammar-tabs">
            <div class="tab-list" role="tablist" aria-label="Dil kuralı konuları">
              <button id="smoothie-tab-imperative" role="tab" aria-selected="true" aria-controls="smoothie-panel-imperative" tabindex="0" data-tab="imperative" class="active"><span>01</span>Emir Kipi (Imperatives)</button>
              <button id="smoothie-tab-sequence" role="tab" aria-selected="false" aria-controls="smoothie-panel-sequence" tabindex="-1" data-tab="sequence"><span>02</span>Sıra Zarfları (Connectors)</button>
            </div>
            <div class="tab-panels">
              <div id="smoothie-panel-imperative" class="tab-panel active" role="tabpanel" aria-labelledby="smoothie-tab-imperative">
                <h3>İngilizce Smoothie Tarif Metinlerinde Emir Kipi (Imperative) Nasıl Kullanılır?</h3>
                <p class="section-intro">Cümle doğrudan yalın fiille başlar: <strong>Peel the bananas, pour the milk, blend on high speed.</strong></p>
                ${table(["İngilizce Emir", "Türkçe Anlamı", "Kullanılan Fiil"], [
                  ["Peel and slice 2 bananas.", "2 muzu soyun ve dilimleyin.", "Peel & Slice"],
                  ["Pour the milk into the blender.", "Sütü blendera dökün.", "Pour"],
                  ["Blend until creamy and smooth.", "Kremamsı ve pürüzsüz olana dek çekin.", "Blend"],
                  ["Serve chilled immediately.", "Hemen soğuk servis edin.", "Serve"]
                ])}
              </div>
              <div id="smoothie-panel-sequence" class="tab-panel" role="tabpanel" aria-labelledby="smoothie-tab-sequence" hidden>
                <h3>Bağlaçlar ve Sıra Zarfları: First, Then, After That, Finally</h3>
                <p class="section-intro">Tarif adımlarının sırasını belirtmek için sıra zarfları kullanılır.</p>
                <div class="language-card sequence">
                  <small>Örnek Tarif Paragrafı (Example Recipe Paragraph)</small>
                  <p>First, peel and slice 2 bananas. Then, add 1 cup of milk, ½ cup of yogurt and 1 tablespoon of honey to the blender. After that, blend the mixture on high speed for 45 seconds until smooth. Finally, pour the smoothie into glasses and serve cold.</p>
                  <p class="translation">İlk olarak 2 muzu soyun ve dilimleyin. Ardından blendera 1 su bardağı süt, yarım su bardağı yoğurt ve 1 yemek kaşığı bal ekleyin. Daha sonra karışımı pürüzsüz olana kadar yüksek hızda 45 saniye çekin. Son olarak smoothieyi bardaklara dökün ve soğuk servis edin.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="alistirma">
          <div class="exercise">
            <p class="eyebrow">PRACTICE &amp; QUIZ (KAZANIM KONTROLÜ VE ALIŞTIRMA)</p>
            <h2>8. Sınıf İngilizce Smoothie Tarifi Alıştırma ve Quizi</h2>
            <p class="section-intro">Öğrendiğiniz meyve isimlerini, blender eylemlerini ve sıralama bağlaçlarını bu testle pekiştirin.</p>
            <ol>
              <li>
                <span class="quiz-q-num">Soru 1</span>
                <p class="quiz-q-title">Which English verb means "meyvenin kabuğunu soymak"?</p>
                <p class="quiz-q-tr">("Meyvenin kabuğunu soymak" anlamına gelen İngilizce fiil hangisidir?)</p>
                <ul class="quiz-options">
                  <li class="quiz-option" onclick="this.parentElement.querySelectorAll('.quiz-option').forEach(el=>el.classList.remove('selected','correct','wrong')); this.classList.add('wrong');">A) Bake</li>
                  <li class="quiz-option" onclick="this.parentElement.querySelectorAll('.quiz-option').forEach(el=>el.classList.remove('selected','correct','wrong')); this.classList.add('correct');">B) Peel ✓</li>
                  <li class="quiz-option" onclick="this.parentElement.querySelectorAll('.quiz-option').forEach(el=>el.classList.remove('selected','correct','wrong')); this.classList.add('wrong');">C) Boil</li>
                  <li class="quiz-option" onclick="this.parentElement.querySelectorAll('.quiz-option').forEach(el=>el.classList.remove('selected','correct','wrong')); this.classList.add('wrong');">D) Drain</li>
                </ul>
              </li>
              <li>
                <span class="quiz-q-num">Soru 2</span>
                <p class="quiz-q-title">Why is frozen fruit preferred over fresh fruit in a smoothie?</p>
                <p class="quiz-q-tr">(Smoothie yaparken dondurulmuş meyve neden taze meyveye tercih edilir?)</p>
                <ul class="quiz-options">
                  <li class="quiz-option" onclick="this.parentElement.querySelectorAll('.quiz-option').forEach(el=>el.classList.remove('selected','correct','wrong')); this.classList.add('correct');">A) It gives a thick, creamy texture without needing ice ✓</li>
                  <li class="quiz-option" onclick="this.parentElement.querySelectorAll('.quiz-option').forEach(el=>el.classList.remove('selected','correct','wrong')); this.classList.add('wrong');">B) It is much sweeter than fresh fruit</li>
                  <li class="quiz-option" onclick="this.parentElement.querySelectorAll('.quiz-option').forEach(el=>el.classList.remove('selected','correct','wrong')); this.classList.add('wrong');">C) It changes the color to green</li>
                  <li class="quiz-option" onclick="this.parentElement.querySelectorAll('.quiz-option').forEach(el=>el.classList.remove('selected','correct','wrong')); this.classList.add('wrong');">D) It makes the blender run faster</li>
                </ul>
              </li>
              <li>
                <span class="quiz-q-num">Soru 3</span>
                <p class="quiz-q-title">What is the difference between a smoothie and a milkshake?</p>
                <p class="quiz-q-tr">(Smoothie ile milkshake arasındaki temel fark nedir?)</p>
                <ul class="quiz-options">
                  <li class="quiz-option" onclick="this.parentElement.querySelectorAll('.quiz-option').forEach(el=>el.classList.remove('selected','correct','wrong')); this.classList.add('wrong');">A) Smoothies are hot, milkshakes are cold</li>
                  <li class="quiz-option" onclick="this.parentElement.querySelectorAll('.quiz-option').forEach(el=>el.classList.remove('selected','correct','wrong')); this.classList.add('correct');">B) Smoothies use fruit & yogurt; milkshakes use ice cream & milk ✓</li>
                  <li class="quiz-option" onclick="this.parentElement.querySelectorAll('.quiz-option').forEach(el=>el.classList.remove('selected','correct','wrong')); this.classList.add('wrong');">C) Milkshakes have no dairy</li>
                  <li class="quiz-option" onclick="this.parentElement.querySelectorAll('.quiz-option').forEach(el=>el.classList.remove('selected','correct','wrong')); this.classList.add('wrong');">D) Smoothies require an oven to bake</li>
                </ul>
              </li>
              <li>
                <span class="quiz-q-num">Soru 4</span>
                <p class="quiz-q-title">Which sentence is in the correct imperative form?</p>
                <p class="quiz-q-tr">(Hangi cümle doğru emir kipi biçimindedir?)</p>
                <ul class="quiz-options">
                  <li class="quiz-option" onclick="this.parentElement.querySelectorAll('.quiz-option').forEach(el=>el.classList.remove('selected','correct','wrong')); this.classList.add('wrong');">A) You should blend the ingredients.</li>
                  <li class="quiz-option" onclick="this.parentElement.querySelectorAll('.quiz-option').forEach(el=>el.classList.remove('selected','correct','wrong')); this.classList.add('correct');">B) Blend the mixture on high speed for 45 seconds. ✓</li>
                  <li class="quiz-option" onclick="this.parentElement.querySelectorAll('.quiz-option').forEach(el=>el.classList.remove('selected','correct','wrong')); this.classList.add('wrong');">C) Blending on high speed is good.</li>
                  <li class="quiz-option" onclick="this.parentElement.querySelectorAll('.quiz-option').forEach(el=>el.classList.remove('selected','correct','wrong')); this.classList.add('wrong');">D) We blended the smoothie.</li>
                </ul>
              </li>
            </ol>
            <details class="answer-key">
              <summary>Cevap Anahtarını Göster</summary>
              <div class="key-content">
                <ol>
                  <li><strong>Soru 1: B) Peel</strong> — <em>Muz veya portakal gibi kabuklu meyvelerin kabuğunu soyma eylemi İngilizcede "peel" fiili ile belirtilir.</em></li>
                  <li><strong>Soru 2: A) It gives a thick, creamy texture without needing ice</strong> — <em>Dondurulmuş meyveler buz kullanmaya gerek kalmadan içeceğe yoğun, kıvamlı ve sulanmayan bir kremsilik katar.</em></li>
                  <li><strong>Soru 3: B) Smoothies use fruit & yogurt; milkshakes use ice cream & milk</strong> — <em>Smoothie meyve ve yoğurt ağırlıklı besleyici bir içecekken, milkshake dondurma bazlı tatlı bir süt içeceğidir.</em></li>
                  <li><strong>Soru 4: B) Blend the mixture on high speed for 45 seconds.</strong> — <em>İngilizce tarif talimatları doğrudan yalın eylem fiili ile başlayan emir kipiyle ifade edilir.</em></li>
                </ol>
              </div>
            </details>
          </div>
        </section>

        ${getMidPageCTAHTML()}
        ${getRelatedRecipesHTML("smoothie")}
      </div>
    </div>
  </article>`;

  // Attach grammar tabs interactivity
  const tabButtons = root.querySelectorAll(".grammar-tabs button[role='tab']");
  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("aria-controls");
      tabButtons.forEach(b => {
        b.setAttribute("aria-selected", "false");
        b.classList.remove("active");
        b.tabIndex = -1;
      });
      btn.setAttribute("aria-selected", "true");
      btn.classList.add("active");
      btn.tabIndex = 0;
      root.querySelectorAll(".grammar-tabs .tab-panel").forEach(p => {
        p.hidden = p.id !== targetId;
        p.classList.toggle("active", p.id === targetId);
      });
    });
  });
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
    <header class="hero"><div><p class="eyebrow">RECIPES & COOKING GUIDE (İNGİLİZCE YEMEK TARİFLERİ)</p><h1>İngilizce Makarna Tarifi (Makarna Yapılışı İngilizce)</h1><aside class="course-banner" aria-label="İngilizce kursu"><div class="course-banner-text"><small class="cta-eyebrow">KONUŞARAK ÖĞREN İNGİLİZCE KURSU</small><strong class="cta-heading">İngilizceyi tarif ezberleyerek değil, konuşarak öğrenin.</strong></div><button class="cta-btn cta-btn-orange" onclick="window.location.href='https://student.konusarakogren.com/auth/register'">Ücretsiz tanışma dersi <span class="arrow">→</span></button></aside><p class="lede"><strong>Plain Pasta Recipe.</strong> İngilizce makarna tarifi; malzemeleri, emir kipindeki pişirme adımlarını ve Türkçe karşılıklarını birlikte öğreten uygulamalı bir İngilizce rehberidir.</p><div class="article-meta"><span class="author-mark" aria-hidden="true">KO</span><span><strong>Konuşarak Öğren Editör</strong><small>Yayınlanma tarihi: <time datetime="2026-07-29">29 Temmuz 2026</time></small></span></div></div><figure class="hero-visual"><img src="/blog/ingilizce-tarifler/images/makarna-hero.webp" alt="Masada servis edilmeye hazır sade makarna tabağı"><figcaption>Plain pasta · sade makarna</figcaption></figure><aside class="hero-card pasta-facts" aria-label="Tarif özeti"><table class="recipe-facts"><caption>Sade makarna tarifi özeti</caption><thead><tr><th scope="col">Hazırlık</th><th scope="col">Pişirme</th><th scope="col">Porsiyon</th><th scope="col">Seviye</th></tr></thead><tbody><tr><td><span class="fact-value" tabindex="0" aria-label="Hazırlık süresi 5 dakikadır." data-verbalization="Hazırlık süresi 5 dakikadır.">5 dakika</span></td><td><span class="fact-value" tabindex="0" aria-label="Pişirme süresi 10 dakikadır." data-verbalization="Pişirme süresi 10 dakikadır.">10 dakika</span></td><td><span class="fact-value" tabindex="0" aria-label="Tarif 2 kişiliktir." data-verbalization="Tarif 2 kişiliktir.">2 kişilik</span></td><td><span class="fact-value" tabindex="0" aria-label="İngilizce seviyesi A2 ile B1 arasındadır." data-verbalization="İngilizce seviyesi A2 ile B1 arasındadır.">A2–B1</span></td></tr></tbody></table></aside></header>
    <div class="page-grid"><nav class="toc" aria-label="İçindekiler"><a href="#kavramlar" data-scroll-target="kavramlar">Kavramlar</a><a href="#tarifler" data-scroll-target="tarifler">Tarifler</a><a href="#sade-makarna" data-scroll-target="sade-makarna">Adımlar</a><a href="#besin-degerleri" data-scroll-target="besin-degerleri">Besin değerleri</a><a href="#olculer" data-scroll-target="olculer">Ölçüler</a><a href="#dil-kurallari" data-scroll-target="dil-kurallari">Dil kuralları</a><a href="#alistirma" data-scroll-target="alistirma">Alıştırma</a></nav>
    <div class="content">
      <section id="kavramlar"><p class="eyebrow">CORE CONCEPTS & TRANSLATIONS (TEMEL KAVRAMLAR VE ÇEVİRİLER)</p><h2>İngilizce Makarna Tarifi Nedir? Temel Kavramlar ve Çeviriler</h2><h3>Makarna İngilizcede Ne Anlama Gelir?</h3><p class="section-intro">İngilizcede <strong>pasta</strong> genel kategoriyi, <strong>spaghetti</strong>, <strong>penne</strong> ve <strong>fettuccine</strong> ise belirli makarna biçimlerini anlatır. Tarif boyunca İngilizce talimat önce, Türkçe açıklama hemen sonra verilir.</p>${table(["İngilizce kavram", "Türkçe karşılığı", "İlgili tarif"], [["pasta","makarna","Tüm tarifler"],["plain pasta","sade makarna","Sade makarna"],["spaghetti","spagetti","Bolonez"],["fettuccine","şerit makarna","Alfredo"],["penne","kalem makarna","Domates soslu veya fırında makarna"]])}<h3>İngilizce Tarif Yazımında Kullanılan Fiiller: Boil, Drain, Saute, Cook</h3>${table(["Fiil", "Türkçe karşılığı", "Örnek cümle"], [["Boil","Kaynatmak","Boil 2 l of water. / 2 l su kaynatın."],["Drain","Süzmek","Drain the pasta. / Makarnayı süzün."],["Saute / Sauté","Sotelemek","Sauté the garlic. / Sarımsağı soteleyin."],["Cook","Pişirmek","Cook for 10 minutes. / 10 dakika pişirin."]])}</section>
      <div id="tarifler" class="recipe-chapters"><div class="chapter-intro"><p class="eyebrow">6 PASTA VARIATIONS (6 MAKARNA ÇEŞİDİ)</p><p class="section-intro">Her tarifte tanım, İngilizce–Türkçe malzemeler, miktarlar ve kısa yapılış birlikte verilmiştir. Başlıklara dokunarak öğrenme panellerini açabilirsiniz.</p></div>${pastaVariants.map((v, i) => `<section class="recipe-chapter"><div class="chapter-head"><span class="variant-number">${String(i + 1).padStart(2,"0")}</span><div><h2>${v.briefTitle}</h2><p>${v.description}</p></div></div><figure><img src="${v.image}" alt="${v.alt}" loading="lazy"><figcaption>${v.english}</figcaption></figure><div class="chapter-panels"><details class="learning-panel" ${i === 0 ? "open" : ""}><summary><h3>${v.ingredientsHeading}</h3><span>Malzeme tablosu</span></summary><div class="panel-body">${table(["İngilizce malzeme","Türkçe karşılığı","Miktar"],v.ingredients)}${buildIngredientCardsHTML(v.ingredientCards)}</div></details><details class="learning-panel"><summary><h3>${v.stepsHeading}</h3><span>Yöntemi göster</span></summary><div class="panel-body"><p class="method-note">${v.steps}</p></div></details></div></section>`).join("")}</div>
      <section id="sade-makarna"><div class="steps-heading"><p class="eyebrow">6-STEP PLAIN PASTA GUIDE (6 ADIMDA SADE MAKARNA REHBERİ)</p><h2>Plain Pasta İngilizce Adım Adım Nasıl Yapılır? (How Do You Make Plain Pasta Step by Step?)</h2><p class="section-intro">Bu sade makarna tarifi 6 adımdan oluşur ve yaklaşık 15 dakika sürer. İngilizce cümleler emir kipiyle başlar.</p><div class="steps-meta"><span>6 adım</span><span>15 dakika</span><span>A2–B1 seviye</span></div></div>${buildStepAccordionHTML(r.steps.map((s, idx) => { const title = s[0].replace(/^\d+\.\s*/, ""); const m = title.match(/^(.*?)\s*\((.*?)\)$/); return { number: idx + 1, titleEn: m ? m[1].trim() : title, titleTr: m ? m[2].trim() : ("Adım " + (idx + 1)), sentenceEn: s[1], sentenceTr: s[2], actionEn: s[1].split(" ")[0], actionTr: "Mutfak Eylemi" }; }))}${table(["Adım","İngilizce talimat","Türkçe açıklama"],r.steps.map((s,i)=>[i+1,s[1],s[2]]))}</section>
      <section id="malzemeler-ve-ekipman"><p class="eyebrow">INGREDIENTS & EQUIPMENT (MALZEME VE EKİPMAN LİSTESİ)</p><h2>Which Ingredients Do You Need to Cook Pasta? (Makarna Pişirmek İçin Hangi Malzemeler Gerekir?)</h2>${table(["İngilizce malzeme","Türkçe karşılığı","Miktar"],r.ingredients)}<h3>Which Kitchen Equipment Is Used to Cook Pasta? (Makarna Pişirmek İçin Hangi Mutfak Ekipmanları Kullanılır?)</h3>${table(["İngilizce ekipman","Türkçe karşılığı","Kullanıldığı adım"],[["Large pot","Büyük tencere","1–3"],["Measuring spoon","Ölçü kaşığı","2 ve 5"],["Wooden spoon","Tahta kaşık","2, 3 ve 5"],["Colander","Süzgeç","4"],["Serving bowl","Servis kasesi","6"]])}</section>
      <section id="besin-degerleri"><p class="eyebrow">CALORIES & NUTRITION (KALORİ VE BESİN DEĞERLERİ)</p><h2>How Many Calories Are in a Serving of Pasta? (Bir Porsiyon Makarna Kaç Kalori?)</h2><p class="section-intro">Sossuz, pişmiş makarnanın enerji değeri yaklaşık <strong>158 kcal/100 g</strong>; 180 g'lık örnek bir porsiyonun enerji değeri yaklaşık <strong>284 kcal</strong> kabul edilebilir. Kullanılan makarna ve yağ miktarı sonucu değiştirir.</p>${table(["Porsiyon","Kalori","Açıklama"],[["100 g pişmiş makarna","158 kcal","Sossuz yaklaşık değer"],["1 porsiyon (180 g)","284 kcal","Yağ ve sos hariç yaklaşık değer"]])}<h3>What Are the Nutrition Facts of Plain Pasta? (Sade Makarnanın Besin Değerleri Nelerdir?)</h3>${table(["İngilizce besin ögesi","Türkçe karşılığı","100 g'daki miktar"],[["Protein","Protein","5.8 g"],["Carbohydrate","Karbonhidrat","30.9 g"],["Fat","Yağ","0.9 g"],["Dietary fiber","Lif","1.8 g"]])}<p class="source-note">Değerler genel pişmiş makarna verilerine dayalı yaklaşık eğitim değerleridir. Kaynak yöntemi: <a href="https://fdc.nal.usda.gov/" target="_blank" rel="noreferrer">USDA FoodData Central</a>.</p></section>
      <section id="olculer"><p class="eyebrow">MEASUREMENT UNITS & VOCABULARY (ÖLÇÜ BİRİMLERİ VE KELİMELER)</p><h2>İngilizce Makarna Tariflerinde Kullanılan Ölçü Birimleri Nelerdir?</h2><p class="section-intro">İngilizce makarna tariflerinde <strong>cup, tablespoon, teaspoon, gram</strong> ve <strong>milliliter</strong> birimleri kullanılır.</p><h3>Makarna Tarif Metninde Geçen Temel İngilizce Mutfak Kelimeleri Nelerdir?</h3><div class="vocab vocab-wide">${vocab.map(v=>`<article><h4>${v[0]}</h4><strong>${v[1]}</strong><p>${v[2]}</p></article>`).join("")}</div><h3>Tablespoon, Teaspoon, Cup: İngilizce Ölçü Birimlerinin Türkçe Karşılıkları</h3>${table(["İngilizce birim","Türkçe karşılığı","Metrik karşılığı","Tarif örneği"],[["cup","su bardağı","240 ml","Add 1 cup of sauce."],["tablespoon (tbsp)","yemek kaşığı","15 ml","Add 1 tablespoon of oil."],["teaspoon (tsp)","çay kaşığı","5 ml","Add 1 teaspoon of salt."]])}<h3>Gram ve Litre İngilizce Tariflerde Nasıl Kullanılır?</h3>${table(["Metrik birim","Emperyal karşılığı","Türkçe açıklama"],[["100 g","3.5 oz","Yaklaşık 100 gram"],["1 l","4.2 cups","Yaklaşık 1 litre"]])}</section>
      <section id="dil-kurallari">${grammarTabs()}</section>
      <section id="alistirma"><div class="exercise"><p class="eyebrow">PRACTICE & QUIZ (KAZANIM KONTROLÜ VE ALIŞTIRMALAR)</p><h2>8. sınıf İngilizce Makarna Tarifi</h2><p>Tarif sıralama, emir kipi ve temel mutfak kelimelerini birlikte pekiştirin.</p><ol><li>“Drain the pasta” cümlesinin Türkçe karşılığı nedir?</li><li>Makarnayı kaç dakika pişirmelisiniz?</li><li>Tarifin son adımını İngilizce yazın.</li><li><em>First</em> ve <em>finally</em> kelimelerini kullanarak iki tarif cümlesi kurun.</li></ol></div></section>
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

kekVariants.forEach((v, idx) => { v.ingredientCards = kekCards[idx]; });

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

omletVariants.forEach((v, idx) => { v.ingredientCards = omletCards[idx]; });

function kekGrammarTabs() {
  return `<p class="eyebrow">RECIPE GRAMMAR & USAGE RULES (TARİF DİL BİLGİSİ VE ANLATIM KURALLARI)</p><h2>İngilizce Kek Tarifi Yazarken Dikkat Edilmesi Gereken Dil Kuralları</h2><p class="section-intro">İngilizce tarif yazımının 4 temel dil kuralı şunlardır: emir kipi (imperative mood), sıra zarfları (sequence adverbs), sayılabilir-sayılamayan isimler (countable-uncountable nouns) ve ölçü ifadeleri (measurement expressions).</p><div class="grammar-tabs"><div class="tab-list" role="tablist" aria-label="Dil kuralı konuları"><button id="tab-overview-kek" role="tab" aria-selected="true" aria-controls="panel-overview-kek" tabindex="0" data-tab="overview"><span>01</span>Genel kurallar</button><button id="tab-imperative-kek" role="tab" aria-selected="false" aria-controls="panel-imperative-kek" tabindex="-1" data-tab="imperative"><span>02</span>Emir kipi</button><button id="tab-sequence-kek" role="tab" aria-selected="false" aria-controls="panel-sequence-kek" tabindex="-1" data-tab="sequence"><span>03</span>Sıra zarfları</button></div><div class="tab-panels"><div id="panel-overview-kek" class="tab-panel" role="tabpanel" aria-labelledby="tab-overview-kek" data-panel="overview">${table(["Kural","İngilizce örnek","Türkçe karşılığı"],[["Imperative mood (Emir kipi)","Whisk the eggs.","Yumurtaları çırpın."],["Sequence adverbs (Sıra zarfları)","Then, add the milk.","Ardından sütü ekleyin."],["Countable-uncountable nouns","Add 200 g of flour and 3 eggs.","200 gram un ve 3 yumurta ekleyin."],["Measurement expressions","Add 120 ml of milk.","120 mililitre süt ekleyin."]])}</div><div id="panel-imperative-kek" class="tab-panel" role="tabpanel" aria-labelledby="tab-imperative-kek" data-panel="imperative" hidden><h3>İngilizce Kek Tarif Metinlerinde Emir Kipi (Imperative) Nasıl Kullanılır?</h3><p class="section-intro">Emir kipi (imperative mood), fiilin yalın haliyle başlayan ve özne içermeyen talimat cümlesidir.</p>${table(["English Imperative","Türkçe Karşılığı","Verb"],[["Whisk the eggs and sugar.","Yumurta ve şekeri çırpın.","Whisk"],["Add the milk and oil.","Sütü ve sıvı yağı ekleyin.","Add"],["Sift the flour.","Unu eleyin.","Sift"],["Pour the batter into the pan.","Hamuru kalıba dökün.","Pour"],["Bake the cake for 40 minutes.","Keki 40 dakika pişirin.","Bake"]])}<p class="method-note">Olumsuz emir kipi örneği: <strong>Do not overcook the cake. (Keki fazla pişirmeyin.)</strong></p></div><div id="panel-sequence-kek" class="tab-panel" role="tabpanel" aria-labelledby="tab-sequence-kek" data-panel="sequence" hidden><h3>Bağlaçlar ve Sıra Zarfları: First, Then, After That, Finally</h3><p class="section-intro">First, then, after that, next ve finally zarfları, tarif adımlarını sıralamak için kullanılır.</p>${table(["Sequence Adverb","Türkçe Karşılığı","Example Sentence"],[["First","Önce","First, whisk the eggs and sugar."],["Then","Ardından","Then, add the milk and oil."],["After that","Bunun ardından","After that, sift in the flour."],["Next","Sonra","Next, mix the batter until smooth."],["Finally","Son olarak","Finally, bake the cake for 40 minutes."]])}<div class="language-card sequence"><small>Kısa tarif paragrafı</small><p>First, whisk the eggs and sugar for 2 minutes. Then, add the milk and oil. After that, sift in the flour and baking powder. Next, mix the batter until smooth. Finally, pour the batter into the pan and bake it for 40 minutes.</p><p class="translation">Önce yumurta ve şekeri 2 dakika çırpın. Ardından süt ve sıvı yağı ekleyin. Bunun ardından unu ve kabartma tozunu eleyerek ekleyin. Sonra hamuru pürüzsüz olana kadar karıştırın. Son olarak hamuru kalıba dökün ve 40 dakika pişirin.</p></div></div></div></div>`;
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
        <p class="eyebrow">RECIPES & COOKING GUIDE (İNGİLİZCE YEMEK TARİFLERİ)</p>
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
          <p class="eyebrow">CORE CONCEPTS & TRANSLATIONS (TEMEL KAVRAMLAR VE ÇEVİRİLER)</p>
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
            <p class="eyebrow">4 CAKE VARIATIONS (4 KEK ÇEŞİDİ)</p>
            <p class="section-intro">Her tarifte tanım, İngilizce–Türkçe malzemeler, miktarlar ve kısa yapılış birlikte verilmiştir. Başlıklara dokunarak öğrenme panellerini açabilirsiniz.</p>
          </div>
          ${kekVariants.map((v, i) => `<section class="recipe-chapter">
            <div class="chapter-head"><span class="variant-number">${String(i + 1).padStart(2, "0")}</span><div><h2>${v.briefTitle}</h2><p>${v.description}</p></div></div>
            <figure><img src="${v.image}" alt="${v.alt}" loading="lazy"><figcaption>${v.english}</figcaption></figure>
            <div class="chapter-panels">
              <details class="learning-panel" ${i === 0 ? "open" : ""}><summary><h3>${v.ingredientsHeading}</h3><span>Malzeme tablosu</span></summary><div class="panel-body">${table(["İngilizce malzeme", "Türkçe karşılığı", "Miktar"], v.ingredients)}${buildIngredientCardsHTML(v.ingredientCards)}</div></details>
              <details class="learning-panel"><summary><h3>${v.stepsHeading}</h3><span>Yöntemi göster</span></summary><div class="panel-body"><p class="method-note">${v.steps}</p></div></details>
            </div>
          </section>`).join("")}
        </div>
        <section id="sade-kek">
          <div class="steps-heading">
            <p class="eyebrow">7-STEP PLAIN CAKE GUIDE (7 ADIMDA SADE KEK REHBERİ)</p>
            <h2>Plain Cake İngilizce Adım Adım Nasıl Yapılır? (How Do You Make Plain Cake Step by Step?)</h2>
            <p class="section-intro">Bu sade kek tarifi 7 adımdan oluşur ve yaklaşık 40 dakika pişirme süresi gerektirir.</p>
            <div class="steps-meta"><span>7 adım</span><span>40 dakika pişirme</span><span>A2–B1 seviye</span></div>
          </div>
          ${buildStepAccordionHTML(r.steps.map((s, idx) => {
            const title = s[0].replace(/^\d+\.\s*/, "");
            const m = title.match(/^(.*?)\s*\((.*?)\)$/);
            return {
              number: idx + 1,
              titleEn: m ? m[1].trim() : title,
              titleTr: m ? m[2].trim() : ("Adım " + (idx + 1)),
              sentenceEn: s[1],
              sentenceTr: s[2],
              actionEn: s[1].split(" ")[0],
              actionTr: "Mutfak Eylemi"
            };
          }))}
          ${table(["Adım", "İngilizce talimat", "Türkçe açıklama"], r.steps.map((s, i) => [i + 1, s[1], s[2]]))}
        </section>
        <section id="malzemeler-ve-ekipman">
          <p class="eyebrow">INGREDIENTS & EQUIPMENT (MALZEME VE EKİPMAN LİSTESİ)</p>
          <h2>What Do You Need to Bake a Cake in English? (İngilizce Kek Yapmak İçin Neler Gerekir?)</h2>
          <p class="section-intro">Kek yapmak için gereken temel malzemeler flour, sugar, eggs, milk, oil ve baking powder'dır.</p>
          ${table(["İngilizce malzeme", "Türkçe karşılığı", "Miktar"], r.ingredients)}
          <h3>Which Baking Equipment Is Required for a Cake? (Kek İçin Hangi Pişirme Ekipmanları Gerekir?)</h3>
          ${table(["İngilizce araç adı", "Türkçe karşılığı", "Kullanıldığı adım"], r.equipment)}
        </section>
        <section id="besin-degerleri">
          <p class="eyebrow">CALORIES & NUTRITION (KALORİ VE BESİN DEĞERLERİ)</p>
          <h2>How Many Calories Does a Slice of Cake Contain? (Bir Dilim Kek Kaç Kalori İçerir?)</h2>
          <p class="section-intro">Bir dilim sade kek (yaklaşık 80 gram) ortalama 260-290 kalori içerir. Bu değer, tarifteki yağ ve şeker oranına göre değişir.</p>
          ${table(["Serving", "Calories (kcal)", "Açıklama"], [["100 g", "~350 kcal", "Standart sade kek hamurunun 100 gramı için ortalama değer."], ["1 dilim (~80 g)", "~275 kcal", "Orta boy bir dilim için yaklaşık değer."]])}
          <h3>What Are the Nutrition Facts of Plain Cake? (Sade Kekin Besin Değerleri Nelerdir?)</h3>
          ${table(["Nutrient", "Besin Ögesi", "Amount per 100 g"], [["Protein", "Protein", "~5 g"], ["Carbohydrate", "Karbonhidrat", "~45 g"], ["Fat", "Yağ", "~15 g"], ["Fiber", "Lif", "~1 g"]])}
        </section>
        <section id="olculer">
          <p class="eyebrow">MEASUREMENT UNITS & VOCABULARY (ÖLÇÜ BİRİMLERİ VE KELİMELER)</p>
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
            <p class="eyebrow">PRACTICE & QUIZ (KAZANIM KONTROLÜ VE ALIŞTIRMALAR)</p>
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

function omletGrammarTabs() {
  return `
    <p class="eyebrow">RECIPE GRAMMAR & USAGE RULES (TARİF DİL BİLGİSİ VE ANLATIM KURALLARI)</p>
    <h2>Omlet Tarifi Yazarken Dikkat Edilmesi Gereken Dil Kuralları (Grammar Rules for Omelette Recipes)</h2>
    <p class="section-intro">Explore the 3 essential grammar rules for writing English omelette recipes. (İngilizce omlet tariflerinde kullanılan 3 temel dil kuralını aşağıdaki sekmelerden inceleyebilirsiniz.)</p>
    <div class="grammar-tabs">
      <div class="tab-list" role="tablist" aria-label="Omlet Dil Kuralları">
        <button id="tab-omlet-imperatives" role="tab" aria-selected="true" aria-controls="panel-omlet-imperatives" tabindex="0" data-tab="imperatives" onclick="switchGrammarTab('imperatives')">
          <span>01</span> Imperatives (Emir Kipi)
        </button>
        <button id="tab-omlet-sequence" role="tab" aria-selected="false" aria-controls="panel-omlet-sequence" tabindex="-1" data-tab="sequence" onclick="switchGrammarTab('sequence')">
          <span>02</span> Sequence Adverbs (Sıra Zarfları)
        </button>
        <button id="tab-omlet-rules" role="tab" aria-selected="false" aria-controls="panel-omlet-rules" tabindex="-1" data-tab="rules" onclick="switchGrammarTab('rules')">
          <span>03</span> Grammar Rules (Dil Kuralları)
        </button>
      </div>
      <div class="tab-panels">
        <div id="panel-omlet-imperatives" class="tab-panel" role="tabpanel" aria-labelledby="tab-omlet-imperatives" data-panel="imperatives">
          <p class="section-intro">Imperatives give direct cooking instructions without a subject. (Emir kipi, tariflerde öznesiz doğrudan pişirme eylemi belirtir.)</p>
          ${table(["İngilizce Emir Kipi", "Mutfak Eylemi", "Türkçe Çeviri"], [
            ["Beat the eggs with salt and pepper.", "Beat (Çırpmak)", "Yumurtaları tuz ve karabiberle çırpın."],
            ["Melt the butter in a non-stick pan.", "Melt (Eritmek)", "Tereyağını yapışmaz tavada eritin."],
            ["Pour the mixture into the hot skillet.", "Pour (Dökmek)", "Karışımı sıcak tavaya dökün."],
            ["Cook for 2–3 minutes over medium heat.", "Cook (Pişirmek)", "Orta ateşte 2–3 dakika pişirin."],
            ["Fold the omelette in half carefully.", "Fold (Katlamak)", "Omleti dikkatlice ikiye katlayın."]
          ])}
        </div>
        <div id="panel-omlet-sequence" class="tab-panel" role="tabpanel" aria-labelledby="tab-omlet-sequence" data-panel="sequence" hidden>
          <p class="section-intro">Sequence adverbs show the chronological progression of cooking steps. (Sıra zarfları tarif adımlarının kronolojik sırasını belirler.)</p>
          ${table(["Sequence Adverb", "Fonksiyon", "Örnek Cümle (İngilizce - Türkçe)"], [
            ["First (İlk olarak)", "Başlangıç adımı", "First, crack the fresh eggs into a bowl. (İlk olarak taze yumurtaları bir kaseye kırın.)"],
            ["Then (Ardından)", "İkinci adım", "Then, whisk thoroughly with a fork. (Ardından bir çatalla iyice çırpın.)"],
            ["Next (Sonra)", "Gelişme adımı", "Next, pour into the melted butter. (Sonra erimiş tereyağının içine dökün.)"],
            ["After that (Daha sonra)", "Tamamlama adımı", "After that, lift the edges gently. (Daha sonra kenarları nazikçe kaldırın.)"],
            ["Finally (Son olarak)", "Servis adımı", "Finally, slide onto a warm plate. (Son olarak ılık bir tabağa kaydırın.)"]
          ])}
        </div>
        <div id="panel-omlet-rules" class="tab-panel" role="tabpanel" aria-labelledby="tab-omlet-rules" data-panel="rules" hidden>
          <p class="section-intro">Key grammar constraints including countable/uncountable nouns and negative imperatives. (Sayılabilir/sayılamayan isimler ve olumsuz emir kipi kuralları.)</p>
          ${table(["Dil Kuralı", "Açıklama & Örnek", "Türkçe Karşılığı"], [
            ["Countable Nouns", "2 eggs, 3 mushrooms", "2 yumurta, 3 mantar (sayılabilir)"],
            ["Uncountable Nouns", "some salt, butter, oil", "biraz tuz, tereyağı, sıvı yağ (sayılamaz)"],
            ["Negative Imperative", "Do not overcook the eggs.", "Yumurtaları fazla pişirmeyin."],
            ["Cooking Temperature", "Cook over low-medium heat.", "Kısık-orta ateşte pişirin."]
          ])}
        </div>
      </div>
    </div>
  `;
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
        <p class="eyebrow">RECIPES & COOKING GUIDE (İNGİLİZCE YEMEK TARİFLERİ)</p>
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
          <p class="eyebrow">CORE CONCEPTS & INGREDIENTS (TEMEL KAVRAMLAR VE MALZEMELER)</p>
          <h2>İngilizce Omlet Tarifi: Temel Fiiller, Kelimeler ve Malzemeler</h2>
          <p class="section-intro">İngilizce omlet tarifi okurken ve yazarken bilmeniz gereken temel fiiller, işlem adımları ve mutfak malzemeleri aşağıda 16:9 geniş ekran görsel kartlarımızla sunulmuştur.</p>
          <figure class="vocab-card-visual" style="margin: 2rem 0; text-align: center;">
            <img src="/blog/ingilizce-tarifler/images/omlet-vocab-card.webp" alt="Cooking in English - Omelette Verbs Widescreen Visual Card" style="width: 100%; border-radius: 20px; box-shadow: 0 12px 36px rgba(0,0,0,0.12); border: 1px solid var(--ko-border);" />
            <figcaption style="margin-top: 10px; color: var(--ko-gray-muted); font-size: 14px;"><strong>Cooking in English:</strong> Omlet tariflerinde kullanılan temel fiiller ve işlem adımları kartı.</figcaption>
          </figure>
          ${table(["Verb or Term (Fiil veya Terim)", "Turkish Meaning (Türkçe Karşılığı)", "Example Sentence (Örnek Cümle)"], [["Crack", "Kırmak (Yumurta)", "Crack 2 eggs into a bowl."], ["Beat", "Çırpmak", "Beat the eggs with salt and pepper."], ["Heat", "Isıtmak (Tava/Tereyağı)", "Heat 1 tbsp of butter in a pan."], ["Pour", "Dökmek", "Pour the egg mixture into the pan."], ["Fold", "Katlamak", "Fold the omelette in half."], ["Whisk / Fluffy", "Telle çırpmak / Kabarık", "Whisk the eggs for a fluffy texture."]])}
          
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
            <p class="eyebrow">4 OMELETTE VARIATIONS (4 OMLET ÇEŞİDİ)</p>
            <p class="section-intro">Her tarifte tanım, İngilizce–Türkçe malzemeler ve adım detayları yer almaktadır.</p>
          </div>
          ${omletVariants.map((v, i) => `<section class="recipe-chapter"><div class="chapter-head"><span class="variant-number">${String(i + 1).padStart(2,"0")}</span><div><h2>${v.briefTitle}</h2><p>${v.description}</p></div></div><figure><img src="${v.image}" alt="${v.alt}" loading="lazy"><figcaption><strong>${v.english}</strong><span>${v.title}</span></figcaption></figure><div class="chapter-panels"><details class="learning-panel" ${i === 0 ? "open" : ""}><summary><h3>${v.ingredientsHeading}</h3><span>Malzeme tablosu</span></summary><div class="panel-body">${table(["İngilizce malzeme","Türkçe karşılığı","Miktar"],v.ingredients)}</div></details><details class="learning-panel"><summary><h3>${v.stepsHeading}</h3><span>Yöntemi göster</span></summary><div class="panel-body"><p class="method-note">${v.steps}</p></div></details></div></section>`).join("")}
        </section>
        <section id="sade-omlet">
          <div class="steps-heading">
            <p class="eyebrow">5-STEP PLAIN OMELETTE GUIDE (5 ADIMDA SADE OMLET REHBERİ)</p>
            <h2>Plain Omelette İngilizce Adım Adım Nasıl Yapılır?</h2>
            <p class="section-intro">Sade omlet 5 adımda hazırlanır. İngilizce cümleler emir kipiyle (imperative) kurulur.</p>
          </div>
          ${buildStepAccordionHTML(r.steps.map((s, idx) => { const title = s[0].replace(/^\d+\.\s*/, ""); const m = title.match(/^(.*?)\s*\((.*?)\)$/); return { number: idx + 1, titleEn: m ? m[1].trim() : title, titleTr: m ? m[2].trim() : ("Adım " + (idx + 1)), sentenceEn: s[1], sentenceTr: s[2], actionEn: s[1].split(" ")[0], actionTr: "Mutfak Eylemi" }; }))}
        </section>
        <section id="besin-degerleri">
          <p class="eyebrow">CALORIES & NUTRITION (KALORİ VE BESİN DEĞERLERİ)</p>
          <h2>How Many Calories Does an Omelette Have? (Omlet Kaç Kalori?)</h2>
          <p class="section-intro">2 yumurtalı sade omlet yaklaşık <strong>200 kcal</strong> kabul edilir.</p>
          ${table(["Porsiyon", "Kalori", "Açıklama"], [["100 g sade omlet", "154 kcal", "Tereyağlı ortalama değer"], ["1 porsiyon (2 yumurta)", "200 kcal", "Sade omlet porsiyon değeri"]])}
        </section>
        <section id="dil-kurallari">
          ${omletGrammarTabs()}
        </section>
        <section id="alistirma">
          <div class="exercise">
            <p class="eyebrow">PRACTICE & QUIZ (KAZANIM KONTROLÜ VE ALIŞTIRMALAR)</p>
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

window.switchGrammarTab = function(panelId, btn) {
  const container = btn.closest(".grammar-tabs");
  if (!container) return;
  container.querySelectorAll(".tab-list button").forEach(b => {
    b.setAttribute("aria-selected", "false");
  });
  btn.setAttribute("aria-selected", "true");
  container.querySelectorAll(".tab-panel").forEach(p => {
    p.hidden = true;
  });
  const target = document.getElementById(panelId);
  if (target) target.hidden = false;
};

function renderPizzaPage() {
  document.title = "İngilizce Pizza Tarifi (Pizza Yapılışı İngilizce) | Konuşarak Öğren";
  setStructuredData({
    "@context": "https://schema.org", "@type": "Recipe",
    name: "İngilizce Pizza Tarifi (Pizza Yapılışı İngilizce)",
    image: ["/blog/ingilizce-tarifler/images/pizza-hero.webp"],
    author: { "@type": "Organization", name: "Konuşarak Öğren" },
    datePublished: "2026-09-06",
    description: "İngilizce Pizza tarifi; ev yapımı pizza hamuru, margarita, karışık ve tavada pizza çeşitleri, malzemeleri ve 7 pişirme adımı.",
    prepTime: "PT20M", cookTime: "PT15M", totalTime: "PT35M", recipeYield: "4 porsiyon",
    recipeCategory: "Akşam Yemeği", recipeCuisine: "İtalyan Mutfağı",
    nutrition: { "@type": "NutritionInformation", calories: "285 calories" },
    recipeIngredient: ["3 cups all-purpose flour", "1 packet active dry yeast", "1 cup warm water", "2 tbsp olive oil", "1 tsp salt", "1/2 cup tomato sauce", "200 g mozzarella cheese", "Fresh basil leaves"],
    recipeInstructions: [
      { "@type": "HowToStep", position: 1, name: "1. Dissolve the Yeast in Warm Water", text: "Dissolve 1 packet of active dry yeast and 1 teaspoon of sugar in 1 cup of warm water." },
      { "@type": "HowToStep", position: 2, name: "2. Knead the Pizza Dough for 10 Minutes", text: "Knead the flour, salt, olive oil, and yeast mixture vigorously on a clean counter for 10 minutes." },
      { "@type": "HowToStep", position: 3, name: "3. Let the Dough Rise for 1 Hour", text: "Place the dough ball into an oiled bowl, cover with a towel, and let it rise for 1 hour until doubled." },
      { "@type": "HowToStep", position: 4, name: "4. Roll Out the Dough into a Circle", text: "Roll out the risen dough on a lightly floured surface into a 30 cm round base." },
      { "@type": "HowToStep", position: 5, name: "5. Spread the Tomato Sauce on the Base", text: "Spread 3 tablespoons of seasoned tomato sauce evenly across the dough, leaving 1 cm around the edges." },
      { "@type": "HowToStep", position: 6, name: "6. Add the Cheese and Toppings", text: "Add 200 grams of shredded mozzarella and arrange your favorite meat or vegetable toppings on top." },
      { "@type": "HowToStep", position: 7, name: "7. Bake the Pizza at 220 Degrees for 15 Minutes", text: "Bake the pizza in a preheated oven at 220 degrees for 15 minutes until the crust turns golden brown." }
    ]
  });

  const pizzaChapters = [
    {
      block: pizzaData.contentBlocks.find(b => b.id === "ingilizce-ev-yapimi-pizza-hamuru-tarifi"),
      ingBlock: pizzaData.contentBlocks.find(b => b.id === "ev-yapimi-pizza-hamuru-malzemeleri"),
      stepBlock: pizzaData.contentBlocks.find(b => b.id === "ev-yapimi-pizza-hamuru-adimlari"),
      img: "/blog/ingilizce-tarifler/images/pizza-dough.webp",
      titleEn: "Homemade Pizza Dough Recipe",
      titleTr: "Ev Yapımı Pizza Hamuru Tarifi",
      metaTime: "30 dakika",
      metaServings: "4 kişilik",
      metaCount: "5 malzeme"
    },
    {
      block: pizzaData.contentBlocks.find(b => b.id === "ingilizce-margarita-pizza-tarifi"),
      ingBlock: pizzaData.contentBlocks.find(b => b.id === "margarita-pizza-malzemeleri"),
      stepBlock: pizzaData.contentBlocks.find(b => b.id === "margarita-pizza-adimlari"),
      img: "/blog/ingilizce-tarifler/images/pizza-margherita.webp",
      titleEn: "Margherita Pizza Recipe",
      titleTr: "Margarita Pizza Tarifi",
      metaTime: "22 dakika",
      metaServings: "2-3 kişilik",
      metaCount: "4 malzeme"
    },
    {
      block: pizzaData.contentBlocks.find(b => b.id === "ingilizce-karisik-pizza-tarifi"),
      ingBlock: pizzaData.contentBlocks.find(b => b.id === "karisik-pizza-malzemeleri"),
      stepBlock: pizzaData.contentBlocks.find(b => b.id === "karisik-pizza-adimlari"),
      img: "/blog/ingilizce-tarifler/images/pizza-supreme.webp",
      titleEn: "Supreme Pizza Recipe",
      titleTr: "Karışık Pizza Tarifi",
      metaTime: "30 dakika",
      metaServings: "4 kişilik",
      metaCount: "6 malzeme"
    },
    {
      block: pizzaData.contentBlocks.find(b => b.id === "ingilizce-tavada-pizza-tarifi"),
      ingBlock: pizzaData.contentBlocks.find(b => b.id === "tavada-pizza-malzemeleri"),
      stepBlock: pizzaData.contentBlocks.find(b => b.id === "tavada-pizza-adimlari"),
      img: "/blog/ingilizce-tarifler/images/pizza-pan.webp",
      titleEn: "Pan Pizza Recipe",
      titleTr: "Tavada Pizza Tarifi",
      metaTime: "22 dakika",
      metaServings: "2 kişilik",
      metaCount: "5 malzeme"
    }
  ];

  const fixedStepBlock = pizzaData.contentBlocks.find(b => b.id === "homemade-pizza-adim-adim-nasil-yapilir");
  const grammarBlock = pizzaData.contentBlocks.find(b => b.id === "ingilizce-pizza-tarifi-dil-kurallari");
  const imperativeBlock = pizzaData.contentBlocks.find(b => b.id === "pizza-emir-kipi");
  const seqBlock = pizzaData.contentBlocks.find(b => b.id === "baglaclar-ve-sira-zarflari");
  const overviewTbl = pizzaData.page.overviewVariationsTable;

  root.innerHTML = `<article class="pasta-guide">
    <div class="reading-progress" aria-hidden="true"><span></span></div>
    <header class="hero">
      <div class="hero-copy">
        <p class="eyebrow">RECIPES & COOKING GUIDE (İNGİLİZCE YEMEK TARİFLERİ)</p>
        <h1>İngilizce Pizza Tarifi (Pizza Yapılışı İngilizce)</h1>
        <aside class="course-banner" aria-label="İngilizce kursu">
          <div class="course-banner-text">
            <small class="cta-eyebrow">KONUŞARAK ÖĞREN İNGİLİZCE KURSU</small>
            <strong class="cta-heading">İngilizceyi tarif ezberleyerek değil, konuşarak öğrenin.</strong>
          </div>
          <button class="cta-btn cta-btn-orange" onclick="window.location.href='https://student.konusarakogren.com/auth/register'">Ücretsiz tanışma dersi <span class="arrow">→</span></button>
        </aside>
        <p class="lede"><strong>${pizzaData.page.introEnglish}</strong> / ${pizzaData.page.introTurkish}</p>
        <address class="article-meta" rel="author"><span class="author-mark" aria-hidden="true">KO</span><span><strong>Konuşarak Öğren Editör Ekibi</strong><small>İngilizce seviyesi: A1–A2 · Yayınlanma: <time datetime="2026-09-06">6 Eylül 2026</time></small></span></address>
      </div>
      <figure class="hero-visual">
        <img src="/blog/ingilizce-tarifler/images/pizza-hero.webp" alt="Taze fırınlanmış ev yapımı İtalyan pizzası" loading="eager" fetchpriority="high">
        <figcaption><strong>Homemade Italian Pizza Recipe</strong><span>Fırından yeni çıkmış çıtır kenarlı otantik ev yapımı pizza.</span></figcaption>
      </figure>
      <aside class="hero-card pasta-facts" aria-label="Tarif özeti">
        <table class="recipe-facts">
          <caption>Pizza tarifi özeti</caption>
          <thead><tr><th scope="col">Hazırlık</th><th scope="col">Pişirme</th><th scope="col">Porsiyon</th><th scope="col">Seviye</th></tr></thead>
          <tbody><tr><td><span class="fact-value" tabindex="0">20 dakika</span></td><td><span class="fact-value" tabindex="0">15 dakika</span></td><td><span class="fact-value" tabindex="0">4 kişilik</span></td><td><span class="fact-value" tabindex="0">A1–A2</span></td></tr></tbody>
        </table>
      </aside>
      <div class="hero-overview-table" id="definition-variations">
        <p class="eyebrow">DEFINITION &amp; VARIATIONS (TANIM VE ÇEŞİTLER KARŞILAŞTIRMASI)</p>
        <h2 class="definition-heading">İngilizce Pizza Tarifi Çeşitleri, Malzemeleri ve Adımları</h2>
        <p class="section-intro"><strong>İngilizce ve Türkçe Pizza Çeşitleri Karşılaştırması</strong>: ${overviewTbl?.intro || ""}</p>
        ${overviewTbl ? table(overviewTbl.headers, overviewTbl.rows, overviewTbl.caption) : ""}
      </div>
    </header>

    <div class="page-grid">
      <nav class="toc" aria-label="İçindekiler">
        <a href="/blog/ingilizce-tarifler/pizza#kavramlar" data-scroll-target="kavramlar">Kavramlar</a>
        <a href="/blog/ingilizce-tarifler/pizza#tarifler" data-scroll-target="tarifler">Tarifler</a>
        <a href="/blog/ingilizce-tarifler/pizza#sade-pizza" data-scroll-target="sade-pizza">7 Adım</a>
        <a href="/blog/ingilizce-tarifler/pizza#malzemeler-ve-ekipman" data-scroll-target="malzemeler-ve-ekipman">Malzemeler</a>
        <a href="/blog/ingilizce-tarifler/pizza#besin-degerleri" data-scroll-target="besin-degerleri">Besin değerleri</a>
        <a href="/blog/ingilizce-tarifler/pizza#farklar" data-scroll-target="farklar">Farklar &amp; Köken</a>
        <a href="/blog/ingilizce-tarifler/pizza#olculer" data-scroll-target="olculer">Ölçüler</a>
        <a href="/blog/ingilizce-tarifler/pizza#dil-kurallari" data-scroll-target="dil-kurallari">Dil kuralları</a>
        <a href="/blog/ingilizce-tarifler/pizza#alistirma" data-scroll-target="alistirma">Alıştırma</a>
      </nav>

      <div class="content">
        <section id="kavramlar">
          <p class="eyebrow">CORE CONCEPTS & VOCABULARY (TEMEL KAVRAMLAR VE ADLANDIRMALAR)</p>
          <h2>${pizzaData.contentBlocks[0].heading}</h2>
          <aside class="app-banner"><div class="app-icon" aria-hidden="true"><img src="ko-logo-papagan.png" alt="Konuşarak Öğren Logo" /></div><div class="app-banner-text"><small class="cta-eyebrow">KONUŞARAK ÖĞREN UYGULAMASI</small><strong class="cta-heading">Her gün 10 dakika konuşma pratiğini cebinize alın.</strong></div><div class="app-actions"><a href="https://apps.apple.com/tr/app/konu%C5%9Farak-%C3%B6%C4%9Fren-i-ngilizce/id1099431274" target="_blank" rel="noopener" class="cta-btn cta-btn-outline">App Store</a><a href="https://play.google.com/store/apps/details?id=com.konusarakogren.m.konusarakogrenmobil&hl=tr" target="_blank" rel="noopener" class="cta-btn cta-btn-blue">Google Play</a></div></aside>
          
          <h3 style="margin-top:2rem;">${pizzaData.contentBlocks[1].heading}</h3>
          <p class="section-intro">${pizzaData.contentBlocks[1].introEnglish} / ${pizzaData.contentBlocks[1].introTurkish}</p>
          ${table(pizzaData.contentBlocks[1].table.headers, pizzaData.contentBlocks[1].table.rows)}

          <h3 style="margin-top:2.5rem;">${pizzaData.contentBlocks[2].heading}</h3>
          <p class="section-intro">${pizzaData.contentBlocks[2].introEnglish} / ${pizzaData.contentBlocks[2].introTurkish}</p>
          ${table(pizzaData.contentBlocks[2].table.headers, pizzaData.contentBlocks[2].table.rows)}
        </section>

        <div id="tarifler" class="recipe-chapters">
          <div class="chapter-intro">
            <p class="eyebrow">4 PIZZA VARIATIONS (4 PİZZA ÇEŞİDİ)</p>
            <p class="section-intro">Ev yapımı pizza hamuru, klasik margarita, karışık ve tavada pizza tarifleri İngilizce malzemeleri, görsel kartları ve adım adım pişirme yönergeleriyle aşağıda verilmiştir. Başlıklara tıklayarak detayları açabilirsiniz.</p>
          </div>
          ${pizzaChapters.map((c, i) => `
            <section class="recipe-chapter">
              <div class="chapter-head">
                <span class="variant-number">${String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h2>${c.block.heading}</h2>
                  <p><strong>${c.block.introEnglish}</strong> / ${c.block.introTurkish}</p>
                  <div class="chapter-meta">
                    <span>${c.metaTime}</span>
                    <span>${c.metaServings}</span>
                    <span>${c.metaCount}</span>
                  </div>
                </div>
              </div>
              <figure><img src="${c.img}" alt="${c.titleEn}" loading="lazy"><figcaption><strong>${c.titleEn}</strong><span>${c.titleTr}</span></figcaption></figure>
              <div class="chapter-panels">
                <details class="learning-panel" ${i === 0 ? "open" : ""}><summary><h3>${c.ingBlock.heading}</h3><span>Malzeme kartları &amp; tablosu</span></summary>
                  <div class="panel-body">
                    <p class="section-intro">${c.ingBlock.introEnglish} / ${c.ingBlock.introTurkish}</p>
                    ${table(c.ingBlock.table.headers, c.ingBlock.table.rows)}
                    <h4 style="margin: 24px 0 12px 0; font-size: 16px; color: var(--ko-dark);">Malzeme Kartları (Ingredient Cards):</h4>
                    <div class="ingredient-grid">
                      ${(c.ingBlock.cards || []).map(card => `
                        <article class="ingredient-card">
                          <div class="ingredient-card-header">
                            <div class="ingredient-thumb"><span class="ingredient-icon">${card.icon || "🍕"}</span></div>
                            <span class="quantity-badge">${card.quantity || ""}</span>
                          </div>
                          <h4>${card.name} <small>(${card.trName})</small></h4>
                          <p class="card-en">${card.enDesc}</p>
                          <p class="card-tr">${card.trDesc}</p>
                        </article>
                      `).join("")}
                    </div>
                  </div>
                </details>
                <details class="learning-panel"><summary><h3>${c.stepBlock.heading}</h3><span>Adım adım yapılışı göster</span></summary>
                  <div class="panel-body">
                    <p class="section-intro">${c.stepBlock.introEnglish} / ${c.stepBlock.introTurkish}</p>
                    <ol class="compact-steps">
                      ${c.stepBlock.steps.map(s => `
                        <li>
                          <span class="step-num-badge">${s.num}</span>
                          <div class="step-body">
                            <p class="en-text"><strong>${s.enText}</strong></p>
                            <p class="tr-text">${s.trText}</p>
                          </div>
                        </li>
                      `).join("")}
                    </ol>
                  </div>
                </details>
              </div>
            </section>
          `).join("")}
        </div>

        <section id="sade-pizza">
          <p class="eyebrow">7-STEP HOMEMADE PIZZA GUIDE (7 ADIMDA EV YAPIMI PİZZA REHBERİ)</p>
          <h2>${fixedStepBlock.heading}</h2>
          <p class="section-intro">${fixedStepBlock.introEnglish} / ${fixedStepBlock.introTurkish}</p>
          ${buildStepAccordionHTML(fixedStepBlock.steps.map((s, idx) => {
            const titleClean = s.title.replace(/^\d+\.\s*/, '');
            const m = titleClean.match(/^(.*?)\s*\((.*?)\)$/);
            const titleEn = m ? m[1].trim() : titleClean;
            const titleTr = m ? m[2].trim() : ('Adım ' + (idx + 1));
            const words = s.enText.split(' ');
            const actionEn = words[0];
            return {
              number: idx + 1,
              titleEn: titleEn,
              titleTr: titleTr,
              sentenceEn: s.enText,
              sentenceTr: s.trText,
              actionEn: actionEn,
              actionTr: 'Mutfak Eylemi'
            };
          }))}
        </section>

        <section id="malzemeler-ve-ekipman">
          <p class="eyebrow">INGREDIENTS & EQUIPMENT (MALZEME VE EKİPMAN LİSTESİ)</p>
          <h2>${pizzaData.contentBlocks[16].heading}</h2>
          <p class="section-intro">${pizzaData.contentBlocks[16].introEnglish} / ${pizzaData.contentBlocks[16].introTurkish}</p>
          ${table(pizzaData.contentBlocks[16].table.headers, pizzaData.contentBlocks[16].table.rows)}

          <h3 style="margin-top:2.5rem;">${pizzaData.contentBlocks[17].heading}</h3>
          <p class="section-intro">${pizzaData.contentBlocks[17].introEnglish} / ${pizzaData.contentBlocks[17].introTurkish}</p>
          ${table(pizzaData.contentBlocks[17].table.headers, pizzaData.contentBlocks[17].table.rows)}
        </section>

        <section id="besin-degerleri">
          <p class="eyebrow">CALORIES & NUTRITION (KALORİ VE BESİN ANALİZİ)</p>
          <h2>${pizzaData.contentBlocks[18].heading}</h2>
          <p class="section-intro">${pizzaData.contentBlocks[18].introEnglish} / ${pizzaData.contentBlocks[18].introTurkish}</p>
          ${table(pizzaData.contentBlocks[18].table.headers, pizzaData.contentBlocks[18].table.rows)}

          <h3 style="margin-top:2.5rem;">${pizzaData.contentBlocks[19].heading}</h3>
          <p class="section-intro">${pizzaData.contentBlocks[19].introEnglish} / ${pizzaData.contentBlocks[19].introTurkish}</p>
          ${table(pizzaData.contentBlocks[19].table.headers, pizzaData.contentBlocks[19].table.rows)}
        </section>

        <section id="farklar">
          <p class="eyebrow">DOUGH STYLES & PIZZA HISTORY (HAMUR STİLLERİ VE PİZZA TARİHİ)</p>
          <h2>${pizzaData.contentBlocks[20].heading}</h2>
          <p class="section-intro">${pizzaData.contentBlocks[20].introEnglish} / ${pizzaData.contentBlocks[20].introTurkish}</p>
          ${table(pizzaData.contentBlocks[20].table.headers, pizzaData.contentBlocks[20].table.rows)}

          <h3 style="margin-top:2.5rem;">${pizzaData.contentBlocks[21].heading}</h3>
          <p class="section-intro">${pizzaData.contentBlocks[21].introEnglish} / ${pizzaData.contentBlocks[21].introTurkish}</p>
          ${table(pizzaData.contentBlocks[21].table.headers, pizzaData.contentBlocks[21].table.rows)}
        </section>

        <section id="olculer">
          <p class="eyebrow">MEASUREMENT UNITS & VOCABULARY (ÖLÇÜ BİRİMLERİ VE KELİMELER)</p>
          <h2>${pizzaData.contentBlocks[22].heading}</h2>
          <p class="section-intro">${pizzaData.contentBlocks[22].introEnglish} / ${pizzaData.contentBlocks[22].introTurkish}</p>
          ${table(pizzaData.contentBlocks[22].table.headers, pizzaData.contentBlocks[22].table.rows)}

          <h3 style="margin-top:2.5rem;">${pizzaData.contentBlocks[23].heading}</h3>
          <p class="section-intro">${pizzaData.contentBlocks[23].introEnglish} / ${pizzaData.contentBlocks[23].introTurkish}</p>
          ${table(pizzaData.contentBlocks[23].table.headers, pizzaData.contentBlocks[23].table.rows)}

          <h3 style="margin-top:2.5rem;">${pizzaData.contentBlocks[24].heading}</h3>
          <p class="section-intro">${pizzaData.contentBlocks[24].introEnglish} / ${pizzaData.contentBlocks[24].introTurkish}</p>
          ${table(pizzaData.contentBlocks[24].table.headers, pizzaData.contentBlocks[24].table.rows)}

          <h3 style="margin-top:2.5rem;">${pizzaData.contentBlocks[25].heading}</h3>
          <p class="section-intro">${pizzaData.contentBlocks[25].introEnglish} / ${pizzaData.contentBlocks[25].introTurkish}</p>
          ${table(pizzaData.contentBlocks[25].table.headers, pizzaData.contentBlocks[25].table.rows)}
        </section>

        <section id="dil-kurallari">
          <p class="eyebrow">RECIPE GRAMMAR & USAGE RULES (TARİF DİL BİLGİSİ VE ANLATIM KURALLARI)</p>
          <h2>${pizzaData.contentBlocks[26].heading}</h2>
          <p class="section-intro">${pizzaData.contentBlocks[26].introEnglish} / ${pizzaData.contentBlocks[26].introTurkish}</p>

          <div class="grammar-tabs">
            <div class="tab-list" role="tablist">
              <button role="tab" id="pizza-tab-overview" aria-selected="true" onclick="window.switchGrammarTab('pizza-panel-overview', this)">
                <span>01</span> Genel kurallar
              </button>
              <button role="tab" id="pizza-tab-imperative" aria-selected="false" onclick="window.switchGrammarTab('pizza-panel-imperative', this)">
                <span>02</span> Emir kipi
              </button>
              <button role="tab" id="pizza-tab-sequence" aria-selected="false" onclick="window.switchGrammarTab('pizza-panel-sequence', this)">
                <span>03</span> Sıra zarfları
              </button>
            </div>
            <div class="tab-panels">
              <div class="tab-panel" id="pizza-panel-overview">
                <p class="section-intro">English recipe writing relies on four core grammatical conventions: / İngilizce tarif yazımı dört temel dil kuralına dayanır:</p>
                ${table(grammarBlock.table.headers, grammarBlock.table.rows)}
              </div>
              <div class="tab-panel" id="pizza-panel-imperative" hidden>
                <h3 style="margin-top:0.5rem;">${imperativeBlock.heading}</h3>
                <p class="section-intro">${imperativeBlock.introEnglish} / ${imperativeBlock.introTurkish}</p>
                ${table(imperativeBlock.table.headers, imperativeBlock.table.rows)}
                ${imperativeBlock.negativeImperative ? `<aside class="negative-imperative-box"><p>${imperativeBlock.negativeImperative.en}</p><p style="margin-top:6px; color:#c2410c;">${imperativeBlock.negativeImperative.tr}</p></aside>` : ""}
              </div>
              <div class="tab-panel" id="pizza-panel-sequence" hidden>
                <h3 style="margin-top:0.5rem;">${seqBlock.heading}</h3>
                <p class="section-intro">${seqBlock.introEnglish} / ${seqBlock.introTurkish}</p>
                ${table(seqBlock.table.headers, seqBlock.table.rows)}
                ${seqBlock.sequenceParagraph ? `<div class="bilingual-sequence-card"><div class="sequence-en">${seqBlock.sequenceParagraph.en}</div><div class="sequence-tr">${seqBlock.sequenceParagraph.tr}</div></div>` : ""}
              </div>
            </div>
          </div>
        </section>

        <section id="alistirma">
          <div class="exercise">
            <p class="eyebrow">8TH GRADE PRACTICE & QUIZ (8. SINIF QUIZ VE ALIŞTIRMALAR)</p>
            <h2>${pizzaData.contentBlocks[29].heading}</h2>
            <p class="section-intro">${pizzaData.contentBlocks[29].introEnglish} / ${pizzaData.contentBlocks[29].introTurkish}</p>
            <ol style="margin-top:20px; padding-left:20px;">
              ${pizzaData.contentBlocks[29].exercises.map(ex => `
                <li style="margin-bottom:24px;">
                  <p style="font-size:16px; font-weight:700; color:var(--ko-dark); margin:0 0 8px 0;">${ex.num}. ${ex.question}</p>
                  <p style="color:#64748b; font-size:13px; margin:0 0 8px 0;">${ex.questionTr}</p>
                  <ul class="quiz-options">
                    ${ex.options.map(opt => `
                      <li class="quiz-option ${opt.startsWith(ex.answer.slice(0, 2)) || opt === ex.answer ? 'correct' : ''}" onclick="this.classList.toggle('correct')">
                        ${opt} ${opt.startsWith(ex.answer.slice(0, 2)) || opt === ex.answer ? '✓' : ''}
                      </li>
                    `).join("")}
                  </ul>
                </li>
              `).join("")}
            </ol>
            <details class="answer-key">
              <summary>Cevap Anahtarını Göster</summary>
              <div class="key-content">
                <ol style="margin:0; padding-left:20px;">
                  ${pizzaData.contentBlocks[29].exercises.map(ex => `
                    <li><strong>${ex.num}. Soru: ${ex.answer}</strong> — ${ex.explanation}</li>
                  `).join("")}
                </ol>
              </div>
            </details>
          </div>
        </section>

        ${getMidPageCTAHTML()}
        ${getRelatedRecipesHTML("pizza")}
      </div>
    </div>
  </article>`;
}

function renderMenemenPage() {
  document.title = "İngilizce Menemen Tarifi (Menemen Yapılışı İngilizce) | Konuşarak Öğren";
  setStructuredData({
    "@context": "https://schema.org", "@type": "Recipe",
    name: "İngilizce Menemen Tarifi (Menemen Yapılışı İngilizce)",
    image: ["/blog/ingilizce-tarifler/images/menemen-hero.webp"],
    author: { "@type": "Organization", name: "Konuşarak Öğren" },
    datePublished: "2026-09-03",
    description: "İngilizce Menemen tarifi; klasik, soğanlı, peynirli ve sucuklu menemen çeşitleri, malzemeleri ve 6 pişirme adımı.",
    prepTime: "PT5M", cookTime: "PT15M", totalTime: "PT20M", recipeYield: "2 porsiyon",
    recipeCategory: "Kahvaltı", recipeCuisine: "Türk Mutfağı",
    nutrition: { "@type": "NutritionInformation", calories: "220 calories" },
    recipeIngredient: ["2 eggs", "2 ripe tomatoes", "2 green peppers", "2 tbsp olive oil", "1 pinch salt and pepper"],
    recipeInstructions: [
      { "@type": "HowToStep", position: 1, name: "1. Chop the Green Peppers and Tomatoes", text: "Chop 2 green peppers into thin rings and dice 2 ripe tomatoes into small cubes." },
      { "@type": "HowToStep", position: 2, name: "2. Saute the Peppers in Olive Oil", text: "Heat 2 tablespoons of olive oil in a skillet and saute the chopped peppers for 3 minutes." },
      { "@type": "HowToStep", position: 3, name: "3. Add the Tomatoes and Cook for 10 Minutes", text: "Add the diced tomatoes to the pan and cook over medium heat for 10 minutes." },
      { "@type": "HowToStep", position: 4, name: "4. Crack the Eggs into the Pan", text: "Crack 2 fresh eggs directly into the simmering tomato and pepper sauce." },
      { "@type": "HowToStep", position: 5, name: "5. Stir the Eggs Gently on Low Heat", text: "Stir the egg whites gently on low heat for 2 minutes while leaving the yolks slightly soft." },
      { "@type": "HowToStep", position: 6, name: "6. Season the Menemen and Serve with Bread", text: "Season with 1 pinch of salt and pepper, remove from heat, and serve immediately with fresh crusty bread." }
    ]
  });

  const menemenChapters = menemenData.contentBlocks.filter(b => b.componentType === "recipe-chapter");
  const fixedStepBlock = menemenData.contentBlocks.find(b => b.id === "classic-menemen-adim-adim-nasil-yapilir");
  const vocab10Block = menemenData.contentBlocks.find(b => b.id === "menemen-mutfak-kelimeleri");
  const shakshukaBlock = menemenData.contentBlocks.find(b => b.id === "menemen-vs-shakshuka");
  const grammarBlock = menemenData.contentBlocks.find(b => b.id === "ingilizce-menemen-tarifi-dil-kurallari");
  const imperativeBlock = menemenData.contentBlocks.find(b => b.id === "menemen-emir-kipi");
  const seqBlock = menemenData.contentBlocks.find(b => b.id === "baglaclar-ve-sira-zarflari");
  const overviewTbl = menemenData.page.overviewVariationsTable;

  root.innerHTML = `<article class="pasta-guide">
    <div class="reading-progress" aria-hidden="true"><span></span></div>
    <header class="hero">
      <div class="hero-copy">
        <p class="eyebrow">RECIPES & COOKING GUIDE (İNGİLİZCE YEMEK TARİFLERİ)</p>
        <h1>İngilizce Menemen Tarifi (Menemen Yapılışı İngilizce)</h1>
        <aside class="course-banner" aria-label="İngilizce kursu">
          <div class="course-banner-text">
            <small class="cta-eyebrow">KONUŞARAK ÖĞREN İNGİLİZCE KURSU</small>
            <strong class="cta-heading">İngilizceyi tarif ezberleyerek değil, konuşarak öğrenin.</strong>
          </div>
          <button class="cta-btn cta-btn-orange" onclick="window.location.href='https://student.konusarakogren.com/auth/register'">Ücretsiz tanışma dersi <span class="arrow">→</span></button>
        </aside>
        <p class="lede"><strong>Menemen is a Turkish egg dish made by cooking tomatoes and green peppers in olive oil, then gently stirring in eggs.</strong> / Menemen; domates ve yeşil biberin zeytinyağında pişirilip yumurtayla nazikçe karıştırılmasıyla hazırlanan bir Türk yumurta yemeğidir.</p>
        <address class="article-meta" rel="author"><span class="author-mark" aria-hidden="true">KO</span><span><strong>Konuşarak Öğren Editör Ekibi</strong><small>İngilizce seviyesi: A1–A2 · Yayınlanma: <time datetime="2026-09-03">3 Eylül 2026</time></small></span></address>
      </div>
      <figure class="hero-visual">
        <img src="/blog/ingilizce-tarifler/images/menemen-hero.webp" alt="Servis tabağında sıcak klasik Menemen" loading="eager" fetchpriority="high">
        <figcaption><strong>Classic Menemen Recipe</strong><span>Taze ekmekle tavada sıcak servis edilen Türk Menemeni.</span></figcaption>
      </figure>
      <aside class="hero-card pasta-facts" aria-label="Tarif özeti">
        <table class="recipe-facts">
          <caption>Menemen tarifi özeti</caption>
          <thead><tr><th scope="col">Hazırlık</th><th scope="col">Pişirme</th><th scope="col">Porsiyon</th><th scope="col">Seviye</th></tr></thead>
          <tbody><tr><td><span class="fact-value" tabindex="0">5 dakika</span></td><td><span class="fact-value" tabindex="0">15 dakika</span></td><td><span class="fact-value" tabindex="0">2 kişilik</span></td><td><span class="fact-value" tabindex="0">A1–A2</span></td></tr></tbody>
        </table>
      </aside>
      <div class="hero-overview-table" id="definition-variations">
        <p class="eyebrow">DEFINITION &amp; VARIATIONS (TANIM VE ÇEŞİTLER KARŞILAŞTIRMASI)</p>
        <h2 class="definition-heading">İngilizce Menemen Tarifi Çeşitleri, Malzemeleri ve Adımları</h2>
        <p class="section-intro"><strong>İngilizce ve Türkçe Menemen Çeşitleri Karşılaştırması</strong>: ${overviewTbl?.intro || "Aşağıdaki tabloda 4 temel menemen çeşidinin İngilizce isimlerini, ana malzemelerini ve temel pişirme adımlarını karşılaştırmalı olarak inceleyebilirsiniz."}</p>
        ${overviewTbl ? table(overviewTbl.headers, overviewTbl.rows, overviewTbl.caption) : ""}
      </div>
    </header>

    <div class="page-grid">
      <nav class="toc" aria-label="İçindekiler">
        <a href="/blog/ingilizce-tarifler/menemen#kavramlar" data-scroll-target="kavramlar">Kavramlar</a>
        <a href="/blog/ingilizce-tarifler/menemen#tarifler" data-scroll-target="tarifler">Tarifler</a>
        <a href="/blog/ingilizce-tarifler/menemen#sade-menemen" data-scroll-target="sade-menemen">Adımlar</a>
        <a href="/blog/ingilizce-tarifler/menemen#malzemeler-ve-ekipman" data-scroll-target="malzemeler-ve-ekipman">Malzemeler</a>
        <a href="/blog/ingilizce-tarifler/menemen#besin-degerleri" data-scroll-target="besin-degerleri">Besin değerleri</a>
        <a href="/blog/ingilizce-tarifler/menemen#karsilastirma" data-scroll-target="karsilastirma">Karşılaştırma</a>
        <a href="/blog/ingilizce-tarifler/menemen#olculer" data-scroll-target="olculer">Ölçüler</a>
        <a href="/blog/ingilizce-tarifler/menemen#dil-kurallari" data-scroll-target="dil-kurallari">Dil kuralları</a>
        <a href="/blog/ingilizce-tarifler/menemen#alistirma" data-scroll-target="alistirma">Alıştırma</a>
      </nav>

      <div class="content">
        <section id="kavramlar">
          <p class="eyebrow">CORE CONCEPTS & VOCABULARY (TEMEL KAVRAMLAR VE ADLANDIRMALAR)</p>
          <h2>İngilizce Menemen Tarifinde Kullanılan Temel Kavramlar ve Adlandırmalar</h2>
          <aside class="app-banner"><div class="app-icon" aria-hidden="true"><img src="ko-logo-papagan.png" alt="Konuşarak Öğren Logo" /></div><div class="app-banner-text"><small class="cta-eyebrow">KONUŞARAK ÖĞREN UYGULAMASI</small><strong class="cta-heading">Her gün 10 dakika konuşma pratiğini cebinize alın.</strong></div><div class="app-actions"><a href="https://apps.apple.com/tr/app/konu%C5%9Farak-%C3%B6%C4%9Fren-i-ngilizce/id1099431274" target="_blank" rel="noopener" class="cta-btn cta-btn-outline">App Store</a><a href="https://play.google.com/store/apps/details?id=com.konusarakogren.m.konusarakogrenmobil&hl=tr" target="_blank" rel="noopener" class="cta-btn cta-btn-blue">Google Play</a></div></aside>
          
          <h3 style="margin-top:2rem;">Menemen Terimleri ve Anlamları</h3>
          <p class="section-intro">Six basic terms help readers understand the recipe structure and the cooking technique used for menemen. / Altı temel terim, menemen tarifinin yapısını ve pişirme tekniğini anlamayı kolaylaştırır.</p>
          ${table(["English Term", "Türkçe Karşılığı", "Tanım ve Tarif Bağlantısı"], menemenData.contentBlocks[1].table.rows)}

          <h3 style="margin-top:2.5rem;">Menemen İngilizce Nasıl Tanıtılır? Turkish-Style Scrambled Eggs Kullanımı</h3>
          <p class="section-intro">Menemen has no exact one-word English equivalent, so English-language sources usually keep the name menemen and explain it as Turkish-style scrambled eggs with tomatoes and peppers. / Menemenin İngilizcede birebir tek kelimelik bir karşılığı yoktur; bu nedenle İngilizce kaynaklar genellikle menemen adını korur ve yemeği domatesli ve biberli Türk usulü çırpılmış yumurta olarak açıklar.</p>
          ${table(["Adlandırma (English Term)", "Kaynak Türü", "Açıklama"], menemenData.contentBlocks[2].table.rows)}

          <h3 style="margin-top:2.5rem;">İngilizce Tarif Yazımında Kullanılan Fiiller: Chop, Saute, Stir, Crack</h3>
          <p class="section-intro">Core action verbs describe how to prepare, cook, and combine the ingredients in an English recipe. / Temel eylem fiilleri, bir İngilizce tarifte malzemelerin nasıl hazırlanacağını, pişirileceğini ve birleştirileceğini açıklar.</p>
          ${table(["Verb (Fiil)", "Türkçe Karşılığı", "Example Sentence"], menemenData.contentBlocks[3].table.rows)}
        </section>

        <div id="tarifler" class="recipe-chapters">
          <div class="chapter-intro">
            <p class="eyebrow">4 MENEMEN VARIATIONS (4 MENEMEN ÇEŞİDİ)</p>
            <p class="section-intro">Klasik, soğanlı, peynirli ve sucuklu menemen tarifleri İngilizce malzemeleri, görsel kartları ve adım adım pişirme yönergeleriyle aşağıda verilmiştir. Başlıklara tıklayarak panelleri açabilirsiniz.</p>
          </div>
          ${menemenChapters.map((v, i) => `<section class="recipe-chapter">
            <div class="chapter-head">
              <span class="variant-number">${String(i + 1).padStart(2, "0")}</span>
              <div>
                <h2>${v.heading}</h2>
                <p><strong>${v.definitionEnglish || ""}</strong> / ${v.definitionTurkish || ""}</p>
                <div class="chapter-meta">
                  <span>${i === 0 ? "25 dakika" : "28 dakika"}</span>
                  <span>2 kişilik</span>
                  <span>${i === 0 ? "7 malzeme" : "8 malzeme"}</span>
                </div>
              </div>
            </div>
            <figure><img src="${v.image.src}" alt="${v.image.alt}" loading="lazy"><figcaption><strong>${v.englishTitle}</strong><span>${v.turkishTitle}</span></figcaption></figure>
            <div class="chapter-panels">
              <details class="learning-panel" ${i === 0 ? "open" : ""}><summary><h3>${v.ingredients.heading}</h3><span>Malzeme kartları & tablosu</span></summary>
                <div class="panel-body">
                  <p class="section-intro">This recipe uses ${i === 0 ? 7 : 8} ingredients, and eggs are the main ingredient. / Bu tarifte ${i === 0 ? 7 : 8} malzeme kullanılır ve ana malzeme yumurtadır.</p>
                  ${table(v.ingredients.headers, v.ingredients.rows)}
                  <h4 style="margin: 24px 0 12px 0; font-size: 16px; color: var(--ko-dark);">Malzeme Kartları (Ingredient Cards):</h4>
                  <div class="ingredient-grid">
                    ${(v.ingredientCards || []).map(c => `
                      <article class="ingredient-card">
                        <div class="ingredient-card-header">
                          <div class="ingredient-thumb"><span class="ingredient-icon">${c.icon || "🍳"}</span></div>
                          <span class="quantity-badge">${c.quantity || ""}</span>
                        </div>
                        <h4>${c.en} <small>(${c.tr})</small></h4>
                        <p class="card-en">${c.sentenceEn}</p>
                        <p class="card-tr">${c.sentenceTr}</p>
                      </article>
                    `).join("")}
                  </div>
                </div>
              </details>
              <details class="learning-panel"><summary><h3>${v.instructions.heading}</h3><span>6 adımı göster</span></summary>
                <div class="panel-body">
                  <p class="section-intro">This recipe has 6 steps and takes ${i === 0 ? "25 dakika" : "28 dakika"}. / Bu tarif 6 adımdan oluşur ve ${i === 0 ? "25 dakika" : "28 dakika"} sürer.</p>
                  <ol class="compact-steps">
                    ${(v.compactSteps || []).map(s => `
                      <li>
                        <span class="step-num-badge">${s.number}. adım</span>
                        <div class="step-body">
                          <p class="en-text"><strong>${s.en}</strong></p>
                          <p class="tr-text">${s.tr}</p>
                        </div>
                      </li>
                    `).join("")}
                  </ol>
                </div>
              </details>
            </div>
          </section>`).join("")}
        </div>

        <section id="sade-menemen">
          <div class="steps-heading">
            <p class="eyebrow">6-STEP CLASSIC MENEMEN GUIDE (6 ADIMDA KLASİK MENEMEN REHBERİ)</p>
            <h2>Classic Menemen İngilizce Adım Adım Nasıl Yapılır? (How Do You Make Classic Menemen Step by Step?)</h2>
            <p class="section-intro">Classic menemen is prepared in exactly 6 steps, with the English instruction followed immediately by its Turkish explanation. / Klasik menemen tam olarak 6 adımda hazırlanır; İngilizce talimatın hemen ardından Türkçe açıklama verilir.</p>
            <div class="steps-meta"><span>6 adım</span><span>15 dakika</span><span>A1–A2 seviye</span></div>
          </div>
          ${buildStepAccordionHTML(fixedStepBlock.list.items.map((s, idx) => {
            const m = s.heading.match(/^(.*?)\s*\((.*?)\)$/);
            const titleEn = m ? m[1].trim() : s.heading;
            const titleTr = m ? m[2].trim() : ('Adım ' + (idx + 1));
            const words = s.english.split(' ');
            const actionEn = words[0];
            return {
              number: idx + 1,
              titleEn: titleEn,
              titleTr: titleTr,
              sentenceEn: s.english,
              sentenceTr: s.turkish,
              actionEn: actionEn,
              actionTr: 'Mutfak Eylemi'
            };
          }))}
          <p class="section-intro" style="margin-top:20px;">Here is the complete bilingual summary table of all 6 steps for reference. / İşte başvuru için 6 adımın tamamının iki dilli özet tablosu:</p>
          ${table(["Step", "English Instruction", "Türkçe Açıklama"], fixedStepBlock.list.summaryTable.rows)}
        </section>

        <section id="malzemeler-ve-ekipman">
          <p class="eyebrow">INGREDIENTS & EQUIPMENT (MALZEME VE EKİPMAN LİSTESİ)</p>
          <h2>Which Ingredients Make a Traditional Menemen? (Geleneksel Menemeni Hangi Malzemeler Oluşturur?)</h2>
          <p class="section-intro">Traditional menemen combines eggs with tomatoes and green peppers cooked in olive oil. / Geleneksel menemen, yumurtayı zeytinyağında pişirilmiş domates ve yeşil biberle birleştirir.</p>
          ${table(["English Ingredient", "Türkçe Karşılığı", "Quantity (Miktar)"], menemenData.contentBlocks[23].table.rows)}
          
          <h3 style="margin-top:2.5rem;">What Kind of Pan Is Used for Menemen? (Menemen İçin Nasıl Bir Tava Kullanılır?)</h3>
          <p class="section-intro">A wide, shallow skillet helps the vegetables cook evenly and makes the eggs easier to stir. / Geniş ve sığ bir tava, sebzelerin eşit pişmesini ve yumurtaların kolayca karıştırılmasını sağlar.</p>
          ${table(["English Equipment", "Türkçe Karşılığı", "Used In Step"], menemenData.contentBlocks[24].table.rows)}
        </section>

        <section id="besin-degerleri">
          <p class="eyebrow">CALORIES & NUTRITION (KALORİ VE BESİN DEĞERLERİ)</p>
          <h2>How Many Calories Is 1 Serving of Menemen? (1 Porsiyon Menemen Kaç Kalori?)</h2>
          <p class="section-intro">One serving of this classic menemen contains approximately 240 kcal; bu klasik menemenin 1 porsiyonu yaklaşık 240 kcal içerir. Değerler kullanılan yağ miktarına, yumurta boyutuna ve pişmiş verime göre değişebilir.</p>
          ${table(["Serving", "Calories (kcal)", "Açıklama"], menemenData.contentBlocks[25].table.rows)}
          
          <h3 style="margin-top:2.5rem;">What Are the Nutrition Facts of Menemen? (Menemenin Besin Değerleri Nelerdir?)</h3>
          <p class="section-intro">Key nutrients include high-quality protein from eggs and vitamins from fresh tomatoes and peppers. / Temel besin ögeleri, yumurtadan gelen kaliteli proteini ve taze sebzelerden gelen vitaminleri içerir.</p>
          ${table(["Nutrient", "Besin Ögesi", "Amount per 100 g"], menemenData.contentBlocks[26].table.rows)}
        </section>

        <section id="karsilastirma">
          <p class="eyebrow">CULINARY COMPARISONS (YEMEK KARŞILAŞTIRMALARI)</p>
          <h2>Menemen vs Shakshuka: İngilizce Farkları Nasıl Açıklanır?</h2>
          <p class="section-intro">The best-known difference is that menemen usually contains gently stirred eggs, whereas shakshuka usually contains whole eggs poached in tomato sauce. / En bilinen fark, menemende yumurtaların genellikle karıştırılması; shakshukada ise bütün yumurtaların domates sosunda poşe edilmesidir.</p>
          ${table(["Feature", "Menemen", "Shakshuka"], shakshukaBlock.table.rows)}
          
          <h3 style="margin-top:2.5rem;">Menemen Soğanlı mı Soğansız mı? İngilizce Tartışması Nasıl Verilir?</h3>
          <p class="section-intro">Whether menemen should include onion is a well-known culinary debate in Turkey. / Menemenin soğanlı mı soğansız mı yapılacağı Türkiye'de bilinen bir mutfak tartışmasıdır.</p>
          <div class="bilingual">
            <div class="language-card">
              <small>ENGLISH / TÜRKÇE</small>
              <p><strong>I prefer menemen with onion for lunch, because onion gives the sauce a richer flavor.</strong></p>
              <p style="color:#64748b; font-size:14px; margin-top:6px;">Öğle yemeğinde soğanlı menemeni tercih ederim, çünkü soğan sosa daha zengin bir lezzet katar.</p>
            </div>
            <div class="language-card">
              <small>ENGLISH / TÜRKÇE</small>
              <p><strong>Classic breakfast menemen is traditionally made without onion, focusing on sweet tomatoes and fresh peppers.</strong></p>
              <p style="color:#64748b; font-size:14px; margin-top:6px;">Klasik kahvaltı menemeni geleneksel olarak soğansız yapılır; tatlı domates ve taze biber lezzetine odaklanır.</p>
            </div>
          </div>
        </section>

        <section id="olculer">
          <p class="eyebrow">MEASUREMENT UNITS & VOCABULARY (ÖLÇÜ BİRİMLERİ VE KELİMELER)</p>
          <h2>İngilizce Menemen Tariflerinde Kullanılan Ölçü Birimleri Nelerdir?</h2>
          <p class="section-intro">English menemen recipes use the units cup, tablespoon, teaspoon, gram and milliliter. / İngilizce menemen tariflerinde cup, tablespoon, teaspoon, gram ve milliliter ölçü birimleri kullanılır.</p>
          ${table(["English Unit", "Türkçe Karşılığı", "Metric Equivalent"], menemenData.contentBlocks[29].table.rows)}
          
          <h3 style="margin-top:2.5rem;">Menemen Tarif Metninde Geçen Temel İngilizce Mutfak Kelimeleri Nelerdir?</h3>
          <p class="section-intro">These 10 kitchen vocabulary terms appear frequently in Turkish and international egg recipes. / Bu 10 mutfak kelimesi, Türk ve dünya yumurta tariflerinde sıklıkla karşınıza çıkar.</p>
          ${table(["English Term", "Türkçe Karşılığı", "Example Sentence"], vocab10Block.table.rows)}
          
          <h3 style="margin-top:2.5rem;">Tablespoon, Teaspoon, Cup: İngilizce Ölçü Birimlerinin Türkçe Karşılıkları</h3>
          <p class="section-intro">A tablespoon means yemek kaşığı, a teaspoon means çay kaşığı, and a cup means su bardağı in Turkish recipe terminology. / Tarif terminolojisinde tablespoon yemek kaşığı, teaspoon çay kaşığı ve cup su bardağı anlamına gelir.</p>
          ${table(["English Unit", "Türkçe Karşılığı", "Metric Equivalent"], menemenData.contentBlocks[31].table.rows)}
          
          <h3 style="margin-top:2.5rem;">Gram ve Litre İngilizce Tariflerde Nasıl Kullanılır?</h3>
          <p class="section-intro">Gram is abbreviated as g, milliliter as ml, and liter as l in English recipes. / İngilizce tariflerde gram g, mililitre ml ve litre l şeklinde kısaltılır.</p>
          ${table(["Metric Unit", "Imperial Equivalent", "Türkçe Açıklama"], menemenData.contentBlocks[32].table.rows)}
        </section>

        <section id="dil-kurallari">
          <p class="eyebrow">RECIPE GRAMMAR & USAGE RULES (TARİF DİL BİLGİSİ VE ANLATIM KURALLARI)</p>
          <h2>İngilizce Menemen Tarifi Yazarken Dikkat Edilmesi Gereken Dil Kuralları</h2>
          <p class="section-intro">The 4 core language rules of English recipe writing are the imperative mood, sequence adverbs, countable and uncountable nouns, and measurement expressions. / İngilizce tarif yazımının 4 temel dil kuralı emir kipi, sıra zarfları, sayılabilir ve sayılamayan isimler ile ölçü ifadeleridir.</p>
          
          <div class="grammar-tabs">
            <div class="tab-list" role="tablist">
              <button role="tab" id="menemen-tab-overview" aria-selected="true" onclick="window.switchGrammarTab('menemen-panel-overview', this)">
                <span>01</span> Genel kurallar
              </button>
              <button role="tab" id="menemen-tab-imperative" aria-selected="false" onclick="window.switchGrammarTab('menemen-panel-imperative', this)">
                <span>02</span> Emir kipi
              </button>
              <button role="tab" id="menemen-tab-sequence" aria-selected="false" onclick="window.switchGrammarTab('menemen-panel-sequence', this)">
                <span>03</span> Sıra zarfları
              </button>
            </div>
            <div class="tab-panels">
              <div class="tab-panel" id="menemen-panel-overview">
                <p class="section-intro">Here are the 4 essential rules for writing clear, professional English recipes: / Açık ve profesyonel İngilizce tarifler yazmak için 4 temel kural:</p>
                ${grammarBlock && grammarBlock.rulesList ? `<ul style="margin: 16px 0 24px 0; padding-left: 24px; line-height: 1.8; color: #334155;">${grammarBlock.rulesList.map(r => `<li>${r}</li>`).join("")}</ul>` : ""}
                ${table(["Rule", "English Example", "Türkçe Karşılığı"], menemenData.contentBlocks[33].table.rows)}
              </div>
              <div class="tab-panel" id="menemen-panel-imperative" hidden>
                <h3 style="margin-top:0.5rem;">İngilizce Menemen Tarif Metinlerinde Emir Kipi (Imperative) Nasıl Kullanılır?</h3>
                <p class="section-intro">The imperative mood is an instruction form that begins with the base verb and contains no subject. / Emir kipi, fiilin yalın hâliyle başlayan ve özne içermeyen talimat biçimidir.</p>
                ${table(["English Imperative", "Türkçe Karşılığı", "Verb"], menemenData.contentBlocks[34].table.rows)}
                ${imperativeBlock && imperativeBlock.negativeImperative ? `<aside class="negative-imperative-box"><p>${imperativeBlock.negativeImperative.en}</p><p style="margin-top: 6px; color: #7f1d1d;">${imperativeBlock.negativeImperative.tr}</p></aside>` : ""}
              </div>
              <div class="tab-panel" id="menemen-panel-sequence" hidden>
                <h3 style="margin-top:0.5rem;">Bağlaçlar ve Sıra Zarfları: First, Then, After That, Finally</h3>
                <p class="section-intro">First, then, after that, next and finally are sequence adverbs used to order recipe steps. / First, then, after that, next ve finally tarif adımlarını sıralamak için kullanılan sıra zarflarıdır.</p>
                ${table(["Sequence Adverb", "Türkçe Karşılığı", "Example Sentence"], menemenData.contentBlocks[35].table.rows)}
                ${seqBlock && seqBlock.sequenceParagraph ? `<div class="bilingual-sequence-card"><div class="sequence-en">${seqBlock.sequenceParagraph.en}</div><div class="sequence-tr">${seqBlock.sequenceParagraph.tr}</div></div>` : ""}
              </div>
            </div>
          </div>
        </section>

        <section id="alistirma">
          <div class="exercise">
            <p class="eyebrow">8TH GRADE PRACTICE & QUIZ (8. SINIF QUIZ VE ALIŞTIRMALAR)</p>
            <h2>8. Sınıf İngilizce Menemen Tarifi Alıştırması</h2>
            <p>Aşağıdaki soruları yanıtlayarak mutfak fiillerini (chop, saute, stir, crack) pekiştirin:</p>
            
            <ol style="margin-top: 20px; padding-left: 20px;">
              <li style="margin-bottom: 24px;">
                <p style="font-size: 16px; font-weight: 700; color: var(--ko-dark); margin: 0 0 8px 0;">1. Which verb means 'to cut into small pieces' when preparing peppers and tomatoes?</p>
                <ul class="quiz-options">
                  <li class="quiz-option" onclick="this.classList.toggle('correct')"><strong>A)</strong> Boil (Kaynatmak)</li>
                  <li class="quiz-option correct" onclick="this.classList.toggle('correct')"><strong>B)</strong> Chop (Doğramak) ✓</li>
                  <li class="quiz-option" onclick="this.classList.toggle('correct')"><strong>C)</strong> Bake (Fırında pişirmek)</li>
                  <li class="quiz-option" onclick="this.classList.toggle('correct')"><strong>D)</strong> Peel (Soymak)</li>
                </ul>
              </li>
              <li style="margin-bottom: 24px;">
                <p style="font-size: 16px; font-weight: 700; color: var(--ko-dark); margin: 0 0 8px 0;">2. What should you do to the eggs after cracking them into the simmering tomato sauce?</p>
                <ul class="quiz-options">
                  <li class="quiz-option correct" onclick="this.classList.toggle('correct')"><strong>A)</strong> Stir gently on low heat ✓</li>
                  <li class="quiz-option" onclick="this.classList.toggle('correct')"><strong>B)</strong> Freeze immediately</li>
                  <li class="quiz-option" onclick="this.classList.toggle('correct')"><strong>C)</strong> Drain with water</li>
                  <li class="quiz-option" onclick="this.classList.toggle('correct')"><strong>D)</strong> Blend in a food processor</li>
                </ul>
              </li>
              <li style="margin-bottom: 20px;">
                <p style="font-size: 16px; font-weight: 700; color: var(--ko-dark); margin: 0 0 4px 0;">3. “_____ 4 fresh eggs directly into the simmering pan.”</p>
                <p style="color: #64748b; font-size: 13px; margin: 0;">(Cümleye uygun mutfak fiilini yerleştiriniz)</p>
              </li>
              <li style="margin-bottom: 20px;">
                <p style="font-size: 16px; font-weight: 700; color: var(--ko-dark); margin: 0 0 4px 0;">4. “_____ the sliced green peppers in olive oil for 3 minutes.”</p>
                <p style="color: #64748b; font-size: 13px; margin: 0;">(Cümleye uygun mutfak fiilini yerleştiriniz)</p>
              </li>
            </ol>

            <details class="answer-key">
              <summary>Cevap Anahtarını Göster</summary>
              <div class="key-content">
                <ol style="margin: 0; padding-left: 20px;">
                  <li><strong>1. Soru: (B) Chop</strong> — 'cut into small pieces' küçük parçalar hâlinde doğramak anlamına gelir.</li>
                  <li><strong>2. Soru: (A) Stir gently on low heat</strong> — Yumurtalar eklendikten sonra kısık ateşte nazikçe karıştırılır.</li>
                  <li><strong>3. Soru: Crack</strong> — Yumurtaları tavaya kırmak için 'Crack' fiili kullanılır.</li>
                  <li><strong>4. Soru: Saute</strong> — Biberleri az yağda hafifçe kavurmak için 'Saute' fiili kullanılır.</li>
                </ol>
              </div>
            </details>
          </div>
        </section>

        ${getMidPageCTAHTML()}
        ${getRelatedRecipesHTML("menemen")}
      </div>
    </div>
  </article>`;
}

function renderKurabiyePage() {
  document.title = "İngilizce Kurabiye Tarifi (Kurabiye Yapılışı İngilizce) | Konuşarak Öğren";
  setStructuredData({
    "@context": "https://schema.org", "@type": "Recipe",
    name: "İngilizce Kurabiye Tarifi (Kurabiye Yapılışı İngilizce)",
    image: ["/blog/ingilizce-tarifler/images/kurabiye-hero.webp"],
    author: { "@type": "Organization", name: "Konuşarak Öğren" },
    datePublished: "2026-09-12",
    description: "İngilizce kurabiye tarifi; tereyağlı, damla çikolatalı, yulaflı ve zencefilli kurabiye çeşitleri, çift dilli malzeme tabloları, 7 adım yönergeleri ve mutfak terimleri.",
    prepTime: "PT20M", cookTime: "PT15M", totalTime: "PT35M", recipeYield: "24 adet",
    recipeCategory: "Tatlı ve Atıştırmalık", recipeCuisine: "Uluslararası",
    nutrition: { "@type": "NutritionInformation", calories: "140 calories" },
    recipeIngredient: [
      "200 g unsalted butter",
      "100 g powdered sugar",
      "280 g all-purpose flour",
      "1 tsp pure vanilla extract"
    ],
    recipeInstructions: [
      { "@type": "HowToStep", position: 1, name: "1. Soften the Butter at Room Temperature", text: "Leave 200 g of unsalted butter on the kitchen counter for 30 minutes until soft to the touch." },
      { "@type": "HowToStep", position: 2, name: "2. Mix the Butter with Powdered Sugar", text: "Beat 200 g of soft butter and 100 g of powdered sugar in a bowl for 2 minutes until creamy." },
      { "@type": "HowToStep", position: 3, name: "3. Add the Flour and Vanilla", text: "Sift 280 g of all-purpose flour and 1 teaspoon of vanilla extract directly into the creamed mixture." },
      { "@type": "HowToStep", position: 4, name: "4. Knead a Soft Cookie Dough", text: "Knead the mixture gently by hand for 2 minutes until a non-sticky and smooth dough forms." },
      { "@type": "HowToStep", position: 5, name: "5. Shape the Dough into Small Balls", text: "Roll walnut-sized pieces of dough into 24 round balls and press lightly with a fork." },
      { "@type": "HowToStep", position: 6, name: "6. Place the Cookies on a Baking Tray", text: "Arrange the shaped cookies on a parchment-lined tray, leaving 3 cm spaces between them." },
      { "@type": "HowToStep", position: 7, name: "7. Bake the Cookies for 15 Minutes", text: "Bake in a preheated oven at 170°C for 15 minutes until bottom edges turn delicate golden brown." }
    ]
  });

  const bTerms = kurabiyeData.contentBlocks.find(b => b.id === "temel-terimler");
  const bBiscuit = kurabiyeData.contentBlocks.find(b => b.id === "cookie-mi-biscuit-mi");
  const bVerbs = kurabiyeData.contentBlocks.find(b => b.id === "kullanilan-fiiller");

  const bButter = kurabiyeData.contentBlocks.find(b => b.id === "tereyagli-kurabiye-tarifi");
  const bChoc = kurabiyeData.contentBlocks.find(b => b.id === "damla-cikolatali-kurabiye");
  const bOat = kurabiyeData.contentBlocks.find(b => b.id === "yulafli-kurabiye-tarifi");
  const bGinger = kurabiyeData.contentBlocks.find(b => b.id === "zencefilli-kurabiye-tarifi");

  const bSteps = kurabiyeData.contentBlocks.find(b => b.id === "adim-adim-butter-cookies");
  const bIng = kurabiyeData.contentBlocks.find(b => b.id === "hangi-malzemeler-ve-ekipmanlar");
  const bEquip = bIng.subsections[0];

  const bCal = kurabiyeData.contentBlocks.find(b => b.id === "kalori-ve-besin-degerleri");
  const bNut = bCal.subsections.find(s => s.id === "besin-degerleri-tablosu");
  const bAmBis = bCal.subsections.find(s => s.id === "amerikan-biscuit-farki");
  const bTex = bCal.subsections.find(s => s.id === "kurabiye-dokulari");

  const bUnits = kurabiyeData.contentBlocks.find(b => b.id === "olcu-birimleri-ve-kelimeler");
  const bVocab = bUnits.subsections.find(s => s.id === "mutfak-kelimeleri");
  const bTsp = bUnits.subsections.find(s => s.id === "olcu-karsiliklari");
  const bGram = bUnits.subsections.find(s => s.id === "gram-litre-kullanimi");

  const bGrammar = kurabiyeData.contentBlocks.find(b => b.id === "dil-bilgisi-kurallari");
  const bImp = bGrammar.subsections.find(s => s.id === "emir-kipi-kullanimi");
  const bSeq = bGrammar.subsections.find(s => s.id === "sira-zarflari");

  const bQuiz = kurabiyeData.contentBlocks.find(b => b.id === "8-sinif-alistirma-ve-quiz");

  const kurabiyeChapters = [
    {
      block: bButter,
      ing: bButter.subsections[0],
      steps: bButter.subsections[1],
      img: "/blog/ingilizce-tarifler/images/kurabiye-butter.webp",
      titleEn: "Classic Butter Cookies Recipe",
      titleTr: "Geleneksel Tereyağlı Kurabiye Tarifi",
      metaTime: "35 dakika",
      metaServings: "24 adet",
      metaCount: "4 malzeme"
    },
    {
      block: bChoc,
      ing: bChoc.subsections[0],
      steps: bChoc.subsections[1],
      img: "/blog/ingilizce-tarifler/images/kurabiye-chocolate-chip.webp",
      titleEn: "Chocolate Chip Cookie Recipe",
      titleTr: "Damla Çikolatalı Kurabiye Tarifi",
      metaTime: "30 dakika",
      metaServings: "20 adet",
      metaCount: "4 malzeme"
    },
    {
      block: bOat,
      ing: bOat.subsections[0],
      steps: bOat.subsections[1],
      img: "/blog/ingilizce-tarifler/images/kurabiye-oatmeal.webp",
      titleEn: "Oatmeal Cookie Recipe",
      titleTr: "Yulaflı Kurabiye Tarifi",
      metaTime: "30 dakika",
      metaServings: "18 adet",
      metaCount: "4 malzeme"
    },
    {
      block: bGinger,
      ing: bGinger.subsections[0],
      steps: bGinger.subsections[1],
      img: "/blog/ingilizce-tarifler/images/kurabiye-gingerbread.webp",
      titleEn: "Gingerbread Cookie Recipe",
      titleTr: "Zencefilli Kurabiye Tarifi",
      metaTime: "40 dakika",
      metaServings: "24 adet",
      metaCount: "4 malzeme"
    }
  ];

  const overviewTbl = kurabiyeData.page.overviewVariationsTable;

  root.innerHTML = `<article class="recipe-guide">
    <div class="reading-progress" aria-hidden="true"><span></span></div>
    <header class="hero">
      <div class="hero-copy">
        <p class="eyebrow">DESSERT &amp; SNACK RECIPES (TATLI VE ATIŞTIRMALIK)</p>
        <h1>İngilizce Kurabiye Tarifi (Kurabiye Yapılışı İngilizce)</h1>
        <aside class="course-banner" aria-label="İngilizce kursu">
          <div class="course-banner-text">
            <small class="cta-eyebrow">KONUŞARAK ÖĞREN İNGİLİZCE KURSU</small>
            <strong class="cta-heading">İngilizceyi tarif ezberleyerek değil, konuşarak öğrenin.</strong>
          </div>
          <button class="cta-btn cta-btn-orange" onclick="window.location.href='https://student.konusarakogren.com/auth/register'">Ücretsiz tanışma dersi <span class="arrow">→</span></button>
        </aside>
        <p class="lede"><strong>${kurabiyeData.page.introEnglish}</strong> (${kurabiyeData.page.introTurkish})</p>
        <address class="article-meta" rel="author"><span class="author-mark" aria-hidden="true">KO</span><span><strong>Konuşarak Öğren Editör Ekibi</strong><small>İngilizce seviyesi: A1–A2 · Yayınlanma: <time datetime="2026-09-12">12 Eylül 2026</time></small></span></address>
      </div>
      <figure class="hero-visual">
        <img src="/blog/ingilizce-tarifler/images/kurabiye-hero.webp" alt="Taze fırınlanmış kıyır kıyır tereyağlı kurabiyeler" loading="eager" fetchpriority="high">
        <figcaption><strong>Classic Butter Cookies Recipe</strong><span>Fırından yeni çıkmış, altın renginde kıyır kıyır tereyağlı kurabiyeler.</span></figcaption>
      </figure>
      ${buildFactsCardHTML({
        prep: { val: "20 min", en: "Preparation Time", tr: "Hazırlık Süresi: 20 dakika" },
        cook: { val: "15 min", en: "Baking Time", tr: "Pişirme Süresi: 15 dakika" },
        servings: { val: "24 pcs", en: "Servings", tr: "Porsiyon: 24 adet" },
        level: { val: "A1–A2", en: "English Level", tr: "İngilizce Seviyesi: Temel (A1–A2)" }
      })}
      <div class="hero-overview-table" id="definition-variations">
        <p class="eyebrow">DEFINITION &amp; VARIATIONS (TANIM VE ÇEŞİTLER KARŞILAŞTIRMASI)</p>
        <h2 class="definition-heading">English Cookie Variations, Ingredients and Steps (İngilizce Kurabiye Çeşitleri, Malzemeleri ve Temel Adımları)</h2>
        <p class="section-intro"><strong>İngilizce ve Türkçe Kurabiye Çeşitleri Karşılaştırması</strong>: ${overviewTbl?.intro || ""}</p>
        ${overviewTbl ? table(overviewTbl.headers, overviewTbl.rows, overviewTbl.caption) : ""}
      </div>
    </header>

    <div class="page-grid">
      <nav class="toc" aria-label="İçindekiler">
        <a href="#kavramlar" data-scroll-target="kavramlar">Terms (Kavramlar)</a>
        <a href="#tarifler" data-scroll-target="tarifler">Variations (Tarifler)</a>
        <a href="#adim-adim" data-scroll-target="adim-adim">7 Steps (7 Adım)</a>
        <a href="#malzemeler-ve-ekipman" data-scroll-target="malzemeler-ve-ekipman">Ingredients (Malzemeler)</a>
        <a href="#besin-degerleri" data-scroll-target="besin-degerleri">Nutrition (Besin Değerleri)</a>
        <a href="#olculer" data-scroll-target="olculer">Units (Ölçüler)</a>
        <a href="#dil-kurallari" data-scroll-target="dil-kurallari">Grammar (Dil Kuralları)</a>
        <a href="#alistirma" data-scroll-target="alistirma">Quiz (Alıştırma)</a>
      </nav>

      <div class="content">
        <!-- 1. TEMEL TERİMLER & KAVRAMLAR -->
        <section id="kavramlar">
          <p class="eyebrow">CORE TERMS &amp; CONCEPTS (TEMEL TERİMLER VE ANLAM FARKLILIKLARI)</p>
          <h2>Core Terms and Accurate Translations for Cookie Recipes (İngilizce Kurabiye Tarifi İçin Temel Terimler ve Doğru Çeviriler)</h2>
          <p class="section-intro">${bTerms.introEnglish} (${bTerms.introTurkish})</p>
          ${table(bTerms.table.headers, bTerms.table.rows)}

          <aside class="app-banner"><div class="app-icon" aria-hidden="true"><img src="ko-logo-papagan.png" alt="Konuşarak Öğren Logo" /></div><div class="app-banner-text"><small class="cta-eyebrow">KONUŞARAK ÖĞREN UYGULAMASI</small><strong class="cta-heading">Her gün 10 dakika konuşma pratiğini cebinize alın.</strong></div><div class="app-actions"><a href="https://apps.apple.com/tr/app/konu%C5%9Farak-%C3%B6%C4%9Fren-i-ngilizce/id1099431274" target="_blank" rel="noopener" class="cta-btn cta-btn-outline">App Store</a><a href="https://play.google.com/store/apps/details?id=com.konusarakogren.m.konusarakogrenmobil&hl=tr" target="_blank" rel="noopener" class="cta-btn cta-btn-blue">Google Play</a></div></aside>

          <h3 style="margin-top:2rem;">Cookie or Biscuit? Cookies in American and British English (Cookie mi Biscuit mı? Amerikan ve İngiliz İngilizcesinde Kurabiye)</h3>
          <p class="section-intro">${bBiscuit.introEnglish} (${bBiscuit.introTurkish})</p>
          ${table(bBiscuit.table.headers, bBiscuit.table.rows)}

          <h3 style="margin-top:2.5rem;">Verbs Used in English Recipe Writing: Mix, Roll, Shape, Bake (İngilizce Tarif Yazımında Kullanılan Fiiller: Mix, Roll, Shape, Bake)</h3>
          <p class="section-intro">${bVerbs.introEnglish} (${bVerbs.introTurkish})</p>
          ${table(bVerbs.table.headers, bVerbs.table.rows)}
        </section>

        <!-- 2. 4 KURABİYE ÇEŞİDİ -->
        <div id="tarifler" class="recipe-chapters">
          <div class="chapter-intro">
            <p class="eyebrow">4 DISTINCT COOKIE VARIATIONS (4 FARKLI KURABİYE ÇEŞİDİ)</p>
            <p class="section-intro">Tereyağlı, damla çikolatalı, yulaflı ve zencefilli kurabiye tariflerinin İngilizce malzeme tablolarını, görsel kartlarını ve adım adım yapılışlarını aşağıdaki sekmeleri açarak inceleyebilirsiniz.</p>
          </div>
          ${kurabiyeChapters.map((c, i) => `
            <section class="recipe-chapter">
              <div class="chapter-head">
                <span class="variant-number">${String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h2>${c.titleEn} (${c.titleTr})</h2>
                  <p><strong>${c.block.introEnglish}</strong> (${c.block.introTurkish})</p>
                  ${buildChapterMetaHTML({
                    time: { val: c.metaTime, en: "Baking Time", tr: `Pişirme Süresi: ${c.metaTime}` },
                    servings: { val: c.metaServings, en: "Servings", tr: `Porsiyon: ${c.metaServings}` },
                    count: { val: c.metaCount, en: "Ingredients Count", tr: `Malzeme Sayısı: ${c.metaCount}` }
                  })}
                </div>
              </div>
              <figure><img src="${c.img}" alt="${c.titleEn}" loading="lazy"><figcaption><strong>${c.titleEn}</strong><span>${c.titleTr}</span></figcaption></figure>
              <div class="chapter-panels">
                <details class="learning-panel" ${i === 0 ? "open" : ""}><summary><h3>What Are ${c.titleEn.replace(" Recipe", "")} Ingredients in English? (${c.ing.heading.replace("What Are ", "").replace(" in English?", "")})</h3><span>Malzeme kartları &amp; tablosu</span></summary>
                  <div class="panel-body">
                    <p class="section-intro">${c.ing.introEnglish} (${c.ing.introTurkish})</p>
                    ${table(c.ing.table.headers, c.ing.table.rows)}
                    ${buildIngredientCardsHTML((c.ing.cards || []).map(card => ({
                      icon: card.icon || "🍪",
                      quantity: card.quantity || "",
                      en: card.en,
                      tr: card.tr,
                      sentenceEn: card.sentenceEn,
                      sentenceTr: card.sentenceTr
                    })))}
                  </div>
                </details>
                <details class="learning-panel"><summary><h3>How to Write ${c.titleEn.replace(" Recipe", "")} Baking Steps in English? (${c.steps.heading.replace("How to Write ", "").replace(" in English?", "")})</h3><span>Adım adım yapılışı göster</span></summary>
                  <div class="panel-body">
                    <p class="section-intro">${c.steps.introEnglish} (${c.steps.introTurkish})</p>
                    <ol class="compact-steps">
                      ${c.steps.stepsList.map(s => `
                        <li>
                          <span class="step-num-badge">${s.order}</span>
                          <div class="step-body">
                            <p class="en-text"><strong>${s.en}</strong></p>
                            <p class="tr-text">${s.tr}</p>
                          </div>
                        </li>
                      `).join("")}
                    </ol>
                  </div>
                </details>
              </div>
            </section>
          `).join("")}
        </div>

        <!-- 3. BUTTER COOKIES 7 ADIM AKORDİYONU -->
        <section id="adim-adim">
          <p class="eyebrow">OFFICIAL STEP-BY-STEP BAKING GUIDE (RESMİ ADIM ADIM PİŞİRME REHBERİ)</p>
          <h2>How Do You Make Butter Cookies Step by Step? (Butter Cookies İngilizce Adım Adım Nasıl Yapılır?)</h2>
          <p class="section-intro">${bSteps.introEnglish} (${bSteps.introTurkish})</p>
          
          ${buildStepAccordionHTML(bSteps.steps)}

          <h3 style="margin-top:2.5rem;">Butter Cookies 7-Step Baking Summary (Butter Cookies 7 Pişirme Adımı Özet Tablosu)</h3>
          <p class="section-intro">Tüm pişirme sürecini tek bir tabloda inceleyerek fırınlama yönergelerini pekiştirebilirsiniz.</p>
          ${table(bSteps.summaryTable.headers, bSteps.summaryTable.rows)}
        </section>

        <!-- 4. MALZEMELER VE EKİPMANLAR -->
        <section id="malzemeler-ve-ekipman">
          <p class="eyebrow">INGREDIENTS &amp; BAKING EQUIPMENT (MALZEMELER VE FIRINCILIK GEREÇLERİ)</p>
          <h2>Which Ingredients Go into Butter Cookies? (Tereyağlı Kurabiyeye Hangi Malzemeler Girer?)</h2>
          <p class="section-intro">${bIng.introEnglish} (${bIng.introTurkish})</p>
          ${table(bIng.table.headers, bIng.table.rows)}

          <h3 style="margin-top:2.5rem;">What Equipment Do You Need to Bake Cookies? (Kurabiye Pişirmek İçin Hangi Ekipmanlar Gerekir?)</h3>
          <p class="section-intro">${bEquip.introEnglish} (${bEquip.introTurkish})</p>
          ${table(bEquip.table.headers, bEquip.table.rows)}
        </section>

        <!-- 5. BESİN DEĞERLERİ & KALORİ -->
        <section id="besin-degerleri">
          <p class="eyebrow">SERVING, CALORIE &amp; TEXTURE ANALYSIS (PORSİYON, KALORİ VE DOKU ANALİZİ)</p>
          <h2>How Many Calories Is 1 Butter Cookie? (1 Tereyağlı Kurabiye Kaç Kalori?)</h2>
          <p class="section-intro">${bCal.introEnglish} (${bCal.introTurkish})</p>
          ${table(bCal.table.headers, bCal.table.rows)}

          <h3 style="margin-top:2.5rem;">What Are the Nutrition Facts of Butter Cookies? (Tereyağlı Kurabiyenin Besin Değerleri Nelerdir?)</h3>
          <p class="section-intro">${bNut.introEnglish} (${bNut.introTurkish})</p>
          ${table(bNut.table.headers, bNut.table.rows)}

          <h3 style="margin-top:2.5rem;">Why Is an American Biscuit Not a Cookie? (Amerikan Biscuit Neden Kurabiye Değildir?)</h3>
          <p class="section-intro">${bAmBis.introEnglish} (${bAmBis.introTurkish})</p>
          ${table(bAmBis.table.headers, bAmBis.table.rows)}

          <h3 style="margin-top:2.5rem;">Chewy, Crunchy, Crumbly: Describing Cookie Textures in English (Chewy, Crunchy, Crumbly: Kurabiye Dokuları İngilizce Nasıl Tanımlanır?)</h3>
          <p class="section-intro">${bTex.introEnglish} (${bTex.introTurkish})</p>
          ${table(bTex.table.headers, bTex.table.rows)}
        </section>

        <!-- 6. ÖLÇÜ BİRİMLERİ VE MUTFAK KELİMELERİ -->
        <section id="olculer">
          <p class="eyebrow">MEASUREMENT CONVERSIONS &amp; KITCHEN GLOSSARY (ÖLÇÜ DÖNÜŞÜMLERİ VE MUTFAK SÖZLÜĞÜ)</p>
          <h2>What Measurement Units Are Used in English Cookie Recipes? (İngilizce Kurabiye Tariflerinde Kullanılan Ölçü Birimleri Nelerdir?)</h2>
          <p class="section-intro">${bUnits.introEnglish} (${bUnits.introTurkish})</p>
          ${table(bUnits.table.headers, bUnits.table.rows)}

          <h3 style="margin-top:2.5rem;">Core English Kitchen Words in Cookie Recipes (Kurabiye Tarif Metninde Geçen Temel İngilizce Mutfak Kelimeleri Nelerdir?)</h3>
          <p class="section-intro">${bVocab.introEnglish} (${bVocab.introTurkish})</p>
          ${table(bVocab.table.headers, bVocab.table.rows)}

          <h3 style="margin-top:2.5rem;">Tablespoon, Teaspoon, Cup: Turkish Equivalents (Tablespoon, Teaspoon, Cup: İngilizce Ölçü Birimlerinin Türkçe Karşılıkları)</h3>
          <p class="section-intro">${bTsp.introEnglish} (${bTsp.introTurkish})</p>
          ${table(bTsp.table.headers, bTsp.table.rows)}

          <h3 style="margin-top:2.5rem;">How Are Gram and Liter Used in English Recipes? (Gram ve Litre İngilizce Tariflerde Nasıl Kullanılır?)</h3>
          <p class="section-intro">${bGram.introEnglish} (${bGram.introTurkish})</p>
          ${table(bGram.table.headers, bGram.table.rows)}
        </section>

        <!-- 7. DİL BİLGİSİ & GRAMMAR (TABS) -->
        <section id="dil-kurallari">
          <p class="eyebrow">RECIPE GRAMMAR &amp; USAGE RULES (TARİF DİL BİLGİSİ VE ANLATIM KURALLARI)</p>
          <h2>Grammar Rules for English Cookie Recipes (İngilizce Kurabiye Tarifi Yazarken Dikkat Edilmesi Gereken Dil Kuralları)</h2>
          <p class="section-intro">${bGrammar.introEnglish} (${bGrammar.introTurkish})</p>

          <div class="grammar-tabs">
            <div class="tab-list" role="tablist">
              <button type="button" role="tab" data-tab="tab-imp" id="tab-btn-imp" aria-controls="panel-imp" aria-selected="true" class="active">
                <span>1. Imperatives (Emir Kipi)</span>
              </button>
              <button type="button" role="tab" data-tab="tab-seq" id="tab-btn-seq" aria-controls="panel-seq" aria-selected="false">
                <span>2. Sequence Adverbs (Sıra Zarfları)</span>
              </button>
              <button type="button" role="tab" data-tab="tab-rules" id="tab-btn-rules" aria-controls="panel-rules" aria-selected="false">
                <span>3. Grammar Rules (Dil Kuralları)</span>
              </button>
            </div>

            <!-- Tab 1: Imperatives -->
            <div class="tab-panel active" id="panel-imp" data-panel="tab-imp" role="tabpanel">
              <h3 style="margin-top:0.5rem;">How to Use Imperatives in English Cookie Recipes (İngilizce Kurabiye Tarif Metinlerinde Emir Kipi Nasıl Kullanılır?)</h3>
              <p class="section-intro">${bImp.introEnglish} (${bImp.introTurkish})</p>
              ${table(bImp.table.headers, bImp.table.rows)}
            </div>

            <!-- Tab 2: Sequence Adverbs -->
            <div class="tab-panel" id="panel-seq" data-panel="tab-seq" role="tabpanel" hidden>
              <h3 style="margin-top:0.5rem;">Conjunctions and Sequence Adverbs: First, Then, After That, Finally (Bağlaçlar ve Sıra Zarfları: First, Then, After That, Finally)</h3>
              <p class="section-intro">${bSeq.introEnglish} (${bSeq.introTurkish})</p>
              ${table(bSeq.table.headers, bSeq.table.rows)}
              <div class="bilingual-paragraph" style="margin-top:1.5rem; background: rgba(248,250,252,0.9); border: 1px solid #cbd5e1; border-radius: 12px; padding: 1.5rem;">
                <p><strong>English:</strong> ${bSeq.connectedParagraphEn}</p>
                <p style="margin-top:0.75rem; color:#475569;"><strong>Türkçe:</strong> ${bSeq.connectedParagraphTr}</p>
              </div>
            </div>

            <!-- Tab 3: Grammar Summary -->
            <div class="tab-panel" id="panel-rules" data-panel="tab-rules" role="tabpanel" hidden>
              <h3 style="margin-top:0.5rem;">Core Recipe Grammar Rules (4 Temel Tarif Dil Kuralı)</h3>
              <p class="section-intro">İngilizce tarif yazımının 4 temel dil kuralı: emir kipi, sıra zarfları, sayılabilir/sayılamayan isimler ve ölçü ifadeleri.</p>
              ${table(bGrammar.table.headers, bGrammar.table.rows)}
            </div>
          </div>
        </section>

        <!-- 8. 8. SINIF ALISTIRMA VE QUIZ -->
        <section id="alistirma" class="exercise">
          <p class="eyebrow" style="color:#93c5fd;">8TH GRADE PRACTICE &amp; QUIZ (8. SINIF QUIZ VE ALIŞTIRMALAR)</p>
          <h2 style="color:#ffffff;">8th Grade English Cookie Recipe Practice &amp; Quiz (8. Sınıf İngilizce Kurabiye Tarifi)</h2>
          <p class="section-intro" style="color:#cbd5e1;">${bQuiz.introEnglish} (${bQuiz.introTurkish})</p>

          <div class="quiz-grid" style="display: flex; flex-direction: column; gap: 1.5rem; margin-top: 2rem;">
            ${bQuiz.quiz.map((q, idx) => `
              <div class="quiz-card" data-correct="${q.correctAnswer}" style="background:#ffffff; border:1px solid #e2e8f0; border-radius:14px; padding:1.6rem; text-align:left; color:#0f172a; box-shadow:0 4px 14px rgba(0,0,0,0.06);">
                <span class="quiz-badge" style="background:#0284c7; color:#ffffff; padding:4px 10px; border-radius:6px; font-size:0.85rem; font-weight:700;">Soru ${q.number} · ${q.type === "multiple-choice" ? "Çoktan Seçmeli" : "Boşluk Doldurma"}</span>
                <p style="font-size:1.15rem; font-weight:700; margin-top:1rem; color:#0f172a;">${q.questionEn}</p>
                <p style="font-size:0.95rem; color:#64748b; margin-top:0.25rem;">(${q.questionTr})</p>
                <div class="quiz-options" style="display:flex; flex-wrap:wrap; gap:0.6rem; margin-top:1.2rem;">
                  ${q.options.map(opt => `
                    <button type="button" class="quiz-option-btn" data-val="${opt}" style="background:#f8fafc; border:1px solid #cbd5e1; border-radius:8px; padding:10px 16px; cursor:pointer; font-weight:600; font-size:0.95rem; text-align:left; transition:all 0.2s; color:#0f172a;">${opt}</button>
                  `).join("")}
                </div>
                <div class="quiz-feedback" style="display:none; margin-top:1rem; padding:0.85rem 1.1rem; border-radius:8px; font-size:0.95rem;"></div>
              </div>
            `).join("")}
          </div>
        </section>

        <!-- CTA Banner (Always outside quiz, fully clickable with high contrast) -->
        ${getMidPageCTAHTML()}
        ${getRelatedRecipesHTML("kurabiye")}
      </div>
    </div>
  </article>`;

  // Quiz interactivity
  const quizCards = root.querySelectorAll(".quiz-card");
  quizCards.forEach(card => {
    const correct = card.getAttribute("data-correct");
    const feedback = card.querySelector(".quiz-feedback");
    const buttons = card.querySelectorAll(".quiz-option-btn");

    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        const val = btn.getAttribute("data-val");
        const isMatch = val.trim().toLowerCase() === correct.trim().toLowerCase() || val.includes(correct);

        buttons.forEach(b => {
          b.disabled = true;
          if (b.getAttribute("data-val") === correct || b.getAttribute("data-val").includes(correct)) {
            b.style.background = "#dcfce7";
            b.style.borderColor = "#22c55e";
            b.style.color = "#15803d";
          }
        });

        if (isMatch) {
          btn.style.background = "#dcfce7";
          btn.style.borderColor = "#22c55e";
          feedback.style.display = "block";
          feedback.style.background = "#f0fdf4";
          feedback.style.color = "#166534";
          feedback.style.border = "1px solid #bbf7d0";
          feedback.innerHTML = `<strong>Doğru Cevap! ✓</strong> Tebrikler, soruyu doğru yanıtladınız.`;
        } else {
          btn.style.background = "#fee2e2";
          btn.style.borderColor = "#ef4444";
          btn.style.color = "#991b1b";
          feedback.style.display = "block";
          feedback.style.background = "#fef2f2";
          feedback.style.color = "#991b1b";
          feedback.style.border = "1px solid #fecaca";
          feedback.innerHTML = `<strong>Yanlış Cevap.</strong> Doğru seçenek: <em>${correct}</em>`;
        }
      });
    });
  });
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
  } else if (slug === "baklava") {
    renderBaklavaPage();
  } else if (slug === "smoothie") {
    renderSmoothiePage();
  } else if (slug === "kek") {
    renderKekPage();
  } else if (slug === "omlet") {
    renderOmletPage();
  } else if (slug === "menemen") {
    renderMenemenPage();
  } else if (slug === "pizza") {
    renderPizzaPage();
  } else if (slug === "kurabiye" || slug === "cookie") {
    renderKurabiyePage();
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
