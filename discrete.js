/* ==========================================================================
   РАЗДЕЛ 2: ДИСКРЕТНАЯ МАТЕМАТИКА
   Темы: Множества и отношения, Логика и Пост, Комбинаторика, Графы, Автоматы
   ========================================================================== */
window.MATLAB_SECTIONS = window.MATLAB_SECTIONS || {};

window.MATLAB_SECTIONS.discrete = String.raw`
  <div class="section-hero" style="--sec-accent: var(--accent-discrete);">
    <div class="section-badge" style="color: var(--accent-discrete);">Дисциплина 02 • Дискретная математика</div>
    <h2>Дискретная математика</h2>
    <p>Теория множеств и бинарные отношения, булева алгебра и классы Поста, комбинаторика и рекурренты, алгоритмы на графах, конечные автоматы и теория кодирования.</p>
  </div>

  <!-- 2.1 Теория множеств и бинарные отношения -->
  <h3 id="dm-sets" class="topic-heading" style="--sec-accent: var(--accent-discrete);">1. Теория множеств и бинарные отношения</h3>
  <div class="grid-2">
    <article class="card searchable" data-keywords="множества де морган булеан декартово произведение мощность счетные континуум">
      <div class="card-header">
        <h4 class="card-title">Множества, булеан и мощности</h4>
        <span class="card-tag">Множества</span>
      </div>
      <div class="formula-box" data-latex="\overline{A \cup B} = \overline{A} \cap \overline{B}, \quad \overline{A \cap B} = \overline{A} \cup \overline{B}">
        <div class="formula-content">$$\overline{A \cup B} = \overline{A} \cap \overline{B}, \quad \overline{A \cap B} = \overline{A} \cup \overline{B}$$</div>
        <button class="copy-latex-btn"><i data-lucide="copy"></i><span>LaTeX</span></button>
      </div>
      <div class="formula-box" data-latex="|\mathcal{P}(A)| = 2^{|A|}, \quad |A \times B| = |A| \cdot |B|">
        <div class="formula-content">$$|\mathcal{P}(A)| = 2^{|A|}, \quad |A \times B| = |A| \cdot |B|$$</div>
        <button class="copy-latex-btn"><i data-lucide="copy"></i><span>LaTeX</span></button>
      </div>
      <p class="condition-note">Отображение $f: A \to B$: <strong>инъекция</strong> (разным элементам — разные образы), <strong>сюръекция</strong> ($\operatorname{Im} f = B$), <strong>биекция</strong> (взаимно однозначное). Множества $\mathbb{N}, \mathbb{Z}, \mathbb{Q}$ — счётны ($\aleph_0$); $\mathbb{R}, [0,1]$ — континуальны ($\mathfrak{c} = 2^{\aleph_0}$).</p>
    </article>

    <article class="card searchable" data-keywords="бинарные отношения рефлексивность симметричность антисимметричность транзитивность эквивалентность частичный порядок хассе">
      <div class="card-header">
        <h4 class="card-title">Бинарные отношения и диаграммы Хассе</h4>
        <span class="card-tag">Отношения</span>
      </div>
      <p class="theory-text">Отношение $R \subseteq A \times A$ характеризуется свойствами:</p>
      <ul class="theory-list">
        <li><strong>Рефлексивность:</strong> $\forall x\,(xRx)$; <strong>Симметричность:</strong> $xRy \implies yRx$.</li>
        <li><strong>Антисимметричность:</strong> $(xRy \land yRx) \implies x = y$.</li>
        <li><strong>Транзитивность:</strong> $(xRy \land yRz) \implies xRz$.</li>
      </ul>
      <div class="formula-box" data-latex="\text{Эквивалентность} = \text{Рефл.} + \text{Симм.} + \text{Транз.}">
        <div class="formula-content">$$\text{Эквивалентность: рефл. + симм. + транз. (разбиение на классы)}$$</div>
        <button class="copy-latex-btn"><i data-lucide="copy"></i><span>LaTeX</span></button>
      </div>
      <p class="condition-note"><strong>Частичный порядок:</strong> рефлексивность + антисимметричность + транзитивность. Визуализируется <strong>диаграммой Хассе</strong> (ориентированный граф без петель и транзитивных рёбер).</p>
    </article>
  </div>

  <!-- 2.2 Математическая логика и булева алгебра -->
  <h3 id="dm-logic" class="topic-heading" style="--sec-accent: var(--accent-discrete);">2. Математическая логика и булева алгебра</h3>
  <div class="grid-2">
    <article class="card searchable" data-keywords="булева алгебра сднф скнф полином жегалкина равносильности">
      <div class="card-header">
        <h4 class="card-title">СДНФ, СКНФ и полином Жегалкина</h4>
        <span class="card-tag">Булева алгебра</span>
      </div>
      <p class="theory-text">Любую булеву функцию $f(x_1,\dots,x_n)$ можно единственным образом представить в виде СДНФ (по наборам, где $f=1$), СКНФ (где $f=0$) и полинома Жегалкина (над $\mathbb{F}_2$).</p>
      <div class="formula-box" data-latex="x \to y \equiv \bar{x} \lor y, \quad x \oplus y \equiv (x \land \bar{y}) \lor (\bar{x} \land y)">
        <div class="formula-content">$$x \to y \equiv \bar{x} \lor y, \quad x \oplus y \equiv x + y \pmod 2$$</div>
        <button class="copy-latex-btn"><i data-lucide="copy"></i><span>LaTeX</span></button>
      </div>
      <div class="formula-box" data-latex="f(x_1,\dots,x_n) = c_0 \oplus \bigoplus_i c_i x_i \oplus \bigoplus_{i<j} c_{ij}x_i x_j \oplus \dots">
        <div class="formula-content">$$P_{\text{Жег}} = c_0 \oplus \bigoplus c_i x_i \oplus \bigoplus c_{ij}x_i x_j \oplus \dots$$</div>
        <button class="copy-latex-btn"><i data-lucide="copy"></i><span>LaTeX</span></button>
      </div>
    </article>

    <article class="card searchable" data-keywords="теорема поста классы поста функциональная полнота логика предикатов кванторы пнф">
      <div class="card-header">
        <h4 class="card-title">Классы Поста и логика предикатов</h4>
        <span class="card-tag">Пост &amp; Предикаты</span>
      </div>
      <p class="theory-text"><strong>Теорема Поста:</strong> система булевых функций функционально полна $\iff$ она не содержится целиком ни в одном из 5 замкнутых классов:</p>
      <ul class="theory-list">
        <li>$T_0$: сохраняющие $0$ ($f(0,\dots,0)=0$); $T_1$: сохраняющие $1$ ($f(1,\dots,1)=1$).</li>
        <li>$S$: самодвойственные ($f(\bar{x}_1,\dots,\bar{x}_n) = \overline{f(x_1,\dots,x_n)}$).</li>
        <li>$M$: монотонные ($\vec{x} \le \vec{y} \implies f(\vec{x}) \le f(\vec{y})$).</li>
        <li>$L$: линейные (полином Жегалкина степени $\le 1$).</li>
      </ul>
      <div class="formula-box" data-latex="\neg(\forall x\,P(x)) \equiv \exists x\,\neg P(x), \quad \neg(\exists x\,P(x)) \equiv \forall x\,\neg P(x)">
        <div class="formula-content">$$\neg(\forall x\,P(x)) \equiv \exists x\,\neg P(x), \quad \neg(\exists x\,P(x)) \equiv \forall x\,\neg P(x)$$</div>
        <button class="copy-latex-btn"><i data-lucide="copy"></i><span>LaTeX</span></button>
      </div>
      <p class="condition-note"><strong>ПНФ (предварённая нормальная форма):</strong> все кванторы вынесены в начало формулы: $(Q_1 x_1)\dots(Q_k x_k)\,M(x_1,\dots,x_k)$.</p>
    </article>
  </div>

  <!-- 2.3 Комбинаторика и рекуррентные соотношения -->
  <h3 id="dm-comb" class="topic-heading" style="--sec-accent: var(--accent-discrete);">3. Комбинаторика и рекуррентные соотношения</h3>
  <div class="grid-2">
    <article class="card searchable" data-keywords="комбинаторика дирихле включения исключения каталан стирлинг полиномиальная теорема">
      <div class="card-header">
        <h4 class="card-title">Формулы комбинаторики, Каталан и Стирлинг</h4>
        <span class="card-tag">Комбинаторика</span>
      </div>
      <div class="formula-box" data-latex="P_n = n!, \quad A_n^k = \frac{n!}{(n-k)!}, \quad C_n^k = \frac{n!}{k!(n-k)!}, \quad \bar{C}_n^k = C_{n+k-1}^k">
        <div class="formula-content">$$P_n = n!, \quad A_n^k = \frac{n!}{(n-k)!}, \quad C_n^k = \binom{n}{k}, \quad \bar{C}_n^k = \binom{n+k-1}{k}$$</div>
        <button class="copy-latex-btn"><i data-lucide="copy"></i><span>LaTeX</span></button>
      </div>
      <div class="formula-explain">
        <div class="ex-row"><strong>Суть:</strong> подсчёт числа способов выбрать или упорядочить $k$ элементов из множества размера $n$.</div>
        <div class="ex-row"><strong>Обозначения:</strong> $P_n$ — перестановки, $A_n^k$ — размещения (порядок важен), $C_n^k$ — сочетания (порядок не важен).</div>
        <div class="ex-row"><strong>Условия:</strong> без повторений требуется $0 \le k \le n$ ($n,k \in \mathbb{Z}_{\ge 0}$); с повторениями $\bar{C}_n^k$ допустимо $k > n$.</div>
      </div>
      <div class="formula-box" data-latex="Cat_n = \frac{1}{n+1}\binom{2n}{n}, \quad (x_1+\dots+x_m)^n = \sum \frac{n!}{k_1!\dots k_m!}x_1^{k_1}\dots x_m^{k_m}">
        <div class="formula-content">$$Cat_n = \frac{1}{n+1}\binom{2n}{n}, \quad \left|\bigcup_{i=1}^n A_i\right| = \sum |A_i| - \sum |A_i\cap A_j| + \dots$$</div>
        <button class="copy-latex-btn"><i data-lucide="copy"></i><span>LaTeX</span></button>
      </div>
      <p class="condition-note"><strong>Принцип Дирихле:</strong> при размещении $kn+1$ объектов по $n$ ящикам хотя бы в одном окажется $\ge k+1$ объектов. <strong>Числа Стирлинга 2-го рода</strong> $S(n,k)$ — число разбиений $n$-элементного множества на $k$ непустых блоков.</p>
    </article>

    <article class="card searchable" data-keywords="рекуррентные соотношения характеристическое уравнение производящие функции">
      <div class="card-header">
        <h4 class="card-title">Рекуррентные соотношения и производящие функции</h4>
        <span class="card-tag">Рекурренты</span>
      </div>
      <p class="theory-text">Линейное однородное рекуррентное соотношение $a_n + c_1 a_{n-1} + \dots + c_k a_{n-k} = 0$ решается через корни характеристического уравнения:</p>
      <div class="formula-box" data-latex="\lambda^k + c_1 \lambda^{k-1} + \dots + c_k = 0 \implies a_n = \sum P_j(n)\lambda_j^n">
        <div class="formula-content">$$\lambda^k + c_1\lambda^{k-1} + \dots + c_k = 0, \quad G(x) = \sum_{n=0}^{\infty} a_n x^n$$</div>
        <button class="copy-latex-btn"><i data-lucide="copy"></i><span>LaTeX</span></button>
      </div>
      <details class="accordion">
        <summary>Пример: числа Фибоначчи и производящая функция</summary>
        <div class="accordion-body">
          $F_n = F_{n-1} + F_{n-2} \implies \lambda^2 - \lambda - 1 = 0 \implies \lambda_{1,2} = \frac{1 \pm \sqrt{5}}{2}$. Формула Бине: $F_n = \frac{\lambda_1^n - \lambda_2^n}{\sqrt{5}}$. Производящая функция: $G(x) = \frac{x}{1 - x - x^2}$.
        </div>
      </details>
    </article>
  </div>

  <!-- 2.4 Теория графов -->
  <h3 id="dm-graphs" class="topic-heading" style="--sec-accent: var(--accent-discrete);">4. Теория графов</h3>
  <div class="grid-2">
    <article class="card searchable" data-keywords="графы матрица смежности инцидентности эйлеров гамильтонов остов кэли краскал прим">
      <div class="card-header">
        <h4 class="card-title">Связи, Эйлеровы/Гамильтоновы графы, Остовные деревья</h4>
        <span class="card-tag">Графы</span>
      </div>
      <ul class="theory-list">
        <li><strong>Эйлеров цикл:</strong> проходит по всем рёбрам ровно раз $\iff$ граф связен и степени всех вершин чётные.</li>
        <li><strong>Гамильтонов цикл:</strong> проходит по всем вершинам ровно раз (достаточное условие Дирака: $\deg(v) \ge n/2$ для $n \ge 3$).</li>
        <li><strong>Остовное дерево:</strong> число остовных деревьев полного графа $K_n$ равно $n^{n-2}$ (<strong>формула Кэли</strong>). Минимальный остов (MST): алгоритмы <strong>Краскала</strong> $O(E\log E)$ и <strong>Прима</strong>.</li>
      </ul>
      <div class="formula-box" data-latex="V - E + F = 2, \quad E \le 3V - 6 \;(\text{планарный граф})">
        <div class="formula-content">$$V - E + F = 2, \quad E \le 3V - 6 \;\text{(формула Эйлера)}$$</div>
        <button class="copy-latex-btn"><i data-lucide="copy"></i><span>LaTeX</span></button>
      </div>
    </article>

    <article class="card searchable" data-keywords="кратчайшие пути дейкстра беллман форд флойд уоршелл понтрягин куратовский раскраска форд фалкерсон">
      <div class="card-header">
        <h4 class="card-title">Кратчайшие пути, Планарность и Потоки</h4>
        <span class="card-tag">Алгоритмы</span>
      </div>
      <ul class="theory-list">
        <li><strong>Дейкстра:</strong> $O((V+E)\log V)$, веса $\ge 0$. <strong>Беллман — Форд:</strong> $O(VE)$, допускает отрицательные веса. <strong>Флойд — Уоршелл:</strong> $O(V^3)$, все пары вершин.</li>
        <li><strong>Теорема Понтрягина — Куратовского:</strong> граф планарен $\iff$ не содержит подграфов, гомеоморфных $K_5$ или $K_{3,3}$.</li>
        <li><strong>Раскраска:</strong> любой планарный граф раскрашивается в $\le 4$ цвета ($\chi(G) \le 4$).</li>
        <li><strong>Теорема Форда — Фалкерсона:</strong> величина максимального потока в сети равна пропускной способности минимального разреза.</li>
      </ul>
    </article>
  </div>

  <!-- 2.5 Теория автоматов и кодирования -->
  <h3 id="dm-automata" class="topic-heading" style="--sec-accent: var(--accent-discrete);">5. Теория автоматов и кодирования</h3>
  <article class="card searchable" data-keywords="автоматы дка нка регулярные выражения машина тьюринга крафт макмиллан хаффман хэмминг">
    <div class="card-header">
      <h4 class="card-title">Конечные автоматы, Машина Тьюринга и Кодирование</h4>
      <span class="card-tag">Автоматы &amp; Коды</span>
    </div>
    <div class="grid-2">
      <div>
        <p class="theory-text"><strong>ДКА/НКА</strong> задаются пятёркой $M = (Q, \Sigma, \delta, q_0, F)$ и распознают класс регулярных языков (эквивалентны регулярным выражениям; теорема Клини). <strong>Машина Тьюринга</strong> — формализация понятия алгоритма (бесконечная лента + управляющее устройство).</p>
      </div>
      <div>
        <div class="formula-box" data-latex="\sum_{i=1}^{m} r^{-l_i} \le 1 \quad (\text{Крафт — Макмиллан})">
          <div class="formula-content">$$\sum_{i=1}^{m} r^{-l_i} \le 1 \;\text{(условие префиксного кода)}$$</div>
          <button class="copy-latex-btn"><i data-lucide="copy"></i><span>LaTeX</span></button>
        </div>
        <p class="condition-note"><strong>Алгоритм Хаффмана</strong> строит оптимальный префиксный код с минимальной средней длиной. <strong>Коды Хэмминга</strong> исправляют одиночную ошибку (расстояние Хэмминга $d \ge 3$).</p>
      </div>
    </div>
  </article>

  <!-- ИНТЕРАКТИВ РАЗДЕЛА 2 -->
  <h3 id="dm-interactive" class="topic-heading" style="--sec-accent: var(--accent-discrete);">Интерактивный комплекс: Логика (СДНФ/СКНФ) и Комбинаторика</h3>
  <div class="grid-2">
    <!-- Таблицы истинности + СДНФ / СКНФ -->
    <article class="card widget-card searchable" data-keywords="таблица истинности сднф скнф булева формула">
      <div class="widget-header">
        <div class="widget-title"><i data-lucide="table-2"></i><span>Таблица истинности + СДНФ / СКНФ</span></div>
      </div>
      <label class="field-label" for="dmLogicExpr">Булева формула (<code>! &amp; | ^ -&gt; &lt;-&gt;</code>):</label>
      <input type="text" id="dmLogicExpr" class="input-field mono" value="(A & B) -> !C" />
      <div class="btn-group" style="margin-top:8px;">
        <button class="btn sm dm-preset" data-expr="(A & B) -> !C">(A &amp; B) -&gt; !C</button>
        <button class="btn sm dm-preset" data-expr="!(A | B) <-> (!A & !B)">Де Морган</button>
        <button class="btn sm dm-preset" data-expr="A ^ B ^ C">Чётность 3 пер.</button>
      </div>
      <div id="dmLogicStatus" style="margin-top:8px;"></div>
      <div id="dmLogicForms" class="step-output" style="font-size:0.8rem;"></div>
      <div id="dmTruthWrap" class="table-wrap" style="max-height:240px; overflow-y:auto;"></div>
    </article>

    <!-- Комбинаторный калькулятор + числа Каталана -->
    <article class="card widget-card searchable" data-keywords="комбинаторный калькулятор каталан перестановки сочетания">
      <div class="widget-header">
        <div class="widget-title"><i data-lucide="calculator"></i><span>Комбинаторный калькулятор &amp; Каталан</span></div>
      </div>
      <div class="grid-2" style="gap:10px;">
        <div>
          <label class="field-label" for="dmN">$n$ (элементов):</label>
          <input type="number" id="dmN" class="input-field" value="6" min="0" max="150" />
        </div>
        <div>
          <label class="field-label" for="dmK">$k$ (выбор):</label>
          <input type="number" id="dmK" class="input-field" value="3" min="0" max="150" />
        </div>
      </div>
      <div id="dmCombOut" class="stats-grid"></div>
    </article>
  </div>
`;

/* ==========================================================================
   ЛОГИКА ИНТЕРАКТИВА РАЗДЕЛА 2
   ========================================================================== */
window.initDiscreteWidgets = function() {
  // 1. Комбинаторика + Каталан
  const fact = (n) => { let r = 1n; for (let i = 2n; i <= BigInt(n); i++) r *= i; return r; };
  const fmtBig = (v) => {
    const s = v.toString();
    return s.length > 13 ? `${s[0]}.${s.slice(1,5)}e+${s.length-1}` : s.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };

  const updateComb = () => {
    const n = Math.max(0, Math.min(150, parseInt(document.getElementById('dmN').value, 10) || 0));
    const k = Math.max(0, Math.min(150, parseInt(document.getElementById('dmK').value, 10) || 0));
    const pn = fact(n);
    const aRep = BigInt(n) ** BigInt(k);
    const aNo = k <= n ? fmtBig(fact(n) / fact(n - k)) : '— (k>n)';
    const cNo = k <= n ? fmtBig(fact(n) / (fact(k) * fact(n - k))) : '— (k>n)';
    const cRep = n > 0 ? fmtBig(fact(n + k - 1) / (fact(k) * fact(n - 1))) : (k === 0 ? '1' : '—');
    const catN = n <= 80 ? fmtBig(fact(2 * n) / (fact(n + 1) * fact(n))) : 'слишком велико';

    const out = document.getElementById('dmCombOut');
    out.innerHTML = `
      <div class="stat-tile"><div class="stat-tile-label">$P_n = n!$</div><div class="stat-tile-val">${fmtBig(pn)}</div></div>
      <div class="stat-tile"><div class="stat-tile-label">$A_n^k$</div><div class="stat-tile-val">${aNo}</div></div>
      <div class="stat-tile"><div class="stat-tile-label">$C_n^k$</div><div class="stat-tile-val">${cNo}</div></div>
      <div class="stat-tile"><div class="stat-tile-label">$\\bar{A}_n^k = n^k$</div><div class="stat-tile-val">${fmtBig(aRep)}</div></div>
      <div class="stat-tile"><div class="stat-tile-label">$\\bar{C}_n^k$</div><div class="stat-tile-val">${cRep}</div></div>
      <div class="stat-tile"><div class="stat-tile-label">Каталан $Cat_n$</div><div class="stat-tile-val">${catN}</div></div>
    `;
    window.renderMathIn(out);
  };

  document.getElementById('dmN').addEventListener('input', updateComb);
  document.getElementById('dmK').addEventListener('input', updateComb);
  updateComb();

  // 2. Таблица истинности + СДНФ / СКНФ
  const tokenize = (expr) => {
    const tokens = [];
    let i = 0;
    while (i < expr.length) {
      const ch = expr[i];
      if (/\s/.test(ch)) { i++; continue; }
      if (expr.slice(i, i + 3) === '<->' || expr.slice(i, i + 3) === '<=>') { tokens.push({ t: 'OP', v: '<->' }); i += 3; continue; }
      if (expr.slice(i, i + 2) === '->' || expr.slice(i, i + 2) === '=>') { tokens.push({ t: 'OP', v: '->' }); i += 2; continue; }
      if (expr.slice(i, i + 2) === '&&') { tokens.push({ t: 'OP', v: '&' }); i += 2; continue; }
      if (expr.slice(i, i + 2) === '||') { tokens.push({ t: 'OP', v: '|' }); i += 2; continue; }
      if ('!&|^()~¬'.includes(ch)) {
        const m = (ch === '~' || ch === '¬') ? '!' : ch;
        tokens.push({ t: (m === '(' || m === ')') ? m : 'OP', v: m });
        i++; continue;
      }
      if (/[A-Za-z]/.test(ch)) { tokens.push({ t: 'VAR', v: ch.toUpperCase() }); i++; continue; }
      if (ch === '0' || ch === '1') { tokens.push({ t: 'CONST', v: ch === '1' }); i++; continue; }
      throw new Error(`Неизвестный символ "${ch}"`);
    }
    return tokens;
  };

  const compile = (expr) => {
    const toks = tokenize(expr);
    let pos = 0;
    const vars = new Set();
    const peek = () => toks[pos];
    const eat = () => toks[pos++];

    const parseEq = () => {
      let l = parseImp();
      while (peek() && peek().v === '<->') { eat(); const r = parseImp(); const lc = l; l = e => lc(e) === r(e); }
      return l;
    };
    const parseImp = () => {
      let l = parseOr();
      if (peek() && peek().v === '->') { eat(); const r = parseImp(); const lc = l; return e => !lc(e) || r(e); }
      return l;
    };
    const parseOr = () => {
      let l = parseXor();
      while (peek() && peek().v === '|') { eat(); const r = parseXor(); const lc = l; l = e => lc(e) || r(e); }
      return l;
    };
    const parseXor = () => {
      let l = parseAnd();
      while (peek() && peek().v === '^') { eat(); const r = parseAnd(); const lc = l; l = e => lc(e) !== r(e); }
      return l;
    };
    const parseAnd = () => {
      let l = parseNot();
      while (peek() && peek().v === '&') { eat(); const r = parseNot(); const lc = l; l = e => lc(e) && r(e); }
      return l;
    };
    const parseNot = () => {
      if (peek() && peek().v === '!') { eat(); const x = parseNot(); return e => !x(e); }
      return parsePrim();
    };
    const parsePrim = () => {
      const tok = peek();
      if (!tok) throw new Error('Неожиданный конец выражения');
      if (tok.t === '(') {
        eat(); const n = parseEq();
        if (!peek() || peek().t !== ')') throw new Error('Пропущена )');
        eat(); return n;
      }
      if (tok.t === 'VAR') { eat(); vars.add(tok.v); return e => e[tok.v]; }
      if (tok.t === 'CONST') { eat(); return () => tok.v; }
      throw new Error(`Ошибка синтаксиса около "${tok.v}"`);
    };

    const fn = parseEq();
    if (pos < toks.length) throw new Error('Лишние символы в конце');
    return { fn, vars: Array.from(vars).sort() };
  };

  const buildTable = () => {
    const expr = document.getElementById('dmLogicExpr').value.trim();
    const status = document.getElementById('dmLogicStatus');
    const forms = document.getElementById('dmLogicForms');
    const wrap = document.getElementById('dmTruthWrap');
    if (!expr) { status.innerHTML = ''; forms.innerHTML = ''; wrap.innerHTML = ''; return; }

    try {
      const { fn, vars } = compile(expr);
      if (vars.length > 5) throw new Error('Максимум 5 переменных');
      const total = 1 << vars.length;
      const sdnf = [], sknf = [];
      let trues = 0;

      let html = '<table><thead><tr>' + vars.map(v => `<th>${v}</th>`).join('') + `<th>F</th></tr></thead><tbody>`;
      for (let m = 0; m < total; m++) {
        const env = {};
        const minterm = [], maxterm = [];
        html += '<tr>';
        vars.forEach((v, idx) => {
          const bit = Boolean((m >> (vars.length - 1 - idx)) & 1);
          env[v] = bit;
          html += `<td class="${bit ? 'truth-1' : 'truth-0'}">${bit ? 1 : 0}</td>`;
          minterm.push(bit ? v : `¬${v}`);
          maxterm.push(bit ? `¬${v}` : v);
        });
        const res = Boolean(fn(env));
        if (res) { trues++; sdnf.push(`(${minterm.join('∧')})`); }
        else { sknf.push(`(${maxterm.join('∨')})`); }
        html += `<td class="${res ? 'truth-1' : 'truth-0'}">${res ? 1 : 0}</td></tr>`;
      }
      html += '</tbody></table>';
      wrap.innerHTML = html;

      status.innerHTML = trues === total
        ? '<span class="status-pill status-ok">Тавтология (1)</span>'
        : trues === 0
          ? '<span class="status-pill status-err">Противоречие (0)</span>'
          : `<span class="status-pill status-ok">Истин: ${trues} из ${total}</span>`;

      forms.innerHTML = `
        <div class="mono"><strong>СДНФ:</strong> ${sdnf.length ? sdnf.join(' ∨ ') : '— (тождественный 0)'}</div>
        <div class="mono" style="margin-top:5px;"><strong>СКНФ:</strong> ${sknf.length ? sknf.join(' ∧ ') : '— (тождественная 1)'}</div>
      `;
    } catch (e) {
      status.innerHTML = `<span class="status-pill status-err">${e.message}</span>`;
      forms.innerHTML = ''; wrap.innerHTML = '';
    }
  };

  document.getElementById('dmLogicExpr').addEventListener('input', buildTable);
  document.querySelectorAll('.dm-preset').forEach(b => b.addEventListener('click', () => {
    document.getElementById('dmLogicExpr').value = b.dataset.expr;
    buildTable();
  }));
  buildTable();
};
