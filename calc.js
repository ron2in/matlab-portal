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
      <div class="formula-explain">
        <div class="ex-row"><strong>Суть:</strong> нахождение обратной матрицы $A^{-1}$ ($AA^{-1}=I$) и определение линейной независимости строк/столбцов через ранг.</div>
        <div class="ex-row"><strong>Обозначения:</strong> $\det A$ — определитель, $C^T$ — транспонированная матрица алгебраических дополнений, $\operatorname{rg}(A)$ — ранг.</div>
        <div class="ex-row"><strong>Условия:</strong> обратная матрица существует только для квадратных невырожденных матриц ($\det A \neq 0$).</div>
      </div>
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
      <div class="formula-explain">
        <div class="ex-row"><strong>Суть:</strong> критерий существования и единственности решения системы линейных алгебраических уравнений $AX = B$.</div>
        <div class="ex-row"><strong>Обозначения:</strong> $A$ — основная матрица, $(A\mid B)$ — расширенная матрица, $r$ — ранг, $n$ — число неизвестных, $\Delta_i$ — определители Крамера.</div>
        <div class="ex-row"><strong>Условия:</strong> при $r=n$ решение единственно; при $r < n$ — бесконечно много (число векторов ФСР $= n-r$). Формулы Крамера работают только при $n \times n$ и $\Delta \neq 0$.</div>
      </div>
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
      <div class="formula-explain">
        <div class="ex-row"><strong>Суть:</strong> скалярное произведение измеряет проекцию/угол, векторное — площадь параллелограмма, смешанное — ориентированный объём.</div>
        <div class="ex-row"><strong>Обозначения:</strong> $\varphi$ — угол между векторами, $S_{\text{пар}}$ — площадь, $V_{\text{пар}}$ — объём параллелепипеда.</div>
        <div class="ex-row"><strong>Условия:</strong> $\vec{a}\perp\vec{b} \iff \vec{a}\cdot\vec{b}=0$; компланарность трёх векторов $\iff (\vec{a},\vec{b},\vec{c})=0$.</div>
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
      <div class="formula-explain">
        <div class="ex-row"><strong>Суть:</strong> поиск инвариантных направлений оператора ($\vec{v}$) и определение знаковой определённости квадратичной формы.</div>
        <div class="ex-row"><strong>Обозначения:</strong> $\lambda$ — собственное значение, $\vec{v}\neq \vec{0}$ — собственный вектор, $\Delta_k$ — главные угловые миноры.</div>
        <div class="ex-row"><strong>Условия:</strong> критерий Сильвестра применим только к симметричным матрицам ($A = A^T$) и не даёт ответа при $\Delta_k = 0$.</div>
      </div>
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
      <div class="formula-explain">
        <div class="ex-row"><strong>Суть:</strong> аналитическое задание линейных и квадратичных геометрических объектов в декартовых координатах.</div>
        <div class="ex-row"><strong>Обозначения:</strong> $\vec{n}=(A,B,C)$ — нормаль к плоскости, $(l,m,n)$ — направляющий вектор прямой, $a,b$ — полуоси, $p$ — фокальный параметр.</div>
        <div class="ex-row"><strong>Условия:</strong> в уравнении плоскости $A^2+B^2+C^2 > 0$; в каноническом уравнении прямой знаменатели могут быть нулями лишь условно (означает перпендикулярность оси).</div>
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
      <div class="formula-explain">
        <div class="ex-row"><strong>Суть:</strong> вычисление пределов со сложными неопределённостями с помощью асимптотических эквивалентностей и дифференцирования.</div>
        <div class="ex-row"><strong>Обозначения:</strong> $o(g)$ — бесконечно малая высшего порядка, $O(g)$ — ограниченная по отношению к $g$.</div>
        <div class="ex-row"><strong>Условия:</strong> правило Лопиталя применимо только к $\frac{0}{0}$ и $\frac{\infty}{\infty}$ при дифференцируемости в проколотой окрестности; эквивалентности заменяют только множители/делители, но не слагаемые.</div>
      </div>
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
      <div class="formula-explain">
        <div class="ex-row"><strong>Суть:</strong> функция непрерывна в точке, если её график не имеет «разрывов» и предел совпадает со значением.</div>
        <div class="ex-row"><strong>Обозначения:</strong> $f(x_0^-), f(x_0^+)$ — левосторонний и правосторонний пределы в точке $x_0$.</div>
        <div class="ex-row"><strong>Условия:</strong> непрерывность на отрезке $[a,b]$ гарантирует достижение $\min$ и $\max$ (теорема Вейерштрасса) и промежуточных значений (Коши).</div>
      </div>
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
      <div class="formula-explain">
        <div class="ex-row"><strong>Суть:</strong> связь определённого интеграла с первообразной (площадь криволинейной трапеции) и проверка сходимости на бесконечных/неограниченных интервалах.</div>
        <div class="ex-row"><strong>Обозначения:</strong> $F(x)$ — первообразная ($F'=f$), $p$ — показатель степени эталонного интеграла.</div>
        <div class="ex-row"><strong>Условия:</strong> формула Ньютона — Лейбница справедлива для непрерывных (или кусочно-непрерывных) функций на конечном отрезке $[a,b]$.</div>
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
      <div class="formula-explain">
        <div class="ex-row"><strong>Суть:</strong> градиент задаёт направление максимального роста, а метод Лагранжа сводит условный экстремум к безусловному.</div>
        <div class="ex-row"><strong>Обозначения:</strong> $\nabla f$ — градиент, $\vec{l}_0$ — единичный вектор направления, $\lambda_j$ — множители Лагранжа.</div>
        <div class="ex-row"><strong>Условия:</strong> для безусловного экстремума проверяют матрицу Гессе $H_{ij}=\partial^2 f/\partial x_i\partial x_j$ по критерию Сильвестра; для Лагранжа градиенты ограничений $\nabla \varphi_j$ должны быть линейно независимы.</div>
      </div>
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
      <div class="formula-explain">
        <div class="ex-row"><strong>Суть:</strong> связывают интегралы по границе области (контуру/поверхности) с интегралами по самой области через производные поля.</div>
        <div class="ex-row"><strong>Обозначения:</strong> $\partial D, \partial V, \partial S$ — ориентированные границы; $\operatorname{div}\vec{F}$ — дивергенция, $\operatorname{rot}\vec{F}$ — ротор.</div>
        <div class="ex-row"><strong>Условия:</strong> граница должна быть кусочно-гладкой и замкнутой, а поля — непрерывно дифференцируемыми. Якобианы: полярные $r$, цилиндрические $r$, сферические $r^2\sin\theta$.</div>
      </div>
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
      <div class="formula-explain">
        <div class="ex-row"><strong>Суть:</strong> критерии сходимости бесконечных сумм и определение области сходимости степенных рядов.</div>
        <div class="ex-row"><strong>Обозначения:</strong> $a_n, c_n$ — члены и коэффициенты ряда, $R$ — радиус сходимости.</div>
        <div class="ex-row"><strong>Условия:</strong> признаки Даламбера и Коши работают для рядов с $a_n > 0$; при $D=1$ или $C=1$ требуется другой признак.</div>
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
      <div class="formula-explain">
        <div class="ex-row"><strong>Суть:</strong> нахождение неизвестной функции $y(x)$ из уравнения с её производными; линейные ОДУ с постоянными коэффициентами решаются алгебраически.</div>
        <div class="ex-row"><strong>Обозначения:</strong> $p(x), q(x)$ — непрерывные коэффициенты, $\lambda$ — корни характеристического многочлена.</div>
        <div class="ex-row"><strong>Условия:</strong> кратным корням $\lambda$ кратности $k$ соответствуют члены вида $x^m e^{\lambda x}$ ($m < k$); для задачи Коши нужно $n$ начальных условий.</div>
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
      <div class="formula-explain">
        <div class="ex-row"><strong>Суть:</strong> анализ функций комплексного переменного и сведение линейных ОДУ к алгебраическим уравнениям через преобразование Лапласа.</div>
        <div class="ex-row"><strong>Обозначения:</strong> $f(z)=u+iv$, $\operatorname{Res}_{z_k}f$ — вычет в изолированной особой точке $z_k$ внутри контура $\gamma$, $p\in\mathbb{C}$.</div>
        <div class="ex-row"><strong>Условия:</strong> условия Коши — Римана необходимы и достаточны для голоморфности; функция-оригинал $f(t)=0$ при $t<0$ и растёт не быстрее экспоненты.</div>
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
      <div class="formula-explain">
        <div class="ex-row"><strong>Суть:</strong> поток измеряет «протекание» векторного поля через поверхность, а дивергенция — плотность источников в точке.</div>
        <div class="ex-row"><strong>Обозначения:</strong> $\mathbf{n}$ — единичная нормаль к поверхности $S$, $\nabla u$ — градиент, $\operatorname{div}\mathbf{F}$ — дивергенция.</div>
        <div class="ex-row"><strong>Условия:</strong> поле соленоидально $\iff \operatorname{div}\mathbf{F} \equiv 0$; компоненты $\mathbf{F}$ должны быть класса $C^1$.</div>
      </div>
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
      <div class="formula-explain">
        <div class="ex-row"><strong>Суть:</strong> ротор характеризует «завихрённость» поля, а лапласиан $\Delta u$ — отклонение значения поля от среднего в окрестности.</div>
        <div class="ex-row"><strong>Обозначения:</strong> $\Gamma$ — циркуляция по замкнутому контуру $L$, $\operatorname{rot}\mathbf{F}$ — ротор, $\Delta$ — оператор Лапласа.</div>
        <div class="ex-row"><strong>Условия:</strong> критерий потенциальности ($\mathbf{F}=\nabla u \iff \operatorname{rot}\mathbf{F}=\mathbf{0}$) требует односвязности области.</div>
      </div>
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
      <div class="formula-explain">
        <div class="ex-row"><strong>Суть:</strong> описание изгиба и закручивания кривой через подвижный репер и внутренней/внешней геометрии поверхности.</div>
        <div class="ex-row"><strong>Обозначения:</strong> $\mathbf{T,N,B}$ — касательная, нормаль, бинормаль; $\kappa,\tau$ — кривизна и кручение; $E,F,G$ и $L,M,N$ — коэффициенты I и II форм.</div>
        <div class="ex-row"><strong>Условия:</strong> кривая должна быть бирегулярной ($\kappa > 0$), поверхность — регулярной ($EG - F^2 > 0$).</div>
      </div>
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
      <div class="formula-explain">
        <div class="ex-row"><strong>Суть:</strong> инвариантная запись геометрических и физических величин, не зависящая от выбора криволинейных координат.</div>
        <div class="ex-row"><strong>Обозначения:</strong> $g_{ij}$ — метрический тензор, $g^{ij}$ — обратный ему ($g_{ik}g^{kj}=\delta_i^j$), верхние индексы — контравариантные, нижние — ковариантные.</div>
        <div class="ex-row"><strong>Условия:</strong> суммирование по Эйнштейну выполняется по паре одинаковых индексов (один сверху, другой снизу); $\det(g_{ij}) \neq 0$.</div>
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
      <div class="formula-explain">
        <div class="ex-row"><strong>Суть:</strong> моделирование волн (гипербол.), диффузии/тепла (парабол.) и стационарных полей (эллипт.).</div>
        <div class="ex-row"><strong>Обозначения:</strong> $a$ — скорость волны/коэффициент температуропроводности, $\varphi, \psi$ — начальные положение и скорость струны.</div>
        <div class="ex-row"><strong>Условия:</strong> формула Даламбера даёт точное решение задачи Коши для бесконечной прямой $x\in\mathbb{R}$ без граничных условий.</div>
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
      <div class="formula-explain">
        <div class="ex-row"><strong>Суть:</strong> разложение решения краевой задачи в ряд по ортогональным собственным функциям пространственного оператора.</div>
        <div class="ex-row"><strong>Обозначения:</strong> $\lambda$ — собственное значение, $\rho(x) > 0$ — весовая функция, $y_n(x)$ — собственные функции.</div>
        <div class="ex-row"><strong>Условия:</strong> область должна иметь простую геометрию (прямоугольник, круг, отрезок), а граничные условия — быть однородными и линейными.</div>
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
      <div class="formula-explain">
        <div class="ex-row"><strong>Суть:</strong> гарантирует существование и единственность решения операторного уравнения $Tx = x$ методом последовательных приближений.</div>
        <div class="ex-row"><strong>Обозначения:</strong> $d(x,y)$ — метрика, $\alpha \in [0, 1)$ — коэффициент сжатия, $x^*$ — неподвижная точка.</div>
        <div class="ex-row"><strong>Условия:</strong> пространство обязано быть полным (всякая фундаментальная последовательность сходится), а $\alpha$ — строго меньше $1$.</div>
      </div>
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
      <div class="formula-explain">
        <div class="ex-row"><strong>Суть:</strong> обобщение матриц на бесконечномерные пространства и формализация точечных импульсов/зарядов через $\delta(x)$.</div>
        <div class="ex-row"><strong>Обозначения:</strong> $\|A\|$ — операторная норма, $A^*$ — сопряжённый оператор, $\delta(x)$ — дельта-функция Дирака.</div>
        <div class="ex-row"><strong>Условия:</strong> фильтрующее свойство $\delta(x-x_0)$ выполняется для любой непрерывной в точке $x_0$ основной функции $f(x)$.</div>
      </div>
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
      <div class="formula-explain">
        <div class="ex-row"><strong>Суть:</strong> необходимое условие экстремума функционала — превращает задачу поиска оптимальной функции $y(x)$ в ОДУ 2-го порядка.</div>
        <div class="ex-row"><strong>Обозначения:</strong> $F(x,y,y')$ — подынтегральная функция (лагранжиан), $\delta J$ — первая вариация функционала.</div>
        <div class="ex-row"><strong>Условия:</strong> экстремаль $y(x)\in C^2[x_0,x_1]$, концы $y(x_0), y(x_1)$ закреплены (иначе добавляются условия трансверсальности).</div>
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
      <div class="formula-explain">
        <div class="ex-row"><strong>Суть:</strong> численный поиск минимума функции шагами против градиента и критерий оптимальности при ограничениях-неравенствах.</div>
        <div class="ex-row"><strong>Обозначения:</strong> $\eta_k > 0$ — шаг обучения, $\mathcal{L}$ — лагранжиан, $\mu_j$ — множители при неравенствах $g_j(x)\le 0$.</div>
        <div class="ex-row"><strong>Условия:</strong> для достаточности KKT задача должна быть выпуклой и выполняться условие регулярности (например, Слейтера).</div>
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
      <div class="formula-explain">
        <div class="ex-row"><strong>Суть:</strong> приближённое нахождение корней уравнений и построение гладкого многочлена, проходящего через узлы $(x_i, y_i)$.</div>
        <div class="ex-row"><strong>Обозначения:</strong> $x_n$ — приближения корня, $\varphi$ — итерационная функция, $L_n(x)$ — интерполяционный полином Лагранжа.</div>
        <div class="ex-row"><strong>Условия:</strong> метод Ньютона сходится квадратично при $f'(x^*)\neq 0$ и удачном $x_0$; простые итерации сходятся при $|\varphi'(x)|\le q < 1$.</div>
      </div>
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
      <div class="formula-explain">
        <div class="ex-row"><strong>Суть:</strong> приближённое вычисление определённых интегралов и решение задачи Коши для ОДУ $y'=f(x,y)$ с шагом $h$.</div>
        <div class="ex-row"><strong>Обозначения:</strong> $h=(b-a)/n$ — шаг сетки, $y_k=f(x_k)$, $k_1\dots k_4$ — наклоны в методе Рунге — Кутты 4-го порядка.</div>
        <div class="ex-row"><strong>Условия:</strong> формула Симпсона требует чётного числа разбиений $n$ и гладкости $f\in C^4[a,b]$; квадратуры Гаусса с $n$ узлами точны для полиномов до степени $2n-1$.</div>
      </div>
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

  <!-- НОВЫЕ ВИДЖЕТЫ: СЛАУ (Гаусс), Симплекс-метод, Аналитические производные -->
  <div class="grid-2" style="margin-top: 14px;">
    <!-- 2. Пошаговый решатель СЛАУ (метод Гаусса) -->
    <article class="card widget-card searchable" data-keywords="слау метод гаусса пошагово матрица ранг кронекер капелли">
      <div class="widget-header">
        <div class="widget-title"><i data-lucide="sigma"></i><span>Пошаговый решатель СЛАУ (Метод Гаусса)</span></div>
        <div class="btn-group">
          <button class="btn sm active-tab slau-size-btn" data-n="2">2×2</button>
          <button class="btn sm slau-size-btn" data-n="3">3×3</button>
          <button class="btn sm slau-size-btn" data-n="4">4×4</button>
          <button class="btn sm" id="slauRandBtn">Случайная</button>
        </div>
      </div>
      <div class="matrix-wrapper">
        <div class="matrix-bracket left"></div>
        <div id="slauGrid" class="matrix-grid"></div>
        <div class="aug-sep"></div>
        <div id="slauBGrid" class="matrix-grid"></div>
        <div class="matrix-bracket right"></div>
      </div>
      <div style="display:flex; justify-content:center; margin-top:8px;">
        <button class="btn sm active-tab" id="slauSolveBtn">▶ Решить по шагам</button>
      </div>
      <div id="slauSteps" class="step-output" style="max-height:360px; overflow-y:auto;"></div>
    </article>

    <!-- 4. Аналитический калькулятор производных и касательной -->
    <article class="card widget-card searchable" data-keywords="производная касательная math.js аналитический калькулятор вторая производная">
      <div class="widget-header">
        <div class="widget-title"><i data-lucide="trending-up"></i><span>Производные и касательная (math.js)</span></div>
      </div>
      <div class="grid-2" style="gap:10px;">
        <div>
          <label class="field-label" for="derivFunc">Функция $f(x)$:</label>
          <input type="text" id="derivFunc" class="input-field mono" value="x^3 - 3*x + 2" placeholder="Напр: x^3 - 3*x + 2" />
        </div>
        <div>
          <label class="field-label" for="derivX0">Точка $x_0$:</label>
          <input type="number" step="any" id="derivX0" class="input-field mono" value="1.5" />
        </div>
      </div>
      <div class="btn-group" style="margin-top:8px;">
        <button class="btn sm deriv-preset" data-f="x^3 - 3*x + 2" data-x="1.5">x³ - 3x + 2</button>
        <button class="btn sm deriv-preset" data-f="sin(x) * exp(-0.2*x)" data-x="1">sin(x)·e^(-0.2x)</button>
        <button class="btn sm deriv-preset" data-f="log(x^2 + 1)" data-x="1">ln(x² + 1)</button>
      </div>
      <div id="derivOutput" class="step-output"></div>
      <div id="derivGraphBtnWrap" style="margin-top:8px;"></div>
    </article>
  </div>

  <!-- 3. Табличный Симплекс-метод (Линейное программирование) -->
  <article class="card widget-card searchable" data-keywords="симплекс метод линейное программирование оптимизация целевая функция ограничения">
    <div class="widget-header">
      <div class="widget-title"><i data-lucide="table"></i><span>Табличный Симплекс-метод (Линейное программирование)</span></div>
      <div class="btn-group">
        <button class="btn sm active-tab sx-var-btn" data-v="2">2 пер. (x₁, x₂)</button>
        <button class="btn sm sx-var-btn" data-v="3">3 пер. (x₁, x₂, x₃)</button>
        <button class="btn sm" id="sxAddRowBtn">+ Ограничение</button>
        <button class="btn sm" id="sxPresetBtn">Пример</button>
      </div>
    </div>

    <div style="display:flex; flex-wrap:wrap; align-items:center; gap:8px; margin-bottom:10px; font-size:0.86rem;">
      <span>$F(x) =$</span>
      <span id="sxObjInputs" style="display:inline-flex; flex-wrap:wrap; align-items:center; gap:6px;"></span>
      <span>$\to$</span>
      <select id="sxGoal" class="input-field" style="width:auto; padding:5px 9px;">
        <option value="max">max</option>
        <option value="min">min</option>
      </select>
    </div>

    <div id="sxConstraints" style="display:flex; flex-direction:column; gap:7px; margin-bottom:10px;"></div>
    <div style="font-size:0.76rem; color:var(--text-muted); margin-bottom:8px;">Неотрицательность переменных: $x_i \ge 0$ для всех $i$.</div>
    <button class="btn sm active-tab" id="sxSolveBtn">▶ Решить симплекс-методом</button>
    <div id="sxOutput" class="step-output" style="margin-top:12px;"></div>
  </article>
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

  // ========================================================================
  // 3. ПОШАГОВЫЙ РЕШАТЕЛЬ СЛАУ (МЕТОД ГАУССА)
  // ========================================================================
  let slauN = 3;
  let slauA = [
    [2, 1, -1, 1],
    [-3, -1, 2, 0],
    [-2, 1, 2, -1],
    [1, 2, 1, 3]
  ];
  let slauB = [8, -11, -3, 10];

  const renderSlauGrid = () => {
    const gA = document.getElementById('slauGrid');
    const gB = document.getElementById('slauBGrid');
    if (!gA || !gB) return;
    gA.style.gridTemplateColumns = `repeat(${slauN}, auto)`;
    gB.style.gridTemplateColumns = 'auto';
    gA.innerHTML = '';
    gB.innerHTML = '';

    for (let r = 0; r < slauN; r++) {
      for (let c = 0; c < slauN; c++) {
        const inp = document.createElement('input');
        inp.type = 'number'; inp.step = 'any';
        inp.className = 'input-field matrix-cell';
        inp.style.width = slauN === 4 ? '54px' : '62px';
        inp.value = slauA[r][c];
        inp.addEventListener('input', () => { slauA[r][c] = parseFloat(inp.value) || 0; });
        gA.appendChild(inp);
      }
      const inpB = document.createElement('input');
      inpB.type = 'number'; inpB.step = 'any';
      inpB.className = 'input-field matrix-cell';
      inpB.style.width = slauN === 4 ? '54px' : '62px';
      inpB.value = slauB[r];
      inpB.addEventListener('input', () => { slauB[r] = parseFloat(inpB.value) || 0; });
      gB.appendChild(inpB);
    }
  };

  const fmtSlau = v => {
    const r = Math.round(v * 1000) / 1000;
    return Object.is(r, -0) ? '0' : String(r);
  };

  const augToLatex = (M, n) => {
    const colSpec = 'c'.repeat(n) + '|c';
    const rows = M.map(row => row.map(fmtSlau).join(' & ')).join(' \\\\ ');
    return `\\left(\\begin{array}{${colSpec}} ${rows} \\end{array}\\right)`;
  };

  const solveSlauGauss = () => {
    const n = slauN;
    const M = Array.from({ length: n }, (_, r) => [...slauA[r].slice(0, n), slauB[r]]);
    const stepsHtml = [];
    stepsHtml.push(`<div style="margin-bottom:8px;"><strong>Исходная расширенная матрица:</strong>$$${augToLatex(M, n)}$$</div>`);

    // Прямой ход Гаусса
    let pivotRow = 0;
    const pivotCols = [];
    for (let col = 0; col < n && pivotRow < n; col++) {
      let best = pivotRow;
      for (let r = pivotRow + 1; r < n; r++) {
        if (Math.abs(M[r][col]) > Math.abs(M[best][col])) best = r;
      }
      if (Math.abs(M[best][col]) < 1e-9) continue;

      if (best !== pivotRow) {
        [M[pivotRow], M[best]] = [M[best], M[pivotRow]];
        stepsHtml.push(`<div>Перестановка строк $R_{${pivotRow+1}} \\leftrightarrow R_{${best+1}}$:$$${augToLatex(M, n)}$$</div>`);
      }

      const piv = M[pivotRow][col];
      let changed = false;
      for (let r = pivotRow + 1; r < n; r++) {
        if (Math.abs(M[r][col]) < 1e-9) continue;
        const factor = M[r][col] / piv;
        for (let c = col; c <= n; c++) M[r][c] -= factor * M[pivotRow][c];
        changed = true;
      }
      if (changed) {
        stepsHtml.push(`<div>Обнуление столбца ${col + 1} ниже строки ${pivotRow + 1}:$$${augToLatex(M, n)}$$</div>`);
      }
      pivotCols.push(col);
      pivotRow++;
    }

    // Подсчёт рангов
    let rgA = 0, rgAB = 0;
    for (let r = 0; r < n; r++) {
      const nonZeroA = M[r].slice(0, n).some(v => Math.abs(v) > 1e-8);
      const nonZeroB = Math.abs(M[r][n]) > 1e-8;
      if (nonZeroA) rgA++;
      if (nonZeroA || nonZeroB) rgAB++;
    }

    if (rgA < rgAB) {
      stepsHtml.push(`<div class="status-pill status-err" style="margin-top:8px;">Система несовместна: $\\operatorname{rg}(A)=${rgA} < \\operatorname{rg}(A\\mid B)=${rgAB}$</div>`);
    } else if (rgA < n) {
      stepsHtml.push(`<div class="status-pill status-warn" style="margin-top:8px;">Бесконечно много решений: $\\operatorname{rg}(A)=\\operatorname{rg}(A\\mid B)=${rgA} < n=${n}$ (свободных переменных: ${n - rgA})</div>`);
    } else {
      // Обратный ход
      for (let r = n - 1; r >= 0; r--) {
        const div = M[r][r];
        for (let c = r; c <= n; c++) M[r][c] /= div;
        for (let up = r - 1; up >= 0; up--) {
          const factor = M[up][r];
          for (let c = r; c <= n; c++) M[up][c] -= factor * M[r][c];
        }
      }
      stepsHtml.push(`<div><strong>Обратный ход (приведение к единичной матрице):</strong>$$${augToLatex(M, n)}$$</div>`);
      const sol = M.map(row => fmtSlau(row[n]));
      stepsHtml.push(`<div class="status-pill status-ok" style="margin-top:8px;">Единственное решение ($\\operatorname{rg}=${rgA}$): $X = (${sol.join(',\\; ')})^T$</div>`);
    }

    const out = document.getElementById('slauSteps');
    out.innerHTML = stepsHtml.join('');
    window.renderMathIn(out);
  };

  document.querySelectorAll('.slau-size-btn').forEach(b => b.addEventListener('click', () => {
    slauN = parseInt(b.dataset.n, 10);
    document.querySelectorAll('.slau-size-btn').forEach(x => x.classList.remove('active-tab'));
    b.classList.add('active-tab');
    renderSlauGrid();
    solveSlauGauss();
  }));
  document.getElementById('slauRandBtn').addEventListener('click', () => {
    for (let r = 0; r < 4; r++) {
      for (let c = 0; c < 4; c++) slauA[r][c] = Math.floor(Math.random() * 11) - 5;
      slauB[r] = Math.floor(Math.random() * 19) - 9;
    }
    renderSlauGrid(); solveSlauGauss();
  });
  document.getElementById('slauSolveBtn').addEventListener('click', solveSlauGauss);
  renderSlauGrid(); solveSlauGauss();

  // ========================================================================
  // 4. АНАЛИТИЧЕСКИЙ КАЛЬКУЛЯТОР ПРОИЗВОДНЫХ И КАСАТЕЛЬНОЙ (math.js)
  // ========================================================================
  const updateDerivative = () => {
    const fStr = document.getElementById('derivFunc').value.trim();
    const x0 = parseFloat(document.getElementById('derivX0').value) || 0;
    const out = document.getElementById('derivOutput');
    const btnWrap = document.getElementById('derivGraphBtnWrap');

    if (!fStr || !window.math) {
      out.innerHTML = '<span style="color:var(--text-muted);">Введите выражение f(x)</span>';
      btnWrap.innerHTML = '';
      return;
    }

    try {
      const node = math.parse(fStr);
      const d1 = math.derivative(node, 'x');
      const d2 = math.derivative(d1, 'x');

      const y0 = node.evaluate({ x: x0 });
      const k = d1.evaluate({ x: x0 });
      if (!Number.isFinite(y0) || !Number.isFinite(k)) throw new Error('Функция или производная не определена в точке x₀');

      const b = y0 - k * x0;
      const bSign = b >= 0 ? '+' : '-';
      const tangentExpr = `${k.toFixed(4)} * x ${bSign} ${Math.abs(b).toFixed(4)}`;

      out.innerHTML = `
        <div>$$f'(x) = ${d1.toTex()}$$</div>
        <div>$$f''(x) = ${d2.toTex()}$$</div>
        <div style="margin-top:6px;">$$f(${x0}) = ${y0.toFixed(4)}, \\quad f'(${x0}) = ${k.toFixed(4)}$$</div>
        <div>$$\\text{Касательная: } y = ${k.toFixed(3)}x ${bSign} ${Math.abs(b).toFixed(3)}$$</div>
      `;
      window.renderMathIn(out);

      const multiData = JSON.stringify([
        { raw: fStr, mode: 'explicit', color: '#38bdf8' },
        { raw: tangentExpr, mode: 'explicit', color: '#fb7185' }
      ]).replace(/'/g, '&#39;');
      btnWrap.innerHTML = `<button class="open-graph-btn" data-multi='${multiData}'>📈 Построить $f(x)$ и касательную в Desmos</button>`;
      window.renderMathIn(btnWrap);
    } catch (err) {
      out.innerHTML = `<span class="status-pill status-err">Ошибка: ${err.message}</span>`;
      btnWrap.innerHTML = '';
    }
  };

  document.getElementById('derivFunc').addEventListener('input', updateDerivative);
  document.getElementById('derivX0').addEventListener('input', updateDerivative);
  document.querySelectorAll('.deriv-preset').forEach(b => b.addEventListener('click', () => {
    document.getElementById('derivFunc').value = b.dataset.f;
    document.getElementById('derivX0').value = b.dataset.x;
    updateDerivative();
  }));
  updateDerivative();

  // ========================================================================
  // 5. ТАБЛИЧНЫЙ СИМПЛЕКС-МЕТОД (ЛИНЕЙНОЕ ПРОГРАММИРОВАНИЕ)
  // ========================================================================
  let sxVars = 2;
  let sxC = [3, 2, 4];
  let sxRows = [
    { a: [2, 1, 1], op: '<=', b: 8 },
    { a: [1, 2, 1], op: '<=', b: 8 }
  ];

  const renderSimplexInputs = () => {
    const objEl = document.getElementById('sxObjInputs');
    const consEl = document.getElementById('sxConstraints');
    if (!objEl || !consEl) return;

    objEl.innerHTML = '';
    for (let j = 0; j < sxVars; j++) {
      if (j > 0) objEl.insertAdjacentHTML('beforeend', '<span>+</span>');
      const inp = document.createElement('input');
      inp.type = 'number'; inp.step = 'any';
      inp.className = 'desmos-mini-inp';
      inp.value = sxC[j];
      inp.addEventListener('input', () => { sxC[j] = parseFloat(inp.value) || 0; });
      objEl.appendChild(inp);
      objEl.insertAdjacentHTML('beforeend', `<span>$x_${j + 1}$</span>`);
    }

    consEl.innerHTML = '';
    sxRows.forEach((row, rIdx) => {
      const div = document.createElement('div');
      div.style.cssText = 'display:flex; flex-wrap:wrap; align-items:center; gap:6px; font-size:0.84rem;';
      for (let j = 0; j < sxVars; j++) {
        if (j > 0) div.insertAdjacentHTML('beforeend', '<span>+</span>');
        const inp = document.createElement('input');
        inp.type = 'number'; inp.step = 'any'; inp.className = 'desmos-mini-inp';
        inp.value = row.a[j];
        inp.addEventListener('input', () => { row.a[j] = parseFloat(inp.value) || 0; });
        div.appendChild(inp);
        div.insertAdjacentHTML('beforeend', `<span>$x_${j + 1}$</span>`);
      }

      const sel = document.createElement('select');
      sel.className = 'desmos-mini-inp'; sel.style.width = 'auto';
      sel.innerHTML = `<option value="<=" ${row.op==='<='?'selected':''}>≤</option><option value=">=" ${row.op==='>='?'selected':''}>≥</option><option value="=" ${row.op==='='?'selected':''}>=</option>`;
      sel.addEventListener('change', () => { row.op = sel.value; });
      div.appendChild(sel);

      const inpB = document.createElement('input');
      inpB.type = 'number'; inpB.step = 'any'; inpB.className = 'desmos-mini-inp';
      inpB.value = row.b;
      inpB.addEventListener('input', () => { row.b = parseFloat(inpB.value) || 0; });
      div.appendChild(inpB);

      if (sxRows.length > 1) {
        const del = document.createElement('button');
        del.className = 'btn sm'; del.style.cssText = 'padding:2px 6px;border:none;color:var(--accent-rose);';
        del.textContent = '×';
        del.addEventListener('click', () => { sxRows.splice(rIdx, 1); renderSimplexInputs(); });
        div.appendChild(del);
      }
      consEl.appendChild(div);
    });
    window.renderMathIn(objEl);
    window.renderMathIn(consEl);
  };

  const solveSimplex = () => {
    const out = document.getElementById('sxOutput');
    const goal = document.getElementById('sxGoal').value;
    const signObj = goal === 'min' ? -1 : 1;
    const BIG_M = 1e5;

    // Нормализация ограничений (b >= 0) и построение канонической формы
    const varNames = [];
    for (let j = 0; j < sxVars; j++) varNames.push(`x${j + 1}`);
    const objCoeffs = sxC.slice(0, sxVars).map(v => v * signObj);
    const artificialIndices = new Set();

    const normRows = sxRows.map(r => {
      let a = r.a.slice(0, sxVars);
      let b = r.b, op = r.op;
      if (b < 0) {
        a = a.map(v => -v); b = -b;
        op = op === '<=' ? '>=' : (op === '>=' ? '<=' : '=');
      }
      return { a, op, b };
    });

    const m = normRows.length;
    const matrix = normRows.map(r => [...r.a]);
    const rhs = normRows.map(r => r.b);
    const basis = new Array(m).fill(-1);

    normRows.forEach((r, i) => {
      if (r.op === '<=') {
        const colIdx = varNames.length;
        varNames.push(`s${i + 1}`);
        objCoeffs.push(0);
        matrix.forEach((row, ri) => row.push(ri === i ? 1 : 0));
        basis[i] = colIdx;
      } else if (r.op === '>=') {
        varNames.push(`s${i + 1}`);
        objCoeffs.push(0);
        matrix.forEach((row, ri) => row.push(ri === i ? -1 : 0));

        const artIdx = varNames.length;
        varNames.push(`a${i + 1}`);
        objCoeffs.push(-BIG_M);
        artificialIndices.add(artIdx);
        matrix.forEach((row, ri) => row.push(ri === i ? 1 : 0));
        basis[i] = artIdx;
      } else {
        const artIdx = varNames.length;
        varNames.push(`a${i + 1}`);
        objCoeffs.push(-BIG_M);
        artificialIndices.add(artIdx);
        matrix.forEach((row, ri) => row.push(ri === i ? 1 : 0));
        basis[i] = artIdx;
      }
    });

    const totalVars = varNames.length;
    const htmlSteps = [];
    let status = 'ok';

    for (let iter = 0; iter < 15; iter++) {
      // Вычисляем оценки дельта_j = sum(c_B * a_ij) - c_j (для max оптимум когда все delta_j >= 0)
      const deltas = [];
      let fVal = 0;
      for (let i = 0; i < m; i++) fVal += objCoeffs[basis[i]] * rhs[i];

      for (let j = 0; j < totalVars; j++) {
        let zj = 0;
        for (let i = 0; i < m; i++) zj += objCoeffs[basis[i]] * matrix[i][j];
        deltas.push(zj - objCoeffs[j]);
      }

      // Выбор разрешающего столбца (наименьшая отрицательная дельта)
      let pCol = -1, minD = -1e-7;
      for (let j = 0; j < totalVars; j++) {
        if (deltas[j] < minD) { minD = deltas[j]; pCol = j; }
      }

      let pRow = -1, minRatio = Infinity;
      if (pCol !== -1) {
        for (let i = 0; i < m; i++) {
          if (matrix[i][pCol] > 1e-8) {
            const ratio = rhs[i] / matrix[i][pCol];
            if (ratio < minRatio - 1e-9) { minRatio = ratio; pRow = i; }
          }
        }
      }

      // Отрисовка таблицы
      const fmtCell = v => {
        if (Math.abs(v) > 5e4) return (v > 0 ? '' : '-') + (Math.abs(v) / BIG_M).toFixed(1) + 'M';
        return (Math.round(v * 100) / 100).toString();
      };

      let tbl = `<div style="margin-bottom:10px;"><strong>Итерация ${iter + 1}</strong> ${pCol === -1 ? '(Оптимум достигнут)' : (pRow === -1 ? '(Неограничена)' : `(Разреш. элемент: строка ${pRow + 1}, столбец ${varNames[pCol]})`)}`;
      tbl += `<div class="table-wrap"><table class="simplex-table"><thead><tr><th>Базис</th><th>b</th>` +
        varNames.map((vn, j) => `<th class="${j===pCol?'pivot-col':''}">${vn}</th>`).join('') + `</tr></thead><tbody>`;

      for (let i = 0; i < m; i++) {
        tbl += `<tr class="${i===pRow?'pivot-row':''}"><td><strong>${varNames[basis[i]]}</strong></td><td>${fmtCell(rhs[i])}</td>`;
        for (let j = 0; j < totalVars; j++) {
          const cls = (i === pRow && j === pCol) ? 'pivot-cell' : (j === pCol ? 'pivot-col' : '');
          tbl += `<td class="${cls}">${fmtCell(matrix[i][j])}</td>`;
        }
        tbl += '</tr>';
      }

      tbl += `<tr><td><strong>Δ</strong></td><td><strong>${fmtCell(fVal * signObj)}</strong></td>` +
        deltas.map((d, j) => `<td class="${j===pCol?'pivot-col':''}">${fmtCell(d)}</td>`).join('') + '</tr></tbody></table></div></div>';
      htmlSteps.push(tbl);

      if (pCol === -1) { status = 'optimal'; break; }
      if (pRow === -1) { status = 'unbounded'; break; }

      // Пересчёт Жордана-Гаусса
      const piv = matrix[pRow][pCol];
      for (let j = 0; j < totalVars; j++) matrix[pRow][j] /= piv;
      rhs[pRow] /= piv;
      for (let i = 0; i < m; i++) {
        if (i === pRow) continue;
        const factor = matrix[i][pCol];
        if (Math.abs(factor) < 1e-12) continue;
        for (let j = 0; j < totalVars; j++) matrix[i][j] -= factor * matrix[pRow][j];
        rhs[i] -= factor * rhs[pRow];
      }
      basis[pRow] = pCol;
    }

    // Итог
    if (status === 'unbounded') {
      htmlSteps.push('<div class="status-pill status-err">Целевая функция не ограничена на области допустимых решений.</div>');
    } else if (status === 'optimal') {
      const hasArtificial = basis.some((bIdx, i) => artificialIndices.has(bIdx) && rhs[i] > 1e-5);
      if (hasArtificial) {
        htmlSteps.push('<div class="status-pill status-err">Система ограничений несовместна (в базисе остались искусственные переменные).</div>');
      } else {
        const xPlan = new Array(sxVars).fill(0);
        basis.forEach((bIdx, i) => { if (bIdx < sxVars) xPlan[bIdx] = rhs[i]; });
        const fStar = xPlan.reduce((s, x, j) => s + x * sxC[j], 0);
        htmlSteps.push(`<div class="status-pill status-ok">Оптимальный план: $X^* = (${xPlan.map(v => (Math.round(v*1000)/1000)).join(',\\; ')})^T$, $\\; F^* = ${(Math.round(fStar*1000)/1000)}$</div>`);
      }
    }

    out.innerHTML = htmlSteps.join('');
    window.renderMathIn(out);
  };

  document.querySelectorAll('.sx-var-btn').forEach(b => b.addEventListener('click', () => {
    sxVars = parseInt(b.dataset.v, 10);
    document.querySelectorAll('.sx-var-btn').forEach(x => x.classList.remove('active-tab'));
    b.classList.add('active-tab');
    renderSimplexInputs();
  }));
  document.getElementById('sxAddRowBtn').addEventListener('click', () => {
    sxRows.push({ a: [1, 1, 1], op: '<=', b: 5 });
    renderSimplexInputs();
  });
  document.getElementById('sxPresetBtn').addEventListener('click', () => {
    sxVars = 2; sxC = [3, 2, 4];
    sxRows = [{ a: [2, 1, 1], op: '<=', b: 8 }, { a: [1, 2, 1], op: '<=', b: 8 }];
    document.getElementById('sxGoal').value = 'max';
    renderSimplexInputs(); solveSimplex();
  });
  document.getElementById('sxSolveBtn').addEventListener('click', solveSimplex);
  renderSimplexInputs(); solveSimplex();
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
