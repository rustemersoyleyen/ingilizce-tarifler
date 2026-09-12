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

Her yeni sayfa veya tarif tamamlandığında teslimden önce aşağıdaki 10 madde tek tek doğrulanmalıdır:

1. [x] **Başlık & Rozet Formatı**: Tüm başlık ve rozetler istisnasız `English (Türkçe)` şeklinde İngilizce öncelikli mi?
2. [x] **Font Büyüklüğü**: Detay/öğrenme paneli (`summary h3`) başlıkları en az `1.45rem` ve kalın mı?
3. [x] **7-Adım Akordiyon**: 7 adım bölümü `.step-accordion` ile interaktif ve açılır-kapanır mı?
4. [x] **Dil Bilgisi Sekmeleri**: Dil kuralları bölümü `.grammar-tabs` sekme sistemiyle ayrılmış mı?
5. [x] **CTA Banner Konumu**: CTA banner'ı quiz (`.exercise`) dışına alınmış, tam kontrastlı ve butonları tıklanabilir mi?
6. [x] **Menü Sıralaması**: Yeni tarif `.sub-header-nav` içinde en sağda yer alıyor mu?
7. [x] **Kurumsal Markalama**: Tüm görseller `scripts/brand_recipe_images.py` ile logo ve iki dilli başlıkla damgalandı mı?
8. [x] **Alternatif Terimler**: Eş anlamlı Türkçe terimlerde kesme (`/`) yerine `veya` kullanıldı mı?
9. [x] **Tablo Tanıtım Cümlesi**: Her tablonun üzerinde iki dilli bir `.section-intro` yer alıyor mu?
10. [x] **Derleme & Taşma Testi**: `npm run build` hatasız geçiyor ve sayfada yatay taşma sıfır mı?
