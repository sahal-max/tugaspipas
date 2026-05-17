# Website 3D Treatment — Design Spec

**Date:** 2026-05-15
**Project:** Jaringan Telekomunikasi Indonesia
**Approach:** CSS 3D transforms + parallax via framer-motion (no WebGL, no new dependencies)

## Goal

Transform the entire website from flat 2D into a depth-rich, 3D-feeling experience while preserving readability, accessibility, and performance. Apply "bold" intensity (tilt 14–18°, parallax 50–80px, near perspective 700px) consistent with the existing dark/Raycast-inspired aesthetic.

## Decisions Already Made

- **Engine:** framer-motion only (already installed). No `react-three-fiber`, no `react-parallax-tilt`.
- **Effect type:** CSS 3D transforms + parallax (not WebGL).
- **Scope:** All areas — hero, cards, sections, nav, page transitions, topic visuals.
- **Interaction model:** Mouse-tracked on interactive elements (cards, nav links). Scroll-driven on hero, sections, visuals.
- **Intensity:** Bold (tilt 14–18°, parallax 50–80px, perspective 700–1400px).

## Architecture

### New files

`src/hooks/`
- `useMouseTilt.js` — pointer-driven tilt. Returns `{ ref, style }` with motion-value transforms (rotateX, rotateY, perspective). Uses `useMotionValue` + `useSpring` (stiffness 200, damping 25). Reset on pointerleave. No-op when `(hover: hover)` is false or `useReducedMotion()` is true.
- `useScrollTilt.js` — scroll-driven tilt + parallax. Wraps `useScroll({ target, offset: ["start end", "end start"] })`. Returns motion values for `rotateX`, `translateY`, `translateZ`, `opacity` mapped via `useTransform`. No-op when `useReducedMotion()` is true.
- `useReducedMotion3D.js` — wrapper around framer-motion's `useReducedMotion`. Used by all 3D hooks/components.

`src/components/effects/`
- `Tilt3D.jsx` — declarative wrapper for `useMouseTilt`. Props: `intensity` (degrees), `perspective` (px), `glare` (boolean). Renders `motion.div` + optional glare overlay (radial-gradient that follows pointer).
- `ParallaxLayer.jsx` — declarative wrapper for `useScrollTilt`. Props: `depth` (-1..1), `tilt` (boolean — adds rotateX entry/exit), `entry` (boolean — one-shot in-view animation vs continuous).
- `PageTransition.jsx` — wraps children in `AnimatePresence mode="wait"` + `motion.div` keyed by `useLocation().pathname`. Exit/enter transforms with rotateX + translateZ.

### Modified files

- [src/styles/tokens.css](src/styles/tokens.css) — add 3D intensity tokens.
- [src/components/sections/Hero.jsx](src/components/sections/Hero.jsx) — wrap map, title, lede, cta in `<ParallaxLayer>` with different depth values.
- [src/components/ui/Card.jsx](src/components/ui/Card.jsx) — wrap content in `<Tilt3D>` (default on, `flat` prop to opt out).
- [src/components/sections/ContentSection.jsx](src/components/sections/ContentSection.jsx) — root wrapped in `<ParallaxLayer entry tilt>` for in-view animation.
- [src/components/sections/TopicVisuals.jsx](src/components/sections/TopicVisuals.jsx) — split each visual into 2–3 depth layers via `<ParallaxLayer>`, add gentle mouse tilt (intensity 8).
- [src/components/layout/Nav.jsx](src/components/layout/Nav.jsx) — perspective on nav, hover lift on links (rotateX -8°, translateZ 8px), gentle always-on tilt on logo.
- [src/App.jsx](src/App.jsx) — wrap `<Routes>` in `<PageTransition>`.

### Unchanged

Routing, data files (`content.js`, `cities.json`, `arcs.json`), build config, dependencies, page structure, footer, NotFound page interior.

## Data Flow

All animation values are framer-motion **motion values**, not React state. This avoids re-renders during 60fps mouse/scroll input.

### Mouse tilt

```
pointermove → x, y relative to element center (-0.5..0.5)
  → useMotionValue(rawX), useMotionValue(rawY)
  → useTransform → rotateY = rawX * intensity, rotateX = -rawY * intensity
  → useSpring (stiffness 200, damping 25)
  → consumed by motion.div transform
pointerleave → animate rawX, rawY back to 0
```

### Scroll tilt

```
useScroll({ target: ref, offset: ["start end", "end start"] })
  → progress motion value (0 = bottom enters viewport, 1 = top exits)
  → useTransform → rotateX, translateY, translateZ, opacity (curves per use case)
  → consumed by motion.div
```

Hero map example: `rotateX = [18, 0, -12]` at progress `[0, 0.5, 1]`. Settles to flat at center of viewport (reading position).

### Parallax depth mapping

`<ParallaxLayer depth={d}>`:
- `d = -1` → translateZ -200px (farther), parallax factor 0.5 (slower)
- `d = 0` → no Z, no parallax (anchor)
- `d = +1` → translateZ +200px (closer), parallax factor 1.5 (faster)

Hero example: map `depth={-0.6}`, title `depth={0.2}`, lede `depth={0.4}`.

### Page transitions

```
location.pathname changes
  → AnimatePresence mode="wait" detects key change
  → exit:  rotateX -8°, translateZ -400px, opacity 0  (0.35s)
  → enter: rotateX 12° → 0, translateZ 400px → 0, opacity 0 → 1  (0.45s spring)
  → ScrollToTop runs in parallel (existing behavior preserved)
```

## CSS Tokens

Add to [src/styles/tokens.css](src/styles/tokens.css):

```css
--tilt-card: 14deg;
--tilt-hero: 18deg;
--tilt-section: 10deg;
--parallax-strong: 80px;
--parallax-medium: 50px;
--perspective-near: 700px;
--perspective-far: 1400px;
```

Hooks read tokens via `getComputedStyle` at mount, so tuning happens in CSS.

## Per-Area Treatment

### Hero
- Container: `perspective: var(--perspective-near)`, `transform-style: preserve-3d`.
- `hero__map-bg`: `<ParallaxLayer depth={-0.6} tilt>`. RotateX 18° → 0 → -12° across scroll. Scale 1.05 → 1.
- `hero__title`: `<ParallaxLayer depth={0.2}>`. Slight forward parallax, opacity fade out.
- `hero__lede` & `hero__cta`: `<ParallaxLayer depth={0.4}>`. Faster parallax, fade earlier.
- AnimatedArcs unchanged — now visually float on a tilted map surface.

### Topic cards (Home)
- Each Card wrapped `<Tilt3D intensity={14} perspective={700} glare>`.
- Glare = radial-gradient overlay tracking pointer position (subtle reflective sheen).
- Hover lift: translateZ 30px + dynamic shadow offset matching tilt direction.
- Stagger entry on viewport enter: rotateX 25° → 0, 80ms delay between cards.

### Section transitions (topic pages)
- ContentSection root: `<ParallaxLayer entry tilt>`. On in-view: rotateX 12° → 0, translateY 60 → 0, opacity 0 → 1, 0.7s spring.
- Visuals inside section: continuous parallax `depth={-0.3}` (not one-shot).

### Nav
- Container: `perspective: 1000px`, `z-index: 100`, `transform: translateZ(0)` (own stacking context).
- Link hover: rotateX -8°, translateZ 8px, underline glow.
- Logo: `<Tilt3D intensity={6}>` (gentle, always-on).
- Box-shadow intensifies as user scrolls (existing scroll listener can be reused or added).

### Page transitions
- App.jsx wraps `<Routes>` in `<PageTransition>`.
- Exit: rotateX -8°, translateZ -400px, opacity 0 (0.35s).
- Enter: rotateX 12° → 0, translateZ 400px → 0, opacity 0 → 1 (0.45s spring).
- ScrollToTop continues to run on route change. Because `AnimatePresence mode="wait"` defers mount of the new page until the old page exits, scroll reset fires when the new page mounts — it does not interfere with the exit animation.

### TopicVisuals
- Wrapper per visual: `perspective`, `transform-style: preserve-3d`.
- Each SVG visual split into 2–3 depth groups (background grid → mid elements → foreground accent), each in `<ParallaxLayer>` with depth -0.5, 0, 0.5.
- Gentle mouse tilt (intensity 8) — calmer than cards because visuals are denser.
- In-view entry tilt similar to ContentSection.

### Skipped
- Footer, NotFound interior — minimal value, would feel noisy.

## Performance

- Motion values bypass React re-renders for transforms.
- `will-change: transform` applied conditionally (during active mouse tilt or in-viewport via IntersectionObserver), removed when idle.
- `useScroll` uses element-relative offsets — framer-motion throttles via rAF natively.
- `pointermove` listeners attached at element level, not window — fewer events.
- `AnimatePresence mode="wait"` prevents two 3D pages rendering simultaneously.
- TopicVisuals layer split happens only when visual enters viewport.

## Accessibility

- `useReducedMotion3D()` checks framer-motion's `useReducedMotion`. When true: tilt = 0, parallax depth = 0, page transitions become simple fade only. Layout and content unchanged.
- Focus indicators (`outline`) survive transforms — outline is rendered outside transform pipeline.
- Hover-only effects don't block keyboard activation. Cards remain focusable and Enter-clickable.
- Scroll-driven tilt resolves to 0° at viewport center (the natural reading position) — text isn't tilted while being read.

## Edge Cases

- **Z-fighting / clipping** — Sections with forward parallax could collide with nav. Nav has `z-index: 100` + own stacking context.
- **Mobile / touch** — `useMouseTilt` no-ops when `(hover: hover) and (pointer: fine)` is false. Scroll-driven effects remain active.
- **Safari preserve-3d quirks** — wrapper sets `overflow: visible` at perspective parent; content doesn't clip.
- **AnimatePresence + nested in-view animations** — section entries use `whileInView` (scroll-triggered) not `initial/animate` (mount-triggered). No conflict with page transition.
- **NotFound** — receives page transition (wrap covers all routes); interior content stays flat. Consistent.
- **Low-end devices** — no explicit detection (unreliable on web). Out of scope; reduced-motion preference is the user's escape hatch.

## Testing

Manual verification:
- Dev server, golden path each page (Home → all 5 topic pages → 404).
- Hover every card on Home; verify tilt + glare + lift.
- Scroll each topic page; verify section entries, visual parallax, hero scroll-out.
- Navigate between routes; verify page transition runs and ScrollToTop fires.
- Toggle OS `prefers-reduced-motion`; confirm all 3D effects flatten.
- Browsers: Chrome, Firefox, Safari (Safari is most prone to preserve-3d clipping bugs).
- Touch device or Chrome devtools touch emulation: confirm no broken hover state.

## Out of Scope

- WebGL / Three.js
- Additional 3D libraries
- 3D skeleton loaders
- Sound or haptic feedback
- Custom cursor
- Footer / NotFound interior 3D
- New routes, new content, new data
- Performance auto-throttling on low-end devices

## File Touch List

New:
- `src/hooks/useMouseTilt.js`
- `src/hooks/useScrollTilt.js`
- `src/hooks/useReducedMotion3D.js`
- `src/components/effects/Tilt3D.jsx`
- `src/components/effects/Tilt3D.css`
- `src/components/effects/ParallaxLayer.jsx`
- `src/components/effects/PageTransition.jsx`

Modified:
- `src/styles/tokens.css`
- `src/App.jsx`
- `src/components/layout/Nav.jsx` + `Nav.css`
- `src/components/sections/Hero.jsx` + `Hero.css`
- `src/components/sections/ContentSection.jsx` + `ContentSection.css`
- `src/components/sections/TopicVisuals.jsx` + `TopicVisuals.css`
- `src/components/ui/Card.jsx` + `Card.css`
