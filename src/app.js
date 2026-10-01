import "./styles.css";
import menemenData from "./data/menemen.json";
import pizzaData from "./data/pizza.json";
import kurabiyeData from "./data/kurabiye.json";
import pilavData from "./data/pilav.json";
import corbaData from "./data/corba.json";

const sharedVocab = [
  ["boil", "kaynatmak", "Boil the water before adding the ingredients."],
  ["add", "eklemek", "Add the ingredients to the bowl."],
  ["mix", "karıştırmak", "Mix everything until combined."],
  ["serve", "servis etmek", "Serve the dish while it is fresh."],
];

const recipes = {
  makarna: {
    category: "main_soup",
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
    category: "dessert",
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
    category: "beverage",
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
  pankek: {
    category: "breakfast",
    label: "Kahvaltı",
    title: "İngilizce Pankek Tarifi",
    englishTitle: "Fluffy American Pancakes Recipe",
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
    equipment: [["Copper Pan or Sahan", "Bakır Tava veya Sahan", "Adım 2, 3, 4, 5, 6"], ["Chef Knife", "Mutfak Bıçağı", "Adım 1"], ["Cutting Board", "Kesme Tahtası", "Adım 1"], ["Wooden Spoon", "Tahta Kaşık", "Adım 2, 3, 5"]],
    vocab: [["chop", "doğramak", "Chop the peppers into small rings."], ["dice", "küp küp doğramak", "Dice 2 ripe tomatoes into small cubes."], ["saute", "sotelemek", "Saute the peppers in hot oil."], ["simmer", "kısık ateşte pişirmek", "Simmer the tomatoes for 10 minutes."], ["crack", "kırmak", "Crack 2 eggs into the skillet."], ["stir", "karıştırmak", "Stir gently on low heat."]]
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
  },
  pilav: {
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
  corba: {
    label: "Başlangıç ve Sıcak Çorba",
    title: "İngilizce Çorba Tarifi",
    englishTitle: "Red Lentil Soup Recipe",
    image: "/blog/ingilizce-tarifler/images/corba-hero.webp",
    introEn: "A soup recipe provides clear, step-by-step culinary instructions for simmering grains, legumes, or vegetables in seasoned broth until comforting and flavorful.",
    introTr: "İngilizce çorba tarifi; kırmızı mercimek veya sebzelerin tereyağında kavrulup sıcak et suyuyla kaynatılarak pürüzsüz kıvama getirilmesini Türkçe açıklamalarıyla sunan kapsamlı bir rehberdir.",
    time: "35 dakika", serves: "4-6 kişilik", level: "A1–A2", calories: "180 kcal (1 kase)",
    ingredients: [["Red Lentils", "Kırmızı mercimek", "1 cup"], ["Onion", "Kuru soğan", "1 medium"], ["Carrot", "Havuç", "1 medium"], ["Butter", "Tereyağı", "2 tbsp"], ["Hot Broth", "Sıcak et suyu veya su", "5 cups"], ["Salt", "Tuz", "1 tsp"]],
    steps: [
      ["1. Wash and Drain the Red Lentils (Kırmızı Mercimeği Yıkayın ve Süzün)", "Wash 1 cup of red lentils under cold water until the water runs clear.", "1 su bardağı kırmızı mercimeği soğuk suyun altında suyu berraklaşana kadar yıkayın."],
      ["2. Saute the Chopped Onion and Carrot (Doğranmış Soğan ve Havucu Soteleyin)", "Melt 2 tablespoons of butter and saute 1 chopped onion and 1 carrot for 3 minutes.", "2 yemek kaşığı tereyağını eritin ve doğranmış 1 soğan ile 1 havucu 3 dakika soteleyin."],
      ["3. Add the Flour and Saute for 1 Minute (Unu Ekleyin ve 1 Dakika Kavurun)", "Add 1 tablespoon of all-purpose flour and saute for 1 minute.", "1 yemek kaşığı çok amaçlı unu ekleyin ve 1 dakika kavurun."],
      ["4. Pour in the Broth and Add Lentils (Et Suyunu Dökün ve Mercimekleri Ekleyin)", "Pour in 5 cups of hot broth and add the rinsed red lentils with 1 teaspoon of salt.", "5 su bardağı sıcak et suyunu dökün ve yıkanmış kırmızı mercimekleri 1 çay kaşığı tuzla ekleyin."],
      ["5. Simmer on Low Heat for 20 Minutes (Kısık Ateşte 20 Dakika Kaynatın)", "Cover the pot with a lid and simmer on low heat for 20 minutes until the lentils are soft.", "Tencerenin kapağını kapatın ve mercimekler yumuşayana kadar kısık ateşte 20 dakika kaynatın."],
      ["6. Blend the Soup Until Smooth and Serve (Çorbayı Pürüzsüz Olana Kadar Blenderdan Geçirin ve Servis Edin)", "Blend the hot soup until silky smooth, ladle into warm bowls, and serve with lemon wedges.", "Sıcak çorbayı pürüzsüz olana kadar blenderdan geçirin, sıcak kaselere kepçeyle paylaştırıp limon dilimleriyle servis edin."]
    ],
    equipment: [["Deep soup pot", "Derin çorba tenceresi", "Step 2, 3, 4, 5"], ["Immersion hand blender", "El blenderı", "Step 6"], ["Wooden spoon", "Tahta kaşık", "Step 2, 3"], ["Soup ladle", "Çorba kepçesi", "Step 6"]],
    vocab: [["simmer", "kısık ateşte kaynatmak", "Simmer the lentils for 20 minutes."], ["blend", "blenderdan geçirmek", "Blend the soup until smooth."], ["saute", "sotelemek", "Saute the onions in butter."], ["ladle", "kepçeyle doldurmak", "Ladle the hot soup into bowls."]]
  },
};;

const root = document.querySelector("#content");

function formatBilingualText(str) {
  if (!str || typeof str !== "string") return str;
  if (str.includes('class="tr-highlight"')) return str;
  return str.replace(/\(([^()<>{}]*[\p{L}\d\s,.'":;!?-]+)\)/gu, '<span class="tr-highlight">($1)</span>');
}

const table = (headers, rows, caption = "") => `<div class="table-container"><table>${caption ? `<caption class="table-caption">${formatBilingualText(caption)}</caption>` : ""}<thead><tr>${headers.map(h => `<th scope="col">${formatBilingualText(h)}</th>`).join("")}</tr></thead><tbody>${rows.map(row => `<tr>${row.map(cell => `<td>${formatBilingualText(cell)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;

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
        <p class="eyebrow">OTHER RECIPES <span class="tr-highlight">(DİĞER İNGİLİZCE TARİFLER)</span></p>
        <h2 id="related-title">Other English Recipes <span class="tr-highlight">(Diğer İngilizce Tarifler)</span></h2>
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
  const captionText = facts.caption || (facts.title ? `İngilizce ${facts.title} Tarifi Özeti` : "İngilizce Tarif Özeti");
  return `
    <aside class="hero-card pasta-facts" aria-label="Tarif özeti">
      <table class="recipe-facts">
        <caption>${formatBilingualText(captionText)}</caption>
        <thead>
          <tr>
            <th scope="col">
              <div class="fact-tooltip-wrap">
                <span class="fact-th-en">PREPARATION</span><span class="fact-th-tr">(HAZIRLIK)</span>
                <div class="fact-tooltip">
                  <span class="tooltip-en">${facts.prep.en}</span>
                  <span class="tooltip-tr">${facts.prep.tr}</span>
                </div>
              </div>
            </th>
            <th scope="col">
              <div class="fact-tooltip-wrap">
                <span class="fact-th-en">COOKING</span><span class="fact-th-tr">(PİŞİRME)</span>
                <div class="fact-tooltip">
                  <span class="tooltip-en">${facts.cook.en}</span>
                  <span class="tooltip-tr">${facts.cook.tr}</span>
                </div>
              </div>
            </th>
            <th scope="col">
              <div class="fact-tooltip-wrap">
                <span class="fact-th-en">SERVINGS</span><span class="fact-th-tr">(PORSİYON)</span>
                <div class="fact-tooltip">
                  <span class="tooltip-en">${facts.servings.en}</span>
                  <span class="tooltip-tr">${facts.servings.tr}</span>
                </div>
              </div>
            </th>
            <th scope="col">
              <div class="fact-tooltip-wrap">
                <span class="fact-th-en">LEVEL</span><span class="fact-th-tr">(SEVİYE)</span>
                <div class="fact-tooltip">
                  <span class="tooltip-en">${facts.level.en}</span>
                  <span class="tooltip-tr">${facts.level.tr}</span>
                </div>
              </div>
            </th>
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
        <span class="meta-badge">${formatBilingualText(time.val)}</span>
        <div class="fact-tooltip">
          <span class="tooltip-en">${time.en}</span>
          <span class="tooltip-tr">${time.tr}</span>
        </div>
      </div>` : ""}
      ${servings ? `
      <div class="meta-tooltip-wrap">
        <span class="meta-badge">${formatBilingualText(servings.val)}</span>
        <div class="fact-tooltip">
          <span class="tooltip-en">${servings.en}</span>
          <span class="tooltip-tr">${servings.tr}</span>
        </div>
      </div>` : ""}
      ${count ? `
      <div class="meta-tooltip-wrap">
        <span class="meta-badge">${formatBilingualText(count.val)}</span>
        <div class="fact-tooltip">
          <span class="tooltip-en">${count.en}</span>
          <span class="tooltip-tr">${count.tr}</span>
        </div>
      </div>` : ""}
    </div>
  `;
}

function buildStepsMetaHTML(meta = {}) {
  const steps = meta.steps || { val: "6 steps (6 adım)", en: "Follow the sequential cooking steps below.", tr: "Aşağıdaki pişirme yönergesini sırasıyla takip edin." };
  const time = meta.time || { val: "15 mins (15 dakika)", en: "Total active cooking time.", tr: "Toplam aktif pişirme süresi." };
  const level = meta.level || { val: "Level A1–A2 (A1–A2 seviye)", en: "Focuses on essential kitchen verbs and vocabulary.", tr: "Temel mutfak fiilleri ve kelime haznesine odaklanır." };

  return `
    <div class="steps-meta">
      <div class="meta-tooltip-wrap">
        <span class="meta-badge" tabindex="0">📋 ${formatBilingualText(steps.val)}</span>
        <div class="fact-tooltip">
          <span class="tooltip-en">${steps.en}</span>
          <span class="tooltip-tr">${steps.tr}</span>
        </div>
      </div>
      <div class="meta-tooltip-wrap">
        <span class="meta-badge" tabindex="0">⏱️ ${formatBilingualText(time.val)}</span>
        <div class="fact-tooltip">
          <span class="tooltip-en">${time.en}</span>
          <span class="tooltip-tr">${time.tr}</span>
        </div>
      </div>
      <div class="meta-tooltip-wrap">
        <span class="meta-badge" tabindex="0">📊 ${formatBilingualText(level.val)}</span>
        <div class="fact-tooltip">
          <span class="tooltip-en">${level.en}</span>
          <span class="tooltip-tr">${level.tr}</span>
        </div>
      </div>
    </div>
  `;
}

function buildIngredientCardsHTML(cards) {
  if (!cards || !cards.length) return "";
  return `
    <div class="ingredient-cards-section">
      <ul class="ingredient-list">
        ${cards.map(c => {
          const qty = c.quantity || c.amount || "";
          let sEn = c.sentenceEn || "";
          let sTr = c.sentenceTr || "";
          if (!sEn && c.sentence) {
            const parts = c.sentence.split("(");
            sEn = parts[0].trim();
            if (parts[1]) sTr = parts[1].replace(")", "").trim();
          }
          return `
          <li class="ingredient-list-item">
            <div class="ingredient-list-icon" aria-hidden="true">${c.icon || "🥣"}</div>
            <div class="ingredient-list-content">
              <div class="ingredient-list-header">
                <strong class="ingredient-list-name">${c.en} ${c.tr ? `<span class="tr-highlight">(${c.tr})</span>` : ""}</strong>
                ${qty ? `<span class="quantity-badge">${qty}</span>` : ""}
              </div>
              ${sEn ? `<p class="ingredient-list-en">${sEn}</p>` : ""}
              ${sTr ? `<p class="ingredient-list-tr">${formatBilingualText(`(${sTr})`)}</p>` : ""}
            </div>
          </li>
        `;}).join("")}
      </ul>
    </div>
  `;
}

function buildStepAccordionHTML(items) {
  return `
    <div class="step-accordion">
      ${items.map((s, idx) => {
        const hasImg = Boolean(s.img);
        const isReverse = idx % 2 === 1;
        const cleanTitleEn = (s.titleEn || "").replace(/^\d+\.\s*/, "").trim();
        const cleanTitleTr = (s.titleTr || "").replace(/^(\d+\.\s*(?:Adım:?\s*)?)/i, "").trim();
        return `
          <details class="step-accordion-item" ${idx === 0 ? "open" : ""}>
            <summary class="step-accordion-summary">
              <span class="step-acc-badge">${s.number || idx + 1}</span>
              <h3 class="step-acc-title">${cleanTitleEn} <span class="tr-highlight">(${cleanTitleTr})</span></h3>
              <span class="step-acc-icon" aria-hidden="true">↓</span>
            </summary>
            <div class="step-accordion-body">
              <div class="step-acc-grid ${isReverse ? "step-reverse" : ""}">
                ${hasImg ? `
                  <div class="step-acc-img-wrap">
                    <img src="${s.img}" alt="${s.titleEn}" class="step-acc-thumbnail" loading="lazy" />
                  </div>
                ` : ""}
                <div class="step-acc-content">
                  <p class="step-acc-en"><strong>${s.sentenceEn}</strong></p>
                  <p class="step-acc-tr"><span class="tr-highlight">(${s.sentenceTr})</span></p>
                  
                  ${(s.ingredient || s.equipment || s.time) ? `
                    <div class="step-meta-pills">
                      ${s.ingredient ? `<span class="step-meta-pill pill-ing">🥣 <strong>Malzeme:</strong> ${s.ingredient}</span>` : ""}
                      ${s.equipment ? `<span class="step-meta-pill pill-equip">🍳 <strong>Gereç:</strong> ${s.equipment}</span>` : ""}
                      ${s.time ? `<span class="step-meta-pill pill-time">⏱️ <strong>Süre:</strong> ${s.time}</span>` : ""}
                    </div>
                  ` : ""}

                  <div class="step-acc-action-badge" style="margin-top: 0.9rem;">
                    <span>Cooking Action (Mutfak Eylemi):</span> <strong>${s.actionEn || "Cooking"} <span class="tr-highlight">(${s.actionTr || "Pişirme"})</span></strong>
                  </div>
                </div>
              </div>
            </div>
          </details>
        `;
      }).join("")}
    </div>
  `;
}

function buildAppBannerHTML(recipeName = "Kurabiye") {
  return `
    <aside class="app-banner">
      <div class="app-icon" aria-hidden="true">
        <img src="ko-logo-papagan.png" alt="İngilizce Konuşma Uygulaması" title="İngilizce Konuşma Uygulaması" />
      </div>
      <div class="app-banner-text">
        <small class="cta-eyebrow">KONUŞARAK ÖĞREN UYGULAMASI</small>
        <strong class="cta-heading">İngilizce ${recipeName.toLowerCase()} tariflerini ve mutfak kalıplarını her gün 10 dakika konuşma pratiğiyle cebinize alın.</strong>
      </div>
      <div class="app-actions">
        <a href="https://apps.apple.com/tr/app/konu%C5%9Farak-%C3%B6%C4%9Fren-i-ngilizce/id1099431274" target="_blank" rel="noopener" class="cta-btn cta-btn-outline" title="İngilizce konuşma App Store Uygulaması">App Store</a>
        <a href="https://play.google.com/store/apps/details?id=com.konusarakogren.m.konusarakogrenmobil&hl=tr" target="_blank" rel="noopener" class="cta-btn cta-btn-blue" title="İngilizce konuşma Google Play Uygulaması">Google Play</a>
      </div>
    </aside>
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

function initQuizInteractivity(container, recipeNameTr, onRetry) {
  const quizCards = container.querySelectorAll(".quiz-card");
  const answeredState = {};
  const totalQuestions = quizCards.length;
  if (!totalQuestions) return;

  function checkQuizCompletion() {
    if (Object.keys(answeredState).length === totalQuestions) {
      const correctCount = Object.values(answeredState).filter(Boolean).length;
      const summaryBox = container.querySelector("#quiz-summary-box");
      if (summaryBox) {
        summaryBox.style.display = "block";
        summaryBox.innerHTML = `
          <div class="quiz-summary-card">
            <span class="quiz-score-badge">🎯 Quiz Tamamlandı: ${totalQuestions} Soruda ${correctCount} Doğru!</span>
            <h3 class="quiz-summary-heading">Harika Bir İlerleme Kaydettiniz!</h3>
            <p class="quiz-summary-desc">
              İngilizce ${recipeNameTr} ve mutfak terimlerini başarıyla kavradınız. Artık teoriyi pratiğe dönüştürme zamanı! Ana dili İngilizce olan eğitmenlerle günde sadece 10 dakika konuşarak akıcı İngilizceye ulaşın.
            </p>
            <div class="quiz-summary-actions">
              <a href="https://student.konusarakogren.com/auth/register" target="_blank" rel="noopener" class="quiz-summary-cta">
                Ücretsiz Tanışma ve Seviye Tespiti Al <span class="arrow">→</span>
              </a>
              <button type="button" class="quiz-retry-btn" id="retry-quiz-action">Testi Yeniden Çöz ↺</button>
            </div>
          </div>
        `;

        summaryBox.querySelector("#retry-quiz-action")?.addEventListener("click", () => {
          if (onRetry) onRetry();
          document.getElementById("alistirma")?.scrollIntoView({ behavior: "smooth" });
        });

        summaryBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    }
  }

  quizCards.forEach(card => {
    const idx = card.getAttribute("data-idx");
    const correct = card.getAttribute("data-correct");
    const feedback = card.querySelector(".quiz-feedback");
    const buttons = card.querySelectorAll(".quiz-option-btn");

    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        const val = btn.getAttribute("data-val") || "";
        const isMatch = val.trim().toLowerCase() === correct.trim().toLowerCase() || val.includes(correct);

        answeredState[idx] = isMatch;

        buttons.forEach(b => {
          b.disabled = true;
          const bVal = b.getAttribute("data-val") || "";
          if (bVal.trim().toLowerCase() === correct.trim().toLowerCase() || bVal.includes(correct)) {
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

        checkQuizCompletion();
      });
    });
  });
}

function initVariantSubnavScroll(container) {
  const variantNavBtns = container.querySelectorAll(".variant-nav-btn, .variant-subnav-btn");
  if (!variantNavBtns.length) return;
  variantNavBtns.forEach(btn => {
    btn.addEventListener("click", e => {
      e.preventDefault();
      const targetId = btn.getAttribute("href").replace("#", "");
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
        variantNavBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        btn.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      }
    });
  });

  const variantChapters = Array.from(variantNavBtns).map(btn => document.getElementById(btn.getAttribute("href").replace("#", ""))).filter(Boolean);
  if (variantChapters.length) {
    const variantObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        variantNavBtns.forEach(btn => {
          const isActive = btn.getAttribute("href") === `#${entry.target.id}`;
          btn.classList.toggle("active", isActive);
          if (isActive) {
            btn.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
          }
        });
      });
    }, { rootMargin: "-20% 0px -60%", threshold: 0 });
    variantChapters.forEach(c => variantObserver.observe(c));
  }
}

function renderHome() {
  setStructuredData();
  root.innerHTML = `<div class="index">
    <p class="eyebrow">TEMSİLCİ TARİF SAYFALARI <span class="tr-highlight">(SAMPLE RECIPE GUIDES)</span></p>
    <h1>Bildiğiniz tariflerle İngilizce öğrenin.</h1>
    <p class="lede"><strong>Learn English cooking vocabulary and step-by-step culinary instructions with your favorite recipes.</strong> <span class="tr-highlight">(Ana yemek, tatlı ve içecek kategorilerindeki tariflerle İngilizce mutfak kelimelerini ve yönergeleri adım adım öğrenin.)</span></p>
    
    <div class="home-cat-filter-wrap">
      <div class="home-cat-filter-list" role="tablist" aria-label="Tarif Kategorileri">
        <button type="button" class="home-cat-pill active" data-cat="all" role="tab" aria-selected="true">
          <span class="cat-pill-icon">🍽️</span> Tüm Tarifler <span class="cat-pill-count">11</span>
        </button>
        <button type="button" class="home-cat-pill" data-cat="breakfast" role="tab" aria-selected="false">
          <span class="cat-pill-icon">🍳</span> Kahvaltılık <span class="cat-pill-count">3</span>
        </button>
        <button type="button" class="home-cat-pill" data-cat="main_soup" role="tab" aria-selected="false">
          <span class="cat-pill-icon">🍲</span> Ana Yemek &amp; Çorba <span class="cat-pill-count">4</span>
        </button>
        <button type="button" class="home-cat-pill" data-cat="dessert" role="tab" aria-selected="false">
          <span class="cat-pill-icon">🍰</span> Tatlı &amp; Fırın <span class="cat-pill-count">3</span>
        </button>
        <button type="button" class="home-cat-pill" data-cat="beverage" role="tab" aria-selected="false">
          <span class="cat-pill-icon">🥤</span> İçecek <span class="cat-pill-count">1</span>
        </button>
      </div>
    </div>

    <ul class="page-cards">
      ${Object.entries(recipes).map(([slug, r]) => `
        <li class="recipe-card" data-category="${r.category || 'main_soup'}">
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
  initHomeCategoryFilter();
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
          <p class="eyebrow">DEFINITION &amp; OVERVIEW <span class="tr-highlight">(TANIM VE GENEL BAKIŞ)</span></p>
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
                <section id="alistirma" class="exercise">
          <p class="eyebrow" style="color:#93c5fd;">PRACTICE &amp; QUIZ <span class="tr-highlight">(KAZANIM KONTROLÜ VE ALIŞTIRMALAR)</span></p>
          <h2 style="color:#ffffff;">8. Sınıf İngilizce Baklava Tarifi Alıştırma ve Quizi</h2>
          <p class="section-intro" style="color:#cbd5e1;">Öğrendiğiniz baklava mutfak terimlerini, şerbet kurallarını ve bağlaçları bu interaktif test ile pekiştirin.</p>

          <div class="quiz-grid" style="display: flex; flex-direction: column; gap: 1.5rem; margin-top: 2rem;">
            ${baklavaQuiz.map((q, idx) => `
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
        ${getRelatedRecipesHTML(slug)}
      </div>
    </div>
  </article>`;
}

const pastaVariants = [
  {
    title: "Sade Makarna Tarifi",
    briefTitle: "Plain Pasta Recipe (Sade Makarna Tarifi)",
    ingredientsHeading: "Plain Pasta Ingredients (Sade Makarna Malzemeleri)",
    stepsHeading: "Plain Pasta Cooking Steps (Sade Makarna Pişirme Adımları)",
    english: "Plain Pasta Recipe",
    description: "Plain pasta is boiled pasta finished with butter or olive oil. (Sade makarna, haşlandıktan sonra tereyağı veya zeytinyağıyla tamamlanan makarnadır.)",
    image: "/blog/ingilizce-tarifler/images/makarna-hero.webp",
    alt: "A bowl of plain cooked pasta ready to serve",
    ingredients: [["Pasta", "Makarna", "200 g"], ["Water", "Su", "2 l"], ["Salt", "Tuz", "1 tsp"], ["Butter", "Tereyağı", "1 tbsp"]],
    steps: "Boil the water, add the pasta, cook for 8–10 minutes, drain and serve. (Suyu kaynatın, makarnayı ekleyin, 8–10 dakika pişirin, süzün ve servis edin.)",
  },
  {
    title: "Domates Soslu Makarna",
    briefTitle: "Pasta with Tomato Sauce (Domates Soslu Makarna)",
    ingredientsHeading: "Tomato Sauce Pasta Ingredients (Domates Soslu Makarna Malzemeleri)",
    stepsHeading: "Tomato Sauce Preparation Steps (Domates Sosu Hazırlama Adımları)",
    english: "Pasta with Tomato Sauce",
    description: "Pasta with tomato sauce combines cooked pasta with a quick garlic and tomato sauce. (Domates soslu makarna, pişmiş makarnayı sarımsaklı hızlı bir domates sosuyla birleştirir.)",
    image: "/blog/ingilizce-tarifler/images/makarna-domatesli.webp",
    alt: "Pasta coated with tomato sauce in a serving bowl",
    ingredients: [["Pasta", "Makarna", "200 g"], ["Crushed tomatoes", "Ezilmiş domates", "250 g"], ["Garlic", "Sarımsak", "2 cloves"], ["Olive oil", "Zeytinyağı", "1 tbsp"]],
    steps: "First, sauté the garlic for 1 minute. Then, add the tomatoes and cook for 10 minutes. Finally, toss with the pasta. (Önce sarımsağı 1 dakika soteleyin. Ardından domatesi ekleyip 10 dakika pişirin. Son olarak makarnayla karıştırın.)",
  },
  {
    title: "Spagetti Bolonez",
    briefTitle: "Spaghetti Bolognese Recipe (Spagetti Bolonez Tarifi)",
    ingredientsHeading: "Spaghetti Bolognese Ingredients (Spagetti Bolonez Malzemeleri)",
    stepsHeading: "Spaghetti Bolognese Cooking Steps (Spagetti Bolonez Pişirme Adımları)",
    english: "Spaghetti Bolognese Recipe",
    description: "Spaghetti Bolognese is spaghetti served with a slow-cooked minced-beef and tomato sauce. (Spagetti Bolonez, kıymalı domates sosuyla servis edilen spagettidir.)",
    image: "/blog/ingilizce-tarifler/images/makarna-bolonez.webp",
    alt: "Spaghetti Bolognese with minced beef and tomato sauce",
    ingredients: [["Spaghetti", "Spagetti", "200 g"], ["Minced beef", "Kıyma", "200 g"], ["Tomato purée", "Domates püresi", "250 g"], ["Onion", "Soğan", "1"]],
    steps: "First, brown the beef. Then, add the onion and tomato purée. After that, simmer for 25 minutes and serve over spaghetti. (Önce kıymayı kavurun. Ardından soğan ve domates püresini ekleyin. Daha sonra 25 dakika pişirip spagettinin üzerinde servis edin.)",
  },
  {
    title: "Fırında Makarna",
    briefTitle: "Baked Pasta Recipe (Fırında Makarna Tarifi)",
    ingredientsHeading: "Baked Pasta Ingredients (Fırında Beşamel Makarna Malzemeleri)",
    stepsHeading: "Baked Pasta Preparation Steps (Fırında Makarna Hazırlama Adımları)",
    english: "Baked Pasta Recipe",
    description: "Baked pasta is pasta covered with béchamel sauce and cheese, then browned in the oven. (Fırında makarna, beşamel sos ve peynirle kaplanıp fırında kızartılan makarnadır.)",
    image: "/blog/ingilizce-tarifler/images/makarna-firinda.webp",
    alt: "Golden baked pasta with béchamel sauce and cheese",
    ingredients: [["Pasta", "Makarna", "250 g"], ["Milk", "Süt", "500 ml"], ["Flour", "Un", "2 tbsp"], ["Grated cheese", "Rendelenmiş peynir", "150 g"]],
    steps: "First, prepare the béchamel sauce. Then, combine it with the pasta. Finally, add cheese and bake at 190°C for 25 minutes. (Önce beşamel sosu hazırlayın. Ardından makarnayla karıştırın. Son olarak peynir ekleyip 190°C'de 25 dakika pişirin.)",
  },
  {
    title: "Fettuccine Alfredo",
    briefTitle: "Fettuccine Alfredo Recipe (Kremalı Alfredo Tarifi)",
    ingredientsHeading: "Fettuccine Alfredo Ingredients (Fettuccine Alfredo Malzemeleri)",
    stepsHeading: "Fettuccine Alfredo Cooking Steps (Fettuccine Alfredo Pişirme Adımları)",
    english: "Fettuccine Alfredo Recipe",
    description: "Fettuccine Alfredo coats ribbon pasta with a creamy butter and Parmesan sauce. (Fettuccine Alfredo, şerit makarnayı tereyağlı ve Parmesanlı kremalı sosla kaplar.)",
    image: "/blog/ingilizce-tarifler/images/makarna-alfredo.webp",
    alt: "Creamy Fettuccine Alfredo served with Parmesan",
    ingredients: [["Fettuccine", "Fettuccine makarna", "200 g"], ["Chicken breast", "Tavuk göğsü", "150 g"], ["Cream", "Krema", "200 ml"], ["Parmesan", "Parmesan", "80 g"], ["Butter", "Tereyağı", "2 tbsp"]],
    steps: "First, melt the butter. Then, add the cream and Parmesan. Finally, toss the cooked fettuccine in the sauce. (Önce tereyağını eritin. Ardından krema ve Parmesanı ekleyin. Son olarak pişmiş fettuccineyi sosla karıştırın.)",
  },
  {
    title: "Ton Balıklı Makarna",
    briefTitle: "Tuna Pasta Recipe (Ton Balıklı Makarna Tarifi)",
    ingredientsHeading: "Tuna Pasta Ingredients (Ton Balıklı Makarna Malzemeleri)",
    stepsHeading: "Tuna Pasta Serving Steps (Ton Balıklı Makarna Hazırlama Adımları)",
    english: "Tuna Pasta Recipe",
    description: "Tuna pasta is a quick pasta dish mixed with drained tuna, lemon and olive oil. (Ton balıklı makarna, süzülmüş ton balığı, limon ve zeytinyağıyla karıştırılan hızlı bir makarna yemeğidir.)",
    image: "/blog/ingilizce-tarifler/images/makarna-ton-balikli.webp",
    alt: "Tuna pasta with lemon and herbs in a bowl",
    ingredients: [["Pasta", "Makarna", "200 g"], ["Tuna", "Ton balığı", "160 g"], ["Lemon juice", "Limon suyu", "1 tbsp"], ["Olive oil", "Zeytinyağı", "1 tbsp"]],
    steps: "First, cook and cool the pasta. Then, add the drained tuna, lemon juice and olive oil. Finally, mix and serve. (Önce makarnayı pişirip soğutun. Ardından süzülmüş ton balığını, limon suyunu ve zeytinyağını ekleyin. Son olarak karıştırıp servis edin.)",
  },
];

function grammarTabs() {
  return `<p class="eyebrow">RECIPE GRAMMAR & USAGE RULES <span class="tr-highlight">(TARİF DİL BİLGİSİ VE ANLATIM KURALLARI)</span></p><h2>İngilizce Makarna Tarifi Yazarken Dikkat Edilmesi Gereken Dil Kuralları</h2><p class="section-intro">Üç kısa derste kuralı inceleyin, örneği okuyun ve Türkçe karşılığıyla pekiştirin.</p><div class="grammar-tabs"><div class="tab-list" role="tablist" aria-label="Dil kuralı konuları"><button id="tab-overview" role="tab" aria-selected="true" aria-controls="panel-overview" tabindex="0" data-tab="overview"><span>01</span>Genel kurallar</button><button id="tab-imperative" role="tab" aria-selected="false" aria-controls="panel-imperative" tabindex="-1" data-tab="imperative"><span>02</span>Emir kipi</button><button id="tab-sequence" role="tab" aria-selected="false" aria-controls="panel-sequence" tabindex="-1" data-tab="sequence"><span>03</span>Sıra zarfları</button></div><div class="tab-panels"><div id="panel-overview" class="tab-panel" role="tabpanel" aria-labelledby="tab-overview" data-panel="overview">${table(["Kural","İngilizce örnek","Türkçe karşılığı"],[["Emir kipi","Boil the water.","Suyu kaynatın."],["Sıra zarfları","First, boil the water.","Önce suyu kaynatın."],["Sayılabilen/sayılamayan isimler","Add two tomatoes and some salt.","İki domates ve biraz tuz ekleyin."],["Ölçü ifadeleri","Add 1 tablespoon of oil.","1 yemek kaşığı yağ ekleyin."]])}</div><div id="panel-imperative" class="tab-panel" role="tabpanel" aria-labelledby="tab-imperative" data-panel="imperative" hidden><h3>İngilizce Makarna Tarif Metinlerinde Emir Kipi <span class="tr-highlight">(Imperative)</span> Nasıl Kullanılır?</h3><p class="section-intro">Emir kipi, özne kullanmadan fiilin yalın hâliyle başlar: <strong>Boil, add, cook, drain, serve.</strong> Olumsuz talimatta <em>do not</em> kullanılır.</p>${table(["İngilizce emir","Türkçe karşılığı","Fiil"],[["Boil the water.","Suyu kaynatın.","boil"],["Add the pasta.","Makarnayı ekleyin.","add"],["Cook for 10 minutes.","10 dakika pişirin.","cook"],["Drain the pasta.","Makarnayı süzün.","drain"],["Serve while hot.","Sıcakken servis edin.","serve"]])}</div><div id="panel-sequence" class="tab-panel" role="tabpanel" aria-labelledby="tab-sequence" data-panel="sequence" hidden><h3>Bağlaçlar ve Sıra Zarfları: First, Then, After That, Finally</h3>${table(["Sıra zarfı","Türkçe karşılığı","Örnek"],[["First","Önce","First, boil the water."],["Then","Ardından","Then, add the pasta."],["After that","Daha sonra","After that, cook for 10 minutes."],["Next","Sonra","Next, drain the pasta."],["Finally","Son olarak","Finally, serve while hot."]])}<div class="language-card sequence"><small>Kısa tarif paragrafı</small><p>First, boil the water. Then, add the salt and pasta. After that, cook for 8–10 minutes. Next, drain the pasta and add butter. Finally, serve it while hot.</p><p class="translation">Önce suyu kaynatın. Ardından tuz ve makarnayı ekleyin. Daha sonra 8–10 dakika pişirin. Sonra makarnayı süzüp tereyağı ekleyin. Son olarak sıcakken servis edin.</p></div></div></div></div>`;
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

const baklavaQuiz = [
  {
    num: 1,
    question: "What is the golden rule of pouring syrup onto baklava?",
    questionTr: "Baklavaya şerbet dökmenin altın kuralı nedir?",
    options: ["A) Cold syrup over hot baklava", "B) Boiling hot syrup over hot baklava", "C) Cold syrup over cold baklava", "D) Never use lemon in syrup"],
    answer: "A) Cold syrup over hot baklava"
  },
  {
    num: 2,
    question: "Which kitchen action means \"fırçayla yağ sürmek\" in English?",
    questionTr: "\"Fırçayla yağ sürmek\" anlamına gelen İngilizce mutfak fiili hangisidir?",
    options: ["A) Boil", "B) Brush", "C) Drain", "D) Sift"],
    answer: "B) Brush"
  },
  {
    num: 3,
    question: "What does \"phyllo pastry\" mean in Turkish?",
    questionTr: "\"Phyllo pastry\" teriminin Türkçe karşılığı nedir?",
    options: ["A) Ekmek hamuru", "B) Baklavalık yufka", "C) Kabartma tozu", "D) Mayalı çörek"],
    answer: "B) Baklavalık yufka"
  },
  {
    num: 4,
    question: "Which imperative sentence correctly instructs slicing baklava?",
    questionTr: "Baklavayı dilimlemeyi doğru şekilde tarif eden emir cümlesi hangisidir?",
    options: ["A) You are cutting into diamond shapes.", "B) Cut the baklava into diamond shapes.", "C) Cutting diamonds is fun.", "D) Diamond shapes are cut by us."],
    answer: "B) Cut the baklava into diamond shapes."
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
    { number: 1, titleEn: "Prepare the Syrup with Sugar, Water and Lemon", titleTr: "Şeker, Su ve Limonla Şerbeti Hazırlayın", sentenceEn: "First, boil 400 g of sugar and 400 ml of water with 1 tablespoon of lemon juice for 15 minutes, then remove from heat and let it cool completely.", sentenceTr: "İlk olarak 400 g şeker ve 400 ml suyu 1 yemek kaşığı limon suyuyla 15 dakika kaynatın, ardından ocaktan alıp tamamen soğumaya bırakın.", actionEn: "Boiling (Kaynatma)", actionTr: "Şerbet kaynatma", img: "/blog/ingilizce-tarifler/images/steps/baklava-step-1.webp", ingredient: "400 g sugar, 400 ml water, lemon juice", equipment: "Saucepan and stove (Sos tenceresi ve ocak)", time: "15 mins (15 dakika)" },
    { number: 2, titleEn: "Brush the Baking Tray with Melted Butter", titleTr: "Fırın Tepsisini Eritilmiş Tereyağıyla Yağlayın", sentenceEn: "Then, brush a large baking tray generously with melted clarified butter so the pastry does not stick.", sentenceTr: "Ardından hamurun yapışmaması için geniş bir fırın tepsisini eritilmiş sade yağla cömertçe yağlayın.", actionEn: "Brushing (Yağlama)", actionTr: "Tepsi tabanını yağlama", img: "/blog/ingilizce-tarifler/images/steps/baklava-step-2.webp", ingredient: "Clarified butter (Sade yağ)", equipment: "Pastry brush and baking tray (Fırça ve tepsi)", time: "2 mins (2 dakika)" },
    { number: 3, titleEn: "Layer Half of the Phyllo Sheets with Butter", titleTr: "Yufkaların Yarısını Tereyağıyla Katlayın", sentenceEn: "After that, place 20 sheets of phyllo dough one by one into the tray, brushing each individual layer with melted butter.", sentenceTr: "Daha sonra her bir katmanı eritilmiş tereyağıyla yağlayarak 20 adet baklavalık yufkayı tepsiye tek tek dizin.", actionEn: "Layering (Kat Kat Dizme)", actionTr: "Yufka katlama", img: "/blog/ingilizce-tarifler/images/steps/baklava-step-3.webp", ingredient: "20 phyllo sheets, melted butter (20 adet yufka, yağ)", equipment: "Baking tray and pastry brush (Tepsi ve fırça)", time: "20 mins (20 dakika)" },
    { number: 4, titleEn: "Spread the Crushed Walnuts Evenly", titleTr: "Dövülmüş Cevizi Eşit Şekilde Yayın", sentenceEn: "Next, spread 300 g of finely crushed walnuts evenly across the entire surface of the layered phyllo sheets.", sentenceTr: "Sonra 300 g ince dövülmüş cevizi katlanmış yufka tabanının tüm yüzeyine eşit biçimde yayın.", actionEn: "Spreading (Eşit Yayma)", actionTr: "İç harcı yayma", img: "/blog/ingilizce-tarifler/images/steps/baklava-step-4.webp", ingredient: "300 g crushed walnuts or pistachios (300 g ceviz)", equipment: "Cutting board and bowl (Doğrama tahtası)", time: "3 mins (3 dakika)" },
    { number: 5, titleEn: "Layer the Remaining Sheets on Top", titleTr: "Kalan Yufkaları Üzerine Serin", sentenceEn: "Cover the walnut layer with the remaining 20 sheets of phyllo, brushing each layer with butter as before.", sentenceTr: "Ceviz katmanının üzerini kalan 20 yufkayla kapatın ve daha önce olduğu gibi her katı tereyağıyla yağlayın.", actionEn: "Covering (Üstünü Kapatma)", actionTr: "Üst katmanları dizme", img: "/blog/ingilizce-tarifler/images/steps/baklava-step-5.webp", ingredient: "20 phyllo sheets, melted butter (20 adet yufka, yağ)", equipment: "Pastry brush and baking tray (Fırça ve tepsi)", time: "20 mins (20 dakika)" },
    { number: 6, titleEn: "Cut the Baklava into Diamond Shapes", titleTr: "Baklavayı Baklava Dilimi Şeklinde Kesin", sentenceEn: "Using a sharp chef's knife, slice the layered pastry diagonally into traditional diamond or square shapes before baking.", sentenceTr: "Keskin bir mutfak bıçağı kullanarak pişirmeden önce katmanlı tatlıyı geleneksel baklava dilimi veya kare şeklinde kesin.", actionEn: "Slicing (Dilimleme)", actionTr: "Baklava dilimi kesme", img: "/blog/ingilizce-tarifler/images/steps/baklava-step-6.webp", ingredient: "Layered baklava tray (Hazırlanmış tepsi)", equipment: "Sharp chef's knife (Keskin şef bıçağı)", time: "5 mins (5 dakika)" },
    { number: 7, titleEn: "Bake the Baklava Until Golden Brown", titleTr: "Baklavayı Altın Rengi Alana Kadar Pişirin", sentenceEn: "Bake in a preheated oven at 170°C for 45 minutes until the pastry is puffed and golden brown.", sentenceTr: "Önceden 170°C ısıtılmış fırında tatlı kabarıp altın rengini alana dek 45 dakika pişirin.", actionEn: "Baking (Fırınlama)", actionTr: "Fırında pişirme", img: "/blog/ingilizce-tarifler/images/steps/baklava-step-7.webp", ingredient: "Sliced baklava (Dilimlenmiş baklava)", equipment: "Preheated oven at 170°C (170°C fırın)", time: "45 mins (45 dakika)" },
    { number: 8, titleEn: "Soak the Hot Baklava with Cold Syrup", titleTr: "Sıcak Baklavayı Soğuk Şerbetle Islatın", sentenceEn: "Finally, pour the cool syrup evenly over the boiling hot baklava straight out of the oven and let it soak for at least 4 hours.", sentenceTr: "Son olarak fırından yeni çıkmış kaynar baklavanın üzerine soğuk şerbeti eşitçe dökün ve en az 4 saat şerbeti çekmeye bırakın.", actionEn: "Soaking (Şerbetleme)", actionTr: "Şerbet dökme", img: "/blog/ingilizce-tarifler/images/steps/baklava-step-8.webp", ingredient: "Hot baked baklava, cooled syrup (Sıcak baklava, şerbet)", equipment: "Ladle and baking tray (Kepçe ve tepsi)", time: "4 hours resting (4 saat dinlendirme)" }
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

  const baklavaVariantIds = ["homemade-baklava", "fistikli-baklava", "cevizli-baklava", "hazir-yufka-baklava"];

  root.innerHTML = `<article class="pasta-guide recipe-guide">
    <div class="reading-progress" aria-hidden="true"><span></span></div>
    <header class="hero">
      <div>
        <p class="eyebrow">DESSERT &amp; SWEET RECIPES <span class="tr-highlight">(TATLI VE YEMEK TARİFLERİ)</span></p>
        <h1>İngilizce Baklava Tarifi <span class="tr-highlight">(Baklava Yapılışı İngilizce)</span></h1>
        <aside class="course-banner" aria-label="İngilizce kursu">
          <div class="course-banner-text">
            <small class="cta-eyebrow">KONUŞARAK ÖĞREN İNGİLİZCE KURSU</small>
            <strong class="cta-heading">İngilizceyi tarif ezberleyerek değil, konuşarak öğrenin.</strong>
          </div>
          <button class="cta-btn cta-btn-orange" onclick="window.location.href='https://student.konusarakogren.com/auth/register'">Ücretsiz tanışma dersi <span class="arrow">→</span></button>
        </aside>
        <p class="lede"><strong>Turkish Baklava Recipe.</strong> ${formatBilingualText("İngilizce baklava tarifi; incecik yufka katlarını (phyllo layers), şerbet (syrup) dökme kurallarını ve emir kipindeki hazırlık adımlarını Türkçe karşılıklarıyla öğreten kapsamlı bir gastronomi ve dil rehberidir.")}</p>
        <address class="article-meta" rel="author"><span class="author-mark" aria-hidden="true">KO</span><span><strong>Konuşarak Öğren Editör</strong><small>Yayınlanma tarihi: <time datetime="2026-08-01">1 Ağustos 2026</time></small></span></address>
      </div>
      <figure class="hero-visual">
        <img src="/blog/ingilizce-tarifler/images/baklava-hero.webp" alt="Tepside altın sarısı geleneksel ev yapımı baklava dilimleri" loading="eager" fetchpriority="high">
        <figcaption>Homemade Baklava (Ev Yapımı Türk Baklavası)</figcaption>
      </figure>
      ${buildFactsCardHTML({
        title: "Baklava",
        prep: { val: "45 mins (45 dk)", en: "Layering and buttering forty phyllo sheets takes 45 minutes.", tr: "Kırk kat yufkayı tek tek yağlayıp dizmek yaklaşık 45 dakika sürer." },
        cook: { val: "40 mins (40 dk)", en: "Baking until golden and crisp takes 40 to 45 minutes.", tr: "Fırında altın sarısı ve çıtır olana dek pişirme 40-45 dakika sürer." },
        servings: { val: "24 slices (24 dilim)", en: "Yields 24 generous diamond-shaped dessert portions.", tr: "24 dilim zengin ve geleneksel tatlı porsiyonu sunar." },
        level: { val: "B1–B2 (Orta-İleri)", en: "Covers pastry terminology, sequence adverbs and culinary techniques.", tr: "Hamur işi terimleri, sıra zarfları ve püf noktalarına odaklanan orta-ileri düzey." }
      })}
    </header>

    <section class="hero-overview-table" id="definition-variations">
      <p class="eyebrow eyebrow-lg">OVERVIEW &amp; COMPARISON <span class="tr-highlight">(TANIM VE ÇEŞİTLER KARŞILAŞTIRMASI)</span></p>
      <h2 class="definition-heading">English Baklava Recipes: Variations, Fillings and Baking Times <span class="tr-highlight">(İngilizce Baklava Çeşitleri, İç Harçları ve Pişirme Süreleri)</span></h2>
      <p class="section-intro">${formatBilingualText("Aşağıdaki tabloda 4 temel baklava çeşidinin İngilizce isimlerini, iç malzemelerini, yufka katlarını ve fırınlama sürelerini karşılaştırmalı olarak inceleyebilirsiniz.")}</p>
      ${table(["Baklava Variation (Baklava Çeşidi)", "Main Filling & Fat (Ana Harç ve Yağ Türü)", "Layers & Time (Kat Sayısı ve Süre)", "Calories (Kalori)"], [
        ["Homemade Baklava (Ev Yapımı Baklava)", "Walnuts, clarified butter, sugar syrup (Ceviz, sade yağ, şerbet)", "40 sheets, 45 mins (40 kat, 45 dk)", "380 kcal / 1 piece"],
        ["Pistachio Baklava (Fıstıklı Baklava)", "Gaziantep green pistachios, clarified butter (Boz Antep fıstığı, sade yağ)", "40 sheets, 50 mins (40 kat, 50 dk)", "410 kcal / 1 piece"],
        ["Walnut Baklava (Cevizli Baklava)", "Crushed walnuts, unsalted butter (Dövülmüş ceviz içi, tereyağı)", "36 sheets, 45 mins (36 kat, 45 dk)", "390 kcal / 1 piece"],
        ["Ready Phyllo Baklava (Hazır Yufkadan Baklava)", "Store-bought phyllo, mixed nuts, butter (Hazır baklavalık yufka, ceviz veya fıstık, yağ)", "30-40 sheets, 40 mins (30-40 kat, 40 dk)", "370 kcal / 1 piece"]
      ])}
    </section>

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
          <p class="eyebrow">CORE CONCEPTS &amp; VOCABULARY <span class="tr-highlight">(TEMEL KAVRAMLAR VE SÖZLÜK)</span></p>
          <h2>İngilizce Baklava Tarifi Kavramları ve Türkçe Karşılıkları</h2>
          
          ${buildAppBannerHTML("Baklava")}
          <p class="section-intro">İngilizcede <strong>phyllo pastry</strong> kağıt inceliğindeki özel baklava yufkasını, <strong>clarified butter</strong> suyu ve süt köpüğü ayrıştırılmış saf sade yağı, <strong>sugar syrup</strong> ise limonlu tatlı şerbeti ifade eder.</p>

          <div class="grammar-tabs section-tabs">
            <div class="tab-list" role="tablist" aria-label="Temel Kavramlar ve Fiiller">
              <button role="tab" aria-selected="true" tabindex="0" data-tab="baklava-terms" class="active"><span class="tab-idx">01</span><span class="tab-title">Terms (Kavramlar)</span></button>
              <button role="tab" aria-selected="false" tabindex="-1" data-tab="baklava-verbs"><span class="tab-idx">02</span><span class="tab-title">Kitchen Verbs (Mutfak Fiilleri)</span></button>
            </div>
            <div class="tab-panels">
              <div class="tab-panel active" role="tabpanel" data-panel="baklava-terms">
                <h3>Baklava Kelimesi İngilizce Sözlüklerde: Phyllo, Syrup, Pistachio Terimleri</h3>
                ${table(["İngilizce Kavram", "Türkçe Karşılığı", "Kullanım Alanı"], [
                  ["Phyllo pastry (veya Filo dough)", "Baklavalık yufka", "Baklavanın katmanlarını oluşturan çok ince hamur"],
                  ["Sugar syrup (veya Simple syrup)", "Tatlı şerbet", "Pişen sıcak baklavaya dökülen şekerli ve limonlu sıvı"],
                  ["Clarified butter (Ghee)", "Sade yağ", "Yanmayı önleyen, süt proteini ayrılmış saf tereyağı"],
                  ["Pistachio", "Antep fıstığı", "Fıstıklı baklavanın zümrüt yeşili zengin iç dolgusu"],
                  ["Walnut", "Ceviz", "Geleneksel ev baklavasının klasik iç harcı"],
                  ["Diamond cut", "Baklava dilimi kesimi", "Fırınlamadan önce yapılan geleneksel verev kesim"]
                ])}
              </div>
              <div class="tab-panel" role="tabpanel" data-panel="baklava-verbs" hidden>
                <h3>İngilizce Tarif Yazımında Kullanılan Fiiller: Layer, Brush, Bake, Soak</h3>
                ${table(["İngilizce Fiil", "Türkçe Karşılığı", "Örnek Tarif Cümlesi"], [
                  ["Layer", "Kat kat dizmek veya sermek", "Layer twenty sheets of phyllo into the pan."],
                  ["Brush", "Fırçayla yağ sürmek", "Brush each layer generously with melted butter."],
                  ["Spread", "Eşit biçimde yaymak", "Spread crushed walnuts evenly across the surface."],
                  ["Bake", "Fırında pişirmek", "Bake in the oven at 170°C for 45 minutes."],
                  ["Soak", "Şerbeti çekmek veya ıslatmak", "Pour cold syrup so the hot pastry can soak it up."],
                  ["Slice", "Dilimlemek veya kesmek", "Slice into neat diamond shapes before baking."]
                ])}
              </div>
            </div>
          </div>
        </section>

        <div id="tarifler" class="recipe-chapters">
          <div class="chapter-intro">
            <p class="eyebrow eyebrow-lg">4 BAKLAVA VARIATIONS <span class="tr-highlight">(4 FARKLI BAKLAVA TARİFİ)</span></p>
            <p class="section-intro">Her tarifte malzeme listesi, ölçüler, görsel malzeme listesi ve İngilizce yapılış özeti yer alır.</p>
          </div>

          <nav class="variant-subnav" aria-label="Baklava Çeşitleri Hızlı Erişim">
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
          </nav>

          ${baklavaVariants.map((v, i) => `
            <section id="${baklavaVariantIds[i]}" class="recipe-chapter">
              <div class="chapter-head">
                <span class="variant-number">${String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h2>${v.briefTitle}</h2>
                  <p>${v.description}</p>
                  ${buildChapterMetaHTML({
                    time: { val: "45-50 mins (45-50 dakika)", en: "Total baking and preparation time.", tr: "Toplam hazırlık ve fırınlama süresi." },
                    servings: { val: "24 slices (24 dilim)", en: "Serves 24 dessert portions.", tr: "24 dilim porsiyon sunar." },
                    count: { val: `${v.ingredients.length} ingredients (${v.ingredients.length} malzeme)`, en: "Made with authentic ingredients.", tr: `${v.ingredients.length} geleneksel malzeme içerir.` }
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
                    ${table(["İngilizce malzeme", "Türkçe karşılığı", "Miktar"], v.ingredients)}
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
          `).join("")}
        </div>

        <section id="adim-adim">
          <div class="steps-heading">
            <p class="eyebrow eyebrow-lg">FIXED 8 STEPS <span class="tr-highlight">(SABİT 8 ADIM)</span></p>
            <h2>How Do You Make Homemade Baklava Step by Step? <span class="tr-highlight">(Ev Yapımı Baklava İngilizce Adım Adım Nasıl Yapılır?)</span></h2>
            <p class="section-intro"><strong>Homemade walnut baklava consists of 8 sequential cooking steps.</strong> <span class="tr-highlight">(Ev yapımı cevizli baklava 8 temel adımdan oluşur; mutfak eylemleri ve emir kipi kalıpları aşağıda detaylandırılmıştır.)</span></p>
            ${buildStepsMetaHTML({
              steps: { val: "8 steps (8 adım)", en: "Follow the 8 sequential steps to bake traditional crispy baklava.", tr: "Geleneksel çıtır baklava pişirmek için 8 adımlı yönergeyi sırasıyla takip edin." },
              time: { val: "85 mins (85 dakika)", en: "Preparation and slow oven baking time.", tr: "Hazırlık ve fırında nar gibi pişirme süresi." },
              level: { val: "Level B1–B2 (B1–B2 seviye)", en: "Focuses on pastry layering, brushing, and syrup verbs.", tr: "Yufka katlama, yağlama ve şerbet dökme fiillerini içerir." }
            })}
          </div>
          ${buildStepAccordionHTML(baklavaSteps)}
          ${table(["Adım No", "İngilizce Talimat", "Türkçe Karşılığı"], baklavaSteps.map((s, i) => [i + 1, s.sentenceEn, s.sentenceTr]))}
        </section>

        <section id="malzemeler-ve-ekipman">
          <p class="eyebrow eyebrow-lg">ESSENTIAL INGREDIENTS &amp; TOOLS <span class="tr-highlight">(MALZEMELER VE EKİPMANLAR)</span></p>
          <h2>Which Ingredients Are Essential for Baklava? <span class="tr-highlight">(Baklava İçin Hangi Malzemeler Şarttır?)</span></h2>
          <p class="section-intro">Kusursuz bir baklava için kaliteli taze un veya baklavalık yufka, yanmayan sade yağ, taze kuruyemiş ve kristalleşmeyen berrak şeker şerbeti şarttır.</p>

          <div class="grammar-tabs section-tabs">
            <div class="tab-list" role="tablist" aria-label="Malzemeler ve Ekipmanlar">
              <button role="tab" aria-selected="true" tabindex="0" data-tab="baklava-ing" class="active"><span class="tab-idx">01</span><span class="tab-title">Ingredients (Malzemeler)</span></button>
              <button role="tab" aria-selected="false" tabindex="-1" data-tab="baklava-eq"><span class="tab-idx">02</span><span class="tab-title">Equipment (Ekipmanlar)</span></button>
            </div>
            <div class="tab-panels">
              <div class="tab-panel active" role="tabpanel" data-panel="baklava-ing">
                <h3>Baklava Malzemeleri ve Kalite Kriterleri</h3>
                ${table(["Malzeme (Ingredient)", "Önemi ve İşlevi", "Kalite Kriteri"], [
                  ["Phyllo Sheets (Baklavalık Yufka)", "Kat kat çıtır dokuyu sağlayan temel yapı", "Tül inceliğinde, yırtılmamış ve nemini korumuş olmalıdır"],
                  ["Clarified Butter (Sade Yağ)", "Yufkaların kabarmasını ve çıtırlaşmasını sağlar", "Suyu ve süt tortusu tamamen ayrıştırılmış saf tereyağı"],
                  ["Walnuts veya Pistachios (Kuruyemiş)", "Tatlıya gövde ve karakteristik lezzet verir", "Yeni mahsul, taze dövülmüş ve acılaşmamış olmalıdır"],
                  ["Sugar and Water (Şeker ve Su)", "Şerbetin tatlılık dengesini ve viskozitesini sağlar", "Doğal pancar şekeri ve taze sıkılmış limon suyu kullanılmalıdır"]
                ])}
              </div>
              <div class="tab-panel" role="tabpanel" data-panel="baklava-eq" hidden>
                <h3>What Equipment Do You Need to Make Baklava? <span class="tr-highlight">(Baklava Yapmak İçin Hangi Ekipmanlar Gerekir?)</span></h3>
                ${table(["İngilizce Ekipman", "Türkçe Karşılığı", "Kullanıldığı Aşama"], [
                  ["Rectangular baking tray", "Köşeli fırın tepsisi", "Yufkaların kat kat dizilmesi ve fırınlanması"],
                  ["Pastry brush", "Yumurta veya yağ sürme fırçası", "Yufkaların arasına tereyağı sürülmesi"],
                  ["Sharp chef's knife", "Keskin şef bıçağı", "Baklavanın fırına girmeden önce dilimlenmesi"],
                  ["Saucepan", "Sos tenceresi", "Şeker şerbetinin kaynatılması"],
                  ["Rolling pin (veya Oklava)", "İnce oklava", "El açması yufkaların inceltilmesi"]
                ])}
              </div>
            </div>
          </div>
        </section>

        <section id="besin-degerleri">
          <p class="eyebrow eyebrow-lg">CALORIES &amp; NUTRITION <span class="tr-highlight">(KALORİ VE BESİN DEĞERLERİ)</span></p>
          <h2>How Many Calories Is 1 Piece of Baklava? <span class="tr-highlight">(1 Dilim Baklava Kaç Kalori?)</span></h2>
          <p class="section-intro">Standart bir dilim cevizli baklava (yaklaşık 40–45 g) yaklaşık <strong>160–180 kcal</strong> enerji içerir; porsiyon olarak iki dilim tüketildiğinde enerji değeri <strong>350–380 kcal</strong> bandına ulaşır.</p>

          <div class="grammar-tabs section-tabs">
            <div class="tab-list" role="tablist" aria-label="Kalori ve Besin Değerleri">
              <button role="tab" aria-selected="true" tabindex="0" data-tab="baklava-cal" class="active"><span class="tab-idx">01</span><span class="tab-title">Portions &amp; Calories (Porsiyon Kalorileri)</span></button>
              <button role="tab" aria-selected="false" tabindex="-1" data-tab="baklava-nut"><span class="tab-idx">02</span><span class="tab-title">Nutrition Facts (Besin Ögeleri)</span></button>
            </div>
            <div class="tab-panels">
              <div class="tab-panel active" role="tabpanel" data-panel="baklava-cal">
                <h3>Baklava Dilim Porsiyonları ve Kalori Değerleri</h3>
                ${table(["Porsiyon Ölçüsü", "Kalori (Energy)", "Açıklama"], [
                  ["1 dilim cevizli baklava (40 g)", "175 kcal", "Tek dilim ortalama değer"],
                  ["1 dilim fıstıklı baklava (40 g)", "190 kcal", "Fıstığın doğal yağı nedeniyle biraz daha zengin"],
                  ["1 porsiyon (2 dilim, 80 g)", "360 kcal", "Geleneksel tatlı tabağı servisi"]
                ])}
              </div>
              <div class="tab-panel" role="tabpanel" data-panel="baklava-nut" hidden>
                <h3>What Are the Nutrition Facts of Walnut Baklava? <span class="tr-highlight">(Cevizli Baklavanın Besin Değerleri Nelerdir?)</span></h3>
                ${table(["Besin Ögesi (Nutrient)", "100 g Miktar", "1 Dilim (40 g) Miktar"], [
                  ["Carbohydrate (Karbonhidrat)", "52 g", "21 g"],
                  ["Sugar (Şeker)", "29 g", "12 g"],
                  ["Fat (Yağ)", "24 g", "9.6 g"],
                  ["Protein (Protein)", "6.8 g", "2.7 g"],
                  ["Dietary Fiber (Lif)", "2.4 g", "1.0 g"]
                ])}
                <p class="source-note">Besin değerleri Türk mutfağı cevizli baklava analizlerine ve <a href="https://fdc.nal.usda.gov/" target="_blank" rel="noreferrer">USDA FoodData Central</a> verilerine dayanmaktadır.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="puf-noktalari">
          <p class="eyebrow eyebrow-lg">CRITICAL PASTRY RULES <span class="tr-highlight">(ÖNEMLİ PÜF NOKTALARI)</span></p>
          <h2>Kaç Kat Yufka? Baklava Katmanları İngilizce Nasıl Anlatılır?</h2>

          <div class="grammar-tabs section-tabs">
            <div class="tab-list" role="tablist" aria-label="Baklava Püf Noktaları">
              <button role="tab" aria-selected="true" tabindex="0" data-tab="baklava-layers" class="active"><span class="tab-idx">01</span><span class="tab-title">Phyllo Layers (40 Kat Yufka Kuralı)</span></button>
              <button role="tab" aria-selected="false" tabindex="-1" data-tab="baklava-syrup"><span class="tab-idx">02</span><span class="tab-title">Syrup Rule (Sıcak Baklavaya Soğuk Şerbet)</span></button>
            </div>
            <div class="tab-panels">
              <div class="tab-panel active" role="tabpanel" data-panel="baklava-layers">
                <h3>Kaç Kat Yufka? Katman Anlatımının İngilizce İfadesi</h3>
                <p class="section-intro">Geleneksel Türk baklavasında en az <strong>36 ila 40 kat</strong> yufka kullanılır. İngilizce tarif metinlerinde katman anlatımı şöyle yapılır: <em>"A classic Turkish baklava requires at least 40 paper-thin sheets of phyllo dough to create its signature flaky structure." (Klasik bir Türk baklavası, kendine has çıtır katmanlarını oluşturmak için en az 40 tül inceliğinde yufka katı gerektirir.)</em></p>
                <div class="language-card">
                  <small>Geleneksel Kural (Golden Rule)</small>
                  <p><strong>"Layer at least forty micro-thin sheets of phyllo dough, brushing every single layer with melted clarified butter."</strong></p>
                  <p class="translation">"Her bir katı eritilmiş sade yağla yağlayarak en az kırk incecik yufka katı serin."</p>
                </div>
              </div>
              <div class="tab-panel" role="tabpanel" data-panel="baklava-syrup" hidden>
                <h3>Şerbet <span class="tr-highlight">(Syrup)</span> Dökme Kuralı: Hot on Cold İngilizce Nasıl Açıklanır?</h3>
                <p class="section-intro">Baklavanın hamurlaşmadan çıtır çıtır kalmasının altın kuralı <strong>sıcak tatlıya soğuk şerbet</strong> (veya ılık tatlıya sıcak şerbet) dökmektir. İngilizce bu kural şöyle ifade edilir: <strong>"Always pour cold syrup over bubbling hot baklava. If both are hot, the pastry will become soggy." (Daima fırından yeni çıkmış kaynar baklavanın üzerine soğuk şerbet dökün. İkisi de sıcak olursa tatlı hamurlaşır.)</strong></p>
                <div class="language-card">
                  <small>Şerbet Sıcaklık Dengesi (Syrup Temperature Rule)</small>
                  <p><strong>Hot Baklava + Cold Syrup = Maximum Crispness (Sıcak Baklava + Soğuk Şerbet = Kusursuz Çıtırlık)</strong></p>
                  <p class="translation">Tatlı fırından çıktığı anda cızırdayarak şerbeti emer, yumuşamadan saatlerce çıtırlığını korur.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="olculer">
          <p class="eyebrow eyebrow-lg">MEASUREMENT UNITS &amp; VOCABULARY <span class="tr-highlight">(ÖLÇÜ BİRİMLERİ VE MUTFAK KELİMELERİ)</span></p>
          <h2>İngilizce Baklava Tariflerinde Kullanılan Ölçü Birimleri Nelerdir?</h2>
          <p class="section-intro">Baklava tariflerinde hassas gramaj tartımı, cup (su bardağı) ve tablespoon (yemek kaşığı) ölçüleri kullanılır.</p>

          <div class="grammar-tabs section-tabs">
            <div class="tab-list" role="tablist" aria-label="Mutfak Terimleri ve Ölçüler">
              <button role="tab" aria-selected="true" tabindex="0" data-tab="baklava-vocab-tab" class="active"><span class="tab-idx">01</span><span class="tab-title">Kitchen Vocabulary (Mutfak Terimleri)</span></button>
              <button role="tab" aria-selected="false" tabindex="-1" data-tab="baklava-units-tab"><span class="tab-idx">02</span><span class="tab-title">Spoon &amp; Cup (Kaşık ve Bardak Ölçüleri)</span></button>
              <button role="tab" aria-selected="false" tabindex="-1" data-tab="baklava-metric-tab"><span class="tab-idx">03</span><span class="tab-title">Metric Weights (Gram ve Mililitre)</span></button>
            </div>
            <div class="tab-panels">
              <div class="tab-panel active" role="tabpanel" data-panel="baklava-vocab-tab">
                <h3>Baklava Tarif Metninde Geçen Temel İngilizce Mutfak Kelimeleri Nelerdir?</h3>
                <div class="vocab vocab-wide">
                  ${baklavaVocab.map(v => `<article><h4>${v[0]}</h4><strong>${v[1]}</strong><p>${v[2]}</p></article>`).join("")}
                </div>
              </div>
              <div class="tab-panel" role="tabpanel" data-panel="baklava-units-tab" hidden>
                <h3>Tablespoon, Teaspoon, Cup: İngilizce Ölçü Birimlerinin Türkçe Karşılıkları</h3>
                ${table(["İngilizce Ölçü Birimi", "Türkçe Karşılığı", "Metrik Eşdeğeri", "Tarif Cümlesi Örneği"], [
                  ["1 cup (c)", "1 su bardağı", "200 g şeker veya 240 ml su", "Add 2 cups of sugar to the saucepan."],
                  ["1 tablespoon (tbsp)", "1 yemek kaşığı", "15 ml veya 15 g", "Add 1 tablespoon of fresh lemon juice."],
                  ["1 teaspoon (tsp)", "1 tatlı veya çay kaşığı", "5 ml veya 5 g", "Add 1 teaspoon of ground cinnamon if desired."]
                ])}
              </div>
              <div class="tab-panel" role="tabpanel" data-panel="baklava-metric-tab" hidden>
                <h3>Gram ve Litre İngilizce Tariflerde Nasıl Kullanılır?</h3>
                ${table(["Metrik Ölçü", "İngilizce Yazımı", "Kullanım Şekli"], [
                  ["300 gram", "300 g veya 300 grams", "Weigh 300 g of crushed walnuts."],
                  ["250 gram", "250 g of clarified butter", "Melt 250 g of butter gently."],
                  ["400 mililitre", "400 ml of water", "Simmer 400 ml of water with sugar."]
                ])}
              </div>
            </div>
          </div>
        </section>

        <section id="dil-kurallari">
          <p class="eyebrow eyebrow-lg">GRAMMAR RULES <span class="tr-highlight">(DİL BİLGİSİ VE YAZIM KURALLARI)</span></p>
          <h2>İngilizce Baklava Tarifi Yazarken Dikkat Edilmesi Gereken Dil Kuralları</h2>
          <p class="section-intro">İngilizce tariflerde doğrudan emir kipi (imperatives) ve adım geçişlerini bağlayan zaman zarfları (sequencing adverbs) esastır.</p>

          <div class="grammar-tabs">
            <div class="tab-list" role="tablist" aria-label="Dil kuralı konuları">
              <button role="tab" aria-selected="true" tabindex="0" data-tab="imperative" class="active"><span class="tab-idx">01</span><span class="tab-title">Emir Kipi (Imperatives)</span></button>
              <button role="tab" aria-selected="false" tabindex="-1" data-tab="sequence"><span class="tab-idx">02</span><span class="tab-title">Sıra Zarfları (Connectors)</span></button>
            </div>
            <div class="tab-panels">
              <div class="tab-panel active" role="tabpanel" data-panel="imperative">
                <h3>İngilizce Baklava Tarif Metinlerinde Emir Kipi <span class="tr-highlight">(Imperative)</span> Nasıl Kullanılır?</h3>
                <p class="section-intro">Emir cümleleri özne içermez; doğrudan fiilin yalın haliyle başlar: <strong>Brush each layer, cut into diamond shapes, pour the cool syrup.</strong></p>
                ${table(["İngilizce Emir Cümlesi", "Türkçe Anlamı", "Kullanılan Fiil"], [
                  ["Brush every phyllo sheet with butter.", "Her yufkayı tereyağıyla yağlayın.", "Brush (Fırçayla yağlamak)"],
                  ["Spread the crushed nuts evenly.", "Dövülmüş kuruyemişi eşitçe yayın.", "Spread (Yaymak)"],
                  ["Cut the pastry diagonally.", "Hamuru verev biçimde dilimleyin.", "Cut veya Slice (Kesmek)"],
                  ["Do not pour hot syrup on hot baklava.", "Sıcak baklavaya sıcak şerbet dökmeyin.", "Do not pour (Dökmeyin)"]
                ])}
              </div>
              <div class="tab-panel" role="tabpanel" data-panel="sequence" hidden>
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

                <section id="alistirma" class="exercise">
          <p class="eyebrow" style="color:#93c5fd;">PRACTICE &amp; QUIZ <span class="tr-highlight">(KAZANIM KONTROLÜ VE ALIŞTIRMALAR)</span></p>
          <h2 style="color:#ffffff;">8. Sınıf İngilizce Smoothie Tarifi Alıştırma ve Quizi</h2>
          <p class="section-intro" style="color:#cbd5e1;">Öğrendiğiniz meyve isimlerini, blender eylemlerini ve sıralama bağlaçlarını bu interaktif testle pekiştirin.</p>

          <div class="quiz-grid" style="display: flex; flex-direction: column; gap: 1.5rem; margin-top: 2rem;">
            ${smoothieQuiz.map((q, idx) => `
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
        ${getRelatedRecipesHTML("baklava")}
      </div>
    </div>
  </article>`;

  initQuizInteractivity(root, "Baklava", renderBaklavaPage);
  initVariantSubnavScroll(root);
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

const smoothieQuiz = [
  {
    num: 1,
    question: "Which English verb means \"meyvenin kabuğunu soymak\"?",
    questionTr: "\"Meyvenin kabuğunu soymak\" anlamına gelen İngilizce fiil hangisidir?",
    options: ["A) Bake", "B) Peel", "C) Boil", "D) Drain"],
    answer: "B) Peel"
  },
  {
    num: 2,
    question: "Why is frozen fruit preferred over fresh fruit in a smoothie?",
    questionTr: "Smoothie yaparken dondurulmuş meyve neden taze meyveye tercih edilir?",
    options: ["A) It gives a thick, creamy texture without needing ice", "B) It is much sweeter than fresh fruit", "C) It changes the color to green", "D) It makes the blender run faster"],
    answer: "A) It gives a thick, creamy texture without needing ice"
  },
  {
    num: 3,
    question: "What is the difference between a smoothie and a milkshake?",
    questionTr: "Smoothie ile milkshake arasındaki temel fark nedir?",
    options: ["A) Smoothie is based on fruit, milk or yogurt; milkshake is based on ice cream", "B) Milkshake has no dairy", "C) Smoothie cannot contain banana", "D) There is no difference"],
    answer: "A) Smoothie is based on fruit, milk or yogurt; milkshake is based on ice cream"
  },
  {
    num: 4,
    question: "Which kitchen appliance is essential for making a smooth blended drink?",
    questionTr: "Pürüzsüz bir smoothie hazırlamak için zorunlu olan mutfak aleti hangisidir?",
    options: ["A) Oven", "B) Blender", "C) Whisk", "D) Rolling pin"],
    answer: "B) Blender"
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
    { number: 1, titleEn: "Peel and Slice 2 Bananas", titleTr: "2 Muzu Soyun ve Dilimleyin", sentenceEn: "First, peel 2 ripe bananas with your hands and slice them into thick rounds with a kitchen knife.", sentenceTr: "İlk olarak 2 olgun muzu elinizle soyun ve bir mutfak bıçağıyla kalın halkalar halinde dilimleyin.", actionEn: "Peeling & Slicing (Soyma ve Dilimleme)", actionTr: "Meyve hazırlığı", img: "/blog/ingilizce-tarifler/images/steps/smoothie-step-1.webp", ingredient: "2 ripe bananas (2 adet olgun muz)", equipment: "Kitchen knife & cutting board (Mutfak bıçağı ve tahta)", time: "2 mins (2 dakika)" },
    { number: 2, titleEn: "Add the Milk, Yogurt and Honey to the Blender", titleTr: "Sütü, Yoğurdu ve Balı Blendera Ekleyin", sentenceEn: "Then, pour 1 cup of cold milk into the blender jar first, followed by ½ cup of yogurt, sliced bananas and 1 tablespoon of natural honey.", sentenceTr: "Ardından blender haznesine önce 1 su bardağı soğuk sütü dökün, ardından ½ su bardağı yoğurdu, dilimlenmiş muzları ve 1 yemek kaşığı doğal balı ekleyin.", actionEn: "Adding (Malzemeleri Hazneye Ekleme)", actionTr: "Sıvı ve katıları ekleme", img: "/blog/ingilizce-tarifler/images/steps/smoothie-step-2.webp", ingredient: "1 cup cold milk, 1/2 cup yogurt, 1 tbsp honey", equipment: "Blender jar (Blender haznesi)", time: "1 min (1 dakika)" },
    { number: 3, titleEn: "Blend the Mixture Until Smooth", titleTr: "Karışımı Pürüzsüz Olana Kadar Çekin", sentenceEn: "After that, secure the lid and blend the ingredients on high speed for 45 to 60 seconds until completely creamy and velvety smooth.", sentenceTr: "Daha sonra kapağı sıkıca kapatın ve malzemeleri tamamen kremamsı ve ipeksi bir kıvama gelene kadar yüksek hızda 45-60 saniye çekin.", actionEn: "Blending (Blenderda Çekme)", actionTr: "Yüksek hızda püre yapma", img: "/blog/ingilizce-tarifler/images/steps/smoothie-step-3.webp", ingredient: "Ingredients in blender jar (Haznedeki malzemeler)", equipment: "High-speed blender (Yüksek hızlı blender)", time: "1 min (1 dakika)" },
    { number: 4, titleEn: "Pour the Smoothie into a Glass and Serve", titleTr: "Smoothie'yi Bardağa Dökün ve Servis Edin", sentenceEn: "Finally, pour the fresh smoothie into 2 chilled drinking glasses, garnish with a fresh mint leaf or banana slice, and serve immediately.", sentenceTr: "Son olarak taze smoothieyi 2 soğuk bardağa dökün, taze nane yaprağı veya muz dilimiyle süsleyip bekletmeden servis edin.", actionEn: "Pouring & Serving (Dökme ve Servis)", actionTr: "Bardağa aktarma", img: "/blog/ingilizce-tarifler/images/steps/smoothie-step-4.webp", ingredient: "Fresh smoothie, mint leaf garnish (Taze smoothie, nane)", equipment: "2 chilled tall glasses (2 adet soğuk bardak)", time: "1 min (1 dakika)" }
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

  const smoothieVariantIds = ["banana-smoothie", "strawberry-smoothie", "green-smoothie", "protein-smoothie"];

  root.innerHTML = `<article class="pasta-guide recipe-guide">
    <div class="reading-progress" aria-hidden="true"><span></span></div>
    <header class="hero">
      <div>
        <p class="eyebrow">DRINK &amp; BEVERAGE RECIPES <span class="tr-highlight">(İÇECEK TARİFLERİ)</span></p>
        <h1>İngilizce Smoothie Tarifi <span class="tr-highlight">(Smoothie Yapılışı İngilizce)</span></h1>
        <aside class="course-banner" aria-label="İngilizce kursu">
          <div class="course-banner-text">
            <small class="cta-eyebrow">KONUŞARAK ÖĞREN İNGİLİZCE KURSU</small>
            <strong class="cta-heading">İngilizceyi tarif ezberleyerek değil, konuşarak öğrenin.</strong>
          </div>
          <button class="cta-btn cta-btn-orange" onclick="window.location.href='https://student.konusarakogren.com/auth/register'">Ücretsiz tanışma dersi <span class="arrow">→</span></button>
        </aside>
        <p class="lede"><strong>Banana Smoothie Recipe.</strong> ${formatBilingualText("İngilizce smoothie tarifi; taze meyveleri, blender ayarlarını, sıvı–meyve dengesini ve emir kipindeki hazırlama adımlarını Türkçe karşılıklarıyla öğreten modern ve enerjik bir İngilizce içecek rehberidir.")}</p>
        <address class="article-meta" rel="author"><span class="author-mark" aria-hidden="true">KO</span><span><strong>Konuşarak Öğren Editör</strong><small>Yayınlanma tarihi: <time datetime="2026-08-01">1 Ağustos 2026</time></small></span></address>
      </div>
      <figure class="hero-visual">
        <img src="/blog/ingilizce-tarifler/images/smoothie-hero.webp" alt="Cam bardakta servis edilen taze kremamsı muzlu smoothie" loading="eager" fetchpriority="high">
        <figcaption>Banana Smoothie (Muzlu Smoothie)</figcaption>
      </figure>
      ${buildFactsCardHTML({
        title: "Smoothie",
        prep: { val: "5 mins (5 dk)", en: "Peeling, slicing fruit and measuring liquids takes 5 minutes.", tr: "Meyve soyma, dilimleme ve sıvıları ölçme yaklaşık 5 dakika sürer." },
        cook: { val: "0 mins (0 dk)", en: "No stove or baking needed; made entirely in a blender.", tr: "Ocak veya fırın gerekmez; tamamen blenderda hazırlanır." },
        servings: { val: "2 glasses (2 bardak)", en: "Yields 2 large refreshing drinking glasses.", tr: "2 büyük ferahlatıcı servis bardağı sunar." },
        level: { val: "A1–A2 (Temel Seviye)", en: "Focuses on daily action verbs, kitchen equipment and fruit terms.", tr: "Günlük eylem fiilleri, mutfak aletleri ve meyve terimlerine odaklanan temel seviye." }
      })}
    </header>

    <section class="hero-overview-table" id="definition-variations">
      <p class="eyebrow eyebrow-lg">OVERVIEW &amp; COMPARISON <span class="tr-highlight">(TANIM VE ÇEŞİTLER KARŞILAŞTIRMASI)</span></p>
      <h2 class="definition-heading">English Smoothie Recipes: Variations, Ingredients and Nutrient Profiles <span class="tr-highlight">(İngilizce Smoothie Çeşitleri, Malzemeleri ve Besin Profilleri)</span></h2>
      <p class="section-intro">${formatBilingualText("Aşağıdaki tabloda 4 popüler smoothie çeşidinin İngilizce isimlerini, sıvı ve meyve bileşenlerini ve enerji değerlerini inceleyebilirsiniz.")}</p>
      ${table(["Smoothie Variation (Çeşit)", "Key Ingredients (Temel Malzemeler)", "Function & Best Time (İşlev ve Tüketim Zamanı)", "Calories (Kalori)"], [
        ["Banana Smoothie (Muzlu Smoothie)", "Bananas, milk, yogurt, honey (Muz, süt, yoğurt, bal)", "Energy breakfast (Kahvaltı ve enerji)", "210 kcal / glass"],
        ["Strawberry Smoothie (Çilekli Smoothie)", "Strawberries, almond milk, chia (Çilek, badem sütü, chia)", "Refreshing snack (Serinletici ara öğün)", "185 kcal / glass"],
        ["Green Smoothie (Yeşil Smoothie)", "Spinach, green apple, cucumber, lemon (Ispanak, elma, salatalık, limon)", "Detox & wellness (Detoks ve zindelik)", "140 kcal / glass"],
        ["Protein Smoothie (Proteinli Smoothie)", "Protein powder, peanut butter, oat milk (Protein tozu, fıstık ezmesi, yulaf sütü)", "Post-workout recovery (Antrenman sonrası)", "320 kcal / glass"]
      ])}
    </section>

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
          <p class="eyebrow">CORE CONCEPTS &amp; VOCABULARY <span class="tr-highlight">(TEMEL KAVRAMLAR VE SÖZLÜK)</span></p>
          <h2>Smoothie Tarifinin İngilizce Terim Sözlüğü: Temel Kavramlar</h2>

          <div class="grammar-tabs section-tabs">
            <div class="tab-list" role="tablist" aria-label="Temel Kavramlar ve Fiiller">
              <button role="tab" aria-selected="true" tabindex="0" data-tab="smoothie-terms" class="active"><span class="tab-idx">01</span><span class="tab-title">Terms (Kavramlar)</span></button>
              <button role="tab" aria-selected="false" tabindex="-1" data-tab="smoothie-verbs"><span class="tab-idx">02</span><span class="tab-title">Kitchen Verbs (Mutfak Fiilleri)</span></button>
            </div>
            <div class="tab-panels">
              <div class="tab-panel active" role="tabpanel" data-panel="smoothie-terms">
                <h3>Smoothie mi Shake mi? İçerik Farkı İngilizce Nasıl Anlatılır?</h3>
                <p class="section-intro">İngilizcede <strong>smoothie</strong> meyve, sebze, yoğurt ve süt/su karışımıyla yapılan sağlıklı ve posalı içecekleri anlatırken; <strong>milkshake</strong> ise dondurma, süt ve aromatik şuruplarla hazırlanan tatlı bir süt tatlısıdır.</p>
                ${table(["İngilizce Kavram", "Türkçe Karşılığı", "Temel Ayrım"], [
                  ["Smoothie", "Meyveli veya Sebzeli Püre İçecek", "Meyve, yoğurt ve sağlıklı sıvılarla hazırlanır; lif oranı yüksektir"],
                  ["Milkshake", "Dondurmalı Sütlü İçecek", "Süt ve dondurma bazlıdır; tatlı ve kalorili bir içecektir"],
                  ["Green smoothie", "Yeşil detoks içeceği", "Ispanak veya karalahana gibi taze yeşilliklerle meyvelerin karışımıdır"],
                  ["Slushie", "Kırılmış buzlu meyve içeceği", "Yoğurt veya süt içermeyen, tamamen buz ve meyve suyu bazlı içecektir"]
                ])}
              </div>
              <div class="tab-panel" role="tabpanel" data-panel="smoothie-verbs" hidden>
                <h3>İngilizce Tarif Yazımında Kullanılan Fiiller: Peel, Slice, Blend, Serve</h3>
                ${table(["İngilizce Fiil", "Türkçe Karşılığı", "Örnek Cümle"], [
                  ["Peel", "Kabuğunu soymak", "Peel 2 bananas before adding them to the pitcher."],
                  ["Slice", "Dilimlemek", "Slice the fresh fruit into smaller pieces for easy blending."],
                  ["Blend", "Blenderda homojen çekmek", "Blend on high speed for 45 seconds until smooth."],
                  ["Pour", "Bardağa dökmek", "Pour the cold drink into glasses and serve right away."],
                  ["Puree", "Püre yapmak", "Puree the ingredients until completely velvety."]
                ])}
              </div>
            </div>
          </div>
        </section>

        <div id="tarifler" class="recipe-chapters">
          <div class="chapter-intro">
            <p class="eyebrow eyebrow-lg">4 SMOOTHIE VARIATIONS <span class="tr-highlight">(4 FARKLI SMOOTHIE ÇEŞİDİ)</span></p>
            <p class="section-intro">Her tarifte malzeme listesi, ölçüler, görsel malzeme listesi ve İngilizce yapılış özeti yer alır.</p>
          </div>

          <nav class="variant-subnav" aria-label="Smoothie Çeşitleri Hızlı Erişim">
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
          </nav>

          ${smoothieVariants.map((v, i) => `
            <section id="${smoothieVariantIds[i]}" class="recipe-chapter">
              <div class="chapter-head">
                <span class="variant-number">${String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h2>${v.briefTitle}</h2>
                  <p>${v.description}</p>
                  ${buildChapterMetaHTML({
                    time: { val: "5 mins (5 dakika)", en: "Total blending and prep time.", tr: "Toplam hazırlık ve blender süresi." },
                    servings: { val: "2 glasses (2 bardak)", en: "Yields 2 refreshing glasses.", tr: "2 bardak porsiyon sunar." },
                    count: { val: `${v.ingredients.length} ingredients (${v.ingredients.length} malzeme)`, en: "Simple and nutritious ingredients.", tr: "${v.ingredients.length} doğal malzeme içerir." }
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
                    ${table(["İngilizce malzeme", "Türkçe karşılığı", "Miktar"], v.ingredients)}
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
          `).join("")}
        </div>

        <section id="adim-adim">
          <div class="steps-heading">
            <p class="eyebrow eyebrow-lg">FIXED 4 STEPS <span class="tr-highlight">(SABİT 4 ADIM)</span></p>
            <h2>How Do You Make Banana Smoothie Step by Step? <span class="tr-highlight">(Muzlu Smoothie İngilizce Adım Adım Nasıl Yapılır?)</span></h2>
            <p class="section-intro"><strong>Classic banana smoothie is prepared in 4 simple and refreshing steps.</strong> <span class="tr-highlight">(Klasik muzlu smoothie 4 pratik adımdan oluşur ve yaklaşık 5 dakikada taze olarak hazırlanır.)</span></p>
            ${buildStepsMetaHTML({
              steps: { val: "4 steps (4 adım)", en: "Follow the 4 quick steps to blend a silky fruit smoothie.", tr: "İpeksi bir meyve smoothiesi hazırlamak için 4 hızlı adımı takip edin." },
              time: { val: "5 mins (5 dakika)", en: "Total active slicing and blending time.", tr: "Meyveleri dilimleme ve blenderda çekme süresi." },
              level: { val: "Level A1–A2 (A1–A2 seviye)", en: "Focuses on slicing, pouring, and blending verbs.", tr: "Dilimleme, dökme ve pürüzsüzce karıştırma fiillerine odaklanır." }
            })}
          </div>
          ${buildStepAccordionHTML(smoothieSteps)}
          ${table(["Adım No", "İngilizce Talimat", "Türkçe Karşılığı"], smoothieSteps.map((s, i) => [i + 1, s.sentenceEn, s.sentenceTr]))}
        </section>

        <section id="malzemeler-ve-ekipman">
          <p class="eyebrow eyebrow-lg">FRUITS, LIQUIDS &amp; TOOLS <span class="tr-highlight">(MEYVELER, SIVILAR VE EKİPMANLAR)</span></p>
          <h2>Which Fruits and Liquids Go into a Smoothie? <span class="tr-highlight">(Smoothie'ye Hangi Meyveler ve Sıvılar Girer?)</span></h2>
          <p class="section-intro">İdeal bir smoothie; taban meyvesi, lezzet meyvesi, sıvı ve protein/lif kaynağının dengeli birleşiminden oluşur.</p>

          <div class="grammar-tabs section-tabs">
            <div class="tab-list" role="tablist" aria-label="Meyveler ve Blender Ayarları">
              <button role="tab" aria-selected="true" tabindex="0" data-tab="smoothie-components" class="active"><span class="tab-idx">01</span><span class="tab-title">Components (Bileşen Grupları)</span></button>
              <button role="tab" aria-selected="false" tabindex="-1" data-tab="smoothie-blender"><span class="tab-idx">02</span><span class="tab-title">Blender Settings (Blender Ayarları)</span></button>
            </div>
            <div class="tab-panels">
              <div class="tab-panel active" role="tabpanel" data-panel="smoothie-components">
                <h3>Smoothie Bileşenleri ve İşlevleri</h3>
                ${table(["Bileşen Grubu", "İngilizce Örnekler", "Türkçe Karşılıkları", "İşlevi"], [
                  ["Base Fruit (Taban)", "Bananas, mango, avocado", "Muz, mango, avokado", "İçeceğe kıvam, gövde ve kadifemsi pürüzsüzlük katar"],
                  ["Flavor Fruit (Aroma)", "Strawberries, blueberries, peaches", "Çilek, yaban mersini, şeftali", "Canlı renk, antioksidan ve mayhoş lezzet katar"],
                  ["Liquids (Sıvılar)", "Cow's milk, almond milk, oat milk, coconut water", "İnek sütü, badem sütü, yulaf sütü, Hindistan cevizi suyu", "Bıçakların rahat dönmesini ve içilebilir akışkanlığı sağlar"],
                  ["Boosters (Katkılar)", "Chia seeds, flaxseeds, peanut butter, honey", "Chia tohumu, keten tohumu, fıstık ezmesi, bal", "Omega-3, sağlıklı yağ ve doğal enerji takviyesi sağlar"]
                ])}
              </div>
              <div class="tab-panel" role="tabpanel" data-panel="smoothie-blender" hidden>
                <h3>Which Blender Settings Are Used for Smoothies? <span class="tr-highlight">(Smoothie İçin Hangi Blender Ayarları Kullanılır?)</span></h3>
                ${table(["Blender Ayarı (Setting)", "Ne Zaman Kullanılır?", "İngilizce Kullanım Talimatı"], [
                  ["Pulse", "Buzları ve donmuş meyveleri ilk başta kırmak için", "Pulse 3 to 4 times to crush hard frozen chunks."],
                  ["Low Speed", "Sıvı ve yeşillikleri ilk karıştırma anında", "Start on low speed for 10 seconds to create a whirlpool."],
                  ["High Speed", "Tamamen pürüzsüz ve homojen krema dokusu için", "Switch to high speed for 45 seconds for a velvety texture."]
                ])}
              </div>
            </div>
          </div>
        </section>

        <section id="besin-degerleri">
          <p class="eyebrow eyebrow-lg">CALORIES &amp; NUTRITION <span class="tr-highlight">(KALORİ VE BESİN DEĞERLERİ)</span></p>
          <h2>How Many Calories Does a Banana Smoothie Have? <span class="tr-highlight">(Muzlu Smoothie Kaç Kalori?)</span></h2>
          <p class="section-intro">1 büyük su bardağı (yaklaşık 300 ml) klasik muzlu smoothie ortalama <strong>210 kcal</strong> enerji içerir; kullanılan süt türü ve eklenen bala göre kalori miktarı değişebilir.</p>

          <div class="grammar-tabs section-tabs">
            <div class="tab-list" role="tablist" aria-label="Kalori ve Besin Değerleri">
              <button role="tab" aria-selected="true" tabindex="0" data-tab="smoothie-cal" class="active"><span class="tab-idx">01</span><span class="tab-title">Portions &amp; Calories (Porsiyon Kalorileri)</span></button>
              <button role="tab" aria-selected="false" tabindex="-1" data-tab="smoothie-nut"><span class="tab-idx">02</span><span class="tab-title">Nutrition Facts (Besin Ögeleri)</span></button>
            </div>
            <div class="tab-panels">
              <div class="tab-panel active" role="tabpanel" data-panel="smoothie-cal">
                <h3>Smoothie Porsiyonları ve Kalori Değerleri</h3>
                ${table(["Porsiyon (Serving)", "Kalori (Energy)", "Açıklama"], [
                  ["1 bardak Muzlu Smoothie (300 ml)", "210 kcal", "Muz, az yağlı süt, yoğurt ve 1 tatlı kaşığı bal"],
                  ["1 bardak Çilekli Smoothie (300 ml)", "185 kcal", "Badem sütü ile yapıldığında daha düşük kalorilidir"],
                  ["1 bardak Yeşil Smoothie (300 ml)", "140 kcal", "Şekersiz, bol ıspanak ve yeşil elmalı hafif içecek"],
                  ["1 bardak Proteinli Smoothie (400 ml)", "320 kcal", "Protein tozu ve fıstık ezmeli sporcu öğünü"]
                ])}
              </div>
              <div class="tab-panel" role="tabpanel" data-panel="smoothie-nut" hidden>
                <h3>What Are the Nutrition Facts of a Banana Smoothie? <span class="tr-highlight">(Muzlu Smoothie'nin Besin Değerleri Nelerdir?)</span></h3>
                ${table(["Besin Ögesi (Nutrient)", "Miktar (1 Bardak veya 300 ml)", "Günlük Değer Oranı (% DV)"], [
                  ["Potassium (Potasyum)", "540 mg", "%12 DV (Kalp ve kas sağlığı)"],
                  ["Carbohydrate (Karbonhidrat)", "42 g", "%14 DV (Doğal meyve şekeri)"],
                  ["Dietary Fiber (Diyet Lifi)", "4.2 g", "%15 DV (Sindirim dostu)"],
                  ["Protein (Protein)", "7.5 g", "%15 DV (Süt ve yoğurt katkısı)"],
                  ["Calcium (Kalsiyum)", "220 mg", "%17 DV (Kemik sağlığı)"]
                ])}
                <p class="source-note">Besin değerleri standart taze meyve ve süt bileşimlerine dayalı <a href="https://fdc.nal.usda.gov/" target="_blank" rel="noreferrer">USDA FoodData Central</a> verileridir.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="puf-noktalari">
          <p class="eyebrow eyebrow-lg">PRO TIPS &amp; TECHNIQUES <span class="tr-highlight">(PÜF NOKTALARI VE TEKNİKLER)</span></p>
          <h2>Frozen Fruit ve Fresh Fruit: Smoothie Tarifinde Hangisi Kullanılır?</h2>

          <div class="grammar-tabs section-tabs">
            <div class="tab-list" role="tablist" aria-label="Smoothie Püf Noktaları">
              <button role="tab" aria-selected="true" tabindex="0" data-tab="smoothie-frozen" class="active"><span class="tab-idx">01</span><span class="tab-title">Frozen vs Fresh Fruit (Meyve Seçimi)</span></button>
              <button role="tab" aria-selected="false" tabindex="-1" data-tab="smoothie-green-tip"><span class="tab-idx">02</span><span class="tab-title">Green Smoothie Rule (Yeşil İçecek Kuralı)</span></button>
            </div>
            <div class="tab-panels">
              <div class="tab-panel active" role="tabpanel" data-panel="smoothie-frozen">
                <h3>Donmuş Meyve <span class="tr-highlight">(Frozen Fruit)</span> Neden Tercih Edilir?</h3>
                <p class="section-intro">Smoothie yaparken en lezzetli sonuç için <strong>donmuş meyve (frozen fruit)</strong> tercih edilir. Dondurulmuş meyveler buz küpüne ihtiyaç duymadan yoğun, dondurma kıvamında ve sulanmayan bir doku sağlar. Taze meyve kullanıyorsanız içeceğin serin olması için 3–4 adet buz küpü ekleyebilirsiniz.</p>
                <div class="language-card">
                  <small>Kıvam Kuralı (Texture Secret)</small>
                  <p><strong>"Always freeze ripe bananas in chunks for a naturally sweet, ice cream-like creamy smoothie."</strong></p>
                  <p class="translation">"Doğal tatlılık ve dondurma gibi kremsi bir kıvam için olgun muzları dilimleyip dondurun."</p>
                </div>
              </div>
              <div class="tab-panel" role="tabpanel" data-panel="smoothie-green-tip" hidden>
                <h3>Green Smoothie İngilizce Tarifte Nasıl Anlatılır?</h3>
                <p class="section-intro">Yeşil smoothielerde yaprakların ağza gelmemesi için iki aşamalı karıştırma kuralı uygulanır: <strong>"First, blend your leafy greens with the liquid for 30 seconds. Then, add the fruits and blend again until silky smooth." (Önce yeşillikleri sıvıyla 30 saniye çekin. Ardından meyveleri ekleyip pürüzsüz olana dek tekrar çekin.)</strong></p>
              </div>
            </div>
          </div>
        </section>

        <section id="olculer">
          <p class="eyebrow eyebrow-lg">MEASUREMENT UNITS &amp; VOCABULARY <span class="tr-highlight">(ÖLÇÜ BİRİMLERİ VE MUTFAK KELİMELERİ)</span></p>
          <h2>İngilizce Smoothie Tariflerinde Kullanılan Ölçü Birimleri Nelerdir?</h2>
          <p class="section-intro">İngilizce içecek tariflerinde <strong>cup (su bardağı), tablespoon (tbsp), teaspoon (tsp), ml (milliliter)</strong> ve <strong>grams</strong> birimleri kullanılır.</p>

          <div class="grammar-tabs section-tabs">
            <div class="tab-list" role="tablist" aria-label="Mutfak Terimleri ve Ölçüler">
              <button role="tab" aria-selected="true" tabindex="0" data-tab="smoothie-vocab-tab" class="active"><span class="tab-idx">01</span><span class="tab-title">Kitchen Vocabulary (Mutfak Terimleri)</span></button>
              <button role="tab" aria-selected="false" tabindex="-1" data-tab="smoothie-units-tab"><span class="tab-idx">02</span><span class="tab-title">Spoon &amp; Cup (Kaşık ve Bardak Ölçüleri)</span></button>
              <button role="tab" aria-selected="false" tabindex="-1" data-tab="smoothie-metric-tab"><span class="tab-idx">03</span><span class="tab-title">Metric Weights (Gram ve Mililitre)</span></button>
            </div>
            <div class="tab-panels">
              <div class="tab-panel active" role="tabpanel" data-panel="smoothie-vocab-tab">
                <h3>Smoothie Tarif Metninde Geçen Temel İngilizce Mutfak Kelimeleri Nelerdir?</h3>
                <div class="vocab vocab-wide">
                  ${smoothieVocab.map(v => `<article><h4>${v[0]}</h4><strong>${v[1]}</strong><p>${v[2]}</p></article>`).join("")}
                </div>
              </div>
              <div class="tab-panel" role="tabpanel" data-panel="smoothie-units-tab" hidden>
                <h3>Tablespoon, Teaspoon, Cup: İngilizce Ölçü Birimlerinin Türkçe Karşılıkları</h3>
                ${table(["İngilizce Birim", "Türkçe Karşılığı", "Metrik Eşdeğeri", "Örnek Cümle"], [
                  ["1 cup (c)", "1 su bardağı", "240 ml", "Add 1 cup of almond milk into the blender."],
                  ["½ cup", "Yarım su bardağı", "120 ml veya 120 g", "Add ½ cup of Greek yogurt for thickness."],
                  ["1 tablespoon (tbsp)", "1 yemek kaşığı", "15 ml", "Add 1 tablespoon of pure honey."],
                  ["1 teaspoon (tsp)", "1 tatlı veya çay kaşığı", "5 ml veya 3 g", "Sprinkle 1 teaspoon of chia seeds on top."]
                ])}
              </div>
              <div class="tab-panel" role="tabpanel" data-panel="smoothie-metric-tab" hidden>
                <h3>Gram ve Litre İngilizce Tariflerde Nasıl Kullanılır?</h3>
                ${table(["Metrik Değer", "İngilizce Yazımı", "Kullanım Örneği"], [
                  ["200 gram", "200 g of strawberries", "Wash and hull 200 g of fresh strawberries."],
                  ["250 mililitre", "250 ml of cold milk", "Measure 250 ml of milk before pouring."]
                ])}
              </div>
            </div>
          </div>
        </section>

        <section id="dil-kurallari">
          <p class="eyebrow eyebrow-lg">GRAMMAR RULES <span class="tr-highlight">(DİL BİLGİSİ VE YAZIM KURALLARI)</span></p>
          <h2>İngilizce Smoothie Tarifi Yazarken Dikkat Edilmesi Gereken Dil Kuralları</h2>
          <p class="section-intro">İçecek tariflerinde eylemler anında ve dinamiktir; emir cümleleri (imperatives) ve sıralama zarfları (first, then, after that, finally) kullanılır.</p>

          <div class="grammar-tabs">
            <div class="tab-list" role="tablist" aria-label="Dil kuralı konuları">
              <button role="tab" aria-selected="true" tabindex="0" data-tab="imperative" class="active"><span class="tab-idx">01</span><span class="tab-title">Emir Kipi (Imperatives)</span></button>
              <button role="tab" aria-selected="false" tabindex="-1" data-tab="sequence"><span class="tab-idx">02</span><span class="tab-title">Sıra Zarfları (Connectors)</span></button>
            </div>
            <div class="tab-panels">
              <div class="tab-panel active" role="tabpanel" data-panel="imperative">
                <h3>İngilizce Smoothie Tarif Metinlerinde Emir Kipi <span class="tr-highlight">(Imperative)</span> Nasıl Kullanılır?</h3>
                <p class="section-intro">Cümle doğrudan yalın fiille başlar: <strong>Peel the bananas, pour the milk, blend on high speed.</strong></p>
                ${table(["İngilizce Emir", "Türkçe Anlamı", "Kullanılan Fiil"], [
                  ["Peel and slice 2 bananas.", "2 muzu soyun ve dilimleyin.", "Peel & Slice (Soyma ve Dilimleme)"],
                  ["Pour the milk into the blender.", "Sütü blendera dökün.", "Pour (Dökmek)"],
                  ["Blend until creamy and smooth.", "Kremamsı ve pürüzsüz olana dek çekin.", "Blend (Çekmek)"],
                  ["Serve chilled immediately.", "Hemen soğuk servis edin.", "Serve (Servis Etmek)"]
                ])}
              </div>
              <div class="tab-panel" role="tabpanel" data-panel="sequence" hidden>
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

                <section id="alistirma" class="exercise">
          <p class="eyebrow" style="color:#93c5fd;">PRACTICE &amp; QUIZ <span class="tr-highlight">(KAZANIM KONTROLÜ VE ALIŞTIRMALAR)</span></p>
          <h2 style="color:#ffffff;">8. Sınıf İngilizce Kek Tarifi Alıştırma ve Quizi</h2>
          <p class="section-intro" style="color:#cbd5e1;">Öğrendiğiniz kek yapım eylemlerini, fırınlama terimlerini ve emir cümlelerini bu interaktif test ile pekiştirin.</p>

          <div class="quiz-grid" style="display: flex; flex-direction: column; gap: 1.5rem; margin-top: 2rem;">
            ${kekQuiz.map((q, idx) => `
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
        ${getRelatedRecipesHTML("smoothie")}
      </div>
    </div>
  </article>`;

  initQuizInteractivity(root, "Smoothie", renderSmoothiePage);
  initVariantSubnavScroll(root);
}

const pastaVariantIds = ["plain-pasta", "tomato-pasta", "bolognese-pasta", "baked-pasta", "alfredo-pasta", "tuna-pasta"];

function renderPastaPage() {
  const r = recipes.makarna;
  const vocab = [
    ["boil", "kaynatmak", "Boil the salted water vigorously."],
    ["drain", "süzmek", "Drain the cooked pasta using a colander."],
    ["sauté", "sotelemek", "Sauté the garlic gently in olive oil."],
    ["cook", "pişirmek", "Cook al dente for 8 to 10 minutes."],
    ["add", "eklemek", "Add sea salt to the boiling water."],
    ["stir", "karıştırmak", "Stir occasionally to prevent sticking."],
    ["simmer", "kısık ateşte pişirmek", "Simmer the tomato sauce over low heat."],
    ["toss", "harmanlamak", "Toss pasta thoroughly with the warm sauce."],
    ["bake", "fırında pişirmek", "Bake at 190°C until the cheese turns golden."],
    ["serve", "servis etmek", "Serve immediately with freshly grated Parmesan."]
  ];

  const pastaQuiz = [
    {
      num: 1,
      question: "What does 'Drain the pasta' mean in Turkish?",
      questionTr: "'Drain the pasta' ifadesinin Türkçe karşılığı nedir?",
      options: ["A) Makarnayı süzün", "B) Makarnayı haşlayın", "C) Makarnaya tuz atın", "D) Makarnayı soteleyin"],
      answer: "A) Makarnayı süzün"
    },
    {
      num: 2,
      question: "How long should plain pasta generally be cooked al dente?",
      questionTr: "Sade makarna dişe dokunur kıvamda yaklaşık kaç dakika pişirilmelidir?",
      options: ["A) 2 to 3 minutes", "B) 8 to 10 minutes", "C) 30 to 40 minutes", "D) 1 hour"],
      answer: "B) 8 to 10 minutes"
    },
    {
      num: 3,
      question: "Which kitchen tool is used to drain boiled pasta?",
      questionTr: "Haşlanmış makarnayı süzmek için hangi mutfak aleti kullanılır?",
      options: ["A) Rolling pin", "B) Colander", "C) Whisk", "D) Baking tray"],
      answer: "B) Colander"
    },
    {
      num: 4,
      question: "Which sentence correctly uses an imperative form in a pasta recipe?",
      questionTr: "Makarna tarifinde emir kipini doğru kullanan cümle hangisidir?",
      options: ["A) You are boiling water.", "B) Boil the water and add salt.", "C) Water was boiled by us.", "D) Boiling water is essential."],
      answer: "B) Boil the water and add salt."
    }
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

  root.innerHTML = `<article class="pasta-guide recipe-guide">
    <div class="reading-progress" aria-hidden="true"><span></span></div>
    <header class="hero">
      <div>
        <p class="eyebrow">RECIPES &amp; COOKING GUIDE <span class="tr-highlight">(İNGİLİZCE YEMEK TARİFLERİ)</span></p>
        <h1>İngilizce Makarna Tarifi <span class="tr-highlight">(Makarna Yapılışı İngilizce)</span></h1>
        <aside class="course-banner" aria-label="İngilizce kursu">
          <div class="course-banner-text">
            <small class="cta-eyebrow">KONUŞARAK ÖĞREN İNGİLİZCE KURSU</small>
            <strong class="cta-heading">İngilizceyi tarif ezberleyerek değil, konuşarak öğrenin.</strong>
          </div>
          <button class="cta-btn cta-btn-orange" onclick="window.location.href='https://student.konusarakogren.com/auth/register'">Ücretsiz tanışma dersi <span class="arrow">→</span></button>
        </aside>
        <p class="lede"><strong>Plain Pasta Recipe.</strong> ${formatBilingualText("İngilizce makarna tarifi; malzemeleri, emir kipindeki pişirme adımlarını ve Türkçe karşılıklarını birlikte öğreten uygulamalı bir İngilizce rehberidir.")}</p>
        <address class="article-meta" rel="author"><span class="author-mark" aria-hidden="true">KO</span><span><strong>Konuşarak Öğren Editör</strong><small>Yayınlanma tarihi: <time datetime="2026-07-29">29 Temmuz 2026</time></small></span></address>
      </div>
      <figure class="hero-visual">
        <img src="/blog/ingilizce-tarifler/images/makarna-hero.webp" alt="Masada servis edilmeye hazır sade makarna tabağı" loading="eager" fetchpriority="high">
        <figcaption>Plain Pasta (Sade Makarna)</figcaption>
      </figure>
      ${buildFactsCardHTML({
        title: "Makarna",
        prep: { val: "5 mins (5 dk)", en: "Measuring water, salt and weighing pasta takes 5 minutes.", tr: "Suyu, tuzu ölçmek ve makarnayı tartmak yaklaşık 5 dakika sürer." },
        cook: { val: "10 mins (10 dk)", en: "Boiling al dente pasta takes 8 to 10 minutes.", tr: "Makarnayı dişe dokunur (al dente) kıvamda haşlamak 8-10 dakika sürer." },
        servings: { val: "2 servings (2 porsiyon)", en: "Provides 2 generous main course servings.", tr: "2 cömert ana yemek porsiyonu sunar." },
        level: { val: "A2–B1 (Temel-Orta)", en: "Focuses on boiling, draining verbs and kitchen units.", tr: "Haşlama, süzme fiilleri ve mutfak ölçülerine odaklanan temel-orta düzey." }
      })}
    </header>

    <section class="hero-overview-table" id="definition-variations">
      <p class="eyebrow eyebrow-lg">OVERVIEW &amp; COMPARISON <span class="tr-highlight">(TANIM VE ÇEŞİTLER KARŞILAŞTIRMASI)</span></p>
      <h2 class="definition-heading">English Pasta Recipes: Variations, Sauces and Cooking Times <span class="tr-highlight">(İngilizce Makarna Çeşitleri, Sosları ve Pişirme Süreleri)</span></h2>
      <p class="section-intro">${formatBilingualText("Aşağıdaki tabloda 6 popüler makarna çeşidinin İngilizce isimlerini, soslarını, pişirme sürelerini ve kalori değerlerini karşılaştırmalı olarak inceleyebilirsiniz.")}</p>
      ${table(["Pasta Variation (Çeşit)", "Sauce & Main Ingredients (Sos ve Ana Malzemeler)", "Time (Süre)", "Calories (Kalori)"], [
        ["Plain Pasta (Sade Makarna)", "Butter or olive oil, salt (Tereyağı veya zeytinyağı, tuz)", "15 mins (15 dk)", "284 kcal / portion"],
        ["Tomato Sauce Pasta (Domates Soslu)", "Crushed tomatoes, garlic, olive oil (Domates, sarımsak, zeytinyağı)", "20 mins (20 dk)", "320 kcal / portion"],
        ["Spaghetti Bolognese (Spagetti Bolonez)", "Minced beef, onion, tomato purée (Kıyma, soğan, domates püresi)", "35 mins (35 dk)", "450 kcal / portion"],
        ["Baked Pasta (Fırında Makarna)", "Béchamel sauce, cheese (Beşamel sos, kaşar peyniri)", "35 mins (35 dk)", "410 kcal / portion"],
        ["Fettuccine Alfredo (Kremalı Alfredo)", "Cream, chicken breast, Parmesan (Krema, tavuk, Parmesan)", "25 mins (25 dk)", "510 kcal / portion"],
        ["Tuna Pasta (Ton Balıklı)", "Canned tuna, olive oil, lemon (Ton balığı, zeytinyağı, limon)", "15 mins (15 dk)", "360 kcal / portion"]
      ])}
    </section>

    <div class="page-grid">
      <nav class="toc" aria-label="İçindekiler">
        <a href="#kavramlar" data-scroll-target="kavramlar">Terms (Kavramlar)</a>
        <a href="#tarifler" data-scroll-target="tarifler">Variations (Tarifler)</a>
        <a href="#sade-makarna" data-scroll-target="sade-makarna">6 Steps (6 Adım)</a>
        <a href="#malzemeler-ve-ekipman" data-scroll-target="malzemeler-ve-ekipman">Ingredients (Malzemeler)</a>
        <a href="#besin-degerleri" data-scroll-target="besin-degerleri">Nutrition (Besin Değerleri)</a>
        <a href="#olculer" data-scroll-target="olculer">Units (Ölçüler)</a>
        <a href="#dil-kurallari" data-scroll-target="dil-kurallari">Grammar (Dil Kuralları)</a>
        <a href="#alistirma" data-scroll-target="alistirma">Quiz (Alıştırma)</a>
      </nav>

      <div class="content">
        <section id="kavramlar">
          <p class="eyebrow">CORE CONCEPTS &amp; TRANSLATIONS <span class="tr-highlight">(TEMEL KAVRAMLAR VE ÇEVİRİLER)</span></p>
          <h2>İngilizce Makarna Tarifi Nedir? Temel Kavramlar ve Çeviriler</h2>
          
          ${buildAppBannerHTML("Makarna")}

          <p class="section-intro">İngilizcede <strong>pasta</strong> genel kategoriyi, <strong>spaghetti</strong>, <strong>penne</strong> ve <strong>fettuccine</strong> ise belirli makarna biçimlerini anlatır.</p>

          <div class="grammar-tabs section-tabs">
            <div class="tab-list" role="tablist" aria-label="Makarna Kavramları ve Fiiller">
              <button role="tab" aria-selected="true" tabindex="0" data-tab="pasta-terms" class="active"><span class="tab-idx">01</span><span class="tab-title">Terms (Kavramlar)</span></button>
              <button role="tab" aria-selected="false" tabindex="-1" data-tab="pasta-verbs"><span class="tab-idx">02</span><span class="tab-title">Kitchen Verbs (Mutfak Fiilleri)</span></button>
            </div>
            <div class="tab-panels">
              <div class="tab-panel active" role="tabpanel" data-panel="pasta-terms">
                <h3>Makarna İngilizcede Ne Anlama Gelir?</h3>
                ${table(["İngilizce Kavram", "Türkçe Karşılığı", "İlgili Tarif"], [
                  ["Pasta", "Makarna", "Tüm makarna tarifleri"],
                  ["Plain pasta", "Sade makarna", "Sade tereyağlı makarna"],
                  ["Spaghetti", "Spagetti", "Spagetti Bolonez"],
                  ["Fettuccine", "Şerit makarna", "Fettuccine Alfredo"],
                  ["Penne", "Kalem makarna", "Domates soslu veya fırında makarna"]
                ])}
              </div>
              <div class="tab-panel" role="tabpanel" data-panel="pasta-verbs" hidden>
                <h3>İngilizce Tarif Yazımında Kullanılan Fiiller: Boil, Drain, Saute, Cook</h3>
                ${table(["İngilizce Fiil", "Türkçe Karşılığı", "Örnek Cümle"], [
                  ["Boil", "Kaynatmak", "Boil 2 l of water vigorously in a large pot."],
                  ["Drain", "Süzmek", "Drain the pasta immediately using a colander."],
                  ["Sauté", "Sotelemek", "Sauté the garlic gently in extra virgin olive oil."],
                  ["Cook", "Pişirmek", "Cook al dente for 8 to 10 minutes without overcooking."]
                ])}
              </div>
            </div>
          </div>
        </section>

        <div id="tarifler" class="recipe-chapters">
          <div class="chapter-intro">
            <p class="eyebrow eyebrow-lg">6 PASTA VARIATIONS <span class="tr-highlight">(6 MAKARNA ÇEŞİDİ)</span></p>
            <p class="section-intro">Her tarifte tanım, İngilizce–Türkçe malzemeler, ölçüler, görsel malzeme listesi ve yapılış özeti yer alır.</p>
          </div>

          <nav class="variant-subnav" aria-label="Makarna Çeşitleri Hızlı Erişim">
            <a href="#plain-pasta" class="variant-nav-btn active" title="Plain Pasta (Sade Makarna)">
              <span>1. Plain Pasta</span>
              <div class="variant-tooltip">
                <span class="tooltip-en">1. Plain Pasta</span>
                <span class="tooltip-tr">(Sade Makarna)</span>
              </div>
            </a>
            <a href="#tomato-pasta" class="variant-nav-btn" title="Tomato Sauce Pasta (Domates Soslu Makarna)">
              <span>2. Tomato Sauce</span>
              <div class="variant-tooltip">
                <span class="tooltip-en">2. Tomato Sauce Pasta</span>
                <span class="tooltip-tr">(Domates Soslu Makarna)</span>
              </div>
            </a>
            <a href="#bolognese-pasta" class="variant-nav-btn" title="Spaghetti Bolognese (Spagetti Bolonez)">
              <span>3. Bolognese</span>
              <div class="variant-tooltip">
                <span class="tooltip-en">3. Spaghetti Bolognese</span>
                <span class="tooltip-tr">(Spagetti Bolonez)</span>
              </div>
            </a>
            <a href="#baked-pasta" class="variant-nav-btn" title="Baked Pasta (Fırında Beşamel Makarna)">
              <span>4. Baked Pasta</span>
              <div class="variant-tooltip">
                <span class="tooltip-en">4. Baked Pasta</span>
                <span class="tooltip-tr">(Fırında Beşamel Makarna)</span>
              </div>
            </a>
            <a href="#alfredo-pasta" class="variant-nav-btn" title="Fettuccine Alfredo (Kremalı Alfredo)">
              <span>5. Alfredo</span>
              <div class="variant-tooltip">
                <span class="tooltip-en">5. Fettuccine Alfredo</span>
                <span class="tooltip-tr">(Kremalı Alfredo)</span>
              </div>
            </a>
            <a href="#tuna-pasta" class="variant-nav-btn" title="Tuna Pasta (Ton Balıklı Makarna)">
              <span>6. Tuna Pasta</span>
              <div class="variant-tooltip">
                <span class="tooltip-en">6. Tuna Pasta</span>
                <span class="tooltip-tr">(Ton Balıklı Makarna)</span>
              </div>
            </a>
          </nav>

          ${pastaVariants.map((v, i) => `
            <section id="${pastaVariantIds[i]}" class="recipe-chapter">
              <div class="chapter-head">
                <span class="variant-number">${String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h2>${v.briefTitle}</h2>
                  <p>${v.description}</p>
                  ${buildChapterMetaHTML({
                    time: { val: "15-35 mins (15-35 dakika)", en: "Total prep and cooking time.", tr: "Toplam hazırlık ve pişirme süresi." },
                    servings: { val: "2-4 servings (2-4 porsiyon)", en: "Yields satisfying portions.", tr: "Doyurucu porsiyonlar sunar." },
                    count: { val: `${v.ingredients.length} ingredients (${v.ingredients.length} malzeme)`, en: "Authentic ingredients.", tr: `${v.ingredients.length} temel malzeme içerir.` }
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
                    ${table(["İngilizce malzeme", "Türkçe karşılığı", "Miktar"], v.ingredients)}
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
          `).join("")}
        </div>

        <section id="sade-makarna">
          <div class="steps-heading">
            <p class="eyebrow eyebrow-lg">6-STEP PLAIN PASTA GUIDE <span class="tr-highlight">(6 ADIMDA SADE MAKARNA REHBERİ)</span></p>
            <h2>How Do You Make Plain Pasta Step by Step? <span class="tr-highlight">(Sade Makarna İngilizce Adım Adım Nasıl Yapılır?)</span></h2>
            <p class="section-intro"><strong>This classic plain pasta recipe consists of 6 sequential steps and takes about 15 minutes.</strong> <span class="tr-highlight">(Bu sade makarna tarifi 6 adımdan oluşur, yaklaşık 15 dakika sürer ve emir kipiyle kurulur.)</span></p>
            ${buildStepsMetaHTML({
              steps: { val: "6 steps (6 adım)", en: "Follow the 6 sequential steps to boil and serve al dente pasta.", tr: "Makarnayı al dente kıvamda haşlamak ve servis etmek için 6 adımı takip edin." },
              time: { val: "15 mins (15 dakika)", en: "Water boiling and 8-10 mins active pasta cooking time.", tr: "Su kaynatma ve 8-10 dakikalık aktif haşlama süresi." },
              level: { val: "Level A2–B1 (A2–B1 seviye)", en: "Focuses on boiling, draining, and tossing kitchen verbs.", tr: "Kaynatma, süzme ve sosla harmanlama fiillerine odaklanır." }
            })}
          </div>
          ${buildStepAccordionHTML(r.steps.map((s, idx) => {
            const title = s[0].replace(/^\d+\.\s*/, "");
            const m = title.match(/^(.*?)\s*\((.*?)\)$/);
            const metaList = [
              { ing: "4 liters water (4 litre su)", eq: "Large pot & stove (Geniş tencere ve ocak)", time: "10 mins (10 dakika)" },
              { ing: "1 tablespoon rock salt (1 yemek kaşığı tuz)", eq: "Measuring spoon (Ölçü kaşığı)", time: "1 min (1 dakika)" },
              { ing: "500 g dry pasta (500 g makarna)", eq: "Large pot (Geniş tencere)", time: "1 min (1 dakika)" },
              { ing: "Boiling pasta in pot (Tencerede pişen makarna)", eq: "Wooden spoon (Tahta kaşık)", time: "8-10 mins (8-10 dakika)" },
              { ing: "Al dente pasta strand (Makarna teli)", eq: "Kitchen tongs or fork (Mutfak maşası veya çatal)", time: "1 min (1 dakika)" },
              { ing: "Boiled pasta (Haşlanmış makarna)", eq: "Stainless colander (Çelik süzgeç)", time: "2 mins (2 dakika)" },
              { ing: "Olive oil or butter, cheese (Zeytinyağı veya tereyağı, peynir)", eq: "Serving bowl or skillet (Servis kasesi veya tava)", time: "3 mins (3 dakika)" }
            ];
            const meta = metaList[idx] || {};
            return {
              number: idx + 1,
              titleEn: m ? m[1].trim() : title,
              titleTr: m ? m[2].trim() : ("Adım " + (idx + 1)),
              sentenceEn: s[1],
              sentenceTr: s[2],
              actionEn: s[1].split(" ")[0] + " (Eylem)",
              actionTr: "Mutfak Eylemi",
              img: `/blog/ingilizce-tarifler/images/steps/makarna-step-${idx + 1}.webp`,
              ingredient: meta.ing,
              equipment: meta.eq,
              time: meta.time
            };
          }))}
          ${table(["Adım No", "İngilizce Talimat", "Türkçe Karşılığı"], r.steps.map((s, i) => [i + 1, s[1], s[2]]))}
        </section>

        <section id="malzemeler-ve-ekipman">
          <p class="eyebrow eyebrow-lg">INGREDIENTS &amp; TOOLS <span class="tr-highlight">(MALZEMELER VE EKİPMANLAR)</span></p>
          <h2>Which Ingredients Do You Need to Cook Pasta? <span class="tr-highlight">(Makarna Pişirmek İçin Hangi Malzemeler Gerekir?)</span></h2>

          <div class="grammar-tabs section-tabs">
            <div class="tab-list" role="tablist" aria-label="Malzemeler ve Ekipmanlar">
              <button role="tab" aria-selected="true" tabindex="0" data-tab="pasta-ing" class="active"><span class="tab-idx">01</span><span class="tab-title">Ingredients (Malzemeler)</span></button>
              <button role="tab" aria-selected="false" tabindex="-1" data-tab="pasta-eq"><span class="tab-idx">02</span><span class="tab-title">Equipment (Ekipmanlar)</span></button>
            </div>
            <div class="tab-panels">
              <div class="tab-panel active" role="tabpanel" data-panel="pasta-ing">
                <h3>Sade Makarna Malzeme Listesi</h3>
                ${table(["İngilizce malzeme", "Türkçe karşılığı", "Miktar"], r.ingredients)}
              </div>
              <div class="tab-panel" role="tabpanel" data-panel="pasta-eq" hidden>
                <h3>Which Kitchen Equipment Is Used to Cook Pasta? <span class="tr-highlight">(Hangi Ekipmanlar Kullanılır?)</span></h3>
                ${table(["İngilizce Ekipman", "Türkçe Karşılığı", "Kullanıldığı Aşama"], [
                  ["Large pot", "Büyük tencere", "1–3. adımlar (Su kaynatma ve haşlama)"],
                  ["Measuring spoon", "Ölçü kaşığı", "2 ve 5. adımlar (Tuz ve yağ ekleme)"],
                  ["Wooden spoon", "Tahta kaşık", "2, 3 ve 5. adımlar (Karıştırma)"],
                  ["Colander", "Süzgeç", "4. adım (Makarnayı süzme)"],
                  ["Serving bowl", "Servis kasesi", "6. adım (Sıcak servis)"]
                ])}
              </div>
            </div>
          </div>
        </section>

        <section id="besin-degerleri">
          <p class="eyebrow eyebrow-lg">CALORIES &amp; NUTRITION <span class="tr-highlight">(KALORİ VE BESİN DEĞERLERİ)</span></p>
          <h2>How Many Calories Are in a Serving of Pasta? <span class="tr-highlight">(Bir Porsiyon Makarna Kaç Kalori?)</span></h2>
          <p class="section-intro">Sossuz, pişmiş makarnanın enerji değeri yaklaşık <strong>158 kcal/100 g</strong>; 180 g'lık örnek bir porsiyonun enerji değeri yaklaşık <strong>284 kcal</strong> kabul edilebilir.</p>

          <div class="grammar-tabs section-tabs">
            <div class="tab-list" role="tablist" aria-label="Kalori ve Besin Değerleri">
              <button role="tab" aria-selected="true" tabindex="0" data-tab="pasta-cal" class="active"><span class="tab-idx">01</span><span class="tab-title">Portions &amp; Calories (Porsiyon Kalorileri)</span></button>
              <button role="tab" aria-selected="false" tabindex="-1" data-tab="pasta-nut"><span class="tab-idx">02</span><span class="tab-title">Nutrition Facts (Besin Ögeleri)</span></button>
            </div>
            <div class="tab-panels">
              <div class="tab-panel active" role="tabpanel" data-panel="pasta-cal">
                <h3>Makarna Porsiyonları ve Kalori Değerleri</h3>
                ${table(["Porsiyon", "Kalori", "Açıklama"], [
                  ["100 g pişmiş makarna", "158 kcal", "Sossuz yaklaşık değer"],
                  ["1 porsiyon (180 g)", "284 kcal", "Yağ ve sos hariç sade değer"],
                  ["1 porsiyon Spagetti Bolonez", "450 kcal", "Kıymalı sos ilaveli değer"]
                ])}
              </div>
              <div class="tab-panel" role="tabpanel" data-panel="pasta-nut" hidden>
                <h3>What Are the Nutrition Facts of Plain Pasta? <span class="tr-highlight">(Sade Makarnanın Besin Değerleri Nelerdir?)</span></h3>
                ${table(["İngilizce Besin Ögesi", "Türkçe Karşılığı", "100 g'daki Miktar"], [
                  ["Protein", "Protein", "5.8 g"],
                  ["Carbohydrate", "Karbonhidrat", "30.9 g"],
                  ["Fat", "Yağ", "0.9 g"],
                  ["Dietary fiber", "Lif", "1.8 g"]
                ])}
                <p class="source-note">Değerler genel pişmiş makarna verilerine dayalıdır. Kaynak: <a href="https://fdc.nal.usda.gov/" target="_blank" rel="noreferrer">USDA FoodData Central</a>.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="olculer">
          <p class="eyebrow eyebrow-lg">MEASUREMENT UNITS &amp; VOCABULARY <span class="tr-highlight">(ÖLÇÜ BİRİMLERİ VE KELİMELER)</span></p>
          <h2>İngilizce Makarna Tariflerinde Kullanılan Ölçü Birimleri Nelerdir?</h2>
          <p class="section-intro">İngilizce makarna tariflerinde <strong>cup, tablespoon, teaspoon, gram</strong> ve <strong>milliliter</strong> birimleri kullanılır.</p>

          <div class="grammar-tabs section-tabs">
            <div class="tab-list" role="tablist" aria-label="Mutfak Terimleri ve Ölçüler">
              <button role="tab" aria-selected="true" tabindex="0" data-tab="pasta-vocab-tab" class="active"><span class="tab-idx">01</span><span class="tab-title">Kitchen Vocabulary (Mutfak Terimleri)</span></button>
              <button role="tab" aria-selected="false" tabindex="-1" data-tab="pasta-units-tab"><span class="tab-idx">02</span><span class="tab-title">Spoon &amp; Cup (Kaşık ve Bardak Ölçüleri)</span></button>
              <button role="tab" aria-selected="false" tabindex="-1" data-tab="pasta-metric-tab"><span class="tab-idx">03</span><span class="tab-title">Metric Equivalents (Gram ve Litre)</span></button>
            </div>
            <div class="tab-panels">
              <div class="tab-panel active" role="tabpanel" data-panel="pasta-vocab-tab">
                <h3>Makarna Tarif Metninde Geçen Temel İngilizce Mutfak Kelimeleri Nelerdir?</h3>
                <div class="vocab vocab-wide">
                  ${vocab.map(v => `<article><h4>${v[0]}</h4><strong>${v[1]}</strong><p>${v[2]}</p></article>`).join("")}
                </div>
              </div>
              <div class="tab-panel" role="tabpanel" data-panel="pasta-units-tab" hidden>
                <h3>Tablespoon, Teaspoon, Cup: İngilizce Ölçü Birimlerinin Türkçe Karşılıkları</h3>
                ${table(["İngilizce Birim", "Türkçe Karşılığı", "Metrik Karşılığı", "Tarif Örneği"], [
                  ["1 cup", "1 su bardağı", "240 ml", "Add 1 cup of pasta sauce."],
                  ["1 tablespoon (tbsp)", "1 yemek kaşığı", "15 ml", "Add 1 tablespoon of olive oil."],
                  ["1 teaspoon (tsp)", "1 tatlı veya çay kaşığı", "5 ml", "Add 1 teaspoon of sea salt."]
                ])}
              </div>
              <div class="tab-panel" role="tabpanel" data-panel="pasta-metric-tab" hidden>
                <h3>Gram ve Litre İngilizce Tariflerde Nasıl Kullanılır?</h3>
                ${table(["Metrik Birim", "Emperyal Karşılığı", "Türkçe Açıklama"], [
                  ["100 g", "3.5 oz", "Yaklaşık 100 gram makarna"],
                  ["200 g", "7 oz", "2 kişilik standart porsiyon"],
                  ["2 l", "8.4 cups", "Makarna haşlamak için 2 litre su"]
                ])}
              </div>
            </div>
          </div>
        </section>

        <section id="dil-kurallari">
          ${grammarTabs()}
        </section>

        <section id="alistirma" class="exercise">
          <p class="eyebrow" style="color:#93c5fd;">PRACTICE &amp; QUIZ <span class="tr-highlight">(KAZANIM KONTROLÜ VE ALIŞTIRMALAR)</span></p>
          <h2 style="color:#ffffff;">8. Sınıf İngilizce Makarna Tarifi Alıştırma ve Quizi</h2>
          <p class="section-intro" style="color:#cbd5e1;">Öğrendiğiniz makarna pişirme fiillerini, ölçüleri ve emir kipini bu interaktif test ile pekiştirin.</p>

          <div class="quiz-grid" style="display: flex; flex-direction: column; gap: 1.5rem; margin-top: 2rem;">
            ${pastaQuiz.map((q, idx) => `
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
        ${getRelatedRecipesHTML("makarna")}
      </div>
    </div>
  </article>`;

  initQuizInteractivity(root, "Makarna", renderPastaPage);
  initVariantSubnavScroll(root);
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
    ingredientCards: [
      { icon: "🥚", en: "Fresh Eggs", tr: "Taze Yumurta", amount: "2 pcs (2 adet)", sentence: "Crack 2 fresh eggs into a bowl. (Bir kaseye 2 taze yumurta kırın.)" },
      { icon: "🧈", en: "Butter", tr: "Tereyağı", amount: "1 tbsp (1 yemek kaşığı)", sentence: "Melt 1 tablespoon of butter in the pan. (Tavada 1 yemek kaşığı tereyağını eritin.)" },
      { icon: "🧂", en: "Salt", tr: "Tuz", amount: "1 pinch (1 tutam)", sentence: "Add a pinch of salt to the eggs. (Yumurtalara bir tutam tuz ekleyin.)" },
      { icon: "🌿", en: "Black Pepper", tr: "Karabiber", amount: "1 pinch (1 tutam)", sentence: "Season with fresh black pepper. (Taze karabiberle tatlandırın.)" }
    ],
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
    ingredientCards: [
      { icon: "🥚", en: "Fresh Eggs", tr: "Taze Yumurta", amount: "2 pcs (2 adet)", sentence: "Beat 2 eggs with a pinch of salt. (2 yumurtayı bir tutam tuzla çırpın.)" },
      { icon: "🧀", en: "Grated Cheddar or Feta", tr: "Rendelenmiş Kaşar veya Beyaz Peynir", amount: "3 tbsp (3 yemek kaşığı)", sentence: "Sprinkle grated cheese over one half. (Omletin yarısına rendelenmiş peynir serpin.)" },
      { icon: "🧈", en: "Butter", tr: "Tereyağı", amount: "1 tbsp (1 yemek kaşığı)", sentence: "Heat butter in a non-stick skillet. (Yapışmaz tavada tereyağını ısıtın.)" },
      { icon: "🧂", en: "Salt", tr: "Tuz", amount: "1 pinch (1 tutam)", sentence: "Add salt to taste. (Damak zevkine göre tuz ekleyin.)" }
    ],
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
    ingredientCards: [
      { icon: "🥚", en: "Fresh Eggs", tr: "Taze Yumurta", amount: "2 pcs (2 adet)", sentence: "Whisk the eggs thoroughly. (Yumurtaları iyice çırpın.)" },
      { icon: "🫑", en: "Green Pepper", tr: "Yeşil Biber", amount: "½ pcs (½ adet)", sentence: "Chop the green pepper finely. (Yeşil biberi ince ince doğrayın.)" },
      { icon: "🍅", en: "Tomato", tr: "Domates", amount: "½ pcs (½ adet)", sentence: "Dice half a tomato into small cubes. (Yarım domatesi küçük küpler halinde doğrayın.)" },
      { icon: "🧅", en: "Onion", tr: "Soğan", amount: "2 tbsp (2 yemek kaşığı)", sentence: "Sauté the chopped onion in butter. (Doğranmış soğanı tereyağında soteleyin.)" }
    ],
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
    ingredientCards: [
      { icon: "🥚", en: "Fresh Eggs", tr: "Taze Yumurta", amount: "2 pcs (2 adet)", sentence: "Beat the eggs in a bowl. (Yumurtaları bir kasede çırpın.)" },
      { icon: "🍄", en: "Mushrooms", tr: "Kültür Mantarı", amount: "5 pcs (5 adet dilimlenmiş)", sentence: "Sauté sliced mushrooms until tender. (Dilimlenmiş mantarları yumuşayana kadar soteleyin.)" },
      { icon: "🧈", en: "Butter", tr: "Tereyağı", amount: "1 tbsp (1 yemek kaşığı)", sentence: "Cook mushrooms in 1 tablespoon of butter. (Mantarları 1 yemek kaşığı tereyağında pişirin.)" },
      { icon: "🧂", en: "Salt & Pepper", tr: "Tuz ve Karabiber", amount: "1 pinch (1 tutam)", sentence: "Season the mushrooms lightly. (Mantarları hafifçe baharatlandırın.)" }
    ],
    steps: "First, cook 5 sliced mushrooms in 1 tbsp of butter for 4 minutes. Then, beat 2 eggs and pour over the mushrooms. After that, cook for 2 minutes until set. Finally, fold and serve.",
  },
];

omletVariants.forEach((v, idx) => { v.ingredientCards = omletCards[idx]; });

function kekGrammarTabs() {
  return `<p class="eyebrow">RECIPE GRAMMAR & USAGE RULES <span class="tr-highlight">(TARİF DİL BİLGİSİ VE ANLATIM KURALLARI)</span></p><h2>İngilizce Kek Tarifi Yazarken Dikkat Edilmesi Gereken Dil Kuralları</h2><p class="section-intro">İngilizce tarif yazımının 4 temel dil kuralı şunlardır: emir kipi (imperative mood), sıra zarfları (sequence adverbs), sayılabilir-sayılamayan isimler (countable-uncountable nouns) ve ölçü ifadeleri (measurement expressions).</p><div class="grammar-tabs"><div class="tab-list" role="tablist" aria-label="Dil kuralı konuları"><button id="tab-overview-kek" role="tab" aria-selected="true" aria-controls="panel-overview-kek" tabindex="0" data-tab="overview"><span>01</span>Genel kurallar</button><button id="tab-imperative-kek" role="tab" aria-selected="false" aria-controls="panel-imperative-kek" tabindex="-1" data-tab="imperative"><span>02</span>Emir kipi</button><button id="tab-sequence-kek" role="tab" aria-selected="false" aria-controls="panel-sequence-kek" tabindex="-1" data-tab="sequence"><span>03</span>Sıra zarfları</button></div><div class="tab-panels"><div id="panel-overview-kek" class="tab-panel" role="tabpanel" aria-labelledby="tab-overview-kek" data-panel="overview">${table(["Kural","İngilizce örnek","Türkçe karşılığı"],[["Imperative mood (Emir kipi)","Whisk the eggs.","Yumurtaları çırpın."],["Sequence adverbs (Sıra zarfları)","Then, add the milk.","Ardından sütü ekleyin."],["Countable-uncountable nouns","Add 200 g of flour and 3 eggs.","200 gram un ve 3 yumurta ekleyin."],["Measurement expressions","Add 120 ml of milk.","120 mililitre süt ekleyin."]])}</div><div id="panel-imperative-kek" class="tab-panel" role="tabpanel" aria-labelledby="tab-imperative-kek" data-panel="imperative" hidden><h3>İngilizce Kek Tarif Metinlerinde Emir Kipi <span class="tr-highlight">(Imperative)</span> Nasıl Kullanılır?</h3><p class="section-intro">Emir kipi (imperative mood), fiilin yalın haliyle başlayan ve özne içermeyen talimat cümlesidir.</p>${table(["English Imperative","Türkçe Karşılığı","Verb"],[["Whisk the eggs and sugar.","Yumurta ve şekeri çırpın.","Whisk"],["Add the milk and oil.","Sütü ve sıvı yağı ekleyin.","Add"],["Sift the flour.","Unu eleyin.","Sift"],["Pour the batter into the pan.","Hamuru kalıba dökün.","Pour"],["Bake the cake for 40 minutes.","Keki 40 dakika pişirin.","Bake"]])}<p class="method-note">Olumsuz emir kipi örneği: <strong>Do not overcook the cake. (Keki fazla pişirmeyin.)</strong></p></div><div id="panel-sequence-kek" class="tab-panel" role="tabpanel" aria-labelledby="tab-sequence-kek" data-panel="sequence" hidden><h3>Bağlaçlar ve Sıra Zarfları: First, Then, After That, Finally</h3><p class="section-intro">First, then, after that, next ve finally zarfları, tarif adımlarını sıralamak için kullanılır.</p>${table(["Sequence Adverb","Türkçe Karşılığı","Example Sentence"],[["First","Önce","First, whisk the eggs and sugar."],["Then","Ardından","Then, add the milk and oil."],["After that","Bunun ardından","After that, sift in the flour."],["Next","Sonra","Next, mix the batter until smooth."],["Finally","Son olarak","Finally, bake the cake for 40 minutes."]])}<div class="language-card sequence"><small>Kısa tarif paragrafı</small><p>First, whisk the eggs and sugar for 2 minutes. Then, add the milk and oil. After that, sift in the flour and baking powder. Next, mix the batter until smooth. Finally, pour the batter into the pan and bake it for 40 minutes.</p><p class="translation">Önce yumurta ve şekeri 2 dakika çırpın. Ardından süt ve sıvı yağı ekleyin. Bunun ardından unu ve kabartma tozunu eleyerek ekleyin. Sonra hamuru pürüzsüz olana kadar karıştırın. Son olarak hamuru kalıba dökün ve 40 dakika pişirin.</p></div></div></div></div>`;
}

const kekVariantIds = ["plain-cake", "chocolate-cake", "carrot-cake", "lemon-cake"];

const kekQuiz = [
  {
    num: 1,
    question: "Which action comes first when preparing cake batter?",
    questionTr: "Kek hamuru hazırlarken ilk olarak hangi mutfak eylemi yapılır?",
    options: ["A) Whisk the eggs and sugar", "B) Bake in the oven", "C) Slice the cake", "D) Pour into the pan"],
    answer: "A) Whisk the eggs and sugar"
  },
  {
    num: 2,
    question: "Which verb means \"unu ve kabartma tozunu elemek\" in English?",
    questionTr: "\"Unu ve kabartma tozunu elemek\" anlamına gelen İngilizce fiil hangisidir?",
    options: ["A) Boil", "B) Sift", "C) Chop", "D) Peel"],
    answer: "B) Sift"
  },
  {
    num: 3,
    question: "How many minutes does a classic plain cake bake in the oven at 180°C?",
    questionTr: "Klasik sade kek 180°C fırında yaklaşık kaç dakika pişer?",
    options: ["A) 10-15 minutes", "B) 40-45 minutes", "C) 90 minutes", "D) 5 minutes"],
    answer: "B) 40-45 minutes"
  },
  {
    num: 4,
    question: "What is the correct English term for \"kek kalıbı\"?",
    questionTr: "\"Kek kalıbı\" teriminin doğru İngilizce karşılığı hangisidir?",
    options: ["A) Cake pan (veya Cake tin)", "B) Frying pan", "C) Saucepan", "D) Cutting board"],
    answer: "A) Cake pan (veya Cake tin)"
  }
];

function renderKekPage() {
  // renderKekPage
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

  root.innerHTML = `<article class="pasta-guide recipe-guide">
    <div class="reading-progress" aria-hidden="true"><span></span></div>
    <header class="hero">
      <div>
        <p class="eyebrow">RECIPES &amp; COOKING GUIDE <span class="tr-highlight">(İNGİLİZCE YEMEK TARİFLERİ)</span></p>
        <h1>İngilizce Kek Tarifi <span class="tr-highlight">(Kek Yapılışı İngilizce)</span></h1>
        <aside class="course-banner" aria-label="İngilizce kursu">
          <div class="course-banner-text">
            <small class="cta-eyebrow">KONUŞARAK ÖĞREN İNGİLİZCE KURSU</small>
            <strong class="cta-heading">İngilizceyi tarif ezberleyerek değil, konuşarak öğrenin.</strong>
          </div>
          <button class="cta-btn cta-btn-orange" onclick="window.location.href='https://student.konusarakogren.com/auth/register'">Ücretsiz tanışma dersi <span class="arrow">→</span></button>
        </aside>
        <p class="lede"><strong>Plain Cake Recipe.</strong> ${formatBilingualText("İngilizce kek tarifi; malzeme ve pişirme adımlarının İngilizce talimat cümleleriyle verildiği uygulamalı bir rehberdir.")}</p>
        <address class="article-meta" rel="author"><span class="author-mark" aria-hidden="true">KO</span><span><strong>Konuşarak Öğren Editör</strong><small>Yayınlanma tarihi: <time datetime="2026-07-31">31 Temmuz 2026</time></small></span></address>
      </div>
      <figure class="hero-visual">
        <img src="/blog/ingilizce-tarifler/images/kek-hero.webp" alt="Servis tabağında taze pişmiş kek dilimi" loading="eager" fetchpriority="high">
        <figcaption>Plain Cake (Sade Kek)</figcaption>
      </figure>
      ${buildFactsCardHTML({
        title: "Kek",
        prep: { val: "15 mins (15 dk)", en: "Whisking eggs, sugar and sifting dry ingredients takes 15 minutes.", tr: "Yumurta ve şekeri çırpmak, kuru malzemeleri elemek yaklaşık 15 dakika sürer." },
        cook: { val: "40 mins (40 dk)", en: "Baking until golden and a toothpick comes out clean takes 40 minutes.", tr: "Altın sarısı olana ve kürdan temiz çıkana dek pişirme 40 dakika sürer." },
        servings: { val: "8 slices (8 dilim)", en: "Yields 8 generous dessert portions.", tr: "8 cömert tatlı porsiyonu sunar." },
        level: { val: "A2–B1 (Temel-Orta)", en: "Covers baking terminology, sequence adverbs and imperative verbs.", tr: "Fırınlama terimleri, sıra zarfları ve emir kiplerini kapsayan temel-orta seviye." }
      })}
    </header>

    <section class="hero-overview-table" id="definition-variations">
      <p class="eyebrow eyebrow-lg">OVERVIEW &amp; COMPARISON <span class="tr-highlight">(TANIM VE ÇEŞİTLER KARŞILAŞTIRMASI)</span></p>
      <h2 class="definition-heading">English Cake Recipes: Variations, Aromas and Baking Times <span class="tr-highlight">(İngilizce Kek Çeşitleri, Aromaları ve Pişirme Süreleri)</span></h2>
      <p class="section-intro">${formatBilingualText("Aşağıdaki tabloda 4 temel kek çeşidinin İngilizce isimlerini, ayırt edici malzemelerini, fırınlama sürelerini ve kalori değerlerini inceleyebilirsiniz.")}</p>
      ${table(["Cake Variation (Kek Çeşidi)", "Distinct Ingredients (Fark Yaratan Malzemeler)", "Baking Time (Pişirme Süresi)", "Calories (Kalori)"], [
        ["Plain Cake (Sade Kek)", "Flour, sugar, eggs, milk, oil (Un, şeker, yumurta, süt, sıvı yağ)", "40 mins (40 dk)", "275 kcal / slice"],
        ["Chocolate Cake (Çikolatalı Kek)", "Cocoa powder, sugar, oil (Kakao tozu, şeker, sıvı yağ)", "40 mins (40 dk)", "310 kcal / slice"],
        ["Carrot Cake (Havuçlu Kek)", "Grated carrot, cinnamon, oil (Rendelenmiş havuç, tarçın, sıvı yağ)", "45 mins (45 dk)", "290 kcal / slice"],
        ["Lemon Cake (Limonlu Kek)", "Lemon zest, fresh lemon juice (Limon kabuğu rendesi, taze limon suyu)", "40 mins (40 dk)", "270 kcal / slice"]
      ])}
    </section>

    <div class="page-grid">
      <nav class="toc" aria-label="İçindekiler">
        <a href="/blog/ingilizce-tarifler/kek#kavramlar" data-scroll-target="kavramlar">Terms (Kavramlar)</a>
        <a href="/blog/ingilizce-tarifler/kek#tarifler" data-scroll-target="tarifler">Variations (Tarifler)</a>
        <a href="/blog/ingilizce-tarifler/kek#sade-kek" data-scroll-target="sade-kek">7 Steps (7 Adım)</a>
        <a href="/blog/ingilizce-tarifler/kek#malzemeler-ve-ekipman" data-scroll-target="malzemeler-ve-ekipman">Ingredients (Malzemeler)</a>
        <a href="/blog/ingilizce-tarifler/kek#besin-degerleri" data-scroll-target="besin-degerleri">Nutrition (Besin Değerleri)</a>
        <a href="/blog/ingilizce-tarifler/kek#olculer" data-scroll-target="olculer">Units (Ölçüler)</a>
        <a href="/blog/ingilizce-tarifler/kek#dil-kurallari" data-scroll-target="dil-kurallari">Grammar (Dil Kuralları)</a>
        <a href="/blog/ingilizce-tarifler/kek#alistirma" data-scroll-target="alistirma">Quiz (Alıştırma)</a>
      </nav>

      <div class="content">
        <section id="kavramlar">
          <p class="eyebrow">CORE CONCEPTS &amp; TRANSLATIONS <span class="tr-highlight">(TEMEL KAVRAMLAR VE ÇEVİRİLER)</span></p>
          <h2>İngilizce Kek Tarifi Nedir? Temel Kavramlar ve Çeviriler</h2>
          <p class="section-intro">İngilizce kek tariflerinde geçen temel kavramlar ve fırınlama fiilleri aşağıda özetlenmiştir.</p>

          <div class="grammar-tabs section-tabs">
            <div class="tab-list" role="tablist" aria-label="Kek Kavramları ve Fiiller">
              <button role="tab" aria-selected="true" tabindex="0" data-tab="kek-terms" class="active"><span class="tab-idx">01</span><span class="tab-title">Terms (Kavramlar)</span></button>
              <button role="tab" aria-selected="false" tabindex="-1" data-tab="kek-types"><span class="tab-idx">02</span><span class="tab-title">Cake Types (Kek Çeşitleri)</span></button>
              <button role="tab" aria-selected="false" tabindex="-1" data-tab="kek-verbs"><span class="tab-idx">03</span><span class="tab-title">Kitchen Verbs (Mutfak Fiilleri)</span></button>
            </div>
            <div class="tab-panels">
              <div class="tab-panel active" role="tabpanel" data-panel="kek-terms">
                <h3>Kek Hamuru ve Pişirme Kavramları</h3>
                ${table(["Kavram (English)", "Türkçe Karşılığı", "İlgili Tarif"], [
                  ["Batter", "Kek hamuru (akışkan kıvamda)", "Tüm kek türleri"],
                  ["Icing veya Frosting", "Kek kreması veya süsleme şekeri", "Çikolatalı ve havuçlu kek"],
                  ["Zest", "Meyve kabuğu rendesi", "Limonlu kek"],
                  ["Fold in", "Hafifçe karıştırarak hamura yedirmek", "Havuçlu kek (rendelenmiş havuç)"],
                  ["Cake Pan", "Kek kalıbı", "Tüm kek türleri"]
                ])}
              </div>
              <div class="tab-panel" role="tabpanel" data-panel="kek-types" hidden>
                <h3>Kek Kelimesi İngilizce Sözlüklerde: Cake Türleri</h3>
                ${table(["English Term", "Türkçe Karşılığı", "Fark"], [
                  ["Cake", "Kek (genel terim)", "Tüm fırınlanmış tatlıları kapsar."],
                  ["Sponge Cake", "Pandispanya veya Sünger kek", "Yağsız veya az yağlı, hafif gözenekli dokuludur."],
                  ["Pound Cake", "Tereyağlı yoğun kek", "Eşit oranda un, yağ, şeker ve yumurta içerir."],
                  ["Cupcake", "Tek porsiyonluk minik kek", "Muffin kalıplarında pişirilen tek kişilik kek."]
                ])}
              </div>
              <div class="tab-panel" role="tabpanel" data-panel="kek-verbs" hidden>
                <h3>İngilizce Tarif Yazımında Kullanılan Fiiller: Mix, Whisk, Bake, Pour</h3>
                ${table(["Verb", "Türkçe Karşılığı", "Example Sentence"], [
                  ["Mix", "Karıştırmak", "Mix the flour and baking powder together."],
                  ["Whisk", "Çırpmak", "Whisk the eggs and sugar until pale and fluffy."],
                  ["Bake", "Fırında pişirmek", "Bake the cake at 180°C for 40 minutes."],
                  ["Pour", "Kalıba dökmek", "Pour the batter evenly into the greased pan."]
                ])}
              </div>
            </div>
          </div>
        </section>

        <div id="tarifler" class="recipe-chapters">
          <div class="chapter-intro">
            <p class="eyebrow eyebrow-lg">4 CAKE VARIATIONS <span class="tr-highlight">(4 KEK ÇEŞİDİ)</span></p>
            <p class="section-intro">Her tarifte tanım, İngilizce–Türkçe malzemeler, ölçüler, görsel malzeme listesi ve yapılış özeti yer alır.</p>
          </div>

          <nav class="variant-subnav" aria-label="Kek Çeşitleri Hızlı Erişim">
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
          </nav>

          ${kekVariants.map((v, i) => `
            <section id="${kekVariantIds[i]}" class="recipe-chapter">
              <div class="chapter-head">
                <span class="variant-number">${String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h2>${v.briefTitle}</h2>
                  <p>${v.description}</p>
                  ${buildChapterMetaHTML({
                    time: { val: "40-45 mins (40-45 dakika)", en: "Total baking and prep time.", tr: "Toplam hazırlık ve fırınlama süresi." },
                    servings: { val: "8 slices (8 dilim)", en: "Yields 8 generous slices.", tr: "8 dilim porsiyon sunar." },
                    count: { val: `${v.ingredients.length} ingredients (${v.ingredients.length} malzeme)`, en: "Wholesome cake ingredients.", tr: `${v.ingredients.length} temel malzeme içerir.` }
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
                    ${table(["İngilizce malzeme", "Türkçe karşılığı", "Miktar"], v.ingredients)}
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
          `).join("")}
        </div>

        <section id="sade-kek">
          <div class="steps-heading">
            <p class="eyebrow eyebrow-lg">7-STEP PLAIN CAKE GUIDE <span class="tr-highlight">(7 ADIMDA SADE KEK REHBERİ)</span></p>
            <h2>How Do You Make Plain Cake Step by Step? <span class="tr-highlight">(Sade Kek İngilizce Adım Adım Nasıl Yapılır?)</span></h2>
            <p class="section-intro"><strong>This classic sponge cake recipe consists of 7 sequential baking steps.</strong> <span class="tr-highlight">(Bu sade kek tarifi 7 adımdan oluşur, yaklaşık 40 dakika pişirme süresi gerektirir ve emir kipiyle kurulur.)</span></p>
            ${buildStepsMetaHTML({
              steps: { val: "7 steps (7 adım)", en: "Follow the 7 steps to bake a soft, fluffy golden sponge cake.", tr: "Yumuşacık sünger kek pişirmek için 7 adımlı yönergeyi sırasıyla takip edin." },
              time: { val: "40 mins (40 dakika)", en: "15 mins batter preparation and 40 mins oven baking time.", tr: "15 dakika hamur hazırlığı ve 40 dakikalık fırınlama süresi." },
              level: { val: "Level A2–B1 (A2–B1 seviye)", en: "Focuses on whisking, sifting, folding, and baking verbs.", tr: "Köpürtme, eleme, spatulayla havalandırma ve fırınlama fiillerini pekiştirir." }
            })}
          </div>
          ${buildStepAccordionHTML(r.steps.map((s, idx) => {
            const title = s[0].replace(/^\d+\.\s*/, "");
            const m = title.match(/^(.*?)\s*\((.*?)\)$/);
            const metaList = [
              { ing: "3 eggs, 1 cup sugar (3 yumurta, 1 su bardağı şeker)", eq: "Mixing bowl, electric whisk (Çırpıcı)", time: "5 mins (5 dakika)" },
              { ing: "1/2 cup milk, 1/2 cup oil (1/2 bardak süt, sıvı yağ)", eq: "Measuring cup (Ölçü bardağı)", time: "2 mins (2 dakika)" },
              { ing: "2 cups flour, 1 packet baking powder (Un ve kabartma tozu)", eq: "Flour sieve (Un eleği)", time: "3 mins (3 dakika)" },
              { ing: "Smooth cake batter (Kek hamuru)", eq: "Silicone spatula (Silikon spatula)", time: "2 mins (2 dakika)" },
              { ing: "1 tbsp butter, 1 tbsp flour (Yağ ve un)", eq: "Cake pan (Kek kalıbı)", time: "2 mins (2 dakika)" },
              { ing: "Cake batter (Kek hamuru)", eq: "Prepared cake pan (Kalıp)", time: "2 mins (2 dakika)" },
              { ing: "Baked cake (Pişen kek)", eq: "Preheated oven at 180°C (180°C fırın)", time: "40 mins (40 dakika)" }
            ];
            const meta = metaList[idx] || {};
            return {
              number: idx + 1,
              titleEn: m ? m[1].trim() : title,
              titleTr: m ? m[2].trim() : ("Adım " + (idx + 1)),
              sentenceEn: s[1],
              sentenceTr: s[2],
              actionEn: s[1].split(" ")[0] + " (Eylem)",
              actionTr: "Mutfak Eylemi",
              img: `/blog/ingilizce-tarifler/images/steps/kek-step-${idx + 1}.webp`,
              ingredient: meta.ing,
              equipment: meta.eq,
              time: meta.time
            };
          }))}
          ${table(["Adım No", "İngilizce Talimat", "Türkçe Karşılığı"], r.steps.map((s, i) => [i + 1, s[1], s[2]]))}
        </section>

        <section id="malzemeler-ve-ekipman">
          <p class="eyebrow eyebrow-lg">INGREDIENTS &amp; EQUIPMENT <span class="tr-highlight">(MALZEME VE EKİPMAN LİSTESİ)</span></p>
          <h2>What Do You Need to Bake a Cake in English? <span class="tr-highlight">(İngilizce Kek Yapmak İçin Neler Gerekir?)</span></h2>
          <p class="section-intro">Kek yapmak için gereken temel malzemeler flour, sugar, eggs, milk, oil ve baking powder'dır.</p>

          <div class="grammar-tabs section-tabs">
            <div class="tab-list" role="tablist" aria-label="Malzemeler ve Ekipmanlar">
              <button role="tab" aria-selected="true" tabindex="0" data-tab="kek-ing" class="active"><span class="tab-idx">01</span><span class="tab-title">Ingredients (Malzemeler)</span></button>
              <button role="tab" aria-selected="false" tabindex="-1" data-tab="kek-eq"><span class="tab-idx">02</span><span class="tab-title">Equipment (Ekipmanlar)</span></button>
            </div>
            <div class="tab-panels">
              <div class="tab-panel active" role="tabpanel" data-panel="kek-ing">
                <h3>Sade Kek Malzeme Listesi</h3>
                ${table(["İngilizce malzeme", "Türkçe karşılığı", "Miktar"], r.ingredients)}
              </div>
              <div class="tab-panel" role="tabpanel" data-panel="kek-eq" hidden>
                <h3>Which Baking Equipment Is Required for a Cake? <span class="tr-highlight">(Gerekli Ekipmanlar)</span></h3>
                ${table(["İngilizce Araç Adı", "Türkçe Karşılığı", "Kullanıldığı Aşama"], r.equipment)}
              </div>
            </div>
          </div>
        </section>

        <section id="besin-degerleri">
          <p class="eyebrow eyebrow-lg">CALORIES &amp; NUTRITION <span class="tr-highlight">(KALORİ VE BESİN DEĞERLERİ)</span></p>
          <h2>How Many Calories Does a Slice of Cake Contain? <span class="tr-highlight">(Bir Dilim Kek Kaç Kalori İçerir?)</span></h2>
          <p class="section-intro">Bir dilim sade kek (yaklaşık 80 gram) ortalama <strong>260–290 kcal</strong> içerir. Bu değer, tarifteki yağ ve şeker oranına göre değişir.</p>

          <div class="grammar-tabs section-tabs">
            <div class="tab-list" role="tablist" aria-label="Kalori ve Besin Değerleri">
              <button role="tab" aria-selected="true" tabindex="0" data-tab="kek-cal" class="active"><span class="tab-idx">01</span><span class="tab-title">Portions &amp; Calories (Porsiyon Kalorileri)</span></button>
              <button role="tab" aria-selected="false" tabindex="-1" data-tab="kek-nut"><span class="tab-idx">02</span><span class="tab-title">Nutrition Facts (Besin Ögeleri)</span></button>
            </div>
            <div class="tab-panels">
              <div class="tab-panel active" role="tabpanel" data-panel="kek-cal">
                <h3>Kek Porsiyonları ve Kalori Değerleri</h3>
                ${table(["Serving (Porsiyon)", "Calories (Kalori)", "Açıklama"], [
                  ["100 g sade kek", "~350 kcal", "Standart pişmiş sade kek hamurunun 100 gramı için ortalama değer."],
                  ["1 dilim (~80 g)", "~275 kcal", "Orta boy bir servis dilimi için yaklaşık değer."],
                  ["1 dilim çikolatalı kek (~80 g)", "~310 kcal", "Kakao ve ekstra şeker içeren zengin dilim."]
                ])}
              </div>
              <div class="tab-panel" role="tabpanel" data-panel="kek-nut" hidden>
                <h3>What Are the Nutrition Facts of Plain Cake? <span class="tr-highlight">(Sade Kekin Besin Değerleri Nelerdir?)</span></h3>
                ${table(["Nutrient", "Besin Ögesi", "Amount per 100 g"], [
                  ["Protein", "Protein", "~5 g"],
                  ["Carbohydrate", "Karbonhidrat", "~45 g"],
                  ["Fat", "Yağ", "~15 g"],
                  ["Fiber", "Lif", "~1 g"]
                ])}
              </div>
            </div>
          </div>
        </section>

        <section id="olculer">
          <p class="eyebrow eyebrow-lg">MEASUREMENT UNITS &amp; VOCABULARY <span class="tr-highlight">(ÖLÇÜ BİRİMLERİ VE KELİMELER)</span></p>
          <h2>İngilizce Kek Tariflerinde Kullanılan Ölçü Birimleri Nelerdir?</h2>
          <p class="section-intro">İngilizce kek tariflerinde en sık kullanılan ölçü birimleri cup, tablespoon, teaspoon, gram ve milliliter'dır.</p>

          <div class="grammar-tabs section-tabs">
            <div class="tab-list" role="tablist" aria-label="Mutfak Terimleri ve Ölçüler">
              <button role="tab" aria-selected="true" tabindex="0" data-tab="kek-vocab-tab" class="active"><span class="tab-idx">01</span><span class="tab-title">Kitchen Vocabulary (Mutfak Terimleri)</span></button>
              <button role="tab" aria-selected="false" tabindex="-1" data-tab="kek-units-tab"><span class="tab-idx">02</span><span class="tab-title">Spoon &amp; Cup (Kaşık ve Bardak Ölçüleri)</span></button>
              <button role="tab" aria-selected="false" tabindex="-1" data-tab="kek-metric-tab"><span class="tab-idx">03</span><span class="tab-title">Metric Weights (Gram ve Mililitre)</span></button>
            </div>
            <div class="tab-panels">
              <div class="tab-panel active" role="tabpanel" data-panel="kek-vocab-tab">
                <h3>Kek Tarif Metninde Geçen Temel İngilizce Mutfak Kelimeleri Nelerdir?</h3>
                <div class="vocab vocab-wide">
                  ${vocab.map(v => `<article><h4>${v[0]}</h4><strong>${v[1]}</strong><p>${v[2]}</p></article>`).join("")}
                </div>
              </div>
              <div class="tab-panel" role="tabpanel" data-panel="kek-units-tab" hidden>
                <h3>Tablespoon, Teaspoon, Cup: İngilizce Ölçü Birimlerinin Türkçe Karşılıkları</h3>
                ${table(["English Unit", "Türkçe Karşılığı", "Metric Equivalent"], [
                  ["1 tablespoon", "1 yemek kaşığı", "15 ml veya 15 g"],
                  ["1 teaspoon", "1 çay kaşığı", "5 ml veya 5 g"],
                  ["1 cup", "1 su bardağı", "240 ml veya 200 g"]
                ])}
              </div>
              <div class="tab-panel" role="tabpanel" data-panel="kek-metric-tab" hidden>
                <h3>Gram ve Litre İngilizce Tariflerde Nasıl Kullanılır?</h3>
                ${table(["Metric Unit", "Imperial Equivalent", "Türkçe Açıklama"], [
                  ["100 g", "3.5 oz", "100 gram un veya şeker"],
                  ["200 g", "7.0 oz", "Sade kek için 200 g un ölçüsü"],
                  ["1 l", "4.2 cups", "1 litre süt yaklaşık 4.2 su bardağıdır"]
                ])}
              </div>
            </div>
          </div>
        </section>

        <section id="dil-kurallari">
          ${kekGrammarTabs()}
        </section>

                <section id="alistirma" class="exercise">
          <p class="eyebrow" style="color:#93c5fd;">PRACTICE &amp; QUIZ <span class="tr-highlight">(KAZANIM KONTROLÜ VE ALIŞTIRMALAR)</span></p>
          <h2 style="color:#ffffff;">8. Sınıf İngilizce Omlet Tarifi Alıştırma ve Quizi</h2>
          <p class="section-intro" style="color:#cbd5e1;">Öğrendiğiniz omlet hazırlama eylemlerini, mutfak terimlerini ve emir cümlelerini bu interaktif test ile pekiştirin.</p>

          <div class="quiz-grid" style="display: flex; flex-direction: column; gap: 1.5rem; margin-top: 2rem;">
            ${omletQuiz.map((q, idx) => `
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
        ${getRelatedRecipesHTML("kek")}
      </div>
    </div>
  </article>`;

  initQuizInteractivity(root, "Kek", renderKekPage);
  initVariantSubnavScroll(root);
}

function updateSubHeaderActive(currentSlug) {
  const homeLink = document.querySelector(".sub-nav-home");
  const isHome = !currentSlug || currentSlug === "index" || currentSlug === "home";
  if (homeLink) homeLink.classList.toggle("active", isHome);

  const recipe = recipes[currentSlug];
  const catId = recipe ? recipe.category : null;

  document.querySelectorAll(".sub-nav-dropdown").forEach(dropdown => {
    const isCatActive = !isHome && dropdown.dataset.cat === catId;
    dropdown.classList.toggle("active", isCatActive);
    const catBtn = dropdown.querySelector(".sub-nav-cat-btn");
    if (catBtn) catBtn.setAttribute("aria-expanded", "false");
  });

  document.querySelectorAll(".sub-nav-dropdown-item").forEach(item => {
    const isItemActive = item.dataset.slug === currentSlug;
    item.classList.toggle("active", isItemActive);
  });

  const activeTarget = document.querySelector(".sub-nav-dropdown.active") || homeLink;
  if (activeTarget) {
    activeTarget.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }
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
    <p class="eyebrow eyebrow-lg">RECIPE GRAMMAR &amp; USAGE RULES <span class="tr-highlight">(TARİF DİL BİLGİSİ VE ANLATIM KURALLARI)</span></p>
    <h2>Omlet Tarifi Yazarken Dikkat Edilmesi Gereken Dil Kuralları <span class="tr-highlight">(Grammar Rules for Omelette Recipes)</span></h2>
    <p class="section-intro">Explore the 3 essential grammar rules for writing English omelette recipes. (İngilizce omlet tariflerinde kullanılan 3 temel dil kuralını aşağıdaki sekmelerden inceleyebilirsiniz.)</p>
    <div class="grammar-tabs section-tabs">
      <div class="tab-list" role="tablist" aria-label="Omlet Dil Kuralları">
        <button role="tab" aria-selected="true" tabindex="0" data-tab="omlet-imperatives" class="active">
          <span class="tab-idx">01</span><span class="tab-title">Imperatives (Emir Kipi)</span>
        </button>
        <button role="tab" aria-selected="false" tabindex="-1" data-tab="omlet-sequence">
          <span class="tab-idx">02</span><span class="tab-title">Sequence Adverbs (Sıra Zarfları)</span>
        </button>
        <button role="tab" aria-selected="false" tabindex="-1" data-tab="omlet-rules">
          <span class="tab-idx">03</span><span class="tab-title">Grammar Rules (Dil Kuralları)</span>
        </button>
      </div>
      <div class="tab-panels">
        <div class="tab-panel active" role="tabpanel" data-panel="omlet-imperatives">
          <p class="section-intro">Imperatives give direct cooking instructions without a subject. (Emir kipi, tariflerde öznesiz doğrudan pişirme eylemi belirtir.)</p>
          ${table(["İngilizce Emir Kipi", "Mutfak Eylemi", "Türkçe Çeviri"], [
            ["Beat the eggs with salt and pepper.", "Beat (Çırpmak)", "Yumurtaları tuz ve karabiberle çırpın."],
            ["Melt the butter in a non-stick pan.", "Melt (Eritmek)", "Tereyağını yapışmaz tavada eritin."],
            ["Pour the mixture into the hot skillet.", "Pour (Dökmek)", "Karışımı sıcak tavaya dökün."],
            ["Cook for 2–3 minutes over medium heat.", "Cook (Pişirmek)", "Orta ateşte 2–3 dakika pişirin."],
            ["Fold the omelette in half carefully.", "Fold (Katlamak)", "Omleti dikkatlice ikiye katlayın."]
          ])}
        </div>
        <div class="tab-panel" role="tabpanel" data-panel="omlet-sequence" hidden>
          <p class="section-intro">Sequence adverbs show the chronological progression of cooking steps. (Sıra zarfları tarif adımlarının kronolojik sırasını belirler.)</p>
          ${table(["Sequence Adverb", "Fonksiyon", "Örnek Cümle (İngilizce - Türkçe)"], [
            ["First (İlk olarak)", "Başlangıç adımı", "First, crack the fresh eggs into a bowl. (İlk olarak taze yumurtaları bir kaseye kırın.)"],
            ["Then (Ardından)", "İkinci adım", "Then, whisk thoroughly with a fork. (Ardından bir çatalla iyice çırpın.)"],
            ["Next (Sonra)", "Gelişme adımı", "Next, pour into the melted butter. (Sonra erimiş tereyağının içine dökün.)"],
            ["After that (Daha sonra)", "Tamamlama adımı", "After that, lift the edges gently. (Daha sonra kenarları nazikçe kaldırın.)"],
            ["Finally (Son olarak)", "Servis adımı", "Finally, slide onto a warm plate. (Son olarak ılık bir tabağa kaydırın.)"]
          ])}
        </div>
        <div class="tab-panel" role="tabpanel" data-panel="omlet-rules" hidden>
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

const omletVariantIds = ["plain-omelette", "cheese-omelette", "vegetable-omelette", "mushroom-omelette"];

const omletQuiz = [
  {
    num: 1,
    question: "Which English verb means \"yumurtayı kırmak\" when starting an omelette?",
    questionTr: "Omlet yapımına başlarken \"yumurtayı kırmak\" anlamına gelen İngilizce fiil hangisidir?",
    options: ["A) Crack", "B) Boil", "C) Chop", "D) Peel"],
    answer: "A) Crack"
  },
  {
    num: 2,
    question: "Which action describes folding the omelette in half in the pan?",
    questionTr: "Tavada omleti ikiye katlama eylemini hangi İngilizce fiil ifade eder?",
    options: ["A) Whisk", "B) Bake", "C) Fold", "D) Sift"],
    answer: "C) Fold"
  },
  {
    num: 3,
    question: "What is the Turkish meaning of \"Beat the eggs with salt and pepper\"?",
    questionTr: "\"Beat the eggs with salt and pepper\" cümlesinin doğru Türkçe karşılığı nedir?",
    options: ["A) Yumurtaları tavada yakın", "B) Yumurtaları tuz ve karabiberle çırpın", "C) Yumurtaları soğuk suda bekletin", "D) Yumurtaları haşlayın"],
    answer: "B) Yumurtaları tuz ve karabiberle çırpın"
  },
  {
    num: 4,
    question: "Which pan surface is recommended so the eggs do not stick?",
    questionTr: "Yumurtanın tavaya yapışmaması için hangi tava özelliği tercih edilir?",
    options: ["A) Non-stick (Yapışmaz yüzey)", "B) Rusty surface", "C) Deep stockpot", "D) Glass bowl"],
    answer: "A) Non-stick (Yapışmaz yüzey)"
  }
];

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

  root.innerHTML = `<article class="pasta-guide recipe-guide">
    <div class="reading-progress" aria-hidden="true"><span></span></div>
    
    <header class="hero">
      <div>
        <p class="eyebrow">RECIPES &amp; COOKING GUIDE <span class="tr-highlight">(İNGİLİZCE YEMEK TARİFLERİ)</span></p>
        <h1>İngilizce Omlet Tarifi <span class="tr-highlight">(Omlet Yapılışı İngilizce)</span></h1>
        <aside class="course-banner" aria-label="İngilizce kursu">
          <div class="course-banner-text">
            <small class="cta-eyebrow">KONUŞARAK ÖĞREN İNGİLİZCE KURSU</small>
            <strong class="cta-heading">İngilizceyi tarif ezberleyerek değil, konuşarak öğrenin.</strong>
          </div>
          <button class="cta-btn cta-btn-orange" onclick="window.location.href='https://student.konusarakogren.com/auth/register'">Ücretsiz tanışma dersi <span class="arrow">→</span></button>
        </aside>
        <p class="lede"><strong>Plain Omelette Recipe.</strong> (İngilizce omlet tarifi; malzemeleri, çırpma ve katlama adımlarını Türkçe karşılıklarıyla anlatan pratik bir rehberdir.)</p>
        <div class="article-meta"><span class="author-mark" aria-hidden="true">KO</span><span><strong>Konuşarak Öğren Editör</strong><small>Yayınlanma tarihi: <time datetime="2026-08-24">24 Ağustos 2026</time></small></span></div>
      </div>
      <figure class="hero-visual">
        <img src="/blog/ingilizce-tarifler/images/omlet-hero.webp" alt="Servis tabağında sıcak sade omlet">
        <figcaption>Plain Omelette (Sade Omlet)</figcaption>
      </figure>
      ${buildFactsCardHTML({
        title: "Omlet",
        prep: { val: "3 mins (3 dk)", en: "Whisking eggs with seasoning takes 3 minutes.", tr: "Yumurtaları baharatlarla çırpma 3 dakika sürer." },
        cook: { val: "7 mins (7 dk)", en: "Gentle pan cooking takes 7 minutes.", tr: "Tavada kısık ateşte pişirme 7 dakika sürer." },
        servings: { val: "1 serving (1 kişilik)", en: "Ideal single breakfast portion.", tr: "İdeal tek kişilik kahvaltı porsiyonu." },
        level: { val: "A1–A2 (Temel Seviye)", en: "Core kitchen imperatives and breakfast vocabulary.", tr: "Temel mutfak emir kipleri ve kahvaltı kelimeleri." }
      })}
    </header>

    <section class="hero-overview-table" id="definition-variations">
      <p class="eyebrow eyebrow-lg">OVERVIEW &amp; COMPARISON <span class="tr-highlight">(TANIM VE ÇEŞİTLER KARŞILAŞTIRMASI)</span></p>
      <h2 class="definition-heading">English Omelette Recipes: Variations, Fillings and Cooking Times <span class="tr-highlight">(İngilizce Omlet Çeşitleri, İç Harçları ve Pişirme Süreleri)</span></h2>
      <p class="section-intro">${formatBilingualText("Aşağıdaki tabloda 4 temel omlet çeşidinin İngilizce isimlerini, ayırt edici malzemelerini, pişirme sürelerini ve kalori değerlerini inceleyebilirsiniz.")}</p>
      ${table(["English Recipe Name", "Türkçe Adı", "Main Ingredients (Ana Malzemeler)", "Main Steps (Temel Adımlar)"], [
        ["Plain Omelette", "Sade Omlet", "Eggs, butter, salt, black pepper (Yumurta, tereyağı, tuz, karabiber)", "Whisk eggs with seasoning, melt butter in pan, cook gently and fold in half. (Yumurtaları baharatla çırpın, tavada tereyağını eritin, kısık ateşte pişirin ve ikiye katlayın.)"],
        ["Cheese Omelette", "Peynirli Omlet", "Eggs, grated cheddar or feta, butter (Yumurta, rendelenmiş kaşar veya beyaz peynir, tereyağı)", "Whisk eggs, pour into pan, sprinkle grated cheese over half and fold over. (Yumurtaları çırpın, tavaya dökün, yarısına rendelenmiş peynir serpin ve katlayın.)"],
        ["Vegetable Omelette", "Sebzeli Omlet", "Eggs, green pepper, tomato, onion, butter (Yumurta, yeşil biber, domates, soğan, tereyağı)", "Sauté chopped pepper, tomato and onion, pour beaten eggs over and cook on low heat. (Doğranmış biber, domates ve soğanı soteleyin, çırpılmış yumurtaları üzerine dökün ve kısık ateşte pişirin.)"],
        ["Mushroom Omelette", "Mantarlı Omlet", "Eggs, sliced button mushrooms, butter (Yumurta, dilimlenmiş kültür mantarı, tereyağı)", "Sauté sliced mushrooms in butter until tender, pour eggs over and fold to serve. (Dilimlenmiş mantarları tereyağında soteleyin, yumurtaları dökün ve katlayarak servis edin.)"]
      ], "İngilizce Omlet Çeşitleri ve Pişirme Özeti")}
    </section>

    <div class="page-grid">
      <nav class="toc" aria-label="İçindekiler">
        <a href="/blog/ingilizce-tarifler/omlet#kavramlar" data-scroll-target="kavramlar">Terms (Kavramlar)</a>
        <a href="/blog/ingilizce-tarifler/omlet#tarifler" data-scroll-target="tarifler">Variations (Tarifler)</a>
        <a href="/blog/ingilizce-tarifler/omlet#sade-omlet" data-scroll-target="sade-omlet">5 Steps (5 Adım)</a>
        <a href="/blog/ingilizce-tarifler/omlet#malzemeler-ve-ekipman" data-scroll-target="malzemeler-ve-ekipman">Ingredients (Malzemeler)</a>
        <a href="/blog/ingilizce-tarifler/omlet#besin-degerleri" data-scroll-target="besin-degerleri">Nutrition (Besin Değerleri)</a>
        <a href="/blog/ingilizce-tarifler/omlet#olculer" data-scroll-target="olculer">Units (Ölçüler)</a>
        <a href="/blog/ingilizce-tarifler/omlet#dil-kurallari" data-scroll-target="dil-kurallari">Grammar (Dil Kuralları)</a>
        <a href="/blog/ingilizce-tarifler/omlet#alistirma" data-scroll-target="alistirma">Quiz (Alıştırma)</a>
      </nav>

      <div class="content">
        <section id="kavramlar">
          <p class="eyebrow eyebrow-lg">CORE CONCEPTS &amp; VOCABULARY <span class="tr-highlight">(TEMEL KAVRAMLAR VE KELİMELER)</span></p>
          <h2>İngilizce Omlet Tarifi: Temel Fiiller, Kelimeler ve Malzemeler <span class="tr-highlight">(English Omelette Concepts and Vocabulary)</span></h2>
          
          ${buildAppBannerHTML("Omlet")}
          <p class="section-intro">İngilizce omlet tarifi okurken ve yazarken bilmeniz gereken temel mutfak fiilleri, pişirme terimleri ve işlem adımları aşağıda sekmeler halinde sunulmuştur.</p>

          <div class="grammar-tabs section-tabs">
            <div class="tab-list" role="tablist" aria-label="Omlet Kavramları ve Fiiller">
              <button role="tab" aria-selected="true" tabindex="0" data-tab="omlet-verbs" class="active"><span class="tab-idx">01</span><span class="tab-title">Core Verbs (Temel Fiiller)</span></button>
              <button role="tab" aria-selected="false" tabindex="-1" data-tab="omlet-terms"><span class="tab-idx">02</span><span class="tab-title">Cooking Terms (Pişirme Terimleri)</span></button>
              <button role="tab" aria-selected="false" tabindex="-1" data-tab="omlet-visuals"><span class="tab-idx">03</span><span class="tab-title">Visual Cards (Görsel Kartlar)</span></button>
            </div>
            <div class="tab-panels">
              <div class="tab-panel active" role="tabpanel" data-panel="omlet-verbs">
                <h3>Omlet Tariflerinde Geçen Temel Mutfak Fiilleri</h3>
                ${table(["Verb (Fiil)", "Turkish Meaning (Türkçe Karşılığı)", "Example Sentence (Örnek Cümle)"], [
                  ["Crack", "Kırmak (Yumurta)", "Crack 2 eggs into a clean bowl."],
                  ["Beat", "Çırpmak", "Beat the eggs with salt and pepper."],
                  ["Heat", "Isıtmak (Tava veya Tereyağı)", "Heat 1 tablespoon of butter in a pan."],
                  ["Pour", "Dökmek", "Pour the egg mixture into the pan."],
                  ["Fold", "Katlamak", "Fold the omelette in half with a spatula."],
                  ["Whisk", "Telle çırpmak", "Whisk the eggs thoroughly for a fluffy texture."]
                ])}
              </div>
              <div class="tab-panel" role="tabpanel" data-panel="omlet-terms" hidden>
                <h3>Omlet Pişirmede Kullanılan Mutfak Terimleri</h3>
                ${table(["English Term", "Türkçe Karşılığı", "Context in Cooking"], [
                  ["Fluffy", "Kabarık veya yumuşak doku", "Açık ve hafif dokulu omlet için hava kabarcıkları oluşturulur."],
                  ["Melt", "Eritmek (Tereyağı)", "Tavada tereyağının köpürmeden eritilmesidir."],
                  ["Flip veya Fold", "Çevirmek veya katlamak", "Omletin altı piştiğinde ikiye katlanması işlemidir."],
                  ["Non-stick", "Yapışmaz (Tava özelliği)", "Omletin tabana yapışmadan kaymasını sağlayan teflon yüzeydir."]
                ])}
              </div>
              <div class="tab-panel" role="tabpanel" data-panel="omlet-visuals" hidden>
                <h3>Görsel Omlet Kartları <span class="tr-highlight">(Widescreen Visual Cards)</span></h3>
                <figure class="vocab-card-visual" style="margin: 2rem 0; text-align: center;">
                  <img src="/blog/ingilizce-tarifler/images/omlet-vocab-card.webp" alt="Cooking in English - Omelette Verbs Widescreen Visual Card" style="width: 100%; border-radius: 20px; box-shadow: 0 12px 36px rgba(0,0,0,0.12); border: 1px solid var(--ko-border);" />
                  <figcaption style="margin-top: 10px; color: var(--ko-gray-muted); font-size: 14px;"><strong>Cooking in English:</strong> Omlet tariflerinde kullanılan temel fiiller ve işlem adımları kartı.</figcaption>
                </figure>
                <figure class="vocab-card-visual" style="margin: 2rem 0; text-align: center;">
                  <img src="/blog/ingilizce-tarifler/images/omlet-ingredients-card.webp" alt="Cooking in English - Omelette Ingredients and Tools Widescreen Card" style="width: 100%; border-radius: 20px; box-shadow: 0 12px 36px rgba(0,0,0,0.12); border: 1px solid var(--ko-border);" />
                  <figcaption style="margin-top: 10px; color: var(--ko-gray-muted); font-size: 14px;"><strong>Cooking in English:</strong> Omlet malzemeleri ve mutfak araç-gereçleri görsel kartı.</figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        <div id="tarifler" class="recipe-chapters">
          <div class="chapter-intro">
            <p class="eyebrow eyebrow-lg">4 OMELETTE VARIATIONS <span class="tr-highlight">(4 OMLET ÇEŞİDİ)</span></p>
            <p class="section-intro">Her tarifte tanım, İngilizce–Türkçe malzemeler, ölçüler, görsel malzeme listesi ve yapılış özeti yer almaktadır.</p>
          </div>

          <nav class="variant-subnav" aria-label="Omlet Çeşitleri Hızlı Erişim">
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
          </nav>

          ${omletVariants.map((v, i) => `
            <section id="${omletVariantIds[i]}" class="recipe-chapter">
              <div class="chapter-head">
                <span class="variant-number">${String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h2>${v.briefTitle}</h2>
                  <p>${v.description}</p>
                  ${buildChapterMetaHTML({
                    time: { val: "7-10 mins (7-10 dakika)", en: "Total cooking and prep time.", tr: "Toplam hazırlık ve pişirme süresi." },
                    servings: { val: "1 serving (1 kişilik)", en: "Single breakfast portion.", tr: "Tek kişilik porsiyon sunar." },
                    count: { val: `${v.ingredients.length} ingredients (${v.ingredients.length} malzeme)`, en: "Fresh breakfast ingredients.", tr: `${v.ingredients.length} temel malzeme içerir.` }
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
                    ${table(["İngilizce malzeme", "Türkçe karşılığı", "Miktar"], v.ingredients)}
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
          `).join("")}
        </div>

        <section id="sade-omlet">
          <div class="steps-heading">
            <p class="eyebrow eyebrow-lg">5-STEP PLAIN OMELETTE GUIDE <span class="tr-highlight">(5 ADIMDA SADE OMLET REHBERİ)</span></p>
            <h2>How Do You Make Plain Omelette Step by Step? <span class="tr-highlight">(Sade Omlet İngilizce Adım Adım Nasıl Yapılır?)</span></h2>
            <p class="section-intro"><strong>Classic plain omelette is prepared in 5 quick and straightforward steps.</strong> <span class="tr-highlight">(Sade omlet 5 temel adımda hazırlanır; İngilizce talimat cümleleri doğrudan emir kipiyle kurulur.)</span></p>
            ${buildStepsMetaHTML({
              steps: { val: "5 steps (5 adım)", en: "Follow the 5 steps to cook a fluffy, tender breakfast omelette.", tr: "Yumuşacık kahvaltılık omlet pişirmek için 5 adımlı yönergeyi sırasıyla takip edin." },
              time: { val: "7 mins (7 dakika)", en: "Total active beating, pan cooking and folding time.", tr: "Yumurta çırpma, tavada pişirme ve katlama süresi." },
              level: { val: "Level A1–A2 (A1–A2 seviye)", en: "Focuses on cracking, whisking, melting, and folding verbs.", tr: "Yumurta kırma, çırpma, tereyağı eritme ve spatulayla katlama fiillerini pekiştirir." }
            })}
          </div>
          ${buildStepAccordionHTML(r.steps.map((s, idx) => {
            const title = s[0].replace(/^\d+\.\s*/, "");
            const m = title.match(/^(.*?)\s*\((.*?)\)$/);
            const metaList = [
              { ing: "2 fresh eggs (2 adet taze yumurta)", eq: "Mixing bowl (Karıştırma kasesi)", time: "1 min (1 dakika)" },
              { ing: "1 pinch salt & black pepper (Tuz ve karabiber)", eq: "Whisk or fork (Çırpıcı veya çatal)", time: "1 min (1 dakika)" },
              { ing: "1 tablespoon butter (1 yemek kaşığı tereyağı)", eq: "Non-stick skillet (Yapışmaz tava)", time: "1 min (1 dakika)" },
              { ing: "Beaten egg mixture (Çırpılmış yumurta)", eq: "Non-stick skillet (Yapışmaz tava)", time: "2 mins (2 dakika)" },
              { ing: "Cooked omelette (Pişen omlet)", eq: "Silicone spatula & plate (Spatula ve tabak)", time: "1 min (1 dakika)" }
            ];
            const meta = metaList[idx] || {};
            return {
              number: idx + 1,
              titleEn: m ? m[1].trim() : title,
              titleTr: m ? m[2].trim() : ("Adım " + (idx + 1)),
              sentenceEn: s[1],
              sentenceTr: s[2],
              actionEn: s[1].split(" ")[0] + " (Eylem)",
              actionTr: "Mutfak Eylemi",
              img: `/blog/ingilizce-tarifler/images/steps/omlet-step-${idx + 1}.webp`,
              ingredient: meta.ing,
              equipment: meta.eq,
              time: meta.time
            };
          }))}
          ${table(["Adım No", "İngilizce Talimat", "Türkçe Karşılığı"], r.steps.map((s, i) => [i + 1, s[1], s[2]]))}
        </section>

        <section id="malzemeler-ve-ekipman">
          <p class="eyebrow eyebrow-lg">INGREDIENTS &amp; EQUIPMENT <span class="tr-highlight">(MALZEME VE EKİPMAN LİSTESİ)</span></p>
          <h2>What Do You Need to Make an Omelette in English? <span class="tr-highlight">(İngilizce Omlet Yapmak İçin Neler Gerekir?)</span></h2>
          <p class="section-intro">Sade ve çeşit omletler için gereken temel malzemeler eggs, butter, salt, black pepper ile tava ve çırpıcı ekipmanlarıdır.</p>

          <div class="grammar-tabs section-tabs">
            <div class="tab-list" role="tablist" aria-label="Malzemeler ve Ekipmanlar">
              <button role="tab" aria-selected="true" tabindex="0" data-tab="omlet-ing" class="active"><span class="tab-idx">01</span><span class="tab-title">Ingredients (Malzemeler)</span></button>
              <button role="tab" aria-selected="false" tabindex="-1" data-tab="omlet-eq"><span class="tab-idx">02</span><span class="tab-title">Equipment (Ekipmanlar)</span></button>
            </div>
            <div class="tab-panels">
              <div class="tab-panel active" role="tabpanel" data-panel="omlet-ing">
                <h3>Sade Omlet Malzeme Listesi</h3>
                ${table(["İngilizce malzeme", "Türkçe karşılığı", "Miktar"], r.ingredients)}
              </div>
              <div class="tab-panel" role="tabpanel" data-panel="omlet-eq" hidden>
                <h3>Gerekli Omlet Ekipmanları ve Mutfak Araçları</h3>
                ${table(["İngilizce Araç Adı", "Türkçe Karşılığı", "Kullanıldığı Aşama"], r.equipment)}
              </div>
            </div>
          </div>
        </section>

        <section id="besin-degerleri">
          <p class="eyebrow eyebrow-lg">CALORIES &amp; NUTRITION <span class="tr-highlight">(KALORİ VE BESİN DEĞERLERİ)</span></p>
          <h2>How Many Calories Does an Omelette Have? <span class="tr-highlight">(Omlet Kaç Kalori İçerir?)</span></h2>
          <p class="section-intro">2 yumurtalı tereyağlı sade bir omlet yaklaşık <strong>200 kcal</strong> enerji verir. Peynirli veya mantarlı eklentilerle kalori değeri 230–260 kcal aralığına çıkar.</p>

          <div class="grammar-tabs section-tabs">
            <div class="tab-list" role="tablist" aria-label="Kalori ve Besin Değerleri">
              <button role="tab" aria-selected="true" tabindex="0" data-tab="omlet-cal" class="active"><span class="tab-idx">01</span><span class="tab-title">Portions &amp; Calories (Porsiyon Kalorileri)</span></button>
              <button role="tab" aria-selected="false" tabindex="-1" data-tab="omlet-nut"><span class="tab-idx">02</span><span class="tab-title">Nutrition Facts (Besin Ögeleri)</span></button>
            </div>
            <div class="tab-panels">
              <div class="tab-panel active" role="tabpanel" data-panel="omlet-cal">
                <h3>Omlet Çeşitleri ve Kalori Tablosu</h3>
                ${table(["Serving (Porsiyon)", "Calories (Kalori)", "Açıklama"], [
                  ["100 g sade omlet", "154 kcal", "Tereyağlı standart omletin 100 gramı için ortalama değer."],
                  ["1 porsiyon sade omlet (2 yumurta)", "200 kcal", "Kahvaltıda 1 porsiyon sade omlet değeri."],
                  ["1 porsiyon peynirli omlet", "260 kcal", "Rendelenmiş kaşar veya beyaz peynir içeren omlet."],
                  ["1 porsiyon mantarlı omlet", "230 kcal", "Sotelenmiş mantar ilaveli kahvaltı omleti."]
                ])}
              </div>
              <div class="tab-panel" role="tabpanel" data-panel="omlet-nut" hidden>
                <h3>Sade Omletin Besin Değerleri <span class="tr-highlight">(Nutrition Facts of Plain Omelette)</span></h3>
                ${table(["Nutrient", "Besin Ögesi", "Amount per Serving (1 Porsiyon)"], [
                  ["Protein", "Protein", "13 g"],
                  ["Fat", "Yağ", "15 g"],
                  ["Carbohydrate", "Karbonhidrat", "1 g"],
                  ["Sodium", "Sodyum", "320 mg"]
                ])}
              </div>
            </div>
          </div>
        </section>

        <section id="olculer">
          <p class="eyebrow eyebrow-lg">MEASUREMENT UNITS &amp; VOCABULARY <span class="tr-highlight">(ÖLÇÜ BİRİMLERİ VE KELİMELER)</span></p>
          <h2>İngilizce Omlet Tariflerinde Kullanılan Ölçü Birimleri Nelerdir?</h2>
          <p class="section-intro">Omlet tariflerinde en sık kullanılan mutfak ölçü terimleri pinch, tablespoon, piece ve gram birimleridir.</p>

          <div class="grammar-tabs section-tabs">
            <div class="tab-list" role="tablist" aria-label="Mutfak Terimleri ve Ölçüler">
              <button role="tab" aria-selected="true" tabindex="0" data-tab="omlet-vocab-tab" class="active"><span class="tab-idx">01</span><span class="tab-title">Kitchen Vocabulary (Mutfak Terimleri)</span></button>
              <button role="tab" aria-selected="false" tabindex="-1" data-tab="omlet-units-tab"><span class="tab-idx">02</span><span class="tab-title">Spoon &amp; Pinch (Kaşık ve Tutam Ölçüleri)</span></button>
            </div>
            <div class="tab-panels">
              <div class="tab-panel active" role="tabpanel" data-panel="omlet-vocab-tab">
                <h3>Omlet Tarif Metninde Geçen Temel İngilizce Mutfak Kelimeleri</h3>
                <div class="vocab vocab-wide">
                  ${r.vocab.map(v => `<article><h4>${v[0]}</h4><strong>${v[1]}</strong><p>${v[2]}</p></article>`).join("")}
                </div>
              </div>
              <div class="tab-panel" role="tabpanel" data-panel="omlet-units-tab" hidden>
                <h3>Pinch, Tablespoon, Piece: İngilizce Ölçü Terimleri</h3>
                ${table(["English Unit", "Türkçe Karşılığı", "Tarifteki Örnek Kullanım"], [
                  ["1 pinch", "1 tutam", "1 pinch salt and black pepper (1 tutam tuz ve karabiber)"],
                  ["1 tablespoon (tbsp)", "1 yemek kaşığı", "1 tablespoon butter (1 yemek kaşığı tereyağı)"],
                  ["2 pieces (eggs)", "2 adet (yumurta)", "Crack 2 eggs into a bowl (2 adet yumurta kırın)"],
                  ["3 tablespoons", "3 yemek kaşığı", "3 tablespoons grated cheese (3 yemek kaşığı rendelenmiş peynir)"]
                ])}
              </div>
            </div>
          </div>
        </section>

        <section id="dil-kurallari">
          ${omletGrammarTabs()}
        </section>

        <section id="alistirma">
          <div class="exercise">
            <p class="eyebrow eyebrow-lg">PRACTICE &amp; QUIZ <span class="tr-highlight">(KAZANIM KONTROLÜ VE ALIŞTIRMALAR)</span></p>
            <h2>8. Sınıf İngilizce Omlet Tarifi Alıştırma ve Quizi</h2>
            <p class="section-intro">Öğrendiğiniz omlet hazırlama eylemlerini, mutfak terimlerini ve emir cümlelerini bu interaktif test ile pekiştirin.</p>
            
            <div class="quiz-grid">
              <div class="quiz-card" data-q="1">
                <span class="quiz-q-num">Soru 1</span>
                <p class="quiz-q-title">Which English verb means "yumurtayı kırmak" when starting an omelette?</p>
                <p class="quiz-q-tr"><span class="tr-highlight">(Omlet yapımına başlarken "yumurtayı kırmak" anlamına gelen İngilizce fiil hangisidir?)</span></p>
                <ul class="quiz-options">
                  <li class="quiz-option" data-correct="true">A) Crack</li>
                  <li class="quiz-option">B) Boil</li>
                  <li class="quiz-option">C) Chop</li>
                  <li class="quiz-option">D) Peel</li>
                </ul>
              </div>

              <div class="quiz-card" data-q="2">
                <span class="quiz-q-num">Soru 2</span>
                <p class="quiz-q-title">Which action describes folding the omelette in half in the pan?</p>
                <p class="quiz-q-tr"><span class="tr-highlight">(Tavada omleti ikiye katlama eylemini hangi İngilizce fiil ifade eder?)</span></p>
                <ul class="quiz-options">
                  <li class="quiz-option">A) Whisk</li>
                  <li class="quiz-option">B) Bake</li>
                  <li class="quiz-option" data-correct="true">C) Fold</li>
                  <li class="quiz-option">D) Sift</li>
                </ul>
              </div>

              <div class="quiz-card" data-q="3">
                <span class="quiz-q-num">Soru 3</span>
                <p class="quiz-q-title">What is the Turkish meaning of "Beat the eggs with salt and pepper"?</p>
                <p class="quiz-q-tr"><span class="tr-highlight">("Beat the eggs with salt and pepper" cümlesinin doğru Türkçe karşılığı nedir?)</span></p>
                <ul class="quiz-options">
                  <li class="quiz-option">A) Yumurtaları tavada yakın</li>
                  <li class="quiz-option" data-correct="true">B) Yumurtaları tuz ve karabiberle çırpın</li>
                  <li class="quiz-option">C) Yumurtaları suda haşlayın</li>
                  <li class="quiz-option">D) Yumurtaları buzdolabında bekletin</li>
                </ul>
              </div>

              <div class="quiz-card" data-q="4">
                <span class="quiz-q-num">Soru 4</span>
                <p class="quiz-q-title">Which sentence is in the correct imperative form for cooking an omelette?</p>
                <p class="quiz-q-tr"><span class="tr-highlight">(Omlet pişirme adımları için doğru emir kipi biçimindeki cümle hangisidir?)</span></p>
                <ul class="quiz-options">
                  <li class="quiz-option">A) You must pour eggs into the pan.</li>
                  <li class="quiz-option" data-correct="true">B) Pour the egg mixture into the pan.</li>
                  <li class="quiz-option">C) Pouring eggs is a quick step.</li>
                  <li class="quiz-option">D) The eggs will be poured gently.</li>
                </ul>
              </div>
            </div>

            <div id="quiz-summary-box"></div>

            <details class="answer-key">
              <summary>Cevap Anahtarını Göster</summary>
              <div class="key-content">
                <ol>
                  <li><strong>Soru 1: A) Crack</strong> — <em>Yumurtanın kabuğunu kırarak kaseye aktarma eylemi "crack" fiiliyle anlatılır.</em></li>
                  <li><strong>Soru 2: C) Fold</strong> — <em>Omleti spatulayla ikiye katlama mutfak eylemi "fold" fiilidir.</em></li>
                  <li><strong>Soru 3: B) Yumurtaları tuz ve karabiberle çırpın</strong> — <em>"Beat" çırpmak, "with salt and pepper" tuz ve karabiberle anlamına gelir.</em></li>
                  <li><strong>Soru 4: B) Pour the egg mixture into the pan.</strong> — <em>Tarif talimatları doğrudan yalın fiille (Pour) başlayan emir cümleleriyle yazılır.</em></li>
                </ol>
              </div>
            </details>
          </div>
        </section>

        ${getMidPageCTAHTML()}
        ${getRelatedRecipesHTML("omlet")}
      </div>
    </div>
  </article>`;

  initQuizInteractivity(root, "Omlet", renderOmletPage);
  initVariantSubnavScroll(root);
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
      metaTime: "30 mins (30 dakika)",
      metaServings: "4 servings (4 kişilik)",
      metaCount: "5 ingredients (5 malzeme)"
    },
    {
      block: pizzaData.contentBlocks.find(b => b.id === "ingilizce-margarita-pizza-tarifi"),
      ingBlock: pizzaData.contentBlocks.find(b => b.id === "margarita-pizza-malzemeleri"),
      stepBlock: pizzaData.contentBlocks.find(b => b.id === "margarita-pizza-adimlari"),
      img: "/blog/ingilizce-tarifler/images/pizza-margherita.webp",
      titleEn: "Margherita Pizza Recipe",
      titleTr: "Margarita Pizza Tarifi",
      metaTime: "22 mins (22 dakika)",
      metaServings: "2-3 servings (2-3 kişilik)",
      metaCount: "4 ingredients (4 malzeme)"
    },
    {
      block: pizzaData.contentBlocks.find(b => b.id === "ingilizce-karisik-pizza-tarifi"),
      ingBlock: pizzaData.contentBlocks.find(b => b.id === "karisik-pizza-malzemeleri"),
      stepBlock: pizzaData.contentBlocks.find(b => b.id === "karisik-pizza-adimlari"),
      img: "/blog/ingilizce-tarifler/images/pizza-supreme.webp",
      titleEn: "Supreme Pizza Recipe",
      titleTr: "Karışık Pizza Tarifi",
      metaTime: "30 mins (30 dakika)",
      metaServings: "4 servings (4 kişilik)",
      metaCount: "6 ingredients (6 malzeme)"
    },
    {
      block: pizzaData.contentBlocks.find(b => b.id === "ingilizce-tavada-pizza-tarifi"),
      ingBlock: pizzaData.contentBlocks.find(b => b.id === "tavada-pizza-malzemeleri"),
      stepBlock: pizzaData.contentBlocks.find(b => b.id === "tavada-pizza-adimlari"),
      img: "/blog/ingilizce-tarifler/images/pizza-pan.webp",
      titleEn: "Pan Pizza Recipe",
      titleTr: "Tavada Pizza Tarifi",
      metaTime: "22 mins (22 dakika)",
      metaServings: "2 servings (2 kişilik)",
      metaCount: "5 ingredients (5 malzeme)"
    }
  ];

  const fixedStepBlock = pizzaData.contentBlocks.find(b => b.id === "homemade-pizza-adim-adim-nasil-yapilir");
  const grammarBlock = pizzaData.contentBlocks.find(b => b.id === "ingilizce-pizza-tarifi-dil-kurallari");
  const imperativeBlock = pizzaData.contentBlocks.find(b => b.id === "pizza-emir-kipi");
  const seqBlock = pizzaData.contentBlocks.find(b => b.id === "baglaclar-ve-sira-zarflari");
  const overviewTbl = pizzaData.page.overviewVariationsTable;
  const bQuiz = pizzaData.contentBlocks.find(b => b.id === "8-sinif-ingilizce-pizza-tarifi");

  root.innerHTML = `<article class="recipe-guide">
    <div class="reading-progress" aria-hidden="true"><span></span></div>
    <header class="hero">
      <div class="hero-copy">
        <p class="eyebrow">${formatBilingualText("RECIPES & COOKING GUIDE (İNGİLİZCE YEMEK TARİFLERİ)")}</p>
        <h1>${formatBilingualText("İngilizce Pizza Tarifi (Pizza Yapılışı İngilizce)")}</h1>
        <aside class="course-banner" aria-label="İngilizce kursu">
          <div class="course-banner-text">
            <small class="cta-eyebrow">KONUŞARAK ÖĞREN İNGİLİZCE KURSU</small>
            <strong class="cta-heading">İngilizceyi tarif ezberleyerek değil, konuşarak öğrenin.</strong>
          </div>
          <button class="cta-btn cta-btn-orange" onclick="window.location.href='https://student.konusarakogren.com/auth/register'">Ücretsiz tanışma dersi <span class="arrow">→</span></button>
        </aside>
        <p class="lede"><strong>${pizzaData.page.introEnglish}</strong> <span class="tr-highlight">(${pizzaData.page.introTurkish})</span></p>
        <address class="article-meta" rel="author"><span class="author-mark" aria-hidden="true">KO</span><span><strong>Konuşarak Öğren Editör Ekibi</strong><small>İngilizce seviyesi: A1–A2 · Yayınlanma: <time datetime="2026-09-06">6 Eylül 2026</time></small></span></address>
      </div>
      <figure class="hero-visual">
        <img src="/blog/ingilizce-tarifler/images/pizza-hero.webp" alt="Taze fırınlanmış ev yapımı İtalyan pizzası" loading="eager" fetchpriority="high">
        <figcaption><strong>Homemade Italian Pizza Recipe</strong><span>Fırından yeni çıkmış çıtır kenarlı otantik ev yapımı pizza.</span></figcaption>
      </figure>
      ${buildFactsCardHTML({
        caption: "İngilizce Pizza Tarifi Özeti",
        prep: {
          val: "20 min",
          en: "Preparation Time: Kneading and resting pizza dough takes 20 minutes.",
          tr: "Hazırlık Süresi: Pizza hamurunu yoğurmak ve hazırlamak 20 dakika sürer."
        },
        cook: {
          val: "15 min",
          en: "Baking Time: Pizzas bake in 15 minutes in a very hot oven.",
          tr: "Pişirme Süresi: Pizza fırında yaklaşık 15 dakikada pişirilir."
        },
        servings: {
          val: "4 servings",
          en: "Servings: Yields 4 satisfying homemade pizza portions.",
          tr: "Porsiyon: Bu tarif 4 kişilik doyurucu porsiyon sunar."
        },
        level: {
          val: "A1–A2",
          en: "English Level: Basic kitchen imperatives and baking terms (A1–A2).",
          tr: "İngilizce Seviyesi: Temel mutfak emir kipi ve fırıncılık terimleri (A1–A2)."
        }
      })}
    </header>

    <section class="hero-overview-table" id="definition-variations" style="max-width: 860px; margin: 2rem auto;">
      <p class="eyebrow eyebrow-lg">${formatBilingualText("DEFINITION & VARIATIONS (TANIM VE ÇEŞİTLER KARŞILAŞTIRMASI)")}</p>
      <h2 class="definition-heading">${formatBilingualText("English Pizza Variations, Ingredients and Steps (İngilizce Pizza Çeşitleri, Malzemeleri ve Temel Adımları)")}</h2>
      <p class="section-intro"><strong>İngilizce ve Türkçe Pizza Çeşitleri Karşılaştırması</strong>: ${formatBilingualText(overviewTbl?.intro || "")}</p>
      ${overviewTbl ? table(overviewTbl.headers, overviewTbl.rows, overviewTbl.caption) : ""}
    </section>

    <div class="page-grid">
      <nav class="toc" aria-label="İçindekiler">
        <a href="#kavramlar" data-scroll-target="kavramlar">Terms (Kavramlar)</a>
        <a href="#tarifler" data-scroll-target="tarifler">Variations (Tarifler)</a>
        <a href="#sade-pizza" data-scroll-target="sade-pizza">7 Steps (7 Adım)</a>
        <a href="#malzemeler-ve-ekipman" data-scroll-target="malzemeler-ve-ekipman">Ingredients (Malzemeler)</a>
        <a href="#besin-degerleri" data-scroll-target="besin-degerleri">Nutrition (Besin Değerleri)</a>
        <a href="#farklar" data-scroll-target="farklar">Styles (Hamur Stilleri)</a>
        <a href="#olculer" data-scroll-target="olculer">Units (Ölçüler)</a>
        <a href="#dil-kurallari" data-scroll-target="dil-kurallari">Grammar (Dil Kuralları)</a>
        <a href="#alistirma" data-scroll-target="alistirma">Quiz (Alıştırma)</a>
      </nav>

      <div class="content">
        <!-- 1. TEMEL KAVRAMLAR -->
        <section id="kavramlar">
          <p class="eyebrow">${formatBilingualText("CORE CONCEPTS & VOCABULARY (TEMEL KAVRAMLAR VE ADLANDIRMALAR)")}</p>
          <h2>${formatBilingualText(pizzaData.contentBlocks[0].heading)}</h2>
          <p class="section-intro">${pizzaData.contentBlocks[0].introEnglish} <span class="tr-highlight">(${pizzaData.contentBlocks[0].introTurkish})</span></p>

          ${buildAppBannerHTML("Pizza")}
          
          <h3 style="margin-top:2rem;">${formatBilingualText(pizzaData.contentBlocks[1].heading)}</h3>
          <p class="section-intro">${pizzaData.contentBlocks[1].introEnglish} <span class="tr-highlight">(${pizzaData.contentBlocks[1].introTurkish})</span></p>
          ${table(pizzaData.contentBlocks[1].table.headers, pizzaData.contentBlocks[1].table.rows, "Temel Pizza Terimleri")}

          <h3 style="margin-top:2.5rem;">${formatBilingualText(pizzaData.contentBlocks[2].heading)}</h3>
          <p class="section-intro">${pizzaData.contentBlocks[2].introEnglish} <span class="tr-highlight">(${pizzaData.contentBlocks[2].introTurkish})</span></p>
          ${table(pizzaData.contentBlocks[2].table.headers, pizzaData.contentBlocks[2].table.rows, "Pizza Tarif Yazımında Kullanılan Fiiller")}
        </section>

        <!-- 2. 4 PİZZA ÇEŞİDİ -->
        <div id="tarifler" class="recipe-chapters">
          <div class="chapter-intro">
            <p class="eyebrow eyebrow-lg">${formatBilingualText("4 DISTINCT PIZZA VARIATIONS (4 FARKLI PİZZA ÇEŞİDİ)")}</p>
            <p class="section-intro">Ev yapımı pizza hamuru, klasik margarita, karışık ve tavada pizza tarifleri İngilizce malzemeleri, görsel kartları ve adım adım pişirme yönergeleriyle aşağıda verilmiştir. Başlıklara tıklayarak detayları açabilirsiniz.</p>
          </div>

          <nav class="variant-subnav" aria-label="Pizza Çeşitleri Hızlı Erişim">
            <a href="#variant-1" class="variant-nav-btn active" title="Homemade Pizza Dough (Ev Yapımı Pizza Hamuru)">
              <span>1. Pizza Dough</span>
              <div class="variant-tooltip">
                <span class="tooltip-en">1. Homemade Pizza Dough</span>
                <span class="tooltip-tr">(Ev Yapımı Pizza Hamuru)</span>
              </div>
            </a>
            <a href="#variant-2" class="variant-nav-btn" title="Margherita Pizza (Margarita Pizza)">
              <span>2. Margherita</span>
              <div class="variant-tooltip">
                <span class="tooltip-en">2. Margherita Pizza</span>
                <span class="tooltip-tr">(Margarita Pizza)</span>
              </div>
            </a>
            <a href="#variant-3" class="variant-nav-btn" title="Supreme Pizza (Karışık Pizza)">
              <span>3. Supreme Pizza</span>
              <div class="variant-tooltip">
                <span class="tooltip-en">3. Supreme Pizza</span>
                <span class="tooltip-tr">(Karışık Pizza)</span>
              </div>
            </a>
            <a href="#variant-4" class="variant-nav-btn" title="Pan Pizza (Tavada Pizza)">
              <span>4. Pan Pizza</span>
              <div class="variant-tooltip">
                <span class="tooltip-en">4. Pan Pizza</span>
                <span class="tooltip-tr">(Tavada Pizza)</span>
              </div>
            </a>
          </nav>

          ${pizzaChapters.map((c, i) => `
            <section class="recipe-chapter" id="variant-${i + 1}">
              <div class="chapter-head">
                <span class="variant-number">${String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h2>${c.titleEn} <span class="tr-highlight">(${c.titleTr})</span></h2>
                  <p><strong>${c.block.introEnglish}</strong> <span class="tr-highlight">(${c.block.introTurkish})</span></p>
                  
                  ${buildChapterMetaHTML({
                    time: {
                      val: c.metaTime,
                      en: `Baking & Prep Time: ${c.titleEn.replace(" Recipe", "")} is prepared in ${c.metaTime}.`,
                      tr: `Pişirme ve Hazırlık: ${c.titleTr.replace(" Tarifi", "")} ${c.metaTime} içinde hazırlanır ve pişirilir.`
                    },
                    servings: {
                      val: c.metaServings,
                      en: `Servings & Yield: This recipe yields ${c.metaServings} delicious portions.`,
                      tr: `Porsiyon Miktarı: Bu tarif yaklaşık ${c.metaServings} porsiyon sunar.`
                    },
                    count: {
                      val: c.metaCount,
                      en: `Ingredients Count: Prepared with only ${c.metaCount} for authentic texture.`,
                      tr: `Malzeme Sayısı: Yalnızca ${c.metaCount} ile kolay ve lezzetli hazırlanır.`
                    }
                  })}
                </div>
              </div>
              <figure><img src="${c.img}" alt="${c.titleEn}" loading="lazy"><figcaption><strong>${c.titleEn}</strong><span>${c.titleTr}</span></figcaption></figure>
              <div class="chapter-panels">
                <details class="learning-panel" ${i === 0 ? "open" : ""}><summary><h3>What Are ${c.titleEn.replace(" Recipe", "")} Ingredients in English? <span class="tr-highlight">(${c.ingBlock.heading.replace("What Are ", "").replace(" in English?", "")})</span></h3><span>Malzeme listesi &amp; tablosu</span></summary>
                  <div class="panel-body">
                    <p class="section-intro">${c.ingBlock.introEnglish} <span class="tr-highlight">(${c.ingBlock.introTurkish})</span></p>
                    ${table(c.ingBlock.table.headers, c.ingBlock.table.rows, `${c.titleTr} Malzeme Tablosu`)}
                    ${buildIngredientCardsHTML((c.ingBlock.cards || []).map(card => ({
                      icon: card.icon || "🍕",
                      quantity: card.quantity || "",
                      en: card.name || card.en,
                      tr: card.trName || card.tr,
                      sentenceEn: card.enDesc || card.sentenceEn,
                      sentenceTr: card.trDesc || card.sentenceTr
                    })))}
                  </div>
                </details>
                <details class="learning-panel"><summary><h3>How to Make ${c.titleEn.replace(" Recipe", "")} Step by Step in English? <span class="tr-highlight">(${c.stepBlock.heading.replace("How to Make ", "").replace(" in English?", "")})</span></h3><span>Adım adım yapılışı göster</span></summary>
                  <div class="panel-body">
                    <p class="section-intro">${c.stepBlock.introEnglish} <span class="tr-highlight">(${c.stepBlock.introTurkish})</span></p>
                    <ol class="compact-steps">
                      ${c.stepBlock.steps.map(s => `
                        <li>
                          <span class="step-num-badge">${s.num || s.order}</span>
                          <div class="step-body">
                            <p class="en-text"><strong>${s.enText || s.en}</strong></p>
                            <p class="tr-text"><span class="tr-highlight">${s.trText || s.tr}</span></p>
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

        <!-- 3. 7 ADIMDA EV YAPIMI PİZZA -->
        <section id="sade-pizza">
          <p class="eyebrow">${formatBilingualText("7-STEP HOMEMADE PIZZA GUIDE (7 ADIMDA EV YAPIMI PİZZA REHBERİ)")}</p>
          <h2>${formatBilingualText(fixedStepBlock.heading)}</h2>
          <p class="section-intro">${fixedStepBlock.introEnglish} <span class="tr-highlight">(${fixedStepBlock.introTurkish})</span></p>
          ${buildStepsMetaHTML({
            steps: { val: "7 steps (7 adım)", en: "Follow the 7 steps from yeast activation to crisp crust baking.", tr: "Maya aktifleştirmeden fırında nar gibi kızartmaya kadar 7 adımı takip edin." },
            time: { val: "95 mins (95 dakika)", en: "Includes 60 mins dough proofing and 15 mins oven baking.", tr: "60 dakikalık mayalanma ve 15 dakikalık fırınlama süresini içerir." },
            level: { val: "Level A2–B1 (A2–B1 seviye)", en: "Focuses on kneading, proofing, rolling, and baking verbs.", tr: "Yoğurma, mayalama, merdaneyle açma ve fırınlama fiillerine odaklanır." }
          })}
          ${buildStepAccordionHTML(fixedStepBlock.steps.map((s, idx) => {
            const titleClean = s.title.replace(/^\d+\.\s*/, '');
            const m = titleClean.match(/^(.*?)\s*\((.*?)\)$/);
            const titleEn = m ? m[1].trim() : titleClean;
            const titleTr = m ? m[2].trim() : ('Adım ' + (idx + 1));
            const words = s.enText.split(' ');
            const actionEn = words[0];
            const metaList = [
              { ing: "1 packet yeast, 1 cup warm water (Kuru maya, ılık su)", eq: "Measuring cup (Ölçü kabı)", time: "5 mins (5 dakika)" },
              { ing: "3 cups flour, olive oil, salt (Un, zeytinyağı, tuz)", eq: "Floured pastry counter (Unlu tezgah)", time: "10 mins (10 dakika)" },
              { ing: "Kneaded dough ball (Yoğrulmuş hamur)", eq: "Oiled bowl & towel (Yağlı kase ve bez)", time: "60 mins (60 dakika)" },
              { ing: "Risen pizza dough (Mayalanmış hamur)", eq: "Rolling pin (Merdane)", time: "5 mins (5 dakika)" },
              { ing: "1/2 cup tomato sauce (Domates sosu)", eq: "Ladle or spoon (Kepçe veya kaşık)", time: "2 mins (2 dakika)" },
              { ing: "200 g mozzarella, toppings (Peynir ve malzemeler)", eq: "Baking tray or Peel (Fırın tepsisi veya kürek)", time: "3 mins (3 dakika)" },
              { ing: "Prepared pizza (Hazırlanan pizza)", eq: "Preheated oven at 220°C (220°C fırın)", time: "15 mins (15 dakika)" }
            ];
            const meta = metaList[idx] || {};
            return {
              number: idx + 1,
              titleEn: titleEn,
              titleTr: titleTr,
              sentenceEn: s.enText,
              sentenceTr: s.trText,
              actionEn: actionEn,
              actionTr: 'Mutfak Eylemi',
              img: `/blog/ingilizce-tarifler/images/steps/pizza-step-${idx + 1}.webp`,
              ingredient: meta.ing,
              equipment: meta.eq,
              time: meta.time
            };
          }))}
        </section>

        <!-- 4. MALZEMELER VE EKİPMANLAR (TABS) -->
        <section id="malzemeler-ve-ekipman">
          <p class="eyebrow">${formatBilingualText("INGREDIENTS & EQUIPMENT (MALZEME VE EKİPMAN LİSTESİ)")}</p>
          <h2>${formatBilingualText(pizzaData.contentBlocks[16].heading)}</h2>
          <p class="section-intro">Ev yapımı pizza hazırlığında ihtiyaç duyacağınız temel malzemeleri ve fırıncılık araçlarını aşağıdaki sekmelerden inceleyebilirsiniz.</p>

          <div class="grammar-tabs section-tabs">
            <div class="tab-list" role="tablist" aria-label="Malzemeler ve Ekipmanlar">
              <button type="button" role="tab" data-tab="pizza-tab-ing" id="tab-btn-pizza-ing" aria-controls="pizza-panel-ing" aria-selected="true" class="active">
                <span class="tab-idx">01</span><span class="tab-title">Ingredients (Malzemeler)</span>
              </button>
              <button type="button" role="tab" data-tab="pizza-tab-equip" id="tab-btn-pizza-equip" aria-controls="pizza-panel-equip" aria-selected="false">
                <span class="tab-idx">02</span><span class="tab-title">Equipment (Ekipmanlar)</span>
              </button>
            </div>

            <div class="tab-panel active" id="pizza-panel-ing" data-panel="pizza-tab-ing" role="tabpanel">
              <h3 style="margin-top:0.5rem;">${formatBilingualText(pizzaData.contentBlocks[16].heading)}</h3>
              <p class="section-intro">${pizzaData.contentBlocks[16].introEnglish} <span class="tr-highlight">(${pizzaData.contentBlocks[16].introTurkish})</span></p>
              ${table(pizzaData.contentBlocks[16].table.headers, pizzaData.contentBlocks[16].table.rows, "Pizza Malzemeleri Tablosu")}
            </div>

            <div class="tab-panel" id="pizza-panel-equip" data-panel="pizza-tab-equip" role="tabpanel" hidden>
              <h3 style="margin-top:0.5rem;">${formatBilingualText(pizzaData.contentBlocks[17].heading)}</h3>
              <p class="section-intro">${pizzaData.contentBlocks[17].introEnglish} <span class="tr-highlight">(${pizzaData.contentBlocks[17].introTurkish})</span></p>
              ${table(pizzaData.contentBlocks[17].table.headers, pizzaData.contentBlocks[17].table.rows, "Pizza Pişirme Ekipmanları Tablosu")}
            </div>
          </div>
        </section>

        <!-- 5. BESİN DEĞERLERİ & KALORİ (TABS) -->
        <section id="besin-degerleri">
          <p class="eyebrow">${formatBilingualText("CALORIES & NUTRITION (KALORİ VE BESİN ANALİZİ)")}</p>
          <h2>${formatBilingualText(pizzaData.contentBlocks[18].heading)}</h2>
          <p class="section-intro">Ev yapımı pizzanın dilim başına kalori ve besin ögeleri analizini aşağıdaki iki sekmeden öğrenebilirsiniz.</p>

          <div class="grammar-tabs section-tabs">
            <div class="tab-list" role="tablist" aria-label="Besin Değerleri ve Kalori">
              <button type="button" role="tab" data-tab="pizza-tab-cal" id="tab-btn-pizza-cal" aria-controls="pizza-panel-cal" aria-selected="true" class="active">
                <span class="tab-idx">01</span><span class="tab-title">Calories (Kalori)</span>
              </button>
              <button type="button" role="tab" data-tab="pizza-tab-nut" id="tab-btn-pizza-nut" aria-controls="pizza-panel-nut" aria-selected="false">
                <span class="tab-idx">02</span><span class="tab-title">Nutrition Facts (Besin Değerleri)</span>
              </button>
            </div>

            <div class="tab-panel active" id="pizza-panel-cal" data-panel="pizza-tab-cal" role="tabpanel">
              <h3 style="margin-top:0.5rem;">${formatBilingualText(pizzaData.contentBlocks[18].heading)}</h3>
              <p class="section-intro">${pizzaData.contentBlocks[18].introEnglish} <span class="tr-highlight">(${pizzaData.contentBlocks[18].introTurkish})</span></p>
              ${table(pizzaData.contentBlocks[18].table.headers, pizzaData.contentBlocks[18].table.rows, "Pizza Kalori Değerleri Tablosu")}
            </div>

            <div class="tab-panel" id="pizza-panel-nut" data-panel="pizza-tab-nut" role="tabpanel" hidden>
              <h3 style="margin-top:0.5rem;">${formatBilingualText(pizzaData.contentBlocks[19].heading)}</h3>
              <p class="section-intro">${pizzaData.contentBlocks[19].introEnglish} <span class="tr-highlight">(${pizzaData.contentBlocks[19].introTurkish})</span></p>
              ${table(pizzaData.contentBlocks[19].table.headers, pizzaData.contentBlocks[19].table.rows, "Pizza Besin Değerleri Tablosu")}
            </div>
          </div>
        </section>

        <!-- 6. HAMUR STİLLERİ & PİZZA TARİHİ (TABS) -->
        <section id="farklar">
          <p class="eyebrow">${formatBilingualText("DOUGH STYLES & PIZZA HISTORY (HAMUR STİLLERİ VE PİZZA TARİHİ)")}</p>
          <h2>${formatBilingualText(pizzaData.contentBlocks[20].heading)}</h2>
          <p class="section-intro">Dünya mutfağındaki meşhur pizza hamuru stillerini ve pizzanın köken tarihçesini aşağıdaki sekmelerden keşfedebilirsiniz.</p>

          <div class="grammar-tabs section-tabs">
            <div class="tab-list" role="tablist" aria-label="Hamur Stilleri ve Tarihçe">
              <button type="button" role="tab" data-tab="pizza-tab-styles" id="tab-btn-pizza-styles" aria-controls="pizza-panel-styles" aria-selected="true" class="active">
                <span class="tab-idx">01</span><span class="tab-title">Dough Styles (Hamur Stilleri)</span>
              </button>
              <button type="button" role="tab" data-tab="pizza-tab-history" id="tab-btn-pizza-history" aria-controls="pizza-panel-history" aria-selected="false">
                <span class="tab-idx">02</span><span class="tab-title">Pizza History (Pizza Tarihi)</span>
              </button>
            </div>

            <div class="tab-panel active" id="pizza-panel-styles" data-panel="pizza-tab-styles" role="tabpanel">
              <h3 style="margin-top:0.5rem;">${formatBilingualText(pizzaData.contentBlocks[20].heading)}</h3>
              <p class="section-intro">${pizzaData.contentBlocks[20].introEnglish} <span class="tr-highlight">(${pizzaData.contentBlocks[20].introTurkish})</span></p>
              ${table(pizzaData.contentBlocks[20].table.headers, pizzaData.contentBlocks[20].table.rows, "Pizza Hamuru Stilleri Tablosu")}
            </div>

            <div class="tab-panel" id="pizza-panel-history" data-panel="pizza-tab-history" role="tabpanel" hidden>
              <h3 style="margin-top:0.5rem;">${formatBilingualText(pizzaData.contentBlocks[21].heading)}</h3>
              <p class="section-intro">${pizzaData.contentBlocks[21].introEnglish} <span class="tr-highlight">(${pizzaData.contentBlocks[21].introTurkish})</span></p>
              ${table(pizzaData.contentBlocks[21].table.headers, pizzaData.contentBlocks[21].table.rows, "Pizza Tarihçesi ve Kökeni Tablosu")}
            </div>
          </div>
        </section>

        <!-- 7. ÖLÇÜLER VE SÖZLÜK (TABS) -->
        <section id="olculer">
          <p class="eyebrow">${formatBilingualText("MEASUREMENT UNITS & VOCABULARY (ÖLÇÜ BİRİMLERİ VE KELİMELER)")}</p>
          <h2>${formatBilingualText(pizzaData.contentBlocks[22].heading)}</h2>
          <p class="section-intro">İngilizce pizza tariflerinde geçen ölçü birimlerini, mutfak kelimelerini ve metrik çevrimleri aşağıdaki 4 sekmeden inceleyebilirsiniz.</p>

          <div class="grammar-tabs section-tabs">
            <div class="tab-list" role="tablist" aria-label="Ölçü Birimleri ve Kelimeler">
              <button type="button" role="tab" data-tab="pizza-tab-u1" id="tab-btn-pizza-u1" aria-controls="pizza-panel-u1" aria-selected="true" class="active">
                <span class="tab-idx">01</span><span class="tab-title">Units (Ölçü Birimleri)</span>
              </button>
              <button type="button" role="tab" data-tab="pizza-tab-u2" id="tab-btn-pizza-u2" aria-controls="pizza-panel-u2" aria-selected="false">
                <span class="tab-idx">02</span><span class="tab-title">Kitchen Words (Mutfak Kelimeleri)</span>
              </button>
              <button type="button" role="tab" data-tab="pizza-tab-u3" id="tab-btn-pizza-u3" aria-controls="pizza-panel-u3" aria-selected="false">
                <span class="tab-idx">03</span><span class="tab-title">Spoon &amp; Cup (Kaşık ve Bardak)</span>
              </button>
              <button type="button" role="tab" data-tab="pizza-tab-u4" id="tab-btn-pizza-u4" aria-controls="pizza-panel-u4" aria-selected="false">
                <span class="tab-idx">04</span><span class="tab-title">Gram &amp; Liter (Gram ve Litre)</span>
              </button>
            </div>

            <div class="tab-panel active" id="pizza-panel-u1" data-panel="pizza-tab-u1" role="tabpanel">
              <h3 style="margin-top:0.5rem;">${formatBilingualText(pizzaData.contentBlocks[22].heading)}</h3>
              <p class="section-intro">${pizzaData.contentBlocks[22].introEnglish} <span class="tr-highlight">(${pizzaData.contentBlocks[22].introTurkish})</span></p>
              ${table(pizzaData.contentBlocks[22].table.headers, pizzaData.contentBlocks[22].table.rows, "İngilizce Pizza Ölçü Birimleri")}
            </div>

            <div class="tab-panel" id="pizza-panel-u2" data-panel="pizza-tab-u2" role="tabpanel" hidden>
              <h3 style="margin-top:0.5rem;">${formatBilingualText(pizzaData.contentBlocks[23].heading)}</h3>
              <p class="section-intro">${pizzaData.contentBlocks[23].introEnglish} <span class="tr-highlight">(${pizzaData.contentBlocks[23].introTurkish})</span></p>
              ${table(pizzaData.contentBlocks[23].table.headers, pizzaData.contentBlocks[23].table.rows, "Temel Mutfak Kelimeleri")}
            </div>

            <div class="tab-panel" id="pizza-panel-u3" data-panel="pizza-tab-u3" role="tabpanel" hidden>
              <h3 style="margin-top:0.5rem;">${formatBilingualText(pizzaData.contentBlocks[24].heading)}</h3>
              <p class="section-intro">${pizzaData.contentBlocks[24].introEnglish} <span class="tr-highlight">(${pizzaData.contentBlocks[24].introTurkish})</span></p>
              ${table(pizzaData.contentBlocks[24].table.headers, pizzaData.contentBlocks[24].table.rows, "Kaşık ve Bardak Ölçüleri")}
            </div>

            <div class="tab-panel" id="pizza-panel-u4" data-panel="pizza-tab-u4" role="tabpanel" hidden>
              <h3 style="margin-top:0.5rem;">${formatBilingualText(pizzaData.contentBlocks[25].heading)}</h3>
              <p class="section-intro">${pizzaData.contentBlocks[25].introEnglish} <span class="tr-highlight">(${pizzaData.contentBlocks[25].introTurkish})</span></p>
              ${table(pizzaData.contentBlocks[25].table.headers, pizzaData.contentBlocks[25].table.rows, "Gram ve Litre Kullanım Tablosu")}
            </div>
          </div>
        </section>

        <!-- 8. DİL KURALLARI (TABS) -->
        <section id="dil-kurallari">
          <p class="eyebrow">${formatBilingualText("RECIPE GRAMMAR & USAGE RULES (TARİF DİL BİLGİSİ VE ANLATIM KURALLARI)")}</p>
          <h2>${formatBilingualText(pizzaData.contentBlocks[26].heading)}</h2>
          <p class="section-intro">${pizzaData.contentBlocks[26].introEnglish} <span class="tr-highlight">(${pizzaData.contentBlocks[26].introTurkish})</span></p>

          <div class="grammar-tabs section-tabs">
            <div class="tab-list" role="tablist" aria-label="Tarif Dil Kuralları">
              <button type="button" role="tab" data-tab="pizza-tab-imp" id="tab-btn-pizza-imp" aria-controls="pizza-panel-imp" aria-selected="true" class="active">
                <span class="tab-idx">01</span><span class="tab-title">Imperatives (Emir Kipi)</span>
              </button>
              <button type="button" role="tab" data-tab="pizza-tab-seq" id="tab-btn-pizza-seq" aria-controls="pizza-panel-seq" aria-selected="false">
                <span class="tab-idx">02</span><span class="tab-title">Sequence Adverbs (Sıra Zarfları)</span>
              </button>
              <button type="button" role="tab" data-tab="pizza-tab-rules" id="tab-btn-pizza-rules" aria-controls="pizza-panel-rules" aria-selected="false">
                <span class="tab-idx">03</span><span class="tab-title">Grammar Rules (Genel Kurallar)</span>
              </button>
            </div>

            <!-- Tab 1: Imperatives -->
            <div class="tab-panel active" id="pizza-panel-imp" data-panel="pizza-tab-imp" role="tabpanel">
              <h3 style="margin-top:0.5rem;">${formatBilingualText(imperativeBlock.heading)}</h3>
              <p class="section-intro">${imperativeBlock.introEnglish} <span class="tr-highlight">(${imperativeBlock.introTurkish})</span></p>
              ${table(imperativeBlock.table.headers, imperativeBlock.table.rows, "Emir Kipi Kullanım Kuralları")}
              ${imperativeBlock.negativeImperative ? `<aside class="negative-imperative-box" style="margin-top:1.5rem;"><p><strong>English:</strong> ${imperativeBlock.negativeImperative.en}</p><p style="margin-top:6px; color:#c2410c;"><strong>Türkçe:</strong> <span class="tr-highlight">${imperativeBlock.negativeImperative.tr}</span></p></aside>` : ""}
            </div>

            <!-- Tab 2: Sequence Adverbs -->
            <div class="tab-panel" id="pizza-panel-seq" data-panel="pizza-tab-seq" role="tabpanel" hidden>
              <h3 style="margin-top:0.5rem;">${formatBilingualText(seqBlock.heading)}</h3>
              <p class="section-intro">${seqBlock.introEnglish} <span class="tr-highlight">(${seqBlock.introTurkish})</span></p>
              ${table(seqBlock.table.headers, seqBlock.table.rows, "Sıra Zarfları ve Anlamları")}
              ${seqBlock.sequenceParagraph ? `
                <div class="bilingual-paragraph" style="margin-top:1.5rem; background: rgba(248,250,252,0.9); border: 1px solid #cbd5e1; border-radius: 12px; padding: 1.5rem;">
                  <p><strong>English:</strong> ${seqBlock.sequenceParagraph.en}</p>
                  <p style="margin-top:0.75rem; color:#475569;"><strong>Türkçe:</strong> <span class="tr-highlight">${seqBlock.sequenceParagraph.tr}</span></p>
                </div>
              ` : ""}
            </div>

            <!-- Tab 3: Grammar Summary -->
            <div class="tab-panel" id="pizza-panel-rules" data-panel="pizza-tab-rules" role="tabpanel" hidden>
              <h3 style="margin-top:0.5rem;">Core Recipe Grammar Rules <span class="tr-highlight">(4 Temel Tarif Dil Kuralı)</span></h3>
              <p class="section-intro">İngilizce tarif yazımı dört temel dil kuralına dayanır: emir kipi, sıra zarfları, sayılabilir/sayılamayan isimler ve ölçü ifadeleri.</p>
              ${table(grammarBlock.table.headers, grammarBlock.table.rows, "4 Temel Dil Kuralı Özeti")}
            </div>
          </div>
        </section>

        <!-- 9. 8. SINIF ALISTIRMA VE QUIZ -->
        <section id="alistirma" class="exercise">
          <p class="eyebrow" style="color:#93c5fd;">${formatBilingualText("8TH GRADE PRACTICE & QUIZ (8. SINIF QUIZ VE ALIŞTIRMALAR)")}</p>
          <h2 style="color:#ffffff;">8th Grade English Pizza Recipe Practice &amp; Quiz <span class="tr-highlight" style="color:#38bdf8;">(8. Sınıf İngilizce Pizza Tarifi)</span></h2>
          <p class="section-intro" style="color:#cbd5e1;">${bQuiz.introEnglish} <span class="tr-highlight">(${bQuiz.introTurkish})</span></p>

          <div class="quiz-grid" style="display: flex; flex-direction: column; gap: 1.5rem; margin-top: 2rem;">
            ${bQuiz.exercises.map((q, idx) => `
              <div class="quiz-card" data-idx="${idx}" data-correct="${q.answer}" style="background:#ffffff; border:1px solid #e2e8f0; border-radius:14px; padding:1.6rem; text-align:left; color:#0f172a; box-shadow:0 4px 14px rgba(0,0,0,0.06);">
                <span class="quiz-badge" style="background:#0284c7; color:#ffffff; padding:4px 10px; border-radius:6px; font-size:0.85rem; font-weight:700;">Soru ${q.num} · ${q.type === "multiple-choice" ? "Çoktan Seçmeli" : "Boşluk Doldurma"}</span>
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

          <!-- Interactive Quiz Completion Summary Card -->
          <div id="quiz-summary-box" style="display:none;"></div>
        </section>

        <!-- CTA Banner -->
        ${getMidPageCTAHTML()}
        ${getRelatedRecipesHTML("pizza")}
      </div>
    </div>
  </article>`;

  // Initialize interactive features
  initQuizInteractivity(root, "pizza", renderPizzaPage);
  initVariantSubnavScroll(root);
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

  const menemenQuizList = [
    {
      num: 1,
      type: "multiple-choice",
      question: "Which verb means 'to cut into small pieces' when preparing peppers and tomatoes?",
      questionTr: "Biber ve domatesleri doğrarken 'küçük parçalara kesmek' anlamına gelen fiil hangisidir?",
      options: ["A) Boil (Kaynatmak)", "B) Chop (Doğramak)", "C) Bake (Fırında pişirmek)", "D) Peel (Soymak)"],
      answer: "B) Chop (Doğramak)"
    },
    {
      num: 2,
      type: "multiple-choice",
      question: "What should you do to the eggs after cracking them into the simmering tomato sauce?",
      questionTr: "Yumurtaları kaynayan domates sosuna kırdıktan sonra ne yapmalısınız?",
      options: ["A) Stir gently on low heat (Kısık ateşte nazikçe karıştırın)", "B) Freeze immediately", "C) Drain with water", "D) Blend in a food processor"],
      answer: "A) Stir gently on low heat (Kısık ateşte nazikçe karıştırın)"
    },
    {
      num: 3,
      type: "fill-in-the-blank",
      question: "“_____ 4 fresh eggs directly into the simmering pan.”",
      questionTr: "“Kaynayan tavanın içine 4 taze yumurtayı doğrudan _____.”",
      options: ["Crack", "Boil", "Bake"],
      answer: "Crack"
    },
    {
      num: 4,
      type: "fill-in-the-blank",
      question: "“_____ the sliced green peppers in olive oil for 3 minutes.”",
      questionTr: "“Dilimlenmiş yeşil biberleri zeytinyağında 3 dakika _____.”",
      options: ["Saute", "Blend", "Freeze"],
      answer: "Saute"
    }
  ];

  root.innerHTML = `<article class="recipe-guide">
    <div class="reading-progress" aria-hidden="true"><span></span></div>
    <header class="hero">
      <div class="hero-copy">
        <p class="eyebrow">${formatBilingualText("RECIPES & COOKING GUIDE (İNGİLİZCE YEMEK TARİFLERİ)")}</p>
        <h1>${formatBilingualText("İngilizce Menemen Tarifi (Menemen Yapılışı İngilizce)")}</h1>
        <aside class="course-banner" aria-label="İngilizce kursu">
          <div class="course-banner-text">
            <small class="cta-eyebrow">KONUŞARAK ÖĞREN İNGİLİZCE KURSU</small>
            <strong class="cta-heading">İngilizceyi tarif ezberleyerek değil, konuşarak öğrenin.</strong>
          </div>
          <button class="cta-btn cta-btn-orange" onclick="window.location.href='https://student.konusarakogren.com/auth/register'">Ücretsiz tanışma dersi <span class="arrow">→</span></button>
        </aside>
        <p class="lede"><strong>Menemen is a traditional Turkish egg dish made by simmering tomatoes and green peppers in olive oil, then gently stirring in eggs.</strong> <span class="tr-highlight">(Menemen; domates ve yeşil biberin zeytinyağında pişirilip yumurtayla nazikçe karıştırılmasıyla hazırlanan geleneksel bir Türk yumurta yemeğidir.)</span></p>
        <address class="article-meta" rel="author"><span class="author-mark" aria-hidden="true">KO</span><span><strong>Konuşarak Öğren Editör Ekibi</strong><small>İngilizce seviyesi: A1–A2 · Yayınlanma: <time datetime="2026-09-03">3 Eylül 2026</time></small></span></address>
      </div>
      <figure class="hero-visual">
        <img src="/blog/ingilizce-tarifler/images/menemen-hero.webp" alt="Servis tabağında sıcak klasik Menemen" loading="eager" fetchpriority="high">
        <figcaption><strong>Classic Menemen Recipe</strong><span>Taze ekmekle tavada sıcak servis edilen Türk Menemeni.</span></figcaption>
      </figure>
      ${buildFactsCardHTML({
        caption: "İngilizce Menemen Tarifi Özeti",
        prep: {
          val: "5 min",
          en: "Preparation Time: Chopping peppers and tomatoes takes just 5 minutes.",
          tr: "Hazırlık Süresi: Biber ve domatesleri doğramak yalnızca 5 dakika sürer."
        },
        cook: {
          val: "15 min",
          en: "Cooking Time: Simmering tomatoes and gently stirring eggs takes 15 minutes.",
          tr: "Pişirme Süresi: Domatesleri soteleyip yumurtaları pişirmek 15 dakika sürer."
        },
        servings: {
          val: "2 servings",
          en: "Servings: Yields 2 delicious breakfast servings with warm bread.",
          tr: "Porsiyon: Sıcak ekmekle servis edilen 2 kişilik lezzetli kahvaltı porsiyonu sunar."
        },
        level: {
          val: "A1–A2",
          en: "English Level: Basic kitchen verbs and conversational cooking terms (A1–A2).",
          tr: "İngilizce Seviyesi: Temel mutfak fiilleri ve günlük yemek kalıpları (A1–A2)."
        }
      })}
    </header>

    <section class="hero-overview-table" id="definition-variations" style="max-width: 860px; margin: 2rem auto;">
      <p class="eyebrow eyebrow-lg">${formatBilingualText("DEFINITION & VARIATIONS (TANIM VE ÇEŞİTLER KARŞILAŞTIRMASI)")}</p>
      <h2 class="definition-heading">${formatBilingualText("English Menemen Variations, Ingredients and Steps (İngilizce Menemen Çeşitleri, Malzemeleri ve Temel Adımları)")}</h2>
      <p class="section-intro"><strong>İngilizce ve Türkçe Menemen Çeşitleri Karşılaştırması</strong>: ${formatBilingualText(overviewTbl?.intro || "Aşağıdaki tabloda 4 temel menemen çeşidinin İngilizce isimlerini, ana malzemelerini ve temel pişirme adımlarını karşılaştırmalı olarak inceleyebilirsiniz.")}</p>
      ${overviewTbl ? table(overviewTbl.headers, overviewTbl.rows, overviewTbl.caption) : ""}
    </section>

    <div class="page-grid">
      <nav class="toc" aria-label="İçindekiler">
        <a href="#kavramlar" data-scroll-target="kavramlar">Terms (Kavramlar)</a>
        <a href="#tarifler" data-scroll-target="tarifler">Variations (Tarifler)</a>
        <a href="#sade-menemen" data-scroll-target="sade-menemen">6 Steps (6 Adım)</a>
        <a href="#malzemeler-ve-ekipman" data-scroll-target="malzemeler-ve-ekipman">Ingredients (Malzemeler)</a>
        <a href="#besin-degerleri" data-scroll-target="besin-degerleri">Nutrition (Besin Değerleri)</a>
        <a href="#karsilastirma" data-scroll-target="karsilastirma">Comparison (Karşılaştırma)</a>
        <a href="#olculer" data-scroll-target="olculer">Units (Ölçüler)</a>
        <a href="#dil-kurallari" data-scroll-target="dil-kurallari">Grammar (Dil Kuralları)</a>
        <a href="#alistirma" data-scroll-target="alistirma">Quiz (Alıştırma)</a>
      </nav>

      <div class="content">
        <!-- 1. TEMEL KAVRAMLAR -->
        <section id="kavramlar">
          <p class="eyebrow">${formatBilingualText("CORE CONCEPTS & VOCABULARY (TEMEL KAVRAMLAR VE ADLANDIRMALAR)")}</p>
          <h2>${formatBilingualText("Core Terms and Accurate Translations for Menemen (İngilizce Menemen Tarifinde Kullanılan Temel Kavramlar ve Adlandırmalar)")}</h2>
          
          ${buildAppBannerHTML("Menemen")}
          
          <h3 style="margin-top:2rem;">${formatBilingualText("Menemen Terms and Meanings (Menemen Terimleri ve Anlamları)")}</h3>
          <p class="section-intro">Six basic terms help readers understand the recipe structure and cooking technique. <span class="tr-highlight">(Altı temel terim, menemen tarifinin yapısını ve pişirme tekniğini anlamayı kolaylaştırır.)</span></p>
          ${table(["English Term", "Türkçe Karşılığı", "Tanım ve Tarif Bağlantısı"], menemenData.contentBlocks[1].table.rows, "Menemen Temel Terimleri")}

          <h3 style="margin-top:2.5rem;">${formatBilingualText("Introducing Menemen in English: Turkish-Style Scrambled Eggs (Menemen İngilizce Nasıl Tanıtılır?)")}</h3>
          <p class="section-intro">Menemen has no exact one-word English equivalent, so English sources describe it as Turkish-style scrambled eggs. <span class="tr-highlight">(Menemenin İngilizcede tek kelimelik karşılığı olmadığı için kaynaklar domatesli ve biberli Türk usulü çırpılmış yumurta olarak açıklar.)</span></p>
          ${table(["Adlandırma (English Term)", "Kaynak Türü", "Açıklama"], menemenData.contentBlocks[2].table.rows, "İngilizce Menemen Tanıtımları")}

          <h3 style="margin-top:2.5rem;">${formatBilingualText("Verbs Used in English Recipe Writing: Chop, Saute, Stir, Crack (İngilizce Tarif Yazımında Kullanılan Fiiller: Chop, Saute, Stir, Crack)")}</h3>
          <p class="section-intro">Core action verbs describe how to prepare, cook, and combine ingredients. <span class="tr-highlight">(Temel eylem fiilleri, malzemelerin nasıl hazırlanacağını, pişirileceğini ve birleştirileceğini açıklar.)</span></p>
          ${table(["Verb (Fiil)", "Türkçe Karşılığı", "Example Sentence"], menemenData.contentBlocks[3].table.rows, "Menemen Tarif Fiilleri")}
        </section>

        <!-- 2. 4 MENEMEN ÇEŞİDİ -->
        <div id="tarifler" class="recipe-chapters">
          <div class="chapter-intro">
            <p class="eyebrow eyebrow-lg">${formatBilingualText("4 DISTINCT MENEMEN VARIATIONS (4 FARKLI MENEMEN ÇEŞİDİ)")}</p>
            <p class="section-intro">Klasik, soğanlı, peynirli ve sucuklu menemen tarifleri İngilizce malzemeleri, görsel kartları ve adım adım pişirme yönergeleriyle aşağıda verilmiştir. Başlıklara tıklayarak panelleri açabilirsiniz.</p>
          </div>

          <nav class="variant-subnav" aria-label="Menemen Çeşitleri Hızlı Erişim">
            <a href="#variant-1" class="variant-nav-btn active" title="Classic Menemen (Klasik Menemen)">
              <span>1. Classic Menemen</span>
              <div class="variant-tooltip">
                <span class="tooltip-en">1. Classic Menemen</span>
                <span class="tooltip-tr">(Klasik Menemen)</span>
              </div>
            </a>
            <a href="#variant-2" class="variant-nav-btn" title="Menemen with Onion (Soğanlı Menemen)">
              <span>2. With Onion</span>
              <div class="variant-tooltip">
                <span class="tooltip-en">2. Menemen with Onion</span>
                <span class="tooltip-tr">(Soğanlı Menemen)</span>
              </div>
            </a>
            <a href="#variant-3" class="variant-nav-btn" title="Menemen with Cheese (Peynirli Menemen)">
              <span>3. With Cheese</span>
              <div class="variant-tooltip">
                <span class="tooltip-en">3. Menemen with Cheese</span>
                <span class="tooltip-tr">(Peynirli Menemen)</span>
              </div>
            </a>
            <a href="#variant-4" class="variant-nav-btn" title="Menemen with Sujuk (Sucuklu Menemen)">
              <span>4. With Sujuk</span>
              <div class="variant-tooltip">
                <span class="tooltip-en">4. Menemen with Sujuk</span>
                <span class="tooltip-tr">(Sucuklu Menemen)</span>
              </div>
            </a>
          </nav>

          ${menemenChapters.map((v, i) => `
            <section class="recipe-chapter" id="variant-${i + 1}">
              <div class="chapter-head">
                <span class="variant-number">${String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h2>${v.englishTitle} <span class="tr-highlight">(${v.turkishTitle})</span></h2>
                  <p><strong>${v.definitionEnglish || ""}</strong> <span class="tr-highlight">(${v.definitionTurkish || ""})</span></p>
                  
                  ${buildChapterMetaHTML({
                    time: {
                      val: i === 0 ? "25 mins (25 dakika)" : "28 mins (28 dakika)",
                      en: `Prep & Cooking Time: Ready in ${i === 0 ? "25 minutes" : "28 minutes"}.`,
                      tr: `Hazırlık ve Pişirme: Yaklaşık ${i === 0 ? "25 dakikada" : "28 dakikada"} hazır olur.`
                    },
                    servings: {
                      val: "2 servings (2 kişilik)",
                      en: "Servings & Yield: Serves 2 generous breakfast portions.",
                      tr: "Porsiyon: 2 kişilik doyurucu kahvaltı porsiyonu sunar."
                    },
                    count: {
                      val: `${i === 0 ? 7 : 8} ingredients (${i === 0 ? 7 : 8} malzeme)`,
                      en: `Ingredients: Made with ${i === 0 ? 7 : 8} fresh ingredients.`,
                      tr: `Malzeme Sayısı: ${i === 0 ? 7 : 8} taze malzeme ile hazırlanır.`
                    }
                  })}
                </div>
              </div>
              <figure><img src="${v.image.src}" alt="${v.image.alt}" loading="lazy"><figcaption><strong>${v.englishTitle}</strong><span>${v.turkishTitle}</span></figcaption></figure>
              <div class="chapter-panels">
                <details class="learning-panel" ${i === 0 ? "open" : ""}><summary><h3>What Are ${v.englishTitle} Ingredients in English? <span class="tr-highlight">(${v.turkishTitle} Malzemeleri)</span></h3><span>Malzeme kartları &amp; tablosu</span></summary>
                  <div class="panel-body">
                    <p class="section-intro">This recipe uses ${i === 0 ? 7 : 8} ingredients, and eggs are the foundation. <span class="tr-highlight">(Bu tarifte ${i === 0 ? 7 : 8} malzeme kullanılır ve ana malzeme yumurtadır.)</span></p>
                    ${table(v.ingredients.headers, v.ingredients.rows, `${v.turkishTitle} Malzeme Tablosu`)}
                    ${buildIngredientCardsHTML((v.ingredientCards || []).map(c => ({
                      icon: c.icon || "🍳",
                      quantity: c.quantity || "",
                      en: c.en,
                      tr: c.tr,
                      sentenceEn: c.sentenceEn,
                      sentenceTr: c.sentenceTr
                    })))}
                  </div>
                </details>
                <details class="learning-panel"><summary><h3>How to Make ${v.englishTitle} Step by Step in English? <span class="tr-highlight">(${v.turkishTitle} Pişirme Adımları)</span></h3><span>6 adımı göster</span></summary>
                  <div class="panel-body">
                    <p class="section-intro">This recipe has 6 steps and takes ${i === 0 ? "25 minutes" : "28 minutes"}. <span class="tr-highlight">(Bu tarif 6 adımdan oluşur ve ${i === 0 ? "25 dakika" : "28 dakika"} sürer.)</span></p>
                    <ol class="compact-steps">
                      ${(v.compactSteps || []).map(s => `
                        <li>
                          <span class="step-num-badge">${s.number}. adım</span>
                          <div class="step-body">
                            <p class="en-text"><strong>${s.en}</strong></p>
                            <p class="tr-text"><span class="tr-highlight">${s.tr}</span></p>
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

        <!-- 3. 6 ADIMDA KLASİK MENEMEN -->
        <section id="sade-menemen">
          <p class="eyebrow">${formatBilingualText("6-STEP CLASSIC MENEMEN GUIDE (6 ADIMDA KLASİK MENEMEN REHBERİ)")}</p>
          <h2>${formatBilingualText("How Do You Make Classic Menemen Step by Step? (Classic Menemen İngilizce Adım Adım Nasıl Yapılır?)")}</h2>
          <p class="section-intro">Classic menemen is prepared in 6 steps with English instructions followed by Turkish translations. <span class="tr-highlight">(Klasik menemen 6 adımda hazırlanır; İngilizce talimatların ardından Türkçe çevirileri sunulur.)</span></p>
          ${buildStepsMetaHTML({
            steps: { val: "6 steps (6 adım)", en: "Follow the 6 sequential cooking steps to cook classic juicy menemen.", tr: "Klasik sulu menemen pişirmek için 6 adımlı yönergeyi sırasıyla takip edin." },
            time: { val: "25 mins (25 dakika)", en: "Chopping, sautéing, and simmering time on pan.", tr: "Doğrama, soteleme ve tavada kısık ateşte pişirme süresi." },
            level: { val: "Level A1–A2 (A1–A2 seviye)", en: "Focuses on chopping, frying, cracking, and folding verbs.", tr: "Doğrama, soteleme, yumurta kırma ve nazikçe karıştırma fiillerini pekiştirir." }
          })}
          ${buildStepAccordionHTML(fixedStepBlock.list.items.map((s, idx) => {
            const m = s.heading.match(/^(.*?)\s*\((.*?)\)$/);
            const titleEn = m ? m[1].trim() : s.heading;
            const titleTr = m ? m[2].trim() : ('Adım ' + (idx + 1));
            const words = s.english.split(' ');
            const actionEn = words[0];
            const metaList = [
              { ing: "3 green peppers (3 adet yeşil biber)", eq: "Chef's knife & cutting board (Bıçak ve kesme tahtası)", time: "3 mins (3 dakika)" },
              { ing: "4 ripe tomatoes (4 adet olgun domates)", eq: "Chef's knife & board (Bıçak ve tahta)", time: "4 mins (4 dakika)" },
              { ing: "2 tbsp olive oil or butter (Zeytinyağı veya tereyağı)", eq: "Copper pan or Skillet (Bakır tava veya sahan)", time: "2 mins (2 dakika)" },
              { ing: "Chopped peppers (Doğranmış biberler)", eq: "Wooden spoon & skillet (Tahta kaşık ve tava)", time: "4 mins (4 dakika)" },
              { ing: "Diced tomatoes (Küp domatesler)", eq: "Skillet (Tava)", time: "8 mins (8 dakika)" },
              { ing: "3 fresh eggs, salt (3 yumurta, tuz)", eq: "Skillet & fork (Tava ve çatal)", time: "3 mins (3 dakika)" },
              { ing: "Cooked menemen, fresh bread (Pişen menemen, ekmek)", eq: "Serving skillet (Bakır sahan)", time: "1 min (1 dakika)" }
            ];
            const meta = metaList[idx] || {};
            return {
              number: idx + 1,
              titleEn: titleEn,
              titleTr: titleTr,
              sentenceEn: s.english,
              sentenceTr: s.turkish,
              actionEn: actionEn,
              actionTr: 'Mutfak Eylemi',
              img: `/blog/ingilizce-tarifler/images/steps/menemen-step-${idx + 1}.webp`,
              ingredient: meta.ing,
              equipment: meta.eq,
              time: meta.time
            };
          }))}
          <p class="section-intro" style="margin-top:20px;">Here is the complete bilingual summary table of all 6 steps. <span class="tr-highlight">(İşte 6 adımın tamamının iki dilli özet tablosu:)</span></p>
          ${table(["Step", "English Instruction", "Türkçe Açıklama"], fixedStepBlock.list.summaryTable.rows, "Menemen 6 Pişirme Adımı Özeti")}
        </section>

        <!-- 4. MALZEMELER VE EKİPMANLAR (TABS) -->
        <section id="malzemeler-ve-ekipman">
          <p class="eyebrow">${formatBilingualText("INGREDIENTS & EQUIPMENT (MALZEME VE EKİPMAN LİSTESİ)")}</p>
          <h2>${formatBilingualText("Which Ingredients and Pan Make Traditional Menemen? (Geleneksel Menemeni Hangi Malzemeler ve Tava Oluşturur?)")}</h2>
          <p class="section-intro">Geleneksel menemenin ana malzemelerini ve en uygun tava ekipmanını aşağıdaki sekmelerden öğrenebilirsiniz.</p>

          <div class="grammar-tabs section-tabs">
            <div class="tab-list" role="tablist" aria-label="Malzemeler ve Ekipmanlar">
              <button type="button" role="tab" data-tab="menemen-tab-ing" id="tab-btn-menemen-ing" aria-controls="menemen-panel-ing" aria-selected="true" class="active">
                <span class="tab-idx">01</span><span class="tab-title">Ingredients (Malzemeler)</span>
              </button>
              <button type="button" role="tab" data-tab="menemen-tab-equip" id="tab-btn-menemen-equip" aria-controls="menemen-panel-equip" aria-selected="false">
                <span class="tab-idx">02</span><span class="tab-title">Pan &amp; Tools (Tava ve Gereçler)</span>
              </button>
            </div>

            <div class="tab-panel active" id="menemen-panel-ing" data-panel="menemen-tab-ing" role="tabpanel">
              <h3 style="margin-top:0.5rem;">${formatBilingualText("Which Ingredients Make Traditional Menemen? (Geleneksel Menemeni Hangi Malzemeler Oluşturur?)")}</h3>
              <p class="section-intro">Traditional menemen combines eggs with tomatoes and green peppers in olive oil. <span class="tr-highlight">(Geleneksel menemen, yumurtayı zeytinyağında pişmiş domates ve yeşil biberle birleştirir.)</span></p>
              ${table(["English Ingredient", "Türkçe Karşılığı", "Quantity (Miktar)"], menemenData.contentBlocks[23].table.rows, "Geleneksel Menemen Malzemeleri")}
            </div>

            <div class="tab-panel" id="menemen-panel-equip" data-panel="menemen-tab-equip" role="tabpanel" hidden>
              <h3 style="margin-top:0.5rem;">${formatBilingualText("What Kind of Pan Is Used for Menemen? (Menemen İçin Nasıl Bir Tava Kullanılır?)")}</h3>
              <p class="section-intro">A wide, shallow skillet helps vegetables cook evenly and eggs stir effortlessly. <span class="tr-highlight">(Geniş ve sığ bir tava, sebzelerin eşit pişmesini ve yumurtaların rahat karıştırılmasını sağlar.)</span></p>
              ${table(["English Equipment", "Türkçe Karşılığı", "Used In Step"], menemenData.contentBlocks[24].table.rows, "Menemen Pişirme Ekipmanları")}
            </div>
          </div>
        </section>

        <!-- 5. BESİN DEĞERLERİ & KALORİ (TABS) -->
        <section id="besin-degerleri">
          <p class="eyebrow">${formatBilingualText("CALORIES & NUTRITION (KALORİ VE BESİN DEĞERLERİ)")}</p>
          <h2>${formatBilingualText("How Many Calories and Nutrients Are in Menemen? (Menemen Kaç Kalori ve Besin Değerleri Nelerdir?)")}</h2>
          <p class="section-intro">Menemenin porsiyon kalori değerlerini ve zengin vitamin-protein içeriğini aşağıdaki sekmelerden inceleyebilirsiniz.</p>

          <div class="grammar-tabs section-tabs">
            <div class="tab-list" role="tablist" aria-label="Besin Değerleri ve Kalori">
              <button type="button" role="tab" data-tab="menemen-tab-cal" id="tab-btn-menemen-cal" aria-controls="menemen-panel-cal" aria-selected="true" class="active">
                <span class="tab-idx">01</span><span class="tab-title">Calories (Kalori)</span>
              </button>
              <button type="button" role="tab" data-tab="menemen-tab-nut" id="tab-btn-menemen-nut" aria-controls="menemen-panel-nut" aria-selected="false">
                <span class="tab-idx">02</span><span class="tab-title">Nutrition Facts (Besin Değerleri)</span>
              </button>
            </div>

            <div class="tab-panel active" id="menemen-panel-cal" data-panel="menemen-tab-cal" role="tabpanel">
              <h3 style="margin-top:0.5rem;">${formatBilingualText("How Many Calories Is 1 Serving of Menemen? (1 Porsiyon Menemen Kaç Kalori?)")}</h3>
              <p class="section-intro">One serving of classic menemen contains approximately 240 kcal. <span class="tr-highlight">(Bu klasik menemenin 1 porsiyonu yaklaşık 240 kcal enerji içerir.)</span></p>
              ${table(["Serving", "Calories (kcal)", "Açıklama"], menemenData.contentBlocks[25].table.rows, "Menemen Kalori Değerleri")}
            </div>

            <div class="tab-panel" id="menemen-panel-nut" data-panel="menemen-tab-nut" role="tabpanel" hidden>
              <h3 style="margin-top:0.5rem;">${formatBilingualText("What Are the Nutrition Facts of Menemen? (Menemenin Besin Değerleri Nelerdir?)")}</h3>
              <p class="section-intro">Key nutrients include egg protein and antioxidant vitamins from tomatoes and peppers. <span class="tr-highlight">(Yumurtadan gelen kaliteli protein ile domates ve biberden gelen antioksidan vitaminler temel besin değerleridir.)</span></p>
              ${table(["Nutrient", "Besin Ögesi", "Amount per 100 g"], menemenData.contentBlocks[26].table.rows, "Menemen Besin Değerleri")}
            </div>
          </div>
        </section>

        <!-- 6. YEMEK KARŞILAŞTIRMASI & TARTIŞMA (TABS) -->
        <section id="karsilastirma">
          <p class="eyebrow">${formatBilingualText("CULINARY COMPARISONS & DEBATES (YEMEK KARŞILAŞTIRMALARI VE TARTIŞMALAR)")}</p>
          <h2>${formatBilingualText("Menemen vs Shakshuka & The Onion Debate (Menemen ile Shakshuka Farkı ve Soğan Tartışması)")}</h2>
          <p class="section-intro">Menemen ile Ortadoğu yemeği Shakshuka arasındaki farkı ve Türkiye'deki soğanlı-soğansız tartışmasını aşağıdaki sekmelerden keşfedebilirsiniz.</p>

          <div class="grammar-tabs section-tabs">
            <div class="tab-list" role="tablist" aria-label="Karşılaştırma ve Tartışma">
              <button type="button" role="tab" data-tab="menemen-tab-shak" id="tab-btn-menemen-shak" aria-controls="menemen-panel-shak" aria-selected="true" class="active">
                <span class="tab-idx">01</span><span class="tab-title">Menemen vs Shakshuka (Shakshuka Farkı)</span>
              </button>
              <button type="button" role="tab" data-tab="menemen-tab-onion" id="tab-btn-menemen-onion" aria-controls="menemen-panel-onion" aria-selected="false">
                <span class="tab-idx">02</span><span class="tab-title">The Onion Debate (Soğanlı mı Soğansız mı?)</span>
              </button>
            </div>

            <div class="tab-panel active" id="menemen-panel-shak" data-panel="menemen-tab-shak" role="tabpanel">
              <h3 style="margin-top:0.5rem;">${formatBilingualText("Menemen vs Shakshuka: How to Explain the Difference in English? (Menemen ile Shakshuka Farkı)")}</h3>
              <p class="section-intro">Menemen gently stirs the eggs, whereas shakshuka poaches whole eggs in tomato sauce. <span class="tr-highlight">(Menemende yumurtalar hafifçe karıştırılır; shakshukada ise bütün yumurtalar domates sosunda poşe edilir.)</span></p>
              ${table(["Feature", "Menemen", "Shakshuka"], shakshukaBlock.table.rows, "Menemen ve Shakshuka Karşılaştırması")}
            </div>

            <div class="tab-panel" id="menemen-panel-onion" data-panel="menemen-tab-onion" role="tabpanel" hidden>
              <h3 style="margin-top:0.5rem;">${formatBilingualText("Menemen with or without Onion? English Culinary Conversation (Soğanlı mı Soğansız mı?)")}</h3>
              <p class="section-intro">Whether menemen should include onion is a famous culinary debate in Turkey. <span class="tr-highlight">(Menemenin soğanlı mı soğansız mı yapılacağı meşhur bir mutfak tartışmasıdır.)</span></p>
              <div class="bilingual" style="display:flex; flex-direction:column; gap:1rem; margin-top:1.2rem;">
                <div class="language-card" style="background:#f8fafc; border:1px solid #cbd5e1; border-radius:12px; padding:1.2rem;">
                  <strong style="color:#0284c7;">With Onion (Soğanlı Menemen):</strong>
                  <p style="margin-top:0.4rem;"><strong>"I prefer menemen with onion for lunch, because onion gives the sauce a richer flavor."</strong></p>
                  <p style="color:#475569; font-size:14px; margin-top:4px;"><span class="tr-highlight">(Öğle yemeğinde soğanlı menemeni tercih ederim, çünkü soğan sosa daha zengin bir lezzet katar.)</span></p>
                </div>
                <div class="language-card" style="background:#f8fafc; border:1px solid #cbd5e1; border-radius:12px; padding:1.2rem;">
                  <strong style="color:#0284c7;">Without Onion (Soğansız Menemen):</strong>
                  <p style="margin-top:0.4rem;"><strong>"Classic breakfast menemen is traditionally made without onion, focusing on sweet tomatoes and fresh peppers."</strong></p>
                  <p style="color:#475569; font-size:14px; margin-top:4px;"><span class="tr-highlight">(Klasik kahvaltı menemeni geleneksel olarak soğansız yapılır; tatlı domates ve taze biber lezzetine odaklanır.)</span></p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- 7. ÖLÇÜLER VE SÖZLÜK (TABS) -->
        <section id="olculer">
          <p class="eyebrow">${formatBilingualText("MEASUREMENT UNITS & VOCABULARY (ÖLÇÜ BİRİMLERİ VE KELİMELER)")}</p>
          <h2>${formatBilingualText("Measurement Units and Essential English Kitchen Words (İngilizce Ölçü Birimleri ve Mutfak Sözlüğü)")}</h2>
          <p class="section-intro">Menemen tariflerinde geçen ölçü birimlerini, mutfak kelimelerini ve metrik eşdeğerleri aşağıdaki 4 sekmeden inceleyebilirsiniz.</p>

          <div class="grammar-tabs section-tabs">
            <div class="tab-list" role="tablist" aria-label="Ölçü Birimleri ve Mutfak Sözlüğü">
              <button type="button" role="tab" data-tab="menemen-tab-u1" id="tab-btn-menemen-u1" aria-controls="menemen-panel-u1" aria-selected="true" class="active">
                <span class="tab-idx">01</span><span class="tab-title">Units (Ölçü Birimleri)</span>
              </button>
              <button type="button" role="tab" data-tab="menemen-tab-u2" id="tab-btn-menemen-u2" aria-controls="menemen-panel-u2" aria-selected="false">
                <span class="tab-idx">02</span><span class="tab-title">Kitchen Words (Mutfak Kelimeleri)</span>
              </button>
              <button type="button" role="tab" data-tab="menemen-tab-u3" id="tab-btn-menemen-u3" aria-controls="menemen-panel-u3" aria-selected="false">
                <span class="tab-idx">03</span><span class="tab-title">Spoon &amp; Cup (Kaşık ve Bardak)</span>
              </button>
              <button type="button" role="tab" data-tab="menemen-tab-u4" id="tab-btn-menemen-u4" aria-controls="menemen-panel-u4" aria-selected="false">
                <span class="tab-idx">04</span><span class="tab-title">Gram &amp; Liter (Gram ve Litre)</span>
              </button>
            </div>

            <div class="tab-panel active" id="menemen-panel-u1" data-panel="menemen-tab-u1" role="tabpanel">
              <h3 style="margin-top:0.5rem;">${formatBilingualText("Measurement Units in English Menemen Recipes (İngilizce Menemen Tariflerinde Kullanılan Ölçü Birimleri)")}</h3>
              <p class="section-intro">English menemen recipes use cup, tablespoon, teaspoon, gram, and milliliter. <span class="tr-highlight">(İngilizce menemen tariflerinde cup, tablespoon, teaspoon, gram ve milliliter birimleri kullanılır.)</span></p>
              ${table(["English Unit", "Türkçe Karşılığı", "Metric Equivalent"], menemenData.contentBlocks[29].table.rows, "Menemen Ölçü Birimleri")}
            </div>

            <div class="tab-panel" id="menemen-panel-u2" data-panel="menemen-tab-u2" role="tabpanel" hidden>
              <h3 style="margin-top:0.5rem;">${formatBilingualText("10 Kitchen Vocabulary Words in Menemen Recipes (Menemen Tarif Metninde Geçen 10 Mutfak Kelimesi)")}</h3>
              <p class="section-intro">These 10 kitchen vocabulary terms appear frequently in Turkish and global egg recipes. <span class="tr-highlight">(Bu 10 mutfak kelimesi yumurta tariflerinde sıklıkla karşınıza çıkar.)</span></p>
              ${table(["English Term", "Türkçe Karşılığı", "Example Sentence"], vocab10Block.table.rows, "Temel Mutfak Kelimeleri")}
            </div>

            <div class="tab-panel" id="menemen-panel-u3" data-panel="menemen-tab-u3" role="tabpanel" hidden>
              <h3 style="margin-top:0.5rem;">${formatBilingualText("Tablespoon, Teaspoon, Cup Equivalents (Tablespoon, Teaspoon, Cup: Türkçe Karşılıkları)")}</h3>
              <p class="section-intro">A tablespoon means yemek kaşığı, teaspoon means çay kaşığı, and cup means su bardağı. <span class="tr-highlight">(Tablespoon yemek kaşığı, teaspoon çay kaşığı ve cup su bardağı anlamına gelir.)</span></p>
              ${table(["English Unit", "Türkçe Karşılığı", "Metric Equivalent"], menemenData.contentBlocks[31].table.rows, "Kaşık ve Bardak Ölçüleri")}
            </div>

            <div class="tab-panel" id="menemen-panel-u4" data-panel="menemen-tab-u4" role="tabpanel" hidden>
              <h3 style="margin-top:0.5rem;">${formatBilingualText("How Are Gram and Liter Used in English Recipes? (Gram ve Litre İngilizce Tariflerde Nasıl Kullanılır?)")}</h3>
              <p class="section-intro">Gram is abbreviated as g, milliliter as ml, and liter as l in English recipes. <span class="tr-highlight">(İngilizce tariflerde gram g, mililitre ml ve litre l şeklinde kısaltılır.)</span></p>
              ${table(["Metric Unit", "Imperial Equivalent", "Türkçe Açıklama"], menemenData.contentBlocks[32].table.rows, "Gram ve Litre Kullanım Tablosu")}
            </div>
          </div>
        </section>

        <!-- 8. DİL KURALLARI (TABS) -->
        <section id="dil-kurallari">
          <p class="eyebrow">${formatBilingualText("RECIPE GRAMMAR & USAGE RULES (TARİF DİL BİLGİSİ VE ANLATIM KURALLARI)")}</p>
          <h2>${formatBilingualText("Grammar Rules for English Menemen Recipes (İngilizce Menemen Tarifi Yazarken Dikkat Edilmesi Gereken Dil Kuralları)")}</h2>
          <p class="section-intro">İngilizce tarif yazımının 4 temel kuralı: emir kipi, sıra zarfları, sayılabilir/sayılamayan isimler ve ölçü ifadeleri.</p>

          <div class="grammar-tabs section-tabs">
            <div class="tab-list" role="tablist" aria-label="Tarif Dil Kuralları">
              <button type="button" role="tab" data-tab="menemen-tab-imp" id="tab-btn-menemen-imp" aria-controls="menemen-panel-imp" aria-selected="true" class="active">
                <span class="tab-idx">01</span><span class="tab-title">Imperatives (Emir Kipi)</span>
              </button>
              <button type="button" role="tab" data-tab="menemen-tab-seq" id="tab-btn-menemen-seq" aria-controls="menemen-panel-seq" aria-selected="false">
                <span class="tab-idx">02</span><span class="tab-title">Sequence Adverbs (Sıra Zarfları)</span>
              </button>
              <button type="button" role="tab" data-tab="menemen-tab-rules" id="tab-btn-menemen-rules" aria-controls="menemen-panel-rules" aria-selected="false">
                <span class="tab-idx">03</span><span class="tab-title">Grammar Rules (Genel Kurallar)</span>
              </button>
            </div>

            <!-- Tab 1: Imperatives -->
            <div class="tab-panel active" id="menemen-panel-imp" data-panel="menemen-tab-imp" role="tabpanel">
              <h3 style="margin-top:0.5rem;">${formatBilingualText("How to Use Imperatives in Menemen Recipes (İngilizce Menemen Tariflerinde Emir Kipi)")}</h3>
              <p class="section-intro">The imperative mood begins with the base verb and has no subject. <span class="tr-highlight">(Emir kipi, fiilin yalın haliyle başlar ve özne içermez.)</span></p>
              ${table(["English Imperative", "Türkçe Karşılığı", "Verb"], menemenData.contentBlocks[34].table.rows, "Menemen Emir Kipi Kuralları")}
              ${imperativeBlock && imperativeBlock.negativeImperative ? `<aside class="negative-imperative-box" style="margin-top:1.5rem;"><p><strong>English:</strong> ${imperativeBlock.negativeImperative.en}</p><p style="margin-top:6px; color:#7f1d1d;"><strong>Türkçe:</strong> <span class="tr-highlight">${imperativeBlock.negativeImperative.tr}</span></p></aside>` : ""}
            </div>

            <!-- Tab 2: Sequence Adverbs -->
            <div class="tab-panel" id="menemen-panel-seq" data-panel="menemen-tab-seq" role="tabpanel" hidden>
              <h3 style="margin-top:0.5rem;">${formatBilingualText("Sequence Adverbs: First, Then, After That, Finally (Bağlaçlar ve Sıra Zarfları: First, Then, After That, Finally)")}</h3>
              <p class="section-intro">First, then, after that, next, and finally order the cooking steps logically. <span class="tr-highlight">(First, then, after that, next ve finally tarif adımlarını mantıksal olarak sıralar.)</span></p>
              ${table(["Sequence Adverb", "Türkçe Karşılığı", "Example Sentence"], menemenData.contentBlocks[35].table.rows, "Sıra Zarfları Tablosu")}
              ${seqBlock && seqBlock.sequenceParagraph ? `
                <div class="bilingual-paragraph" style="margin-top:1.5rem; background: rgba(248,250,252,0.9); border: 1px solid #cbd5e1; border-radius: 12px; padding: 1.5rem;">
                  <p><strong>English:</strong> ${seqBlock.sequenceParagraph.en}</p>
                  <p style="margin-top:0.75rem; color:#475569;"><strong>Türkçe:</strong> <span class="tr-highlight">${seqBlock.sequenceParagraph.tr}</span></p>
                </div>
              ` : ""}
            </div>

            <!-- Tab 3: Grammar Summary -->
            <div class="tab-panel" id="menemen-panel-rules" data-panel="menemen-tab-rules" role="tabpanel" hidden>
              <h3 style="margin-top:0.5rem;">Core Recipe Grammar Rules <span class="tr-highlight">(4 Temel Tarif Dil Kuralı)</span></h3>
              <p class="section-intro">Açık ve profesyonel İngilizce tarifler yazmak için 4 temel dil kuralı:</p>
              ${grammarBlock && grammarBlock.rulesList ? `<ul style="margin: 16px 0 24px 0; padding-left: 24px; line-height: 1.8; color: #334155;">${grammarBlock.rulesList.map(r => `<li>${r}</li>`).join("")}</ul>` : ""}
              ${table(["Rule", "English Example", "Türkçe Karşılığı"], menemenData.contentBlocks[33].table.rows, "4 Temel Dil Kuralı Özeti")}
            </div>
          </div>
        </section>

        <!-- 9. 8. SINIF ALISTIRMA VE QUIZ -->
        <section id="alistirma" class="exercise">
          <p class="eyebrow" style="color:#93c5fd;">${formatBilingualText("8TH GRADE PRACTICE & QUIZ (8. SINIF QUIZ VE ALIŞTIRMALAR)")}</p>
          <h2 style="color:#ffffff;">8th Grade English Menemen Recipe Practice &amp; Quiz <span class="tr-highlight" style="color:#38bdf8;">(8. Sınıf İngilizce Menemen Tarifi)</span></h2>
          <p class="section-intro" style="color:#cbd5e1;">Aşağıdaki soruları yanıtlayarak mutfak fiillerini (chop, saute, stir, crack) ve menemen pişirme yönergelerini pekiştirin:</p>

          <div class="quiz-grid" style="display: flex; flex-direction: column; gap: 1.5rem; margin-top: 2rem;">
            ${menemenQuizList.map((q, idx) => `
              <div class="quiz-card" data-idx="${idx}" data-correct="${q.answer}" style="background:#ffffff; border:1px solid #e2e8f0; border-radius:14px; padding:1.6rem; text-align:left; color:#0f172a; box-shadow:0 4px 14px rgba(0,0,0,0.06);">
                <span class="quiz-badge" style="background:#0284c7; color:#ffffff; padding:4px 10px; border-radius:6px; font-size:0.85rem; font-weight:700;">Soru ${q.num} · ${q.type === "multiple-choice" ? "Çoktan Seçmeli" : "Boşluk Doldurma"}</span>
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

          <!-- Interactive Quiz Completion Summary Card -->
          <div id="quiz-summary-box" style="display:none;"></div>
        </section>

        <!-- CTA Banner -->
        ${getMidPageCTAHTML()}
        ${getRelatedRecipesHTML("menemen")}
      </div>
    </div>
  </article>`;

  // Initialize interactive features
  initQuizInteractivity(root, "menemen", renderMenemenPage);
  initVariantSubnavScroll(root);
}


const pancakeVariants = [
  {
    id: "classic-pancake",
    title: "Klasik Pankek Tarifi",
    briefTitle: "Classic Pancake Recipe (Klasik Pankek Tarifi)",
    ingredientsHeading: "Ingredients for Classic Pancakes (Klasik Pankek Malzemeleri)",
    stepsHeading: "Step-by-Step Classic Pancakes (Adım Adım Klasik Pankek Yapılışı)",
    english: "Classic Pancake Recipe",
    description: "Classic Pancake (Klasik Pankek), un, süt, yumurta, şeker ve kabartma tozuyla hazırlanan, tavada pofuduk kabaran geleneksel kahvaltı lezzetidir.",
    image: "/blog/ingilizce-tarifler/images/pancake-fluffy.webp",
    alt: "Fluffy classic stacked pancakes with butter and honey",
    ingredients: [
      ["All-Purpose Flour", "Un — ana hamur yapısını oluşturan tahıl unu.", "200 g (1.5 cup)"],
      ["Fresh Milk", "Süt — hamuru akışkan ve yumuşak kılan sıvı.", "240 ml (1 cup)"],
      ["Fresh Egg", "Yumurta — bağlayıcı ve zengin kıvam sağlar.", "1 adet"],
      ["Granulated Sugar", "Toz şeker — hafif tatlandırıcı bileşen.", "30 g (2 tbsp)"],
      ["Baking Powder", "Kabartma tozu — puf puf kabarmayı sağlayan mayalama ajanı.", "10 g (2 tsp)"],
      ["Melted Butter", "Eritilmiş tereyağı — lezzet ve doku yumuşaklığı.", "30 g (2 tbsp)"]
    ],
    ingredientCards: [
      { icon: "🌾", en: "All-Purpose Flour", tr: "Çok Amaçlı Un", quantity: "200 g (1.5 su bardağı)", sentenceEn: "Classic Pancakes require all-purpose flour for a light and tender crumb structure.", sentenceTr: "Klasik Pankek, hafif ve yumuşak bir kırıntı dokusu için çok amaçlı un gerektirir." },
      { icon: "🥛", en: "Fresh Milk", tr: "Taze Süt", quantity: "240 ml (1 su bardağı)", sentenceEn: "Classic Pancakes require fresh milk to create a smooth, pourable pancake batter.", sentenceTr: "Klasik Pankek, pürüzsüz ve akışkan bir hamur elde etmek için taze süt gerektirir." },
      { icon: "🥚", en: "Fresh Egg", tr: "Taze Yumurta", quantity: "1 pcs (1 adet)", sentenceEn: "Classic Pancakes require one fresh egg to bind ingredients and enhance rich flavor.", sentenceTr: "Klasik Pankek, malzemeleri bağlamak ve zengin lezzet katmak için bir taze yumurta gerektirir." },
      { icon: "🍬", en: "Granulated Sugar", tr: "Toz Şeker", quantity: "30 g (2 yemek kaşığı)", sentenceEn: "Classic Pancakes require granulated sugar for balanced sweetness and golden skillet color.", sentenceTr: "Klasik Pankek, dengeli tatlılık ve tavada altın sarısı kızarma için toz şeker gerektirir." },
      { icon: "✨", en: "Baking Powder", tr: "Kabartma Tozu", quantity: "10 g (2 çay kaşığı)", sentenceEn: "Classic Pancakes require baking powder to create airy bubbles and tall fluffy rise.", sentenceTr: "Klasik Pankek, havadar kabarcıklar ve yüksek pofuduk kabarma için kabartma tozu gerektirir." },
      { icon: "🧈", en: "Melted Butter", tr: "Eritilmiş Tereyağı", quantity: "30 g (2 yemek kaşığı)", sentenceEn: "Classic Pancakes require melted butter to ensure soft tenderness and fragrant aroma.", sentenceTr: "Klasik Pankek, yumuşacık bir doku ve mis gibi koku için eritilmiş tereyağı gerektirir." }
    ],
    steps: "First, whisk the egg, milk, sugar and melted butter in a large bowl. Then, sift in the flour and baking powder. After that, let the batter rest for 10 minutes. Pour a ladle onto a hot non-stick pan. Next, flip the pancake when bubbles appear on the surface. Finally, stack on a plate and serve with maple syrup or honey."
  },
  {
    id: "american-pancake",
    title: "Amerikan Pankek Tarifi",
    briefTitle: "American Pancake Recipe (Amerikan Pankek Tarifi)",
    ingredientsHeading: "Ingredients for American Pancakes (Amerikan Pankek Malzemeleri)",
    stepsHeading: "Step-by-Step American Pancakes (Adım Adım Amerikan Pankek Yapılışı)",
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
      { icon: "🌾", en: "All-Purpose Flour", tr: "Çok Amaçlı Un", quantity: "250 g (2 su bardağı)", sentenceEn: "American Pancakes require all-purpose flour to build a thick, tall diner-style pancake.", sentenceTr: "Amerikan Pankek, kalın ve tok bir Amerikan restoranı tarzı için çok amaçlı un gerektirir." },
      { icon: "🥛", en: "Buttermilk", tr: "Yayıkaltı Sütü veya Kefir", quantity: "300 ml (1.25 su bardağı)", sentenceEn: "American Pancakes require tangy buttermilk to react with baking soda for cloud-like fluffiness.", sentenceTr: "Amerikan Pankek, karbonatla tepkimeye girip bulut gibi kabarması için hafif asidik buttermilk veya kefir gerektirir." },
      { icon: "🥚", en: "Eggs", tr: "Taze Yumurta", quantity: "2 pcs (2 adet)", sentenceEn: "American Pancakes require two fresh eggs to provide rich custard flavor and stable batter lift.", sentenceTr: "Amerikan Pankek, zengin lezzet ve dengeli hamur kabarması için iki taze yumurta gerektirir." },
      { icon: "✨", en: "Baking Powder", tr: "Kabartma Tozu", quantity: "15 g (1 yemek kaşığı)", sentenceEn: "American Pancakes require generous baking powder for dramatic rise on the hot griddle.", sentenceTr: "Amerikan Pankek, sıcak ızgara sacında etkileyici bir kabarma için bol kabartma tozu gerektirir." },
      { icon: "🫧", en: "Baking Soda", tr: "Karbonat", quantity: "3 g (½ çay kaşığı)", sentenceEn: "American Pancakes require baking soda to neutralize acidity and create thousands of micro air pockets.", sentenceTr: "Amerikan Pankek, asiditeyi nötrleyip binlerce mikro hava kabarcığı oluşturmak için karbonat gerektirir." },
      { icon: "🧈", en: "Melted Butter", tr: "Eritilmiş Tereyağı", quantity: "45 g (3 yemek kaşığı)", sentenceEn: "American Pancakes require melted butter to maintain velvety moisture in every thick bite.", sentenceTr: "Amerikan Pankek, her kalın lokmada kadife gibi nemi korumak için eritilmiş tereyağı gerektirir." }
    ],
    steps: "First, combine flour, baking powder, baking soda and sugar. Then, whisk buttermilk, eggs and melted butter separately. After that, gently fold wet into dry ingredients without overmixing. Pour thick batter onto a hot griddle. Next, flip when golden and bubbles pop. Finally, stack high and top with butter."
  },
  {
    id: "banana-pancake",
    title: "Muzlu Pankek Tarifi",
    briefTitle: "Banana Pancake Recipe (Muzlu Pankek Tarifi)",
    ingredientsHeading: "Ingredients for Banana Pancakes (Muzlu Pankek Malzemeleri)",
    stepsHeading: "Step-by-Step Banana Pancakes (Adım Adım Muzlu Pankek Yapılışı)",
    english: "Banana Pancake Recipe",
    description: "Banana Pancake (Muzlu Pankek), ezilmiş olgun muz ve tarçın eklenerek doğal tatlılık kazandırılan, rafine şekersiz hazırlanabilen sağlıklı pankektir.",
    image: "/blog/ingilizce-tarifler/images/pancake-banana.webp",
    alt: "Banana pancakes topped with sliced bananas and honey",
    ingredients: [
      ["Ripe Bananas", "Olgun muz — doğal şeker ve nem kaynağı.", "2 adet"],
      ["Fresh Eggs", "Yumurta — hamuru bir arada tutan protein.", "2 adet"],
      ["Flour veya Oat Flour", "Un veya yulaf unu.", "120 g (1 cup)"],
      ["Ground Cinnamon", "Öğütülmüş tarçın — nefis sıcak koku.", "1 tsp"],
      ["Baking Powder", "Kabartma tozu — puf kıvam desteği.", "5 g (1 tsp)"],
      ["Butter veya Coconut Oil", "Pişirme yağı — hafif kızarma.", "1 tbsp"]
    ],
    ingredientCards: [
      { icon: "🍌", en: "Ripe Bananas", tr: "Olgun Muz", quantity: "2 pcs (2 adet)", sentenceEn: "Banana Pancakes require ripe mashed bananas for natural caramel sweetness and moist texture.", sentenceTr: "Muzlu Pankek, doğal karamel tatlılığı ve nemli kıvam için ezilmiş olgun muz gerektirir." },
      { icon: "🥚", en: "Fresh Eggs", tr: "Taze Yumurta", quantity: "2 pcs (2 adet)", sentenceEn: "Banana Pancakes require two fresh eggs to bind the mashed fruit into a firm batter.", sentenceTr: "Muzlu Pankek, ezilmiş meyveyi dengeli bir hamura dönüştürüp bağlamak için iki taze yumurta gerektirir." },
      { icon: "🌾", en: "Flour or Oats", tr: "Un veya Yulaf Unu", quantity: "120 g (1 su bardağı)", sentenceEn: "Banana Pancakes require wholesome flour or oat flour to provide delicate pancake structure.", sentenceTr: "Muzlu Pankek, narin pankek dokusunu sağlamak için besleyici un veya yulaf unu gerektirir." },
      { icon: "🌿", en: "Ground Cinnamon", tr: "Öğütülmüş Tarçın", quantity: "1 tsp (1 çay kaşığı)", sentenceEn: "Banana Pancakes require fragrant ground cinnamon to elevate the sweet banana aroma.", sentenceTr: "Muzlu Pankek, tatlı muz aromasını zenginleştirmek için mis kokulu öğütülmüş tarçın gerektirir." },
      { icon: "✨", en: "Baking Powder", tr: "Kabartma Tozu", quantity: "5 g (1 çay kaşığı)", sentenceEn: "Banana Pancakes require baking powder to give a gentle lift despite heavy banana puree.", sentenceTr: "Muzlu Pankek, yoğun muz püresine rağmen hafif bir kabarıklık sağlamak için kabartma tozu gerektirir." },
      { icon: "🧈", en: "Butter or Coconut Oil", tr: "Tereyağı veya Hindistan Cevizi Yağı", quantity: "1 tbsp (1 yemek kaşığı)", sentenceEn: "Banana Pancakes require butter or coconut oil to achieve a golden, fragrant crust.", sentenceTr: "Muzlu Pankek, mis gibi kokan altın sarısı bir kabuk elde etmek için tereyağı veya hindistan cevizi yağı gerektirir." }
    ],
    steps: "First, mash the ripe bananas in a bowl until smooth. Then, whisk in the eggs and cinnamon. After that, fold in the flour and baking powder. Cook spoonfuls on low-medium heat for 2 minutes per side. Finally, garnish with sliced fresh bananas and walnuts."
  },
  {
    id: "chocolate-pancake",
    title: "Kakaolu Pankek Tarifi",
    briefTitle: "Chocolate Pancake Recipe (Kakaolu Pankek Tarifi)",
    ingredientsHeading: "Ingredients for Chocolate Pancakes (Kakaolu Pankek Malzemeleri)",
    stepsHeading: "Step-by-Step Chocolate Pancakes (Adım Adım Kakaolu Pankek Yapılışı)",
    english: "Chocolate Pancake Recipe",
    description: "Chocolate Pancake (Kakaolu Pankek), hamuruna elenmiş kakao tozu ve damla çikolata eklenerek hazırlanan, tatlı krizleri için ideal zengin çikolatalı pankektir.",
    image: "/blog/ingilizce-tarifler/images/pancake-chocolate.webp",
    alt: "Decadent chocolate pancakes with chocolate sauce and berries",
    ingredients: [
      ["All-Purpose Flour", "Un — temel tahıl bazı.", "180 g (1.5 cups)"],
      ["Cocoa Powder", "Kakao tozu — yoğun çikolata aroması.", "30 g (3 tbsp)"],
      ["Whole Milk", "Süt — hamuru sulandırıcı süt ürünü.", "250 ml (1 cup)"],
      ["Fresh Egg", "Taze yumurta — bağlayıcı protein.", "1 adet"],
      ["Granulated Sugar", "Toz şeker — kakaoyu dengeleyen tatlılık.", "40 g (3 tbsp)"],
      ["Chocolate Chips", "Damla çikolata — eriyen sürpriz taneler.", "50 g (⅓ cup)"]
    ],
    ingredientCards: [
      { icon: "🌾", en: "All-Purpose Flour", tr: "Çok Amaçlı Un", quantity: "180 g (1.5 su bardağı)", sentenceEn: "Chocolate Pancakes require all-purpose flour as the base for fluffy cocoa batter.", sentenceTr: "Kakaolu Pankek, kabarık kakaolu hamurun temelini oluşturmak için çok amaçlı un gerektirir." },
      { icon: "🍫", en: "Cocoa Powder", tr: "Kakao Tozu", quantity: "30 g (3 yemek kaşığı)", sentenceEn: "Chocolate Pancakes require Dutch-processed cocoa powder for a deep chocolate color and flavor.", sentenceTr: "Kakaolu Pankek, derin çikolata rengi ve aroması için kaliteli kakao tozu gerektirir." },
      { icon: "🥛", en: "Whole Milk", tr: "Tam Yağlı Süt", quantity: "250 ml (1 su bardağı)", sentenceEn: "Chocolate Pancakes require whole milk to hydrate dry cocoa and ensure rich moisture.", sentenceTr: "Kakaolu Pankek, kuru kakaoyu çözüp zengin bir nem sağlamak için tam yağlı süt gerektirir." },
      { icon: "🥚", en: "Fresh Egg", tr: "Taze Yumurta", quantity: "1 pcs (1 adet)", sentenceEn: "Chocolate Pancakes require a fresh egg to create a sturdy yet tender breakfast cake.", sentenceTr: "Kakaolu Pankek, dayanıklı ama ağızda dağılan yumuşak bir doku için taze yumurta gerektirir." },
      { icon: "🍬", en: "Granulated Sugar", tr: "Toz Şeker", quantity: "40 g (3 yemek kaşığı)", sentenceEn: "Chocolate Pancakes require granulated sugar to balance the pleasant bitterness of cocoa.", sentenceTr: "Kakaolu Pankek, kakaonun hafif burukluğunu dengelemek için toz şeker gerektirir." },
      { icon: "🍪", en: "Chocolate Chips", tr: "Damla Çikolata", quantity: "50 g (⅓ su bardağı)", sentenceEn: "Chocolate Pancakes require chocolate chips that melt into warm delicious pockets inside the pancake.", sentenceTr: "Kakaolu Pankek, pişerken içinde eriyen enfes cepler oluşturmak için damla çikolata gerektirir." }
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
    questionTr: "'Tavada pankeki tersyüz etmek veya çevirmek' anlamına gelen İngilizce fiil hangisidir?",
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
      { "@type": "HowToStep", position: 1, name: "Whisk the Eggs, Milk and Sugar", text: "Whisk the egg, milk and sugar in a bowl until smooth." },
      { "@type": "HowToStep", position: 2, name: "Add the Flour and Baking Powder", text: "Sift in the flour and baking powder, whisk gently into a smooth batter." },
      { "@type": "HowToStep", position: 3, name: "Rest the Batter for 10 Minutes", text: "Rest the batter at room temperature for 10 minutes to allow gluten to relax." },
      { "@type": "HowToStep", position: 4, name: "Pour the Batter onto a Hot Pan", text: "Pour one small ladle of batter onto a hot lightly buttered non-stick pan." },
      { "@type": "HowToStep", position: 5, name: "Flip the Pancake When Bubbles Appear", text: "Flip the pancake when bubbles form and pop on the surface." },
      { "@type": "HowToStep", position: 6, name: "Serve the Pancakes with Honey or Syrup", text: "Stack warm pancakes on a plate and drizzle with maple syrup or honey." }
    ]
  });

  root.innerHTML = `<article class="pasta-guide recipe-guide">
    <div class="reading-progress" aria-hidden="true"><span></span></div>
    
    <header class="hero">
      <div>
        <p class="eyebrow">RECIPES &amp; COOKING GUIDE <span class="tr-highlight">(İNGİLİZCE YEMEK TARİFLERİ)</span></p>
        <h1>İngilizce Pankek Tarifi <span class="tr-highlight">(Pankek Yapılışı İngilizce)</span></h1>
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
        servings: { val: "4 servings (4 kişilik veya 8-10 adet)", en: "Yields 8-10 fluffy breakfast pancakes.", tr: "8 ila 10 adet kabarık kahvaltı pankeki sunar." },
        level: { val: "A1–A2 (Temel Seviye)", en: "Covers batter, flip, pour verbs and imperial measurements.", tr: "Çırpma, dökme, çevirme fiilleri ve mutfak ölçü terimlerini kapsar." }
      })}
    </header>

    <section class="hero-overview-table" id="definition-variations">
      <p class="eyebrow eyebrow-lg">OVERVIEW &amp; COMPARISON <span class="tr-highlight">(TANIM VE ÇEŞİTLER KARŞILAŞTIRMASI)</span></p>
      <h2 class="definition-heading">English Pancake Recipes: Variations, Key Ingredients and Cooking Steps <span class="tr-highlight">(İngilizce Pankek Çeşitleri, Malzemeleri ve Pişirme Adımları)</span></h2>
      <p class="section-intro">Explore the four main pancake variations with their English names, distinct ingredients, and cooking steps in the comparison table below. <span class="tr-highlight">(Aşağıdaki tabloda 4 popüler pankek çeşidinin İngilizce isimlerini, ayırt edici malzemelerini ve temel pişirme adımlarını karşılaştırmalı olarak inceleyebilirsiniz.)</span></p>
      ${table(["English Recipe Name", "Türkçe Adı", "Main Ingredients (Ana Malzemeler)", "Main Steps (Temel Adımlar)"], [
        ["Classic Pancakes", "Klasik Pankek", "Flour, milk, egg, sugar, baking powder, butter (Un, süt, yumurta, şeker, kabartma tozu, tereyağı)", "Whisk wet ingredients, sift dry ingredients, rest batter and cook on hot pan. (Sıvı malzemeleri çırpın, kuruları eleyin, dinlendirip tavada pişirin.)"],
        ["American Pancakes", "Amerikan Pankek", "Flour, buttermilk, eggs, baking soda, melted butter (Un, buttermilk veya kefir, yumurta, karbonat, tereyağı)", "Mix thick batter, pour onto griddle, flip when bubbles form and stack high. (Koyu hamuru karıştırın, tavaya dökün, kabarcıklar patlayınca çevirin.)"],
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
          <p class="eyebrow eyebrow-lg">CORE CONCEPTS &amp; VOCABULARY <span class="tr-highlight">(TEMEL KAVRAMLAR VE SÖZLÜK)</span></p>
          <h2>Key Pancake Terms and English Translations <span class="tr-highlight">(Pankek Terimleri ve Doğru Çeviriler)</span></h2>
          
          ${buildAppBannerHTML("Pankek")}

          <p class="section-intro"><strong>Mastering essential terms and cooking verbs makes a significant difference in English recipe communication.</strong> <span class="tr-highlight">(Pankek tariflerini okurken ve anlatırken doğru mutfak terimlerini ve pişirme fiillerini bilmek İngilizce iletişimde büyük fark yaratır.)</span></p>

          <div class="grammar-tabs section-tabs">
            <div class="tab-list" role="tablist" aria-label="Pankek Terimleri ve Fiiller">
              <button role="tab" aria-selected="true" tabindex="0" data-tab="pancake-terms" class="active"><span class="tab-idx">01</span><span class="tab-title">Terms (Kavramlar)</span></button>
              <button role="tab" aria-selected="false" tabindex="-1" data-tab="pancake-verbs"><span class="tab-idx">02</span><span class="tab-title">Verbs (Mutfak Fiilleri)</span></button>
            </div>
            <div class="tab-panels">
              <div class="tab-panel active" role="tabpanel" data-panel="pancake-terms">
                <h3>Pancake or Crepe? How to Explain Thickness in English <span class="tr-highlight">(Pancake mi Crepe mi? Kalınlık Farkı)</span></h3>
                <p class="section-intro"><strong>In English, pancakes refer to thick fluffy cakes with baking powder, whereas crepes are thin unleavened French pancakes.</strong> <span class="tr-highlight">(İngilizcede pancake kabartma tozu içeren kabarık hamurları, crepe ise kabartma ajanı içermeyen ince hamurları ifade eder.)</span></p>
                ${table(["English Term", "Türkçe Anlamı", "Thickness & Context (Kalınlık ve Bağlam)"], [
                  ["Pancake", "Pankek (Kabarık)", "Thick, fluffy breakfast cake made with baking powder. (Kabartma tozlu kalın ve süngerimsi doku.)"],
                  ["Crepe (Crêpe)", "Krep (İnce hamur)", "Very thin, flat French pancake without leavening agent. (Mayasız, çok ince Fransız usulü krep.)"],
                  ["Batter", "Akışkan unlu hamur", "Liquid mixture of flour, milk and egg before cooking. (Pişmeden önceki akışkan sıvı hamur.)"],
                  ["Griddle or Skillet", "Döküm tava veya pankek tavası", "Flat cooking surface ideal for frying even pancakes. (Düz yüzeyli geniş pankek pişirme tavası.)"],
                  ["Stack", "Üst üste pankek kulesi", "A pile of several cooked pancakes served on a plate. (Tabağa üst üste dizilmiş pankek dizisi.)"]
                ])}
              </div>
              <div class="tab-panel" role="tabpanel" data-panel="pancake-verbs" hidden>
                <h3>Kitchen Verbs Used in Pancake Recipes: Whisk, Pour, Flip, Serve <span class="tr-highlight">(Pankek Tarifinde Kullanılan Fiiller)</span></h3>
                <p class="section-intro"><strong>The table below defines the four core culinary verbs representing each cooking phase of fluffy pancakes.</strong> <span class="tr-highlight">(Aşağıdaki tabloda pankek yapımının 4 ana aşamasını temsil eden kilit mutfak fiillerini inceleyebilirsiniz.)</span></p>
                ${table(["Verb (Fiil)", "Türkçe Karşılığı", "Example Sentence (Örnek Cümle)"], [
                  ["Whisk", "Telle çırpmak", "Whisk the milk, eggs and sugar until smooth. (Süt, yumurta ve şekeri pürüzsüz olana dek çırpın.)"],
                  ["Pour", "Dökmek veya akıtmak", "Pour a small ladle of batter onto the greased pan. (Yağlanmış tavaya küçük bir kepçe hamur dökün.)"],
                  ["Flip", "Spatulayla ters çevirmek", "Flip the pancake gently when bubbles pop. (Kabarcıklar patlayınca pankeki nazikçe çevirin.)"],
                  ["Serve", "Servis etmek veya sunmak", "Serve hot pancakes with pure maple syrup and berries. (Sıcak pankekleri akçaağaç şurubu ve meyvelerle servis edin.)"],
                  ["Sift", "Elemek (Un veya kakao)", "Sift the dry ingredients to prevent flour lumps. (Topaklanmayı önlemek için kuru malzemeleri eleyin.)"],
                  ["Stack", "Üst üste dizmek", "Stack three pancakes on a warm breakfast plate. (Ilık bir kahvaltı tabağına üç pankeki üst üste dizin.)"]
                ])}
              </div>
            </div>
          </div>
        </section>

        <!-- 2. 4 PANKEK ÇEŞİDİ -->
        <div id="tarifler" class="recipe-chapters">
          <div class="chapter-intro">
            <p class="eyebrow eyebrow-lg">4 DISTINCT PANCAKE VARIATIONS <span class="tr-highlight">(4 FARKLI PANKEK TARİFİ)</span></p>
            <p class="section-intro">Each recipe card includes a complete ingredient table, visual ingredient list, kitchen measurements, and clear English cooking directions. <span class="tr-highlight">(Her tarifte malzeme tablosu, görsel malzeme listesi, ölçüler ve İngilizce yapılış yönergeleri yer alır.)</span></p>
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
            <p class="eyebrow eyebrow-lg">6-STEP CLASSIC PANCAKE GUIDE <span class="tr-highlight">(6 ADIMDA KLASİK PANKEK REHBERİ)</span></p>
            <h2>How Do You Make Classic Pancakes Step by Step? <span class="tr-highlight">(Klasik Pankek İngilizce Adım Adım Nasıl Yapılır?)</span></h2>
            <p class="section-intro"><strong>A fluffy and tender classic pancake is cooked in 6 essential steps.</strong> <span class="tr-highlight">(Kabarık ve yumuşacık bir klasik pankek 6 temel adımda pişirilir; talimatlar doğrudan emir kipiyle kurulur.)</span></p>
            ${buildStepsMetaHTML({
              steps: { val: "6 steps (6 adım)", en: "Follow the 6 sequential cooking steps to prepare fluffy pancakes.", tr: "Kabarık pankek hazırlamak için 6 adımlı pişirme yönergesini sırasıyla takip edin." },
              time: { val: "15 mins (15 dakika)", en: "Cook each side for 2 minutes on medium heat.", tr: "Orta ateşte her iki tarafı yaklaşık 2 dakika pişirin." },
              level: { val: "Level A1–A2 (A1–A2 seviye)", en: "Practices batter, flip, whisk verbs and measurement units.", tr: "Çırpma, dökme, çevirme fiilleri ve mutfak ölçü terimlerini pekiştirir." }
            })}
          </div>
          ${buildStepAccordionHTML([
            {
              number: 1,
              titleEn: "Whisk the Eggs, Milk and Sugar",
              titleTr: "Yumurtaları, Sütü ve Şekeri Çırpın",
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
              titleEn: "Add the Flour and Baking Powder",
              titleTr: "Unu ve Kabartma Tozunu Ekleyin",
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
              titleEn: "Rest the Batter for 10 Minutes",
              titleTr: "Hamuru 10 Dakika Dinlendirin",
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
              titleEn: "Pour the Batter onto a Hot Pan",
              titleTr: "Hamuru Sıcak Tavaya Dökün",
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
              titleEn: "Flip the Pancake When Bubbles Appear",
              titleTr: "Kabarcıklar Oluşunca Pankeki Çevirin",
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
              titleEn: "Serve the Pancakes with Honey or Syrup",
              titleTr: "Pankekleri Bal veya Şurupla Servis Edin",
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
          <p class="eyebrow eyebrow-lg">INGREDIENTS &amp; EQUIPMENT <span class="tr-highlight">(MALZEMELER VE PİŞİRME GEREÇLERİ)</span></p>
          <h2>What Ingredients Do You Need for Fluffy Pancakes? <span class="tr-highlight">(Kabarık Pankek İçin Hangi Malzemeler Gerekir?)</span></h2>
          <p class="section-intro"><strong>Fresh ingredients and proper cooking tools are essential for light, fluffy American pancakes.</strong> <span class="tr-highlight">(Kabarık ve hafif dokulu bir Amerikan pankeki elde etmek için malzemelerin tazeliği ve doğru pişirme ekipmanı büyük önem taşır.)</span></p>

          <div class="grammar-tabs section-tabs">
            <div class="tab-list" role="tablist" aria-label="Malzemeler ve Tava Ekipmanı">
              <button role="tab" aria-selected="true" tabindex="0" data-tab="pancake-ing" class="active"><span class="tab-idx">01</span><span class="tab-title">Core Ingredients (Malzemeler)</span></button>
              <button role="tab" aria-selected="false" tabindex="-1" data-tab="pancake-pan"><span class="tab-idx">02</span><span class="tab-title">Which Pan Works Best? (Hangi Tava?)</span></button>
            </div>
            <div class="tab-panels">
              <div class="tab-panel active" role="tabpanel" data-panel="pancake-ing">
                <h3>Essential Ingredients for Fluffy Pancakes <span class="tr-highlight">(Kabarık Pankek İçin Gerekli Temel Malzemeler)</span></h3>
                ${table(["English Ingredient (İngilizce Malzeme)", "Türkçe Karşılığı", "Quantity (Miktar)", "Function in Cooking (Pişirmedeki İşlevi)"], [
                  ["All-Purpose Flour", "Çok amaçlı un", "200 g (1.5 cups)", "Provides gluten structure and body. (Hamurun ana gövdesini ve dokusunu sağlar.)"],
                  ["Baking Powder", "Kabartma tozu", "10 g (2 tsp)", "Releases carbon dioxide bubbles for fluffiness. (Hava kabarcıkları üreterek kabartır.)"],
                  ["Whole Milk", "Tam yağlı süt", "240 ml (1 cup)", "Hydrates dry flour and creates pourable batter. (Unu ıslatarak akışkan kıvam verir.)"],
                  ["Fresh Egg", "Taze yumurta", "1 large (1 adet)", "Binds ingredients and adds golden color. (Malzemeleri birbirine bağlar ve sarı renk verir.)"],
                  ["Granulated Sugar", "Toz şeker", "30 g (2 tbsp)", "Sweetens lightly and aids browning. (Hafif tat verir ve tavadaki kızarmayı hızlandırır.)"],
                  ["Butter", "Tereyağı", "30 g (2 tbsp)", "Enriches crumb and prevents dryness. (Dokuya zenginlik katar ve kurumayı önler.)"]
                ])}
              </div>
              <div class="tab-panel" role="tabpanel" data-panel="pancake-pan" hidden>
                <h3>Which Pan Works Best for Making Pancakes? <span class="tr-highlight">(Pankek Yapımı İçin Hangi Tava En İyisidir?)</span></h3>
                <p class="section-intro"><strong>Choosing the right surface ensures even browning and effortless flipping.</strong> <span class="tr-highlight">(Pankeklerin eşit renk alması ve yapışmadan kolayca çevrilebilmesi için yüzey seçimi kritiktir.)</span></p>
                ${table(["English Equipment (Ekipman)", "Türkçe Karşılığı", "Used In Step (Kullanıldığı Aşama)", "Advantage in Cooking (Pişirme Avantajı)"], [
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
          <p class="eyebrow eyebrow-lg">CALORIES &amp; NUTRITION FACTS <span class="tr-highlight">(BESİN DEĞERLERİ VE KALORİ)</span></p>
          <h2>How Many Calories Are in a Pancake? <span class="tr-highlight">(1 Pankek Kaç Kalori?)</span></h2>
          <p class="section-intro"><strong>One standard plain pancake contains approximately 175 calories.</strong> <span class="tr-highlight">(1 standart klasik sade pankek yaklaşık 175 kalori (kcal) içerir.)</span> Adding butter, maple syrup or honey can add 50 to 100 calories per serving. <span class="tr-highlight">(Şurup, bal veya tereyağı ilavesi porsiyon başına 50 ila 100 kalori ekleyebilir.)</span></p>

          <div class="grammar-tabs section-tabs">
            <div class="tab-list" role="tablist" aria-label="Besin Değerleri ve Soslar">
              <button role="tab" aria-selected="true" tabindex="0" data-tab="pancake-nutr" class="active"><span class="tab-idx">01</span><span class="tab-title">Nutrition Facts (Besin Değerleri)</span></button>
              <button role="tab" aria-selected="false" tabindex="-1" data-tab="pancake-sauces"><span class="tab-idx">02</span><span class="tab-title">Sauces: Maple Syrup &amp; Honey (Soslar)</span></button>
              <button role="tab" aria-selected="false" tabindex="-1" data-tab="pancake-flip"><span class="tab-idx">03</span><span class="tab-title">Using the Verb 'Flip' (Flip Fiili)</span></button>
            </div>
            <div class="tab-panels">
              <div class="tab-panel active" role="tabpanel" data-panel="pancake-nutr">
                <h3>What Are the Nutrition Facts of Classic Pancakes? <span class="tr-highlight">(Klasik Pankekin Besin Değerleri Nelerdir?)</span></h3>
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
                <h3>Maple Syrup and Honey: English Names for Pancake Sauces <span class="tr-highlight">(Akçaağaç Şurubu ve Bal: Pankek Sosları)</span></h3>
                <p class="section-intro"><strong>In English, sweet sauces poured over pancakes are called toppings or syrups.</strong> <span class="tr-highlight">(İngilizcede pankek üstüne gezdirilen tatlı soslara topping veya syrup denir.)</span></p>
                ${table(["Sauce or Topping", "Türkçe Karşılığı", "Example Sentence (İngilizce - Türkçe)"], [
                  ["Maple syrup", "Akçaağaç şurubu", "Drizzle real Canadian maple syrup over your pancake stack. (Pankek kulenizin üstüne hakiki Kanada akçaağaç şurubu gezdirin.)"],
                  ["Honey", "Süzme bal", "Pure organic honey is a wholesome natural pancake topping. (Saf organik bal, doğal ve besleyici bir pankek sosudur.)"],
                  ["Chocolate syrup", "Çikolata sosu", "Kids love warm chocolate syrup and sliced strawberries. (Çocuklar ılık çikolata sosu ve çilek dilimlerini çok sever.)"],
                  ["Whipped cream", "Krem şanti", "Top each pancake stack with a dollop of whipped cream. (Her pankek kulesinin üstüne bir parça krem şanti koyun.)"]
                ])}
              </div>
              <div class="tab-panel" role="tabpanel" data-panel="pancake-flip" hidden>
                <h3>How Is the Verb 'Flip' Used in Pancake Recipes? <span class="tr-highlight">(Flip Fiili Pankek Tarifinde Nasıl Kullanılır?)</span></h3>
                <p class="section-intro"><strong>The verb 'flip' means turning food over quickly using a flat spatula.</strong> <span class="tr-highlight">(Flip fiili, tavadaki bir yiyeceği düz bir spatula yardımıyla hızla tersyüz etmek anlamına gelir.)</span></p>
                ${table(["Usage Case (Kullanım Durumu)", "İngilizce Cümle", "Türkçe Çeviri"], [
                  ["Golden Rule (Altın Kural)", "Flip the pancake when small bubbles appear on the surface.", "Yüzeyde küçük hava kabarcıkları oluşunca pankeki çevirin."],
                  ["Technique Tip (Püf Noktası)", "Never flip a pancake twice; cook each side once until golden.", "Pankeki asla iki kez çevirmeyin; her iki tarafı birer kez altın sarısı pişirin."],
                  ["Tool Usage (Gereç Kullanımı)", "Use a wide, flexible spatula to flip without breaking.", "Kırmadan çevirmek için geniş ve esnek bir spatula kullanın."]
                ])}
              </div>
            </div>
          </div>
        </section>

        <!-- 6. ÖLÇÜ BİRİMLERİ & MUTFAK KELİMELERİ -->
        <section id="olculer">
          <p class="eyebrow eyebrow-lg">UNITS OF MEASUREMENT &amp; VOCABULARY <span class="tr-highlight">(ÖLÇÜ BİRİMLERİ VE KELİMELER)</span></p>
          <h2>Measurement Units Used in Pancake Recipes <span class="tr-highlight">(Pankek Tariflerinde Kullanılan Ölçü Birimleri)</span></h2>
          <p class="section-intro"><strong>Pancake recipes express ingredients using both metric and imperial kitchen units.</strong> <span class="tr-highlight">(Pankek tariflerinde un, süt ve şeker miktarları hem metrik hem de emperyal ölçü birimleriyle ifade edilir.)</span></p>

          <div class="grammar-tabs section-tabs">
            <div class="tab-list" role="tablist" aria-label="Ölçü Birimleri ve Kelimeler">
              <button role="tab" aria-selected="true" tabindex="0" data-tab="pancake-units" class="active"><span class="tab-idx">01</span><span class="tab-title">Imperial Units (Ölçü Birimleri)</span></button>
              <button role="tab" aria-selected="false" tabindex="-1" data-tab="pancake-metric"><span class="tab-idx">02</span><span class="tab-title">Metric Units (Gram ve Litre)</span></button>
              <button role="tab" aria-selected="false" tabindex="-1" data-tab="pancake-vocab"><span class="tab-idx">03</span><span class="tab-title">Kitchen Vocabulary (10 Kelime)</span></button>
            </div>
            <div class="tab-panels">
              <div class="tab-panel active" role="tabpanel" data-panel="pancake-units">
                <h3>Tablespoon, Teaspoon, Cup: English Kitchen Units <span class="tr-highlight">(İngilizce Ölçü Birimleri ve Türkçe Karşılıkları)</span></h3>
                ${table(["English Unit (İngilizce Birim)", "Abbreviation (Kısaltma)", "Türkçe Karşılığı", "Metric Equivalent (Metrik Karşılık)"], [
                  ["Cup", "cup", "Su bardağı", "240 ml sıvı veya 130 g un"],
                  ["Tablespoon", "tbsp", "Yemek kaşığı", "15 ml veya 15 g şeker"],
                  ["Teaspoon", "tsp", "Tatlı veya çay kaşığı", "5 ml veya 5 g kabartma tozu"],
                  ["Pinch", "pinch", "Bir tutam (Parmak ucu)", "1 gramdan az tuz"],
                  ["Ladle", "ladle", "Yemek veya çorba kepçesi", "60 ml hamur dökme ölçüsü"]
                ])}
              </div>
              <div class="tab-panel" role="tabpanel" data-panel="pancake-metric" hidden>
                <h3>How Are Grams and Liters Written in English Recipes? <span class="tr-highlight">(Gram ve Litre İngilizce Tariflerde Nasıl Kullanılır?)</span></h3>
                <p class="section-intro"><strong>Metric units gram (g), milliliter (ml), and liter (l) follow numbers without periods.</strong> <span class="tr-highlight">(İngilizce metinlerde gram (g), mililitre (ml) ve litre (l) kısaltmaları nokta konulmadan sayıdan hemen sonra boşlukla yazılır.)</span></p>
                ${table(["Metrik Terim", "İngilizce Yazılışı", "Örnek Tarif Cümlesi", "Türkçe Karşılığı"], [
                  ["Gram", "g (gram)", "Add 200 g of all-purpose flour.", "200 g çok amaçlı un ekleyin."],
                  ["Milliliter", "ml (milliliter)", "Pour 240 ml of whole milk.", "240 ml tam yağlı süt dökün."],
                  ["Liter", "l (liter)", "Bring 1 l of water to boil.", "1 litre suyu kaynatın."],
                  ["Kilogram", "kg (kilogram)", "Store in a 1 kg airtight flour tin.", "1 kg hava almaz un kutusunda saklayın."]
                ])}
              </div>
              <div class="tab-panel" role="tabpanel" data-panel="pancake-vocab" hidden>
                <h3>Key English Kitchen Vocabulary in Pancake Recipes <span class="tr-highlight">(Pankek Tarifinde Geçen Temel Mutfak Kelimeleri)</span></h3>
                ${table(["English Term (İngilizce Terim)", "Türkçe Karşılığı", "Example in Pancake Making (Pankek Yapımında Örnek Cümle)"], [
                  ["Batter", "Akışkan unlu hamur", "The batter should be thick yet pourable."],
                  ["Fluffy", "Kabarık ve pofuduk", "Baking powder makes the pancakes fluffy."],
                  ["Griddle", "Düz pişirme sacı veya tavası", "Grease the griddle with a drop of butter."],
                  ["Spatula", "Mutfak spatulası", "Slide the spatula under the pancake."],
                  ["Bubbles", "Hava kabarcıkları", "Look for bubbles popping on the wet surface."],
                  ["Golden-brown", "Altın sarısı veya nar gibi", "Cook each side until lightly golden-brown."],
                  ["Topping", "Üst sos ve süsleme", "Maple syrup is the most classic topping."],
                  ["Lump", "Hamur topağı", "Do not worry about small lumps in pancake batter."],
                  ["Overmix", "Aşırı çırpmak veya yoğurmak", "Do not overmix or pancakes will become tough."],
                  ["Stack", "Üst üste dizmek", "Stack warm pancakes high on a breakfast platter."]
                ])}
              </div>
            </div>
          </div>
        </section>

        <!-- 7. DİL KURALLARI -->
        <section id="dil-kurallari">
          <p class="eyebrow eyebrow-lg">RECIPE GRAMMAR &amp; USAGE <span class="tr-highlight">(TARİF DİL KURALLARI VE ANLATIM BİÇİMİ)</span></p>
          <h2>Grammar and Usage Rules for English Pancake Recipes <span class="tr-highlight">(Pankek Tarifi Dil Kuralları)</span></h2>
          <p class="section-intro"><strong>English cooking recipes rely on imperatives, chronological sequence adverbs, and countability rules.</strong> <span class="tr-highlight">(İngilizce tarifler emir kipi, kronolojik sıra zarfları ve sayılabilen/sayılamayan isim kurallarıyla kurulur.)</span></p>

          <div class="grammar-tabs section-tabs">
            <div class="tab-list" role="tablist" aria-label="Tarif Dil Kuralları">
              <button role="tab" aria-selected="true" tabindex="0" data-tab="pancake-imperatives" class="active"><span class="tab-idx">01</span><span class="tab-title">Imperatives (Emir Kipi)</span></button>
              <button role="tab" aria-selected="false" tabindex="-1" data-tab="pancake-sequence"><span class="tab-idx">02</span><span class="tab-title">Sequence Adverbs (Sıra Zarfları)</span></button>
              <button role="tab" aria-selected="false" tabindex="-1" data-tab="pancake-rules"><span class="tab-idx">03</span><span class="tab-title">Countable &amp; Uncountable (Sayılabilen ve Sayılamayan)</span></button>
            </div>
            <div class="tab-panels">
              <div class="tab-panel active" role="tabpanel" data-panel="pancake-imperatives">
                <h3>How Are Imperatives Used in Pancake Recipes? <span class="tr-highlight">(Pankek Tarifinde Emir Kipi Nasıl Kullanılır?)</span></h3>
                <p class="section-intro"><strong>Imperatives start with base verbs without subjects to provide clear step-by-step culinary instructions.</strong> <span class="tr-highlight">(Emir kipi öznesiz olarak doğrudan fiilin yalın haliyle başlar ve mutfak yönergesi verir.)</span></p>
                ${table(["Imperative Sentence (Emir Kipi)", "Cooking Action (Mutfak Eylemi)", "Türkçe Çeviri"], [
                  ["Whisk the egg and milk in a bowl.", "Whisk (Çırpmak)", "Yumurta ve sütü bir kasede çırpın."],
                  ["Sift the flour and baking powder together.", "Sift (Elemek)", "Un ve kabartma tozunu birlikte eleyin."],
                  ["Pour a small ladle onto the hot pan.", "Pour (Dökmek)", "Sıcak tavaya küçük bir kepçe dökün."],
                  ["Flip the pancake when bubbles form.", "Flip (Ters çevirmek)", "Kabarcıklar oluşunca pankeki çevirin."],
                  ["Do not overmix the batter.", "Negative Imperative (Olumsuz)", "Hamuru aşırı çırpmayın veya hırpalamayın."]
                ])}
              </div>
              <div class="tab-panel" role="tabpanel" data-panel="pancake-sequence" hidden>
                <h3>Sequence Adverbs: First, Then, After That, Finally <span class="tr-highlight">(Sıra Zarfları)</span></h3>
                <p class="section-intro"><strong>Sequence adverbs guide learners through chronological cooking stages in English curriculum.</strong> <span class="tr-highlight">(Sıra zarfları adımların zaman sırasını takip etmeyi kolaylaştırır.)</span></p>
                ${table(["Sequence Adverb (Sıra Zarfı)", "Function (İşlev)", "Example Sentence (Örnek Cümle)"], [
                  ["First (İlk olarak)", "Başlangıç adımı", "First, whisk the egg, milk and sugar until smooth. (İlk olarak yumurta, süt ve şekeri pürüzsüzce çırpın.)"],
                  ["Then (Ardından)", "İkinci adım", "Then, sift in the dry ingredients. (Ardından kuru malzemeleri eleyerek ekleyin.)"],
                  ["Next (Sonra)", "Gelişme adımı", "Next, pour a ladle of batter onto the hot pan. (Sonra sıcak tavaya bir kepçe hamur dökün.)"],
                  ["After that (Daha sonra)", "Çevirme adımı", "After that, flip the pancake when bubbles pop. (Daha sonra kabarcıklar patlayınca pankeki çevirin.)"],
                  ["Finally (Son olarak)", "Servis adımı", "Finally, drizzle warm maple syrup and serve. (Son olarak ılık akçaağaç şurubu gezdirip servis edin.)"]
                ])}
              </div>
              <div class="tab-panel" role="tabpanel" data-panel="pancake-rules" hidden>
                <h3>Countable and Uncountable Nouns in Pancake Recipes <span class="tr-highlight">(Pankek Tarifinde Sayılabilen ve Sayılamayan İsimler)</span></h3>
                <p class="section-intro"><strong>Liquid and powdered ingredients are uncountable, whereas whole eggs and fruits are countable nouns in English.</strong> <span class="tr-highlight">(Sıvı ve toz malzemeler sayılamazken tane ile sayılan meyve ve yumurtalar sayılabilir kabul edilir.)</span></p>
                ${table(["Grammar Rule (Dil Kuralı)", "Explanation & Example (Açıklama ve Örnek)", "Kitchen Context (Mutfak Kullanımı)"], [
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
          <p class="eyebrow" style="color:#93c5fd;">PRACTICE &amp; QUIZ <span class="tr-highlight">(KAZANIM KONTROLÜ VE ALIŞTIRMALAR)</span></p>
          <h2 style="color:#ffffff;">Pancake Recipe Practice Quiz <span class="tr-highlight">(8. Sınıf İngilizce Pankek Testi)</span></h2>
          <p class="section-intro" style="color:#cbd5e1;">Test your knowledge of pancake preparation verbs, cooking actions, and recipe imperatives with this interactive quiz. <span class="tr-highlight">(Öğrendiğiniz pankek hazırlama eylemlerini, mutfak fiillerini ve emir cümlelerini bu interaktif test ile pekiştirin.)</span></p>

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



function renderPilavPage() {
  const p = pilavData.page;
  const overviewTbl = p.overviewVariationsTable;

  const bTerms = pilavData.contentBlocks.find(b => b.id === "kavramlar");
  const bVariations = pilavData.contentBlocks.find(b => b.id === "tarifler");
  const bSteps = pilavData.contentBlocks.find(b => b.id === "klasik-pilav");
  const bIng = pilavData.contentBlocks.find(b => b.id === "malzemeler-ve-ekipman");
  const bCal = pilavData.contentBlocks.find(b => b.id === "besin-degerleri");
  const bUnits = pilavData.contentBlocks.find(b => b.id === "olculer");
  const bGrammar = pilavData.contentBlocks.find(b => b.id === "dil-kurallari");
  const bQuiz = pilavData.contentBlocks.find(b => b.id === "alistirma");

  document.title = p.title;
  setStructuredData({
    "@context": "https://schema.org",
    "@type": "Recipe",
    name: p.h1,
    image: [p.heroImage],
    author: { "@type": "Organization", name: "Konuşarak Öğren" },
    datePublished: "2026-09-26",
    description: p.metaDescription,
    prepTime: "PT10M",
    cookTime: "PT15M",
    totalTime: "PT25M",
    recipeYield: p.servings,
    recipeCategory: p.label,
    recipeCuisine: "Türk",
    nutrition: { "@type": "NutritionInformation", calories: "260 calories" },
    recipeIngredient: [
      "360 g Baldo rice",
      "45 g butter",
      "15 ml olive oil",
      "720 ml hot broth",
      "8 g salt"
    ],
    recipeInstructions: bSteps.accordion.map((s, idx) => ({
      "@type": "HowToStep",
      position: idx + 1,
      name: s.titleEn,
      text: s.sentenceEn
    }))
  });

  root.innerHTML = `<article class="pilav-guide recipe-guide">
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
        <p class="lede"><strong>Authentic Turkish Rice Pilaf Recipe.</strong> <span class="tr-highlight">(${p.introTurkish})</span></p>
        <div class="article-meta">
          <span class="author-mark" aria-hidden="true">KO</span>
          <span><strong>${p.author}</strong><small>Yayınlanma tarihi: <time datetime="2026-09-26">${p.publishDate}</time></small></span>
        </div>
      </div>
      <figure class="hero-visual">
        <img src="${p.heroImage}" alt="Bakır sahanda dumanı tüten tereyağlı ve şehriyeli geleneksel Türk pirinç pilavı">
        <figcaption>${formatBilingualText("Turkish Rice Pilaf (Geleneksel Türk Pirinç Pilavı)")}</figcaption>
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
      <p class="eyebrow eyebrow-lg">${formatBilingualText("OVERVIEW & COMPARISON (TANIM VE ÇEŞİTLER KARŞILAŞTIRMASI)")}</p>
      <h2 class="definition-heading">${formatBilingualText("English Rice Pilaf Recipes: Variations, Key Ingredients and Cooking Steps (İngilizce Pilav Çeşitleri, Malzemeleri ve Pişirme Adımları)")}</h2>
      <p class="section-intro">${formatBilingualText(overviewTbl.intro)}</p>
      ${table(overviewTbl.headers, overviewTbl.rows, overviewTbl.caption)}
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
          <p class="eyebrow eyebrow-lg">${formatBilingualText(bTerms.eyebrow)}</p>
          <h2>${formatBilingualText(bTerms.heading)}</h2>
          
          ${buildAppBannerHTML("Pilav")}

          <p class="section-intro">${formatBilingualText(bTerms.intro)}</p>

          <div class="grammar-tabs section-tabs">
            <div class="tab-list" role="tablist" aria-label="Pilav Terimleri ve Fiiller">
              <button role="tab" aria-selected="true" tabindex="0" data-tab="pilav-core-terms" class="active"><span class="tab-idx">01</span><span class="tab-title">Core Concepts (Temel Kavramlar)</span></button>
              <button role="tab" aria-selected="false" tabindex="-1" data-tab="pilav-origin"><span class="tab-idx">02</span><span class="tab-title">Origin &amp; World Rice (Pilaf Kökeni)</span></button>
              <button role="tab" aria-selected="false" tabindex="-1" data-tab="pilav-verbs"><span class="tab-idx">03</span><span class="tab-title">Verbs (Rinse, Saute, Boil, Simmer)</span></button>
            </div>
            <div class="tab-panels">
              <div class="tab-panel active" role="tabpanel" data-panel="pilav-core-terms">
                <h3>${formatBilingualText(bTerms.coreConcepts.heading)}</h3>
                <p class="section-intro">${formatBilingualText(bTerms.coreConcepts.intro)}</p>
                ${table(bTerms.coreConcepts.headers, bTerms.coreConcepts.rows)}
              </div>
              <div class="tab-panel" role="tabpanel" data-panel="pilav-origin" hidden>
                <h3>${formatBilingualText(bTerms.origin.heading)}</h3>
                <p class="section-intro">${formatBilingualText(bTerms.origin.intro)}</p>
                ${table(bTerms.origin.headers, bTerms.origin.rows)}
              </div>
              <div class="tab-panel" role="tabpanel" data-panel="pilav-verbs" hidden>
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

        <!-- 3. 6 ADIMDA BUTTERED RICE REHBERİ -->
        <section id="klasik-pilav">
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
            <div class="tab-list" role="tablist" aria-label="Malzeme ve Ekipman Tabloları">
              <button role="tab" aria-selected="true" tabindex="0" data-tab="pilav-ing" class="active"><span class="tab-idx">01</span><span class="tab-title">Ingredients (Malzemeler)</span></button>
              <button role="tab" aria-selected="false" tabindex="-1" data-tab="pilav-eq"><span class="tab-idx">02</span><span class="tab-title">Cookware (Pişirme Gereçleri)</span></button>
            </div>
            <div class="tab-panels">
              <div class="tab-panel active" role="tabpanel" data-panel="pilav-ing">
                <h3>${formatBilingualText(bIng.ingredientsTable.heading)}</h3>
                <p class="section-intro">${formatBilingualText(bIng.ingredientsTable.intro)}</p>
                ${table(bIng.ingredientsTable.headers, bIng.ingredientsTable.rows)}
              </div>
              <div class="tab-panel" role="tabpanel" data-panel="pilav-eq" hidden>
                <h3>${formatBilingualText(bIng.cookwareTable.heading)}</h3>
                <p class="section-intro">${formatBilingualText(bIng.cookwareTable.intro)}</p>
                ${table(bIng.cookwareTable.headers, bIng.cookwareTable.rows)}
              </div>
            </div>
          </div>
        </section>

        <!-- 5. BESİN DEĞERLERİ VE FARKLAR -->
        <section id="besin-degerleri">
          <p class="eyebrow eyebrow-lg">${formatBilingualText(bCal.eyebrow)}</p>
          <h2>${formatBilingualText(bCal.heading)}</h2>
          <p class="section-intro">${formatBilingualText(bCal.intro)}</p>

          <div class="grammar-tabs section-tabs">
            <div class="tab-list" role="tablist" aria-label="Besin Değerleri ve Karşılaştırma">
              <button role="tab" aria-selected="true" tabindex="0" data-tab="pilav-cal" class="active"><span class="tab-idx">01</span><span class="tab-title">Calories (Kalori)</span></button>
              <button role="tab" aria-selected="false" tabindex="-1" data-tab="pilav-nut"><span class="tab-idx">02</span><span class="tab-title">Nutrition Facts (Besin Değerleri)</span></button>
              <button role="tab" aria-selected="false" tabindex="-1" data-tab="pilav-comp"><span class="tab-idx">03</span><span class="tab-title">Pilaf vs Steamed Rice (Karşılaştırma)</span></button>
              <button role="tab" aria-selected="false" tabindex="-1" data-tab="pilav-bulgur-comp"><span class="tab-idx">04</span><span class="tab-title">Bulgur Pilaf (Bulgur Farkı)</span></button>
            </div>
            <div class="tab-panels">
              <div class="tab-panel active" role="tabpanel" data-panel="pilav-cal">
                <h3>${formatBilingualText(bCal.caloriesTable.heading)}</h3>
                <p class="section-intro">${formatBilingualText(bCal.caloriesTable.intro)}</p>
                ${table(bCal.caloriesTable.headers, bCal.caloriesTable.rows)}
              </div>
              <div class="tab-panel" role="tabpanel" data-panel="pilav-nut" hidden>
                <h3>${formatBilingualText(bCal.nutritionTable.heading)}</h3>
                <p class="section-intro">${formatBilingualText(bCal.nutritionTable.intro)}</p>
                ${table(bCal.nutritionTable.headers, bCal.nutritionTable.rows)}
              </div>
              <div class="tab-panel" role="tabpanel" data-panel="pilav-comp" hidden>
                <h3>${formatBilingualText(bCal.steamedDiffTable.heading)}</h3>
                <p class="section-intro">${formatBilingualText(bCal.steamedDiffTable.intro)}</p>
                ${table(bCal.steamedDiffTable.headers, bCal.steamedDiffTable.rows)}
              </div>
              <div class="tab-panel" role="tabpanel" data-panel="pilav-bulgur-comp" hidden>
                <h3>${formatBilingualText(bCal.bulgurDiffTable.heading)}</h3>
                <p class="section-intro">${formatBilingualText(bCal.bulgurDiffTable.intro)}</p>
                ${table(bCal.bulgurDiffTable.headers, bCal.bulgurDiffTable.rows)}
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
              <button role="tab" aria-selected="true" tabindex="0" data-tab="pilav-units" class="active"><span class="tab-idx">01</span><span class="tab-title">Cup, Tbsp, Tsp (Ölçüler)</span></button>
              <button role="tab" aria-selected="false" tabindex="-1" data-tab="pilav-vocab"><span class="tab-idx">02</span><span class="tab-title">Kitchen Glossary (10 Kelime)</span></button>
              <button role="tab" aria-selected="false" tabindex="-1" data-tab="pilav-metric"><span class="tab-idx">03</span><span class="tab-title">Metric &amp; Imperial (Dönüşümler)</span></button>
            </div>
            <div class="tab-panels">
              <div class="tab-panel active" role="tabpanel" data-panel="pilav-units">
                <h3>${formatBilingualText(bUnits.unitsTable.heading)}</h3>
                <p class="section-intro">${formatBilingualText(bUnits.unitsTable.intro)}</p>
                ${table(bUnits.unitsTable.headers, bUnits.unitsTable.rows)}
              </div>
              <div class="tab-panel" role="tabpanel" data-panel="pilav-vocab" hidden>
                <h3>${formatBilingualText(bUnits.glossaryTable.heading)}</h3>
                <p class="section-intro">${formatBilingualText(bUnits.glossaryTable.intro)}</p>
                ${table(bUnits.glossaryTable.headers, bUnits.glossaryTable.rows)}
              </div>
              <div class="tab-panel" role="tabpanel" data-panel="pilav-metric" hidden>
                <h3>${formatBilingualText(bUnits.metricTable.heading)}</h3>
                <p class="section-intro">${formatBilingualText(bUnits.metricTable.intro)}</p>
                ${table(bUnits.metricTable.headers, bUnits.metricTable.rows)}
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
            <div class="tab-list" role="tablist" aria-label="Pilav Dil Kuralları Sekmeleri">
              <button role="tab" aria-selected="true" tabindex="0" data-tab="pilav-imperatives" class="active"><span class="tab-idx">01</span><span class="tab-title">Imperatives (Emir Kipi)</span></button>
              <button role="tab" aria-selected="false" tabindex="-1" data-tab="pilav-sequence"><span class="tab-idx">02</span><span class="tab-title">Sequence Adverbs (Sıra Zarfları)</span></button>
              <button role="tab" aria-selected="false" tabindex="-1" data-tab="pilav-rules"><span class="tab-idx">03</span><span class="tab-title">Grammar Rules (Dil Kuralları)</span></button>
            </div>
            <div class="tab-panels">
              <div class="tab-panel active" role="tabpanel" data-panel="pilav-imperatives">
                <h3>${formatBilingualText(bGrammar.imperativesTable.heading)}</h3>
                <p class="section-intro">${formatBilingualText(bGrammar.imperativesTable.intro)}</p>
                ${table(bGrammar.imperativesTable.headers, bGrammar.imperativesTable.rows)}
              </div>
              <div class="tab-panel" role="tabpanel" data-panel="pilav-sequence" hidden>
                <h3>${formatBilingualText(bGrammar.sequenceTable.heading)}</h3>
                <p class="section-intro">${formatBilingualText(bGrammar.sequenceTable.intro)}</p>
                ${table(bGrammar.sequenceTable.headers, bGrammar.sequenceTable.rows)}
              </div>
              <div class="tab-panel" role="tabpanel" data-panel="pilav-rules" hidden>
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



function renderCorbaPage() {
  const p = corbaData.page;
  const overviewTbl = p.overviewVariationsTable;

  const bTerms = corbaData.contentBlocks.find(b => b.id === "kavramlar");
  const bVariations = corbaData.contentBlocks.find(b => b.id === "tarifler");
  const bSteps = corbaData.contentBlocks.find(b => b.id === "klasik-corba");
  const bIng = corbaData.contentBlocks.find(b => b.id === "malzemeler-ve-ekipman");
  const bCal = corbaData.contentBlocks.find(b => b.id === "besin-degerleri");
  const bUnits = corbaData.contentBlocks.find(b => b.id === "olculer");
  const bGrammar = corbaData.contentBlocks.find(b => b.id === "dil-kurallari");
  const bQuiz = corbaData.contentBlocks.find(b => b.id === "alistirma");

  document.title = p.title;
  setStructuredData({
    "@context": "https://schema.org",
    "@type": "Recipe",
    name: p.h1,
    image: [p.heroImage],
    author: { "@type": "Organization", name: "Konuşarak Öğren" },
    datePublished: "2026-10-01",
    description: p.metaDescription,
    prepTime: "PT10M",
    cookTime: "PT25M",
    totalTime: "PT35M",
    recipeYield: p.servings,
    recipeCategory: p.label,
    recipeCuisine: "Türk",
    nutrition: { "@type": "NutritionInformation", calories: "180 calories" },
    recipeIngredient: [
      "300 g red lentils",
      "120 g yellow onion",
      "80 g carrot",
      "30 g butter",
      "15 ml olive oil",
      "1.4 l hot broth",
      "6 g sea salt",
      "2 g ground cumin"
    ],
    recipeInstructions: bSteps.accordion.map((s, idx) => ({
      "@type": "HowToStep",
      position: idx + 1,
      name: s.titleEn,
      text: s.sentenceEn
    }))
  });

  root.innerHTML = `<article class="corba-guide recipe-guide">
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
        <p class="lede"><strong>Authentic Turkish Soup Recipes.</strong> <span class="tr-highlight">(${p.introTurkish})</span></p>
        <div class="article-meta">
          <span class="author-mark" aria-hidden="true">KO</span>
          <span><strong>${p.author}</strong><small>Yayınlanma tarihi: <time datetime="2026-10-01">${p.publishDate}</time></small></span>
        </div>
      </div>
      <figure class="hero-visual">
        <img src="${p.heroImage}" alt="Geleneksel bakır kasede dumanı tüten tereyağlı ve limonlu Türk kırmızı mercimek çorbası">
        <figcaption>${formatBilingualText("Turkish Soup Recipe (Geleneksel Türk Çorba Tarifleri)")}</figcaption>
      </figure>
      ${buildFactsCardHTML({
        title: "Çorba",
        prep: { val: "10 mins (10 dk)", en: "Chopping vegetables and washing lentils takes 10 minutes.", tr: "Sebzeleri doğrama ve mercimeği yıkama 10 dakika sürer." },
        cook: { val: "25 mins (25 dk)", en: "Simmering until tender and pureeing takes 25 minutes.", tr: "Mercimekler yumuşayana dek kaynatma ve püreleme 25 dakika sürer." },
        servings: { val: "4-6 servings (4-6 kişilik)", en: "Yields 4 to 6 hearty bowls for a warm dinner starter.", tr: "Akşam yemekleri için 4-6 doyurucu kase sunar." },
        level: { val: "A1–A2 (Temel Seviye)", en: "Practices chop, saute, boil, simmer, blend verbs and ratios.", tr: "Doğrama, kavurma, kaynatma, püre yapma fiilleri ve ölçüleri pekiştirir." }
      })}
    </header>

    <section class="hero-overview-table" id="definition-variations">
      <p class="eyebrow eyebrow-lg">${formatBilingualText("OVERVIEW & COMPARISON (TANIM VE ÇEŞİTLER KARŞILAŞTIRMASI)")}</p>
      <h2 class="definition-heading">${formatBilingualText("English Soup Recipes: Variations, Key Ingredients and Cooking Steps (İngilizce Çorba Çeşitleri, Malzemeleri ve Pişirme Adımları)")}</h2>
      <p class="section-intro">${formatBilingualText(overviewTbl.intro)}</p>
      ${table(overviewTbl.headers, overviewTbl.rows, overviewTbl.caption)}
    </section>

    <div class="page-grid">
      <nav class="toc" aria-label="İçindekiler">
        <a href="#kavramlar" data-scroll-target="kavramlar">Terms (Kavramlar)</a>
        <a href="#tarifler" data-scroll-target="tarifler">Variations (Tarifler)</a>
        <a href="#klasik-corba" data-scroll-target="klasik-corba">6 Steps (6 Adım)</a>
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
          
          ${buildAppBannerHTML("Çorba")}

          <p class="section-intro">${formatBilingualText(bTerms.intro)}</p>

          <div class="grammar-tabs section-tabs">
            <div class="tab-list" role="tablist" aria-label="Çorba Terimleri ve Fiiller">
              <button role="tab" aria-selected="true" tabindex="0" data-tab="corba-core-terms" class="active"><span class="tab-idx">01</span><span class="tab-title">Core Concepts (Temel Kavramlar)</span></button>
              <button role="tab" aria-selected="false" tabindex="-1" data-tab="corba-origin"><span class="tab-idx">02</span><span class="tab-title">Soup vs Stew &amp; Broth (Kıvam Farkları)</span></button>
              <button role="tab" aria-selected="false" tabindex="-1" data-tab="corba-verbs"><span class="tab-idx">03</span><span class="tab-title">Verbs (Chop, Boil, Blend, Simmer)</span></button>
            </div>
            <div class="tab-panels">
              <div class="tab-panel active" role="tabpanel" data-panel="corba-core-terms">
                <h3>${formatBilingualText(bTerms.coreConcepts.heading)}</h3>
                <p class="section-intro">${formatBilingualText(bTerms.coreConcepts.intro)}</p>
                ${table(bTerms.coreConcepts.headers, bTerms.coreConcepts.rows)}
              </div>
              <div class="tab-panel" role="tabpanel" data-panel="corba-origin" hidden>
                <h3>${formatBilingualText(bTerms.origin.heading)}</h3>
                <p class="section-intro">${formatBilingualText(bTerms.origin.intro)}</p>
                ${table(bTerms.origin.headers, bTerms.origin.rows)}
              </div>
              <div class="tab-panel" role="tabpanel" data-panel="corba-verbs" hidden>
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

          <nav class="variant-subnav" aria-label="Çorba Çeşitleri">
            <a href="#lentil-soup" class="variant-nav-btn active" title="Red Lentil Soup (Kırmızı Mercimek Çorbası)">
              <span>1. Red Lentil Soup</span>
              <div class="variant-tooltip">
                <span class="tooltip-en">1. Red Lentil Soup Recipe</span>
                <span class="tooltip-tr">(Kırmızı Mercimek Çorbası Tarifi)</span>
              </div>
            </a>
            <a href="#tomato-soup" class="variant-nav-btn" title="Creamy Tomato Soup (Kremalı Domates Çorbası)">
              <span>2. Tomato Soup</span>
              <div class="variant-tooltip">
                <span class="tooltip-en">2. Creamy Tomato Soup Recipe</span>
                <span class="tooltip-tr">(Kremalı Domates Çorbası Tarifi)</span>
              </div>
            </a>
            <a href="#chicken-soup" class="variant-nav-btn" title="Chicken Noodle Soup (Tavuklu Şehriye Çorbası)">
              <span>3. Chicken Soup</span>
              <div class="variant-tooltip">
                <span class="tooltip-en">3. Chicken Noodle Soup Recipe</span>
                <span class="tooltip-tr">(Tavuklu Şehriye Çorbası Tarifi)</span>
              </div>
            </a>
            <a href="#yayla-soup" class="variant-nav-btn" title="Turkish Yogurt Soup (Yayla Çorbası)">
              <span>4. Yayla Soup</span>
              <div class="variant-tooltip">
                <span class="tooltip-en">4. Turkish Yogurt Soup Recipe</span>
                <span class="tooltip-tr">(Geleneksel Yayla Çorbası Tarifi)</span>
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
                      val: "30-35 mins (30-35 dakika)",
                      en: `${variantEn} takes 30-35 mins of total preparation and cooking time.`,
                      tr: `${variantTr} toplam 30-35 dakika hazırlık ve pişirme süresinde tamamlanır.`
                    },
                    servings: {
                      val: "4-6 servings (4-6 kişilik)",
                      en: `${variantEn} yields 4-6 fresh servings for warm comfort.`,
                      tr: `${variantTr} başlangıç ve akşam yemeği için 4-6 kişilik taze porsiyon sunar.`
                    },
                    count: {
                      val: `${v.ingredients.length} ingredients (${v.ingredients.length} malzeme)`,
                      en: `${variantEn} requires ${v.ingredients.length} pantry ingredients for authentic velvety texture.`,
                      tr: `${variantTr} orijinal kadifemsi kıvamı için ${v.ingredients.length} temel malzeme gerektirir.`
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

        <!-- 3. 6 ADIMDA KLASİK MERCİMEK ÇORBASI -->
        <section id="klasik-corba">
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
            <div class="tab-list" role="tablist" aria-label="Malzeme ve Ekipman Tabloları">
              <button role="tab" aria-selected="true" tabindex="0" data-tab="corba-ing" class="active"><span class="tab-idx">01</span><span class="tab-title">Ingredients (Malzemeler)</span></button>
              <button role="tab" aria-selected="false" tabindex="-1" data-tab="corba-eq"><span class="tab-idx">02</span><span class="tab-title">Kitchen Tools (Mutfak Aletleri)</span></button>
            </div>
            <div class="tab-panels">
              <div class="tab-panel active" role="tabpanel" data-panel="corba-ing">
                <h3>${formatBilingualText(bIng.ingredientsTable.heading)}</h3>
                <p class="section-intro">${formatBilingualText(bIng.ingredientsTable.intro)}</p>
                ${table(bIng.ingredientsTable.headers, bIng.ingredientsTable.rows)}
              </div>
              <div class="tab-panel" role="tabpanel" data-panel="corba-eq" hidden>
                <h3>${formatBilingualText(bIng.cookwareTable.heading)}</h3>
                <p class="section-intro">${formatBilingualText(bIng.cookwareTable.intro)}</p>
                ${table(bIng.cookwareTable.headers, bIng.cookwareTable.rows)}
              </div>
            </div>
          </div>
        </section>

        <!-- 5. BESİN DEĞERLERİ VE FARKLAR -->
        <section id="besin-degerleri">
          <p class="eyebrow eyebrow-lg">${formatBilingualText(bCal.eyebrow)}</p>
          <h2>${formatBilingualText(bCal.heading)}</h2>
          <p class="section-intro">${formatBilingualText(bCal.intro)}</p>

          <div class="grammar-tabs section-tabs">
            <div class="tab-list" role="tablist" aria-label="Besin Değerleri ve Karşılaştırma">
              <button role="tab" aria-selected="true" tabindex="0" data-tab="corba-cal" class="active"><span class="tab-idx">01</span><span class="tab-title">Calories (Kalori Dağılımı)</span></button>
              <button role="tab" aria-selected="false" tabindex="-1" data-tab="corba-nut"><span class="tab-idx">02</span><span class="tab-title">Nutrition Facts (Besin Değerleri)</span></button>
              <button role="tab" aria-selected="false" tabindex="-1" data-tab="corba-lentil-comp"><span class="tab-idx">03</span><span class="tab-title">Red vs Green Lentils (Mercimek Farkı)</span></button>
              <button role="tab" aria-selected="false" tabindex="-1" data-tab="corba-blend-comp"><span class="tab-idx">04</span><span class="tab-title">Blend vs Puree (Fiil Kullanımı)</span></button>
            </div>
            <div class="tab-panels">
              <div class="tab-panel active" role="tabpanel" data-panel="corba-cal">
                <h3>${formatBilingualText(bCal.caloriesTable.heading)}</h3>
                <p class="section-intro">${formatBilingualText(bCal.caloriesTable.intro)}</p>
                ${table(bCal.caloriesTable.headers, bCal.caloriesTable.rows)}
              </div>
              <div class="tab-panel" role="tabpanel" data-panel="corba-nut" hidden>
                <h3>${formatBilingualText(bCal.nutritionTable.heading)}</h3>
                <p class="section-intro">${formatBilingualText(bCal.nutritionTable.intro)}</p>
                ${table(bCal.nutritionTable.headers, bCal.nutritionTable.rows)}
              </div>
              <div class="tab-panel" role="tabpanel" data-panel="corba-lentil-comp" hidden>
                <h3>${formatBilingualText(bCal.lentilDiffTable.heading)}</h3>
                <p class="section-intro">${formatBilingualText(bCal.lentilDiffTable.intro)}</p>
                ${table(bCal.lentilDiffTable.headers, bCal.lentilDiffTable.rows)}
              </div>
              <div class="tab-panel" role="tabpanel" data-panel="corba-blend-comp" hidden>
                <h3>${formatBilingualText(bCal.blendPureeTable.heading)}</h3>
                <p class="section-intro">${formatBilingualText(bCal.blendPureeTable.intro)}</p>
                ${table(bCal.blendPureeTable.headers, bCal.blendPureeTable.rows)}
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
              <button role="tab" aria-selected="true" tabindex="0" data-tab="corba-units" class="active"><span class="tab-idx">01</span><span class="tab-title">Cup, Tbsp, Tsp (Ölçüler)</span></button>
              <button role="tab" aria-selected="false" tabindex="-1" data-tab="corba-vocab"><span class="tab-idx">02</span><span class="tab-title">Kitchen Glossary (10 Kelime)</span></button>
              <button role="tab" aria-selected="false" tabindex="-1" data-tab="corba-metric"><span class="tab-idx">03</span><span class="tab-title">Metric &amp; Imperial (Dönüşümler)</span></button>
            </div>
            <div class="tab-panels">
              <div class="tab-panel active" role="tabpanel" data-panel="corba-units">
                <h3>${formatBilingualText(bUnits.unitsTable.heading)}</h3>
                <p class="section-intro">${formatBilingualText(bUnits.unitsTable.intro)}</p>
                ${table(bUnits.unitsTable.headers, bUnits.unitsTable.rows)}
              </div>
              <div class="tab-panel" role="tabpanel" data-panel="corba-vocab" hidden>
                <h3>${formatBilingualText(bUnits.glossaryTable.heading)}</h3>
                <p class="section-intro">${formatBilingualText(bUnits.glossaryTable.intro)}</p>
                ${table(bUnits.glossaryTable.headers, bUnits.glossaryTable.rows)}
              </div>
              <div class="tab-panel" role="tabpanel" data-panel="corba-metric" hidden>
                <h3>${formatBilingualText(bUnits.metricTable.heading)}</h3>
                <p class="section-intro">${formatBilingualText(bUnits.metricTable.intro)}</p>
                ${table(bUnits.metricTable.headers, bUnits.metricTable.rows)}
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
            <div class="tab-list" role="tablist" aria-label="Çorba Dil Kuralları Sekmeleri">
              <button role="tab" aria-selected="true" tabindex="0" data-tab="corba-imperatives" class="active"><span class="tab-idx">01</span><span class="tab-title">Imperatives (Emir Kipi)</span></button>
              <button role="tab" aria-selected="false" tabindex="-1" data-tab="corba-sequence"><span class="tab-idx">02</span><span class="tab-title">Sequence Adverbs (Sıra Zarfları)</span></button>
              <button role="tab" aria-selected="false" tabindex="-1" data-tab="corba-rules"><span class="tab-idx">03</span><span class="tab-title">Grammar Rules (Dil Kuralları)</span></button>
            </div>
            <div class="tab-panels">
              <div class="tab-panel active" role="tabpanel" data-panel="corba-imperatives">
                <h3>${formatBilingualText(bGrammar.imperativesTable.heading)}</h3>
                <p class="section-intro">${formatBilingualText(bGrammar.imperativesTable.intro)}</p>
                ${table(bGrammar.imperativesTable.headers, bGrammar.imperativesTable.rows)}
              </div>
              <div class="tab-panel" role="tabpanel" data-panel="corba-sequence" hidden>
                <h3>${formatBilingualText(bGrammar.sequenceTable.heading)}</h3>
                <p class="section-intro">${formatBilingualText(bGrammar.sequenceTable.intro)}</p>
                ${table(bGrammar.sequenceTable.headers, bGrammar.sequenceTable.rows)}
              </div>
              <div class="tab-panel" role="tabpanel" data-panel="corba-rules" hidden>
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
        ${getRelatedRecipesHTML("corba")}
      </div>
    </div>
  </article>`;

  initQuizInteractivity(root, "Çorba", renderCorbaPage);
  initVariantSubnavScroll(root);
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
      metaTime: "35 mins (35 dakika)",
      metaServings: "24 pcs (24 adet)",
      metaCount: "4 ingredients (4 malzeme)"
    },
    {
      block: bChoc,
      ing: bChoc.subsections[0],
      steps: bChoc.subsections[1],
      img: "/blog/ingilizce-tarifler/images/kurabiye-chocolate-chip.webp",
      titleEn: "Chocolate Chip Cookie Recipe",
      titleTr: "Damla Çikolatalı Kurabiye Tarifi",
      metaTime: "30 mins (30 dakika)",
      metaServings: "20 pcs (20 adet)",
      metaCount: "4 ingredients (4 malzeme)"
    },
    {
      block: bOat,
      ing: bOat.subsections[0],
      steps: bOat.subsections[1],
      img: "/blog/ingilizce-tarifler/images/kurabiye-oatmeal.webp",
      titleEn: "Oatmeal Cookie Recipe",
      titleTr: "Yulaflı Kurabiye Tarifi",
      metaTime: "30 mins (30 dakika)",
      metaServings: "18 pcs (18 adet)",
      metaCount: "4 ingredients (4 malzeme)"
    },
    {
      block: bGinger,
      ing: bGinger.subsections[0],
      steps: bGinger.subsections[1],
      img: "/blog/ingilizce-tarifler/images/kurabiye-gingerbread.webp",
      titleEn: "Gingerbread Cookie Recipe",
      titleTr: "Zencefilli Kurabiye Tarifi",
      metaTime: "40 mins (40 dakika)",
      metaServings: "24 pcs (24 adet)",
      metaCount: "4 ingredients (4 malzeme)"
    }
  ];

  const overviewTbl = kurabiyeData.page.overviewVariationsTable;

  root.innerHTML = `<article class="recipe-guide">
    <div class="reading-progress" aria-hidden="true"><span></span></div>
    <header class="hero">
      <div class="hero-copy">
        <p class="eyebrow">${formatBilingualText("DESSERT & SNACK RECIPES (TATLI VE ATIŞTIRMALIK)")}</p>
        <h1>${formatBilingualText("İngilizce Kurabiye Tarifi (Kurabiye Yapılışı İngilizce)")}</h1>
        <aside class="course-banner" aria-label="İngilizce kursu">
          <div class="course-banner-text">
            <small class="cta-eyebrow">KONUŞARAK ÖĞREN İNGİLİZCE KURSU</small>
            <strong class="cta-heading">İngilizceyi tarif ezberleyerek değil, konuşarak öğrenin.</strong>
          </div>
          <button class="cta-btn cta-btn-orange" onclick="window.location.href='https://student.konusarakogren.com/auth/register'">Ücretsiz tanışma dersi <span class="arrow">→</span></button>
        </aside>
        <p class="lede"><strong>${kurabiyeData.page.introEnglish}</strong> <span class="tr-highlight">(${kurabiyeData.page.introTurkish})</span></p>
        <address class="article-meta" rel="author"><span class="author-mark" aria-hidden="true">KO</span><span><strong>Konuşarak Öğren Editör Ekibi</strong><small>İngilizce seviyesi: A1–A2 · Yayınlanma: <time datetime="2026-09-12">12 Eylül 2026</time></small></span></address>
      </div>
      <figure class="hero-visual">
        <img src="/blog/ingilizce-tarifler/images/kurabiye-hero.webp" alt="Taze fırınlanmış kıyır kıyır tereyağlı kurabiyeler" loading="eager" fetchpriority="high">
        <figcaption><strong>Classic Butter Cookies Recipe</strong><span>Fırından yeni çıkmış, altın renginde kıyır kıyır tereyağlı kurabiyeler.</span></figcaption>
      </figure>
      ${buildFactsCardHTML({
        caption: "İngilizce Kurabiye Tarifi Özeti",
        prep: {
          val: "20 min",
          en: "Preparation Time: Butter cookies take 20 minutes to prepare.",
          tr: "Hazırlık Süresi: Tereyağlı kurabiye hamuru 20 dakikada hazırlanır."
        },
        cook: {
          val: "15 min",
          en: "Baking Time: Butter cookies are baked in 15 minutes at 170°C.",
          tr: "Pişirme Süresi: Tereyağlı kurabiye fırında 15 dakikada pişirilir."
        },
        servings: {
          val: "24 pcs",
          en: "Servings: This classic recipe yields 24 delicious cookies.",
          tr: "Porsiyon: Bu klasik kurabiye tarifi 24 adet kurabiye sunar."
        },
        level: {
          val: "A1–A2",
          en: "English Level: Simple culinary verbs and basic measurements (A1–A2).",
          tr: "İngilizce Seviyesi: Temel mutfak İngilizcesi ve ölçü terimleri (A1–A2)."
        }
      })}
    </header>

    <section class="hero-overview-table" id="definition-variations" style="max-width: 860px; margin: 2rem auto;">
      <p class="eyebrow eyebrow-lg">${formatBilingualText("DEFINITION & VARIATIONS (TANIM VE ÇEŞİTLER KARŞILAŞTIRMASI)")}</p>
      <h2 class="definition-heading">${formatBilingualText("English Cookie Variations, Ingredients and Steps (İngilizce Kurabiye Çeşitleri, Malzemeleri ve Temel Adımları)")}</h2>
      <p class="section-intro"><strong>İngilizce ve Türkçe Kurabiye Çeşitleri Karşılaştırması</strong>: ${formatBilingualText(overviewTbl?.intro || "")}</p>
      ${overviewTbl ? table(overviewTbl.headers, overviewTbl.rows, overviewTbl.caption) : ""}
    </section>

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
          <p class="eyebrow">${formatBilingualText("CORE TERMS & CONCEPTS (TEMEL TERİMLER VE ANLAM FARKLILIKLARI)")}</p>
          <h2>${formatBilingualText("Core Terms and Accurate Translations for Cookie Recipes (İngilizce Kurabiye Tarifi İçin Temel Terimler ve Doğru Çeviriler)")}</h2>
          <p class="section-intro">${bTerms.introEnglish} <span class="tr-highlight">(${bTerms.introTurkish})</span></p>
          ${table(bTerms.table.headers, bTerms.table.rows, "Temel Mutfak Terimleri ve Çevirileri")}

          ${buildAppBannerHTML("Kurabiye")}

          <h3 style="margin-top:2rem;">${formatBilingualText("Cookie or Biscuit? Cookies in American and British English (Cookie mi Biscuit mı? Amerikan ve İngiliz İngilizcesinde Kurabiye)")}</h3>
          <p class="section-intro">${bBiscuit.introEnglish} <span class="tr-highlight">(${bBiscuit.introTurkish})</span></p>
          ${table(bBiscuit.table.headers, bBiscuit.table.rows, "Amerikan ve İngiliz İngilizcesinde Kurabiye")}

          <h3 style="margin-top:2.5rem;">${formatBilingualText("Verbs Used in English Recipe Writing: Mix, Roll, Shape, Bake (İngilizce Tarif Yazımında Kullanılan Fiiller: Mix, Roll, Shape, Bake)")}</h3>
          <p class="section-intro">${bVerbs.introEnglish} <span class="tr-highlight">(${bVerbs.introTurkish})</span></p>
          ${table(bVerbs.table.headers, bVerbs.table.rows, "Tarif Yazımında Kullanılan Temel Fiiller")}
        </section>

        <!-- 2. 4 KURABİYE ÇEŞİDİ -->
        <div id="tarifler" class="recipe-chapters">
          <div class="chapter-intro">
            <p class="eyebrow eyebrow-lg">${formatBilingualText("4 DISTINCT COOKIE VARIATIONS (4 FARKLI KURABİYE ÇEŞİDİ)")}</p>
            <p class="section-intro">Tereyağlı, damla çikolatalı, yulaflı ve zencefilli kurabiye tariflerinin İngilizce malzeme tablolarını, görsel kartlarını ve adım adım yapılışlarını aşağıdaki sekmeleri açarak inceleyebilirsiniz.</p>
          </div>
            
          <nav class="variant-subnav" aria-label="Kurabiye Çeşitleri Hızlı Erişim">
            <a href="#variant-1" class="variant-nav-btn active" title="Classic Butter Cookies (Klasik Tereyağlı Kurabiye)">
              <span>1. Butter Cookies</span>
              <div class="variant-tooltip">
                <span class="tooltip-en">1. Classic Butter Cookies</span>
                <span class="tooltip-tr">(Klasik Tereyağlı Kurabiye)</span>
              </div>
            </a>
            <a href="#variant-2" class="variant-nav-btn" title="Chocolate Chip Cookies (Damla Çikolatalı Kurabiye)">
              <span>2. Chocolate Chip</span>
              <div class="variant-tooltip">
                <span class="tooltip-en">2. Chocolate Chip Cookies</span>
                <span class="tooltip-tr">(Damla Çikolatalı Kurabiye)</span>
              </div>
            </a>
            <a href="#variant-3" class="variant-nav-btn" title="Oatmeal Cookies (Yulaflı Kurabiye)">
              <span>3. Oatmeal Cookies</span>
              <div class="variant-tooltip">
                <span class="tooltip-en">3. Oatmeal Cookies</span>
                <span class="tooltip-tr">(Yulaflı Kurabiye)</span>
              </div>
            </a>
            <a href="#variant-4" class="variant-nav-btn" title="Gingerbread Cookies (Zencefilli Kurabiye)">
              <span>4. Gingerbread</span>
              <div class="variant-tooltip">
                <span class="tooltip-en">4. Gingerbread Cookies</span>
                <span class="tooltip-tr">(Zencefilli Kurabiye)</span>
              </div>
            </a>
          </nav>
          ${kurabiyeChapters.map((c, i) => `
            <section class="recipe-chapter" id="variant-${i + 1}">
              <div class="chapter-head">
                <span class="variant-number">${String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h2>${c.titleEn} <span class="tr-highlight">(${c.titleTr})</span></h2>
                  <p><strong>${c.block.introEnglish}</strong> <span class="tr-highlight">(${c.block.introTurkish})</span></p>
                  
                  ${buildChapterMetaHTML({
                    time: {
                      val: c.metaTime,
                      en: `Baking & Prep Time: ${c.titleEn.replace(" Recipe", "")} is prepared and baked in ${c.metaTime}.`,
                      tr: `Pişirme ve Hazırlık: ${c.titleTr.replace(" Tarifi", "")} ${c.metaTime} içinde hazırlanır ve pişirilir.`
                    },
                    servings: {
                      val: c.metaServings,
                      en: `Servings & Yield: This recipe yields ${c.metaServings} delicious cookies.`,
                      tr: `Porsiyon Miktarı: Bu tarif yaklaşık ${c.metaServings} kurabiye sunar.`
                    },
                    count: {
                      val: c.metaCount,
                      en: `Ingredients Count: Prepared with only ${c.metaCount} for authentic texture.`,
                      tr: `Malzeme Sayısı: Yalnızca ${c.metaCount} ile kolay ve lezzetli hazırlanır.`
                    }
                  })}
                </div>
              </div>
              <figure><img src="${c.img}" alt="${c.titleEn}" loading="lazy"><figcaption><strong>${c.titleEn}</strong><span>${c.titleTr}</span></figcaption></figure>
              <div class="chapter-panels">
                <details class="learning-panel" ${i === 0 ? "open" : ""}><summary><h3>What Are ${c.titleEn.replace(" Recipe", "")} Ingredients in English? <span class="tr-highlight">(${c.ing.heading.replace("What Are ", "").replace(" in English?", "")})</span></h3><span>Malzeme listesi &amp; tablosu</span></summary>
                  <div class="panel-body">
                    <p class="section-intro">${c.ing.introEnglish} <span class="tr-highlight">(${c.ing.introTurkish})</span></p>
                    
                    ${table(c.ing.table.headers, c.ing.table.rows, `${c.titleTr} Malzeme Tablosu`)}
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
                <details class="learning-panel"><summary><h3>How to Write ${c.titleEn.replace(" Recipe", "")} Baking Steps in English? <span class="tr-highlight">(${c.steps.heading.replace("How to Write ", "").replace(" in English?", "")})</span></h3><span>Adım adım yapılışı göster</span></summary>
                  <div class="panel-body">
                    <p class="section-intro">${c.steps.introEnglish} <span class="tr-highlight">(${c.steps.introTurkish})</span></p>
                    <ol class="compact-steps">
                      ${c.steps.stepsList.map(s => `
                        <li>
                          <span class="step-num-badge">${s.order}</span>
                          <div class="step-body">
                            <p class="en-text"><strong>${s.en}</strong></p>
                            <p class="tr-text"><span class="tr-highlight">${s.tr}</span></p>
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
          <p class="eyebrow">${formatBilingualText("OFFICIAL STEP-BY-STEP BAKING GUIDE (RESMİ ADIM ADIM PİŞİRME REHBERİ)")}</p>
          <h2>${formatBilingualText("How Do You Make Butter Cookies Step by Step? (Butter Cookies İngilizce Adım Adım Nasıl Yapılır?)")}</h2>
          <p class="section-intro">${bSteps.introEnglish} <span class="tr-highlight">(${bSteps.introTurkish})</span></p>
          ${buildStepsMetaHTML({
            steps: { val: "7 steps (7 adım)", en: "Follow the 7 steps to bake crisp and crumbly butter cookies.", tr: "Kıyır kıyır tereyağlı kurabiye pişirmek için 7 adımlı yönergeyi sırasıyla takip edin." },
            time: { val: "35 mins (35 dakika)", en: "20 mins dough preparation and 15 mins oven baking time.", tr: "20 dakika hamur hazırlığı ve 15 dakikalık fırınlama süresi." },
            level: { val: "Level A1–A2 (A1–A2 seviye)", en: "Focuses on creaming butter, sifting flour, and rolling verbs.", tr: "Tereyağı çırpma, un eleme ve merdaneyle açma fiillerine odaklanır." }
          })}
          
          ${buildStepAccordionHTML(bSteps.steps)}

          <h3 style="margin-top:2.5rem;">${formatBilingualText("Butter Cookies 7-Step Baking Summary (Butter Cookies 7 Pişirme Adımı Özet Tablosu)")}</h3>
          <p class="section-intro">Tüm pişirme sürecini tek bir tabloda inceleyerek fırınlama yönergelerini pekiştirebilirsiniz.</p>
          ${table(bSteps.summaryTable.headers, bSteps.summaryTable.rows, "Butter Cookies 7 Adım Pişirme Özeti")}
        </section>

        <!-- 4. MALZEMELER VE EKİPMANLAR (TABS) -->
        <section id="malzemeler-ve-ekipman">
          <p class="eyebrow">${formatBilingualText("INGREDIENTS & BAKING EQUIPMENT (MALZEMELER VE FIRINCILIK GEREÇLERİ)")}</p>
          <h2>${formatBilingualText("Which Ingredients and Equipment Go into Butter Cookies? (Tereyağlı Kurabiyeye Hangi Malzemeler ve Ekipmanlar Girer?)")}</h2>
          <p class="section-intro">Tereyağlı kurabiye hazırlığında ihtiyaç duyacağınız temel malzemeleri ve fırıncılık gereçlerini aşağıdaki sekmelerden inceleyebilirsiniz.</p>

          <div class="grammar-tabs section-tabs">
            <div class="tab-list" role="tablist" aria-label="Malzemeler ve Ekipmanlar">
              <button type="button" role="tab" data-tab="tab-ing" id="tab-btn-ing" aria-controls="panel-ing" aria-selected="true" class="active">
                <span class="tab-idx">01</span><span class="tab-title">Ingredients (Malzemeler)</span>
              </button>
              <button type="button" role="tab" data-tab="tab-equip" id="tab-btn-equip" aria-controls="panel-equip" aria-selected="false">
                <span class="tab-idx">02</span><span class="tab-title">Equipment (Ekipmanlar)</span>
              </button>
            </div>

            <!-- Tab 1: Ingredients -->
            <div class="tab-panel active" id="panel-ing" data-panel="tab-ing" role="tabpanel">
              <h3 style="margin-top:0.5rem;">${formatBilingualText("Which Ingredients Go into Butter Cookies? (Tereyağlı Kurabiyeye Hangi Malzemeler Girer?)")}</h3>
              <p class="section-intro">${bIng.introEnglish} <span class="tr-highlight">(${bIng.introTurkish})</span></p>
              ${table(bIng.table.headers, bIng.table.rows, "Tereyağlı Kurabiye Malzemeleri")}
            </div>

            <!-- Tab 2: Equipment -->
            <div class="tab-panel" id="panel-equip" data-panel="tab-equip" role="tabpanel" hidden>
              <h3 style="margin-top:0.5rem;">${formatBilingualText("What Equipment Do You Need to Bake Cookies? (Kurabiye Pişirmek İçin Hangi Ekipmanlar Gerekir?)")}</h3>
              <p class="section-intro">${bEquip.introEnglish} <span class="tr-highlight">(${bEquip.introTurkish})</span></p>
              ${table(bEquip.table.headers, bEquip.table.rows, "Kurabiye Pişirme Gereçleri ve Ekipmanları")}
            </div>
          </div>
        </section>

        <!-- 5. BESİN DEĞERLERİ & KALORİ (TABS) -->
        <section id="besin-degerleri">
          <p class="eyebrow">${formatBilingualText("SERVING, CALORIE & TEXTURE ANALYSIS (PORSİYON, KALORİ VE DOKU ANALİZİ)")}</p>
          <h2>${formatBilingualText("Butter Cookies Nutrition, Calories, Biscuit Difference and Textures (Tereyağlı Kurabiye Besin Değerleri, Kalori, Biscuit Farkı ve Dokular)")}</h2>
          <p class="section-intro">Porsiyon başına kalori, besin değerleri, Amerikan biscuit farkı ve kurabiye doku sıfatlarını aşağıdaki 4 sekmeden detaylıca öğrenebilirsiniz.</p>

          <div class="grammar-tabs section-tabs">
            <div class="tab-list" role="tablist" aria-label="Besin Değerleri ve Kurabiye Analizi">
              <button type="button" role="tab" data-tab="tab-cal" id="tab-btn-cal" aria-controls="panel-cal" aria-selected="true" class="active">
                <span class="tab-idx">01</span><span class="tab-title">Calories (Kalori)</span>
              </button>
              <button type="button" role="tab" data-tab="tab-nut" id="tab-btn-nut" aria-controls="panel-nut" aria-selected="false">
                <span class="tab-idx">02</span><span class="tab-title">Nutrition Facts (Besin Değerleri)</span>
              </button>
              <button type="button" role="tab" data-tab="tab-ambis" id="tab-btn-ambis" aria-controls="panel-ambis" aria-selected="false">
                <span class="tab-idx">03</span><span class="tab-title">Biscuit vs Cookie (Biscuit Farkı)</span>
              </button>
              <button type="button" role="tab" data-tab="tab-tex" id="tab-btn-tex" aria-controls="panel-tex" aria-selected="false">
                <span class="tab-idx">04</span><span class="tab-title">Cookie Textures (Dokular)</span>
              </button>
            </div>

            <!-- Tab 1: Calories -->
            <div class="tab-panel active" id="panel-cal" data-panel="tab-cal" role="tabpanel">
              <h3 style="margin-top:0.5rem;">${formatBilingualText("How Many Calories Is 1 Butter Cookie? (1 Tereyağlı Kurabiye Kaç Kalori?)")}</h3>
              <p class="section-intro">${bCal.introEnglish} <span class="tr-highlight">(${bCal.introTurkish})</span></p>
              ${table(bCal.table.headers, bCal.table.rows, "Porsiyon ve Kalori Değerleri")}
            </div>

            <!-- Tab 2: Nutrition Facts -->
            <div class="tab-panel" id="panel-nut" data-panel="tab-nut" role="tabpanel" hidden>
              <h3 style="margin-top:0.5rem;">${formatBilingualText("What Are the Nutrition Facts of Butter Cookies? (Tereyağlı Kurabiyenin Besin Değerleri Nelerdir?)")}</h3>
              <p class="section-intro">${bNut.introEnglish} <span class="tr-highlight">(${bNut.introTurkish})</span></p>
              ${table(bNut.table.headers, bNut.table.rows, "Tereyağlı Kurabiye Besin Değerleri")}
            </div>

            <!-- Tab 3: Biscuit vs Cookie -->
            <div class="tab-panel" id="panel-ambis" data-panel="tab-ambis" role="tabpanel" hidden>
              <h3 style="margin-top:0.5rem;">${formatBilingualText("Why Is an American Biscuit Not a Cookie? (Amerikan Biscuit Neden Kurabiye Değildir?)")}</h3>
              <p class="section-intro">${bAmBis.introEnglish} <span class="tr-highlight">(${bAmBis.introTurkish})</span></p>
              ${table(bAmBis.table.headers, bAmBis.table.rows, "American Biscuit vs Cookie Karşılaştırması")}
            </div>

            <!-- Tab 4: Cookie Textures -->
            <div class="tab-panel" id="panel-tex" data-panel="tab-tex" role="tabpanel" hidden>
              <h3 style="margin-top:0.5rem;">${formatBilingualText("Chewy, Crunchy, Crumbly: Describing Cookie Textures in English (Chewy, Crunchy, Crumbly: Kurabiye Dokuları İngilizce Nasıl Tanımlanır?)")}</h3>
              <p class="section-intro">${bTex.introEnglish} <span class="tr-highlight">(${bTex.introTurkish})</span></p>
              ${table(bTex.table.headers, bTex.table.rows, "İngilizce Kurabiye Dokuları ve Sıfatlar")}
            </div>
          </div>
        </section>

        <!-- 6. ÖLÇÜ BİRİMLERİ VE MUTFAK KELİMELERİ (TABS) -->
        <section id="olculer">
          <p class="eyebrow">${formatBilingualText("MEASUREMENT CONVERSIONS & KITCHEN GLOSSARY (ÖLÇÜ DÖNÜŞÜMLERİ VE MUTFAK SÖZLÜĞÜ)")}</p>
          <h2>${formatBilingualText("Measurement Units, Vocabulary, Spoon, Cup and Metric Conversions (İngilizce Ölçü Birimleri, Mutfak Kelimeleri, Kaşık, Bardak ve Metrik Dönüşümler)")}</h2>
          <p class="section-intro">Tariflerde kullanılan ölçü birimlerini, mutfak kelimelerini, bardak-kaşık ve metrik dönüşüm tablolarını aşağıdaki 4 sekmeden inceleyebilirsiniz.</p>

          <div class="grammar-tabs section-tabs">
            <div class="tab-list" role="tablist" aria-label="Ölçü Birimleri ve Mutfak Sözlüğü">
              <button type="button" role="tab" data-tab="tab-units" id="tab-btn-units" aria-controls="panel-units" aria-selected="true" class="active">
                <span class="tab-idx">01</span><span class="tab-title">Units (Ölçü Birimleri)</span>
              </button>
              <button type="button" role="tab" data-tab="tab-vocab" id="tab-btn-vocab" aria-controls="panel-vocab" aria-selected="false">
                <span class="tab-idx">02</span><span class="tab-title">Kitchen Words (Mutfak Kelimeleri)</span>
              </button>
              <button type="button" role="tab" data-tab="tab-tsp" id="tab-btn-tsp" aria-controls="panel-tsp" aria-selected="false">
                <span class="tab-idx">03</span><span class="tab-title">Spoon &amp; Cup (Kaşık ve Bardak)</span>
              </button>
              <button type="button" role="tab" data-tab="tab-gram" id="tab-btn-gram" aria-controls="panel-gram" aria-selected="false">
                <span class="tab-idx">04</span><span class="tab-title">Gram &amp; Liter (Gram ve Litre)</span>
              </button>
            </div>

            <!-- Tab 1: Units -->
            <div class="tab-panel active" id="panel-units" data-panel="tab-units" role="tabpanel">
              <h3 style="margin-top:0.5rem;">${formatBilingualText("What Measurement Units Are Used in English Cookie Recipes? (İngilizce Kurabiye Tariflerinde Kullanılan Ölçü Birimleri Nelerdir?)")}</h3>
              <p class="section-intro">${bUnits.introEnglish} <span class="tr-highlight">(${bUnits.introTurkish})</span></p>
              ${table(bUnits.table.headers, bUnits.table.rows, "İngilizce Mutfak Ölçü Birimleri")}
            </div>

            <!-- Tab 2: Kitchen Words -->
            <div class="tab-panel" id="panel-vocab" data-panel="tab-vocab" role="tabpanel" hidden>
              <h3 style="margin-top:0.5rem;">${formatBilingualText("Core English Kitchen Words in Cookie Recipes (Kurabiye Tarif Metninde Geçen Temel İngilizce Mutfak Kelimeleri Nelerdir?)")}</h3>
              <p class="section-intro">${bVocab.introEnglish} <span class="tr-highlight">(${bVocab.introTurkish})</span></p>
              ${table(bVocab.table.headers, bVocab.table.rows, "Temel Mutfak Kelimeleri")}
            </div>

            <!-- Tab 3: Spoon & Cup -->
            <div class="tab-panel" id="panel-tsp" data-panel="tab-tsp" role="tabpanel" hidden>
              <h3 style="margin-top:0.5rem;">${formatBilingualText("Tablespoon, Teaspoon, Cup: Turkish Equivalents (Tablespoon, Teaspoon, Cup: İngilizce Ölçü Birimlerinin Türkçe Karşılıkları)")}</h3>
              <p class="section-intro">${bTsp.introEnglish} <span class="tr-highlight">(${bTsp.introTurkish})</span></p>
              ${table(bTsp.table.headers, bTsp.table.rows, "Kaşık ve Bardak Ölçüleri")}
            </div>

            <!-- Tab 4: Gram & Liter -->
            <div class="tab-panel" id="panel-gram" data-panel="tab-gram" role="tabpanel" hidden>
              <h3 style="margin-top:0.5rem;">${formatBilingualText("How Are Gram and Liter Used in English Recipes? (Gram ve Litre İngilizce Tariflerde Nasıl Kullanılır?)")}</h3>
              <p class="section-intro">${bGram.introEnglish} <span class="tr-highlight">(${bGram.introTurkish})</span></p>
              ${table(bGram.table.headers, bGram.table.rows, "Gram ve Litre Kullanım Tablosu")}
            </div>
          </div>
        </section>

        <!-- 7. DİL BİLGİSİ & GRAMMAR (TABS) -->
        <section id="dil-kurallari">
          <p class="eyebrow">${formatBilingualText("RECIPE GRAMMAR & USAGE RULES (TARİF DİL BİLGİSİ VE ANLATIM KURALLARI)")}</p>
          <h2>${formatBilingualText("Grammar Rules for English Cookie Recipes (İngilizce Kurabiye Tarifi Yazarken Dikkat Edilmesi Gereken Dil Kuralları)")}</h2>
          <p class="section-intro">${bGrammar.introEnglish} <span class="tr-highlight">(${bGrammar.introTurkish})</span></p>

          <div class="grammar-tabs section-tabs">
            <div class="tab-list" role="tablist" aria-label="Tarif Dil Kuralları">
              <button type="button" role="tab" data-tab="tab-imp" id="tab-btn-imp" aria-controls="panel-imp" aria-selected="true" class="active">
                <span class="tab-idx">01</span><span class="tab-title">Imperatives (Emir Kipi)</span>
              </button>
              <button type="button" role="tab" data-tab="tab-seq" id="tab-btn-seq" aria-controls="panel-seq" aria-selected="false">
                <span class="tab-idx">02</span><span class="tab-title">Sequence Adverbs (Sıra Zarfları)</span>
              </button>
              <button type="button" role="tab" data-tab="tab-rules" id="tab-btn-rules" aria-controls="panel-rules" aria-selected="false">
                <span class="tab-idx">03</span><span class="tab-title">Grammar Rules (Dil Kuralları)</span>
              </button>
            </div>

            <!-- Tab 1: Imperatives -->
            <div class="tab-panel active" id="panel-imp" data-panel="tab-imp" role="tabpanel">
              <h3 style="margin-top:0.5rem;">${formatBilingualText("How to Use Imperatives in English Cookie Recipes (İngilizce Kurabiye Tarif Metinlerinde Emir Kipi Nasıl Kullanılır?)")}</h3>
              <p class="section-intro">${bImp.introEnglish} <span class="tr-highlight">(${bImp.introTurkish})</span></p>
              ${table(bImp.table.headers, bImp.table.rows, "Emir Kipi Kullanım Kuralları")}
            </div>

            <!-- Tab 2: Sequence Adverbs -->
            <div class="tab-panel" id="panel-seq" data-panel="tab-seq" role="tabpanel" hidden>
              <h3 style="margin-top:0.5rem;">${formatBilingualText("Conjunctions and Sequence Adverbs: First, Then, After That, Finally (Bağlaçlar ve Sıra Zarfları: First, Then, After That, Finally)")}</h3>
              <p class="section-intro">${bSeq.introEnglish} <span class="tr-highlight">(${bSeq.introTurkish})</span></p>
              ${table(bSeq.table.headers, bSeq.table.rows, "Sıra Zarfları ve Anlamları")}
              <div class="bilingual-paragraph" style="margin-top:1.5rem; background: rgba(248,250,252,0.9); border: 1px solid #cbd5e1; border-radius: 12px; padding: 1.5rem;">
                <p><strong>English:</strong> ${bSeq.connectedParagraphEn}</p>
                <p style="margin-top:0.75rem; color:#475569;"><strong>Türkçe:</strong> <span class="tr-highlight">${bSeq.connectedParagraphTr}</span></p>
              </div>
            </div>

            <!-- Tab 3: Grammar Summary -->
            <div class="tab-panel" id="panel-rules" data-panel="tab-rules" role="tabpanel" hidden>
              <h3 style="margin-top:0.5rem;">Core Recipe Grammar Rules <span class="tr-highlight">(4 Temel Tarif Dil Kuralı)</span></h3>
              <p class="section-intro">İngilizce tarif yazımının 4 temel dil kuralı: emir kipi, sıra zarfları, sayılabilir/sayılamayan isimler ve ölçü ifadeleri.</p>
              ${table(bGrammar.table.headers, bGrammar.table.rows, "4 Temel Dil Kuralı Özeti")}
            </div>
          </div>
        </section>

        <!-- 8. 8. SINIF ALISTIRMA VE QUIZ -->
        <section id="alistirma" class="exercise">
          <p class="eyebrow" style="color:#93c5fd;">${formatBilingualText("8TH GRADE PRACTICE & QUIZ (8. SINIF QUIZ VE ALIŞTIRMALAR)")}</p>
          <h2 style="color:#ffffff;">8th Grade English Cookie Recipe Practice &amp; Quiz <span class="tr-highlight" style="color:#38bdf8;">(8. Sınıf İngilizce Kurabiye Tarifi)</span></h2>
          <p class="section-intro" style="color:#cbd5e1;">${bQuiz.introEnglish} <span class="tr-highlight">(${bQuiz.introTurkish})</span></p>

          <div class="quiz-grid" style="display: flex; flex-direction: column; gap: 1.5rem; margin-top: 2rem;">
            ${bQuiz.quiz.map((q, idx) => `
              <div class="quiz-card" data-idx="${idx}" data-correct="${q.correctAnswer}" style="background:#ffffff; border:1px solid #e2e8f0; border-radius:14px; padding:1.6rem; text-align:left; color:#0f172a; box-shadow:0 4px 14px rgba(0,0,0,0.06);">
                <span class="quiz-badge" style="background:#0284c7; color:#ffffff; padding:4px 10px; border-radius:6px; font-size:0.85rem; font-weight:700;">Soru ${q.number} · ${q.type === "multiple-choice" ? "Çoktan Seçmeli" : "Boşluk Doldurma"}</span>
                <p style="font-size:1.15rem; font-weight:700; margin-top:1rem; color:#0f172a;">${q.questionEn}</p>
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

          <!-- Interactive Quiz Completion Summary Card -->
          <div id="quiz-summary-box" style="display:none;"></div>
        </section>

        <!-- CTA Banner (Always outside quiz, fully clickable with high contrast) -->
        ${getMidPageCTAHTML()}
        ${getRelatedRecipesHTML("kurabiye")}
      </div>
    </div>
  </article>`;

  // Quiz interactivity with Score & Summary Card
  const quizCards = root.querySelectorAll(".quiz-card");
  const answeredState = {};
  const totalQuestions = quizCards.length;

  function checkQuizCompletion() {
    if (Object.keys(answeredState).length === totalQuestions) {
      const correctCount = Object.values(answeredState).filter(Boolean).length;
      const summaryBox = root.querySelector("#quiz-summary-box");
      if (summaryBox) {
        summaryBox.style.display = "block";
        summaryBox.innerHTML = `
          <div class="quiz-summary-card">
            <span class="quiz-score-badge">🎯 Quiz Tamamlandı: ${totalQuestions} Soruda ${correctCount} Doğru!</span>
            <h3 class="quiz-summary-heading">Harika Bir İlerleme Kaydettiniz!</h3>
            <p class="quiz-summary-desc">
              İngilizce kurabiye ve mutfak terimlerini başarıyla kavradınız. Artık teoriyi pratiğe dönüştürme zamanı! Ana dili İngilizce olan eğitmenlerle günde sadece 10 dakika konuşarak akıcı İngilizceye ulaşın.
            </p>
            <div class="quiz-summary-actions">
              <a href="https://student.konusarakogren.com/auth/register" target="_blank" rel="noopener" class="quiz-summary-cta">
                Ücretsiz Tanışma ve Seviye Tespiti Al <span class="arrow">→</span>
              </a>
              <button type="button" class="quiz-retry-btn" id="retry-quiz-action">Testi Yeniden Çöz ↺</button>
            </div>
          </div>
        `;

        summaryBox.querySelector("#retry-quiz-action")?.addEventListener("click", () => {
          renderKurabiyePage();
          document.getElementById("alistirma")?.scrollIntoView({ behavior: "smooth" });
        });

        summaryBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    }
  }

  quizCards.forEach(card => {
    const idx = card.getAttribute("data-idx");
    const correct = card.getAttribute("data-correct");
    const feedback = card.querySelector(".quiz-feedback");
    const buttons = card.querySelectorAll(".quiz-option-btn");

    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        const val = btn.getAttribute("data-val");
        const isMatch = val.trim().toLowerCase() === correct.trim().toLowerCase() || val.includes(correct);

        answeredState[idx] = isMatch;

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

        checkQuizCompletion();
      });
    });
  });

  // Variant subnav scroll interactivity & Scrollspy
  const variantNavBtns = root.querySelectorAll(".variant-nav-btn");
  variantNavBtns.forEach(btn => {
    btn.addEventListener("click", e => {
      e.preventDefault();
      const targetId = btn.getAttribute("href").replace("#", "");
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
        variantNavBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        btn.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      }
    });
  });

  const variantChapters = [1, 2, 3, 4].map(n => document.getElementById(`variant-${n}`)).filter(Boolean);
  if (variantChapters.length) {
    const variantObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        variantNavBtns.forEach(btn => {
          const isActive = btn.getAttribute("href") === `#${entry.target.id}`;
          btn.classList.toggle("active", isActive);
          if (isActive) {
            btn.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
          }
        });
      });
    }, { rootMargin: "-20% 0px -60%", threshold: 0 });
    variantChapters.forEach(c => variantObserver.observe(c));
  }
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
  } else if (slug === "pilav" || slug === "rice") {
    renderPilavPage();
  } else if (slug === "corba" || slug === "soup") {
    renderCorbaPage();
  } else if (slug === "pankek" || slug === "pancake") {
    renderPankekPage();
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
      tocLinks.forEach(link => {
        const isActive = link.dataset.scrollTarget === entry.target.id;
        link.classList.toggle("is-active", isActive);
        if (isActive) {
          link.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
        }
      });
    }), { rootMargin: "-35% 0px -55%", threshold: 0 });
    tocLinks.forEach(link => {
      const target = document.getElementById(link.dataset.scrollTarget);
      if (target) observer.observe(target);
    });
    tocLinks[0]?.classList.add("is-active");
  }
}


function initHomeCategoryFilter() {
  const pills = document.querySelectorAll(".home-cat-pill");
  const cards = document.querySelectorAll(".page-cards .recipe-card");
  if (!pills.length || !cards.length) return;

  pills.forEach(pill => {
    pill.addEventListener("click", () => {
      pills.forEach(p => {
        p.classList.remove("active");
        p.setAttribute("aria-selected", "false");
      });
      pill.classList.add("active");
      pill.setAttribute("aria-selected", "true");

      const cat = pill.dataset.cat;
      cards.forEach(card => {
        const matches = cat === "all" || card.dataset.category === cat;
        card.style.display = matches ? "" : "none";
      });
    });
  });
}

function initQuickSearch() {
  const searchInput = document.getElementById("recipe-quick-search");
  const clearBtn = document.getElementById("clear-search-btn");
  const dropdown = document.getElementById("recipe-search-dropdown");
  if (!searchInput || !dropdown) return;

  function performSearch() {
    const query = searchInput.value.trim().toLowerCase();
    if (!query) {
      dropdown.style.display = "none";
      dropdown.innerHTML = "";
      if (clearBtn) clearBtn.style.display = "none";
      return;
    }

    if (clearBtn) clearBtn.style.display = "block";

    const matches = Object.entries(recipes).filter(([slug, r]) => {
      const titleMatch = r.title.toLowerCase().includes(query);
      const enMatch = r.englishTitle.toLowerCase().includes(query);
      const slugMatch = slug.toLowerCase().includes(query);
      const vocabMatch = r.vocab ? r.vocab.some(([w, m]) => w.toLowerCase().includes(query) || m.toLowerCase().includes(query)) : false;
      const ingMatch = r.ingredients ? r.ingredients.some(([en, tr]) => en.toLowerCase().includes(query) || tr.toLowerCase().includes(query)) : false;
      return titleMatch || enMatch || slugMatch || vocabMatch || ingMatch;
    });

    if (matches.length === 0) {
      dropdown.innerHTML = `<div class="search-no-res">"${searchInput.value}" ile eşleşen tarif bulunamadı.</div>`;
      dropdown.style.display = "block";
      return;
    }

    dropdown.innerHTML = matches.map(([slug, r]) => `
      <a href="/blog/ingilizce-tarifler/${slug}" class="search-result-item" data-slug="${slug}">
        <img src="${r.image}" alt="${r.title}" class="search-res-img" />
        <div class="search-res-info">
          <span class="search-res-title">${r.title}</span>
          <span class="search-res-sub">${r.englishTitle} · ${r.label}</span>
        </div>
      </a>
    `).join("");

    dropdown.style.display = "block";
  }

  searchInput.addEventListener("input", performSearch);
  searchInput.addEventListener("focus", () => {
    if (searchInput.value.trim()) performSearch();
  });

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      searchInput.value = "";
      dropdown.style.display = "none";
      clearBtn.style.display = "none";
      searchInput.focus();
    });
  }

  document.addEventListener("click", e => {
    if (!e.target.closest("#sub-header-search")) {
      dropdown.style.display = "none";
    }
  });

  searchInput.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      dropdown.style.display = "none";
      searchInput.blur();
    }
  });
}

function initSubHeaderDropdowns() {
  const dropdowns = document.querySelectorAll(".sub-nav-dropdown");
  dropdowns.forEach(dd => {
    const btn = dd.querySelector(".sub-nav-cat-btn");
    if (!btn) return;

    btn.addEventListener("click", e => {
      e.stopPropagation();
      const isOpen = dd.classList.contains("is-open");
      dropdowns.forEach(other => {
        other.classList.remove("is-open");
        other.querySelector(".sub-nav-cat-btn")?.setAttribute("aria-expanded", "false");
      });
      if (!isOpen) {
        dd.classList.add("is-open");
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });

  document.addEventListener("click", e => {
    if (!e.target.closest(".sub-nav-dropdown")) {
      dropdowns.forEach(dd => {
        dd.classList.remove("is-open");
        dd.querySelector(".sub-nav-cat-btn")?.setAttribute("aria-expanded", "false");
      });
    }
  });
}

window.addEventListener("popstate", route);
function activateGrammarTab(tab) {
  const tablist = tab.closest("[role='tablist']");
  if (!tablist) return;
  const tabs = [...tablist.querySelectorAll("[role='tab']")];
  const container = tab.closest(".grammar-tabs, .section-tabs") || tablist.parentElement;
  tabs.forEach(item => {
    const active = item === tab;
    item.setAttribute("aria-selected", String(active));
    item.tabIndex = active ? 0 : -1;
    if (active) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
  container.querySelectorAll("[role='tabpanel']").forEach(panel => {
    const isTarget = panel.dataset.panel === tab.dataset.tab;
    panel.hidden = !isTarget;
    if (isTarget) {
      panel.classList.add("active");
    } else {
      panel.classList.remove("active");
    }
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
initQuickSearch();
initSubHeaderDropdowns();
route();
