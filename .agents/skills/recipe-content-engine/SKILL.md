---
name: recipe-content-engine
description: Konuşarak Öğren İngilizce Tarifler projesi için Excel SEO Brieflerini ve Prompt Instance standartlarını zengin, çift dilli, görsel/ikon destekli malzeme kartlarına ve interaktif web bileşenlerine dönüştüren standart içerik motoru kuralları.
---

# Recipe Content Engine (Standart Tarif İçerik ve Görsel Motoru)

Bu rehber, Konuşarak Öğren İngilizce Yemek Tarifleri projesinde yayına alınacak tüm tarif sayfalarının (**Menemen, Makarna, Kek, Omlet, Baklava, Smoothie vb.**) Excel SEO briefleri ve `Prompt Instance` dokümanı doğrultusunda aynı yüksek kalite, tasarım ve SEO standartlarında üretilmesini sağlayan kalıcı kurallar bütünüdür.

---

## 1. Mimari Prensipler ve Akış

Her yeni tarif içeriği şu 5 aşamalı hiyerarşiyi takip eder:

```
[1. Excel SEO Brief] ──> [2. Çift Dilli Veri Modeli (.json)] ──> [3. Görsel Üretimi & Markalama (.webp)] ──> [4. Bileşen & CSS Rendering] ──> [5. SEO & Schema Doğrulama]
```

### Temel Kurallar ve Brief Sadakati:
1. **Brief Başlık Bütünlüğü (Sıfır Sapma)**:
   - Excel briefindeki her satır (`H1`, `H2`, `H3`) eksiksiz olarak sayfada yer almalıdır.
   - Başlık metinleri, seviyeleri ve sıralaması asla değiştirilemez.
2. **H1 Altı "Definition" Zorunluluğu (Row 2 Standardı)**:
   - Brief'te H1 altındaki metodolojide istenen **"Definition"** bölümü iki parçadan oluşur:
     a) **Çift Dilli Lede Tanım Cümlesi**: `<strong>English definition sentence.</strong> / Türkçe açıklayıcı tanım cümlesi.`
     b) **Çeşitler Özet Karşılaştırma Tablosu (`.hero-overview-table`)**:
        - Tablo öncesinde iki dilli giriş cümlesi yer alır (`<p class="section-intro"><strong>İngilizce ve Türkçe Menemen Çeşitleri Karşılaştırması</strong>: ... / ...</p>`).
        - Sütunlar: `English Recipe Name | Türkçe Adı | Main Ingredients / Ana Malzemeler | Main Steps / Temel Adımlar`.
        - **Kritik Kural**: Tablodaki tüm malzeme ve adım özetleri **hem İngilizce hem Türkçe karşılıklı (`English / Türkçe`)** olarak yazılmalıdır.
3. **Tarif Üstü Bilgi Rozetleri (Pill Badges)**:
   - Her tarif çeşidi başlığının (`H2`) hemen altında süreyi, porsiyonu ve malzeme sayısını gösteren kapsül rozetler (`.chapter-meta`) yer alır (Örn: `[25 dakika] [2 kişilik] [7 malzeme]`).
4. **Tablo Öncesi İki Dilli Açıklama Zorunluluğu**:
   - Sayfadaki **istisnasız her tablonun** hemen öncesinde konuyu açıklayan iki dilli bir `<p class="section-intro">` cümlesi bulunmalıdır (`English sentence. / Türkçe açıklama cümlesi.`). Hiçbir tablo açıklamasız kalamaz.
5. **Tartışma ve Karşılaştırma Kartları**:
   - Başlık altında iki dilli tanıtım cümlesi yer alır.
   - Altında `ENGLISH / TÜRKÇE` etiketli yan yana iki dilli kartlar (`.bilingual`) kullanılır.
6. **Dil Kuralları Sekmeli (Tab) Yapı**:
   - Birden fazla alt konuyu (`01 Genel kurallar`, `02 Emir kipi`, `03 Sıra zarfları`) barındıran gramer bölümlerinde `.grammar-tabs` interaktif sekmeli yapısı zorunludur.
7. **Tablo ve Zengin Malzeme Kartları**:
   - Malzemeler sadece tabloyla geçiştirilemez; her malzeme aynı zamanda görsel/ikon yuvalı bir **Malzeme Kartı (`.ingredient-card`)** olarak sunulmalıdır.
8. **Kompakt Adım Listeleri**:
   - Tarif varyasyonları yönergeleri düz metin veya tablo yerine sıra zarfları (`First`, `Then`, `After that`, `Next`, `Finally`) içeren `<ol class="compact-steps">` biçiminde olmalıdır.
9. **İç Linkleme (Internal Links) Sadakati**:
   - Brief'te belirtilen hedef anahtar kelimeler (Örn: `İngilizce Mutfak Sözcükleri`, `İngilizce Ölçü Birimleri`, `First, Then, After`, `8. Sınıf İngilizce Konuları`) ilgili paragraflarda doğal bağlamda `<a>` linki olarak yer almalıdır.
10. **Kurumsal Renk ve Marka Kimliği Standartı**:
   - Tablolar, sekmeler (tabs) ve rozetlerde yeşil vb. yabancı tema renkleri kullanılmaz.
   - Konuşarak Öğren kurumsal marka renkleri esastır:
     - **Tablo Başlıkları (`th`)**: Açık mavi zemin (`#f0f7ff`), derin lacivert metin (`#1e3a8a`), marka mavisi alt çizgi (`border-bottom: 2px solid #309dff`).
     - **Gramer Sekmeleri (`.tab-list`)**: Nötr açık gri taban (`#f8fafc`), aktif sekme altında marka mavisi çizgi (`#309dff`), aktif numara mavisi (`#309dff`), hover (`#1d4ed8`).
     - **Kapsül Rozetler (`.chapter-meta span`)**: Açık mavi zemin (`#f0f7ff`), mavi kenarlık (`#bfdbfe`), mavi metin (`#1d4ed8`).
     - **Vurgu ve CTA Butonları**: Konuşarak Öğren Turuncusu (`#f16c00`).

---

## 2. Görsel Hazırlama ve Markalama Standartları

Tarif görselleri ham olarak sayfaya eklenemez. Kurumsal kimlik ve kullanıcı deneyimi için aşağıdaki kurallara göre markalanmalıdır:

1. **Format ve Çözünürlük**:
   - Boyut: **1200 × 675 px** (16:9) veya varyasyonlar için **1200 × 800 px** (4:3 / 3:2).
   - Format: Optimize edilmiş **`.webp`**.
   - Dizin: `public/images/<tarif-slug>-<varyasyon>.webp`.

2. **Sağ Üst Köşe (Logo Rozeti)**:
   - `public/ko-logo-yatay.png` logosu kullanılır.
   - Logo, yarı saydam şık beyaz zeminli, hafif gölgeli ve yuvarlatılmış köşeli bir rozet (`padding: 8px 14px`, `border-radius: 8px`, `background: rgba(255, 255, 255, 0.92)`) içine yerleştirilir.

3. **Sol Alt Köşe (Görsel İsmi Rozeti)**:
   - Tarifin İngilizce resmi adı (Örn: *Classic Menemen Recipe*, *Menemen with Cheese Recipe*) yazılır.
   - Koyu cam / kontrastlı zemin üzerinde (`background: rgba(15, 23, 42, 0.82)`, `border-radius: 8px`, `color: #ffffff`, kalın modern tipografi) yer alır.

4. **Otomasyon Scripti**:
   - Görseller `scripts/brand_recipe_images.py` scripti kullanılarak tek komutla otomatik olarak markalanır ve `.webp` formatına dönüştürülür.

---

## 3. Zengin Malzeme Kartları Standardı (`.ingredient-grid`)

Brief'te *"List definition + listing with headwords"* istenen her malzeme bölümünde iki bileşen yan yana/alt alta sunulur:

1. **Karşılaştırmalı Tablo**:
   - Sütunlar: `English Ingredient | Türkçe Karşılığı | Quantity`
2. **Görsel/İkon Hazırlıklı Malzeme Kartları (`.ingredient-grid`)**:
   ```html
   <div class="ingredient-grid">
     <article class="ingredient-card">
       <div class="ingredient-card-header">
         <div class="ingredient-thumb">
           <span class="ingredient-icon">🥚</span>
         </div>
         <span class="quantity-badge">4 large</span>
       </div>
       <h4>Eggs <small>(Yumurta)</small></h4>
       <p class="card-en">Eggs give menemen its soft, creamy texture.</p>
       <p class="card-tr">Yumurta, menemeni yumuşak ve kremamsı yapar.</p>
     </article>
   </div>
   ```

---

## 4. Pişirme Adımları Standardı (`.compact-steps`)

Tarif çeşitleri adımlarında düz tablo kullanılmaz. Sıra zarfları (First, Then, After that, Next, Finally) içeren şu yapı zorunludur:

```html
<ol class="compact-steps">
  <li>
    <span class="step-num-badge">1. adım</span>
    <div class="step-body">
      <p class="en-text"><strong>First, chop 2 green peppers and 3 tomatoes.</strong></p>
      <p class="tr-text">Önce 2 yeşil biberi ve 3 domatesi doğrayın.</p>
    </div>
  </li>
  <!-- ... -->
</ol>
```

---

## 5. Dil Kuralları ve Vurgu Standartları

1. **Sekmeli Arayüz (`.grammar-tabs`)**:
   - `01 Genel kurallar`: 4 kural listesi + Kural tablosu
   - `02 Emir kipi`: Tanım + 5 emir kipi cümlesi tablosu + `.negative-imperative-box`
   - `03 Sıra zarfları`: Tanım + 5 sıra zarfı tablosu + `.bilingual-sequence-card` (5 cümlelik metin)
2. **Negatif Emir Kipi Kutusu**: Olumsuz talimatlar (`Do not overcook the eggs...`) için `.negative-imperative-box` vurgu kutusu kullanılır.
3. **5 Cümlelik Sıralı Paragraf Kartı**: Sıra zarflarını pekiştiren 5 cümlelik metin `.bilingual-sequence-card` içerisinde İngilizce ve Türkçe olarak sunulur.

---

## 6. 8. Sınıf Alıştırma Standardı (`.exercise`)

Alıştırma soruları yanıtları açıkta verilmez:
1. **Soru 1 & 2 (Çoktan Seçmeli)**: `<ul class="quiz-options">` ile A, B, C, D seçenek butonları.
2. **Soru 3 & 4 (Boşluk Doldurma)**: Cümle içi boşluklar (`“_____ 4 fresh eggs into the sauce.”`).
3. **Cevap Anahtarı**: Bölüm sonunda `<details class="answer-key"><summary>Cevap Anahtarını Göster</summary>...` ile gizlenir.
