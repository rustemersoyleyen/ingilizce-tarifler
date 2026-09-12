# AGENTS.md — Konuşarak Öğren İngilizce Tarifler Geliştirme ve Tasarım Kuralları

Bu dosya, bu depoda (repository) çalışacak tüm yapay zeka ajanları (AI Agents) ve geliştiriciler için **kesin ve değiştirilemez** kural setlerini içerir. Yeni bir tarif sayfası üretilirken veya mevcut sayfalar güncellenirken bu standartlara istisnasız uyulmalıdır.

Referans ve Kusursuz Benchmark Sayfası: **İngilizce Pizza Tarifi (`src/data/pizza.json`, `src/styles.css`, `src/app.js`)**.

---

## 1. DİL VE METİN STANDARTLARI (BILINGUAL STANDARDS)

### 1.1. Parantez `(...)` Standardı ve Kesme İşareti (`/`) Yasağı
- İngilizce ve Türkçe içeriklerin yan yana verildiği hiçbir yerde kesme işareti (` / `) kullanılamaz.
- Tüm başlıklar, etiketler, tablo sütunları, tablo hücreleri ve örnek cümlelerde format **`English (Türkçe)`** olmak zorundadır.
  - **Doğru**: `MAIN INGREDIENTS (ANA MALZEMELER)`
  - **Yanlış**: `MAIN INGREDIENTS / ANA MALZEMELER`
  - **Doğru**: `Flour, yeast, warm water, olive oil, salt (Un, maya, ılık su, zeytinyağı, tuz)`
  - **Yanlış**: `Flour, yeast, warm water / Un, maya, ılık su`
  - **Doğru**: `How Do You Make Homemade Pizza Step by Step? (Homemade Pizza İngilizce Adım Adım Nasıl Yapılır?)`

### 1.2. Alternatif Terimlerde `veya` Standardı
- Türkçe karşılıklarda eş anlamlı veya alternatif eylemler verilirken asla kesme (`/`) kullanılmaz, mutlaka `veya` bağlacı kullanılır.
  - **Doğru**: `Sürmek veya yaymak` | **Yanlış**: `Sürmek / Yaymak`
  - **Doğru**: `Pizza kenarı veya tabanı` | **Yanlış**: `Pizza Kenarı / Tabanı`
  - **Doğru**: `Kepçe veya kaşık` | **Yanlış**: `Kepçe / Kaşık`
  - **Doğru**: `Pizza kesici veya rulet` | **Yanlış**: `Pizza Kesici / Rulet`
  - **Doğru**: `İlk olarak veya önce` | **Yanlış**: `İlk Olarak / Önce`

### 1.3. Lede Tanımı ve Tablo Öncesi Açıklama Zorunluluğu
- H1 altındaki ilk lede paragrafı iki dilli tanım içerir: `<strong>English sentence.</strong> (Türkçe açıklama cümlesi.)`
- Sayfadaki **her tablonun** hemen üzerinde konuyu özetleyen iki dilli bir tanıtım cümlesi (`.section-intro`) bulunmalıdır:
  - Örn: `Explore the four main variations with their English names... (Aşağıdaki tabloda 4 temel çeşidin İngilizce isimlerini... inceleyebilirsiniz.)`

### 1.5. Tüm Başlık ve Eyebrow Etiketlerinde İngilizce Öncelikli İki Dilli Format
- Sayfadaki istisnasız tüm başlıklar, alt başlıklar, bölüm üstü eyebrow (rozet) etiketleri ve açılır panel başlıkları **`English (Türkçe)`** düzeninde olmak zorundadır.
  - Asla Türkçe önce gelemez (Örn: `TATLI VE ATIŞTIRMALIK · DESSERT RECIPES` YASAKTIR; doğrusu: `DESSERT & SNACK RECIPES (TATLI VE ATIŞTIRMALIK)`).
  - Asla iki dil arasına nokta (` · `) veya kesme (` / `) konulamaz. Parantezli format esastır.

---

## 2. FRONTEND, UI/UX VE TİPOGRAFİ STANDARTLARI

### 2.1. Hizalama Kuralı (Alignment Hierarchy)
- **Başlıklar ve Rozetler**: Ortalanır (`text-align: center; margin: 0 auto;`). (H1, H2, H3, Eyebrow rozetleri).
- **Gövde Metinleri ve Açıklamalar**: Sola dayalıdır (`text-align: left; line-height: 1.75;`).
  - Ancak okuma ergonomisi için 860px genişliğindeki ana okuma sütununda merkezlenir (`max-width: 860px; margin-left: auto; margin-right: auto;`).
- **CTA Banner'ları**: Ortalanır (`text-align: center; margin: 2.2rem auto; max-width: 860px;`).

### 2.2. Hero Facts Kartı (Tarif Özeti)
- Sayfanın tam ortasında yer alır (`max-width: 780px; margin: 2.2rem auto;`). Sola veya sağa kayamaz.
- Başlıklar iki satırlı ve iki dillidir: `PREPARATION (HAZIRLIK)`, `COOKING (PİŞİRME)`, `SERVINGS (PORSİYON)`, `LEVEL (SEVİYE)`.

### 2.3. Yüksek Kontrastlı Hover Tooltip Kuralı (WCAG AAA)
- Tooltip bileşenleri `.meta-tooltip` asla düşük kontrastlı veya okunaksız olamaz.
  - **Arka Plan**: Derin gece mavisi (`#090d16`)
  - **İngilizce Başlık/Metin**: Canlı açık mavi (`#38bdf8`)
  - **Türkçe Çeviri**: Tam beyaz (`#ffffff`)
  - **CSS Seçici Koruması**: `.meta-tooltip-wrap:hover > span.meta-badge` ile alt span'lerin özellikleri izole edilir.

### 2.4. 7-Adım Pişirme Rehberinde Akordiyon Kuralı (Step Accordion)
- Ana adım adım tarif bölümü (Örn: 7 Adımda Pizza, 7 Adımda Tereyağlı Kurabiye) **ASLA düz metin veya statik liste blokları olarak bırakılamaz**.
- Mutlaka interaktif ve açılır-kapanır `.step-accordion` yapısıyla sunulmalıdır:
  - `<details class="step-accordion-item">` kullanılır.
  - İlk adım varsayılan olarak açık (`open`), diğer adımlar kapalı gelir.
  - Her akordiyon başlığında (`summary`): Adım Numarası Rozeti (`.step-acc-badge`), İki Dilli Adım Başlığı (`.step-acc-title`), Açma/Kapama İkonu (`+ / -`) bulunur.
  - Gövde içinde: Vurgulu İngilizce cümle (`.step-acc-en`), Sol kenar çizgili Türkçe çeviri (`.step-acc-tr`), Pişirme Eylemi Rozeti (`.step-acc-action-badge`).

### 2.5. Dil Bilgisi Kurallarında Sekme (Tab) Sistemi Kuralı
- Tarif dil bilgisi, emir kipi (imperatives) ve sıra zarfları (sequence adverbs) bölümleri **ASLA alt alta upuzun düz tablolar halinde yığılamaz**.
- Mutlaka erişilebilir ve modern bir `.grammar-tabs` sekme arayüzüyle sunulmalıdır:
  - `role="tablist"` altında butonlar: `1. Imperatives (Emir Kipi)`, `2. Sequence Adverbs (Sıra Zarfları)`, `3. Grammar Rules (Dil Kuralları)`.
  - Butona tıklandığında yalnızca ilgili `.tab-panel` açılır, diğerleri gizlenir (`hidden`).
  - Her sekme kendi özel iki dilli tablosunu ve bağlam cümlesini barındırır.

### 2.6. Öğrenme Panelleri Başlık Tipografisi (Büyük Font Kuralı)
- Detay/özet kartlarının (`details.learning-panel summary h3`) başlıkları küçük bırakılamaz.
  - `font-size: 1.45rem !important;`
  - `font-weight: 800 !important;`
  - `line-height: 1.35 !important;`
  - Altındaki eylem çağrısı span (`Malzeme kartları & tablosu`, `Adım adım yapılışı göster`): `font-size: 15px !important; font-weight: 700; color: #0284c7;`.

### 2.7. CTA Banner Konumu ve Quiz İzolasyonu (Kontrast & Tıklanabilirlik)
- CTA banner'ları (`.course-banner`, `.pro-course-banner`, `.app-banner`) **ASLA `.exercise` (Quiz) konteynerinin içine yerleştirilemez**.
- Quiz alanı koyu lacivert (`#0f172a`) zeminli olduğu için içine konan açık renkli banner'lar kontrast kaybına uğrar, yazıları okunmaz ve buton tıklama hiyerarşisi bozulur.
- CTA banner'ları her zaman quiz bloğunun **hemen arkasında/dışında**, tam beyaz arka planlı, yüksek kontrastlı ve geniş tıklama alanına sahip butonlarla sunulmalıdır.
- Quiz seçenek butonları temiz kontrastlı (`background: #f8fafc; border: 1px solid #cbd5e1; color: #0f172a;`), tıklandığında doğru için yeşil (`#22c55e`), yanlış için kırmızı (`#ef4444`) geri bildirim vermelidir.

### 2.8. Tarif Menüsü Sıralama Kuralı (En Yeni Tarif En Sağa)
- Üstteki Tarif Alt Menüsünde (`.sub-header-nav`) ve sayfa menülerinde tariflerin sırası rastgele belirlenemez.
- **Kural**: En son hazırlanan veya sisteme yeni eklenen en güncel tarif her zaman menünün **EN SAĞINA (en son sıraya)** eklenir.
  - Örnek Sıralama: `Tüm Tarifler -> Makarna -> Baklava -> Smoothie -> Kek -> Pankek -> Omlet -> Menemen -> Pizza -> Kurabiye`.

---

## 3. GÖRSEL ÜRETİMİ VE KURUMSAL MARKALAMA (IMAGE BRANDING)

Tüm tarif görselleri merkezi `scripts/brand_recipe_images.py` betiği ile standart kurumsal damgalarla işlenmelidir:

1. **Ham Görsel Saklama Standardı**:
   - Ham (unbranded) görseller daima `public/images/raw/` dizininde saklanır (`baklava-hero.jpg`, `smoothie-cilekli.jpg`, `pancake-banana.jpg`, `kurabiye-butter.jpg` vb.).
   - Damgalama motoru bu kaynakları okuyarak web için optimize edilmiş `.webp` çıktıları üretir. Böylece kalite kaybı ve mükerrer logo basımı engellenir.
2. **Format**: Web için optimize edilmiş gerçek `.webp` (kalite: 92, method: 6).
3. **Standart Ebatlar**:
   - **Hero (Kapak) Görseli**: `1200x675` (16:9 geniş ekran oranı).
   - **Çeşit / Bölüm Görselleri**: `1200x800` (3:2 oranı).
4. **Sağ Üst Köşe (Logo Rozeti)**:
   - Konuşarak Öğren kurumsal yatay logo rozeti (`public/ko-logo-yatay.png`).
   - Beyaz yarı saydam yuvarlatılmış kart üzerinde (`background: rgba(255, 255, 255, 0.94); border-radius: 10px; padding: 14px 8px; margin: 24px;`).
5. **Sol Alt Köşe (Çift Satırlı İki Dilli Başlık Rozeti)**:
   - **1. Satır**: Kalın beyaz font ile İngilizce Adı (Örn: `Pistachio Baklava Recipe`, `Classic Butter Cookies Recipe`).
   - **2. Satır**: İtalik / açık gri tonda parantezli Türkçe Adı (Örn: `(Fıstıklı Baklava Tarifi)`, `(Klasik Tereyağlı Kurabiye Tarifi)`).
   - **Zemin**: Koyu lacivert yarı saydam cam rozet (`background: rgba(15, 23, 42, 0.88); border: 1px solid rgba(255, 255, 255, 0.28); border-radius: 10px; margin: 24px;`).
6. **Otomatik Çalıştırma Komutları**:
   - Belirli bir tarif için: `python scripts/brand_recipe_images.py --recipe <kurabiye|smoothie|baklava|pancake|menemen|pizza>`
   - Tüm tarifler için: `python scripts/brand_recipe_images.py --all`
   - Tekil özel görsel için: `python scripts/brand_recipe_images.py --input <yol> --output <yol.webp> --title "<EN>" --subtitle "<TR>" --size 1200x675`
7. **CSS Kırpılma (Crop) Yasağı**:
   - Rozetlerin ve logonun ekranda kesilmesini önlemek için görsel stili:
     ```css
     .recipe-chapter figure img {
       width: 100% !important;
       height: auto !important;
       object-fit: contain !important;
       border-radius: 20px;
     }
     ```

---

## 4. AKILLI ÇİFT YÖNLÜ NAVİGASYON (SCROLL DIRECTION SWITCH)

Sayfada iki sabit navigasyon çubuğu bulunur:
1. **Tarifler Menüsü (`.sub-header`)**: Farklı tarifler arasında geçiş sağlar.
2. **Sayfa İçi Navigatör (`.toc`)**: İlgili tarifin bölümleri arasında hızlı atlama sağlar.

### Çalışma Mantığı:
- **Aşağı Kaydırırken (Scroll DOWN)**:
  - Kullanıcı içeriğe odaklandığı için `.sub-header` gizlenir (`transform: translateY(-100%); opacity: 0;`).
  - Sayfa Navigatörü (`.toc`) sabit kalır (`top: 12px` / `16px`).
- **Yukarı Kaydırırken (Scroll UP)**:
  - Kullanıcı menüye veya başa dönmek istediği için `.sub-header` görünür (`top: 0; transform: translateY(0); opacity: 1;`).
  - Sayfa Navigatörü (`.toc`) gizlenir (`transform: translateY(-120%); opacity: 0;`).
- **Sayfa Başı (`scrollY < 180`)**: Her iki menü de doğal yerinde görünür.
- **Tıklama Koruması**: Menü linkine tıklandığında `isNavClicking = true` atanır ve 750ms boyunca scroll yönü algısı kilitlenerek titreme/kaybolma engellenir.

---

## 5. MOBİL VE DEVTOOLS INSPECT UYUMLULUĞU (ZERO HORIZONTAL SCROLL)

Mobil cihazlarda ve masaüstü F12 Inspect modunda sağ tarafta beyaz boşluk oluşmasını önlemek için:

1. **Global Kısıt**:
   ```css
   html, body {
     overflow-x: hidden !important;
     width: 100% !important;
     max-width: 100vw !important;
   }
   ```
2. **Menü Kısıtları**:
   - `.sub-header` ve `.sub-header-inner`: Ekran dışına taşamaz, `overflow-x: auto; -webkit-overflow-scrolling: touch;`.
   - `.toc`: `width: calc(100% - 24px); max-width: calc(100vw - 24px); margin: 0 12px;` ile ekrana kilitlenir.
3. **Tablo Sarmalayıcı**:
   - Tüm tablolar istisnasız `<div class="table-container">` içine alınır (`width: 100%; overflow-x: auto;`).
4. **App Banner Butonları**:
   - Mobilde App Store ve Google Play butonları yan yana zorlanmaz; alt alta istiflenir (`flex-direction: column; width: 100%; max-width: 280px;`).

---

## 6. HER YENİ TARİF İÇİN ZORUNLU KONTROL LİSTESİ (PRE-DELIVERY AUDIT)

Ajan veya geliştirici, bir tarifi tamamladığını beyan etmeden önce aşağıdaki 10 maddeyi teker teker test etmek ve doğrulamak zorundadır:

- [ ] **1. Başlık Formatı**: İstisnasız tüm H1-H3 ve eyebrow etiketleri `English (Türkçe)` formatında mı? (Kesme `/` veya nokta yok, İngilizce ilk sırada).
- [ ] **2. Font Büyüklüğü**: Öğrenme paneli (`summary h3`) başlıkları en az `1.45rem`, kalın ve okunaklı mı?
- [ ] **3. 7-Adım Akordiyon**: 7 adım bölümü `.step-accordion` ile interaktif, açılır-kapanır yapıda mı?
- [ ] **4. Dil Bilgisi Sekmeleri**: Dil kuralları bölümü `.grammar-tabs` ile 3 sekmeli (`Imperatives`, `Sequence Adverbs`, `Grammar Rules`) olarak çalışıyor mu?
- [ ] **5. CTA Konumu**: CTA banner'ı quiz'in (`.exercise`) kesinlikle DIŞINDA mı? Butonları tıklanabilir ve metinleri net mi?
- [ ] **6. Menü Sıralaması**: En yeni eklenen tarif, `.sub-header-nav` menüsünde en sağda mı?
- [ ] **7. Kurumsal Markalama**: Tüm görseller `scripts/brand_recipe_images.py` ile sağ üstte Konuşarak Öğren logolu ve sol altta iki dilli rozetli `.webp` olarak mı üretildi?
- [ ] **8. Alternatif Terimler**: Türkçe ifadelerde kesme (`/`) yerine `veya` kullanıldı mı?
- [ ] **9. Tablo Tanıtım Cümleleri**: Her tablonun üzerinde iki dilli bir `.section-intro` açıklaması mevcut mu?
- [ ] **10. Sıfır Yatay Taşma & Derleme**: `npm run build` hatasız tamamlanıyor mu ve mobilde sıfır yatay taşma var mı?
