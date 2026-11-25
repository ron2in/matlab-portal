/* ==========================================================================
   РАЗДЕЛ: ГЕНЕРАТОР ТРЕНИРОВОЧНЫХ ЗАДАЧ (ТРЕНАЖЁР)
   ========================================================================== */
window.MATLAB_SECTIONS = window.MATLAB_SECTIONS || {};

window.MATLAB_SECTIONS.trainer = String.raw`
  <div class="section-hero" style="--sec-accent: #f472b6;">
    <div class="section-badge" style="color: #f472b6;">Практика • Тренажёр</div>
    <h2>Генератор тренировочных задач</h2>
    <p>Случайные задачи по всем 4 дисциплинам с проверкой ответа (точность до $0.01$) и пошаговым разбором решения.</p>
  </div>

  <article class="card widget-card">
    <div class="widget-header">
      <div class="widget-title"><i data-lucide="brain"></i><span>Задача для самопроверки</span></div>
      <div class="btn-group">
        <span id="trScorePill" class="status-pill status-ok">Счёт: 0 / 0</span>
        <button class="btn sm active-tab" id="trNextBtn">↻ Новая задача</button>
      </div>
    </div>

    <div style="display:flex; flex-wrap:wrap; align-items:center; gap:10px; margin-bottom:14px;">
      <label class="field-label" for="trTopicSel" style="margin:0;">Тема:</label>
      <select id="trTopicSel" class="input-field" style="width:auto; min-width:240px;">
        <option value="random">Случайная тема</option>
        <option value="det3">Определитель матрицы 3×3</option>
        <option value="deriv">Производная в точке f'(x₀)</option>
        <option value="comb">Комбинаторика (C_n^k / A_n^k)</option>
        <option value="bayes">Формула Байеса P(H₁ | A)</option>
        <option value="mx">Математическое ожидание M(X)</option>
        <option value="stats">Выборочное среднее / s²</option>
      </select>
    </div>

    <div id="trProblemBox" class="step-output" style="font-size:0.95rem;"></div>

    <div style="display:flex; flex-wrap:wrap; align-items:center; gap:10px; margin-top:14px;">
      <input type="number" step="any" id="trAnswerInp" class="input-field mono" placeholder="Ваш ответ (напр. 12.5)" style="max-width:220px;" />
      <button class="btn active-tab" id="trCheckBtn">✓ Проверить ответ</button>
      <span id="trFeedback"></span>
    </div>

    <details class="accordion" id="trSolutionAcc" style="margin-top:14px;">
      <summary>Показать пошаговое решение</summary>
      <div class="accordion-body" id="trSolutionBody"></div>
    </details>
  </article>
`;

window.initTrainerWidgets = function() {
  let currentAnswer = 0;
  let solvedCount = 0;
  let totalCount = 0;
  let currentChecked = false;

  const randInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  const generators = {
    det3() {
      const m = Array.from({ length: 3 }, () => Array.from({ length: 3 }, () => randInt(-4, 5)));
      const [a, b, c] = m[0], [d, e, f] = m[1], [g, h, i] = m[2];
      const m1 = e * i - f * h, m2 = d * i - f * g, m3 = d * h - e * g;
      const det = a * m1 - b * m2 + c * m3;
      return {
        prompt: `Вычислите определитель матрицы $A$: $$A = \\begin{pmatrix} ${a} & ${b} & ${c} \\\\ ${d} & ${e} & ${f} \\\\ ${g} & ${h} & ${i} \\end{pmatrix}$$`,
        answer: det,
        solution: `Разложение по 1-й строке: $$\\det A = ${a}\\cdot(${m1}) - (${b})\\cdot(${m2}) + (${c})\\cdot(${m3}) = \\mathbf{${det}}$$`
      };
    },
    deriv() {
      const a = randInt(1, 4), b = randInt(-5, 5), c = randInt(1, 5), x0 = randInt(-2, 3);
      const ans = 3 * a * x0 * x0 + 2 * b * x0 + c;
      return {
        prompt: `Найдите значение производной $f'(${x0})$ для функции: $$f(x) = ${a}x^3 ${b >= 0 ? '+' : ''}${b}x^2 + ${c}x - 7$$`,
        answer: ans,
        solution: `Находим производную: $f'(x) = ${3*a}x^2 ${2*b >= 0 ? '+' : ''}${2*b}x + ${c}$. Подставляем $x_0 = ${x0}$: $$f'(${x0}) = ${3*a}\\cdot(${x0})^2 ${2*b >= 0 ? '+' : ''}${2*b}\\cdot(${x0}) + ${c} = \\mathbf{${ans}}$$`
      };
    },
    comb() {
      const isC = Math.random() < 0.5;
      const n = randInt(5, 9), k = randInt(2, 4);
      const fact = x => { let r = 1; for (let i = 2; i <= x; i++) r *= i; return r; };
      const ans = isC ? fact(n) / (fact(k) * fact(n - k)) : fact(n) / fact(n - k);
      return {
        prompt: isC
          ? `Сколькими способами можно выбрать $k=${k}$ различных элементов из $n=${n}$ (порядок не важен, $C_${n}^${k}$)?`
          : `Сколькими способами можно выбрать и упорядочить $k=${k}$ элементов из $n=${n}$ ($A_${n}^${k}$)?`,
        answer: ans,
        solution: isC
          ? `$$C_${n}^${k} = \\frac{${n}!}{${k}!\\cdot(${n}-${k})!} = \\mathbf{${ans}}$$`
          : `$$A_${n}^${k} = \\frac{${n}!}{(${n}-${k})!} = \\mathbf{${ans}}$$`
      };
    },
    bayes() {
      const ph1 = randInt(1, 4) * 0.1;
      const pah1 = randInt(6, 9) * 0.1;
      const pah2 = randInt(1, 3) * 0.1;
      const pa = ph1 * pah1 + (1 - ph1) * pah2;
      const ans = (ph1 * pah1) / pa;
      return {
        prompt: `Известны вероятности: $P(H_1) = ${ph1.toFixed(1)}$, $P(H_2) = ${(1-ph1).toFixed(1)}$, $P(A\\mid H_1) = ${pah1.toFixed(1)}$, $P(A\\mid H_2) = ${pah2.toFixed(1)}$. Найдите $P(H_1 \\mid A)$ (ответ округлите до 2 знаков).`,
        answer: ans,
        solution: `По формуле полной вероятности: $P(A) = ${ph1.toFixed(1)}\\cdot${pah1.toFixed(1)} + ${(1-ph1).toFixed(1)}\\cdot${pah2.toFixed(1)} = ${pa.toFixed(4)}$.<br>По формуле Байеса: $$P(H_1\\mid A) = \\frac{${(ph1*pah1).toFixed(4)}}{${pa.toFixed(4)}} \\approx \\mathbf{${ans.toFixed(4)}}$$`
      };
    },
    mx() {
      const xs = [randInt(-2, 1), randInt(2, 4), randInt(5, 8)];
      const p1 = randInt(1, 3) * 0.1, p2 = randInt(2, 5) * 0.1, p3 = Number((1 - p1 - p2).toFixed(1));
      const mx = xs[0] * p1 + xs[1] * p2 + xs[2] * p3;
      return {
        prompt: `Найдите математическое ожидание $M(X)$ дискретной случайной величины: $$\\begin{array}{c|ccc} x_i & ${xs[0]} & ${xs[1]} & ${xs[2]} \\\\ \\hline p_i & ${p1.toFixed(1)} & ${p2.toFixed(1)} & ${p3.toFixed(1)} \\end{array}$$`,
        answer: mx,
        solution: `$$M(X) = (${xs[0]})\\cdot${p1.toFixed(1)} + ${xs[1]}\\cdot${p2.toFixed(1)} + ${xs[2]}\\cdot${p3.toFixed(1)} = \\mathbf{${mx.toFixed(2)}}$$`
      };
    },
    stats() {
      const arr = Array.from({ length: 5 }, () => randInt(2, 12));
      const mean = arr.reduce((a, b) => a + b, 0) / 5;
      const s2 = arr.reduce((s, x) => s + (x - mean) ** 2, 0) / 4;
      const askVar = Math.random() < 0.5;
      return {
        prompt: askVar
          ? `Дана выборка: $\\{${arr.join(', ')}\\}$. Найдите исправленную выборочную дисперсию $s^2$.`
          : `Дана выборка: $\\{${arr.join(', ')}\\}$. Найдите выборочное среднее $\\bar{x}$.`,
        answer: askVar ? s2 : mean,
        solution: askVar
          ? `Сначала $\\bar{x} = ${mean.toFixed(2)}$. Тогда $$s^2 = \\frac{1}{5-1}\\sum_{i=1}^5 (x_i - ${mean.toFixed(2)})^2 = \\mathbf{${s2.toFixed(3)}}$$`
          : `$$\\bar{x} = \\frac{${arr.join('+')}}{5} = \\mathbf{${mean.toFixed(2)}}$$`
      };
    }
  };

  const generateTask = () => {
    let topic = document.getElementById('trTopicSel').value;
    const keys = Object.keys(generators);
    if (topic === 'random') topic = keys[randInt(0, keys.length - 1)];
    const task = generators[topic]();
    currentAnswer = task.answer;
    currentChecked = false;

    const pBox = document.getElementById('trProblemBox');
    const sBody = document.getElementById('trSolutionBody');
    pBox.innerHTML = task.prompt;
    sBody.innerHTML = task.solution;
    document.getElementById('trSolutionAcc').open = false;
    document.getElementById('trAnswerInp').value = '';
    document.getElementById('trFeedback').innerHTML = '';

    window.renderMathIn(pBox);
    window.renderMathIn(sBody);
  };

  const checkAnswer = () => {
    const val = parseFloat(document.getElementById('trAnswerInp').value);
    const fb = document.getElementById('trFeedback');
    if (Number.isNaN(val)) {
      fb.innerHTML = '<span class="status-pill status-warn">Введите число</span>';
      return;
    }
    const ok = Math.abs(val - currentAnswer) <= 0.015;
    if (!currentChecked) {
      totalCount++;
      if (ok) solvedCount++;
      currentChecked = true;
      document.getElementById('trScorePill').textContent = `Счёт: ${solvedCount} / ${totalCount}`;
    }
    fb.innerHTML = ok
      ? '<span class="status-pill status-ok">✓ Верно!</span>'
      : `<span class="status-pill status-err">✗ Неверно (верный ответ: ${(Math.round(currentAnswer * 1000) / 1000)})</span>`;
  };

  document.getElementById('trNextBtn').addEventListener('click', generateTask);
  document.getElementById('trTopicSel').addEventListener('change', generateTask);
  document.getElementById('trCheckBtn').addEventListener('click', checkAnswer);
  document.getElementById('trAnswerInp').addEventListener('keydown', (e) => { if (e.key === 'Enter') checkAnswer(); });

  generateTask();
};
