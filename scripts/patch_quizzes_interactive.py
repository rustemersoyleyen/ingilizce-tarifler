# patch_quizzes_interactive.py
import re

with open("src/app.js", "r", encoding="utf-8") as f:
    content = f.read()

# Helper template to generate interactive quiz HTML
def make_quiz_html(quiz_var_name, eyebrow_text, h2_text, intro_text):
    return f"""        <section id="alistirma" class="exercise">
          <p class="eyebrow" style="color:#93c5fd;">{eyebrow_text}</p>
          <h2 style="color:#ffffff;">{h2_text}</h2>
          <p class="section-intro" style="color:#cbd5e1;">{intro_text}</p>

          <div class="quiz-grid" style="display: flex; flex-direction: column; gap: 1.5rem; margin-top: 2rem;">
            ${{{quiz_var_name}.map((q, idx) => `
              <div class="quiz-card" data-idx="${{idx}}" data-correct="${{q.answer}}" style="background:#ffffff; border:1px solid #e2e8f0; border-radius:14px; padding:1.6rem; text-align:left; color:#0f172a; box-shadow:0 4px 14px rgba(0,0,0,0.06);">
                <span class="quiz-badge" style="background:#0284c7; color:#ffffff; padding:4px 10px; border-radius:6px; font-size:0.85rem; font-weight:700;">Soru ${{q.num}} · Çoktan Seçmeli</span>
                <p style="font-size:1.15rem; font-weight:700; margin-top:1rem; color:#0f172a;">${{q.question}}</p>
                <p style="font-size:0.95rem; margin-top:0.4rem; line-height:1.6;"><span class="tr-highlight">(${{q.questionTr}})</span></p>
                <div class="quiz-options" style="display:flex; flex-wrap:wrap; gap:0.6rem; margin-top:1.2rem;">
                  ${{q.options.map(opt => `
                    <button type="button" class="quiz-option-btn" data-val="${{opt}}" style="background:#f8fafc; border:1px solid #cbd5e1; border-radius:8px; padding:10px 16px; cursor:pointer; font-weight:600; font-size:0.95rem; text-align:left; transition:all 0.2s; color:#0f172a;">${{opt}}</button>
                  `).join("")}}
                </div>
                <div class="quiz-feedback" style="display:none; margin-top:1rem; padding:0.85rem 1.1rem; border-radius:8px; font-size:0.95rem;"></div>
              </div>
            `).join("")}}
          </div>

          <div id="quiz-summary-box" style="display:none;"></div>
        </section>"""

# 1. BAKLAVA QUIZ
baklava_quiz_data = """const baklavaQuiz = [
  {
    num: 1,
    question: "What is the golden rule of pouring syrup onto baklava?",
    questionTr: "Baklavaya şerbet dökmenin altın kuralı nedir?",
    options: ["A) Cold syrup over hot baklava", "B) Boiling hot syrup over hot baklava", "C) Cold syrup over cold baklava", "D) Never use lemon in syrup"],
    answer: "A) Cold syrup over hot baklava"
  },
  {
    num: 2,
    question: "Which kitchen action means \\"fırçayla yağ sürmek\\" in English?",
    questionTr: "\\"Fırçayla yağ sürmek\\" anlamına gelen İngilizce mutfak fiili hangisidir?",
    options: ["A) Boil", "B) Brush", "C) Drain", "D) Sift"],
    answer: "B) Brush"
  },
  {
    num: 3,
    question: "What does \\"phyllo pastry\\" mean in Turkish?",
    questionTr: "\\"Phyllo pastry\\" teriminin Türkçe karşılığı nedir?",
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
];\n\n"""

# Insert baklavaQuiz data before function renderBaklavaPage
content = content.replace("function renderBaklavaPage() {", baklava_quiz_data + "function renderBaklavaPage() {")

# Replace Baklava <section id="alistirma"> ... </section>
baklava_old_quiz_pattern = re.compile(r'<section id="alistirma">[\s\S]*?</section>', re.MULTILINE)
baklava_match = baklava_old_quiz_pattern.search(content)
if baklava_match:
    b_new_html = make_quiz_html("baklavaQuiz", "PRACTICE &amp; QUIZ (KAZANIM KONTROLÜ VE ALIŞTIRMALAR)", "8. Sınıf İngilizce Baklava Tarifi Alıştırma ve Quizi", "Öğrendiğiniz baklava mutfak terimlerini, şerbet kurallarını ve bağlaçları bu interaktif test ile pekiştirin.")
    content = content[:baklava_match.start()] + b_new_html + content[baklava_match.end():]

# 2. SMOOTHIE QUIZ
smoothie_quiz_data = """const smoothieQuiz = [
  {
    num: 1,
    question: "Which English verb means \\"meyvenin kabuğunu soymak\\"?",
    questionTr: "\\"Meyvenin kabuğunu soymak\\" anlamına gelen İngilizce fiil hangisidir?",
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
];\n\n"""

content = content.replace("function renderSmoothiePage() {", smoothie_quiz_data + "function renderSmoothiePage() {")

smoothie_match = baklava_old_quiz_pattern.search(content)
if smoothie_match:
    s_new_html = make_quiz_html("smoothieQuiz", "PRACTICE &amp; QUIZ (KAZANIM KONTROLÜ VE ALIŞTIRMALAR)", "8. Sınıf İngilizce Smoothie Tarifi Alıştırma ve Quizi", "Öğrendiğiniz meyve isimlerini, blender eylemlerini ve sıralama bağlaçlarını bu interaktif testle pekiştirin.")
    content = content[:smoothie_match.start()] + s_new_html + content[smoothie_match.end():]

# 3. KEK QUIZ
kek_quiz_data = """const kekQuiz = [
  {
    num: 1,
    question: "Which action comes first when preparing cake batter?",
    questionTr: "Kek hamuru hazırlarken ilk olarak hangi mutfak eylemi yapılır?",
    options: ["A) Whisk the eggs and sugar", "B) Bake in the oven", "C) Slice the cake", "D) Pour into the pan"],
    answer: "A) Whisk the eggs and sugar"
  },
  {
    num: 2,
    question: "Which verb means \\"unu ve kabartma tozunu elemek\\" in English?",
    questionTr: "\\"Unu ve kabartma tozunu elemek\\" anlamına gelen İngilizce fiil hangisidir?",
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
    question: "What is the correct English term for \\"kek kalıbı\\"?",
    questionTr: "\\"Kek kalıbı\\" teriminin doğru İngilizce karşılığı hangisidir?",
    options: ["A) Cake pan (veya Cake tin)", "B) Frying pan", "C) Saucepan", "D) Cutting board"],
    answer: "A) Cake pan (veya Cake tin)"
  }
];\n\n"""

content = content.replace("function renderKekPage() {", kek_quiz_data + "function renderKekPage() {")

kek_match = baklava_old_quiz_pattern.search(content)
if kek_match:
    k_new_html = make_quiz_html("kekQuiz", "PRACTICE &amp; QUIZ (KAZANIM KONTROLÜ VE ALIŞTIRMALAR)", "8. Sınıf İngilizce Kek Tarifi Alıştırma ve Quizi", "Öğrendiğiniz kek yapım eylemlerini, fırınlama terimlerini ve emir cümlelerini bu interaktif test ile pekiştirin.")
    content = content[:kek_match.start()] + k_new_html + content[kek_match.end():]

# 4. OMLET QUIZ
omlet_quiz_data = """const omletQuiz = [
  {
    num: 1,
    question: "Which English verb means \\"yumurtayı kırmak\\" when starting an omelette?",
    questionTr: "Omlet yapımına başlarken \\"yumurtayı kırmak\\" anlamına gelen İngilizce fiil hangisidir?",
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
    question: "What is the Turkish meaning of \\"Beat the eggs with salt and pepper\\"?",
    questionTr: "\\"Beat the eggs with salt and pepper\\" cümlesinin doğru Türkçe karşılığı nedir?",
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
];\n\n"""

content = content.replace("function renderOmletPage() {", omlet_quiz_data + "function renderOmletPage() {")

omlet_match = baklava_old_quiz_pattern.search(content)
if omlet_match:
    o_new_html = make_quiz_html("omletQuiz", "PRACTICE &amp; QUIZ (KAZANIM KONTROLÜ VE ALIŞTIRMALAR)", "8. Sınıf İngilizce Omlet Tarifi Alıştırma ve Quizi", "Öğrendiğiniz omlet hazırlama eylemlerini, mutfak terimlerini ve emir cümlelerini bu interaktif test ile pekiştirin.")
    content = content[:omlet_match.start()] + o_new_html + content[omlet_match.end():]

# Ensure renderKekPage has initQuizInteractivity and initVariantSubnavScroll
content = content.replace("function renderKekPage() {", "function renderKekPage() {\n  // renderKekPage")
if "initQuizInteractivity(root, \"Kek\", renderKekPage);" not in content:
    content = content.replace("initVariantSubnavScroll(root);\n}", "initQuizInteractivity(root, \"Kek\", renderKekPage);\n  initVariantSubnavScroll(root);\n}")

with open("src/app.js", "w", encoding="utf-8") as f:
    f.write(content)

print("Interactive Quizzes patched successfully!")
