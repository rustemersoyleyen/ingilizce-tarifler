# patch_subpages.py
import sys
import re

with open("src/app.js", "r", encoding="utf-8") as f:
    content = f.read()

# 1. Update initVariantSubnavScroll to support both .variant-nav-btn and .variant-subnav-btn
old_init_nav = 'const variantNavBtns = container.querySelectorAll(".variant-nav-btn");'
new_init_nav = 'const variantNavBtns = container.querySelectorAll(".variant-nav-btn, .variant-subnav-btn");'
content = content.replace(old_init_nav, new_init_nav)

# 2. Add ingredientCards to kekVariants
old_kek_variants = """const kekVariants = [
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
    description: "Carrot Cake (Havuçlu Kek), rendelenmiş taze havuç ve öğütülmüş tarçınla zenginleştirilmiş, sonbahar-kış aylarının popüler kekidir.",
    image: "/blog/ingilizce-tarifler/images/kek-havuclu.webp",
    alt: "Carrot cake slice with cinnamon aroma",
    ingredients: [["Flour", "Un", "200 g"], ["Sugar", "Şeker", "130 g"], ["Grated Carrots", "Rendelenmiş havuç", "150 g (2 su bardağı)"], ["Ground Cinnamon", "Öğütülmüş tarçın", "1 tsp"], ["Eggs", "Yumurta", "3 adet"], ["Vegetable Oil", "Sıvı yağ", "100 ml"], ["Baking Powder", "Kabartma tozu", "10 g (2 tsp)"]],
    steps: "First, whisk eggs and sugar until frothy. Then, pour in the vegetable oil. After that, fold in flour, cinnamon, and grated carrots. Finally, bake in a preheated oven at 180°C for 45 minutes.",
  },
  {
    title: "Limonlu Kek Tarifi",
    briefTitle: "İngilizce Limonlu Kek Tarifi (Lemon Cake Recipe)",
    ingredientsHeading: "Limonlu Kek Malzemeleri ve Limon Suyu Oranı",
    stepsHeading: "Limonlu Kek Pişirme Adımları İngilizce Nasıl Yazılır?",
    english: "Lemon Cake Recipe",
    description: "Lemon Cake (Limonlu Kek), hamuruna rendelenmiş limon kabuğu ve taze sıkılmış limon suyu eklenerek ferahlatıcı narenciye aroması kazandırılan kektir.",
    image: "/blog/ingilizce-tarifler/images/kek-limonlu.webp",
    alt: "Lemon cake with fresh lemon glaze",
    ingredients: [["Flour", "Un", "200 g"], ["Sugar", "Şeker", "150 g"], ["Eggs", "Yumurta", "3 adet"], ["Lemon Zest", "Rendelenmiş limon kabuğu", "1 adet limon"], ["Lemon Juice", "Taze sıkılmış limon suyu", "30 ml (2 tbsp)"], ["Vegetable Oil", "Sıvı yağ", "100 ml"], ["Baking Powder", "Kabartma tozu", "10 g (2 tsp)"]],
    steps: "First, rub lemon zest into sugar to release oils. Then, beat the eggs and add oil and lemon juice. After that, sift in the dry ingredients. Finally, bake at 180°C for 40 minutes.",
  },
];"""

new_kek_variants = """const kekVariants = [
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
    ingredientCards: [
      { icon: "🌾", en: "Flour", tr: "Un", amount: "200 g", sentence: "Sift 200 grams of flour into the bowl. (Kaseye 200 gram un eleyin.)" },
      { icon: "🍬", en: "Sugar", tr: "Toz Şeker", amount: "150 g", sentence: "Whisk the sugar and eggs together. (Şeker ve yumurtaları birlikte çırpın.)" },
      { icon: "🥚", en: "Eggs", tr: "Yumurta", amount: "3 pcs (3 adet)", sentence: "Beat 3 fresh eggs until frothy. (3 taze yumurtayı köpürene kadar çırpın.)" },
      { icon: "🥛", en: "Milk", tr: "Süt", amount: "120 ml", sentence: "Pour 120 ml of fresh milk into the batter. (Hamura 120 ml taze süt dökün.)" },
      { icon: "🌻", en: "Vegetable Oil", tr: "Sıvı Yağ", amount: "100 ml", sentence: "Add vegetable oil for a soft crumb texture. (Yumuşak doku için sıvı yağ ekleyin.)" }
    ],
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
    ingredientCards: [
      { icon: "🍫", en: "Cocoa Powder", tr: "Kakao Tozu", amount: "30 g", sentence: "Sift cocoa powder with the flour. (Kakao tozunu unla birlikte eleyin.)" },
      { icon: "🌾", en: "Flour", tr: "Un", amount: "180 g", sentence: "Use 180 grams of all-purpose flour. (180 gram çok amaçlı un kullanın.)" },
      { icon: "🍬", en: "Sugar", tr: "Şeker", amount: "150 g", sentence: "Add sugar to balance the dark cocoa. (Koyu kakaoyu dengelemek için şeker ekleyin.)" },
      { icon: "🥚", en: "Eggs", tr: "Yumurta", amount: "3 pcs (3 adet)", sentence: "Whisk eggs until light and creamy. (Yumurtaları krema kıvamına gelene kadar çırpın.)" }
    ],
    steps: "First, whisk the eggs and sugar for 2 minutes. Then, add the milk, oil, and cocoa powder. After that, sift in the flour and baking powder. Finally, pour the batter into the pan and bake at 180°C for 40 minutes.",
  },
  {
    title: "Havuçlu Kek Tarifi",
    briefTitle: "İngilizce Havuçlu Kek Tarifi (Carrot Cake Recipe)",
    ingredientsHeading: "Havuçlu Kek Malzemeleri ve Tarçın Ölçüsü",
    stepsHeading: "Havuçlu Kek Pişirme Adımları İngilizce Nasıl Yazılır?",
    english: "Carrot Cake Recipe",
    description: "Carrot Cake (Havuçlu Kek), rendelenmiş taze havuç ve öğütülmüş tarçınla zenginleştirilmiş, sonbahar-kış aylarının popüler kekidir.",
    image: "/blog/ingilizce-tarifler/images/kek-havuclu.webp",
    alt: "Carrot cake slice with cinnamon aroma",
    ingredients: [["Flour", "Un", "200 g"], ["Sugar", "Şeker", "130 g"], ["Grated Carrots", "Rendelenmiş havuç", "150 g (2 su bardağı)"], ["Ground Cinnamon", "Öğütülmüş tarçın", "1 tsp"], ["Eggs", "Yumurta", "3 adet"], ["Vegetable Oil", "Sıvı yağ", "100 ml"], ["Baking Powder", "Kabartma tozu", "10 g (2 tsp)"]],
    ingredientCards: [
      { icon: "🥕", en: "Grated Carrots", tr: "Rendelenmiş Havuç", amount: "150 g", sentence: "Fold grated carrots gently into the batter. (Rendelenmiş havuçları hamura nazikçe karıştırın.)" },
      { icon: "🌿", en: "Ground Cinnamon", tr: "Öğütülmüş Tarçın", amount: "1 tsp (1 çay kaşığı)", sentence: "Add ground cinnamon for warm aroma. (Sıcak aroma için tarçın ekleyin.)" },
      { icon: "🌾", en: "Flour", tr: "Un", amount: "200 g", sentence: "Measure 200 grams of flour. (200 gram un ölçün.)" },
      { icon: "🌻", en: "Vegetable Oil", tr: "Sıvı Yağ", amount: "100 ml", sentence: "Oil keeps the carrot cake moist. (Sıvı yağ havuçlu kekin nemini korur.)" }
    ],
    steps: "First, whisk eggs and sugar until frothy. Then, pour in the vegetable oil. After that, fold in flour, cinnamon, and grated carrots. Finally, bake in a preheated oven at 180°C for 45 minutes.",
  },
  {
    title: "Limonlu Kek Tarifi",
    briefTitle: "İngilizce Limonlu Kek Tarifi (Lemon Cake Recipe)",
    ingredientsHeading: "Limonlu Kek Malzemeleri ve Limon Suyu Oranı",
    stepsHeading: "Limonlu Kek Pişirme Adımları İngilizce Nasıl Yazılır?",
    english: "Lemon Cake Recipe",
    description: "Lemon Cake (Limonlu Kek), hamuruna rendelenmiş limon kabuğu ve taze sıkılmış limon suyu eklenerek ferahlatıcı narenciye aroması kazandırılan kektir.",
    image: "/blog/ingilizce-tarifler/images/kek-limonlu.webp",
    alt: "Lemon cake with fresh lemon glaze",
    ingredients: [["Flour", "Un", "200 g"], ["Sugar", "Şeker", "150 g"], ["Eggs", "Yumurta", "3 adet"], ["Lemon Zest", "Rendelenmiş limon kabuğu", "1 adet limon"], ["Lemon Juice", "Taze sıkılmış limon suyu", "30 ml (2 tbsp)"], ["Vegetable Oil", "Sıvı yağ", "100 ml"], ["Baking Powder", "Kabartma tozu", "10 g (2 tsp)"]],
    ingredientCards: [
      { icon: "🍋", en: "Lemon Zest", tr: "Limon Kabuğu Rendesi", amount: "1 lemon (1 limon)", sentence: "Zest 1 fresh lemon into the sugar. (Şekerin içine 1 taze limon kabuğu rendeleyin.)" },
      { icon: "🥤", en: "Lemon Juice", tr: "Taze Limon Suyu", amount: "30 ml (2 tbsp)", sentence: "Squeeze 30 ml of lemon juice into the batter. (Hamura 30 ml limon suyu sıkın.)" },
      { icon: "🌾", en: "Flour", tr: "Un", amount: "200 g", sentence: "Sift flour with baking powder. (Unu kabartma tozu ile birlikte eleyin.)" },
      { icon: "🍬", en: "Sugar", tr: "Toz Şeker", amount: "150 g", sentence: "Rub lemon zest with sugar to infuse flavor. (Aroma yayması için limon kabuğunu şekerle ovun.)" }
    ],
    steps: "First, rub lemon zest into sugar to release oils. Then, beat the eggs and add oil and lemon juice. After that, sift in the dry ingredients. Finally, bake at 180°C for 40 minutes.",
  },
];"""

content = content.replace(old_kek_variants, new_kek_variants)

# 3. Add ingredientCards to omletVariants
old_omlet_variants = """const omletVariants = [
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
];"""

new_omlet_variants = """const omletVariants = [
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
];"""

content = content.replace(old_omlet_variants, new_omlet_variants)

# 4. Omlet overview table: 4-column standard
old_omlet_table = """      ${table(["Omelette Variation (Omlet Çeşidi)", "Distinct Ingredients (Fark Yaratan Malzemeler)", "Cooking Time (Pişirme Süresi)", "Calories (Kalori)"], [
        ["Plain Omelette (Sade Omlet)", "Eggs, butter, salt, black pepper (Yumurta, tereyağı, tuz, karabiber)", "7 mins (7 dk)", "200 kcal"],
        ["Cheese Omelette (Peynirli Omlet)", "Eggs, grated cheddar or feta, butter (Yumurta, rendelenmiş kaşar veya beyaz peynir, tereyağı)", "8 mins (8 dk)", "260 kcal"],
        ["Vegetable Omelette (Sebzeli Omlet)", "Eggs, green pepper, tomato, onion, butter (Yumurta, yeşil biber, domates, soğan, tereyağı)", "10 mins (10 dk)", "220 kcal"],
        ["Mushroom Omelette (Mantarlı Omlet)", "Eggs, sliced button mushrooms, butter (Yumurta, dilimlenmiş kültür mantarı, tereyağı)", "9 mins (9 dk)", "230 kcal"]
      ])}"""

new_omlet_table = """      ${table(["English Recipe Name", "Türkçe Adı", "Main Ingredients (Ana Malzemeler)", "Main Steps (Temel Adımlar)"], [
        ["Plain Omelette", "Sade Omlet", "Eggs, butter, salt, black pepper (Yumurta, tereyağı, tuz, karabiber)", "Whisk eggs with seasoning, melt butter in pan, cook gently and fold in half. (Yumurtaları baharatla çırpın, tavada tereyağını eritin, kısık ateşte pişirin ve ikiye katlayın.)"],
        ["Cheese Omelette", "Peynirli Omlet", "Eggs, grated cheddar or feta, butter (Yumurta, rendelenmiş kaşar veya beyaz peynir, tereyağı)", "Whisk eggs, pour into pan, sprinkle grated cheese over half and fold over. (Yumurtaları çırpın, tavaya dökün, yarısına rendelenmiş peynir serpin ve katlayın.)"],
        ["Vegetable Omelette", "Sebzeli Omlet", "Eggs, green pepper, tomato, onion, butter (Yumurta, yeşil biber, domates, soğan, tereyağı)", "Sauté chopped pepper, tomato and onion, pour beaten eggs over and cook on low heat. (Doğranmış biber, domates ve soğanı soteleyin, çırpılmış yumurtaları üzerine dökün ve kısık ateşte pişirin.)"],
        ["Mushroom Omelette", "Mantarlı Omlet", "Eggs, sliced button mushrooms, butter (Yumurta, dilimlenmiş kültür mantarı, tereyağı)", "Sauté sliced mushrooms in butter until tender, pour eggs over and fold to serve. (Dilimlenmiş mantarları tereyağında soteleyin, yumurtaları dökün ve katlayarak servis edin.)"]
      ], "İngilizce Omlet Çeşitleri ve Pişirme Özeti")}"""

content = content.replace(old_omlet_table, new_omlet_table)

with open("src/app.js", "w", encoding="utf-8") as f:
    f.write(content)

print("Patch 1 applied successfully!")
