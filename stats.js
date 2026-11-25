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
      <div class="formula-explain">
        <div class="ex-row"><strong>Суть:</strong> восстановление функции распределения по выборке; при росте $n$ она равномерно сходится к истинной $F(x)$.</div>
        <div class="ex-row"><strong>Обозначения:</strong> $n_x$ — число элементов выборки строго меньше $x$, $n$ — объём выборки.</div>
        <div class="ex-row"><strong>Условия:</strong> выборка должна состоять из независимых одинаково распределённых (i.i.d.) наблюдений.</div>
      </div>
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
      <div class="formula-explain">
        <div class="ex-row"><strong>Суть:</strong> свойства точечных оценок и теоретический предел точности — дисперсия несмещённой оценки не может быть ниже границы Рао — Крамера.</div>
        <div class="ex-row"><strong>Обозначения:</strong> $\hat{\theta}$ — оценка параметра $\theta$, $I(\theta)$ — информация Фишера одного наблюдения.</div>
        <div class="ex-row"><strong>Условия:</strong> плотность $f(x;\theta)$ должна быть регулярной (носитель не зависит от $\theta$, возможно дифференцирование под знаком интеграла).</div>
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
      <div class="formula-explain">
        <div class="ex-row"><strong>Суть:</strong> поиск такого значения параметра $\theta$, при котором вероятность получить наблюдаемую выборку максимальна.</div>
        <div class="ex-row"><strong>Обозначения:</strong> $L(\theta)$ — функция правдоподобия, $\ell(\theta)=\ln L(\theta)$ — логарифмическое правдоподобие.</div>
        <div class="ex-row"><strong>Условия:</strong> наблюдения независимы; оценки ММП состоятельны и асимптотически эффективны при регулярности модели.</div>
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
      <div class="formula-explain">
        <div class="ex-row"><strong>Суть:</strong> проверка равенства средних ($t$-тест) или дисперсий ($F$-тест) на основе вероятности $p$-value.</div>
        <div class="ex-row"><strong>Обозначения:</strong> $s_p^2$ — объединённая дисперсия, $\alpha$ — уровень значимости (обычно $0.05$), $\beta$ — ошибка II рода.</div>
        <div class="ex-row"><strong>Условия:</strong> выборки нормальны (или $n > 30$); для классического двухвыборочного $t$-теста предполагается равенство дисперсий ($\sigma_1^2=\sigma_2^2$).</div>
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
      <div class="formula-explain">
        <div class="ex-row"><strong>Суть:</strong> проверка согласия эмпирического распределения с теоретическим ($\chi^2$, Колмогоров) и сравнение сдвигов по рангам.</div>
        <div class="ex-row"><strong>Обозначения:</strong> $O_i, E_i$ — наблюдаемые и ожидаемые частоты, $F^*(x)$ — эмпирическая функция распределения.</div>
        <div class="ex-row"><strong>Условия:</strong> для критерия $\chi^2$ Пирсона желательно $E_i \ge 5$ в каждом интервале; критерий Колмогорова требует непрерывности $F_0(x)$.</div>
      </div>
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
      <div class="formula-explain">
        <div class="ex-row"><strong>Суть:</strong> измерение силы линейной связи ($r$) и построение наилучшей линейной модели $\hat{y}=\hat{b}_0+\hat{b}_1 x$ методом наименьших квадратов.</div>
        <div class="ex-row"><strong>Обозначения:</strong> $r$ — корреляция Пирсона, $R^2\in[0,1]$ — коэффициент детерминации (доля объяснённой дисперсии), $\rho, \tau$ — ранговые корреляции.</div>
        <div class="ex-row"><strong>Условия:</strong> Пирсон измеряет только линейную связь и чувствителен к выбросам; для нелинейных монотонных связей используют Спирмена/Кендалла.</div>
      </div>
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

  <!-- Калькулятор проверки гипотез -->
  <article class="card widget-card searchable" style="margin-top: 16px;" data-keywords="проверка гипотез t-тест стьюдент хи квадрат пирсон p-value">
    <div class="widget-header">
      <div class="widget-title"><i data-lucide="flask-conical"></i><span>Калькулятор проверки статистических гипотез ($\alpha = 0.05$)</span></div>
      <div class="btn-group">
        <button class="btn sm active-tab st-hyp-tab" data-tab="ttest">t-тест Стьюдента</button>
        <button class="btn sm st-hyp-tab" data-tab="chi2">Критерий $\chi^2$ Пирсона</button>
      </div>
    </div>

    <!-- Вкладка 1: Двухвыборочный t-тест -->
    <div id="stHypTWrap">
      <div class="grid-2" style="gap:10px;">
        <div>
          <label class="field-label" for="stT1">Выборка 1 ($X_1$):</label>
          <textarea id="stT1" class="input-field mono" rows="2">12.4, 13.1, 11.8, 12.9, 13.5, 12.7, 13.0</textarea>
        </div>
        <div>
          <label class="field-label" for="stT2">Выборка 2 ($X_2$):</label>
          <textarea id="stT2" class="input-field mono" rows="2">10.8, 11.5, 10.9, 11.2, 10.4, 11.9, 11.1</textarea>
        </div>
      </div>
      <div id="stTOut" class="step-output"></div>
    </div>

    <!-- Вкладка 2: Критерий Пирсона chi2 -->
    <div id="stHypChiWrap" style="display:none;">
      <div class="grid-2" style="gap:10px;">
        <div>
          <label class="field-label" for="stChiO">Наблюдаемые частоты ($O_i$):</label>
          <input type="text" id="stChiO" class="input-field mono" value="18, 22, 15, 25, 20" />
        </div>
        <div>
          <label class="field-label" for="stChiE">Ожидаемые частоты ($E_i$):</label>
          <input type="text" id="stChiE" class="input-field mono" value="20, 20, 20, 20, 20" />
        </div>
      </div>
      <div id="stChiOut" class="step-output"></div>
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

  // ========================================================================
  // 2. КАЛЬКУЛЯТОР ПРОВЕРКИ ГИПОТЕЗ (t-ТЕСТ И ХИ-КВАДРАТ)
  // ========================================================================
  const logGamma = (z) => {
    const g = 7;
    const p = [0.99999999999980993, 676.5203681218851, -1259.1392167224028, 771.32342877765313, -176.61502916214059, 12.507343278686905, -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7];
    if (z < 0.5) return Math.log(Math.PI / Math.sin(Math.PI * z)) - logGamma(1 - z);
    z -= 1;
    let x = p[0];
    for (let i = 1; i < g + 2; i++) x += p[i] / (z + i);
    const t = z + g + 0.5;
    return 0.5 * Math.log(2 * Math.PI) + (z + 0.5) * Math.log(t) - t + Math.log(x);
  };

  const tTwoSidedPValue = (tAbs, df) => {
    if (tAbs === 0) return 1;
    const logC = logGamma((df + 1) / 2) - 0.5 * Math.log(df * Math.PI) - logGamma(df / 2);
    const pdf = x => Math.exp(logC - ((df + 1) / 2) * Math.log(1 + (x * x) / df));
    const n = 200, h = tAbs / n;
    let sum = pdf(0) + pdf(tAbs);
    for (let i = 1; i < n; i++) sum += (i % 2 === 0 ? 2 : 4) * pdf(i * h);
    const cdfHalf = (h / 3) * sum;
    return Math.max(0, Math.min(1, 1 - 2 * cdfHalf));
  };

  const chi2PValue = (xVal, df) => {
    if (xVal <= 0) return 1;
    const k2 = df / 2;
    const logC = -k2 * Math.log(2) - logGamma(k2);
    const pdf = x => x <= 0 ? 0 : Math.exp(logC + (k2 - 1) * Math.log(x) - x / 2);
    const n = 240, h = xVal / n;
    let sum = pdf(1e-6) + pdf(xVal);
    for (let i = 1; i < n; i++) sum += (i % 2 === 0 ? 2 : 4) * pdf(i * h);
    return Math.max(0, Math.min(1, 1 - (h / 3) * sum));
  };

  const chi2Crit05 = (df) => {
    const z = 1.6448536;
    const term = 1 - 2 / (9 * df) + z * Math.sqrt(2 / (9 * df));
    return df * Math.pow(term, 3);
  };

  const parseList = str => str.split(/[\s,;]+/).map(s => s.trim()).filter(Boolean).map(Number).filter(n => !Number.isNaN(n));

  const runTTest = () => {
    const x1 = parseList(document.getElementById('stT1').value);
    const x2 = parseList(document.getElementById('stT2').value);
    const out = document.getElementById('stTOut');
    if (x1.length < 2 || x2.length < 2) {
      out.innerHTML = '<span class="status-pill status-warn">Введите минимум по 2 числа в каждую выборку.</span>';
      return;
    }
    const n1 = x1.length, n2 = x2.length;
    const m1 = x1.reduce((a, b) => a + b, 0) / n1;
    const m2 = x2.reduce((a, b) => a + b, 0) / n2;
    const s1 = x1.reduce((s, v) => s + (v - m1) ** 2, 0) / (n1 - 1);
    const s2 = x2.reduce((s, v) => s + (v - m2) ** 2, 0) / (n2 - 1);

    const df = n1 + n2 - 2;
    const sp2 = ((n1 - 1) * s1 + (n2 - 1) * s2) / df;
    const se = Math.sqrt(sp2 * (1 / n1 + 1 / n2));
    const tStat = se > 1e-12 ? (m1 - m2) / se : 0;
    const pVal = tTwoSidedPValue(Math.abs(tStat), df);

    const reject = pVal < 0.05;
    out.innerHTML = `
      <div class="stats-grid" style="margin-top:0; margin-bottom:10px;">
        <div class="stat-tile"><div class="stat-tile-label">$\\bar{x}_1 / \\bar{x}_2$</div><div class="stat-tile-val">${m1.toFixed(3)} / ${m2.toFixed(3)}</div></div>
        <div class="stat-tile"><div class="stat-tile-label">$t$-статистика</div><div class="stat-tile-val">${tStat.toFixed(4)}</div></div>
        <div class="stat-tile"><div class="stat-tile-label">Степени свободы $df$</div><div class="stat-tile-val">${df}</div></div>
        <div class="stat-tile"><div class="stat-tile-label">$p$-value (двуст.)</div><div class="stat-tile-val">${pVal < 0.0001 ? pVal.toExponential(2) : pVal.toFixed(4)}</div></div>
      </div>
      <span class="status-pill ${reject ? 'status-err' : 'status-ok'}">
        ${reject ? 'Отвергаем H₀ (p < 0.05): различия средних статистически значимы' : 'Нет оснований отвергнуть H₀ (p ≥ 0.05)'}
      </span>
    `;
    window.renderMathIn(out);
  };

  const runChi2Test = () => {
    const obs = parseList(document.getElementById('stChiO').value);
    const exp = parseList(document.getElementById('stChiE').value);
    const out = document.getElementById('stChiOut');
    if (obs.length < 2 || obs.length !== exp.length || exp.some(e => e <= 0)) {
      out.innerHTML = '<span class="status-pill status-warn">Списки O_i и E_i должны быть одинаковой длины (≥ 2) и E_i > 0.</span>';
      return;
    }
    const chi2 = obs.reduce((s, o, i) => s + ((o - exp[i]) ** 2) / exp[i], 0);
    const df = obs.length - 1;
    const crit = chi2Crit05(df);
    const pVal = chi2PValue(chi2, df);
    const reject = chi2 > crit;

    out.innerHTML = `
      <div class="stats-grid" style="margin-top:0; margin-bottom:10px;">
        <div class="stat-tile"><div class="stat-tile-label">$\\chi^2_{\\text{набл}}$</div><div class="stat-tile-val">${chi2.toFixed(4)}</div></div>
        <div class="stat-tile"><div class="stat-tile-label">$\\chi^2_{\\text{кр}} (\\alpha=0.05)$</div><div class="stat-tile-val">${crit.toFixed(4)}</div></div>
        <div class="stat-tile"><div class="stat-tile-label">Степени свободы $df$</div><div class="stat-tile-val">${df}</div></div>
        <div class="stat-tile"><div class="stat-tile-label">$p$-value</div><div class="stat-tile-val">${pVal < 0.0001 ? pVal.toExponential(2) : pVal.toFixed(4)}</div></div>
      </div>
      <span class="status-pill ${reject ? 'status-err' : 'status-ok'}">
        ${reject ? 'Отвергаем H₀ (χ² > χ²_кр): распределение не согласуется' : 'Нет оснований отвергнуть H₀: данные согласуются с моделью'}
      </span>
    `;
    window.renderMathIn(out);
  };

  document.querySelectorAll('.st-hyp-tab').forEach(b => b.addEventListener('click', () => {
    document.querySelectorAll('.st-hyp-tab').forEach(x => x.classList.remove('active-tab'));
    b.classList.add('active-tab');
    const isT = b.dataset.tab === 'ttest';
    document.getElementById('stHypTWrap').style.display = isT ? 'block' : 'none';
    document.getElementById('stHypChiWrap').style.display = isT ? 'none' : 'block';
  }));
  ['stT1', 'stT2'].forEach(id => document.getElementById(id).addEventListener('input', runTTest));
  ['stChiO', 'stChiE'].forEach(id => document.getElementById(id).addEventListener('input', runChi2Test));
  runTTest(); runChi2Test();
};
