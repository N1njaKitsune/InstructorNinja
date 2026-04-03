/**
 * HexGrid — Ninja Learning  v4.0
 * ─────────────────────────────────────────────────────────────
 * Deployable hexagonal navigation component.
 *
 * QUICK START:
 *   const grid = createHexGrid('#myContainer', {
 *     size:    400,
 *     count:   6,
 *     theme:   'dark',
 *     navMode: 'both',
 *     hub: { label: 'Home', emoji: '🏠' },
 *     items: [
 *       { id: 'map',    label: 'Map',    emoji: '🗺',  href: '/map'    },
 *       { id: 'badges', label: 'Badges', image: '/assets/badges.jpg' },
 *       { id: 'chat',   label: 'Chat',   emoji: '💬',  disabled: true  },
 *     ],
 *     onItemClick: (item, e) => console.log('navigating to', item.id),
 *   });
 *
 * ─────────────────────────────────────────────────────────────
 * ITEM CONFIG:
 *   {
 *     id:        String   — unique identifier
 *     label:     String   — main text inside hex
 *     sublabel:  String   — smaller text below label
 *     emoji:     String   — emoji / single character icon (above label)
 *     image:     String   — image URL (fills hex, requires HTTP server)
 *     href:      String   — URL to navigate to on confirm
 *     onSelect:  fn(item, e)  — fires when item is selected
 *     onClick:   fn(item, e)  — fires when navigation is confirmed
 *     disabled:  Boolean  — non-interactive, visually dimmed
 *     active:    Boolean  — pre-selected on load
 *   }
 *
 * HUB CONFIG (config.hub):
 *   { label, sublabel, emoji, image }
 *
 * NAV MODES (config.navMode):
 *   'both'     — second click OR nav button navigates  [default]
 *   'click2'   — second click navigates, no button
 *   'button'   — nav button only, second click deselects
 *   'select'   — selection only, no navigation
 *
 * CONTROLLER:
 *   grid.setSize(px)         — resize (keeps proportions)
 *   grid.setCount(n)         — change number of items (1–6)
 *   grid.setTheme(name)      — 'dark' | 'light'
 *   grid.setNavMode(mode)    — change nav mode
 *   grid.setActive(i, bool)  — programmatic selection
 *   grid.destroy()           — remove from DOM
 *
 * ─────────────────────────────────────────────────────────────
 * GEOMETRY (fixed logical units — CSS width is the only pixel):
 *   MENU_R = 108   hub circumradius
 *   ITEM_R = 63.72 item circumradius (MENU_R × 0.59)
 *   GAP    = 51    gap between flat sides
 *
 *   Hex vertices (pointy-topped, clockwise from top):
 *     v[i] = centre + R × (cos(−90°+60°i), sin(−90°+60°i))
 *
 *   Item fill order — clockwise from upper-right:
 *     side 0  upper-right  (−60°)
 *     side 1  right          (0°)
 *     side 2  lower-right   (60°)
 *     side 3  lower-left   (120°)
 *     side 4  left          (180°)
 *     side 5  upper-left   (240°)
 * ─────────────────────────────────────────────────────────────
 */

/* ── Geometry constants ───────────────────────────────────── */
const _MENU_R = 108;
const _ITEM_R = _MENU_R * 0.59;
const _GAP    = 51;
const _S32    = Math.sqrt(3) / 2;
const _DEG    = Math.PI / 180;
const _FILL   = [0, 1, 2, 3, 4, 5];

function _hex(cx, cy, R) {
  return Array.from({ length: 6 }, (_, i) => {
    const a = (-90 + 60 * i) * _DEG;
    return { x: cx + R * Math.cos(a), y: cy + R * Math.sin(a) };
  });
}
function _normal(s) {
  const a = (-60 + 60 * s) * _DEG;
  return { dx: Math.cos(a), dy: Math.sin(a) };
}
function _itemCentre(side) {
  const d = (_MENU_R + _ITEM_R) * _S32 + _GAP;
  const n = _normal(side);
  return { x: n.dx * d, y: n.dy * d };
}
function _pts(verts) {
  return verts.map(v => `${v.x.toFixed(2)},${v.y.toFixed(2)}`).join(' ');
}

/* Pre-compute viewBox bounds for all counts (1–6) */
const _VIEWBOXES = {};
(function () {
  const PAD = 40;
  for (let count = 1; count <= 6; count++) {
    const all = [..._hex(0, 0, _MENU_R)];
    _FILL.slice(0, count).forEach(side => {
      const c = _itemCentre(side);
      _hex(c.x, c.y, _ITEM_R * 1.30).forEach(v => all.push(v));
    });
    const minX = Math.min(...all.map(v => v.x)) - PAD;
    const minY = Math.min(...all.map(v => v.y)) - PAD;
    const maxX = Math.max(...all.map(v => v.x)) + PAD;
    const maxY = Math.max(...all.map(v => v.y)) + PAD;
    _VIEWBOXES[count] = {
      x: minX, y: minY,
      w: maxX - minX,
      h: maxY - minY,
      aspect: (maxY - minY) / (maxX - minX),
    };
  }
})();


/* ── Themes ───────────────────────────────────────────────── */
const THEMES = {
  dark: {
    hubFill:    '#000000',
    hubStroke:  '#FFFFFF',
    itemFill:   '#000000',
    itemStroke: '#FFFFFF',
    textFill:   '#FFFFFF',
    selRing:    '#8B1A1A',
    dimOpacity: '0.30',
    navBtnBg:   '#FFFFFF',
    navBtnText: '#000000',
  },
  light: {
    hubFill:    '#FFFFFF',
    hubStroke:  '#000000',
    itemFill:   '#FFFFFF',
    itemStroke: '#000000',
    textFill:   '#000000',
    selRing:    '#8B1A1A',
    dimOpacity: '0.25',
    navBtnBg:   '#000000',
    navBtnText: '#FFFFFF',
  },
};


/* ── SVG helpers ──────────────────────────────────────────── */
const _NS = 'http://www.w3.org/2000/svg';
function _el(tag, attrs) {
  const e = document.createElementNS(_NS, tag);
  if (attrs) Object.entries(attrs).forEach(([k, v]) => e.setAttribute(k, v));
  return e;
}

/* Grid instance counter — ensures unique clip-path IDs */
let _gridCounter = 0;


/* ── Public API ───────────────────────────────────────────── */
function createHexGrid(container, config = {}) {
  const root = typeof container === 'string'
    ? document.querySelector(container) : container;
  if (!root) throw new Error('HexGrid: container not found');

  const _gridId = ++_gridCounter;

  /* State */
  let _size    = config.size    ?? 400;
  let _count   = Math.min(Math.max(config.count ?? 6, 1), 6);
  let _items   = config.items   ?? [];
  let _hub     = config.hub     ?? {};
  let _navMode = config.navMode ?? 'both';
  let _onGlobal = config.onItemClick ?? null;
  let _C       = THEMES[config.theme] ?? THEMES.dark;

  /* Font — inherit from parent page unless explicitly overridden.
     getComputedStyle reads whatever font-family the host app applies
     to the container, so the component blends in automatically. */
  const _font  = config.font ?? getComputedStyle(root).fontFamily ?? 'system-ui, sans-serif';

  const _selected = new Set(
    _items.map((it, i) => it.active ? i : -1).filter(i => i >= 0)
  );

  /* Container — block layout so nav button sits below the SVG, not over it */
  root.style.display = 'flex';
  root.style.flexDirection = 'column';
  root.style.alignItems = 'flex-end';
  root.style.gap = '12px';

  /* SVG */
  const svg = _el('svg');
  svg.style.display = 'block';
  svg.style.alignSelf = 'center';
  root.appendChild(svg);

  /* Nav button — sits in normal flow below SVG, aligned to the right */
  let _navTarget = null;
  const _navBtn  = document.createElement('button');
  _navBtn.style.cssText = `
    padding: 10px 20px;
    font-family: ${_font};
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    border: none;
    cursor: pointer;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s ease, transform 0.15s ease;
    min-height: 40px;
  `;
  _navBtn.addEventListener('mouseenter', () => {
    if (parseFloat(_navBtn.style.opacity) > 0)
      _navBtn.style.transform = 'scale(1.04)';
  });
  _navBtn.addEventListener('mouseleave', () => {
    _navBtn.style.transform = 'scale(1)';
  });
  _navBtn.addEventListener('click', () => {
    if (!_navTarget) return;
    if (_navTarget.onClick)  _navTarget.onClick(_navTarget);
    if (_onGlobal)           _onGlobal(_navTarget);
    if (_navTarget.href)     window.location.href = _navTarget.href;
  });
  root.appendChild(_navBtn);

  function _showNavBtn(itemCfg) {
    _navTarget            = itemCfg;
    _navBtn.textContent   = itemCfg.label ? `→  ${itemCfg.label}` : '→  Go';
    _navBtn.style.background   = _C.navBtnBg;
    _navBtn.style.color        = _C.navBtnText;
    _navBtn.style.opacity      = '1';
    _navBtn.style.pointerEvents = 'auto';
  }
  function _hideNavBtn() {
    _navTarget             = null;
    _navBtn.style.opacity  = '0';
    _navBtn.style.pointerEvents = 'none';
  }

  /* Item refs */
  const _itemRefs = [];
  let _satG = null;

  /* ── Text helpers ──────────────────────────────────────── */
  function _addText(parent, itemCfg, cx, cy, R) {
    const hasEmoji    = !!itemCfg.emoji;
    const hasLabel    = !!itemCfg.label;
    const hasSublabel = !!itemCfg.sublabel;
    const hasImage    = !!itemCfg.image;

    const tg = _el('g', { 'pointer-events': 'none' });

    /* Emoji / icon — sits above label */
    if (hasEmoji && !hasImage) {
      const emojiY = hasLabel ? cy - R * 0.18 : cy;
      const em = _el('text', {
        x: cx, y: emojiY,
        'text-anchor': 'middle',
        'dominant-baseline': 'middle',
        'font-size': R * (hasLabel ? 0.38 : 0.48),
      });
      em.textContent = itemCfg.emoji;
      tg.appendChild(em);
    }

    /* Main label */
    if (hasLabel) {
      let labelY = cy;
      if (hasEmoji && !hasImage) labelY = cy + R * 0.30;
      else if (hasSublabel)      labelY = cy - R * 0.14;

      const lbl = _el('text', {
        x: cx, y: labelY,
        'text-anchor': 'middle',
        'dominant-baseline': 'middle',
        'font-size': R * 0.22,
        'font-family': _font,
        'font-weight': '600',
        'letter-spacing': '0.03em',
        fill: hasImage ? '#FFFFFF' : _C.textFill,
      });
      /* Drop shadow when over image */
      if (hasImage) lbl.setAttribute('filter', `url(#hg-${_gridId}-textshadow)`);
      lbl.textContent = itemCfg.label;
      tg.appendChild(lbl);
    }

    /* Sublabel */
    if (hasSublabel) {
      const sub = _el('text', {
        x: cx, y: cy + R * 0.10,
        'text-anchor': 'middle',
        'dominant-baseline': 'middle',
        'font-size': R * 0.16,
        'font-family': _font,
        'font-weight': '400',
        fill: hasImage ? 'rgba(255,255,255,0.8)' : _C.textFill,
        opacity: hasImage ? '1' : '0.55',
      });
      sub.textContent = itemCfg.sublabel;
      tg.appendChild(sub);
    }

    parent.appendChild(tg);
  }

  /* ── Render ───────────────────────────────────────────── */
  function _render() {
    svg.innerHTML = '';
    _itemRefs.length = 0;
    _satG = null;

    const vb = _VIEWBOXES[_count];
    svg.setAttribute('viewBox', `${vb.x} ${vb.y} ${vb.w} ${vb.h}`);
    svg.style.width  = _size + 'px';
    svg.style.height = Math.round(_size * vb.aspect) + 'px';

    /* Defs — clip paths + text shadow filter */
    const defs = _el('defs');

    /* Text-over-image drop shadow */
    const flt = _el('filter', { id: `hg-${_gridId}-textshadow`, x: '-20%', y: '-20%', width: '140%', height: '140%' });
    const fe  = _el('feDropShadow', { dx: '0', dy: '0', stdDeviation: '2', 'flood-color': '#000', 'flood-opacity': '0.8' });
    flt.appendChild(fe);
    defs.appendChild(flt);

    svg.appendChild(defs);

    /* ── Satellites ── */
    const satG = _el('g');
    _satG = satG;

    _FILL.slice(0, _count).forEach((side, i) => {
      const itemCfg  = _items[i] ?? {};
      const selected = _selected.has(i);
      const c        = _itemCentre(side);
      const verts    = _hex(c.x, c.y, _ITEM_R);
      const outerV   = _hex(c.x, c.y, _ITEM_R * 1.153);
      const ringV    = _hex(c.x, c.y, _ITEM_R * 1.30);
      const clipId   = `hg-${_gridId}-item-${i}`;

      /* Clip path for image */
      const cp = _el('clipPath', { id: clipId });
      cp.appendChild(_el('polygon', { points: _pts(verts) }));
      defs.appendChild(cp);

      const g = _el('g');
      g.style.cssText = 'cursor:pointer; transition: opacity 0.2s ease;';
      if (itemCfg.disabled) {
        g.style.opacity = '0.3';
        g.style.pointerEvents = 'none';
      }

      /* Selection ring */
      const ringEl = _el('polygon', {
        points:           _pts(ringV),
        fill:             'none',
        stroke:           _C.selRing,
        'stroke-width':   '8',
        'stroke-opacity': selected ? '1' : '0',
        style:            'transition: stroke-opacity 0.3s ease',
      });
      g.appendChild(ringEl);

      /* Outer border ring */
      g.appendChild(_el('polygon', {
        points:         _pts(outerV),
        fill:           'none',
        stroke:         _C.itemStroke,
        'stroke-width': '0.75',
      }));

      /* Face */
      g.appendChild(_el('polygon', {
        points:         _pts(verts),
        fill:           _C.itemFill,
        stroke:         _C.itemStroke,
        'stroke-width': '3',
      }));

      /* Image (clipped to face) */
      if (itemCfg.image) {
        const imgEl = _el('image', {
          href:                  itemCfg.image,
          x:                     c.x - _ITEM_R,
          y:                     c.y - _ITEM_R,
          width:                 _ITEM_R * 2,
          height:                _ITEM_R * 2,
          'clip-path':           `url(#${clipId})`,
          preserveAspectRatio:   'xMidYMid slice',
          'pointer-events':      'none',
        });
        g.appendChild(imgEl);
      }

      /* Text / emoji */
      _addText(g, itemCfg, c.x, c.y, _ITEM_R);

      /* Hit area (on top) */
      const hitEl = _el('polygon', { points: _pts(verts), fill: 'transparent' });

      hitEl.addEventListener('click', e => {
        if (itemCfg.disabled) return;
        const wasSelected = _selected.has(i);

        /* Second-click navigation */
        if (wasSelected && (_navMode === 'click2' || _navMode === 'both')) {
          if (itemCfg.onClick) itemCfg.onClick(itemCfg, e);
          if (_onGlobal)       _onGlobal(itemCfg, e);
          if (itemCfg.href)    window.location.href = itemCfg.href;
          return;
        }

        /* Clear previous selection */
        _selected.clear();
        _itemRefs.forEach(ref => ref.ringEl.setAttribute('stroke-opacity', '0'));
        _hideNavBtn();

        if (!wasSelected) {
          /* Select this item */
          _selected.add(i);
          ringEl.setAttribute('stroke-opacity', '1');

          /* Show nav button if mode uses it */
          if (_navMode === 'button' || _navMode === 'both') _showNavBtn(itemCfg);

          if (itemCfg.onSelect) itemCfg.onSelect(itemCfg, e);
        }

        /* Dim non-selected */
        Array.from(satG.children).forEach((s, si) => {
          s.style.opacity = _selected.size === 0 || _selected.has(si) ? '1' : _C.dimOpacity;
        });
      });

      g.appendChild(hitEl);
      satG.appendChild(g);
      _itemRefs.push({ ringEl, item: itemCfg, index: i });
    });

    svg.appendChild(satG);

    /* ── Hub ── */
    const hubClipId = `hg-${_gridId}-hub`;
    const hubCp     = _el('clipPath', { id: hubClipId });
    hubCp.appendChild(_el('polygon', { points: _pts(_hex(0, 0, _MENU_R)) }));
    defs.appendChild(hubCp);

    const hubG = _el('g');

    /* Outer ring */
    hubG.appendChild(_el('polygon', {
      points:         _pts(_hex(0, 0, _MENU_R * 1.09)),
      fill:           'none',
      stroke:         _C.hubStroke,
      'stroke-width': '0.75',
    }));

    /* Face */
    hubG.appendChild(_el('polygon', {
      points:         _pts(_hex(0, 0, _MENU_R)),
      fill:           _C.hubFill,
      stroke:         _C.hubStroke,
      'stroke-width': '4.5',
    }));

    /* Hub image */
    if (_hub.image) {
      hubG.appendChild(_el('image', {
        href:                _hub.image,
        x:                   -_MENU_R,
        y:                   -_MENU_R,
        width:               _MENU_R * 2,
        height:              _MENU_R * 2,
        'clip-path':         `url(#${hubClipId})`,
        preserveAspectRatio: 'xMidYMid slice',
        'pointer-events':    'none',
      }));
    }

    /* Hub text */
    _addText(hubG, _hub, 0, 0, _MENU_R);

    svg.appendChild(hubG);

    /* Restore nav button theme colours on re-render */
    _navBtn.style.background = _C.navBtnBg;
    _navBtn.style.color      = _C.navBtnText;
  }

  _render();

  /* ── Controller ── */
  return {
    setSize(px) {
      _size = px;
      const vb = _VIEWBOXES[_count];
      svg.style.width  = _size + 'px';
      svg.style.height = Math.round(_size * vb.aspect) + 'px';
    },

    setCount(n) {
      _count = Math.min(Math.max(n, 1), 6);
      _selected.clear();
      _hideNavBtn();
      _render();
    },

    setTheme(themeName) {
      _C = THEMES[themeName] ?? THEMES.dark;
      _render();
    },

    setNavMode(mode) {
      _navMode = mode;
      _hideNavBtn();
    },

    setActive(index, active) {
      const ref = _itemRefs[index];
      if (!ref) return;
      if (active) {
        _selected.add(index);
        ref.ringEl.setAttribute('stroke-opacity', '1');
      } else {
        _selected.delete(index);
        ref.ringEl.setAttribute('stroke-opacity', '0');
      }
      if (_satG) {
        Array.from(_satG.children).forEach((s, si) => {
          s.style.opacity = _selected.size === 0 || _selected.has(si) ? '1' : _C.dimOpacity;
        });
      }
    },

    destroy() {
      root.removeChild(svg);
      root.removeChild(_navBtn);
    },
  };
}
