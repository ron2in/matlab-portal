/* ==========================================================================
   РАЗДЕЛ 3: ТЕОРИЯ ВЕРОЯТНОСТЕЙ И МАТЕМАТИЧЕСКОЕ ОЖИДАНИЕ
   Темы: Аксиоматика/Байес/Бернулли, Распределения, M(X) и моменты, Многомерные СВ, Предельные теоремы
   ========================================================================== */
window.MATLAB_SECTIONS = window.MATLAB_SECTIONS || {};

window.MATLAB_SECTIONS.prob = String.raw`
  <div class="section-hero" style="--sec-accent: var(--accent-prob);">
    <div class="section-badge" style="color: var(--accent-prob);">Дисциплина 03 • Теория вероятностей</div>
    <h2>Теория вероятностей и Математическое ожидание</h2>
    <p>Аксиоматика Колмогорова, формула Байеса и схема Бернулли, законы распределения ДСВ и НСВ, подробная теория $M(X)$, моментов, многомерных СВ и предельных теорем.</p>
  </div>

  <!-- 3.1 Аксиоматика и классическая вероятность -->
  <h3 id="pr-axioms" class="topic-heading" style="--sec-accent: var(--accent-prob);">1. Аксиоматика, Байес и повторные испытания</h3>
  <div class="grid-2">
    <article class="card searchable" data-keywords="аксиоматика колмогорова вероятностное пространство классическая геометрическая условная вероятность байес">
      <div class="card-header">
        <h4 class="card-title">Колмогоров, полная вероятность и Байес</h4>
        <span class="card-tag">Аксиомы &amp; Байес</span>
      </div>
      <p class="theory-text"><strong>Вероятностное пространство</strong> $(\Omega, \mathcal{F}, P)$: $P(\Omega)=1$, $P(A)\ge 0$, счётная аддитивность на $\sigma$-алгебре $\mathcal{F}$. Геометрическая вероятность: $P(A) = \frac{\mu(A)}{\mu(\Omega)}$.</p>
      <div class="formula-box" data-latex="P(A \mid B) = \frac{P(AB)}{P(B)}, \quad P(A) = \sum_{i=1}^n P(H_i)P(A \mid H_i)">
        <div class="formula-content">$$P(A\mid B)=\frac{P(AB)}{P(B)}, \quad P(A)=\sum_{i=1}^n P(H_i)P(A\mid H_i)$$</div>
        <button class="copy-latex-btn"><i data-lucide="copy"></i><span>LaTeX</span></button>
      </div>
      <div class="formula-box" data-latex="P(H_i \mid A) = \frac{P(H_i)\,P(A \mid H_i)}{\sum_{j=1}^n P(H_j)\,P(A \mid H_j)}">
        <div class="formula-content">$$P(H_i \mid A) = \frac{P(H_i)\,P(A \mid H_i)}{\sum_{j=1}^n P(H_j)\,P(A \mid H_j)} \quad (\text{Байес})$$</div>
        <button class="copy-latex-btn"><i data-lucide="copy"></i><span>LaTeX</span></button>
      </div>
      <div class="formula-explain">
        <div class="ex-row"><strong>Суть:</strong> переоценка вероятности гипотезы после получения новых данных (наблюдения события $A$).</div>
        <div class="ex-row"><strong>Обозначения:</strong> $P(H_i)$ — априорная вероятность гипотезы, $P(A\mid H_i)$ — правдоподобие, $P(H_i\mid A)$ — апостериорная вероятность.</div>
        <div class="ex-row"><strong>Условия:</strong> гипотезы $H_1,\dots,H_n$ попарно несовместны и образуют полную группу ($\sum P(H_i)=1$), $P(A)>0$.</div>
      </div>
    </article>

    <article class="card searchable" data-keywords="бернулли муавр лаплас локальная интегральная пуассон редкие события">
      <div class="card-header">
        <h4 class="card-title">Схема Бернулли, Муавр — Лаплас и Пуассон</h4>
        <span class="card-tag">Испытания</span>
      </div>
      <div class="formula-box" data-latex="P_n(k) = C_n^k p^k q^{n-k} \quad (q = 1 - p)">
        <div class="formula-content">$$P_n(k) = C_n^k p^k q^{n-k} \quad (\text{Бернулли})$$</div>
        <button class="copy-latex-btn"><i data-lucide="copy"></i><span>LaTeX</span></button>
      </div>
      <div class="formula-box" data-latex="P_n(k) \approx \frac{\lambda^k e^{-\lambda}}{k!} \;(\lambda = np), \quad P_n(k) \approx \frac{1}{\sqrt{npq}}\varphi\!\left(\frac{k-np}{\sqrt{npq}}\right)">
        <div class="formula-content">$$P_n(k) \approx \frac{\lambda^k e^{-\lambda}}{k!} \;(\text{Пуассон}), \quad P_n(k) \approx \frac{1}{\sqrt{npq}}\varphi(x) \;(\text{Муавр — Лаплас})$$</div>
        <button class="copy-latex-btn"><i data-lucide="copy"></i><span>LaTeX</span></button>
      </div>
      <p class="condition-note">Теорема Пуассона применима при $n \to \infty, p \to 0, np = \lambda$; Муавр — Лаплас при $npq \gg 1$ (интегральная: $P(k_1\le S_n \le k_2) \approx \Phi(x_2)-\Phi(x_1)$).</p>
    </article>
  </div>

  <!-- 3.2 Случайные величины и их распределения -->
  <h3 id="pr-dists" class="topic-heading" style="--sec-accent: var(--accent-prob);">2. Случайные величины и основные распределения</h3>
  <div class="grid-2">
    <article class="card searchable" data-keywords="функция распределения плотность вероятности дискретная непрерывная случайная величина">
      <div class="card-header">
        <h4 class="card-title">Функция распределения $F(x)$ и плотность $f(x)$</h4>
        <span class="card-tag">СВ</span>
      </div>
      <div class="formula-box" data-latex="F(x) = P(X < x), \quad f(x) = F'(x), \quad \int_{-\infty}^{+\infty} f(x)\,dx = 1">
        <div class="formula-content">$$F(x) = P(X < x), \quad f(x) = F'(x), \quad P(a \le X < b) = F(b) - F(a) = \int_a^b f(x)\,dx$$</div>
        <button class="copy-latex-btn"><i data-lucide="copy"></i><span>LaTeX</span></button>
      </div>
      <p class="condition-note">Свойства $F(x)$: неубывающая, $0 \le F(x) \le 1$, $\lim_{x\to-\infty}F(x)=0$, $\lim_{x\to+\infty}F(x)=1$.</p>
      <button class="open-graph-btn" data-expr="(1/(s*sqrt(2*pi)))*exp(-((x-m)^2)/(2*s^2))" data-mode="explicit" data-params='{"m":0,"s":1}'>📈 Открыть плотность $\mathcal{N}(\mu,\sigma^2)$ на графике</button>
    </article>

    <article class="card searchable" data-keywords="распределения бернулли биномиальное пуассона геометрическое гипергеометрическое равномерное показательное нормальное коши хи квадрат стьюдент фишер">
      <div class="card-header">
        <h4 class="card-title">Сводная таблица законов распределения</h4>
        <span class="card-tag">Распределения</span>
      </div>
      <div class="table-wrap">
        <table>
          <thead><tr><th>Закон</th><th>$M(X)$</th><th>$D(X)$</th></tr></thead>
          <tbody>
            <tr><td>Бернулли $\text{Bern}(p)$</td><td>$p$</td><td>$p(1-p)$</td></tr>
            <tr><td>Биномиальное $\text{Bin}(n,p)$</td><td>$np$</td><td>$np(1-p)$</td></tr>
            <tr><td>Пуассона $\text{Pois}(\lambda)$</td><td>$\lambda$</td><td>$\lambda$</td></tr>
            <tr><td>Геометрическое $\text{Geom}(p)$</td><td>$1/p$</td><td>$(1-p)/p^2$</td></tr>
            <tr><td>Гипергеометрическое</td><td>$n\frac{K}{N}$</td><td>$n\frac{K}{N}\left(1-\frac{K}{N}\right)\frac{N-n}{N-1}$</td></tr>
            <tr><td>Равномерное $R(a,b)$</td><td>$\frac{a+b}{2}$</td><td>$\frac{(b-a)^2}{12}$</td></tr>
            <tr><td>Показательное $\text{Exp}(\lambda)$</td><td>$1/\lambda$</td><td>$1/\lambda^2$</td></tr>
            <tr><td>Нормальное $\mathcal{N}(\mu,\sigma^2)$</td><td>$\mu$</td><td>$\sigma^2$</td></tr>
          </tbody>
        </table>
      </div>
      <details class="accordion">
        <summary>Коши, $\chi^2$, Стьюдента $t$, Фишера $F$</summary>
        <div class="accordion-body">
          <strong>Коши</strong> $f(x)=\frac{1}{\pi(1+x^2)}$: $M(X)$ и $D(X)$ не существуют!
          <strong>$\chi^2(k)$:</strong> сумма квадратов $k$ независимых $\mathcal{N}(0,1)$, $M=k, D=2k$.
          <strong>Стьюдента $t(k)$:</strong> $Z/\sqrt{\chi^2_k/k}$, симметрично, при $k\to\infty \to \mathcal{N}(0,1)$.
          <strong>Фишера $F(k_1,k_2)$:</strong> отношение $(\chi^2_{k_1}/k_1)/(\chi^2_{k_2}/k_2)$.
        </div>
      </details>
    </article>
  </div>

  <!-- 3.3 Математическое ожидание и числовые характеристики -->
  <h3 id="pr-expectation" class="topic-heading" style="--sec-accent: var(--accent-prob);">3. Математическое ожидание $M(X)$, дисперсия $D(X)$ и моменты</h3>
  <div class="grid-2">
    <article class="card searchable" data-keywords="математическое ожидание свойства линейность мультипликативность дисперсия ско">
      <div class="card-header">
        <h4 class="card-title">Математическое ожидание $\mathbb{E}[X]$ и Дисперсия</h4>
        <span class="card-tag">Ключевой блок</span>
      </div>
      <div class="formula-box" data-latex="M(X)=\sum x_i p_i, \quad M(X)=\int_{-\infty}^{+\infty} x f(x)\,dx, \quad \mathbb{E}[g(X)]=\int g(x)f(x)\,dx">
        <div class="formula-content">$$M(X) = \sum x_i p_i \;\text{(ДСВ)}, \quad M(X) = \int_{-\infty}^{+\infty} x f(x)\,dx \;\text{(НСВ)}$$</div>
        <button class="copy-latex-btn"><i data-lucide="copy"></i><span>LaTeX</span></button>
      </div>
      <div class="formula-box" data-latex="M(aX+b)=aM(X)+b, \quad M(X+Y)=M(X)+M(Y), \quad M(XY)=M(X)M(Y) \text{ (незав.)}">
        <div class="formula-content">$$M(aX+b)=aM(X)+b, \quad M(XY)=M(X)M(Y) \;\text{(если }X \perp Y\text{)}$$</div>
        <button class="copy-latex-btn"><i data-lucide="copy"></i><span>LaTeX</span></button>
      </div>
      <div class="formula-explain">
        <div class="ex-row"><strong>Суть:</strong> центр тяжести распределения — среднее ожидаемое значение случайной величины при бесконечном числе повторений.</div>
        <div class="ex-row"><strong>Обозначения:</strong> $x_i, p_i$ — значения и вероятности ДСВ, $f(x)$ — плотность НСВ, $a,b \in \mathbb{R}$.</div>
        <div class="ex-row"><strong>Условия:</strong> ряд $\sum |x_i|p_i$ или интеграл $\int |x|f(x)\,dx$ должен сходиться абсолютно; мультипликативность $M(XY)=M(X)M(Y)$ верна только для независимых СВ.</div>
      </div>
      <div class="formula-box" data-latex="D(X) = M(X^2) - [M(X)]^2, \quad \sigma(X) = \sqrt{D(X)}, \quad D(aX+b) = a^2 D(X)">
        <div class="formula-content">$$D(X) = M(X^2) - [M(X)]^2, \quad \sigma(X) = \sqrt{D(X)}, \quad D(aX+b)=a^2 D(X)$$</div>
        <button class="copy-latex-btn"><i data-lucide="copy"></i><span>LaTeX</span></button>
      </div>
    </article>

    <article class="card searchable" data-keywords="моменты асимметрия эксцесс квантиль медиана мода производящая характеристическая функция">
      <div class="card-header">
        <h4 class="card-title">Моменты, асимметрия, эксцесс и $\varphi_X(t)$</h4>
        <span class="card-tag">Моменты</span>
      </div>
      <div class="formula-box" data-latex="\nu_k = \mathbb{E}[X^k], \quad \mu_k = \mathbb{E}[(X - \mathbb{E}[X])^k]">
        <div class="formula-content">$$\nu_k = \mathbb{E}[X^k] \;\text{(нач.)}, \quad \mu_k = \mathbb{E}[(X - \mathbb{E}[X])^k] \;\text{(центр.)}$$</div>
        <button class="copy-latex-btn"><i data-lucide="copy"></i><span>LaTeX</span></button>
      </div>
      <div class="formula-box" data-latex="A_s = \frac{\mu_3}{\sigma^3}, \quad E_x = \frac{\mu_4}{\sigma^4} - 3, \quad \varphi_X(t) = \mathbb{E}[e^{itX}]">
        <div class="formula-content">$$A_s = \frac{\mu_3}{\sigma^3} \;\text{(асимметрия)}, \quad E_x = \frac{\mu_4}{\sigma^4} - 3 \;\text{(эксцесс)}, \quad \varphi_X(t) = \mathbb{E}[e^{itX}]$$</div>
        <button class="copy-latex-btn"><i data-lucide="copy"></i><span>LaTeX</span></button>
      </div>
      <p class="condition-note">Связь характеристической функции с моментами: $\nu_k = (-i)^k \varphi_X^{(k)}(0)$. Для $\mathcal{N}(\mu,\sigma^2)$: $A_s = 0, E_x = 0$.</p>
    </article>
  </div>

  <!-- 3.4 Многомерные СВ и 3.5 Предельные теоремы -->
  <h3 id="pr-multi-limit" class="topic-heading" style="--sec-accent: var(--accent-prob);">4–5. Многомерные СВ и Предельные теоремы</h3>
  <div class="grid-2">
    <article class="card searchable" data-keywords="многомерные случайные величины маргинальные условное ожидание ковариация корреляция пирсон">
      <div class="card-header">
        <h4 class="card-title">4. Ковариация, корреляция и $\mathbb{E}[Y\mid X]$</h4>
        <span class="card-tag">Многомерные СВ</span>
      </div>
      <div class="formula-box" data-latex="\operatorname{cov}(X,Y) = \mathbb{E}[XY] - \mathbb{E}[X]\mathbb{E}[Y], \quad r_{XY} = \frac{\operatorname{cov}(X,Y)}{\sigma_X \sigma_Y} \in [-1,1]">
        <div class="formula-content">$$\operatorname{cov}(X,Y) = \mathbb{E}[XY] - \mathbb{E}[X]\mathbb{E}[Y], \quad r_{XY} = \frac{\operatorname{cov}(X,Y)}{\sigma_X \sigma_Y}$$</div>
        <button class="copy-latex-btn"><i data-lucide="copy"></i><span>LaTeX</span></button>
      </div>
      <p class="condition-note">Независимость $\implies r_{XY}=0$, но $r_{XY}=0$ не всегда означает независимость (только для гауссовских векторов эквивалентно). Закон полного ожидания: $\mathbb{E}[Y] = \mathbb{E}[\mathbb{E}[Y\mid X]]$.</p>
    </article>

    <article class="card searchable" data-keywords="марков чебышев неравенства закон больших чисел збч хинчин центральная предельная теорема цпт">
      <div class="card-header">
        <h4 class="card-title">5. Неравенства Маркова/Чебышёва, ЗБЧ и ЦПТ</h4>
        <span class="card-tag">Предельные теоремы</span>
      </div>
      <div class="formula-box" data-latex="P(|X - M(X)| \ge \varepsilon) \le \frac{D(X)}{\varepsilon^2}, \quad \frac{1}{n}\sum_{i=1}^n X_i \xrightarrow{P} \mu \;\text{(ЗБЧ)}">
        <div class="formula-content">$$P(|X-M(X)|\ge\varepsilon)\le\frac{D(X)}{\varepsilon^2} \;\text{(Чебышёв)}, \quad \bar{X}_n \xrightarrow{P} \mu \;\text{(ЗБЧ)}$$</div>
        <button class="copy-latex-btn"><i data-lucide="copy"></i><span>LaTeX</span></button>
      </div>
      <div class="formula-box" data-latex="\frac{\sum_{i=1}^n X_i - n\mu}{\sigma\sqrt{n}} \xrightarrow{d} \mathcal{N}(0, 1) \quad (\text{ЦПТ Линдеберга — Леви})">
        <div class="formula-content">$$\frac{S_n - n\mu}{\sigma\sqrt{n}} \xrightarrow{d} \mathcal{N}(0, 1) \quad (\text{ЦПТ})$$</div>
        <button class="copy-latex-btn"><i data-lucide="copy"></i><span>LaTeX</span></button>
      </div>
    </article>
  </div>

  <!-- ИНТЕРАКТИВ РАЗДЕЛА 3 -->
  <h3 id="pr-interactive" class="topic-heading" style="--sec-accent: var(--accent-prob);">Интерактивный комплекс: Конструктор ДСВ + Байес и Бернулли</h3>
  <div class="grid-2">
    <!-- Конструктор ДСВ -->
    <article class="card widget-card searchable" data-keywords="конструктор дсв математическое ожидание дисперсия асимметрия эксцесс график">
      <div class="widget-header">
        <div class="widget-title"><i data-lucide="bar-chart-2"></i><span>Конструктор ДСВ и моментов</span></div>
        <div class="btn-group">
          <button class="btn sm" id="prAddCol">+ Столбец</button>
          <button class="btn sm" id="prNormBtn">Нормировать</button>
        </div>
      </div>
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <span style="font-size:0.8rem; color:var(--text-secondary);">Значения $x_i$ и вероятности $p_i$:</span>
        <span id="prSumStatus" class="status-pill status-ok"></span>
      </div>
      <div class="dist-table-scroll"><table id="prDistTable"></table></div>
      <div id="prDistStats" class="stats-grid"></div>
      <div class="chart-box"><canvas id="prDistCanvas"></canvas></div>
    </article>

    <!-- Калькулятор Байеса и Бернулли -->
    <article class="card widget-card searchable" data-keywords="калькулятор байес бернулли вероятность">
      <div class="widget-header">
        <div class="widget-title"><i data-lucide="percent"></i><span>Калькулятор Байеса и Бернулли</span></div>
      </div>
      <div style="margin-bottom:16px;">
        <strong style="font-size:0.86rem; color:var(--accent-prob);">Схема Бернулли $P_n(k) = C_n^k p^k (1-p)^{n-k}$</strong>
        <div class="grid-3" style="gap:8px; margin-top:8px;">
          <div><label class="field-label">Всего $n$:</label><input type="number" id="bernN" class="input-field" value="10" min="1" max="100" /></div>
          <div><label class="field-label">Успехов $k$:</label><input type="number" id="bernK" class="input-field" value="3" min="0" max="100" /></div>
          <div><label class="field-label">Вероятность $p$:</label><input type="number" id="bernP" class="input-field" value="0.3" step="0.05" min="0" max="1" /></div>
        </div>
        <div id="bernOut" class="step-output" style="margin-top:8px;"></div>
      </div>

      <div>
        <strong style="font-size:0.86rem; color:var(--accent-prob);">Формула Байеса (2 гипотезы $H_1$ и $H_2 = \overline{H_1}$)</strong>
        <div class="grid-3" style="gap:8px; margin-top:8px;">
          <div><label class="field-label">$P(H_1)$:</label><input type="number" id="bayPH1" class="input-field" value="0.2" step="0.05" min="0" max="1" /></div>
          <div><label class="field-label">$P(A \mid H_1)$:</label><input type="number" id="bayPAH1" class="input-field" value="0.9" step="0.05" min="0" max="1" /></div>
          <div><label class="field-label">$P(A \mid H_2)$:</label><input type="number" id="bayPAH2" class="input-field" value="0.05" step="0.05" min="0" max="1" /></div>
        </div>
        <div id="bayOut" class="step-output" style="margin-top:8px;"></div>
      </div>
    </article>
  </div>
`;

/* ==========================================================================
   ЛОГИКА ИНТЕРАКТИВА РАЗДЕЛА 3
   ========================================================================== */
window.initProbWidgets = function() {
  let dist = [
    { x: 0, p: 0.1 },
    { x: 1, p: 0.3 },
    { x: 2, p: 0.4 },
    { x: 3, p: 0.15 },
    { x: 4, p: 0.05 }
  ];
  let lastMx = 0;

  const renderTable = () => {
    const tbl = document.getElementById('prDistTable');
    if (!tbl) return;
    let h = '<thead><tr><th>Параметр</th>' + dist.map((_, i) =>
      `<th style="text-align:center;">#${i+1}${dist.length > 1 ? ` <button class="btn sm pr-del" data-i="${i}" style="padding:0 4px;border:none;color:var(--accent-rose);">×</button>` : ''}</th>`
    ).join('') + '</tr></thead>';

    let rx = '<tbody><tr><td><strong>$x_i$</strong></td>' + dist.map((d, i) =>
      `<td style="text-align:center;"><input type="number" step="any" class="input-field dist-col-input pr-inp" data-i="${i}" data-k="x" value="${d.x}"></td>`
    ).join('') + '</tr>';

    let rp = '<tr><td><strong>$p_i$</strong></td>' + dist.map((d, i) =>
      `<td style="text-align:center;"><input type="number" step="0.01" min="0" max="1" class="input-field dist-col-input pr-inp" data-i="${i}" data-k="p" value="${d.p}"></td>`
    ).join('') + '</tr></tbody>';

    tbl.innerHTML = h + rx + rp;
    window.renderMathIn(tbl);

    tbl.querySelectorAll('.pr-del').forEach(b => b.addEventListener('click', () => {
      dist.splice(parseInt(b.dataset.i, 10), 1);
      renderTable(); updateDist();
    }));
    tbl.querySelectorAll('.pr-inp').forEach(inp => inp.addEventListener('input', () => {
      dist[parseInt(inp.dataset.i, 10)][inp.dataset.k] = parseFloat(inp.value) || 0;
      updateDist();
    }));
  };

  const updateDist = () => {
    const sumP = dist.reduce((s, d) => s + d.p, 0);
    const st = document.getElementById('prSumStatus');
    if (dist.some(d => d.p < 0)) {
      st.className = 'status-pill status-err'; st.textContent = 'Ошибка: p_i < 0';
    } else if (Math.abs(sumP - 1) < 0.001) {
      st.className = 'status-pill status-ok'; st.textContent = `∑ p_i = ${sumP.toFixed(4)} ✓`;
    } else {
      st.className = 'status-pill status-warn'; st.textContent = `∑ p_i = ${sumP.toFixed(4)} ≠ 1`;
    }

    const mx = dist.reduce((s, d) => s + d.x * d.p, 0);
    const mx2 = dist.reduce((s, d) => s + d.x * d.x * d.p, 0);
    const dx = Math.max(0, mx2 - mx * mx);
    const sigma = Math.sqrt(dx);
    const mu3 = dist.reduce((s, d) => s + Math.pow(d.x - mx, 3) * d.p, 0);
    const mu4 = dist.reduce((s, d) => s + Math.pow(d.x - mx, 4) * d.p, 0);
    const asym = sigma > 1e-9 ? mu3 / Math.pow(sigma, 3) : 0;
    const kurt = sigma > 1e-9 ? mu4 / Math.pow(sigma, 4) - 3 : 0;
    lastMx = mx;

    const out = document.getElementById('prDistStats');
    out.innerHTML = `
      <div class="stat-tile"><div class="stat-tile-label">$M(X)$</div><div class="stat-tile-val">${mx.toFixed(4)}</div></div>
      <div class="stat-tile"><div class="stat-tile-label">$D(X)$</div><div class="stat-tile-val">${dx.toFixed(4)}</div></div>
      <div class="stat-tile"><div class="stat-tile-label">$\\sigma(X)$</div><div class="stat-tile-val">${sigma.toFixed(4)}</div></div>
      <div class="stat-tile"><div class="stat-tile-label">$\\mu_3$ / $A_s$</div><div class="stat-tile-val">${mu3.toFixed(3)} / ${asym.toFixed(2)}</div></div>
      <div class="stat-tile"><div class="stat-tile-label">$\\mu_4$ / $E_x$</div><div class="stat-tile-val">${mu4.toFixed(3)} / ${kurt.toFixed(2)}</div></div>
    `;
    window.renderMathIn(out);
    window.drawProbChart(dist, lastMx);
  };

  window.drawProbChart = (data = dist, mx = lastMx) => {
    const canvas = document.getElementById('prDistCanvas');
    if (!canvas || canvas.offsetParent === null) return;
    const dpr = window.devicePixelRatio || 1;
    const w = canvas.clientWidth, h = 250;
    canvas.width = w * dpr; canvas.height = h * dpr;
    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, w, h);

    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    const txt = isLight ? '#475569' : '#94a3b8';
    const pad = { top: 24, right: 16, bottom: 30, left: 40 };
    const pw = w - pad.left - pad.right, ph = h - pad.top - pad.bottom;
    const maxP = Math.max(0.1, ...data.map(d => d.p)) * 1.15;

    ctx.font = '11px Inter, sans-serif';
    ctx.fillStyle = txt; ctx.textAlign = 'right';
    for (let i = 0; i <= 4; i++) {
      const y = pad.top + ph * (1 - i / 4);
      ctx.strokeStyle = isLight ? 'rgba(15,23,42,0.08)' : 'rgba(148,163,184,0.12)';
      ctx.beginPath(); ctx.moveTo(pad.left, y); ctx.lineTo(w - pad.right, y); ctx.stroke();
      ctx.fillText(((maxP * i) / 4).toFixed(2), pad.left - 5, y + 4);
    }

    const step = pw / data.length;
    const barW = Math.min(44, step * 0.56);
    data.forEach((d, i) => {
      const cx = pad.left + step * (i + 0.5);
      const bh = Math.max(0, (d.p / maxP) * ph);
      const y = pad.top + ph - bh;
      ctx.fillStyle = '#34d399';
      ctx.fillRect(cx - barW / 2, y, barW, bh);
      ctx.fillStyle = isLight ? '#0f172a' : '#f1f5f9';
      ctx.textAlign = 'center';
      ctx.fillText(d.p.toFixed(2), cx, y - 5);
      ctx.fillStyle = txt;
      ctx.fillText(d.x, cx, h - 10);
    });
  };

  document.getElementById('prAddCol').addEventListener('click', () => {
    dist.push({ x: (dist[dist.length - 1]?.x || 0) + 1, p: 0 });
    renderTable(); updateDist();
  });
  document.getElementById('prNormBtn').addEventListener('click', () => {
    const s = dist.reduce((a, d) => a + Math.max(0, d.p), 0);
    if (s > 0) dist.forEach(d => d.p = Number((Math.max(0, d.p) / s).toFixed(4)));
    renderTable(); updateDist();
  });

  renderTable(); updateDist();

  // Бернулли
  const calcBern = () => {
    const n = Math.max(1, parseInt(document.getElementById('bernN').value, 10) || 1);
    const k = Math.max(0, parseInt(document.getElementById('bernK').value, 10) || 0);
    const p = Math.max(0, Math.min(1, parseFloat(document.getElementById('bernP').value) || 0));
    const out = document.getElementById('bernOut');
    if (k > n) { out.innerHTML = '<span class="status-pill status-err">k не может быть больше n</span>'; return; }
    let cnk = 1;
    for (let i = 1; i <= k; i++) cnk = (cnk * (n - k + i)) / i;
    const pk = cnk * Math.pow(p, k) * Math.pow(1 - p, n - k);
    out.innerHTML = `$$P_{${n}}(${k}) = ${pk.toFixed(6)} \\quad (${(pk * 100).toFixed(2)}\\%)$$`;
    window.renderMathIn(out);
  };
  ['bernN', 'bernK', 'bernP'].forEach(id => document.getElementById(id).addEventListener('input', calcBern));
  calcBern();

  // Байес
  const calcBayes = () => {
    const ph1 = Math.max(0, Math.min(1, parseFloat(document.getElementById('bayPH1').value) || 0));
    const pah1 = Math.max(0, Math.min(1, parseFloat(document.getElementById('bayPAH1').value) || 0));
    const pah2 = Math.max(0, Math.min(1, parseFloat(document.getElementById('bayPAH2').value) || 0));
    const pa = ph1 * pah1 + (1 - ph1) * pah2;
    const out = document.getElementById('bayOut');
    if (pa <= 0) { out.innerHTML = 'Полная вероятность $P(A) = 0$'; window.renderMathIn(out); return; }
    const post = (ph1 * pah1) / pa;
    out.innerHTML = `$$P(A) = ${pa.toFixed(4)}, \\quad P(H_1 \\mid A) = ${post.toFixed(4)} \\;(${(post*100).toFixed(2)}\\%)$$`;
    window.renderMathIn(out);
  };
  ['bayPH1', 'bayPAH1', 'bayPAH2'].forEach(id => document.getElementById(id).addEventListener('input', calcBayes));
  calcBayes();
};
