# 🧠 agents.md — Project Memory: ChatVioniko Affiliate Landing Page (29beta Target)

> Auto-generated project knowledge file. Keep this updated as the project evolves.

---

## 📌 Project Overview

| Field | Value |
|---|---|
| **Project name** | `chatvioniko-afiliados-landing` |
| **Version** | `0.1.0` |
| **Purpose** | Marketing landing page for "Programa de Afiliados ChatVioniko" — promoting ChatVioniko AI platform & its 2-tier affiliate commission program |
| **Language** | Spanish (`es`) |
| **Target audience** | Content creators, marketers, entrepreneurs, agencies, educators, communities, freelancers, and digital tool advocates |
| **Theme** | Dark, glowing cyberpunk/tech — heavy use of violet, cyan, lime, and deep navy (`#030711`) |
| **Reference Project** | `28beta/` (previous Next.js to static HTML/CSS/JS/PHP conversion) |
| **Target Conversion Folder** | `29beta/` (conversion target for the current Next.js affiliate landing page) |

---

## 🛠️ Tech Stack

### Next.js Core Framework (Source Project)
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

### No external UI libraries — all UI components are hand-crafted with Tailwind CSS & native HTML.

---

## 🏗️ Architecture & Project Structure

```
25-Sep/
├── app/                                # Next.js App Router root
│   ├── layout.tsx                      # Root layout — metadata, viewport, global CSS import
│   ├── page.tsx                        # Entry route "/" — renders <AffiliateLandingPage />
│   └── globals.css                     # Global CSS (Tailwind directives + ambient effects & animations)
│
├── components/
│   └── landing/                        # All UI components for single-page affiliate landing
│       ├── AffiliateLandingPage.tsx    # 🎯 Master component — assembles all page sections & data
│       ├── AffiliateHeader.tsx         # Fixed sticky header with scroll detection & mobile nav toggle
│       ├── AffiliateCalculator.tsx     # Interactive potential commission calculator (range + number input)
│       ├── affiliateConfig.ts          # Configuration constants (trial URL: https://chatvioniko.com)
│       ├── CTAButton.tsx               # Reusable CTA link button (3 variants: primary, secondary, ghost)
│       ├── FAQAccordion.tsx            # Native <details>/<summary> accordion grouped by topic
│       ├── FeatureCard.tsx             # Feature card wrapper with tone-based accent borders
│       ├── GradientText.tsx            # Inline gradient text span (brand gradient)
│       ├── Reveal.tsx                  # Scroll-triggered fade+slide animation (IntersectionObserver)
│       └── SectionHeading.tsx          # Reusable section heading block (eyebrow, title, gradient, subtitle)
│
├── logos/
│   └── logo_chico.png                  # ChatVioniko logo badge (used in header & hero section)
│
├── 28beta/                             # Reference project — previous Next.js to HTML/CSS/JS/PHP conversion
│   ├── index.html
│   ├── index_beta.php
│   ├── style.css
│   ├── script.js
│   └── logos/
│
├── 29beta/                             # 🎯 TARGET CONVERSION FOLDER for current project
│   ├── index.html                      # (To be generated: static HTML copy)
│   ├── index_beta.php                  # (To be generated: PHP integrated copy with campaign fields)
│   ├── style.css                       # (To be generated: extracted standalone CSS matching 28beta style)
│   ├── script.js                       # (To be generated: header, mobile nav, reveal, calculator JS)
│   └── logos/                          # Assets folder for 29beta
│       └── logo_chico.png
│
├── 28beta_agents.md                    # Reference agents memory file for 28beta
└── agents.md                           # 🧠 Master project memory file for current codebase & 29beta target
```

---

## 🎨 Design System (Tailwind Custom Tokens & CSS Variables)

### Custom Colors
| Token | Hex | Use |
|---|---|---|
| `ink` | `#030711` | Primary background (deep near-black navy) |
| `midnight` | `#050816` | Deeper background gradient |
| `panel` | `#081120` | Card/panel background |
| `panelSoft` | `#0b1628` | Softer panel background on hover |
| `mist` | `#b8c7dc` | Subtitle & body text (soft blue-grey) |
| `violetGlow` | `#8b5cf6` | Violet accent / borders / ambient glow |
| `cyanGlow` | `#22d3ee` | Cyan accent / interactive focus / primary highlights |
| `limeGlow` | `#a3e635` | Lime accent / checkmarks / commission figures |

### Custom Shadows
| Token | Value |
|---|---|
| `shadow-glow` | `0 0 36px rgba(139, 92, 246, 0.22)` — ambient violet glow |
| `shadow-cyan` | `0 0 28px rgba(34, 211, 238, 0.16)` — ambient cyan glow |
| `shadow-lime` | `0 0 28px rgba(163, 230, 53, 0.14)` — ambient lime glow |

### Brand Gradient (`vioniko-gradient`)
```css
linear-gradient(115deg, #60a5fa 0%, #22d3ee 24%, #a3e635 48%, #8b5cf6 78%, #38bdf8 100%)
```
Used on primary CTA buttons, hero logo title text, section gradients, step numbers, and text highlights.

### Typography
- **Font family**: Inter (`Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`)
- **Headings**: Uppercase, heavy (`font-black`) headings with tight line-height (`leading-[0.98]` or `leading-[1.04]`)
- **Body**: `text-mist` (`#b8c7dc`) for optimal contrast against dark background panels

---

## 📐 Page Sections (in order)

| # | Section ID | Section Name | Key Contents & Components |
|---|---|---|---|
| 1 | `#inicio` | **Hero Section** | Header logo badge, `ChatVioniko` gradient title, eyebrow badge, headline "Gana comisiones recomendando ChatVioniko", stat pills (Nivel 1 20%, Nivel 2 5%, Precio 29 USD), dual CTA buttons, `HeroAffiliateVisual` visual widget |
| 2 | `#ganancias` | **Potential Earnings** | 20% direct commission calculation banner ($5.80 USD per $29 sub), earnings cards grid (5, 10, 25, 50, 100 subs), disclaimer box, interactive `AffiliateCalculator` |
| 3 | `#afiliados` | **Nivel 2 Certificado** | 5% Tier 2 breakdown ($1.45 USD per sub), 3-step vertical referral flow (1. Tu -> 2. Afiliado referido -> 3. Nuevo suscriptor), percentage summary badges |
| 4 | `#que-incluye` | **What You Recommending** | Section heading, 9 `FeatureCard` items (Chat IA, Prompts, Escritura guiada, Keyword research, Imagenes, Video, Avatares, Asistentes, Chatbots), featured `Academia Vioniko` card with 7 checkmarks, trial callout banner |
| 5 | *(none)* | **Ecosystem Value Block** | "Todo en una sola suscripcion" summary box with 8 ecosystem chip tags, single subscription equality headline, price badge ($29 USD/mes) |
| 6 | `#como-funciona` | **How It Works** | 5 numbered process step cards (1. Prueba, 2. Activa, 3. Activa programa, 4. Obten enlace, 5. Genera comisiones), CTA button |
| 7 | *(none)* | **Target Audience** | "Este programa es para ti?" chip tags for 9 target persona types |
| 8 | *(none)* | **Callout Banner** | "Ya tienes personas a las que podria servirles ChatVioniko?" high-impact action panel with CTA |
| 9 | `#preguntas` | **FAQ Accordion** | 2 grouped accordion categories ("Programa" with 8 FAQs, "Condiciones" with 3 FAQs = 11 Q&As total) |
| 10 | *(none)* | **Final CTA Panel** | Closing invitation panel with recap pill badges (29 USD/mes, 20% Nivel 1, 5% Nivel 2) & CTA button |
| *(footer)* | *(none)* | **Footer** | Copyright text, footer nav links (`#como-funciona`, `#ganancias`, `#que-incluye`, `#preguntas`) |

---

## 🧩 Component Reference & React Logic

### `AffiliateLandingPage.tsx`
- **Role**: Single master component rendering all sections & containing static data arrays
- **Server Component**: Pure layout composition, no `"use client"` directive
- **Static Data Arrays**:
  - `earnings`: `[{ subscriptions: "5", commission: "29 USD" }, ... { subscriptions: "100", commission: "580 USD" }]`
  - `productFeatures`: 9 items with titles, descriptions, and tone accents (`cyan`, `violet`, `lime`)
  - `academyIncludes`: 7 feature checkmark strings
  - `ecosystemItems`: 8 chip labels
  - `affiliateSteps`: 5 step title & text pairs
  - `audienceItems`: 9 audience persona strings
  - `faqGroups`: 2 groups ("Programa", "Condiciones") containing 11 total Q&A items
- **Sub-components**: `HeroAffiliateVisual`, `StatPill`, `Section`

### `AffiliateHeader.tsx` — `"use client"`
- **Role**: Fixed top navigation bar with scroll detection & mobile drawer menu
- **Scroll Logic**: Listens to `window.scrollY > 12`, toggles background from `transparent` to `bg-ink/90 backdrop-blur-xl border-white/10`
- **Mobile Menu**: State `isOpen`, toggles mobile nav dropdown and animated hamburger icon to X

### `AffiliateCalculator.tsx` — `"use client"`
- **Role**: Interactive potential commission calculator
- **Formula**: `launchPrice = 29`, `directRate = 0.2`, `commissionPerSubscription = 5.80`
- **Calculation**: `potentialCommission = subscriptions * 5.80 USD`
- **Inputs**:
  - `<input type="range" min="1" max="150" value={subscriptions} />`
  - `<input type="number" min="1" max="999" value={subscriptions} />`
- **Formatting**: `Intl.NumberFormat("en-US", { style: "currency", currency: "USD" })`

### `CTAButton.tsx`
- **Role**: Reusable link button with 3 visual variants:
  - `primary`: Brand gradient background, dark text, violet glow (`bg-vioniko-gradient text-ink shadow-glow`)
  - `secondary`: Cyan outline badge (`border border-cyanGlow/40 bg-cyanGlow/10 text-white`)
  - `ghost`: Translucent white outline (`border border-white/10 bg-white/5 text-white`)

### `FAQAccordion.tsx`
- **Role**: Accordion layout using native HTML `<details>` and `<summary>` tags
- **Zero JS Dependencies**: Uses CSS `group-open:rotate-45` on the `+` indicator icon

### `FeatureCard.tsx`
- **Role**: Card component with tone-accented borders (`violet`, `cyan`, `lime`) and hover translateY transition

### `SectionHeading.tsx`
- **Role**: Centered/left-aligned section header with optional eyebrow, main title, gradient suffix, and subtitle

### `Reveal.tsx` — `"use client"`
- **Role**: Scroll animation wrapper using native `IntersectionObserver` (`rootMargin: "0px 0px -12% 0px"`, `threshold: 0.12`)
- **Animation**: Adds `.is-visible` class to `.reveal` container (CSS `opacity 0 -> 1`, `translateY 18px -> 0`)

---

## 📋 Product, Affiliate & FAQ Data Specs

### 1. Pricing & Commission Rates
- **Launch Price**: `$29 USD / month`
- **Nivel 1 (Direct Commission)**: `20%` = `$5.80 USD` per direct subscriber first payment
- **Nivel 2 (Certified Second Tier)**: `5%` = `$1.45 USD` per sub-affiliate subscriber first payment
- **Trial URL**: `https://chatvioniko.com`

### 2. Earnings Benchmarks (Direct 20%)
- 5 subscriptions = `$29 USD`
- 10 subscriptions = `$58 USD`
- 25 subscriptions = `$145 USD`
- 50 subscriptions = `$290 USD`
- 100 subscriptions = `$580 USD`

### 3. Product Features (9 Tools)
1. **Chat IA personalizable** *(Cyan)*
2. **Biblioteca de prompts** *(Violet)*
3. **Escritura guiada** *(Lime)*
4. **Keyword research** *(Cyan)*
5. **Generacion de imagenes con IA** *(Violet)*
6. **Estudio de video con IA** *(Lime)*
7. **Avatares con IA** *(Cyan)*
8. **Asistentes IA** *(Violet)*
9. **Creacion de chatbots** *(Lime)*

### 4. Process Steps (5 Steps)
1. **Prueba ChatVioniko**: Crea tu cuenta y conoce la plataforma mediante la prueba gratuita.
2. **Activa tu suscripcion**: Al contratar ChatVioniko desbloqueas las herramientas, Academia Vioniko y el acceso al apartado de afiliados.
3. **Activa el programa**: Dentro de tu cuenta entra al apartado Programa de Afiliados y completa el formulario correspondiente.
4. **Obten tu enlace**: Una vez habilitado, utiliza tu enlace personal para recomendar ChatVioniko.
5. **Genera comisiones**: Las nuevas suscripciones conseguidas mediante tu enlace pueden generar la comision correspondiente segun las condiciones del programa.

---

## 🌐 Conversion Target Specifications — 29beta Folder

> **Scope Restriction**: All conversion implementation files MUST be placed exclusively inside `29beta/`. No existing files outside `29beta/` and `agents.md` shall be modified.

### Target Files in `29beta/`
```
29beta/
├── index.html        # Complete static HTML5 page with all 10 sections & components
├── index_beta.php    # PHP version integrating subdominio_ini.php, template ID & campaign tracking
├── style.css         # Self-contained standalone CSS (design tokens, layout, animations, components)
├── script.js         # IIFE JavaScript handling scroll header, mobile nav, reveal, & calculator
└── logos/
    └── logo_chico.png
```

### CSS Design System Architecture (`style.css` in `29beta`)
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
  --shadow-glow: 0 0 36px rgba(139, 92, 246, 0.22);
  --shadow-cyan: 0 0 28px rgba(34, 211, 238, 0.16);
  --shadow-lime: 0 0 28px rgba(163, 230, 53, 0.14);
}
```

### Vanilla JavaScript Architecture (`script.js` in `29beta`)
1. **Header Scroll**: Listens for `window.scrollY > 12`, toggles `.scrolled` class on `.site-header`.
2. **Mobile Nav Toggle**: Manages hamburger icon click event, toggling `.open` on `.mobile-nav` and `.active` on `.hamburger`.
3. **Scroll Reveal (IntersectionObserver)**: Observes `.reveal` elements with `rootMargin: '0px 0px -12% 0px'`, adds `.is-visible` class upon entering viewport.
4. **Interactive Affiliate Calculator**:
   - Listens to `input[type="range"]` and `input[type="number"]` inputs.
   - Updates value state sync between range slider and number input.
   - Dynamically calculates `potentialCommission = value * 5.80`.
   - Formats output using `Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })`.
   - Updates DOM text elements in real time.

### PHP Integration Specs (`index_beta.php` in `29beta`)
- Configured with template identifier (e.g. `$template = 194;`).
- Imports `subdominio_ini.php` for tracking, geo-location, and sub-domain session variables.
- Includes hidden campaign input fields (`pais`, `ciudad`, `estado`, `usuario`, `template`, `idioma`).
- Ensures UTF-8 encoding support across all output buffers.

---

## 🔄 Next.js to HTML/CSS/JS/PHP Translation Map

| Next.js / React Component | Plain HTML/CSS/JS/PHP Equivalent (`29beta`) |
|---|---|
| `next/image` (`logoChico`) | `<img src="logos/logo_chico.png" alt="ChatVioniko" width="..." height="..." />` |
| `<Link href="#anchor">` | `<a href="#anchor">` |
| `GradientText` component | `<span class="gradient-text">...</span>` |
| Tailwind custom colors | CSS custom properties (`var(--ink)`, `var(--cyan-glow)`, etc.) |
| `AffiliateHeader` component | `<header class="site-header">` with scroll listener in `script.js` |
| Mobile navbar state (`isOpen`) | Hamburger `.active` & `.mobile-nav.open` CSS toggle |
| `AffiliateCalculator` component | Vanilla JS slider/number input event handlers & dynamic DOM text updates |
| `FAQAccordion` component | Native HTML `<details><summary>` elements with `.group-open:rotate-45` styling |
| `FeatureCard` component | `<article class="feature-card feature-card--violet|cyan|lime">` |
| `Reveal` component | Class `.reveal` animated to `.reveal.is-visible` via `IntersectionObserver` |
| `CTAButton` component | `<a class="btn btn-primary|secondary|ghost">` |

---

## 📝 Key Directives & Rules for 29beta Implementation

1. **Strict File Boundary**: Modifying files outside `29beta/` and `agents.md` is strictly forbidden.
2. **Pixel-Perfect Fidelity**: Styling, typography, vertical spacing, padding, line heights, responsive breakpoints, and ambient background effects in `29beta` must match the Next.js landing page perfectly.
3. **Zero External Runtime Dependencies**: Plain HTML5, CSS3, and vanilla ES6 JavaScript — no external npm modules or library CDNs required.
4. **Self-Contained Folder**: `29beta` must contain all required local assets, logos, styles, and scripts to function independently.
5. **Full Dynamic Parity**: Interactive features including header scroll transparency, mobile navigation menu, scroll reveal animations, native accordion toggles, and the live affiliate commission calculator must function flawlessly in pure JS.

---

## ✅ Verified 29beta Build Metrics

| Asset / File | File Path | Status | File Size | Description |
|---|---|---|---|---|
| **HTML Page** | `29beta/index.html` | ✅ Verified | ~48.7 KB | Complete static HTML5 page with all 10 sections, hero widget, form popup modal, and 1280px containers |
| **PHP Page** | `29beta/index_beta.php` | ✅ Verified | ~51.1 KB | PHP page synced with `index.html` markup, including template ID `$template = 194`, `subdominio_ini.php`, geo tracking, and `campana_user.php` |
| **CSS Stylesheet** | `29beta/style.css` | ✅ Verified | ~27.5 KB | Self-contained design system (CSS variables, responsive grids, popup modal styles, animations) |
| **JavaScript Script** | `29beta/script.js` | ✅ Verified | ~5.4 KB | IIFE managing scroll header, hamburger drawer, reveal, calculator, and form popup modal controller |
| **Logo Asset** | `29beta/logos/logo_chico.png` | ✅ Copied | ~175 KB | ChatVioniko brand mark badge |

---

## 📌 Recent Refinements & User Feedback Log

1. **Hero Section Layout & Mockup Placement**:
   - Hero title sized to `text-4xl sm:text-6xl lg:text-7xl` with `leading-[0.98]` font-black uppercase.
   - 2-column desktop grid `hero-content-grid` (`lg:grid-cols-[1.05fr_0.95fr]`) placing `<HeroAffiliateVisual />` mock visual widget on the **RIGHT** side of headline text on desktop viewports.
2. **Container Width Consistency**:
   - `.banner-box-callout` width set to 100% of `.container` (`max-w-7xl` / `80rem` / `1280px`), matching upper sections (`#inicio`, `#ganancias`, `#afiliados`, `#que-incluye`).
   - Sized typography for callout banner (`.banner-title` with `text-3xl sm:text-5xl font-black uppercase leading-[1.04]`).
3. **Typography & Layout Alignment**:
   - Equalized container widths and typography scaling for lower sections below "¿Ahora pruebalo tu?".
4. **Form Popup Modal Integration**:
   - Added `#form-popup-modal` markup, CSS modal styles, and click event handlers in `script.js` to open the popup when CTA buttons (`.btn-primary`, `a[href="https://chatvioniko.com"]`) are clicked, referencing `28beta`.

