/* ==========================================================================
   РАЗДЕЛ 1: ВЫСШАЯ МАТЕМАТИКА (1–2 курсы вуза)
   Темы: Линал и АнГем, Матан 1 пер., ФНП, Ряды, ОДУ, ТФКП + Интерактив
   ========================================================================== */
window.MATLAB_SECTIONS = window.MATLAB_SECTIONS || {};

window.MATLAB_SECTIONS.higher = String.raw`
  <div class="section-hero" style="--sec-accent: var(--accent-higher);">
    <div class="section-badge" style="color: var(--accent-higher);">Дисциплина 01 • Высшая математика</div>
    <h2>Высшая математика (1–2 курсы)</h2>
    <p>Линейная алгебра и аналитическая геометрия, математический анализ одной и нескольких переменных, ряды, обыкновенные дифференциальные уравнения, ТФКП и операционное исчисление.</p>
  </div>

  <!-- 1.1 Линейная алгебра и аналитическая геометрия -->
  <h3 id="hm-linalg" class="topic-heading" style="--sec-accent: var(--accent-higher);">1. Линейная алгебра и аналитическая геометрия</h3>
  <div class="grid-2">
    <article class="card searchable" data-keywords="матрицы ранг окаймляющие миноры обратная матрица определитель">
      <div class="card-header">
        <h4 class="card-title">Матрицы, ранг и обратная матрица</h4>
        <span class="card-tag">Линал</span>
      </div>
      <p class="theory-text"><strong>Ранг матрицы $\operatorname{rg}(A)$</strong> — наибольший порядок её минора, отличного от нуля (метод окаймляющих миноров и элементарных преобразований).</p>
      <div class="formula-box" data-latex="A^{-1} = \frac{1}{\det A} C^T, \quad \det A \neq 0">
        <div class="formula-content">$$A^{-1} = \frac{1}{\det A} C^T \quad (\det A \neq 0)$$</div>
        <button class="copy-latex-btn"><i data-lucide="copy"></i><span>LaTeX</span></button>
      </div>
      <div class="formula-box" data-latex="\det(AB) = \det(A)\det(B), \quad (AB)^{-1} = B^{-1}A^{-1}">
        <div class="formula-content">$$\det(AB) = \det A \cdot \det B, \quad (AB)^{-1} = B^{-1}A^{-1}$$</div>
        <button class="copy-latex-btn"><i data-lucide="copy"></i><span>LaTeX</span></button>
      </div>
      <p class="condition-note">Свойства определителя: при перестановке двух строк знак меняется; при прибавлении к строке другой строки, умноженной на число, $\det A$ не меняется.</p>
      <details class="accordion">
        <summary>Разложение по строке / столбцу и метод окаймляющих миноров</summary>
        <div class="accordion-body">
          Разложение по $i$-й строке: $\det A = \sum_{j=1}^n a_{ij} A_{ij}$, где $A_{ij} = (-1)^{i+j} M_{ij}$ — алгебраическое дополнение.
          Для нахождения ранга методом окаймляющих миноров берут ненулевой минор порядка $k$ и проверяют все миноры порядка $k+1$, содержащие его; если все они равны $0$, то $\operatorname{rg}(A) = k$.
        </div>
      </details>
    </article>

    <article class="card searchable" data-keywords="слау кронекер капелли гаусс крамер фср фундаментальная система решений">
      <div class="card-header">
        <h4 class="card-title">СЛАУ: Кронекер — Капелли, Гаусс, Крамер, ФСР</h4>
        <span class="card-tag">СЛАУ</span>
      </div>
      <p class="theory-text">Система $AX = B$ ($n$ неизвестных) совместна тогда и только тогда, когда ранг основной матрицы равен рангу расширенной.</p>
      <div class="formula-box" data-latex="\operatorname{rg}(A) = \operatorname{rg}(A \mid B) = r">
        <div class="formula-content">$$\operatorname{rg}(A) = \operatorname{rg}(A \mid B) = r$$</div>
        <button class="copy-latex-btn"><i data-lucide="copy"></i><span>LaTeX</span></button>
      </div>
      <div class="formula-box" data-latex="x_i = \frac{\Delta_i}{\Delta} \quad (\Delta \neq 0, \text{ Крамер})">
        <div class="formula-content">$$x_i = \frac{\Delta_i}{\Delta} \quad (\Delta = \det A \neq 0)$$</div>
        <button class="copy-latex-btn"><i data-lucide="copy"></i><span>LaTeX</span></button>
      </div>
      <p class="condition-note">При $r = n$ решение единственно; при $r < n$ — бесконечно много решений. Размерность пространства решений однородной СЛАУ $AX=0$ (число векторов в ФСР) равна $n - r$.</p>
    </article>

    <article class="card searchable" data-keywords="векторная алгебра скалярное векторное смешанное произведение базис грам шмидт">
      <div class="card-header">
        <h4 class="card-title">Векторная алгебра и ортогонализация</h4>
        <span class="card-tag">Векторы</span>
      </div>
      <div class="formula-box" data-latex="\vec{a}\cdot\vec{b} = |\vec{a}||\vec{b}|\cos\varphi, \quad |\vec{a}\times\vec{b}| = |\vec{a}||\vec{b}|\sin\varphi">
        <div class="formula-content">$$\vec{a}\cdot\vec{b} = |\vec{a}||\vec{b}|\cos\varphi, \quad |\vec{a}\times\vec{b}| = S_{\text{пар}}$$</div>
        <button class="copy-latex-btn"><i data-lucide="copy"></i><span>LaTeX</span></button>
      </div>
      <div class="formula-box" data-latex="(\vec{a},\vec{b},\vec{c}) = \det\begin{pmatrix}a_x&a_y&a_z\\b_x&b_y&b_z\\c_x&c_y&c_z\end{pmatrix} = \pm V_{\text{пар}}">
        <div class="formula-content">$$(\vec{a},\vec{b},\vec{c}) = \vec{a}\cdot(\vec{b}\times\vec{c}) = \pm V_{\text{пар}}$$</div>
        <button class="copy-latex-btn"><i data-lucide="copy"></i><span>LaTeX</span></button>
      </div>
      <details class="accordion">
        <summary>Процесс ортогонализации Грама — Шмидта</summary>
        <div class="accordion-body">
          Из линейно независимого базиса $\{\vec{a}_1, \dots, \vec{a}_n\}$ строится ортогональный базис $\{\vec{b}_k\}$:
          $$\vec{b}_1 = \vec{a}_1, \quad \vec{b}_k = \vec{a}_k - \sum_{j=1}^{k-1} \frac{(\vec{a}_k, \vec{b}_j)}{(\vec{b}_j, \vec{b}_j)}\vec{b}_j, \quad \vec{e}_k = \frac{\vec{b}_k}{\|\vec{b}_k\|}$$
        </div>
      </details>
    </article>

    <article class="card searchable" data-keywords="линейные операторы собственные значения векторы квадратичные формы сильвестр">
      <div class="card-header">
        <h4 class="card-title">Собственные значения и квадратичные формы</h4>
        <span class="card-tag">Операторы</span>
      </div>
      <div class="formula-box" data-latex="A\vec{v} = \lambda \vec{v}, \quad \det(A - \lambda I) = 0">
        <div class="formula-content">$$A\vec{v} = \lambda \vec{v}, \qquad \det(A - \lambda I) = 0$$</div>
        <button class="copy-latex-btn"><i data-lucide="copy"></i><span>LaTeX</span></button>
      </div>
      <p class="theory-text"><strong>Критерий Сильвестра</strong> для квадратичной формы $Q(x) = x^T A x$ ($A = A^T$):</p>
      <ul class="theory-list">
        <li>Положительно определена ($Q > 0$): все угловые миноры $\Delta_1 > 0, \Delta_2 > 0, \dots, \Delta_n > 0$.</li>
        <li>Отрицательно определена ($Q < 0$): знаки чередуются, начиная с минуса: $\Delta_1 < 0, \Delta_2 > 0, (-1)^n\Delta_n > 0$.</li>
      </ul>
    </article>

    <article class="card searchable" data-keywords="прямая плоскость пространство кривые поверхности второго порядка эллипс гипербола парабола" style="grid-column: 1 / -1;">
      <div class="card-header">
        <h4 class="card-title">Аналитическая геометрия: прямые, плоскости, кривые и поверхности 2-го порядка</h4>
        <span class="card-tag">АнГем</span>
      </div>
      <div class="grid-2">
        <div class="formula-box" data-latex="Ax + By + Cz + D = 0, \quad \frac{x-x_0}{l} = \frac{y-y_0}{m} = \frac{z-z_0}{n}">
          <div class="formula-content">
            <div class="formula-caption">Плоскость (нормаль $\vec{n}=(A,B,C)$) и прямая в $\mathbb{R}^3$:</div>
            $$Ax + By + Cz + D = 0, \quad \frac{x-x_0}{l} = \frac{y-y_0}{m} = \frac{z-z_0}{n}$$
          </div>
          <button class="copy-latex-btn"><i data-lucide="copy"></i><span>LaTeX</span></button>
        </div>
        <div class="formula-box" data-latex="\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1, \quad \frac{x^2}{a^2} - \frac{y^2}{b^2} = 1, \quad y^2 = 2px">
          <div class="formula-content">
            <div class="formula-caption">Канонические эллипс, гипербола, парабола:</div>
            $$\frac{x^2}{a^2} \pm \frac{y^2}{b^2} = 1, \quad y^2 = 2px$$
          </div>
          <button class="copy-latex-btn"><i data-lucide="copy"></i><span>LaTeX</span></button>
        </div>
      </div>
      <details class="accordion">
        <summary>Поверхности 2-го порядка и расстояние от точки до плоскости</summary>
        <div class="accordion-body">
          Расстояние от $M_0(x_0,y_0,z_0)$ до плоскости: $d = \frac{|Ax_0+By_0+Cz_0+D|}{\sqrt{A^2+B^2+C^2}}$.
          Основные поверхности: эллипсоид $\frac{x^2}{a^2}+\frac{y^2}{b^2}+\frac{z^2}{c^2}=1$, однополостный/двуполостный гиперболоид $\frac{x^2}{a^2}+\frac{y^2}{b^2}-\frac{z^2}{c^2}=\pm 1$, эллиптический/гиперболический параболоид $\frac{x^2}{a^2}\pm\frac{y^2}{b^2}=2z$, конус $\frac{x^2}{a^2}+\frac{y^2}{b^2}-\frac{z^2}{c^2}=0$.
        </div>
      </details>
    </article>
  </div>

  <!-- 1.2 Математический анализ (1 переменная) -->
  <h3 id="hm-calc1" class="topic-heading" style="--sec-accent: var(--accent-higher);">2. Математический анализ (1 переменная)</h3>
  <div class="grid-2">
    <article class="card searchable" data-keywords="пределы замечательные эквивалентные бесконечно малые о малое большое лопиталь">
      <div class="card-header">
        <h4 class="card-title">Пределы, асимптотика ($o, O$) и Лопиталь</h4>
        <span class="card-tag">Пределы</span>
      </div>
      <div class="formula-box" data-latex="\lim_{x\to 0}\frac{\sin x}{x} = 1, \quad \lim_{x\to\infty}\left(1+\frac{1}{x}\right)^x = e">
        <div class="formula-content">$$\lim_{x\to 0}\frac{\sin x}{x} = 1, \quad \lim_{x\to\infty}\left(1+\frac{1}{x}\right)^x = e$$</div>
        <button class="copy-latex-btn"><i data-lucide="copy"></i><span>LaTeX</span></button>
      </div>
      <div class="formula-box" data-latex="f = o(g) \iff \frac{f(x)}{g(x)} \to 0; \quad f = O(g) \iff \left|\frac{f(x)}{g(x)}\right| \le C">
        <div class="formula-content">$$f = o(g) \iff \lim \frac{f}{g} = 0; \quad \sin x \sim x, \; e^x-1 \sim x, \; \ln(1+x) \sim x$$</div>
        <button class="copy-latex-btn"><i data-lucide="copy"></i><span>LaTeX</span></button>
      </div>
      <p class="condition-note">Правило Лопиталя: при неопределённости $\frac{0}{0}$ или $\frac{\infty}{\infty}$ справедливо $\lim \frac{f(x)}{g(x)} = \lim \frac{f'(x)}{g'(x)}$ (если предел отношения производных существует).</p>
      <button class="open-graph-btn" data-expr="sin(x)/x" data-mode="explicit">📈 Открыть $\sin(x)/x$ на графике</button>
    </article>

    <article class="card searchable" data-keywords="непрерывность точки разрыва первого второго рода устранимый скачок">
      <div class="card-header">
        <h4 class="card-title">Непрерывность и классификация точек разрыва</h4>
        <span class="card-tag">Непрерывность</span>
      </div>
      <p class="theory-text">Функция непрерывна в $x_0$, если $\lim_{x\to x_0^-} f(x) = \lim_{x\to x_0^+} f(x) = f(x_0)$.</p>
      <ul class="theory-list">
        <li><strong>I рода (устранимый):</strong> оба односторонних предела конечны и равны, но $\neq f(x_0)$ (или $f(x_0)$ не определена).</li>
        <li><strong>I рода (скачок):</strong> односторонние пределы конечны, но $f(x_0^-) \neq f(x_0^+)$.</li>
        <li><strong>II рода:</strong> хотя бы один из односторонних пределов бесконечен или не существует.</li>
      </ul>
    </article>

    <article class="card searchable" data-keywords="дифференциальное исчисление производные дифференциал тейлор пеано лагранж экстремум перегиб">
      <div class="card-header">
        <h4 class="card-title">Производные, формула Тейлора и экстремумы</h4>
        <span class="card-tag">Дифференцирование</span>
      </div>
      <div class="formula-box" data-latex="f(x) = \sum_{k=0}^{n}\frac{f^{(k)}(a)}{k!}(x-a)^k + R_n(x)">
        <div class="formula-content">$$f(x) = \sum_{k=0}^{n}\frac{f^{(k)}(a)}{k!}(x-a)^k + R_n(x)$$</div>
        <button class="copy-latex-btn"><i data-lucide="copy"></i><span>LaTeX</span></button>
      </div>
      <div class="formula-explain">
        <div class="ex-row"><strong>Суть:</strong> локальная аппроксимация гладкой функции многочленом степени $n$ в окрестности точки $a$.</div>
        <div class="ex-row"><strong>Обозначения:</strong> $f^{(k)}(a)$ — $k$-я производная в точке $a$, $R_n(x)$ — остаточный член (Пеано или Лагранжа).</div>
        <div class="ex-row"><strong>Условия:</strong> функция $f$ должна быть $n$ раз дифференцируема в точке $a$ (для формы Лагранжа — $n+1$ раз на интервале).</div>
      </div>
      <p class="condition-note">Остаток в форме Пеано: $R_n = o((x-a)^n)$; в форме Лагранжа: $R_n = \frac{f^{(n+1)}(\xi)}{(n+1)!}(x-a)^{n+1}$.</p>
      <details class="accordion">
        <summary>Таблица производных и исследование функции</summary>
        <div class="accordion-body">
          $(x^n)'=nx^{n-1}$, $(a^x)'=a^x\ln a$, $(\ln x)'=\frac{1}{x}$, $(\sin x)'=\cos x$, $(\cos x)'=-\sin x$, $(\operatorname{tg}x)'=\frac{1}{\cos^2 x}$, $(\operatorname{arctg}x)'=\frac{1}{1+x^2}$.
          <br>Экстремум: $f'(x_0)=0$ (или не сущ.), $f''(x_0)>0 \implies \min$, $f''(x_0)<0 \implies \max$. Перегиб: $f''$ меняет знак.
        </div>
      </details>
    </article>

    <article class="card searchable" data-keywords="интеграл неопределенный определенный ньютон лейбниц несобственные интегралы сходимость">
      <div class="card-header">
        <h4 class="card-title">Интегралы и несобственные интегралы</h4>
        <span class="card-tag">Интегрирование</span>
      </div>
      <div class="formula-box" data-latex="\int_a^b f(x)\,dx = F(b) - F(a), \quad \int u\,dv = uv - \int v\,du">
        <div class="formula-content">$$\int_a^b f(x)\,dx = F(b) - F(a), \quad \int u\,dv = uv - \int v\,du$$</div>
        <button class="copy-latex-btn"><i data-lucide="copy"></i><span>LaTeX</span></button>
      </div>
      <div class="formula-box" data-latex="\int_1^{+\infty}\frac{dx}{x^p} \text{ сходится} \iff p > 1; \quad \int_0^1 \frac{dx}{x^p} \text{ сходится} \iff p < 1">
        <div class="formula-content">$$\int_1^{+\infty}\frac{dx}{x^p} < \infty \iff p > 1; \quad \int_0^1 \frac{dx}{x^p} < \infty \iff p < 1$$</div>
        <button class="copy-latex-btn"><i data-lucide="copy"></i><span>LaTeX</span></button>
      </div>
      <details class="accordion">
        <summary>Методы интегрирования рациональных дробей</summary>
        <div class="accordion-body">
          Правильная дробь $\frac{P(x)}{Q(x)}$ раскладывается на простейшие: $\frac{A}{x-a}$, $\frac{A}{(x-a)^k}$ и $\frac{Mx+N}{x^2+px+q}$ (при $p^2-4q < 0$). Коэффициенты находят методом неопределённых коэффициентов.
        </div>
      </details>
    </article>
  </div>

  <!-- 1.3 ФНП и Кратные интегралы -->
  <h3 id="hm-multi" class="topic-heading" style="--sec-accent: var(--accent-higher);">3. Функции нескольких переменных (ФНП) и интегралы</h3>
  <div class="grid-2">
    <article class="card searchable" data-keywords="фнп частные производные градиент экстремум гессиан лагранж">
      <div class="card-header">
        <h4 class="card-title">Градиент, Гессиан и метод Лагранжа</h4>
        <span class="card-tag">ФНП</span>
      </div>
      <div class="formula-box" data-latex="\nabla f = \left(\frac{\partial f}{\partial x_1}, \dots, \frac{\partial f}{\partial x_n}\right), \quad \frac{\partial f}{\partial \vec{l}} = \nabla f \cdot \vec{l}_0">
        <div class="formula-content">$$\nabla f = \operatorname{grad} f, \quad \frac{\partial f}{\partial \vec{l}} = \nabla f \cdot \frac{\vec{l}}{|\vec{l}|}$$</div>
        <button class="copy-latex-btn"><i data-lucide="copy"></i><span>LaTeX</span></button>
      </div>
      <div class="formula-box" data-latex="\mathcal{L}(x, \lambda) = f(x) + \sum_{j=1}^m \lambda_j \varphi_j(x)">
        <div class="formula-content">
          <div class="formula-caption">Функция Лагранжа для условного экстремума ($\varphi_j(x)=0$):</div>
          $$\mathcal{L}(x, \lambda) = f(x) + \sum_{j=1}^m \lambda_j \varphi_j(x), \quad \nabla_{x,\lambda}\mathcal{L} = 0$$
        </div>
        <button class="copy-latex-btn"><i data-lucide="copy"></i><span>LaTeX</span></button>
      </div>
      <p class="condition-note">Безусловный экстремум ФНП: $\nabla f = 0$, затем критерий Сильвестра для матрицы вторых производных (гессиана $H_{ij} = \frac{\partial^2 f}{\partial x_i \partial x_j}$).</p>
    </article>

    <article class="card searchable" data-keywords="кратные криволинейные поверхностные интегралы якобиан грин остроградский гаусс стокс">
      <div class="card-header">
        <h4 class="card-title">Кратные интегралы, Грин, Гаусс — Остроградский, Стокс</h4>
        <span class="card-tag">Векторный анализ</span>
      </div>
      <div class="formula-box" data-latex="\oint_{\partial D} P\,dx + Q\,dy = \iint_D \left(\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}\right) dx\,dy">
        <div class="formula-content">
          <div class="formula-caption">Формула Грина:</div>
          $$\oint_{\partial D} P\,dx + Q\,dy = \iint_D \left(\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}\right) dx\,dy$$
        </div>
        <button class="copy-latex-btn"><i data-lucide="copy"></i><span>LaTeX</span></button>
      </div>
      <div class="formula-box" data-latex="\oiint_{\partial V} \vec{F}\cdot d\vec{S} = \iiint_V \operatorname{div}\vec{F}\,dV, \quad \oint_{\partial S}\vec{F}\cdot d\vec{r} = \iint_S \operatorname{rot}\vec{F}\cdot d\vec{S}">
        <div class="formula-content">$$\oiint_{\partial V}\vec{F}\cdot d\vec{S} = \iiint_V \operatorname{div}\vec{F}\,dV \;\text{(Гаусс)}, \quad \oint_{\partial S}\vec{F}\cdot d\vec{r} = \iint_S \operatorname{rot}\vec{F}\cdot d\vec{S} \;\text{(Стокс)}$$</div>
        <button class="copy-latex-btn"><i data-lucide="copy"></i><span>LaTeX</span></button>
      </div>
      <p class="condition-note">Якобианы замены: полярные $r\,dr\,d\varphi$, цилиндрические $r\,dr\,d\varphi\,dz$, сферические $r^2\sin\theta\,dr\,d\theta\,d\varphi$.</p>
    </article>
  </div>

  <!-- 1.4 Ряды, ОДУ, ТФКП -->
  <h3 id="hm-series-ode" class="topic-heading" style="--sec-accent: var(--accent-higher);">4–6. Ряды, ОДУ и ТФКП</h3>
  <div class="grid-3">
    <article class="card searchable" data-keywords="ряды даламбер коши интегральный лейбниц радиус сходимости фурье">
      <div class="card-header">
        <h4 class="card-title">4. Числовые и функциональные ряды</h4>
        <span class="card-tag">Ряды</span>
      </div>
      <div class="formula-box" data-latex="D = \lim_{n\to\infty}\frac{a_{n+1}}{a_n} < 1, \quad C = \lim_{n\to\infty}\sqrt[n]{a_n} < 1">
        <div class="formula-content">$$D = \lim \frac{a_{n+1}}{a_n} < 1, \quad C = \lim \sqrt[n]{a_n} < 1$$</div>
        <button class="copy-latex-btn"><i data-lucide="copy"></i><span>LaTeX</span></button>
      </div>
      <div class="formula-box" data-latex="R = \lim_{n\to\infty}\left|\frac{c_n}{c_{n+1}}\right| = \frac{1}{\overline{\lim}\sqrt[n]{|c_n|}}">
        <div class="formula-content">$$R = \lim \left|\frac{c_n}{c_{n+1}}\right| \;\text{(радиус сходимости)}$$</div>
        <button class="copy-latex-btn"><i data-lucide="copy"></i><span>LaTeX</span></button>
      </div>
      <details class="accordion">
        <summary>Признак Лейбница и ряды Фурье</summary>
        <div class="accordion-body">
          Знакочередующийся ряд $\sum (-1)^n b_n$ ($b_n>0$) сходится, если $b_n \downarrow 0$.
          Ряд Фурье на $[-\pi,\pi]$: $f(x) \sim \frac{a_0}{2} + \sum_{n=1}^\infty (a_n\cos nx + b_n\sin nx)$.
        </div>
      </details>
    </article>

    <article class="card searchable" data-keywords="оду дифференциальные уравнения бернулли вариация постоянной характеристическое уравнение">
      <div class="card-header">
        <h4 class="card-title">5. Обыкновенные диф. уравнения (ОДУ)</h4>
        <span class="card-tag">ОДУ</span>
      </div>
      <div class="formula-box" data-latex="y' + p(x)y = q(x) \implies y = e^{-\int p\,dx}\left(C + \int q e^{\int p\,dx}dx\right)">
        <div class="formula-content">$$y' + p(x)y = q(x) \quad (\text{метод Бернулли } y=uv)$$</div>
        <button class="copy-latex-btn"><i data-lucide="copy"></i><span>LaTeX</span></button>
      </div>
      <div class="formula-box" data-latex="y'' + py' + qy = 0 \implies \lambda^2 + p\lambda + q = 0">
        <div class="formula-content">$$y'' + py' + qy = 0 \implies \lambda^2 + p\lambda + q = 0$$</div>
        <button class="copy-latex-btn"><i data-lucide="copy"></i><span>LaTeX</span></button>
      </div>
      <details class="accordion">
        <summary>Типы ДУ 1-го порядка и системы ДУ</summary>
        <div class="accordion-body">
          1) С разделяющимися переменными: $f(y)dy = g(x)dx$. 2) Однородные: $y' = f(y/x)$, замена $y=tx$. 3) В полных дифференциалах: $Pdx+Qdy=0$ при $P_y = Q_x$.
          Для систем $X' = AX$ решение строится через собственные значения и векторы матрицы $A$.
        </div>
      </details>
    </article>

    <article class="card searchable" data-keywords="тфкп комплексные числа эйлер муавр коши риман вычеты преобразование лапласа">
      <div class="card-header">
        <h4 class="card-title">6. ТФКП и преобразование Лапласа</h4>
        <span class="card-tag">ТФКП</span>
      </div>
      <div class="formula-box" data-latex="e^{i\varphi} = \cos\varphi + i\sin\varphi, \quad u_x = v_y, \; u_y = -v_x">
        <div class="formula-content">$$e^{i\varphi} = \cos\varphi + i\sin\varphi, \quad \frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}, \; \frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}$$</div>
        <button class="copy-latex-btn"><i data-lucide="copy"></i><span>LaTeX</span></button>
      </div>
      <div class="formula-box" data-latex="\oint_\gamma f(z)\,dz = 2\pi i \sum \operatorname{Res}_{z_k} f, \quad F(p) = \int_0^\infty f(t)e^{-pt}dt">
        <div class="formula-content">$$\oint_\gamma f(z)\,dz = 2\pi i \sum \operatorname{Res} f, \quad F(p) = \mathcal{L}\{f(t)\}$$</div>
        <button class="copy-latex-btn"><i data-lucide="copy"></i><span>LaTeX</span></button>
      </div>
    </article>
  </div>

  <!-- 1.7 Векторный анализ и теория поля -->
  <h3 id="hm-vector-field" class="topic-heading" style="--sec-accent: var(--accent-higher);">7. Векторный анализ и теория поля</h3>
  <div class="grid-2">
    <article class="card searchable" data-keywords="векторный анализ теория поля скалярное поле поверхности уровня градиент поток дивергенция соленоидальное">
      <div class="card-header">
        <h4 class="card-title">Градиент, Поток и Дивергенция</h4>
        <span class="card-tag">Теория поля</span>
      </div>
      <p class="theory-text"><strong>Поверхность уровня</strong> скалярного поля $u(M) = C$. Вектор $\nabla u$ ортогонален поверхности уровня и указывает направление наискорейшего роста.</p>
      <div class="formula-box" data-latex="\frac{\partial u}{\partial \vec{l}} = (\nabla u, \vec{l}_0), \quad \Pi = \iint_S (\mathbf{F}, \mathbf{n})\,dS, \quad \operatorname{div}\mathbf{F} = \nabla \cdot \mathbf{F} = \frac{\partial F_x}{\partial x} + \frac{\partial F_y}{\partial y} + \frac{\partial F_z}{\partial z}">
        <div class="formula-content">$$\Pi = \iint_S (\mathbf{F},\mathbf{n})\,dS, \qquad \operatorname{div}\mathbf{F} = \nabla\cdot\mathbf{F} = \frac{\partial F_x}{\partial x}+\frac{\partial F_y}{\partial y}+\frac{\partial F_z}{\partial z}$$</div>
        <button class="copy-latex-btn"><i data-lucide="copy"></i><span>LaTeX</span></button>
      </div>
      <p class="condition-note"><strong>Соленоидальное поле:</strong> поле без источников и стоков, т.е. $\operatorname{div}\mathbf{F} \equiv 0$ (поток через любую замкнутую поверхность равен $0$).</p>
    </article>

    <article class="card searchable" data-keywords="циркуляция ротор потенциальное поле оператор лапласа лапласиан формулы векторного анализа">
      <div class="card-header">
        <h4 class="card-title">Циркуляция, Ротор и Оператор Лапласа</h4>
        <span class="card-tag">Операторы</span>
      </div>
      <div class="formula-box" data-latex="\Gamma = \oint_L \mathbf{F}\cdot d\mathbf{r}, \quad \operatorname{rot}\mathbf{F} = \nabla \times \mathbf{F} = \begin{vmatrix}\mathbf{i}&\mathbf{j}&\mathbf{k}\\\partial_x&\partial_y&\partial_z\\F_x&F_y&F_z\end{vmatrix}">
        <div class="formula-content">$$\Gamma = \oint_L \mathbf{F}\cdot d\mathbf{r}, \quad \operatorname{rot}\mathbf{F} = \nabla \times \mathbf{F}, \quad \Delta u = \nabla^2 u = \frac{\partial^2 u}{\partial x^2}+\frac{\partial^2 u}{\partial y^2}+\frac{\partial^2 u}{\partial z^2}$$</div>
        <button class="copy-latex-btn"><i data-lucide="copy"></i><span>LaTeX</span></button>
      </div>
      <div class="formula-box" data-latex="\operatorname{rot}(\nabla u) = \mathbf{0}, \quad \operatorname{div}(\operatorname{rot}\mathbf{F}) = 0, \quad \operatorname{rot}(\operatorname{rot}\mathbf{F}) = \nabla(\operatorname{div}\mathbf{F}) - \Delta\mathbf{F}">
        <div class="formula-content">$$\operatorname{rot}(\nabla u) = \mathbf{0}, \quad \operatorname{div}(\operatorname{rot}\mathbf{F}) = 0, \quad \operatorname{rot}\operatorname{rot}\mathbf{F} = \nabla(\operatorname{div}\mathbf{F}) - \Delta\mathbf{F}$$</div>
        <button class="copy-latex-btn"><i data-lucide="copy"></i><span>LaTeX</span></button>
      </div>
      <p class="condition-note"><strong>Критерий потенциальности:</strong> в односвязной области $\mathbf{F} = \nabla u \iff \operatorname{rot}\mathbf{F} = \mathbf{0}$ (циркуляция по любому замкнутому контуру равна $0$).</p>
    </article>
  </div>

  <!-- 1.8 Дифференциальная геометрия и тензорное исчисление -->
  <h3 id="hm-diffgeom" class="topic-heading" style="--sec-accent: var(--accent-higher);">8. Дифференциальная геометрия и тензорное исчисление</h3>
  <div class="grid-2">
    <article class="card searchable" data-keywords="дифференциальная геометрия френе серре кривизна кручение натуральная параметризация первая вторая квадратичная форма гауссова кривизна">
      <div class="card-header">
        <h4 class="card-title">Репер Френе и квадратичные формы поверхности</h4>
        <span class="card-tag">Дифгем</span>
      </div>
      <div class="formula-box" data-latex="\mathbf{T}' = \kappa\mathbf{N}, \quad \mathbf{N}' = -\kappa\mathbf{T} + \tau\mathbf{B}, \quad \mathbf{B}' = -\tau\mathbf{N}">
        <div class="formula-content">
          <div class="formula-caption">Формулы Френе — Серре (натуральный параметр $s$, $|\mathbf{r}'(s)|=1$):</div>
          $$\mathbf{T}' = \kappa\mathbf{N}, \quad \mathbf{N}' = -\kappa\mathbf{T} + \tau\mathbf{B}, \quad \mathbf{B}' = -\tau\mathbf{N}$$
        </div>
        <button class="copy-latex-btn"><i data-lucide="copy"></i><span>LaTeX</span></button>
      </div>
      <div class="formula-box" data-latex="I = E\,du^2 + 2F\,du\,dv + G\,dv^2, \quad K = \frac{LN - M^2}{EG - F^2}, \quad H = \frac{EN - 2FM + GL}{2(EG - F^2)}">
        <div class="formula-content">$$I = E\,du^2+2F\,du\,dv+G\,dv^2, \quad K = \frac{LN-M^2}{EG-F^2} \;\text{(гауссова)}, \quad H = \frac{EN-2FM+GL}{2(EG-F^2)}$$</div>
        <button class="copy-latex-btn"><i data-lucide="copy"></i><span>LaTeX</span></button>
      </div>
      <p class="condition-note">II квадратичная форма: $II = L\,du^2 + 2M\,du\,dv + N\,dv^2$. По теореме Гаусса (Theorema Egregium) кривизна $K = k_1 k_2$ зависит только от $I$-й формы.</p>
    </article>

    <article class="card searchable" data-keywords="тензоры ковариантные контравариантные правило эйнштейна метрический тензор свертка поднятие опускание индексов">
      <div class="card-header">
        <h4 class="card-title">Тензоры, правило Эйнштейна и метрика $g_{ij}$</h4>
        <span class="card-tag">Тензоры</span>
      </div>
      <p class="theory-text"><strong>Правило суммирования Эйнштейна:</strong> по повторяющемуся верхнему (контравариантному) и нижнему (ковариантному) индексу подразумевается суммирование.</p>
      <div class="formula-box" data-latex="ds^2 = g_{ij}\,dx^i\,dx^j, \quad v_i = g_{ij}v^j, \quad v^i = g^{ij}v_j">
        <div class="formula-content">$$ds^2 = g_{ij}\,dx^i dx^j, \quad v_i = g_{ij}v^j \;\text{(опускание)}, \quad v^i = g^{ij}v_j \;\text{(поднятие)}$$</div>
        <button class="copy-latex-btn"><i data-lucide="copy"></i><span>LaTeX</span></button>
      </div>
      <div class="formula-box" data-latex="T'^{i}_{j} = \frac{\partial x'^{i}}{\partial x^{k}}\frac{\partial x^{l}}{\partial x'^{j}} T^{k}_{l}, \quad \operatorname{tr}(T) = T^{i}_{i}">
        <div class="formula-content">$$T'^{i}_{j} = \frac{\partial x'^{i}}{\partial x^{k}}\frac{\partial x^{l}}{\partial x'^{j}} T^{k}_{l}, \quad \text{свёртка: } T^{i}_{i}$$</div>
        <button class="copy-latex-btn"><i data-lucide="copy"></i><span>LaTeX</span></button>
      </div>
    </article>
  </div>

  <!-- 1.9 Уравнения математической физики (УМФ) -->
  <h3 id="hm-pde" class="topic-heading" style="--sec-accent: var(--accent-higher);">9. Уравнения математической физики (УМФ / УРЧП)</h3>
  <div class="grid-2">
    <article class="card searchable" data-keywords="умф урчп классификация гиперболические параболические эллиптические волновое теплопроводности лаплас пуассон даламбер">
      <div class="card-header">
        <h4 class="card-title">Классификация УРЧП 2-го порядка и классические уравнения</h4>
        <span class="card-tag">УМФ</span>
      </div>
      <p class="theory-text">Для $A u_{xx} + 2B u_{xy} + C u_{yy} + \dots = 0$ знак $\Delta = B^2 - AC$ определяет тип: $\Delta > 0$ — <strong>гиперболическое</strong>, $\Delta = 0$ — <strong>параболическое</strong>, $\Delta < 0$ — <strong>эллиптическое</strong>.</p>
      <div class="formula-box" data-latex="u_{tt} = a^2 u_{xx}, \quad u(x,t) = \frac{\varphi(x-at)+\varphi(x+at)}{2} + \frac{1}{2a}\int_{x-at}^{x+at}\psi(s)\,ds">
        <div class="formula-content">
          <div class="formula-caption">Волновое уравнение и формула Даламбера:</div>
          $$u_{tt} = a^2 u_{xx}, \quad u(x,t) = \frac{\varphi(x-at)+\varphi(x+at)}{2} + \frac{1}{2a}\int_{x-at}^{x+at}\psi(s)\,ds$$
        </div>
        <button class="copy-latex-btn"><i data-lucide="copy"></i><span>LaTeX</span></button>
      </div>
      <div class="formula-box" data-latex="u_t = a^2 \Delta u \;\text{(теплопр.)}, \quad \Delta u = 0 \;\text{(Лаплас)}, \quad \Delta u = -f \;\text{(Пуассон)}">
        <div class="formula-content">$$u_t = a^2\Delta u \;\text{(теплопр.)}, \quad \Delta u = 0 \;\text{(Лаплас)}, \quad \Delta u = -f \;\text{(Пуассон)}$$</div>
        <button class="copy-latex-btn"><i data-lucide="copy"></i><span>LaTeX</span></button>
      </div>
    </article>

    <article class="card searchable" data-keywords="метод фурье разделение переменных штурм лиувилль краевая задача">
      <div class="card-header">
        <h4 class="card-title">Метод Фурье и задача Штурма — Лиувилля</h4>
        <span class="card-tag">Краевые задачи</span>
      </div>
      <p class="theory-text">Решение ищется в виде $u(x,t) = X(x)T(t)$, что сводит УРЧП к двум ОДУ, а пространственная часть приводит к задаче на собственные значения (Штурма — Лиувилля):</p>
      <div class="formula-box" data-latex="-(p(x)y')' + q(x)y = \lambda \rho(x)y, \quad \langle y_n, y_m \rangle_\rho = \int_a^b y_n y_m \rho\,dx = 0 \;(n\neq m)">
        <div class="formula-content">$$-(p(x)y')' + q(x)y = \lambda \rho(x)y \implies y_n \perp y_m \text{ с весом }\rho(x)$$</div>
        <button class="copy-latex-btn"><i data-lucide="copy"></i><span>LaTeX</span></button>
      </div>
      <details class="accordion">
        <summary>Пример: колебания закреплённой струны $[0, L]$</summary>
        <div class="accordion-body">
          При $u(0,t)=u(L,t)=0$ получаем $X'' + \lambda X = 0 \implies \lambda_n = \left(\frac{\pi n}{L}\right)^2$, $X_n(x) = \sin\frac{\pi n x}{L}$, и решение раскладывается в ряд Фурье: $u(x,t) = \sum_{n=1}^\infty (A_n \cos\frac{\pi n a t}{L} + B_n \sin\frac{\pi n a t}{L})\sin\frac{\pi n x}{L}$.
        </div>
      </details>
    </article>
  </div>

  <!-- 1.10 Функциональный анализ -->
  <h3 id="hm-funcan" class="topic-heading" style="--sec-accent: var(--accent-higher);">10. Функциональный анализ (основы)</h3>
  <div class="grid-2">
    <article class="card searchable" data-keywords="функциональный анализ метрическое нормированное гильбертово банах сжимающие отображения l2">
      <div class="card-header">
        <h4 class="card-title">Пространства ($L_2, l_2$) и теорема Банаха</h4>
        <span class="card-tag">Функан</span>
      </div>
      <p class="theory-text"><strong>Банахово</strong> — полное нормированное пространство. <strong>Гильбертово</strong> — полное пространство со скалярным произведением ($L_2[a,b]$ с $\langle f,g\rangle = \int_a^b f\bar{g}\,dx$, $l_2$ с $\sum |x_k|^2 < \infty$).</p>
      <div class="formula-box" data-latex="d(Tx, Ty) \le \alpha\,d(x,y) \;(0 \le \alpha < 1) \implies \exists!\,x^*:\; Tx^* = x^*">
        <div class="formula-content">$$d(Tx, Ty) \le \alpha\,d(x, y), \; \alpha < 1 \implies \exists!\,x^*:\; Tx^* = x^* \;\text{(Банах)}$$</div>
        <button class="copy-latex-btn"><i data-lucide="copy"></i><span>LaTeX</span></button>
      </div>
      <p class="condition-note">Последовательность $x_n = T^n x_0$ сходится к единственной неподвижной точке $x^*$ в любом полном метрическом пространстве.</p>
    </article>

    <article class="card searchable" data-keywords="линейные операторы компактные сопряженный спектр дельта функция дирака обобщенные функции">
      <div class="card-header">
        <h4 class="card-title">Операторы, спектр и дельта-функция Дирака $\delta(x)$</h4>
        <span class="card-tag">Операторы &amp; $\delta(x)$</span>
      </div>
      <div class="formula-box" data-latex="\|A\| = \sup_{\|x\|=1}\|Ax\|, \quad \langle Ax, y \rangle = \langle x, A^* y \rangle">
        <div class="formula-content">$$\|A\| = \sup_{\|x\|=1}\|Ax\|, \quad \langle Ax, y \rangle = \langle x, A^* y \rangle \;\text{(сопряжённый)}$$</div>
        <button class="copy-latex-btn"><i data-lucide="copy"></i><span>LaTeX</span></button>
      </div>
      <div class="formula-box" data-latex="\int_{-\infty}^{+\infty} f(x)\delta(x-x_0)\,dx = f(x_0), \quad \int_{-\infty}^{+\infty} f(x)\delta'(x)\,dx = -f'(0)">
        <div class="formula-content">$$\int_{-\infty}^{+\infty} f(x)\delta(x-x_0)\,dx = f(x_0), \quad \int_{-\infty}^{+\infty} f(x)\delta'(x)\,dx = -f'(0)$$</div>
        <button class="copy-latex-btn"><i data-lucide="copy"></i><span>LaTeX</span></button>
      </div>
      <p class="condition-note"><strong>Спектр $\sigma(A)$:</strong> множество $\lambda\in\mathbb{C}$, при которых оператор $(A - \lambda I)^{-1}$ не существует или не ограничен. Компактный оператор переводит ограниченные множества в предкомпактные.</p>
    </article>
  </div>

  <!-- 1.11 Вариационное исчисление и методы оптимизации -->
  <h3 id="hm-varcalc" class="topic-heading" style="--sec-accent: var(--accent-higher);">11. Вариационное исчисление и методы оптимизации</h3>
  <div class="grid-2">
    <article class="card searchable" data-keywords="вариационное исчисление функционал эйлер лагранж остроградский изопериметрическая задача принцип наименьшего действия">
      <div class="card-header">
        <h4 class="card-title">Уравнение Эйлера — Лагранжа и изопериметрика</h4>
        <span class="card-tag">Вариации</span>
      </div>
      <p class="theory-text">Для простейшего функционала $J[y] = \int_{x_0}^{x_1} F(x, y, y')\,dx$ необходимое условие экстремума ($\delta J = 0$):</p>
      <div class="formula-box" data-latex="\frac{\partial F}{\partial y} - \frac{d}{dx}\left(\frac{\partial F}{\partial y'}\right) = 0">
        <div class="formula-content">$$\frac{\partial F}{\partial y} - \frac{d}{dx}\left(\frac{\partial F}{\partial y'}\right) = 0 \quad (\text{Эйлер — Лагранж})$$</div>
        <button class="copy-latex-btn"><i data-lucide="copy"></i><span>LaTeX</span></button>
      </div>
      <details class="accordion">
        <summary>Обобщения, изопериметрические задачи и принцип Гамильтона</summary>
        <div class="accordion-body">
          Для высших производных $F(x,y,y',\dots,y^{(n)})$ — уравнение Эйлера — Пуассона: $\sum_{k=0}^n (-1)^k \frac{d^k}{dx^k}\frac{\partial F}{\partial y^{(k)}} = 0$.
          <br>В <strong>изопериметрической задаче</strong> ($\int G\,dx = C$) составляют функционал $H = F + \lambda G$.
          <br><strong>Принцип наименьшего действия:</strong> траектория механической системы делает стационарным действие $S = \int_{t_1}^{t_2} L(q, \dot{q}, t)\,dt$.
        </div>
      </details>
    </article>

    <article class="card searchable" data-keywords="выпуклая оптимизация градиентный спуск ккт каруш кун таккер">
      <div class="card-header">
        <h4 class="card-title">Градиентный спуск и условия KKT</h4>
        <span class="card-tag">Оптимизация</span>
      </div>
      <div class="formula-box" data-latex="x_{k+1} = x_k - \eta_k \nabla f(x_k)">
        <div class="formula-content">$$x_{k+1} = x_k - \eta_k \nabla f(x_k) \quad (\text{градиентный спуск})$$</div>
        <button class="copy-latex-btn"><i data-lucide="copy"></i><span>LaTeX</span></button>
      </div>
      <div class="formula-box" data-latex="\nabla_x \mathcal{L}(x^*,\lambda^*,\mu^*) = 0, \quad \mu_j^* g_j(x^*) = 0, \quad \mu_j^* \ge 0, \quad g_j(x^*) \le 0">
        <div class="formula-content">
          <div class="formula-caption">Условия Каруша — Куна — Таккера (KKT) для $\min f(x)$ при $g_j(x)\le 0, h_i(x)=0$:</div>
          $$\nabla_x\mathcal{L}=0, \quad \mu_j g_j(x^*)=0 \;\text{(дополн. нежёсткость)}, \quad \mu_j \ge 0$$
        </div>
        <button class="copy-latex-btn"><i data-lucide="copy"></i><span>LaTeX</span></button>
      </div>
    </article>
  </div>

  <!-- 1.12 Численные методы -->
  <h3 id="hm-num" class="topic-heading" style="--sec-accent: var(--accent-higher);">12. Численные методы (Вычислительная математика)</h3>
  <div class="grid-2">
    <article class="card searchable" data-keywords="численные методы бисекция ньютон касательных простые итерации лагранж сплайн">
      <div class="card-header">
        <h4 class="card-title">Уравнения ($f(x)=0$) и Интерполяция</h4>
        <span class="card-tag">Чисмет</span>
      </div>
      <div class="formula-box" data-latex="x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)} \;\text{(Ньютон)}, \quad x_{n+1} = \varphi(x_n) \;(|\varphi'| \le q < 1)">
        <div class="formula-content">$$x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)} \;\text{(Ньютон)}, \quad x_{n+1}=\varphi(x_n) \;\text{(итерации)}$$</div>
        <button class="copy-latex-btn"><i data-lucide="copy"></i><span>LaTeX</span></button>
      </div>
      <div class="formula-box" data-latex="L_n(x) = \sum_{i=0}^n y_i \prod_{j\neq i}\frac{x - x_j}{x_i - x_j}">
        <div class="formula-content">$$L_n(x) = \sum_{i=0}^n y_i \prod_{j\neq i}\frac{x-x_j}{x_i-x_j} \quad (\text{полином Лагранжа})$$</div>
        <button class="copy-latex-btn"><i data-lucide="copy"></i><span>LaTeX</span></button>
      </div>
      <p class="condition-note">Бисекция сходится линейно ($O(2^{-n})$), метод Ньютона — квадратично. Для избежания осцилляций Рунге используют <strong>кубические сплайны</strong> ($C^2$-гладкие кусочно-кубические полиномы).</p>
    </article>

    <article class="card searchable" data-keywords="численное интегрирование трапеции симпсон гаусс эйлер рунге кутта rk4">
      <div class="card-header">
        <h4 class="card-title">Квадратуры (Симпсон, Гаусс) и ОДУ (Эйлер, RK4)</h4>
        <span class="card-tag">Интегр. &amp; ОДУ</span>
      </div>
      <div class="formula-box" data-latex="\int_a^b f(x)\,dx \approx \frac{h}{3}\!\left[y_0 + y_n + 4\sum_{k\text{ неч}} y_k + 2\sum_{k\text{ чёт}} y_k\right] \quad (\text{Симпсон, } O(h^4))">
        <div class="formula-content">$$\int_a^b f(x)\,dx \approx \frac{h}{3}\big[y_0+y_n+4\sum y_{2k-1}+2\sum y_{2k}\big] \;\text{(Симпсон)}$$</div>
        <button class="copy-latex-btn"><i data-lucide="copy"></i><span>LaTeX</span></button>
      </div>
      <div class="formula-box" data-latex="y_{n+1} = y_n + \frac{h}{6}(k_1 + 2k_2 + 2k_3 + k_4) \quad (\text{RK4, } O(h^4))">
        <div class="formula-content">$$y_{n+1} = y_n + h f(x_n,y_n) \;\text{(Эйлер)}, \quad y_{n+1} = y_n + \frac{h}{6}(k_1+2k_2+2k_3+k_4) \;\text{(RK4)}$$</div>
        <button class="copy-latex-btn"><i data-lucide="copy"></i><span>LaTeX</span></button>
      </div>
      <p class="condition-note">Квадратуры Гаусса с $n$ узлами (корнями полиномов Лежандра) точны для полиномов степени до $2n-1$. Метод трапеций имеет точность $O(h^2)$.</p>
    </article>
  </div>

  <!-- ИНТЕРАКТИВ РАЗДЕЛА 1 -->
  <h3 id="hm-interactive" class="topic-heading" style="--sec-accent: var(--accent-higher);">Интерактивный комплекс: Матрицы 3×3 и Ряды Тейлора</h3>
  <div class="grid-2">
    <!-- Калькулятор матриц 3x3 -->
    <article class="card widget-card searchable" data-keywords="калькулятор матрицы определитель ранг обратная матрица собственные значения">
      <div class="widget-header">
        <div class="widget-title"><i data-lucide="grid-3x3"></i><span>Калькулятор матриц 3×3</span></div>
        <div class="btn-group">
          <button class="btn sm" id="hmMatRandom">Случайная</button>
          <button class="btn sm" id="hmMatEye">Единичная</button>
        </div>
      </div>
      <div class="matrix-wrapper">
        <div class="matrix-bracket left"></div>
        <div id="hmMatrixGrid" class="matrix-grid" style="grid-template-columns: repeat(3, auto);"></div>
        <div class="matrix-bracket right"></div>
      </div>
      <div id="hmMatrixStats" class="stats-grid"></div>
      <div id="hmMatrixInverse" class="step-output"></div>
    </article>

    <!-- Визуализатор ряда Тейлора -->
    <article class="card widget-card searchable" data-keywords="визуализатор ряд тейлора синус косинус экспонента логарифм">
      <div class="widget-header">
        <div class="widget-title"><i data-lucide="line-chart"></i><span>Визуализатор ряда Тейлора</span></div>
      </div>
      <div class="grid-2" style="gap: 10px;">
        <div>
          <label class="field-label" for="taylorFunc">Функция $f(x)$:</label>
          <select id="taylorFunc" class="input-field">
            <option value="sin">sin(x)</option>
            <option value="cos">cos(x)</option>
            <option value="exp">exp(x)</option>
            <option value="ln">ln(1 + x)</option>
          </select>
        </div>
        <div>
          <label class="field-label" for="taylorDegree">Степень полинома $N$: <strong id="taylorDegVal">5</strong></label>
          <input type="range" id="taylorDegree" min="1" max="15" value="5" style="width:100%; margin-top:8px;" />
        </div>
      </div>
      <div class="chart-box">
        <div style="font-size:0.78rem; color:var(--text-secondary); margin-bottom:6px; display:flex; justify-content:space-between;">
          <span style="color:var(--accent-higher);">— Точная $f(x)$</span>
          <span style="color:var(--accent-rose);">- - Полином $T_N(x)$</span>
        </div>
        <canvas id="taylorCanvas"></canvas>
      </div>
    </article>
  </div>
`;

/* ==========================================================================
   ЛОГИКА ИНТЕРАКТИВА РАЗДЕЛА 1
   ========================================================================== */
window.initHigherWidgets = function() {
  // 1. Матрица 3x3
  let mat = [
    [2, 1, 0],
    [1, 3, 1],
    [0, 1, 2]
  ];

  const renderGrid = () => {
    const grid = document.getElementById('hmMatrixGrid');
    if (!grid) return;
    grid.innerHTML = '';
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
        const inp = document.createElement('input');
        inp.type = 'number';
        inp.step = 'any';
        inp.className = 'input-field matrix-cell';
        inp.value = mat[r][c];
        inp.addEventListener('input', () => {
          mat[r][c] = parseFloat(inp.value) || 0;
          computeMatrix();
        });
        grid.appendChild(inp);
      }
    }
  };

  const computeRank = (m) => {
    const a = m.map(row => [...row]);
    let rank = 0;
    for (let col = 0; col < 3 && rank < 3; col++) {
      let pivot = rank;
      for (let r = rank + 1; r < 3; r++) {
        if (Math.abs(a[r][col]) > Math.abs(a[pivot][col])) pivot = r;
      }
      if (Math.abs(a[pivot][col]) < 1e-9) continue;
      [a[rank], a[pivot]] = [a[pivot], a[rank]];
      for (let r = rank + 1; r < 3; r++) {
        const factor = a[r][col] / a[rank][col];
        for (let c = col; c < 3; c++) a[r][c] -= factor * a[rank][c];
      }
      rank++;
    }
    return rank;
  };

  const realEigenvalues3x3 = (m) => {
    // Характеристический полином: L^3 - tr*L^2 + c1*L - det = 0
    const tr = m[0][0] + m[1][1] + m[2][2];
    const m00 = m[1][1]*m[2][2] - m[1][2]*m[2][1];
    const m11 = m[0][0]*m[2][2] - m[0][2]*m[2][0];
    const m22 = m[0][0]*m[1][1] - m[0][1]*m[1][0];
    const c1 = m00 + m11 + m22;
    const det =
      m[0][0]*m00 -
      m[0][1]*(m[1][0]*m[2][2] - m[1][2]*m[2][0]) +
      m[0][2]*(m[1][0]*m[2][1] - m[1][1]*m[2][0]);

    // Приводим L = t + tr/3 => t^3 + p*t + q = 0
    const a = -tr, b = c1, c = -det;
    const p = b - (a * a) / 3;
    const q = (2 * a * a * a) / 27 - (a * b) / 3 + c;
    const disc = (q * q) / 4 + (p * p * p) / 27;

    if (disc > 1e-9) {
      const s = Math.sqrt(disc);
      const u = Math.cbrt(-q / 2 + s);
      const v = Math.cbrt(-q / 2 - s);
      return [(u + v - a / 3).toFixed(2) + ' (1 действ.)'];
    } else if (Math.abs(p) < 1e-9 && Math.abs(q) < 1e-9) {
      return [(-a / 3).toFixed(2)];
    } else {
      const r = Math.sqrt((-p * p * p) / 27);
      const phi = Math.acos(Math.max(-1, Math.min(1, -q / (2 * r))));
      const m2 = 2 * Math.cbrt(r);
      const roots = [
        m2 * Math.cos(phi / 3) - a / 3,
        m2 * Math.cos((phi + 2 * Math.PI) / 3) - a / 3,
        m2 * Math.cos((phi + 4 * Math.PI) / 3) - a / 3
      ].sort((x, y) => x - y);
      return roots.map(x => (Math.round(x * 100) / 100).toString());
    }
  };

  const computeMatrix = () => {
    const [r0, r1, r2] = mat;
    const c00 = r1[1]*r2[2] - r1[2]*r2[1];
    const c01 = -(r1[0]*r2[2] - r1[2]*r2[0]);
    const c02 = r1[0]*r2[1] - r1[1]*r2[0];
    const det = r0[0]*c00 + r0[1]*c01 + r0[2]*c02;
    const rank = computeRank(mat);
    const eigs = realEigenvalues3x3(mat);

    const statsEl = document.getElementById('hmMatrixStats');
    statsEl.innerHTML = `
      <div class="stat-tile"><div class="stat-tile-label">Определитель $\\det(A)$</div><div class="stat-tile-val">${Math.round(det*1000)/1000}</div></div>
      <div class="stat-tile"><div class="stat-tile-label">Ранг $\\operatorname{rg}(A)$</div><div class="stat-tile-val">${rank}</div></div>
      <div class="stat-tile"><div class="stat-tile-label">Собств. значения $\\lambda$</div><div class="stat-tile-val" style="font-size:0.88rem;">${eigs.join(', ')}</div></div>
    `;
    window.renderMathIn(statsEl);

    const invEl = document.getElementById('hmMatrixInverse');
    if (Math.abs(det) < 1e-9) {
      invEl.innerHTML = '<span class="status-pill status-warn">Матрица вырождена ($\det A = 0$), обратной матрицы не существует.</span>';
      window.renderMathIn(invEl);
      return;
    }

    const adj = [
      [c00, -(r0[1]*r2[2] - r0[2]*r2[1]), r0[1]*r1[2] - r0[2]*r1[1]],
      [c01, r0[0]*r2[2] - r0[2]*r2[0], -(r0[0]*r1[2] - r0[2]*r1[0])],
      [c02, -(r0[0]*r2[1] - r0[1]*r2[0]), r0[0]*r1[1] - r0[1]*r1[0]]
    ];
    const invRows = adj.map(row => row.map(v => (Math.round((v / det) * 1000) / 1000)).join(' & ')).join(' \\\\ ');
    invEl.innerHTML = `<div>$$A^{-1} = \\begin{pmatrix} ${invRows} \\end{pmatrix}$$</div>`;
    window.renderMathIn(invEl);
  };

  document.getElementById('hmMatRandom').addEventListener('click', () => {
    mat = mat.map(r => r.map(() => Math.floor(Math.random() * 11) - 5));
    renderGrid(); computeMatrix();
  });
  document.getElementById('hmMatEye').addEventListener('click', () => {
    mat = [[1,0,0],[0,1,0],[0,0,1]];
    renderGrid(); computeMatrix();
  });

  renderGrid();
  computeMatrix();

  // 2. Визуализатор Тейлора
  const fSel = document.getElementById('taylorFunc');
  const degRange = document.getElementById('taylorDegree');
  const degVal = document.getElementById('taylorDegVal');

  const redraw = () => {
    degVal.textContent = degRange.value;
    window.drawTaylorChart();
  };
  fSel.addEventListener('change', redraw);
  degRange.addEventListener('input', redraw);
  window.drawTaylorChart();
};

window.drawTaylorChart = function() {
  const canvas = document.getElementById('taylorCanvas');
  if (!canvas || canvas.offsetParent === null) return;

  const funcName = document.getElementById('taylorFunc').value;
  const N = parseInt(document.getElementById('taylorDegree').value, 10);

  const dpr = window.devicePixelRatio || 1;
  const width = canvas.clientWidth;
  const height = 250;
  canvas.width = width * dpr;
  canvas.height = height * dpr;
  const ctx = canvas.getContext('2d');
  ctx.scale(dpr, dpr);
  ctx.clearRect(0, 0, width, height);

  const isLight = document.documentElement.getAttribute('data-theme') === 'light';
  const axisColor = isLight ? 'rgba(15,23,42,0.25)' : 'rgba(148,163,184,0.28)';

  const xMin = funcName === 'ln' ? -0.9 : -4;
  const xMax = funcName === 'ln' ? 2.2 : 4;
  const yMin = -2.5, yMax = 2.5;

  const toPxX = x => ((x - xMin) / (xMax - xMin)) * width;
  const toPxY = y => height - ((y - yMin) / (yMax - yMin)) * height;

  // Оси
  ctx.strokeStyle = axisColor;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(0, toPxY(0)); ctx.lineTo(width, toPxY(0));
  ctx.moveTo(toPxX(0), 0); ctx.lineTo(toPxX(0), height);
  ctx.stroke();

  const evalExact = (x) => {
    if (funcName === 'sin') return Math.sin(x);
    if (funcName === 'cos') return Math.cos(x);
    if (funcName === 'exp') return Math.exp(x);
    return Math.log(1 + x);
  };

  const evalTaylor = (x) => {
    let sum = 0, fact = 1;
    for (let k = 0; k <= N; k++) {
      if (k > 0) fact *= k;
      if (funcName === 'sin' && k % 2 === 1) {
        sum += ((k % 4 === 1 ? 1 : -1) * Math.pow(x, k)) / fact;
      } else if (funcName === 'cos' && k % 2 === 0) {
        sum += ((k % 4 === 0 ? 1 : -1) * Math.pow(x, k)) / fact;
      } else if (funcName === 'exp') {
        sum += Math.pow(x, k) / fact;
      } else if (funcName === 'ln' && k >= 1) {
        sum += ((k % 2 === 1 ? 1 : -1) * Math.pow(x, k)) / k;
      }
    }
    return sum;
  };

  const plotCurve = (fn, color, dashed) => {
    ctx.save();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2.2;
    if (dashed) ctx.setLineDash([6, 4]);
    ctx.beginPath();
    let started = false;
    for (let px = 0; px <= width; px += 2) {
      const x = xMin + (px / width) * (xMax - xMin);
      const y = fn(x);
      if (!Number.isFinite(y) || y < yMin - 3 || y > yMax + 3) { started = false; continue; }
      const py = toPxY(y);
      if (!started) { ctx.moveTo(px, py); started = true; }
      else ctx.lineTo(px, py);
    }
    ctx.stroke();
    ctx.restore();
  };

  plotCurve(evalExact, '#38bdf8', false);
  plotCurve(evalTaylor, '#fb7185', true);
};
