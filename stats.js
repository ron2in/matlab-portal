/* ==========================================================================
   РАЗДЕЛ 4: МАТЕМАТИЧЕСКАЯ СТАТИСТИКА
   Темы: Описательная статистика, Точечные оценки, ДИ, Гипотезы, Корреляция/Регрессия
   ========================================================================== */
window.MATLAB_SECTIONS = window.MATLAB_SECTIONS || {};

window.MATLAB_SECTIONS.stats = String.raw`
  <div class="section-hero" style="--sec-accent: var(--accent-stats);">
    <div class="section-badge" style="color: var(--accent-stats);">Дисциплина 04 • Математическая статистика</div>
    <h2>Математическая статистика</h2>
    <p>Выборочный метод и эмпирическая функция распределения, точечное оценивание (ММП, Рао — Крамер), доверительные интервалы, параметрические и непараметрические критерии, корреляция и регрессия.</p>
  </div>

  <!-- 4.1 Выборочный метод и описательная статистика -->
  <h3 id="st-desc" class="topic-heading" style="--sec-accent: var(--accent-stats);">1. Выборочный метод и описательная статистика</h3>
  <div class="grid-2">
    <article class="card searchable" data-keywords="выборка генеральная совокупность вариационный ряд эмпирическая функция гливенко кантелли полигон гистограмма">
      <div class="card-header">
        <h4 class="card-title">Эмпирическая функция $F^*(x)$ и ряды</h4>
        <span class="card-tag">Выборка</span>
      </div>
      <div class="formula-box" data-latex="F^*(x) = \frac{1}{n}\sum_{i=1}^n \mathbf{1}_{\{X_i < x\}}, \quad \sup_{x\in\mathbb{R}}|F^*(x) - F(x)| \xrightarrow{\text{п.н.}} 0">
        <div class="formula-content">$$F^*(x) = \frac{n_x}{n}, \quad \sup_x |F^*(x) - F(x)| \xrightarrow{\text{п.н.}} 0 \;\text{(Гливенко — Кантелли)}$$</div>
        <button class="copy-latex-btn"><i data-lucide="copy"></i><span>LaTeX</span></button>
      </div>
      <p class="condition-note">Вариационный ряд — упорядоченная выборка $x_{(1)} \le x_{(2)} \le \dots \le x_{(n)}$. Для дискретных данных строят полигон частот, для интервальных — гистограмму.</p>
    </article>

    <article class="card searchable" data-keywords="выборочное среднее дисперсия исправленная бессель квантили интерквартильный размах iqr">
      <div class="card-header">
        <h4 class="card-title">Выборочное среднее, $s^2$ (Бессель) и IQR</h4>
        <span class="card-tag">Характеристики</span>
      </div>
      <div class="formula-box" data-latex="\bar{x} = \frac{1}{n}\sum_{i=1}^n x_i, \quad D_{\text{в}} = \frac{1}{n}\sum (x_i-\bar{x})^2, \quad s^2 = \frac{n}{n-1}D_{\text{в}} = \frac{1}{n-1}\sum (x_i-\bar{x})^2">
        <div class="formula-content">$$\bar{x} = \frac{1}{n}\sum x_i, \quad s^2 = \frac{1}{n-1}\sum (x_i-\bar{x})^2 \;\text{(несмещённая)}$$</div>
        <button class="copy-latex-btn"><i data-lucide="copy"></i><span>LaTeX</span></button>
      </div>
      <div class="formula-explain">
        <div class="ex-row"><strong>Суть:</strong> оценка центра ($\bar{x}$) и разброса ($s^2$) генеральной совокупности по конечной выборке.</div>
        <div class="ex-row"><strong>Обозначения:</strong> $x_i$ — элементы выборки, $n$ — объём выборки, $n-1$ — число степеней свободы (поправка Бесселя).</div>
        <div class="ex-row"><strong>Условия:</strong> для $s^2$ требуется $n \ge 2$; выборочное среднее чувствительно к выбросам.</div>
      </div>
      <div class="formula-box" data-latex="\mathrm{IQR} = Q_3 - Q_1, \quad R = x_{(n)} - x_{(1)}">
        <div class="formula-content">$$\mathrm{IQR} = Q_3 - Q_1 \;\text{(интерквартильный размах)}$$</div>
        <button class="copy-latex-btn"><i data-lucide="copy"></i><span>LaTeX</span></button>
      </div>
    </article>
  </div>

  <!-- 4.2 Точечное оценивание параметров -->
  <h3 id="st-point" class="topic-heading" style="--sec-accent: var(--accent-stats);">2. Точечное оценивание: Рао — Крамер, Моменты и ММП (MLE)</h3>
  <div class="grid-2">
    <article class="card searchable" data-keywords="несмещенность состоятельность эффективность рао крамер информация фишера">
      <div class="card-header">
        <h4 class="card-title">Свойства оценок и неравенство Рао — Крамера</h4>
        <span class="card-tag">Теория оценок</span>
      </div>
      <ul class="theory-list">
        <li><strong>Несмещённость:</strong> $\mathbb{E}[\hat{\theta}] = \theta$ для любого объёма выборки $n$.</li>
        <li><strong>Состоятельность:</strong> $\hat{\theta}_n \xrightarrow{P} \theta$ при $n \to \infty$.</li>
        <li><strong>Эффективность:</strong> минимальная дисперсия среди всех несмещённых оценок.</li>
      </ul>
      <div class="formula-box" data-latex="D(\hat{\theta}) \ge \frac{1}{n\,I(\theta)}, \quad I(\theta) = \mathbb{E}\!\left[\left(\frac{\partial \ln f(X;\theta)}{\partial \theta}\right)^2\right]">
        <div class="formula-content">$$D(\hat{\theta}) \ge \frac{1}{n\,I(\theta)} \quad (\text{Рао — Крамер, } I(\theta)\text{ — информация Фишера})$$</div>
        <button class="copy-latex-btn"><i data-lucide="copy"></i><span>LaTeX</span></button>
      </div>
    </article>

    <article class="card searchable" data-keywords="метод моментов максимальное правдоподобие ммп mle функция правдоподобия">
      <div class="card-header">
        <h4 class="card-title">Метод моментов и ММП (MLE)</h4>
        <span class="card-tag">Методы</span>
      </div>
      <div class="formula-box" data-latex="L(\theta) = \prod_{i=1}^n f(x_i; \theta), \quad \frac{\partial \ln L(\theta)}{\partial \theta} = 0">
        <div class="formula-content">$$L(\theta) = \prod_{i=1}^n f(x_i; \theta), \quad \ell(\theta) = \ln L(\theta) \to \max_{\theta}$$</div>
        <button class="copy-latex-btn"><i data-lucide="copy"></i><span>LaTeX</span></button>
      </div>
      <details class="accordion">
        <summary>Пошаговый алгоритм ММП и Метод моментов</summary>
        <div class="accordion-body">
          <strong>ММП:</strong> 1) Записать $L(\theta) = \prod f(x_i;\theta)$; 2) Взять логарифм $\ln L(\theta) = \sum \ln f(x_i;\theta)$; 3) Решить уравнение правдоподобия $\frac{\partial \ln L}{\partial \theta} = 0$; 4) Проверить максимум по второй производной.
          <br><strong>Метод моментов:</strong> приравнять теоретические моменты $\nu_k(\theta)$ к выборочным $a_k = \frac{1}{n}\sum x_i^k$.
        </div>
      </details>
    </article>
  </div>

  <!-- 4.3 Интервальное оценивание -->
  <h3 id="st-ci" class="topic-heading" style="--sec-accent: var(--accent-stats);">3. Доверительные интервалы (ДИ)</h3>
  <article class="card searchable" data-keywords="доверительный интервал надежность уровень значимости стьюдент хи квадрат доля">
    <div class="card-header">
      <h4 class="card-title">Доверительные интервалы ($\gamma = 1 - \alpha$)</h4>
      <span class="card-tag">Интервалы</span>
    </div>
    <div class="grid-2">
      <div class="formula-box" data-latex="\bar{x} \pm z_{\alpha/2}\frac{\sigma}{\sqrt{n}}, \qquad \bar{x} \pm t_{\alpha/2,\,n-1}\frac{s}{\sqrt{n}}">
        <div class="formula-content">
          <div class="formula-caption">Для $\mu$ (изв. $\sigma$ и неизв. $\sigma$):</div>
          $$\bar{x} \pm z_{\alpha/2}\frac{\sigma}{\sqrt{n}}, \quad \bar{x} \pm t_{\alpha/2,\,n-1}\frac{s}{\sqrt{n}}$$
        </div>
        <button class="copy-latex-btn"><i data-lucide="copy"></i><span>LaTeX</span></button>
      </div>
      <div class="formula-explain">
        <div class="ex-row"><strong>Суть:</strong> диапазон значений, который с заданной надёжностью $\gamma = 1-\alpha$ накрывает неизвестное истинное среднее $\mu$.</div>
        <div class="ex-row"><strong>Обозначения:</strong> $\bar{x}$ — выборочное среднее, $s$ — исправленное СКО, $n$ — объём выборки, $z_{\alpha/2}, t_{\alpha/2,n-1}$ — квантили $\mathcal{N}(0,1)$ и Стьюдента.</div>
        <div class="ex-row"><strong>Условия:</strong> выборка из нормального распределения (или $n > 30$ по ЦПТ); при неизвестной $\sigma$ используется $t$-распределение.</div>
      </div>
      <div class="formula-box" data-latex="\frac{(n-1)s^2}{\chi^2_{1-\alpha/2}} \le \sigma^2 \le \frac{(n-1)s^2}{\chi^2_{\alpha/2}}, \quad \hat{p} \pm z_{\alpha/2}\sqrt{\frac{\hat{p}(1-\hat{p})}{n}}">
        <div class="formula-content">
          <div class="formula-caption">Для $\sigma^2$ ($\chi^2_{n-1}$) и для доли $p$:</div>
          $$\frac{(n-1)s^2}{\chi^2_{\text{верх}}} \le \sigma^2 \le \frac{(n-1)s^2}{\chi^2_{\text{нижн}}}, \quad \hat{p} \pm z_{\alpha/2}\sqrt{\frac{\hat{p}(1-\hat{p})}{n}}$$
        </div>
        <button class="copy-latex-btn"><i data-lucide="copy"></i><span>LaTeX</span></button>
      </div>
    </div>
  </article>

  <!-- 4.4 Проверка статистических гипотез -->
  <h3 id="st-hyp" class="topic-heading" style="--sec-accent: var(--accent-stats);">4. Проверка статистических гипотез</h3>
  <div class="grid-2">
    <article class="card searchable" data-keywords="гипотезы ошибка первого второго рода мощность p-value z-тест t-тест фишер">
      <div class="card-header">
        <h4 class="card-title">$H_0, H_1$, ошибки $\alpha/\beta$ и параметрические тесты</h4>
        <span class="card-tag">Параметрика</span>
      </div>
      <p class="theory-text">Ошибка I рода ($\alpha$) — отвергнуть верную $H_0$; ошибка II рода ($\beta$) — принять неверную $H_0$. Мощность критерия $= 1 - \beta$. Если $p\text{-value} < \alpha$, отвергаем $H_0$.</p>
      <div class="formula-box" data-latex="t = \frac{\bar{x} - \mu_0}{s / \sqrt{n}}, \quad t = \frac{\bar{x}_1 - \bar{x}_2}{\sqrt{s_p^2(1/n_1 + 1/n_2)}}, \quad F = \frac{s_1^2}{s_2^2}">
        <div class="formula-content">$$t = \frac{\bar{x}-\mu_0}{s/\sqrt{n}}, \quad t_{2\text{-выб}} = \frac{\bar{x}_1-\bar{x}_2}{\sqrt{s_p^2(\frac{1}{n_1}+\frac{1}{n_2})}}, \quad F = \frac{s_1^2}{s_2^2}$$</div>
        <button class="copy-latex-btn"><i data-lucide="copy"></i><span>LaTeX</span></button>
      </div>
    </article>

    <article class="card searchable" data-keywords="непараметрические тесты хи квадрат пирсон колмогоров смирнов манн уитни уилкоксон">
      <div class="card-header">
        <h4 class="card-title">Критерии согласия и непараметрические тесты</h4>
        <span class="card-tag">Непараметрика</span>
      </div>
      <div class="formula-box" data-latex="\chi^2 = \sum_{i=1}^k \frac{(O_i - E_i)^2}{E_i}, \quad D_n = \sup_x |F^*(x) - F_0(x)|">
        <div class="formula-content">$$\chi^2 = \sum_{i=1}^k \frac{(O_i - E_i)^2}{E_i} \;\text{(Пирсон)}, \quad D_n = \sup_x |F^*(x) - F_0(x)| \;\text{(Колмогоров)}$$</div>
        <button class="copy-latex-btn"><i data-lucide="copy"></i><span>LaTeX</span></button>
      </div>
      <ul class="theory-list">
        <li><strong>Манна — Уитни ($U$):</strong> сравнение двух независимых выборок без требования нормальности.</li>
        <li><strong>Уилкоксона ($W$):</strong> сравнение двух зависимых (парных) выборок по рангам разностей.</li>
      </ul>
    </article>
  </div>

  <!-- 4.5 Корреляция и регрессия -->
  <h3 id="st-reg" class="topic-heading" style="--sec-accent: var(--accent-stats);">5. Корреляционный и регрессионный анализ</h3>
  <article class="card searchable" data-keywords="корреляция пирсон спирмен кендалл линейная регрессия мнк коэффициент детерминации r2 остатки">
    <div class="card-header">
      <h4 class="card-title">Корреляция (Пирсон, Спирмен, Кендалл) и Парная регрессия (МНК)</h4>
      <span class="card-tag">Регрессия</span>
    </div>
    <div class="grid-2">
      <div class="formula-box" data-latex="r = \frac{\sum (x_i-\bar{x})(y_i-\bar{y})}{\sqrt{\sum (x_i-\bar{x})^2 \sum (y_i-\bar{y})^2}}, \quad t_r = \frac{r\sqrt{n-2}}{\sqrt{1-r^2}}">
        <div class="formula-content">$$r = \frac{\sum (x_i-\bar{x})(y_i-\bar{y})}{\sqrt{\sum (x_i-\bar{x})^2\sum (y_i-\bar{y})^2}}, \quad t_r = \frac{r\sqrt{n-2}}{\sqrt{1-r^2}}$$</div>
        <button class="copy-latex-btn"><i data-lucide="copy"></i><span>LaTeX</span></button>
      </div>
      <div class="formula-box" data-latex="\hat{y} = \hat{b}_0 + \hat{b}_1 x, \quad \hat{b}_1 = \frac{\operatorname{cov}(x,y)}{s_x^2}, \quad R^2 = 1 - \frac{\sum (y_i-\hat{y}_i)^2}{\sum (y_i-\bar{y})^2}">
        <div class="formula-content">$$\hat{y} = \hat{b}_0 + \hat{b}_1 x, \quad \hat{b}_1 = r\frac{s_y}{s_x}, \quad R^2 = 1 - \frac{SS_{\text{res}}}{SS_{\text{tot}}}$$</div>
        <button class="copy-latex-btn"><i data-lucide="copy"></i><span>LaTeX</span></button>
      </div>
    </div>
    <p class="condition-note">Для монотонных нелинейных связей используют ранговую корреляцию <strong>Спирмена</strong> ($\rho = 1 - \frac{6\sum d_i^2}{n(n^2-1)}$) и <strong>Кендалла</strong> ($\tau$).</p>
  </article>

  <!-- ИНТЕРАКТИВ РАЗДЕЛА 4 -->
  <h3 id="st-interactive" class="topic-heading" style="--sec-accent: var(--accent-stats);">Интерактивный комплекс: Статистический анализатор выборки</h3>
  <article class="card widget-card searchable" data-keywords="анализатор выборки доверительный интервал стьюдент гистограмма медиана квартили">
    <div class="widget-header">
      <div class="widget-title"><i data-lucide="activity"></i><span>Статистический анализатор выборки (с 95% ДИ)</span></div>
      <div class="btn-group">
        <button class="btn sm" id="stP1">Выборка 1</button>
        <button class="btn sm" id="stP2">Нормальная (n=30)</button>
        <button class="btn sm" id="stClr">Очистить</button>
      </div>
    </div>
    <label class="field-label" for="stInput">Массив чисел (через запятую, пробел или перенос строки):</label>
    <textarea id="stInput" class="input-field mono" rows="2">14.2, 15.1, 13.8, 16.4, 15.0, 14.7, 15.5, 13.9, 16.1, 14.8, 15.3, 14.5</textarea>
    <div id="stMetrics" class="stats-grid"></div>
    <div class="chart-box">
      <div style="font-size:0.78rem; color:var(--text-secondary); margin-bottom:6px; display:flex; justify-content:space-between;">
        <span>Гистограмма частот</span>
        <span id="stBinsInfo" style="color:var(--accent-stats);"></span>
      </div>
      <canvas id="stCanvas"></canvas>
    </div>
  </article>
`;

/* ==========================================================================
   ЛОГИКА ИНТЕРАКТИВА РАЗДЕЛА 4
   ========================================================================== */
window.initStatsWidgets = function() {
  let sample = [];

  // Таблица/аппроксимация двустороннего t-квантиля (95% ДИ, alpha=0.05)
  const tCrit95 = (df) => {
    const tbl = {
      1: 12.706, 2: 4.303, 3: 3.182, 4: 2.776, 5: 2.571, 6: 2.447, 7: 2.365, 8: 2.306,
      9: 2.262, 10: 2.228, 11: 2.201, 12: 2.179, 13: 2.160, 14: 2.145, 15: 2.131,
      16: 2.120, 17: 2.110, 18: 2.101, 19: 2.093, 20: 2.086, 25: 2.060, 30: 2.042
    };
    if (tbl[df]) return tbl[df];
    if (df > 30) return 1.96 + 2.37 / df + 2.8 / (df * df);
    return 2.09;
  };

  const quantile = (sorted, q) => {
    const pos = (sorted.length - 1) * q;
    const b = Math.floor(pos), r = pos - b;
    return sorted[b + 1] !== undefined ? sorted[b] + r * (sorted[b + 1] - sorted[b]) : sorted[b];
  };

  const analyze = () => {
    const raw = document.getElementById('stInput').value;
    sample = raw.split(/[\s,;]+/).map(s => s.trim()).filter(Boolean).map(Number).filter(n => !Number.isNaN(n));
    const out = document.getElementById('stMetrics');

    if (sample.length === 0) {
      out.innerHTML = '<div style="color:var(--text-muted);font-size:0.86rem;">Введите числа для анализа.</div>';
      window.drawStatsHistogram(sample);
      return;
    }

    const n = sample.length;
    const sorted = [...sample].sort((a, b) => a - b);
    const mean = sample.reduce((a, b) => a + b, 0) / n;
    const med = quantile(sorted, 0.5);
    const q1 = quantile(sorted, 0.25);
    const q3 = quantile(sorted, 0.75);
    const sq = sample.reduce((s, x) => s + (x - mean) ** 2, 0);
    const s2 = n > 1 ? sq / (n - 1) : 0;
    const s = Math.sqrt(s2);

    let ciStr = '— (нужно n ≥ 2)';
    if (n >= 2) {
      const margin = tCrit95(n - 1) * (s / Math.sqrt(n));
      ciStr = `[${(mean - margin).toFixed(3)}; ${(mean + margin).toFixed(3)}]`;
    }

    out.innerHTML = `
      <div class="stat-tile"><div class="stat-tile-label">Объём $n$</div><div class="stat-tile-val">${n}</div></div>
      <div class="stat-tile"><div class="stat-tile-label">Среднее $\\bar{x}$</div><div class="stat-tile-val">${mean.toFixed(3)}</div></div>
      <div class="stat-tile"><div class="stat-tile-label">Испр. дисперсия $s^2$</div><div class="stat-tile-val">${s2.toFixed(3)}</div></div>
      <div class="stat-tile"><div class="stat-tile-label">СКО $s$</div><div class="stat-tile-val">${s.toFixed(3)}</div></div>
      <div class="stat-tile"><div class="stat-tile-label">Медиана $Me$</div><div class="stat-tile-val">${med.toFixed(3)}</div></div>
      <div class="stat-tile"><div class="stat-tile-label">Квартили $Q_1 / Q_3$</div><div class="stat-tile-val">${q1.toFixed(2)} / ${q3.toFixed(2)}</div></div>
      <div class="stat-tile" style="grid-column: span 2;"><div class="stat-tile-label">95% ДИ для $\\mu$ (t-критерий)</div><div class="stat-tile-val" style="color:var(--accent-stats);">${ciStr}</div></div>
    `;
    window.renderMathIn(out);
    window.drawStatsHistogram(sample);
  };

  window.drawStatsHistogram = (arr = sample) => {
    const canvas = document.getElementById('stCanvas');
    const info = document.getElementById('stBinsInfo');
    if (!canvas || canvas.offsetParent === null) return;

    const dpr = window.devicePixelRatio || 1;
    const w = canvas.clientWidth, h = 250;
    canvas.width = w * dpr; canvas.height = h * dpr;
    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, w, h);

    if (!arr.length) { info.textContent = ''; return; }
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    const txt = isLight ? '#475569' : '#94a3b8';

    const min = Math.min(...arr), max = Math.max(...arr);
    const bins = min === max ? 1 : Math.min(12, Math.max(3, Math.ceil(1 + 3.322 * Math.log10(arr.length))));
    const bw = min === max ? 1 : (max - min) / bins;
    info.textContent = `Интервалов: ${bins} (шаг ≈ ${bw.toFixed(2)})`;

    const cnts = new Array(bins).fill(0);
    arr.forEach(v => {
      let i = min === max ? 0 : Math.floor((v - min) / bw);
      if (i >= bins) i = bins - 1;
      cnts[i]++;
    });

    const pad = { top: 22, right: 14, bottom: 32, left: 36 };
    const pw = w - pad.left - pad.right, ph = h - pad.top - pad.bottom;
    const maxC = Math.max(1, ...cnts);

    ctx.font = '11px Inter, sans-serif';
    ctx.fillStyle = txt; ctx.textAlign = 'right';
    const steps = Math.min(4, maxC);
    for (let i = 0; i <= steps; i++) {
      const y = pad.top + ph * (1 - i / steps);
      ctx.strokeStyle = isLight ? 'rgba(15,23,42,0.08)' : 'rgba(148,163,184,0.12)';
      ctx.beginPath(); ctx.moveTo(pad.left, y); ctx.lineTo(w - pad.right, y); ctx.stroke();
      ctx.fillText(Math.round((maxC * i) / steps), pad.left - 5, y + 4);
    }

    const sw = pw / bins, barW = Math.max(8, sw - 6);
    cnts.forEach((c, i) => {
      const x = pad.left + i * sw + (sw - barW) / 2;
      const bh = (c / maxC) * ph;
      const y = pad.top + ph - bh;
      ctx.fillStyle = '#fbbf24';
      ctx.fillRect(x, y, barW, bh);
      if (c > 0) {
        ctx.fillStyle = isLight ? '#0f172a' : '#f1f5f9';
        ctx.textAlign = 'center';
        ctx.fillText(c, x + barW / 2, y - 5);
      }
      ctx.fillStyle = txt; ctx.textAlign = 'center';
      const lo = (min + i * bw).toFixed(1), hi = (min + (i + 1) * bw).toFixed(1);
      ctx.fillText(min === max ? lo : `${lo}–${hi}`, x + barW / 2, h - 10);
    });
  };

  document.getElementById('stInput').addEventListener('input', analyze);
  document.getElementById('stP1').addEventListener('click', () => {
    document.getElementById('stInput').value = '14.2, 15.1, 13.8, 16.4, 15.0, 14.7, 15.5, 13.9, 16.1, 14.8, 15.3, 14.5';
    analyze();
  });
  document.getElementById('stP2').addEventListener('click', () => {
    const arr = Array.from({ length: 30 }, () => Math.round(((Math.random() + Math.random() + Math.random() + Math.random() - 2) * 8 + 50) * 10) / 10);
    document.getElementById('stInput').value = arr.join(', ');
    analyze();
  });
  document.getElementById('stClr').addEventListener('click', () => {
    document.getElementById('stInput').value = '';
    analyze();
  });

  analyze();
};
