# Recipe Design & CSS Architecture Rules (Tasarım ve CSS Kural Seti)

Bu kural seti, Konuşarak Öğren İngilizce Tarifler projesindeki tüm tarif sayfalarının görsel estetiğini, tipografik hiyerarşisini, bileşen standartlarını ve CSS tasarım sistemini tanımlar.

---

## 1. Tasarım Felsefesi ve Görsel Hiyerarşi

1. **Lead Frontend & Modern Web Estetiği**:
   - Sayfa standart bir blog yazısı gibi değil, zenginleştirilmiş, etkileşimli bir "dijital tarif kılavuzu ve dil öğrenim motoru" gibi hissettirmelidir.
   - Cam efekti (glassmorphism), yumuşak degradeler, yuvarlatılmış köşeler (`border-radius: 14px - 24px`), ve derin gölgeler (`box-shadow: 0 10px 30px rgba(0,0,0,0.06)`) kullanılır.

2. **Hizalama ve Okuma Ergonomisi**:
   - **Başlıklar**: Ortalanır (`text-align: center;`). Sayfanın ritmini ve odak noktalarını belirler.
   - **Gövde Metinleri**: Sola dayalıdır (`text-align: left; line-height: 1.75;`). Uzun paragrafların göz yormadan okunmasını sağlar.
   - **Okuma Kolonu Genişliği**: Tüm metin blokları ve tablolar `max-width: 860px; margin: 0 auto;` genişliğindeki merkezi hatta hizalanır.

3. **CTA Dokunulmazlığı**:
   - Konuşarak Öğren CTA banner'ları (`.course-banner`, `.app-banner`, `.pro-course-banner`) orijinal Türkçe metinleri ve dönüşüm odaklı merkezli yerleşimleri ile korunur.

---

## 2. Renk Paleti ve Kontrast Standartları

- **Birincil Arka Plan**: `#f8fafc` veya `#ffffff` (Temiz, aydınlık tuval)
- **Başlık Rengi**: `#0f172a` (Derin lacivert / slate-900)
- **Gövde Metin Rengi**: `#334155` (Okunabilir slate-700)
- **Vurgu & İkincil**: `#2563eb` (Mavi), `#0284c7` (Sky), `#d97706` (Amber)
- **Tooltip ve Koyu Rozetler**:
  - Arka plan: `#090d16` (Gece mavisi)
  - İngilizce metin: `#38bdf8` (Açık gök mavisi)
  - Türkçe metin: `#ffffff` (Saf beyaz)
  - Kontrast Oranı: **WCAG AAA (>7:1)**

---

## 3. Bileşen Mimarisi

### 3.1. Hero Facts Kartı (`.hero-facts-card`)
- `max-width: 780px; margin: 2.2rem auto;` ile sayfanın tam ortasında konumlanır.
- 4 temel faktör (`PREPARATION`, `COOKING`, `SERVINGS`, `LEVEL`) iki dilli ve iki satırlı başlıklarla sunulur.
- Hover edildiğinde interaktif `.meta-tooltip` görünür.

### 3.2. Çeşitler Genel Bakış Tablosu (`.hero-overview-table`)
- H1 altındaki Row 2 gereksinimidir.
- 4 sütun: `English Recipe Name | Türkçe Adı | Main Ingredients (Ana Malzemeler) | Main Steps (Temel Adımlar)`.
- Tablodan hemen önce iki dilli giriş cümlesi (`.section-intro`) bulunur.

### 3.3. Tarif Çeşitleri Bölümleri (`.recipe-chapter`)
- Her çeşit (Varyasyon 1, 2, 3...) tek sütunlu ferah kart mimarisinde sunulur.
- Görseller `.recipe-chapter figure img` içinde:
  - `width: 100% !important;`
  - `height: auto !important;`
  - `object-fit: contain !important;`
  - Sağ üst logo rozetini ve sol alt iki satırlı başlık rozetini asla kesmeyecek şekilde render edilir.

### 3.4. Malzeme Kartları Grid'i (`.ingredient-grid`)
- Malzemeler hem karşılaştırmalı tablo hem de ikonlu/fotoğraflı `.ingredient-card` bileşeni ile verilir.
- İngilizce malzeme adı kalın, Türkçe karşılığı parantez içinde yer alır.

### 3.5. Adım Adım Akordiyon (`.step-accordion`)
- Numaralı adım rozeti (`.step-num`), eylem başlığı, İngilizce cümle, Türkçe çeviri ve `Key Cooking Action` rozeti içerir.

### 3.6. Mini Quiz Kartı (`.mini-quiz-card`)
- Kullanıcının tarifte öğrendiği kavramları pekiştirmesi için yüksek kontrastlı, tıklanabilir seçenekli ve anında geri bildirimli bileşendir.

### 3.7. Diğer Tarifler Bölümü (`.other-recipes-section`)
- Başlık: `OTHER RECIPES (DİĞER İNGİLİZCE TARİFLER)` ortalanmış.
- Kartlar grid yapısında, iki dilli başlık ve süresiyle sunulur.

---

## 4. Navigasyon Çift Yönlü Scroll Mimarisi

- **Aşağı Kaydırırken (Scroll DOWN)**:
  - `.sub-header`: `transform: translateY(-100%); opacity: 0; pointer-events: none;`
  - `.toc`: `transform: translateY(0); opacity: 1; pointer-events: auto;`
- **Yukarı Kaydırırken (Scroll UP)**:
  - `.sub-header`: `transform: translateY(0); opacity: 1; pointer-events: auto;`
  - `.toc`: `transform: translateY(-120%); opacity: 0; pointer-events: none;`
- **Sayfa Başı (`scrollY < 180`)**:
  - Her iki navigatör de orijinal yerinde görünür.
- **Tıklama Koruması**:
  - `isNavClicking = true` (750ms) süresince animasyon titremesi engellenir.

---

## 5. Mobil ve DevTools Inspect Uyumluluğu

- `html, body { overflow-x: hidden !important; width: 100% !important; max-width: 100vw !important; }`
- `.sub-header-inner` ve `.toc`: Mobilde yatay kaydırılabilir (`overflow-x: auto; -webkit-overflow-scrolling: touch;`).
- `.toc` genişliği ekrana kilitlenir: `width: calc(100% - 24px); max-width: calc(100vw - 24px); margin: 0 12px;`.
- App Store ve Google Play indirme butonları mobilde dikey istiflenir (`flex-direction: column; width: 100%; max-width: 280px;`).
- Tüm tablolar `<div class="table-container">` ile sarılır (`overflow-x: auto; width: 100%;`).
