---
name: recipe-content-engine
description: Konuşarak Öğren İngilizce Tarifler projesi için Excel SEO Brieflerini ve Prompt Instance standartlarını zengin, çift dilli, görsel/ikon destekli malzeme kartlarına, kurumsal tasarım mimarisine ve interaktif web bileşenlerine dönüştüren standart içerik ve tasarım motoru kuralları.
---

# Recipe Content Engine (Standart Tarif İçerik ve Tasarım Motoru)

Bu doküman, Konuşarak Öğren İngilizce Yemek Tarifleri projesinde yayına alınacak tüm tarif sayfalarının (**Pizza, Menemen, Makarna, Kek, Omlet, Baklava, Smoothie vb.**) Excel SEO briefleri, `Prompt Instance` dokümanı ve **Lead Frontend & UI/UX** tasarım standartları doğrultusunda aynı yüksek kalite, okunabilirlik ve SEO standartlarında üretilmesini sağlayan kalıcı kurallar bütünüdür.

---

## 1. Mimari Prensipler ve Akış

Her yeni tarif içeriği şu 5 aşamalı hiyerarşiyi takip eder:

```
[1. Excel SEO Brief] ──> [2. Çift Dilli Veri Modeli (.json)] ──> [3. Görsel Üretimi & Markalama (.webp)] ──> [4. Bileşen & CSS Rendering] ──> [5. SEO & Schema Doğrulama]
```

### 1.1. İçerik ve Dil Kuralları (Bilingual Standards):
1. **İki Dilli Ayrımda Parantez `(...)` Standardı (Kesme `/` Yasağı)**:
   - Metinlerde, tablolarda, başlıklarda ve örnek cümlelerde İngilizce ve Türkçe ifadeler arasında asla kesme işareti (` / `) kullanılmaz.
   - Standart format her zaman **`English (Türkçe)`** olmalıdır:
     - **Tablo Başlıkları**: `MAIN INGREDIENTS (ANA MALZEMELER)`, `MAIN STEPS (TEMEL ADIMLAR)`, `Example Sentence (İngilizce - Türkçe)`
     - **Tablo Hücreleri**: `Flour, yeast, warm water, olive oil, salt (Un, maya, ılık su, zeytinyağı, tuz)`
     - **Örnek Cümleler**: `Preheat the oven to 220°C. (Fırını önceden 220 dereceye ısıtın.)`
     - **Başlık ve Etiketler**: `How Do You Make Homemade Pizza Step by Step? (Homemade Pizza İngilizce Adım Adım Nasıl Yapılır?)`
2. **Türkçe Karşılıklarda `veya` Bağlacı Standardı**:
   - Türkçe alternatif veya eş anlamlı terimlerde kesme (` / `) yerine mutlaka `veya` bağlacı kullanılır:
     - *Yanlış*: `Sürmek / Yaymak`, `Pizza Kenarı / Tabanı`, `Kepçe / Kaşık`
     - *Doğru*: `Sürmek veya yaymak`, `Pizza kenarı veya tabanı`, `Kepçe veya kaşık`, `Pizza kesici veya rulet`, `İlk olarak veya önce`
3. **H1 Altı "Definition" Zorunluluğu (Row 2 Standardı)**:
   - Brief'te H1 altındaki metodolojide istenen **"Definition"** bölümü iki parçadan oluşur:
     a) **Çift Dilli Lede Tanım Cümlesi**: `<strong>English definition sentence.</strong> (Türkçe açıklayıcı tanım cümlesi.)`
     b) **Çeşitler Özet Karşılaştırma Tablosu (`.hero-overview-table`)**:
        - Tablo öncesinde iki dilli giriş cümlesi yer alır (`Explore the four main variations with their English names... (Aşağıdaki tabloda 4 temel çeşidin İngilizce isimlerini... inceleyebilirsiniz.)`).
        - Sütunlar: `English Recipe Name | Türkçe Adı | Main Ingredients (Ana Malzemeler) | Main Steps (Temel Adımlar)`.
        - Tablodaki tüm malzeme ve adım özetleri parantezli iki dilli olmalıdır (`English text (Türkçe açıklama)`).
4. **Brief Başlık Bütünlüğü (Sıfır Sapma)**:
   - Excel briefindeki her satır (`H1`, `H2`, `H3`) eksiksiz olarak sayfada yer almalıdır.
   - Başlık seviyeleri ve sıralaması asla değiştirilemez.
5. **Tablo Öncesi İki Dilli Açıklama Zorunluluğu**:
   - Sayfadaki istisnasız her tablonun hemen öncesinde konuyu açıklayan iki dilli bir `<p class="section-intro">` cümlesi bulunmalıdır (`English sentence. (Türkçe açıklama cümlesi.)`).
6. **Zengin Malzeme Kartları (`.ingredient-grid`)**:
   - Malzemeler hem karşılaştırmalı bir tablo (`English Ingredient | Türkçe Karşılığı | Quantity`) hem de görsel/ikon yuvalı bir **Malzeme Kartı (`.ingredient-card`)** olarak sunulmalıdır.
7. **Kompakt Adım Listeleri**:
   - Tarif varyasyonları yönergeleri düz metin yerine sıra zarfları (`First`, `Then`, `After that`, `Next`, `Finally`) içeren `<ol class="compact-steps">` biçiminde olmalıdır.
8. **7 Adım Bölümünde Akordiyon Standartı**:
   - Adım adım ana tarif bölümü modern `.step-accordion` bileşeniyle sunulmalıdır. Her adım numara rozeti, eylem başlığı, İngilizce cümle, Türkçe çeviri ve `Key Cooking Action` rozeti içerir.
9. **Alt Tarif Meta Balonları Cümle Standardı (Variant Meta Tooltip Sentences)**:
   - Alt tarif kartlarındaki süre (`time`), porsiyon (`servings`) ve malzeme sayısı (`count`) hover tooltip'leri asla kısa veya jenerik söz öbeği olamaz. Mutlaka **alt tarif adını içeren tam birer cümle** olmalıdır:
     - **Süre (`time`)**:
       - EN: `[Alt Tarif İngilizce Adı] takes [Süre] of total preparation and cooking time.`
       - TR: `[Alt Tarif Türkçe Adı] toplam [Süre] hazırlık ve pişirme süresinde tamamlanır.`
     - **Porsiyon (`servings`)**:
       - EN: `[Alt Tarif İngilizce Adı] yields [Porsiyon] fresh servings for [öğün/kullanım].`
       - TR: `[Alt Tarif Türkçe Adı] [öğün/kullanım] için [Porsiyon] taze porsiyon sunar.`
     - **Malzeme Sayısı (`count`)**:
       - EN: `[Alt Tarif İngilizce Adı] requires [Adet] pantry ingredients for authentic [doku/tat] texture.`
       - TR: `[Alt Tarif Türkçe Adı] orijinal [doku/tat] dokusu için [Adet] temel malzeme gerektirir.`
10. **Görsel Malzeme Listesi ve "Visualize" Standart Formülü**:
   - "Visual Ingredient List (Görsel Malzeme Listesi)" dikey kartlarındaki her malzemenin açıklama cümleleri (`sentenceEn` ve `sentenceTr`) istisnasız sabit formülle kurulur:
     - EN: `[Alt Tarif İngilizce Adı] requires [İngilizce Malzeme Adı] to [işlev/eylem] (veya for [amaç/doku]).`
     - TR: `[Alt Tarif Türkçe Adı], [amaç / işlev / doku] için [Türkçe Malzeme Adı] gerektirir.`

---

## 2. Lead Frontend UI/UX ve Tipografi Standartları

1. **Hizalama Kuralı: Başlıklar Ortalı (Center), Metinler Sola Dayalı (Align-Left)**:
   - **H1, Bölüm Başlıkları (`H2`), Eyebrow Etiketleri ve Hero Kartı**: Sayfanın tam ortasında (`text-align: center; margin: 0 auto;`) yer alır.
   - **Lede Paragrafları, `.section-intro` ve Gövde Metinleri**: Okuma ergonomisi gereği sola dayalıdır (`text-align: left; line-height: 1.75;`), ancak sayfa ortasındaki 860px genişliğindeki temiz okuma kolonunda merkezlenir (`margin-left: auto; margin-right: auto; max-width: 860px;`).
2. **CTA Banner Standartları ve Quiz İzolasyonu (Kontrast & Tıklanabilirlik)**:
   - Konuşarak Öğren CTA banner'ları (`.course-banner`, `.app-banner`, `.pro-course-banner`) ortalı ve ferah olmalıdır (`margin: 2.2rem auto; max-width: 860px;`).
   - **CTA Banner'ları Asla `.exercise` (Quiz) Konteynerinin İçine Konulamaz**: Quiz alanı koyu renkli (`#0f172a`) olduğu için banner'lar okunaksız hale gelir ve buton tıklama dengesi bozulur. Banner'lar daima quiz bölümünün hemen DIŞINDA yer alır.
   - **CTA Metinleri Orijinal Türkçe Kalır**: Tanıtım ve dönüşüm mesajları İngilizceye çevrilmez, orijinal Türkçe metin korunur (Örn: `İngilizceyi tarif ezberleyerek değil, konuşarak öğrenin.`).
3. **Hero Facts Kartı (Tarif Özeti)**:
   - Sola kayma engellenir; `max-width: 780px; margin: 2.2rem auto;` ile sayfanın tam ortasına simetrik oturur.
   - Başlıklar iki satırlı ve iki dilli olmalıdır: `PREPARATION (HAZIRLIK)`, `COOKING (PİŞİRME)`, `SERVINGS (PORSİYON)`, `LEVEL (SEVİYE)`.
4. **Öğrenme ve Bölüm Panelleri Başlık Tipografisi (Büyük Font Kuralı)**:
   - Detay/özet kartlarının (`details.learning-panel summary h3`) başlıkları küçük bırakılamaz.
   - `font-size: 1.45rem !important; font-weight: 800 !important; line-height: 1.35 !important;` olmalıdır.
   - Altındaki eylem çağrısı span (`Malzeme kartları & tablosu`, `Adım adım yapılışı göster`): `font-size: 15px !important; font-weight: 700; color: #0284c7;`.
5. **7-Adım Rehberinde Akordiyon Kuralı (`.step-accordion`)**:
   - Ana adım adım tarif bölümü statik metin blokları yerine interaktif `<details class="step-accordion-item">` akordiyon bileşeniyle (`buildStepAccordionHTML`) sunulmalıdır.
   - İlk adım açık (`open`), diğer adımlar kapalı gelir. Adım rozeti, İngilizce cümle, sol bordürlü Türkçe çeviri ve `Key Cooking Action` rozeti içerir.
6. **Dil Kurallarında Sekme Sistemi (`.grammar-tabs`)**:
   - Dil bilgisi kuralları asla alt alta düz tablolar olarak sunulamaz.
   - Mutlaka erişilebilir `role="tablist"` ve `role="tabpanel"` içeren `.grammar-tabs` sekme sistemiyle sunulmalıdır (`Imperatives`, `Sequence Adverbs`, `Grammar Rules`).
7. **Tarif Menüsü Sıralaması (En Yeni Tarif En Sağa)**:
   - Üstteki Tarif Alt Menüsünde (`.sub-header-nav`) ve sayfa menülerinde en son hazırlanan en yeni tarif daima listenin **EN SAĞINA (en son sıraya)** eklenir.
8. **Yüksek Kontrastlı (WCAG AAA) Hover Tooltip Standartı**:
   - Rozet ve özet kartlarındaki bilgilendirme tooltip'leri:
     - **Arka Plan**: Derin gece mavisi (`#090d16`)
     - **İngilizce Başlık/Açıklama**: Canlı gök mavisi (`#38bdf8`)
     - **Türkçe Çeviri**: Kristal beyaz (`#ffffff`)
     - **CSS Kuralı**: Tooltip içindeki span'lerin bozulmaması için seçici `.meta-tooltip-wrap:hover > span.meta-badge` şeklinde sınırlandırılmalıdır.

---

## 3. Görsel Hazırlama ve Markalama Standartları

Tarif görselleri ham olarak sayfaya eklenemez. Kurumsal kimlik için `scripts/brand_recipe_images.py` veya `scripts/brand_<recipe>_images.py` ile otomatik işlenir:

1. **Format ve Çözünürlük**:
   - Boyut: **1200 × 675 px** (16:9 Hero) veya **1200 × 800 px** (Varyasyonlar).
   - Format: Optimize edilmiş **`.webp`** (kalite: 92).
   - Dizin: `public/images/<tarif-slug>-<varyasyon>.webp`.
2. **Sağ Üst Köşe (Logo Rozeti)**:
   - `public/ko-logo-yatay.png` kullanılır.
   - Şık beyaz zeminli, gölgeli ve yuvarlatılmış rozet (`border-radius: 8px; background: rgba(255, 255, 255, 0.94);`).
3. **Sol Alt Köşe (Çift Satırlı İki Dilli Rozet)**:
   - **1. Satır (İngilizce)**: Bold beyaz font (Örn: `Classic Butter Cookies Recipe`).
   - **2. Satır (Türkçe Parantez)**: Açık gri font (Örn: `(Klasik Tereyağlı Kurabiye Tarifi)`).
   - Zemin: Koyu lacivert yarı saydam cam (`background: rgba(15, 23, 42, 0.88); border: 1px solid rgba(255, 255, 255, 0.28);`).
4. **CSS Kırpılma (Crop) Koruması**:
   - Görsellerin sağ üstteki logoyu veya sol alttaki iki satırlı rozeti kesmesini önlemek için CSS kuralı:
     ```css
     .recipe-chapter figure img {
       width: 100% !important;
       height: auto !important;
       object-fit: contain !important;
       border-radius: 20px;
     }
     ```

---

## 4. Akıllı Çift Yönlü Navigasyon Standartı (Scroll Direction Switch)

Kullanıcı sayfada gezinirken navigasyon çakışmalarını önlemek için yön bazlı görünürlük uygulanır:

1. **Aşağı Kaydırırken (Scroll DOWN)**:
   - Sayfa içi detaylar incelenirken Sayfa Navigatörü (`.toc`) aktif kalır (`top: 12px` / `top: 16px`).
   - Tarifler Menüsü (`.sub-header`) alanı ferah tutmak için gizlenir (`transform: translateY(-100%); opacity: 0;`).
2. **Yukarı Kaydırırken (Scroll UP)**:
   - Sayfa başına dönülürken Tarifler Menüsü (`.sub-header`) görünür hale gelir (`top: 0`).
   - Sayfa Navigatörü (`.toc`) gizlenir (`transform: translateY(-120%); opacity: 0;`).
3. **Sayfa Başı ve Tıklama Koruması**:
   - `scrollY < 180` olduğunda her iki menü de doğal yerinde görünür.
   - Sayfa içi link tıklandığında yumuşak kaydırma (`smooth scroll`) esnasında menünün kaybolmaması için 750ms koruma süresi (`isNavClicking`) uygulanır.
   - Bölümlere `scroll-margin-top: 80px` verilir.

---

## 5. Mobil ve DevTools Inspect Görünüm Standartları (Taşma ve Boşluk Önleme)

Masaüstünde F12 Inspect / mobil modunda veya küçük ekranlarda sağ tarafta beyaz boşluk kalmasını engellemek için şu kurallar zorunludur:

1. **Gövde Kısıtı**:
   ```css
   html, body {
     overflow-x: hidden !important;
     width: 100% !important;
     max-width: 100vw !important;
   }
   ```
2. **Menü ve Navigatörlerde Yatay Kaydırma**:
   - `.sub-header` ve `.sub-header-inner`: `overflow-x: auto; -webkit-overflow-scrolling: touch;` ile ekran genişliğini asla aşamaz.
   - `.toc`: `width: calc(100% - 24px); max-width: calc(100vw - 24px); margin: 0 12px;` ile ekrana sığar ve sekmeler kendi içinde kayar.
3. **Mobil App Banner Butonları**:
   - `App Store` ve `Google Play` butonları mobilde yan yana zorlanmaz; alt alta istiflenir (`flex-direction: column; width: 100%; max-width: 280px;`).
4. **Tablolar**:
   - Tüm tablolar `.table-container` içinde `width: 100%; overflow-x: auto; -webkit-overflow-scrolling: touch;` ile sarılır.

---

## 6. Her Yeni Tarif İçin Zorunlu Kontrol Listesi (Pre-Delivery Audit Checklist)

Her yeni sayfa veya tarif tamamlandığında teslimden önce aşağıdaki 15 madde tek tek doğrulanmalıdır:

1. [x] **Başlık & Rozet Formatı**: Tüm başlık ve rozetler istisnasız `English (Türkçe)` şeklinde İngilizce öncelikli mi?
2. [x] **Font Büyüklüğü**: Detay/öğrenme paneli (`summary h3`) başlıkları en az `1.45rem` ve kalın mı?
3. [x] **7-Adım Akordiyon**: 7 adım bölümü `.step-accordion` ile interaktif ve açılır-kapanır mı?
4. [x] **Dil Bilgisi Sekmeleri**: Dil kuralları bölümü `.grammar-tabs` sekme sistemiyle ayrılmış mı?
5. [x] **CTA Banner Konumu**: CTA banner'ı quiz (`.exercise`) dışına alınmış, tam kontrastlı ve butonları tıklanabilir mi?
6. [x] **Menü Sıralaması**: Yeni tarif `.sub-header-nav` içinde en sağda yer alıyor mu?
7. [x] **Kurumsal Markalama**: Tüm görseller `scripts/brand_recipe_images.py` ile logo ve iki dilli başlıkla damgalandı mı?
8. [x] **Alternatif Terimler & Sıfır Kesme İşareti**: Eş anlamlı Türkçe terimlerde ve porsiyonlarda kesme (`/`) yerine `veya` kullanıldı mı?
9. [x] **Tablo Tanıtım Cümlesi**: Her tablonun üzerinde iki dilli bir `.section-intro` yer alıyor mu (İngilizce önce, Türkçe parantez içinde)?
10. [x] **Derleme & Taşma Testi**: `npm run build` hatasız geçiyor ve sayfada yatay taşma sıfır mı?
11. [x] **Mükerrer Numara Temizliği**: Adım akordiyonu başlıklarında (`titleEn`, `titleTr`) tekrar numara yazılmadı mı (`^\d+\.\s*` temizlendi mi)?
12. [x] **Görsel İçerik Uyumu**: Adım görselleri alakasız harici kaynaklardan değil, adımın eylemini bizzat uygulayan Pixar 3D animasyon stili olarak üretildi mi?
13. [x] **Malzeme Kartı Cümleleri**: Görsel malzeme kartlarında `sentenceEn` ve `sentenceTr` dolu ve alt tarif adıyla başlıyor mu?
14. [x] **Sayfa Kapsayıcı Sınıfı**: Ana kapsayıcı `<article class="recipe-guide">` sınıfını içeriyor mu (tooltip CSS uyumu)?
15. [x] **Öncelikli İngilizce Girişler**: Lede ve tablo üstü giriş cümlelerinde İngilizce cümle ilk sırada mı?

---

## 7. 2026 Revizyon Standartları: Bilingual Vurgu, Adım Görselleri ve Gelişmiş Etkileşim Kuralları

Tüm tarif sayfalarında geçerli olan ve pilot Kurabiye sayfasında doğrulanmış 15 standart:

1. **Açık Mavi Türkçe Highlight (`.tr-highlight`)**:
   - Başlık, gövde, tablo ve listelerdeki tüm `(Türkçe)` parantez içi ifadeler, göz yormayan soft pastel mavi arkaplan (`background: rgba(224, 242, 254, 0.85); color: #0369a1; border-radius: 5px;`) ile vurgulanır.
   - **Quiz Kartları ve Beyaz Zeminler**: Beyaz arka planlı kartlarda (`.quiz-card .tr-highlight`) soluk açık mavi yerine yüksek kontrastlı derin mavi (`color: #075985; background-color: #e0f2fe; font-weight: 600;`) kullanılır. Koyu zeminli bölüm başlıklarındaki açık tonlar asla beyaz kartların içine sızamaz (WCAG AAA uyumluluğu).
2. **Tablo Standartları (Caption, th & td Hover & Tooltip Bütünlüğü)**:
   - Tüm tablolarda `caption.table-caption` ve `.recipe-facts caption` görünür olmalı ve `[Tarif Adı] Özeti` formülü kullanılmalıdır.
   - Tablo başlıkları (`thead th` ve `.recipe-facts th`) hover durumunda arka plan ve renk geçişine (`th:hover`) sahiptir.
   - Hero Facts tablosunda hem `th` hem de `td` hücrelerinde imleçle üzerine gelindiğinde (hover) aynı gece mavisi (`#090d16`) WCAG AAA tooltip açılır.
   - `th`'nin `text-transform: uppercase` kuralının tooltip metnini büyük harfe zorlamasını engellemek için `.fact-tooltip` içinde `text-transform: none !important;` ve `letter-spacing: normal !important;` zorunludur (böylece hem th hem td aynı zarif formatı korur).
   - Cümle formülü sayfada kaba statik bir kutu olarak değil, hover tooltip'leri ve varyasyon balonları (`.meta-tooltip-wrap`) içinde sunulur: `[Tarif Adı] [Süre] içinde hazırlanır ve [Süre] pişirilir.`
3. **Semantik Header Kapanışı**:
   - `<h1>` ile başlayan `<header class="hero">` etiketi, `<section class="hero-overview-table" id="definition-variations">` bölümünden **ÖNCE** kapatılır.
4. **Büyük Font Eyebrow**:
   - `DEFINITION & VARIATIONS` ve `DISTINCT VARIATIONS` etiketleri `.eyebrow-lg` sınıfıyla daha okunaklı ve belirgin (`0.98rem - 1.05rem`, `font-weight: 800`) sunulur.
5. **App Banner Standartları**:
   - App Store butonu: `title="İngilizce konuşma App Store Uygulaması"`.
   - Google Play butonu: `title="İngilizce konuşma Google Play Uygulaması"`.
   - Logo görseli: `alt="İngilizce Konuşma Uygulaması"` ve `title="İngilizce Konuşma Uygulaması"`.
   - Banner metni tarif adını dinamik olarak içerir (Örn: `İngilizce kurabiye tariflerini ve mutfak kalıplarını her gün 10 dakika...`).
6. **Alt Tarifler (Varyasyonlar) Mimarisi ve Sticky Subnav**:
   - Çeşitler arasında hızlı geçiş sağlayan mini `.variant-subnav` çubuğu varyasyonlar bölümü (`#tarifler`) boyunca `position: sticky; top: 74px;` olarak yukarıda sabit kalır.
   - Sayfa kaydırıldıkça `IntersectionObserver` ile hangi çeşitte bulunuluyorsa o buton otomatik olarak `.active` durumuna geçer ve merkeze kayar.
   - Butonların üzerine gelindiğinde (hover) genişletilmiş iki dilli tam adı gösteren `.variant-tooltip` (`1. Classic Butter Cookies (Klasik Tereyağlı Kurabiye)`) açılır.
   - Çeşit bölümlerinde `scroll-margin-top: 145px !important;` uygulanarak sticky menülerin başlığı kapatması engellenir.
   - "Visual Ingredient Cards" başlığı `<h4>` değil, şık `.cards-subhead-badge` etiketidir (`Visual Ingredient List (Görsel Malzeme Listesi)`).
   - Hantal 2x2 kart ızgarası yerine tüm malzemeler şık bir dikey liste formatında (`<ul class="ingredient-list">` ve `<li class="ingredient-list-item">`), ikon, iki dilli başlık, İngilizce-Türkçe örnek cümle ve miktar rozetiyle listelenebilir (listable) olarak sunulur. Tablo ile 1:1 eşleşir.
   - Çeşit üstü özet balonları (`.meta-badge`) daima `English (Türkçe)` formatında olmalıdır (Örn: `35 mins (35 dakika)`, `24 pcs (24 adet)`, `4 ingredients (4 malzeme)`). **Tek Baloncuk Standardı**: İngilizce ve Türkçe ifadeler aynı tek bir hap baloncuk içinde yer alır; içerideki Türkçe metin asla ayrı bir iç baloncuk veya mükerrer kenarlık oluşturamaz.
7. **Navigasyonda Otomatik Merkeze Alma (Auto-Center)**:
   - Menü ve sekmelerde (`.sub-header-nav`, `.toc`, `.variant-subnav`) aktif olan bağlantı slider içinde `scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })` ile merkeze kaydırılır.
8. **7-Adım Pişirme Rehberi (Pixar 3D Animasyon Stili, Aksiyon Odaklı Görseller & Kurumsal Markalama)**:
   - **Pixar 3D Animasyon Stili Standardı**: Tüm adım görselleri (`public/images/steps/`) istisnasız **Pixar 3D animasyon stili** (`3D Pixar animation style, warm cozy kitchen, friendly character / chef, cinematic soft lighting, rich culinary textures`) olarak üretilmelidir.
   - **Bizzat Eylemi Yapan Karakter (Aksiyon Zorunluluğu)**: Görsel ASLA statik ve pasif bir malzeme kütlesi veya başka bir adımın / kapak görselinin tekrarı (duplicate) olamaz. Görselde o adımda gerçekleşen mutfak eylemi (aksiyon) bizzat bir karakter/aşçı veya eller tarafından canlı bir şekilde uygulanırken gösterilmelidir (Örn: Biberleri ve domatesleri bıçakla küp küp doğrayan şef; tavaya yumurtaları iki eliyle kıran aşçı; hamuru iki eliyle unlu tezgahta yoğuran karakter; kepçeyle pizza sosunu dairesel yayan aşçı; fırın küreğiyle pizzayı fırına süren karakter).
   - **Mükerrer Görsel Yasağı (Zero Duplicates)**: Her adımın görseli o adıma özel ve benzersiz (unique) olmak zorundadır; hiçbir adımda aynı görsel tekrar kullanılamaz.
   - **Görünür Kurumsal Markalama (Branding)**: Tüm adım görselleri sağ üst köşede Konuşarak Öğren beyaz logo rozeti (`public/ko-logo-yatay.png`), sol alt köşede ise iki satırlı iki dilli adım adı rozeti (`Step X: Action Name` / `(X. Adım: Eylem Adı)`) taşır. Format: 800x600 px (4:3 oranında), WebP (kalite: 92).
   - Her adımda dengeli süre dağılımıyla `Ingredients`, `Equipment` ve `Time` etiketleri (`.step-meta-pills`) yer alır.
9. **Quiz Bitiş Özeti & Kayıt CTA Ekranı**:
   - Son soru yanıtlandığında etkileşimli `.quiz-summary-card` açılır: skor puanı (`5 Soruda X Doğru`), tebrik/motivasyon metni, `Ücretsiz Tanışma Dersi Al` CTA butonu ve `Testi Yeniden Çöz` seçeneği sunulur.
10. **Bölüm İçi Çoklu Tablo ve Alt Başlıklarda Sekmeli Düzen (`.section-tabs`)**:
   - `Ingredients (Malzemeler)`, `Nutrition (Besin Değerleri)` ve `Units (Ölçüler)` gibi birden fazla alt başlık ve tablo içeren bölümler, alt alta yığılmak yerine interaktif `.grammar-tabs.section-tabs` sekmeli arayüzü ile sunulur.
   - Her sekme butonunda sıralı numara rozeti (`.tab-idx` örn: `01`, `02`) ve iki dilli sekme başlığı (`.tab-title` örn: `Ingredients (Malzemeler)`, `Equipment (Ekipmanlar)`) yer alır.
   - Mobilde sekme çubuğu (`.tab-list`) yatay taşmayı önlemek ve okunabilirliği korumak için yumuşak kaydırmalı (`overflow-x: auto; flex-wrap: nowrap;`) olarak çalışır.
   - Tab değiştirme motoru (`activateGrammarTab`) tüm sekmeli bölümlere genel (`.grammar-tabs, .section-tabs`) olarak hizmet verir; aktif panele ve butona `aria-selected` ve `.active` durumlarını atar.
11. **Adım Adım Başlıklarında Mükerrer Numaralandırma Yasağı**:
   - Adım akordiyonunda `.step-acc-badge` rozeti zaten numara (`1, 2, ...`) bastığı için, başlık metninde (`titleEn`, `titleTr`) tekrar numara yazılamaz.
   - Başlıklar daima `^\d+\.\s*` regex'i ile arındırılmış olmalıdır.
   - **Doğru**: `Add the Flour and Baking Powder (Unu ve Kabartma Tozunu Ekleyin)`
   - **Yanlış**: `2. Add the Flour and Baking Powder (2. Adım: Unu ve Kabartma Tozunu Ekleyin)`
12. **Körleme Harici Görsel İndirme Yasağı & İçerik Uyumu**:
   - Wikimedia veya harici web kaynaklarından anahtar kelime eşleşmesiyle körleme, alakasız (vintage çizim, deterjan reklamı vb.) görseller indirilip sayfaya konulması KESİNLİKLE YASAKTIR.
   - Her adım görseli İSTİSNASIZ Pixar 3D animasyon stili şablonuyla ve o adımdaki mutfak eylemiyle (hamur yoğurma, un eleme, pankek çevirme vb.) %100 uyumlu olarak üretilmelidir.
   - Görsel üretim kotası/bekleme süresi varsa kullanıcıya şeffafça bildirilmelidir; asla bağlamsız harici görseller kullanılmaz.
13. **Görsel Malzeme Listesinde Açıklama Cümlesi & Alt Tarif Adı Zorunluluğu**:
   - `.ingredient-list-item` içindeki `sentenceEn` ve `sentenceTr` özellikleri asla boş veya undefined bırakılamaz.
   - Her malzeme açıklama cümlesi mutlaka o alt tarifin adıyla başlamalıdır (`Classic Pancakes require all-purpose flour...` / `Klasik Pankek, pofuduk bir yapı için çok amaçlı un gerektirir.`).
14. **Standart Sayfa Kapsayıcı Sınıfı (`<article class="recipe-guide">`)**:
   - Tüm tarif sayfalarının ana kapsayıcısı standart olarak `<article class="recipe-guide">` sınıfını içermek zorundadır.
   - Bu sınıf eksik olduğunda `.recipe-guide` bazlı CSS hover tooltip kuralları tetiklenmez.
15. **Otomatik `/` Temizliği ve Öncelikli İngilizce Giriş Paragrafları**:
   - SEO brieflerinden veya ham metinlerden gelen tüm `/` işaretleri mutlak suretle `veya` bağlacına dönüştürülür (`Dökmek veya akıtmak`, `4 kişilik veya 8-10 adet`).
   - Lede ve tablo tanıtım paragraflarında Türkçe cümle asla başa gelemez. Format daima `English sentence. (Türkçe açıklama cümlesi.)` şeklinde olmalı ve Türkçe kısım `.tr-highlight` ile sarmalanmalıdır.


---

## 8. Standart Prompt Instance ve Yapay Zeka Üretim Şablonu

Tüm bu kuralları tek bir promptta toplayan ve yeni tarif sayfaları üretilirken doğrudan yapay zekaya (LLM) verilecek hazır sistem promptu [**`resources/prompt-instance-template.md`**](file:///d:/Otomasyonlar/İngilizce%20Tarifler/.agents/skills/recipe-content-engine/resources/prompt-instance-template.md) dosyasında yer almaktadır. Yeni bir tarif açılırken veya revizyon yapılırken bu şablon kullanılır.


