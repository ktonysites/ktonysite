# Tony Ken Portfolio — Design Direction

## Three stylistic approaches

### Theme Name: Signal / Surface
Very editorial and tactile: warm paper, ink-black structure, digital-lime highlights, and a precise interface language inspired by studios, systems diagrams, and printed technical journals.
**Probability:** 0.06

### Theme Name: Midnight Protocol
A cinematic dark portfolio with deep navy surfaces, mineral blue, and restrained orange signal markers; designed around security, trust, and high-contrast motion.
**Probability:** 0.03

### Theme Name: Soft Systems
A light, airy portfolio using fog white, muted graphite, and sea-glass green, with gentle cards and a calm systems-thinking tone.
**Probability:** 0.08

## Chosen approach: Signal / Surface

### Design Movement
Neo-editorial digital design with industrial graphic design references: Swiss grid discipline loosened with asymmetry, index-card labeling, oversized typography, and tactile paper-like depth.

### Core Principles
1. **Make the system visible.** Every major section should feel like a labeled, navigable part of a designed system rather than a generic landing page.
2. **Contrast precision with warmth.** Pair crisp technical details with human, direct writing and soft material cues.
3. **Use asymmetry as hierarchy.** Offset columns, side labels, long rule lines, and deliberate white space should guide the eye.
4. **Let interaction feel physical.** Hover states should shift, reveal, or track like a well-made instrument—not shout with effects.

### Color Philosophy
The base is a warm bone paper (`#F1EEE7`) so the portfolio feels considered and editorial rather than like a default SaaS dashboard. Ink black (`#111210`) provides confidence and maximum readability. Signal lime (`#D7FF45`) is the ownable accent: it behaves like a highlighted line in a technical drawing, reserved for active states, key metrics, and calls to action. Steel blue (`#496B78`) supports depth without drifting into neon or predictable purple.

### Layout Paradigm
A full-bleed editorial canvas with a narrow utility rail on desktop, oversized left-aligned headline blocks, and content that enters from the side rather than stacking as centered cards. The hero uses a 7/5 split: type and action on the left, a generated abstract systems object on the right. Sections use offset project rows, wide dividers, and deliberate vertical rhythm.

### Signature Elements
- A small lime **signal dot** and blinking status line used as a live availability motif.
- Monospaced section indexes (`01 / PROFILE`, `02 / SELECTED WORK`) paired with long hairline rules.
- Technical annotation chips and crosshair corner marks around featured project visuals.

### Interaction Philosophy
Interactions should clarify structure: navigation highlights the current section, project cards reveal a second layer of metadata, and buttons use a short press response. The page should reward exploration with subtle motion and hover previews, while remaining fully usable with keyboard navigation and reduced-motion preferences.

### Animation
Use a quick 180–260ms ease-out for hover and reveal states. Hero elements enter with a staggered side-to-side translation and opacity reveal; the decorative system lines drift slowly only when motion is allowed. Project cards lift by a few pixels and rotate their image treatment by a degree or two on hover. Avoid constant motion, bounce, and excessive scale. Preserve `prefers-reduced-motion` by disabling ambient animation and keeping state changes immediate.

### Typography System
Use **Space Grotesk** for display and UI hierarchy: confident, geometric, and contemporary without feeling like a template. Use **DM Mono** for labels, metadata, numbers, and technical annotations. Headlines use tight tracking, 700–800 weight, and compact line-height; body copy is 16–18px with generous line-height; all-caps metadata uses 0.12em tracking.

### Brand Essence
Tony Ken is a web developer and modern designer who turns complex digital and security needs into clear, high-performing interfaces for people who care about both craft and resilience.

**Personality:** Precise. Curious. Uncompromising.

### Brand Voice
Headlines are direct, specific, and slightly editorial. CTAs are action-led without hype. Microcopy is calm, useful, and technically literate.

Example headline: “Interfaces with a signal.”

Example CTA: “See how I build.”

### Wordmark & Logo
Use a compact `TK` monogram built from two interlocking angled strokes, placed inside a small open square frame. The mark should read as both initials and a connection diagram; no default text wordmark is needed in the logo asset.

### Signature Brand Color
**Signal Lime — `#D7FF45`**

## Content decisions for first version

The page will present Tony as a hybrid of builder, designer, and security-minded technologist. It will include a compact navigation, hero statement, capability strip, profile section, selected work with three case-study-style project cards, credentials section for CCNA and cybersecurity, an interactive process timeline, and a strong contact footer. Project names are framed as capability-led examples so the user can replace them with verified client work later without redesigning the layout.

## Style Decisions

- Keep all main text on solid or clearly controlled surfaces; no low-contrast text over unpredictable imagery.
- Treat lime as a signal, not a fill color for every component.
- Prefer editorial offset layouts over repeated centered card grids.
- Use the generated systems visual only for the hero, with separate generated visuals for project cards and a transparent monogram for brand continuity.

## Style Decisions

- The `TK` mark is an interlocking angled-stroke monogram inside an open square frame and recurs as a watermark or system stamp across the page.
- Signal Lime `#D7FF45` stays an active signal for CTAs, status dots, keywords, rules, nodes, and metrics; it is not used as a broad background surface.
- Selected-work visuals use a consistent technical-diagram language with system-map geometry, lime nodes, crosshair corners, and metadata overlays.
- Utility-rail cues continue through the middle sections using coordinate markers, offset labels, and long divider logic.
