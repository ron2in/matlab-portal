/* ==========================================================================
   РАЗДЕЛ 5: ИНТЕРАКТИВНЫЙ ГРАФОПОСТРОИТЕЛЬ (DESMOS-MODE)
   Поддержка: y=f(x), параметрические, полярные, неявные (Marching Squares),
   неравенства, системы уравнений/ОДР (фигурная скобка {), кусочные {ОДЗ}
   ========================================================================== */
window.MATLAB_SECTIONS = window.MATLAB_SECTIONS || {};

window.MATLAB_SECTIONS.grapher = String.raw`
  <div class="section-hero" style="--sec-accent: #ec4899;">
    <div class="section-badge" style="color: #ec4899;">Инструмент • Desmos-mode</div>
    <h2>Интерактивный графопостроитель</h2>
    <p>Явные $y=f(x)$, параметрические $(x(t), y(t))$, полярные $r(\theta)$, неявные кривые $F(x,y)=G(x,y)$ (Marching Squares), неравенства, кусочные ОДЗ <code>{x &gt; 0}</code> и системы уравнений / ограничений (ОДР).</p>
  </div>

  <div class="desmos-shell">
    <!-- ЛЕВАЯ ПАНЕЛЬ ВЫРАЖЕНИЙ -->
    <div class="desmos-panel">
      <div style="display:flex; align-items:center; justify-content:space-between; gap:6px; flex-wrap:wrap;">
        <strong style="font-size:0.9rem;">Выражения</strong>
        <div class="btn-group">
          <button class="btn sm" id="gAddExprBtn">+ Функция</button>
          <button class="btn sm" id="gAddSystemBtn" title="Создать систему уравнений или неравенств">{ Система</button>
          <button class="btn sm" id="gToggleKbdBtn" title="Математическая клавиатура">⌨</button>
        </div>
      </div>

      <!-- Пресеты -->
      <div class="btn-group">
        <button class="btn sm g-preset" data-preset="wave">Волна (a,b,c)</button>
        <button class="btn sm g-preset" data-preset="circle">x² + y² = 25</button>
        <button class="btn sm g-preset" data-preset="piecewise">ОДЗ {x&gt;0}</button>
        <button class="btn sm g-preset" data-preset="sys-eq">{ Сист. уравн.</button>
        <button class="btn sm g-preset" data-preset="sys-lp">{ ОДР (ЛП)</button>
        <button class="btn sm g-preset" data-preset="polar">Роза r(θ)</button>
      </div>

      <!-- Сворачиваемая математическая клавиатура -->
      <div id="gKeyboard" class="desmos-kbd" style="display:none;">
        <button data-ins="sin(">sin</button><button data-ins="cos(">cos</button><button data-ins="tan(">tan</button><button data-ins="log(">ln</button><button data-ins="sqrt(">√x</button>
        <button data-ins="^">x^n</button><button data-ins="abs(">|x|</button><button data-ins="pi">π</button><button data-ins="theta">θ</button><button data-ins="{x > 0}">{ОДЗ}</button>
        <button data-ins="<=">&le;</button><button data-ins=">=">&ge;</button><button data-ins="<">&lt;</button><button data-ins=">">&gt;</button><button data-ins="=">=</button>
        <button data-ins="(">(</button><button data-ins=")">)</button><button data-ins="+">+</button><button data-ins="-">−</button><button data-ins="*">×</button>
      </div>

      <!-- Список выражений и систем -->
      <div id="gExprList" style="display:flex; flex-direction:column; gap:8px;"></div>

      <!-- Автоматические ползунки параметров -->
      <div id="gSlidersWrap" style="display:none; flex-direction:column; gap:7px; margin-top:4px;">
        <strong style="font-size:0.82rem; color:var(--text-secondary);">Параметры (Sliders)</strong>
        <div id="gSlidersList" style="display:flex; flex-direction:column; gap:7px;"></div>
      </div>
    </div>

    <!-- ПРАВАЯ ЧАСТЬ: ХОЛСТ CANVAS -->
    <div class="desmos-canvas-wrap" id="gCanvasWrap">
      <div class="desmos-toolbar">
        <button class="btn sm" id="gZoomIn" title="Приблизить">+</button>
        <button class="btn sm" id="gZoomOut" title="Отдалить">−</button>
        <button class="btn sm" id="gHomeBtn" title="Сбросить вид (Домой)">⌂ Домой</button>
        <button class="btn sm" id="gPngBtn" title="Скачать graph.png">📷 PNG</button>
        <button class="btn sm" id="gLinkBtn" title="Скопировать ссылку на график">🔗 Ссылка</button>
      </div>
      <div id="gPinnedBadge" class="desmos-pinned-badge">
        <span id="gPinnedText"></span>
        <button id="gUnpinBtn" class="btn sm" style="padding:2px 6px;">×</button>
      </div>
      <canvas id="gCanvas"></canvas>
    </div>
  </div>
`;

/* ==========================================================================
   ЛОГИКА ГРАФОПОСТРОИТЕЛЯ
   ========================================================================== */
window.initGrapherWidgets = function() {
  const PALETTE = ['#38bdf8', '#a855f7', '#34d399', '#fbbf24', '#fb7185', '#f472b6'];
  const BUILTINS = new Set([
    'sin','cos','tan','asin','acos','atan','sinh','cosh','tanh',
    'sqrt','cbrt','abs','log','log10','log2','exp','pow','floor','ceil','round','sign',
    'min','max','pi','e','tau','phi','i','Infinity','NaN'
  ]);

  let expressions = [
    { id: 1, raw: 'a * sin(b * x) + c', mode: 'auto', color: PALETTE[0], visible: true, integral: false, intA: 0, intB: 3.14, tMin: 0, tMax: 6.283, systemId: null }
  ];
  let systems = []; // { id, visible, color }
  let nextId = 2;
  let nextSysId = 1;
  let params = {
    a: { val: 1, min: -5, max: 5, step: 0.1, play: false, dir: 1 },
    b: { val: 1, min: -5, max: 5, step: 0.1, play: false, dir: 1 },
    c: { val: 0, min: -5, max: 5, step: 0.1, play: false, dir: 1 }
  };
  let activeInputEl = null;

  let view = { cx: 0, cy: 0, scale: 55 };
  let hoverPt = null;
  let pois = []; // Особые точки (нули, экстремумы, пересечения, вершины ОДР, решения систем)

  const canvas = document.getElementById('gCanvas');
  const offCanvas = document.createElement('canvas'); // Для быстрой заливки неравенств

  function hexToRgba(hex, alpha) {
    const h = hex.replace('#', '');
    const r = parseInt(h.substring(0, 2), 16) || 56;
    const g = parseInt(h.substring(2, 4), 16) || 189;
    const b = parseInt(h.substring(4, 6), 16) || 248;
    return [r, g, b, Math.round(alpha * 255)];
  }

  function extractSymbols(node, ignoreVars, set) {
    if (!window.math) return;
    node.traverse(n => {
      if (n.isSymbolNode && !ignoreVars.has(n.name) && !BUILTINS.has(n.name)) {
        set.add(n.name);
      }
    });
  }

  // Парсинг выражений, включая ОДЗ {cond}, неравенства, неявные F=G, полярные, параметрические
  function compileAll() {
    const neededParams = new Set();

    expressions.forEach(ex => {
      ex.compiled = null;
      ex.compiledX = null;
      ex.compiledY = null;
      ex.conds = [];
      ex.error = null;
      ex.resolvedMode = ex.mode;
      ex.ineqOp = null; // '<', '<=', '>', '>='
      ex.isStrict = false;

      let txt = ex.raw.trim();
      if (!txt) return;

      // 1) Извлекаем кусочные ограничения {cond1} {cond2}
      const condRegex = /\{([^}]+)\}/g;
      let match;
      const condStrs = [];
      while ((match = condRegex.exec(txt)) !== null) {
        condStrs.push(match[1].trim());
      }
      txt = txt.replace(condRegex, '').trim();

      condStrs.forEach(cs => {
        try {
          const cn = math.parse(cs);
          extractSymbols(cn, new Set(['x', 'y', 't', 'theta']), neededParams);
          ex.conds.push(cn.compile());
        } catch (err) {
          ex.error = 'ОДЗ: ' + err.message;
        }
      });

      if (!txt) return;

      // 2) Проверка на полярное r = ...
      if (/^r\s*=/.test(txt) || ex.mode === 'polar') {
        ex.resolvedMode = 'polar';
        txt = txt.replace(/^r\s*=\s*/, '');
        try {
          const node = math.parse(txt);
          extractSymbols(node, new Set(['theta']), neededParams);
          ex.compiled = node.compile();
        } catch (err) { ex.error = err.message; }
        return;
      }

      // 3) Проверка на параметрическое (x(t), y(t))
      if (ex.mode === 'parametric' || (ex.mode === 'auto' && txt.startsWith('(') && txt.endsWith(')') && txt.includes(','))) {
        const inner = txt.slice(1, -1);
        let depth = 0, splitIdx = -1;
        for (let i = 0; i < inner.length; i++) {
          if (inner[i] === '(') depth++;
          else if (inner[i] === ')') depth--;
          else if (inner[i] === ',' && depth === 0) { splitIdx = i; break; }
        }
        if (splitIdx !== -1) {
          ex.resolvedMode = 'parametric';
          try {
            const p1 = math.parse(inner.slice(0, splitIdx));
            const p2 = math.parse(inner.slice(splitIdx + 1));
            extractSymbols(p1, new Set(['t']), neededParams);
            extractSymbols(p2, new Set(['t']), neededParams);
            ex.compiledX = p1.compile();
            ex.compiledY = p2.compile();
          } catch (err) { ex.error = err.message; }
          return;
        }
      }

      // 4) Проверка на неравенства (<=, >=, <, >)
      const ineqMatch = txt.match(/^(.*?)(<=|>=|<|>)(.*)$/);
      if (ineqMatch) {
        ex.resolvedMode = 'ineq';
        const lhs = ineqMatch[1].trim();
        const op = ineqMatch[2];
        const rhs = ineqMatch[3].trim();
        ex.ineqOp = op;
        ex.isStrict = (op === '<' || op === '>');
        // Нормируем так, чтобы >= 0 (или > 0) означало истинность неравенства
        const diffExpr = (op === '>=' || op === '>') ? `(${lhs}) - (${rhs})` : `(${rhs}) - (${lhs})`;
        try {
          const node = math.parse(diffExpr);
          extractSymbols(node, new Set(['x', 'y']), neededParams);
          ex.compiled = node.compile();
        } catch (err) { ex.error = err.message; }
        return;
      }

      // 5) Проверка на уравнение (=)
      if (txt.includes('=')) {
        const parts = txt.split('=');
        if (parts.length !== 2) { ex.error = 'Некорректное уравнение'; return; }
        const lhs = parts[0].trim(), rhs = parts[1].trim();
        // Если слева ровно y и справа нет y -> явная функция y = f(x)
        if (lhs === 'y' && !/\by\b/.test(rhs) && ex.mode !== 'implicit') {
          ex.resolvedMode = 'explicit';
          try {
            const node = math.parse(rhs);
            extractSymbols(node, new Set(['x']), neededParams);
            ex.compiled = node.compile();
          } catch (err) { ex.error = err.message; }
          return;
        }
        // Иначе -> неявное уравнение F(x, y) - G(x, y) = 0
        ex.resolvedMode = 'implicit';
        try {
          const node = math.parse(`(${lhs}) - (${rhs})`);
          extractSymbols(node, new Set(['x', 'y']), neededParams);
          ex.compiled = node.compile();
        } catch (err) { ex.error = err.message; }
        return;
      }

      // 6) Обычное явное выражение f(x) (или неявное, если содержит y)
      if (/\by\b/.test(txt)) {
        ex.resolvedMode = 'implicit';
        try {
          const node = math.parse(txt);
          extractSymbols(node, new Set(['x', 'y']), neededParams);
          ex.compiled = node.compile();
        } catch (err) { ex.error = err.message; }
      } else {
        ex.resolvedMode = 'explicit';
        try {
          const node = math.parse(txt);
          extractSymbols(node, new Set(['x']), neededParams);
          ex.compiled = node.compile();
        } catch (err) { ex.error = err.message; }
      }
    });

    Object.keys(params).forEach(k => { if (!neededParams.has(k)) delete params[k]; });
    neededParams.forEach(k => {
      if (!params[k]) params[k] = { val: 1, min: -5, max: 5, step: 0.1, play: false, dir: 1 };
    });
    renderSliders();
    computePOIs();
    drawGraph();
  }

  function evalScope(extra) {
    const sc = {};
    Object.keys(params).forEach(k => { sc[k] = params[k].val; });
    return Object.assign(sc, extra);
  }

  function checkConds(ex, sc) {
    for (let i = 0; i < ex.conds.length; i++) {
      try { if (!ex.conds[i].evaluate(sc)) return false; }
      catch { return false; }
    }
    return true;
  }

  function evalExplicit(ex, x) {
    if (!ex.compiled) return NaN;
    const sc = evalScope({ x, y: 0 });
    if (!checkConds(ex, sc)) return NaN;
    try {
      const v = ex.compiled.evaluate(sc);
      return typeof v === 'number' && Number.isFinite(v) ? v : NaN;
    } catch { return NaN; }
  }

  // Для неявных уравнений и неравенств: F(x, y)
  function evalField(ex, x, y) {
    if (!ex.compiled) return NaN;
    const sc = evalScope({ x, y });
    if (!checkConds(ex, sc)) return NaN;
    try {
      let v;
      if (ex.resolvedMode === 'explicit') {
        v = y - ex.compiled.evaluate(sc);
      } else {
        v = ex.compiled.evaluate(sc);
      }
      return typeof v === 'number' && Number.isFinite(v) ? v : NaN;
    } catch { return NaN; }
  }

  function simpsonIntegral(ex, a, b, n = 120) {
    if (a === b) return 0;
    const sign = a > b ? -1 : 1;
    const lo = Math.min(a, b), hi = Math.max(a, b);
    const h = (hi - lo) / n;
    let sum = evalExplicit(ex, lo) + evalExplicit(ex, hi);
    for (let i = 1; i < n; i++) {
      const y = evalExplicit(ex, lo + i * h);
      if (!Number.isFinite(y)) return NaN;
      sum += (i % 2 === 0 ? 2 : 4) * y;
    }
    return sign * (h / 3) * sum;
  }

  // Численный поиск решений системы F1(x,y)=0, F2(x,y)=0 (2D Гаусс-Ньютон)
  function solvePair2D(exA, exB, x0, y0) {
    let x = x0, y = y0;
    const h = 1e-5;
    for (let iter = 0; iter < 18; iter++) {
      const f1 = evalField(exA, x, y);
      const f2 = evalField(exB, x, y);
      if (!Number.isFinite(f1) || !Number.isFinite(f2)) return null;
      if (Math.abs(f1) < 1e-7 && Math.abs(f2) < 1e-7) return { x, y };

      const df1x = (evalField(exA, x + h, y) - evalField(exA, x - h, y)) / (2 * h);
      const df1y = (evalField(exA, x, y + h) - evalField(exA, x, y - h)) / (2 * h);
      const df2x = (evalField(exB, x + h, y) - evalField(exB, x - h, y)) / (2 * h);
      const df2y = (evalField(exB, x, y + h) - evalField(exB, x, y - h)) / (2 * h);
      const det = df1x * df2y - df1y * df2x;
      if (!Number.isFinite(det) || Math.abs(det) < 1e-11) return null;

      const dx = (-f1 * df2y + f2 * df1y) / det;
      const dy = (-df1x * f2 + df2x * f1) / det;
      if (Math.abs(dx) > 5 || Math.abs(dy) > 5) return null;
      x += dx; y += dy;
      if (Math.hypot(dx, dy) < 1e-8) break;
    }
    const r1 = evalField(exA, x, y), r2 = evalField(exB, x, y);
    return (Number.isFinite(r1) && Number.isFinite(r2) && Math.abs(r1) < 1e-4 && Math.abs(r2) < 1e-4) ? { x, y } : null;
  }

  function findPairIntersections(exA, exB, xMin, xMax, yMin, yMax) {
    const nx = 34, ny = 28;
    const dx = (xMax - xMin) / nx, dy = (yMax - yMin) / ny;
    const found = [];

    for (let i = 0; i < nx; i++) {
      for (let j = 0; j < ny; j++) {
        const x0 = xMin + i * dx, x1 = x0 + dx;
        const y0 = yMin + j * dy, y1 = y0 + dy;
        const a00 = evalField(exA, x0, y0), a10 = evalField(exA, x1, y0);
        const a01 = evalField(exA, x0, y1), a11 = evalField(exA, x1, y1);
        const b00 = evalField(exB, x0, y0), b10 = evalField(exB, x1, y0);
        const b01 = evalField(exB, x0, y1), b11 = evalField(exB, x1, y1);

        const aHasSign = (Math.min(a00, a10, a01, a11) <= 0 && Math.max(a00, a10, a01, a11) >= 0);
        const bHasSign = (Math.min(b00, b10, b01, b11) <= 0 && Math.max(b00, b10, b01, b11) >= 0);
        if (!aHasSign || !bHasSign) continue;

        const pt = solvePair2D(exA, exB, (x0 + x1) / 2, (y0 + y1) / 2);
        if (pt && pt.x >= xMin - dx && pt.x <= xMax + dx && pt.y >= yMin - dy && pt.y <= yMax + dy) {
          if (!found.some(f => Math.hypot(f.x - pt.x, f.y - pt.y) < 1e-2)) {
            found.push(pt);
          }
        }
      }
    }
    return found;
  }

  // Поиск особых точек (нули, экстремумы, пересечения + решения систем / вершины ОДР)
  function computePOIs() {
    pois = [];
    if (!canvas || canvas.clientWidth === 0) return;
    const w = canvas.clientWidth, h = canvas.clientHeight;
    const xMin = view.cx - w / (2 * view.scale), xMax = view.cx + w / (2 * view.scale);
    const yMin = view.cy - h / (2 * view.scale), yMax = view.cy + h / (2 * view.scale);
    const samples = 220;
    const dx = (xMax - xMin) / samples;

    const refineRoot = (fn, a, b) => {
      let fa = fn(a), fb = fn(b);
      for (let i = 0; i < 16; i++) {
        const m = (a + b) / 2, fm = fn(m);
        if (Math.abs(fm) < 1e-9) return m;
        if (fa * fm <= 0) { b = m; fb = fm; } else { a = m; fa = fm; }
      }
      return (a + b) / 2;
    };

    const visExplicit = expressions.filter(e => e.visible && !e.systemId && e.resolvedMode === 'explicit' && e.compiled);
    visExplicit.forEach(ex => {
      const fn = x => evalExplicit(ex, x);
      if (xMin <= 0 && xMax >= 0) {
        const y0 = fn(0);
        if (Number.isFinite(y0)) pois.push({ x: 0, y: y0, type: 'Пересечение с Y' });
      }
      let px = xMin, py = fn(px), pdy = NaN;
      for (let i = 1; i <= samples; i++) {
        const x = xMin + i * dx, y = fn(x);
        if (Number.isFinite(py) && Number.isFinite(y)) {
          if (py * y <= 0 && (py !== 0 || y !== 0) && Math.abs(y - py) < (xMax - xMin)) {
            const rx = refineRoot(fn, px, x);
            if (Math.abs(fn(rx)) < 0.1) pois.push({ x: rx, y: 0, type: 'Нуль' });
          }
          const dy = y - py;
          if (Number.isFinite(pdy) && pdy * dy < 0 && Math.abs(dy) < 5) {
            const df = t => (fn(t + dx * 0.05) - fn(t - dx * 0.05)) / (dx * 0.1);
            const exX = refineRoot(df, px - dx, x), exY = fn(exX);
            if (Number.isFinite(exY)) pois.push({ x: exX, y: exY, type: pdy > 0 ? 'Максимум' : 'Минимум' });
          }
          pdy = dy;
        }
        px = x; py = y;
      }
    });

    // Пересечения любых двух видимых одиночных графиков (explicit / implicit)
    const visStandalone = expressions.filter(e => e.visible && !e.systemId && e.compiled && (e.resolvedMode === 'explicit' || e.resolvedMode === 'implicit'));
    for (let i = 0; i < visStandalone.length; i++) {
      for (let j = i + 1; j < visStandalone.length; j++) {
        const pts = findPairIntersections(visStandalone[i], visStandalone[j], xMin, xMax, yMin, yMax);
        pts.forEach(pt => {
          pois.push({ x: pt.x, y: pt.y, type: 'Пересечение' });
        });
      }
    }

    // Системы: общие решения уравнений и угловые вершины ОДР
    systems.forEach(sys => {
      if (!sys.visible) return;
      const members = expressions.filter(e => e.systemId === sys.id && e.visible && e.compiled);
      if (members.length < 2) return;
      const hasIneq = members.some(m => m.resolvedMode === 'ineq');

      for (let i = 0; i < members.length; i++) {
        for (let j = i + 1; j < members.length; j++) {
          const pts = findPairIntersections(members[i], members[j], xMin, xMax, yMin, yMax);
          pts.forEach(pt => {
            if (hasIneq) {
              // Проверяем, удовлетворяет ли вершина всем неравенствам системы
              const ok = members.every(m => {
                const v = evalField(m, pt.x, pt.y);
                return m.resolvedMode === 'ineq' ? (Number.isFinite(v) && v >= -1e-3) : Math.abs(v) < 1e-3;
              });
              if (ok) pois.push({ x: pt.x, y: pt.y, type: 'Вершина ОДР', highlight: sys.color });
            } else {
              // Проверяем, удовлетворяет ли точка всем уравнениям системы
              const ok = members.every(m => Math.abs(evalField(m, pt.x, pt.y)) < 1e-3);
              if (ok) pois.push({ x: pt.x, y: pt.y, type: 'Решение системы', highlight: sys.color });
            }
          });
        }
      }
    });
  }

  // Алгоритм Marching Squares для контура F(x, y) = 0
  function drawMarchingSquares(ctx, ex, w, h, toPxX, toPxY, toWorldX, toWorldY, dashed = false, lineWidth = 2.3) {
    const nx = 100, ny = 80;
    const cellW = w / nx, cellH = h / ny;
    const grid = new Array((nx + 1) * (ny + 1));

    for (let j = 0; j <= ny; j++) {
      const wy = toWorldY(j * cellH);
      for (let i = 0; i <= nx; i++) {
        grid[j * (nx + 1) + i] = evalField(ex, toWorldX(i * cellW), wy);
      }
    }

    ctx.save();
    ctx.strokeStyle = ex.color;
    ctx.lineWidth = lineWidth;
    if (dashed) ctx.setLineDash([6, 5]);
    ctx.beginPath();

    const interp = (a, b) => {
      if (Math.abs(a - b) < 1e-12) return 0.5;
      return Math.max(0, Math.min(1, a / (a - b)));
    };

    for (let j = 0; j < ny; j++) {
      for (let i = 0; i < nx; i++) {
        const v0 = grid[j * (nx + 1) + i];         // top-left
        const v1 = grid[j * (nx + 1) + i + 1];     // top-right
        const v2 = grid[(j + 1) * (nx + 1) + i + 1]; // bottom-right
        const v3 = grid[(j + 1) * (nx + 1) + i];   // bottom-left
        if (!Number.isFinite(v0) || !Number.isFinite(v1) || !Number.isFinite(v2) || !Number.isFinite(v3)) continue;

        const c = (v0 > 0 ? 8 : 0) | (v1 > 0 ? 4 : 0) | (v2 > 0 ? 2 : 0) | (v3 > 0 ? 1 : 0);
        if (c === 0 || c === 15) continue;

        const x0 = i * cellW, y0 = j * cellH;
        const top = [x0 + interp(v0, v1) * cellW, y0];
        const right = [x0 + cellW, y0 + interp(v1, v2) * cellH];
        const bottom = [x0 + interp(v3, v2) * cellW, y0 + cellH];
        const left = [x0, y0 + interp(v0, v3) * cellH];

        const seg = (p, q) => { ctx.moveTo(p[0], p[1]); ctx.lineTo(q[0], q[1]); };
        switch (c) {
          case 1: case 14: seg(left, bottom); break;
          case 2: case 13: seg(bottom, right); break;
          case 3: case 12: seg(left, right); break;
          case 4: case 11: seg(top, right); break;
          case 5: seg(left, top); seg(bottom, right); break;
          case 6: case 9: seg(top, bottom); break;
          case 7: case 8: seg(left, top); break;
          case 10: seg(top, right); seg(left, bottom); break;
        }
      }
    }
    ctx.stroke();
    ctx.restore();
  }

  // Заливка области неравенства или пересечения системы неравенств (ОДР)
  function drawShadedRegion(ctx, w, h, toWorldX, toWorldY, colorHex, testFn) {
    const scaleDown = 2;
    const ow = Math.max(1, Math.floor(w / scaleDown));
    const oh = Math.max(1, Math.floor(h / scaleDown));
    offCanvas.width = ow; offCanvas.height = oh;
    const octx = offCanvas.getContext('2d');
    const img = octx.createImageData(ow, oh);
    const [r, g, b, a] = hexToRgba(colorHex, 0.24);

    for (let py = 0; py < oh; py++) {
      const wy = toWorldY(py * scaleDown);
      for (let px = 0; px < ow; px++) {
        const wx = toWorldX(px * scaleDown);
        if (testFn(wx, wy)) {
          const idx = (py * ow + px) * 4;
          img.data[idx] = r; img.data[idx + 1] = g; img.data[idx + 2] = b; img.data[idx + 3] = a;
        }
      }
    }
    octx.putImageData(img, 0, 0);
    ctx.drawImage(offCanvas, 0, 0, w, h);
  }

  function niceStep(rawStep) {
    const pow = Math.pow(10, Math.floor(Math.log10(rawStep)));
    const f = rawStep / pow;
    if (f < 1.5) return 1 * pow;
    if (f < 3.5) return 2 * pow;
    if (f < 7.5) return 5 * pow;
    return 10 * pow;
  }

  window.drawGrapherCanvas = drawGraph;
  function drawGraph() {
    if (!canvas || canvas.offsetParent === null) return;
    const dpr = window.devicePixelRatio || 1;
    const w = canvas.clientWidth, h = canvas.clientHeight;
    canvas.width = w * dpr; canvas.height = h * dpr;
    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, w, h);

    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    const gridMajor = isLight ? 'rgba(15,23,42,0.11)' : 'rgba(148,163,184,0.14)';
    const gridMinor = isLight ? 'rgba(15,23,42,0.04)' : 'rgba(148,163,184,0.05)';
    const axisCol = isLight ? 'rgba(15,23,42,0.55)' : 'rgba(241,245,249,0.5)';
    const txtCol = isLight ? '#475569' : '#94a3b8';

    const toPxX = x => w / 2 + (x - view.cx) * view.scale;
    const toPxY = y => h / 2 - (y - view.cy) * view.scale;
    const toWorldX = px => view.cx + (px - w / 2) / view.scale;
    const toWorldY = py => view.cy - (py - h / 2) / view.scale;

    const xMin = toWorldX(0), xMax = toWorldX(w);
    const yMin = toWorldY(h), yMax = toWorldY(0);
    const step = niceStep(90 / view.scale);
    const minorStep = step / 4;

    // Сетка
    ctx.lineWidth = 1;
    ctx.strokeStyle = gridMinor;
    ctx.beginPath();
    for (let x = Math.floor(xMin / minorStep) * minorStep; x <= xMax; x += minorStep) { const px = toPxX(x); ctx.moveTo(px, 0); ctx.lineTo(px, h); }
    for (let y = Math.floor(yMin / minorStep) * minorStep; y <= yMax; y += minorStep) { const py = toPxY(y); ctx.moveTo(0, py); ctx.lineTo(w, py); }
    ctx.stroke();

    ctx.strokeStyle = gridMajor;
    ctx.beginPath();
    for (let x = Math.floor(xMin / step) * step; x <= xMax; x += step) { const px = toPxX(x); ctx.moveTo(px, 0); ctx.lineTo(px, h); }
    for (let y = Math.floor(yMin / step) * step; y <= yMax; y += step) { const py = toPxY(y); ctx.moveTo(0, py); ctx.lineTo(w, py); }
    ctx.stroke();

    // Оси
    const ox = toPxX(0), oy = toPxY(0);
    ctx.strokeStyle = axisCol; ctx.lineWidth = 1.6;
    ctx.beginPath(); ctx.moveTo(0, oy); ctx.lineTo(w, oy); ctx.moveTo(ox, 0); ctx.lineTo(ox, h); ctx.stroke();

    ctx.font = '11px JetBrains Mono, monospace'; ctx.fillStyle = txtCol; ctx.textAlign = 'center';
    for (let x = Math.floor(xMin / step) * step; x <= xMax; x += step) {
      if (Math.abs(x) < step * 0.01) continue;
      ctx.fillText(Number(x.toPrecision(4)).toString(), toPxX(x), Math.max(14, Math.min(h - 6, oy + 14)));
    }
    ctx.textAlign = 'right';
    for (let y = Math.floor(yMin / step) * step; y <= yMax; y += step) {
      if (Math.abs(y) < step * 0.01) continue;
      ctx.fillText(Number(y.toPrecision(4)).toString(), Math.max(32, Math.min(w - 6, ox - 6)), toPxY(y) + 4);
    }

    // 1) Отрисовка систем (ОДР для неравенств + контуры)
    systems.forEach(sys => {
      if (!sys.visible) return;
      const members = expressions.filter(e => e.systemId === sys.id && e.visible && e.compiled);
      const ineqs = members.filter(m => m.resolvedMode === 'ineq');
      if (ineqs.length > 0) {
        drawShadedRegion(ctx, w, h, toWorldX, toWorldY, sys.color, (wx, wy) => {
          return ineqs.every(m => {
            const v = evalField(m, wx, wy);
            return Number.isFinite(v) && (m.isStrict ? v > 0 : v >= 0);
          });
        });
      }
      members.forEach(m => {
        drawMarchingSquares(ctx, m, w, h, toPxX, toPxY, toWorldX, toWorldY, m.isStrict, 1.9);
      });
    });

    // 2) Отрисовка одиночных выражений
    expressions.forEach(ex => {
      if (!ex.visible || ex.systemId) return;
      ctx.save();
      ctx.strokeStyle = ex.color; ctx.lineWidth = 2.4;

      if (ex.resolvedMode === 'ineq' && ex.compiled) {
        drawShadedRegion(ctx, w, h, toWorldX, toWorldY, ex.color, (wx, wy) => {
          const v = evalField(ex, wx, wy);
          return Number.isFinite(v) && (ex.isStrict ? v > 0 : v >= 0);
        });
        drawMarchingSquares(ctx, ex, w, h, toPxX, toPxY, toWorldX, toWorldY, ex.isStrict, 2.2);
      } else if (ex.resolvedMode === 'implicit' && ex.compiled) {
        drawMarchingSquares(ctx, ex, w, h, toPxX, toPxY, toWorldX, toWorldY, false, 2.4);
      } else if (ex.resolvedMode === 'explicit' && ex.compiled) {
        if (ex.integral) {
          const a = Math.min(ex.intA, ex.intB), b = Math.max(ex.intA, ex.intB);
          const pxA = Math.max(0, toPxX(a)), pxB = Math.min(w, toPxX(b));
          if (pxB > pxA) {
            ctx.fillStyle = ex.color + '33';
            ctx.beginPath(); ctx.moveTo(pxA, oy);
            for (let px = pxA; px <= pxB; px += 2) {
              const y = evalExplicit(ex, toWorldX(px));
              if (Number.isFinite(y)) ctx.lineTo(px, toPxY(y));
            }
            ctx.lineTo(pxB, oy); ctx.closePath(); ctx.fill();
          }
        }
        ctx.beginPath();
        let drawing = false, prevPy = 0;
        for (let px = 0; px <= w; px += 1.5) {
          const y = evalExplicit(ex, toWorldX(px));
          if (!Number.isFinite(y)) { drawing = false; continue; }
          const py = toPxY(y);
          if (!drawing || Math.abs(py - prevPy) > h * 0.85) { ctx.moveTo(px, py); drawing = true; }
          else { ctx.lineTo(px, py); }
          prevPy = py;
        }
        ctx.stroke();

        // Интерактивная касательная и нормаль в точке x0
        if (ex.tangent) {
          const x0 = Number(ex.tanX0) || 0;
          const y0 = evalExplicit(ex, x0);
          const hStep = 1e-5;
          const k = (evalExplicit(ex, x0 + hStep) - evalExplicit(ex, x0 - hStep)) / (2 * hStep);
          if (Number.isFinite(y0) && Number.isFinite(k)) {
            // Касательная
            ctx.save();
            ctx.strokeStyle = '#fbbf24';
            ctx.lineWidth = 2;
            ctx.setLineDash([7, 4]);
            ctx.beginPath();
            ctx.moveTo(0, toPxY(y0 + k * (xMin - x0)));
            ctx.lineTo(w, toPxY(y0 + k * (xMax - x0)));
            ctx.stroke();

            // Нормаль
            ctx.strokeStyle = '#94a3b8';
            ctx.lineWidth = 1.4;
            ctx.setLineDash([3, 4]);
            ctx.beginPath();
            if (Math.abs(k) > 1e-5) {
              const kn = -1 / k;
              ctx.moveTo(0, toPxY(y0 + kn * (xMin - x0)));
              ctx.lineTo(w, toPxY(y0 + kn * (xMax - x0)));
            } else {
              ctx.moveTo(toPxX(x0), 0);
              ctx.lineTo(toPxX(x0), h);
            }
            ctx.stroke();

            // Точка касания
            ctx.fillStyle = '#fbbf24';
            ctx.beginPath();
            ctx.arc(toPxX(x0), toPxY(y0), 5.5, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
          }
        }
      } else if (ex.resolvedMode === 'polar' && ex.compiled) {
        ctx.beginPath();
        let started = false;
        for (let i = 0; i <= 600; i++) {
          const th = (i / 600) * Math.PI * 2;
          try {
            const r = ex.compiled.evaluate(evalScope({ theta: th }));
            if (typeof r !== 'number' || !Number.isFinite(r)) { started = false; continue; }
            const px = toPxX(r * Math.cos(th)), py = toPxY(r * Math.sin(th));
            if (!started) { ctx.moveTo(px, py); started = true; } else ctx.lineTo(px, py);
          } catch { started = false; }
        }
        ctx.stroke();
      } else if (ex.resolvedMode === 'parametric' && ex.compiledX && ex.compiledY) {
        ctx.beginPath();
        let started = false;
        for (let i = 0; i <= 500; i++) {
          const t = ex.tMin + (i / 500) * (ex.tMax - ex.tMin);
          try {
            const sc = evalScope({ t });
            const x = ex.compiledX.evaluate(sc), y = ex.compiledY.evaluate(sc);
            if (!Number.isFinite(x) || !Number.isFinite(y)) { started = false; continue; }
            const px = toPxX(x), py = toPxY(y);
            if (!started) { ctx.moveTo(px, py); started = true; } else ctx.lineTo(px, py);
          } catch { started = false; }
        }
        ctx.stroke();
      }
      ctx.restore();
    });

    // 3) Особые точки (обычные серые и яркие для систем/ОДР)
    pois.forEach(p => {
      const px = toPxX(p.x), py = toPxY(p.y);
      if (px < -12 || px > w + 12 || py < -12 || py > h + 12) return;
      ctx.fillStyle = p.highlight || '#94a3b8';
      ctx.strokeStyle = isLight ? '#ffffff' : '#0b0f19';
      ctx.lineWidth = p.highlight ? 2 : 1.5;
      ctx.beginPath();
      ctx.arc(px, py, p.highlight ? 5.8 : 4.2, 0, Math.PI * 2);
      ctx.fill(); ctx.stroke();
    });

    // 4) Hover Tooltip
    if (hoverPt) {
      const px = toPxX(hoverPt.x), py = toPxY(hoverPt.y);
      ctx.fillStyle = hoverPt.color || '#f1f5f9';
      ctx.beginPath(); ctx.arc(px, py, 5.5, 0, Math.PI * 2); ctx.fill();
      const label = `${hoverPt.label ? hoverPt.label + ': ' : ''}(${hoverPt.x.toFixed(3)}, ${hoverPt.y.toFixed(3)})`;
      ctx.font = '11.5px JetBrains Mono, monospace';
      const tw = ctx.measureText(label).width + 12;
      const bx = Math.min(w - tw - 6, Math.max(6, px + 10));
      const by = Math.max(26, py - 12);
      ctx.fillStyle = isLight ? 'rgba(255,255,255,0.94)' : 'rgba(15,23,42,0.94)';
      ctx.strokeStyle = hoverPt.color || axisCol;
      ctx.lineWidth = 1;
      ctx.fillRect(bx, by - 16, tw, 22);
      ctx.strokeRect(bx, by - 16, tw, 22);
      ctx.fillStyle = isLight ? '#0f172a' : '#f1f5f9';
      ctx.textAlign = 'left';
      ctx.fillText(label, bx + 6, by - 1);
    }
  }

  function createExprItemEl(ex) {
    const item = document.createElement('div');
    item.className = 'desmos-expr-item';
    const intVal = (ex.resolvedMode === 'explicit' && ex.integral && ex.compiled)
      ? simpsonIntegral(ex, ex.intA, ex.intB)
      : null;

    item.innerHTML = `
      <div class="desmos-expr-row">
        <button class="desmos-vis-btn ${ex.visible ? 'visible' : ''}" style="color:${ex.color};" title="Вкл/выкл"></button>
        <input type="text" class="input-field mono g-expr-inp" value="${ex.raw.replace(/"/g, '&quot;')}" placeholder="f(x), F(x,y)=G, y>=x^2..." style="padding:5px 8px;font-size:0.81rem;" />
        <input type="color" class="desmos-color-pick" value="${ex.color}" />
        <button class="btn sm g-del-btn" style="padding:3px 7px;border:none;color:var(--accent-rose);">×</button>
      </div>
      <div class="desmos-expr-sub">
        <select class="desmos-mini-inp g-mode-sel" style="width:auto;">
          <option value="auto" ${ex.mode==='auto'?'selected':''}>Авто (${ex.resolvedMode})</option>
          <option value="explicit" ${ex.mode==='explicit'?'selected':''}>y = f(x)</option>
          <option value="implicit" ${ex.mode==='implicit'?'selected':''}>F(x,y)=0</option>
          <option value="parametric" ${ex.mode==='parametric'?'selected':''}>(x(t),y(t))</option>
          <option value="polar" ${ex.mode==='polar'?'selected':''}>r(θ)</option>
        </select>
        ${ex.resolvedMode === 'explicit' && !ex.systemId ? `
          <label style="display:inline-flex;align-items:center;gap:4px;cursor:pointer;">
            <input type="checkbox" class="g-int-chk" ${ex.integral?'checked':''} /> ∫
          </label>
          ${ex.integral ? `
            [<input type="number" step="0.5" class="desmos-mini-inp g-int-a" value="${ex.intA}" /> ;
            <input type="number" step="0.5" class="desmos-mini-inp g-int-b" value="${ex.intB}" />]
            <span style="color:${ex.color};font-weight:600;">= ${Number.isFinite(intVal) ? intVal.toFixed(4) : 'NaN'}</span>
          ` : ''}
          <label style="display:inline-flex;align-items:center;gap:4px;cursor:pointer;">
            <input type="checkbox" class="g-tan-chk" ${ex.tangent?'checked':''} /> Касательная в x₀
          </label>
          ${ex.tangent ? (() => {
            const tx = Number(ex.tanX0) || 0;
            const tk = (evalExplicit(ex, tx + 1e-5) - evalExplicit(ex, tx - 1e-5)) / 2e-5;
            const deg = Number.isFinite(tk) ? (Math.atan(tk) * 180 / Math.PI).toFixed(1) : '—';
            return `
              <input type="range" class="g-tan-range" min="-10" max="10" step="0.1" value="${tx}" style="width:76px;" />
              <input type="number" step="0.1" class="desmos-mini-inp g-tan-x0" value="${tx}" style="width:52px;" />
              <span class="g-tan-info" style="color:#fbbf24;">f'=${Number.isFinite(tk)?tk.toFixed(2):'—'} (${deg}°)</span>
            `;
          })() : ''}
        ` : ''}
        ${ex.error ? `<span style="color:var(--accent-rose);">${ex.error}</span>` : ''}
      </div>
    `;

    item.querySelector('.desmos-vis-btn').addEventListener('click', () => {
      ex.visible = !ex.visible; renderExprList(); computePOIs(); drawGraph();
    });
    const inp = item.querySelector('.g-expr-inp');
    inp.addEventListener('focus', () => { activeInputEl = inp; });
    inp.addEventListener('input', () => { ex.raw = inp.value; compileAll(); });
    item.querySelector('.desmos-color-pick').addEventListener('input', (e) => {
      ex.color = e.target.value; renderExprList(); drawGraph();
    });
    item.querySelector('.g-del-btn').addEventListener('click', () => {
      expressions = expressions.filter(e => e.id !== ex.id);
      renderExprList(); compileAll();
    });
    item.querySelector('.g-mode-sel').addEventListener('change', (e) => {
      ex.mode = e.target.value; compileAll(); renderExprList();
    });
    const intChk = item.querySelector('.g-int-chk');
    if (intChk) intChk.addEventListener('change', () => { ex.integral = intChk.checked; renderExprList(); drawGraph(); });
    const intA = item.querySelector('.g-int-a');
    if (intA) intA.addEventListener('input', () => { ex.intA = parseFloat(intA.value) || 0; renderExprList(); drawGraph(); });
    const intB = item.querySelector('.g-int-b');
    if (intB) intB.addEventListener('input', () => { ex.intB = parseFloat(intB.value) || 0; renderExprList(); drawGraph(); });

    const tanChk = item.querySelector('.g-tan-chk');
    if (tanChk) tanChk.addEventListener('change', () => {
      ex.tangent = tanChk.checked;
      if (ex.tanX0 === undefined) ex.tanX0 = 1;
      renderExprList(); drawGraph();
    });
    const tanRange = item.querySelector('.g-tan-range');
    const tanX0Inp = item.querySelector('.g-tan-x0');
    const tanInfo = item.querySelector('.g-tan-info');
    const syncTan = (val) => {
      ex.tanX0 = parseFloat(val) || 0;
      if (tanRange) tanRange.value = ex.tanX0;
      if (tanX0Inp) tanX0Inp.value = ex.tanX0;
      if (tanInfo) {
        const tk = (evalExplicit(ex, ex.tanX0 + 1e-5) - evalExplicit(ex, ex.tanX0 - 1e-5)) / 2e-5;
        const deg = Number.isFinite(tk) ? (Math.atan(tk) * 180 / Math.PI).toFixed(1) : '—';
        tanInfo.textContent = `f'=${Number.isFinite(tk)?tk.toFixed(2):'—'} (${deg}°)`;
      }
      drawGraph();
    };
    if (tanRange) tanRange.addEventListener('input', () => syncTan(tanRange.value));
    if (tanX0Inp) tanX0Inp.addEventListener('input', () => syncTan(tanX0Inp.value));

    return item;
  }

  function renderExprList() {
    const list = document.getElementById('gExprList');
    if (!list) return;
    list.innerHTML = '';

    // Сначала рендерим системы с большой фигурной скобкой {
    systems.forEach(sys => {
      const box = document.createElement('div');
      box.className = 'desmos-system-box';
      const members = expressions.filter(e => e.systemId === sys.id);

      box.innerHTML = `
        <div class="desmos-brace" style="border-color:${sys.color};"></div>
        <div class="desmos-system-inner">
          <div class="desmos-system-hdr" style="color:${sys.color};">
            <span>Система #${sys.id} (${members.some(m=>m.resolvedMode==='ineq') ? 'ОДР' : 'Уравнения'})</span>
            <div style="display:flex;gap:4px;">
              <button class="btn sm g-sys-add" style="padding:2px 6px;">+ строка</button>
              <button class="btn sm g-sys-del" style="padding:2px 6px;color:var(--accent-rose);">×</button>
            </div>
          </div>
          <div class="g-sys-items" style="display:flex;flex-direction:column;gap:6px;"></div>
        </div>
      `;

      const itemsHost = box.querySelector('.g-sys-items');
      members.forEach(m => itemsHost.appendChild(createExprItemEl(m)));

      box.querySelector('.g-sys-add').addEventListener('click', () => {
        expressions.push({ id: nextId++, raw: 'x >= 0', mode: 'auto', color: sys.color, visible: true, integral: false, intA: 0, intB: 2, tMin: 0, tMax: 6.283, systemId: sys.id });
        renderExprList(); compileAll();
      });
      box.querySelector('.g-sys-del').addEventListener('click', () => {
        expressions = expressions.filter(e => e.systemId !== sys.id);
        systems = systems.filter(s => s.id !== sys.id);
        renderExprList(); compileAll();
      });

      list.appendChild(box);
    });

    // Обычные (внесистемные) выражения
    expressions.filter(e => !e.systemId).forEach(ex => {
      list.appendChild(createExprItemEl(ex));
    });
  }

  function renderSliders() {
    const wrapEl = document.getElementById('gSlidersWrap');
    const list = document.getElementById('gSlidersList');
    const keys = Object.keys(params);
    wrapEl.style.display = keys.length ? 'flex' : 'none';
    list.innerHTML = '';

    keys.forEach(k => {
      const p = params[k];
      const div = document.createElement('div');
      div.className = 'desmos-slider-item';
      div.innerHTML = `
        <div class="desmos-slider-top">
          <span><strong>${k}</strong> = <span class="mono g-pval">${p.val.toFixed(2)}</span></span>
          <div style="display:flex;align-items:center;gap:4px;">
            <input type="number" class="desmos-mini-inp g-pmin" value="${p.min}" />
            <span>..</span>
            <input type="number" class="desmos-mini-inp g-pmax" value="${p.max}" />
            <button class="btn sm g-pplay">${p.play ? '⏸' : '▶'}</button>
          </div>
        </div>
        <input type="range" class="g-prange" min="${p.min}" max="${p.max}" step="${p.step}" value="${p.val}" style="width:100%;" />
      `;
      const range = div.querySelector('.g-prange'), valSpan = div.querySelector('.g-pval');
      range.addEventListener('input', () => { p.val = parseFloat(range.value); valSpan.textContent = p.val.toFixed(2); computePOIs(); drawGraph(); });
      div.querySelector('.g-pmin').addEventListener('change', (e) => { p.min = parseFloat(e.target.value) || -5; range.min = p.min; });
      div.querySelector('.g-pmax').addEventListener('change', (e) => { p.max = parseFloat(e.target.value) || 5; range.max = p.max; });
      div.querySelector('.g-pplay').addEventListener('click', (e) => { p.play = !p.play; e.target.textContent = p.play ? '⏸' : '▶'; });
      list.appendChild(div);
    });
  }

  function animLoop() {
    let anyPlaying = false;
    Object.keys(params).forEach((k, idx) => {
      const p = params[k];
      if (!p.play) return;
      anyPlaying = true;
      p.val += p.dir * Math.max(0.1, p.max - p.min) * 0.008;
      if (p.val >= p.max) { p.val = p.max; p.dir = -1; }
      if (p.val <= p.min) { p.val = p.min; p.dir = 1; }
      const ranges = document.querySelectorAll('.g-prange'), vals = document.querySelectorAll('.g-pval');
      if (ranges[idx]) ranges[idx].value = p.val;
      if (vals[idx]) vals[idx].textContent = p.val.toFixed(2);
    });
    if (anyPlaying) { computePOIs(); drawGraph(); }
    requestAnimationFrame(animLoop);
  }
  requestAnimationFrame(animLoop);

  // Pan & Zoom
  let dragging = false, dragStart = { x: 0, y: 0, cx: 0, cy: 0 }, moved = false;
  canvas.addEventListener('mousedown', (e) => { dragging = true; moved = false; dragStart = { x: e.clientX, y: e.clientY, cx: view.cx, cy: view.cy }; });
  window.addEventListener('mouseup', () => { dragging = false; });

  canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left, my = e.clientY - rect.top;
    if (dragging) {
      if (Math.abs(e.clientX - dragStart.x) > 3 || Math.abs(e.clientY - dragStart.y) > 3) moved = true;
      view.cx = dragStart.cx - (e.clientX - dragStart.x) / view.scale;
      view.cy = dragStart.cy + (e.clientY - dragStart.y) / view.scale;
      computePOIs(); drawGraph(); return;
    }

    hoverPt = null;
    const w = canvas.clientWidth, h = canvas.clientHeight;
    const toPxX = x => w / 2 + (x - view.cx) * view.scale;
    const toPxY = y => h / 2 - (y - view.cy) * view.scale;

    for (const p of pois) {
      if (Math.hypot(toPxX(p.x) - mx, toPxY(p.y) - my) < 10) {
        hoverPt = { x: p.x, y: p.y, color: p.highlight || '#94a3b8', label: p.type };
        break;
      }
    }
    if (!hoverPt) {
      const wx = view.cx + (mx - w / 2) / view.scale;
      let bestDist = 16;
      expressions.forEach(ex => {
        if (!ex.visible || ex.resolvedMode !== 'explicit' || !ex.compiled) return;
        const wy = evalExplicit(ex, wx);
        if (!Number.isFinite(wy)) return;
        const d = Math.abs(toPxY(wy) - my);
        if (d < bestDist) { bestDist = d; hoverPt = { x: wx, y: wy, color: ex.color }; }
      });
    }
    drawGraph();
  });

  canvas.addEventListener('click', () => {
    if (moved || !hoverPt || !hoverPt.label) return;
    document.getElementById('gPinnedText').textContent = `${hoverPt.label}: (${hoverPt.x.toFixed(4)}, ${hoverPt.y.toFixed(4)})`;
    document.getElementById('gPinnedBadge').classList.add('show');
  });
  document.getElementById('gUnpinBtn').addEventListener('click', () => document.getElementById('gPinnedBadge').classList.remove('show'));

  canvas.addEventListener('wheel', (e) => {
    e.preventDefault();
    const rect = canvas.getBoundingClientRect(), mx = e.clientX - rect.left, my = e.clientY - rect.top;
    const w = canvas.clientWidth, h = canvas.clientHeight;
    const wx = view.cx + (mx - w / 2) / view.scale, wy = view.cy - (my - h / 2) / view.scale;
    view.scale = Math.max(5, Math.min(2500, view.scale * (e.deltaY < 0 ? 1.12 : 1 / 1.12)));
    view.cx = wx - (mx - w / 2) / view.scale;
    view.cy = wy + (my - h / 2) / view.scale;
    computePOIs(); drawGraph();
  }, { passive: false });

  let touchState = null;
  canvas.addEventListener('touchstart', (e) => {
    if (e.target !== canvas) return;
    if (e.touches.length === 1) touchState = { type: 'pan', x: e.touches[0].clientX, y: e.touches[0].clientY, cx: view.cx, cy: view.cy };
    else if (e.touches.length === 2) touchState = { type: 'pinch', dist: Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY), scale: view.scale };
  }, { passive: true });
  canvas.addEventListener('touchmove', (e) => {
    if (!touchState) return;
    e.preventDefault();
    if (touchState.type === 'pan' && e.touches.length === 1) {
      view.cx = touchState.cx - (e.touches[0].clientX - touchState.x) / view.scale;
      view.cy = touchState.cy + (e.touches[0].clientY - touchState.y) / view.scale;
      computePOIs(); drawGraph();
    } else if (touchState.type === 'pinch' && e.touches.length === 2) {
      const dist = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY);
      view.scale = Math.max(5, Math.min(2500, touchState.scale * (dist / touchState.dist)));
      computePOIs(); drawGraph();
    }
  }, { passive: false });
  canvas.addEventListener('touchend', () => { touchState = null; }, { passive: true });
  canvas.addEventListener('touchcancel', () => { touchState = null; }, { passive: true });

  document.getElementById('gZoomIn').addEventListener('click', () => { view.scale = Math.min(2500, view.scale * 1.25); computePOIs(); drawGraph(); });
  document.getElementById('gZoomOut').addEventListener('click', () => { view.scale = Math.max(5, view.scale / 1.25); computePOIs(); drawGraph(); });
  document.getElementById('gHomeBtn').addEventListener('click', () => { view = { cx: 0, cy: 0, scale: 55 }; computePOIs(); drawGraph(); });

  document.getElementById('gAddExprBtn').addEventListener('click', () => {
    expressions.push({ id: nextId++, raw: 'x^2', mode: 'auto', color: PALETTE[(nextId - 1) % PALETTE.length], visible: true, integral: false, intA: 0, intB: 2, tMin: 0, tMax: 6.283, systemId: null });
    renderExprList(); compileAll();
  });

  document.getElementById('gAddSystemBtn').addEventListener('click', () => {
    const sid = nextSysId++;
    const col = PALETTE[(sid + 1) % PALETTE.length];
    systems.push({ id: sid, visible: true, color: col });
    expressions.push(
      { id: nextId++, raw: '2*x + y <= 8', mode: 'auto', color: '#38bdf8', visible: true, integral: false, intA: 0, intB: 2, tMin: 0, tMax: 6.283, systemId: sid },
      { id: nextId++, raw: 'x + 2*y <= 8', mode: 'auto', color: '#a855f7', visible: true, integral: false, intA: 0, intB: 2, tMin: 0, tMax: 6.283, systemId: sid },
      { id: nextId++, raw: 'x >= 0', mode: 'auto', color: '#34d399', visible: true, integral: false, intA: 0, intB: 2, tMin: 0, tMax: 6.283, systemId: sid },
      { id: nextId++, raw: 'y >= 0', mode: 'auto', color: '#fbbf24', visible: true, integral: false, intA: 0, intB: 2, tMin: 0, tMax: 6.283, systemId: sid }
    );
    renderExprList(); compileAll();
  });

  const kbd = document.getElementById('gKeyboard');
  document.getElementById('gToggleKbdBtn').addEventListener('click', () => {
    kbd.style.display = kbd.style.display === 'none' ? 'grid' : 'none';
  });
  kbd.querySelectorAll('button').forEach(b => b.addEventListener('click', () => {
    const target = activeInputEl || document.querySelector('.g-expr-inp');
    if (!target) return;
    const s = target.selectionStart || target.value.length, e = target.selectionEnd || target.value.length;
    target.value = target.value.slice(0, s) + b.dataset.ins + target.value.slice(e);
    target.dispatchEvent(new Event('input')); target.focus();
  }));

  document.querySelectorAll('.g-preset').forEach(btn => btn.addEventListener('click', () => {
    const p = btn.dataset.preset;
    systems = [];
    if (p === 'wave') {
      window.loadGrapherPreset('a * sin(b * x) + c', 'auto', { a: 1, b: 2, c: 0 });
    } else if (p === 'circle') {
      window.loadGrapherPreset('x^2 + y^2 = 25', 'auto');
    } else if (p === 'piecewise') {
      window.loadGrapherPreset('sin(x) * 2 {x > -3} {x <= 3}', 'auto');
    } else if (p === 'polar') {
      window.loadGrapherPreset('2 * cos(3 * theta)', 'polar');
    } else if (p === 'sys-eq') {
      const sid = nextSysId++;
      systems = [{ id: sid, visible: true, color: '#fb7185' }];
      expressions = [
        { id: nextId++, raw: 'x^2 + y^2 = 16', mode: 'auto', color: '#38bdf8', visible: true, systemId: sid },
        { id: nextId++, raw: 'y = x^2 - 4', mode: 'auto', color: '#a855f7', visible: true, systemId: sid }
      ];
      renderExprList(); compileAll();
    } else if (p === 'sys-lp') {
      const sid = nextSysId++;
      systems = [{ id: sid, visible: true, color: '#34d399' }];
      expressions = [
        { id: nextId++, raw: '2*x + y <= 8', mode: 'auto', color: '#38bdf8', visible: true, systemId: sid },
        { id: nextId++, raw: 'x + 2*y <= 8', mode: 'auto', color: '#a855f7', visible: true, systemId: sid },
        { id: nextId++, raw: 'x >= 0', mode: 'auto', color: '#fbbf24', visible: true, systemId: sid },
        { id: nextId++, raw: 'y >= 0', mode: 'auto', color: '#fb7185', visible: true, systemId: sid }
      ];
      view = { cx: 2.5, cy: 2.5, scale: 55 };
      renderExprList(); compileAll();
    }
  }));

  window.loadGrapherPreset = function(exprStr, mode = 'auto', initParams = null) {
    systems = [];
    expressions = [{ id: nextId++, raw: exprStr, mode, color: PALETTE[0], visible: true, integral: false, intA: 0, intB: 2, tMin: 0, tMax: 6.283, systemId: null }];
    if (initParams) {
      Object.keys(initParams).forEach(k => {
        params[k] = { val: initParams[k], min: -5, max: 5, step: 0.1, play: false, dir: 1 };
      });
    }
    renderExprList(); compileAll();
  };

  window.loadGrapherMulti = function(items) {
    systems = [];
    expressions = items.map((it, idx) => ({
      id: nextId++, raw: it.raw, mode: it.mode || 'auto',
      color: it.color || PALETTE[idx % PALETTE.length],
      visible: true, integral: false, intA: 0, intB: 2, tMin: 0, tMax: 6.283, systemId: null
    }));
    renderExprList(); compileAll();
  };

  // Экспорт в PNG
  document.getElementById('gPngBtn').addEventListener('click', () => {
    const tmp = document.createElement('canvas');
    tmp.width = canvas.width; tmp.height = canvas.height;
    const tctx = tmp.getContext('2d');
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    tctx.fillStyle = isLight ? '#ffffff' : '#0b0f19';
    tctx.fillRect(0, 0, tmp.width, tmp.height);
    tctx.drawImage(canvas, 0, 0);
    const link = document.createElement('a');
    link.download = 'graph.png';
    link.href = tmp.toDataURL('image/png');
    link.click();
  });

  // Сохранение в URL и копирование ссылки
  document.getElementById('gLinkBtn').addEventListener('click', async () => {
    const payload = {
      expressions: expressions.map(e => ({
        id: e.id, raw: e.raw, mode: e.mode, color: e.color, visible: e.visible,
        integral: !!e.integral, intA: e.intA, intB: e.intB,
        tangent: !!e.tangent, tanX0: e.tanX0 ?? 1, systemId: e.systemId || null
      })),
      systems,
      params,
      view
    };
    const encoded = btoa(unescape(encodeURIComponent(JSON.stringify(payload))));
    window.location.hash = 'g=' + encoded;
    try { await navigator.clipboard.writeText(window.location.href); } catch {}
    const btn = document.getElementById('gLinkBtn');
    const old = btn.textContent;
    btn.textContent = '✓ Скопировано';
    setTimeout(() => { btn.textContent = old; }, 1600);
  });

  // Восстановление из URL при открытии по ссылке
  if (window.location.hash.startsWith('#g=')) {
    try {
      const jsonStr = decodeURIComponent(escape(atob(window.location.hash.slice(3))));
      const st = JSON.parse(jsonStr);
      if (Array.isArray(st.expressions) && st.expressions.length) {
        expressions = st.expressions;
        nextId = Math.max(1, ...expressions.map(e => e.id || 0)) + 1;
      }
      if (Array.isArray(st.systems)) {
        systems = st.systems;
        nextSysId = Math.max(1, ...systems.map(s => s.id || 0)) + 1;
      }
      if (st.params) params = st.params;
      if (st.view) view = st.view;
    } catch {}
  }

  renderExprList();
  compileAll();
};
