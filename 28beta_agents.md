# 🧠 agents.md — Project Memory: Academia Vioniko Landing Page

> Auto-generated project knowledge file. Keep this updated as the project evolves.

---

## 📌 Project Overview

| Field | Value |
|---|---|
| **Project name** | `academia-vioniko-landing` |
| **Version** | `0.1.0` |
| **Purpose** | Marketing landing page for "Academia Vioniko" — a Spanish-language AI education program |
| **Language** | Spanish (es) |
| **Target audience** | Spanish-speaking creators, entrepreneurs, and professionals who want to learn AI practically |
| **Theme** | Dark, glowing cyberpunk/tech — heavy use of violet, cyan, lime, and deep navy |

---

## 🛠️ Tech Stack

### Core Framework
| Tech | Version | Role |
|---|---|---|
| **Next.js** | `^16.3.1` | Full-stack React framework (App Router) |
| **React** | `^19.2.8` | UI library |
| **React DOM** | `^19.2.8` | DOM rendering |
| **TypeScript** | `5.6.3` | Static typing |

### Styling
| Tech | Version | Role |
|---|---|---|
| **Tailwind CSS** | `3.4.15` | Utility-first CSS framework |
| **PostCSS** | `^8.5.26` | CSS transformation pipeline |
| **Autoprefixer** | `10.4.20` | CSS vendor prefix automation |

### Tooling & DX
| Tech | Version | Role |
|---|---|---|
| **ESLint** | `^9.39.5` | JavaScript/TypeScript linting |
| **eslint-config-next** | `^16.3.1` | Next.js opinionated ESLint rules |
| **TypeScript types** | `@types/node`, `@types/react`, `@types/react-dom` | Type definitions |

### No external component libraries — all UI is hand-crafted with Tailwind CSS.

---

## 🏗️ Architecture & Project Structure

```
vioniko/
├── app/                        # Next.js App Router root
│   ├── layout.tsx              # Root layout — metadata, viewport, global CSS import
│   ├── page.tsx                # Entry route "/" — renders <LandingPage />
│   ├── globals.css             # Global CSS (Tailwind directives + custom animations)
│   └── videos/                 # (unused app-level videos folder)
│
├── components/
│   └── landing/                # All UI components (single-page landing)
│       ├── LandingPage.tsx     # 🎯 Master component — all page sections assembled here
│       ├── Header.tsx          # Fixed sticky nav with scroll-aware glassmorphism
│       ├── CTAButton.tsx       # Reusable CTA link-button (3 variants)
│       ├── FAQAccordion.tsx    # Native <details>/<summary> accordion, grouped
│       ├── FeatureCard.tsx     # Card wrapper with tone-based border colors
│       ├── GradientText.tsx    # Inline gradient text span (brand gradient)
│       ├── MethodCard.tsx      # Numbered methodology step card
│       ├── ModuleCard.tsx      # Course module card (number, title, details, result)
│       ├── Reveal.tsx          # Scroll-triggered fade+slide animation (IntersectionObserver)
│       ├── SectionHeading.tsx  # Reusable section heading (eyebrow, title, gradient, subtitle)
│       ├── VideoCard.tsx       # Video demo card with VideoPreview + VideoModal
│       └── VideoPlaceholder.tsx # Fallback UI when video file is absent
│
├── logos/
│   ├── logo_chico.png          # Small logo — used in Header nav
│   └── logo_grande.png         # Large logo — used in Hero section
│
├── videos/                     # Static MP4 assets served as public files
│   ├── General_Horizontalv1.mp4         (~278 MB) Main hero video
│   ├── creacion-de-contenido-escritura-guiada.mp4
│   ├── generacion-de-imagenes.mp4
│   ├── video-con-ia.mp4
│   ├── asistentes-ia.mp4
│   ├── keyword-research.mp4
│   └── biblioteca-de-prompts.mp4
│
├── next.config.mjs             # Next.js config — video file tracing included
├── tailwind.config.ts          # Custom design tokens (colors, shadows, gradients)
├── tsconfig.json               # TypeScript config with `@/` path alias
├── postcss.config.mjs          # PostCSS with tailwindcss + autoprefixer
├── eslint.config.mjs           # ESLint flat config
└── package.json                # Project metadata and scripts
```

---

## 🎨 Design System (Tailwind Custom Tokens)

### Custom Colors
| Token | Hex | Use |
|---|---|---|
| `ink` | `#030711` | Primary background (near-black navy) |
| `midnight` | `#050816` | Deeper background |
| `panel` | `#081120` | Card/panel background |
| `panelSoft` | `#0b1628` | Softer panel background |
| `mist` | `#b8c7dc` | Body text (soft blue-grey) |
| `violetGlow` | `#8b5cf6` | Violet accent / borders / glow |
| `cyanGlow` | `#22d3ee` | Cyan accent / interactive elements |
| `limeGlow` | `#a3e635` | Lime accent / success / checkmarks |

### Custom Shadows
| Token | Value |
|---|---|
| `shadow-glow` | `0 0 36px rgba(139, 92, 246, 0.22)` — violet ambient glow |
| `shadow-cyan` | `0 0 28px rgba(34, 211, 238, 0.16)` — cyan ambient glow |

### Brand Gradient
```
vioniko-gradient: linear-gradient(115deg, #60a5fa 0%, #22d3ee 24%, #a3e635 48%, #8b5cf6 78%, #38bdf8 100%)
```
Used on primary CTA buttons and gradient text accents.

### Typography
- **Font family**: Inter (system fallback stack)
- **Style**: Uppercase, heavy (`font-black`) headings — aggressive, energetic feel
- **Body**: `text-mist` (`#b8c7dc`) for readability against dark backgrounds

---

## 📐 Page Sections (in order)

| # | Section ID | Description |
|---|---|---|
| 1 | `#inicio` | **Hero** — Logo, headline, hero visual, dual CTA buttons |
| 2 | *(none)* | **Main Video Preview** — General intro video with click-to-open modal |
| 3 | `#academia` | **Today vs After** — Comparison cards (red "Today" / cyan "After") |
| 4 | *(none)* | **Is it for you?** — "Para ti / No es para ti" feature cards with checklists |
| 5 | `#clase-gratis` | **Free Class CTA** — Sign-up panel with 4 steps list |
| 6 | `#programa` | **10 Course Modules** — ModuleCard grid with number, title, details, result |
| 7 | *(none)* | **Demo Videos** — 6 VideoCard items showcasing what students will learn |
| 8 | *(none)* | **Final Project** — Chip tags + motivational copy |
| 9 | `#metodologia` | **Methodology** — 3 MethodCards explaining the learning approach |
| 10 | `#chatvioniko` | **ChatVioniko** — Platform features list |
| 11 | *(none)* | **What's Included** — 6 includes items (classes, materials, community, etc.) |
| 12 | *(none)* | **Certificate** — Skills certified list |
| 13 | *(none)* | **Pricing** — Plan details (price TBD) |
| 14 | `#preguntas` | **FAQ Accordion** — 6 groups, ~27 Q&As using native `<details>` |
| 15 | `#inscripcion` | **Final CTA / Inscription** — Bottom call to action |
| *(footer)* | *(none)* | **Footer** — Copyright + nav links |

---

## 🧩 Component Reference

### `LandingPage.tsx`
- The **single master component** that assembles all sections
- Contains all static data arrays: `modules`, `demoVideos`, `faqGroups`, `includes`, `pricingItems`, etc.
- Uses internal helper components: `CheckList`, `HeroSystemVisual`, `Section`
- Purely a **Server Component** (no `"use client"` directive)

### `Header.tsx` — `"use client"`
- Fixed top navbar with scroll detection (`window.scrollY > 12`)
- Transparent → `bg-ink/90 backdrop-blur-xl` on scroll
- Hamburger menu for mobile (animated icon ↔ X)
- Nav items: Academia, Programa, Metodología, ChatVioniko, Preguntas

### `Reveal.tsx` — `"use client"`
- Wraps any content with a **scroll-triggered fade-in + slide-up animation**
- Uses `IntersectionObserver` API (native, no library)
- CSS class `.reveal` / `.reveal.is-visible` defined in `globals.css`
- Once visible, observer disconnects (fire-once)

### `VideoCard.tsx` + `VideoPreview.tsx` + `VideoModal` — `"use client"`
- `VideoCard`: article wrapper with title, preview thumbnail, description
- `VideoPreview`: clickable `<video>` thumbnail that opens `VideoModal`
- `VideoModal`: accessible full-screen dialog with focus trap, Escape key, scroll lock
- Falls back to `VideoPlaceholder` if `videoSrc` is not provided

### `CTAButton.tsx`
- Uses Next.js `<Link>` for anchor hash navigation
- 3 variants: `primary` (brand gradient), `secondary` (cyan outline), `ghost` (white/10 outline)
- Full accessible focus rings

### `FAQAccordion.tsx`
- Uses native HTML `<details>` / `<summary>` — **no JavaScript** needed
- Groups of questions with a CSS `group-open:rotate-45` + indicator

### `SectionHeading.tsx`
- Reusable heading block: optional eyebrow label, title, gradient suffix, subtitle
- Default centered, optional left-aligned

### `GradientText.tsx`
- Inline `<span>` applying `bg-vioniko-gradient bg-clip-text text-transparent`

### `FeatureCard.tsx`
- Card with title and tone-colored top border: `lime` | `violet`

### `ModuleCard.tsx`
- Displays module number, title, description, details text, result text
- Border color cycles between `cyanGlow` and `violetGlow` based on index parity

### `MethodCard.tsx`
- Simple card with index number, title, description

### `VideoPlaceholder.tsx`
- Fallback when no video file exists — dashed border placeholder with label

---

## 📋 Course Content (10 Modules)

| # | Module | Topic |
|---|---|---|
| 01 | Fundamentos | ChatVioniko platform, models, context, prompts |
| 02 | Productividad e investigación | Research, analysis, documents, organization |
| 03 | Contenido | Ideas, scripts, posts, planning, repurposing |
| 04 | Imágenes con IA | Visual prompts, styles, editing, graphic assets |
| 05 | Video con IA | Generation, editing, audiovisual content |
| 06 | Asistentes y agentes IA | Specialized AI assistants for specific tasks |
| 07 | Automatización | Workflows, triggers, integrations |
| 08 | Sistemas 24/7 | Continuous automated systems |
| 09 | Tráfico y campañas | AI for marketing, campaigns, growth |
| 10 | Monetización | Services, products, professional applications |

---

## 🎬 Video Assets & Hosting

All 7 videos are hosted on Amazon S3 (`https://chatvk.s3.us-west-2.amazonaws.com/`):

| Section / Card | Amazon S3 Video URL |
|---|---|
| Hero ("Mira lo que vas a aprender") | `https://chatvk.s3.us-west-2.amazonaws.com/General_Horizontalv1.mp4` |
| Creación de contenido | `https://chatvk.s3.us-west-2.amazonaws.com/creacion-de-contenido-escritura-guiada.mp4` |
| Generación de imágenes | `https://chatvk.s3.us-west-2.amazonaws.com/generacion-de-imagenes.mp4` |
| Video con IA | `https://chatvk.s3.us-west-2.amazonaws.com/video-con-ia.mp4` |
| Asistentes IA | `https://chatvk.s3.us-west-2.amazonaws.com/asistentes-ia.mp4` |
| Keyword research | `https://chatvk.s3.us-west-2.amazonaws.com/keyword-research.mp4` |
| Biblioteca de prompts | `https://chatvk.s3.us-west-2.amazonaws.com/biblioteca-de-prompts.mp4` |

> **iOS Safari & Cache Busting Specs:**
> - Video tags use `#t=0.001`, `webkit-playsinline`, and `preload="auto"` to fix blank thumbnails on iPhone.
> - `script.js` handles user-gesture `modalVideo.play()` for iOS Safari compatibility.
> - `index.html` uses cache-busting version tags (e.g. `style.css?v=1.0.2`, `script.js?v=1.0.2`).

---

## ⚙️ Next.js Configuration

```js
// next.config.mjs
const nextConfig = {
  agentRules: false,
  outputFileTracingIncludes: {
    "/*": ["./videos/**/*"],   // Ensure video files are included in output bundle
  },
};
```

---

## 🌍 SEO & Metadata

```ts
// app/layout.tsx
metadata: {
  title: "Academia Vioniko | Aprende Inteligencia Artificial de Forma Práctica",
  description: "Aprende a utilizar inteligencia artificial, ChatVioniko, contenido, imágenes, video, asistentes y automatizaciones mediante clases en vivo y proyectos prácticos."
}
viewport: {
  width: "device-width",
  initialScale: 1,
  themeColor: "#030711"
}
```
- Lang: `es` (Spanish)
- No font imports via `next/font` — Inter loaded via CSS `font-family` stack

---

## 💫 Custom CSS Animations & Effects

All defined in `globals.css`:

| Class | Effect |
|---|---|
| `.ambient-field` | Hero background grid with radial violet/cyan/lime glow + repeating grid lines |
| `.system-grid` | Grid pattern used inside the Hero visual card widget |
| `.video-grid` | Grid pattern overlay on video thumbnail previews |
| `.panel-lines` | Diagonal stripe pattern for CTA panel background |
| `.hero-logo-glow::before` | Blurred radial glow behind the hero logo |
| `.pulse-line` | Animated pulsing connector lines in the hero visual (`@keyframes pulse-line`) |
| `.reveal` / `.reveal.is-visible` | Scroll animation — `opacity: 0 → 1`, `translateY(18px → 0)` over 650ms |

### Accessibility
- `@media (prefers-reduced-motion: reduce)`: All animations disabled, `.reveal` is always visible
- Smooth scroll disabled under reduced-motion
- Proper `aria-label`, `aria-expanded`, `aria-modal`, `role="dialog"` on interactive components
- Focus trapping inside `VideoModal`
- Keyboard: `Escape` closes modal

---

## 🚀 Development Scripts

```bash
npm run dev      # Start Next.js dev server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

## 🗺️ Path Aliases

```json
// tsconfig.json
"@/*" → "./*"   (root of the project)
```

Example usage: `import logoGrande from "@/logos/logo_grande.png"`

---

## 📝 Key Observations & Notes

- **No backend** — pure static marketing page, no API routes
- **No state management library** — only React `useState` / `useEffect`
- **No animation library** — all animations done with CSS + `IntersectionObserver`
- **No UI component library** — 100% custom Tailwind components
- **No i18n library** — content is hardcoded in Spanish directly in JSX
- **Price not set** — pricing section exists but dollar amount is TBD (to be filled in)
- **"Inscripción" CTA** points to `#inscripcion` section (likely to be a form or external link)
- **ChatVioniko** is Vioniko's proprietary AI platform (similar to ChatGPT) used as the core learning tool throughout the program
- Some components are Server Components (no `"use client"`) and some are Client Components — this is correctly split at the component level
- **100% Identical Requirement** — The HTML/CSS/JS copy under `vioniko/vioniko/vioniko/` must remain pixel-perfect and exactly identical in all styling (including vertical spacing, padding overrides, line-height mappings like 1.5rem/1.75rem, font-sizes, and responsive grid layouts) to the Next.js source code.

---

---

# 🌐 Static HTML/CSS/JS Copy — `vioniko/` subfolder

> **Created in session 2 (2026-08-23).** An exact pixel-perfect static copy of the Next.js landing page, built with zero dependencies — pure HTML, CSS, and JavaScript.

---

## 📁 Location & Files

```
vioniko/vioniko/vioniko/      <- static copy lives here
├── index.html    (49 KB)    — Full page, all 15 sections, all content
├── style.css     (29 KB)    — Complete design system + all component styles
├── script.js     (3.4 KB)  — Header scroll, hamburger, reveal, video modal
└── logos/                   — Logo image assets
    ├── logo_chico.png
    └── logo_grande.png
```

Assets referenced from sibling directories (kept outside for now):
```
vioniko/vioniko/
└── videos/*.mp4              <- ../videos/*.mp4
```

---

## 🛠️ Static Copy Tech Stack

| Layer | Technology |
|---|---|
| Markup | Plain HTML5 (`<!DOCTYPE html>`) |
| Styling | Plain CSS3 with CSS Custom Properties |
| Behaviour | Vanilla JavaScript (IIFE, no frameworks) |
| Fonts | Inter via system font-family stack (no CDN needed) |
| Build tool | **None** — open `index.html` directly |
| Dependencies | **None** — zero npm, zero libraries |

---

## 🎨 CSS Architecture (`style.css`)

### CSS Custom Properties (design tokens — mirrors Tailwind config exactly)
```css
:root {
  --ink:          #030711;
  --midnight:     #050816;
  --panel:        #081120;
  --panel-soft:   #0b1628;
  --mist:         #b8c7dc;
  --violet-glow:  #8b5cf6;
  --cyan-glow:    #22d3ee;
  --lime-glow:    #a3e635;
  --gradient: linear-gradient(115deg, #60a5fa 0%, #22d3ee 24%, #a3e635 48%, #8b5cf6 78%, #38bdf8 100%);
  --shadow-glow: 0 0 36px rgba(139,92,246,0.22);
  --shadow-cyan: 0 0 28px rgba(34,211,238,0.16);
  --shadow-lime: 0 0 28px rgba(163,230,53,0.14);
}
```

### CSS Class Reference

| Component | CSS Class(es) |
|---|---|
| CTA Button Primary | `.btn .btn-primary` |
| CTA Button Secondary | `.btn .btn-secondary` |
| CTA Button Ghost | `.btn .btn-ghost` |
| Full-width button | `.btn-full` |
| Gradient text span | `.gradient-text` |
| Section heading block | `.section-heading` |
| Eyebrow label | `.eyebrow` |
| Subtitle text | `.subtitle` |
| Checklist lime | `.checklist` + `.checklist-mark--lime` |
| Checklist violet | `.checklist` + `.checklist-mark--violet` |
| Checklist red | `.checklist` + `.checklist-mark--red` |
| Feature card | `.feature-card .feature-card--violet/cyan/lime` |
| Module card | `.module-card`, `.module-number`, `.module-result` |
| Method card | `.method-card`, `.method-index` |
| Video card wrapper | `.video-card` |
| Video preview button | `.video-preview` (`.video-preview--wide` for full width) |
| Play button + icon | `.play-btn` + `.play-triangle` |
| Video placeholder | `.video-placeholder` |
| Video modal | `.video-modal` (`.open` = active) |
| Comparison card red | `.comparison-card .comparison-card--red` |
| Comparison card cyan | `.comparison-card .comparison-card--cyan` |
| Highlight banner | `.highlight-banner .highlight-banner--violet/cyan/lime` |
| ChatVioniko item | `.chatvioniko-item` |
| Free class panel | `.free-class-panel`, `.free-class-grid`, `.free-class-step` |
| Certificate grid | `.cert-grid`, `.cert-mock`, `.cert-mock-header` |
| Pricing panel | `.pricing-panel`, `.price-box` |
| FAQ grid | `.faq-grid`, `.faq-group`, `.faq-item`, `.faq-toggle`, `.faq-answer` |
| Method flow banner | `.method-flow` |
| Final closing quote | `.final-quote` |
| Scroll reveal | `.reveal` animates to `.reveal.is-visible` |
| Hero | `.hero`, `.hero-inner`, `.hero-grid`, `.hero-logo-glow` |
| Hero visual widget | `.hero-visual`, `.hv-card--violet/cyan/lime/white` |
| Pulse connector lines | `.pulse-line .pulse-line--1`, `.pulse-line--2` |
| Background textures | `.ambient-field`, `.system-grid`, `.video-grid`, `.panel-lines` |
| Site header | `.site-header` (`.scrolled` / `.menu-open` states) |
| Mobile nav | `.mobile-nav` (`.open` state) |
| Hamburger button | `.hamburger` (`.active` state) |

### Responsive Breakpoints
| Alias | Value |
|---|---|
| sm | `min-width: 640px` |
| md | `min-width: 768px` |
| lg | `min-width: 1024px` |
| xl | `min-width: 1280px` |

### Grid Utilities
| Class | Behaviour |
|---|---|
| `.grid-2` | 1 col → 2 col at `lg` |
| `.grid-2-md` | 1 col → 2 col at `md` |
| `.grid-3` | 1 col → 3 col at `lg` |
| `.grid-4` | 1 → 2 at `sm` → 4 at `lg` |
| `.grid-3-video` | 1 → 2 at `md` → 3 at `xl` |
| `.grid-3-includes` | 1 → 2 at `md` → 3 at `lg` |

---

## ⚙️ JavaScript Architecture (`script.js`)

Single IIFE wrapping three features:

### 1. Header scroll detection
```js
// Threshold: scrollY > 12px adds .scrolled class
// .scrolled triggers: bg rgba(3,7,17,0.9) + backdrop-filter:blur(20px)
window.addEventListener('scroll', updateHeader, { passive: true });
```

### 2. Hamburger mobile menu
```js
// .active on .hamburger animates 3 bars -> X
// .open on .mobile-nav shows the dropdown
// Clicking any nav link inside closes the menu automatically
hamburger.addEventListener('click', () => { mobileNav.classList.toggle('open'); ... });
```

### 3. Scroll Reveal (IntersectionObserver)
```js
// rootMargin: '0px 0px -12% 0px', threshold: 0.12
// Adds .is-visible class once, then unobserves (fire-once)
// CSS handles opacity 0->1 + translateY(18px->0) over 650ms
```
- **65 `.reveal` elements** throughout the page

### 4. Video Modal
```js
// Trigger: .video-preview[data-src] buttons
// Open: stores lastFocused, locks body scroll, focuses close btn, plays video
// Close: Escape key / click outside / X button
// On close: restores scroll, returns focus to trigger element
```

Video preview buttons use HTML data attributes:
```html
<button class="video-preview" data-src="../videos/file.mp4" data-title="Title">
```

---

## 🔄 Next.js to HTML/CSS/JS Translation Map

| Next.js / React / Tailwind | Plain HTML/CSS/JS |
|---|---|
| `next/image` | `<img width height>` |
| `next/link` | `<a href="#anchor">` |
| `bg-vioniko-gradient bg-clip-text` | `.gradient-text` CSS class |
| Tailwind color tokens (`text-ink` etc.) | CSS custom properties (`var(--ink)`) |
| `backdrop-blur-xl` | `backdrop-filter: blur(20px)` |
| `useState` (scroll) | `scroll` event → class toggle |
| `useState` (hamburger) | click event → `.active` / `.open` class toggle |
| `useEffect` + `IntersectionObserver` | Same native API in `script.js` |
| `"use client"` directive | Not needed — all JS runs natively |
| React `VideoModal` with focus trap | Native JS focus management |
| `<details>/<summary>` FAQ | Same — identical native HTML |
| `globals.css` animations | Copied verbatim as named CSS classes |
| `@/` TypeScript path alias | Relative paths (`../logos/`, `../videos/`) |
| `Reveal` component | `.reveal` class + IntersectionObserver |

---

## ▶️ How to Run the Static Copy

**Option 1 — Direct open** (logos work; some browsers block video via `file://`):
```
Double-click index.html in File Explorer
```

**Option 2 — Local server (recommended for full video support):**
```bash
# Node.js
npx serve C:\Users\HP\Downloads\vioniko\vioniko\vioniko

# Python
python -m http.server 8080 --directory C:\Users\HP\Downloads\vioniko\vioniko\vioniko

# VS Code
Right-click index.html -> Open with Live Server
```
Then visit `http://localhost:3000` (or `:8080`)

---

## ✅ Verified Build Metrics

| Metric | Value |
|---|---|
| `.reveal` animated elements | 65 |
| Section IDs | 8 (`#inicio`, `#academia`, `#clase-gratis`, `#programa`, `#metodologia`, `#chatvioniko`, `#inscripcion`, `#preguntas`) |
| Module cards | 10 |
| Demo video cards | 6 |
| FAQ groups | 6 |
| FAQ questions total | ~27 |
| Video files referenced | 7 |
| HTML file size | ~49 KB |
| CSS file size | ~29 KB |
| JS file size | ~3.4 KB |
| External dependencies | **0** |

---

# 🚀 Recent Updates & Migrations (2026-09-01)

### 📌 27beta (`27beta/`)
- Added lead generation popup modal (`#form-popup-modal`) with name, WhatsApp, and email fields.
- Integrated `assets/js/popup.js` and `.video-section__cta-btn` red CTA button.
- Powered by `$template = 192;` and `subdominio_ini.php`.

### 📌 vioniko (`vioniko/`)
- Integrated `#form-popup-modal` markup, modal styling in `style.css`, and trigger logic in `script.js`.

### 📌 28beta (`28beta/`) — *Active Development Target*
- **PHP Migration**: Converted `vioniko` layout into `28beta/index_beta.php`.
- **Template ID**: Configured `$template = 193;`.
- **Main Video**: Restored original Vioniko interactive `.video-preview` button & modal trigger style using dynamic PHP `data-src="<?= $video; ?>"` and `<video src="<?= $video; ?>#t=0.001">`.
- **PHP Integration**: Added `subdominio_ini.php`, UTF-8 conversion helpers, and geo/campaign hidden fields (`pais`, `ciudad`, `estado`, `usuario`, `template`, `idioma`).
- **Assets**: Self-contained with local `style.css`, `script.js`, and `logos/`.



