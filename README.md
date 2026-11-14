# Jayaraj T – Personal Digital Marketing Portfolio

A fast, accessible, data-driven personal portfolio website for **Jayaraj T**, Digital Marketer based in Calicut, Kerala, India, currently managing search and performance campaigns at **Digitz Technologies LLC** (UAE). Built specifically to target and convert **freelance clients**.

> *"Somehow, This Is My Profession."*

---

## 🛠️ Technology Stack

- **Static Site Generator:** [Eleventy (11ty)](https://www.11ty.dev/) (`@11ty/eleventy` v2)
- **Styling:** [Tailwind CSS v3](https://tailwindcss.com/) in JIT mode with custom palette extensions
- **Client-Side Interactivity:** [Alpine.js v3](https://alpinejs.dev/) for KPI widget state and mobile navigation
- **Data Visualization:** [Chart.js v4](https://www.chartjs.org/) for interactive KPI horizontal bar charts
- **Deployment:** GitHub Pages via GitHub Actions (`.github/workflows/ci.yml`)

---

## 🎨 Visual Identity

- **Palette:**
  - Deep Charcoal (Background): `#191919`
  - Primary Accent (Teal): `#0FA9E6`
  - Light Accent (Ice-Blue): `#7FD6FF`
  - Soft Accent (Soft Aqua): `#5ED9D1`
- **Typography:**
  - Headings: **Playfair Display** (High-contrast serif)
  - Body & UI: **Inter** (High-legibility sans-serif)

---

## 📁 Repository Structure

```text
portfolio/
├── .github/
│   └── workflows/
│       └── ci.yml                 # GitHub Actions build & deploy to gh-pages
├── src/
│   ├── _data/
│   │   └── nav.json              # Main site navigation links
│   ├── _includes/
│   │   ├── base.njk              # Base HTML document & Google Fonts
│   │   ├── header.njk            # Responsive header with Alpine drawer
│   │   └── footer.njk            # Semantic footer with social channels
│   ├── assets/
│   │   ├── css/
│   │   │   └── input.css         # Tailwind source directives & animations
│   │   └── images/
│   │       ├── headshot.svg      # Digital marketer profile visual
│   │       ├── ecomate-logo.svg  # Ecomate International LLC SVG logo
│   │       ├── aits-safety-logo.svg # AITS Safety LLC SVG logo
│   │       ├── starline-security-logo.svg # Starline Security LLC SVG logo
│   │       ├── digitz-technologies-logo.svg # Digitz Technologies LLC SVG logo
│   │       └── dmx-logistics-logo.svg # DMX Global Logistics SVG logo
│   ├── case-studies/
│   │   ├── ecomate-international-llc.md
│   │   ├── aits-safety-llc.md
│   │   ├── starline-security-llc.md
│   │   ├── digitz-technologies-llc.md
│   │   └── dmx-global-logistics.md
│   ├── data/
│   │   └── kpis.json             # KPI monthly benchmark metrics
│   ├── about.njk                 # Background, University of Calicut, Softroniics
│   ├── case-studies.njk          # Case study index collection
│   ├── contact.njk               # Freelance consultation mailto form & socials
│   ├── experience.njk            # Career timeline (Digitz, Softroniics, Degree)
│   ├── expertise.njk             # Grouped 6 skill domains with sub-skills
│   ├── index.njk                 # Immersive hero, 3 KPI widgets, selected work
│   ├── insights.njk              # Placeholder thoughts page
│   ├── tools.njk                 # 3-column software & platforms list
│   └── work.njk                  # Selected client tiles with hover overlays
├── .eleventy.js                  # Eleventy build config & collections
├── package.json                  # NPM dependencies & build scripts
├── postcss.config.js             # PostCSS plugins
├── tailwind.config.js            # Tailwind theme tokens
└── README.md
```

---

## 🚀 Local Development

### 1. Prerequisites
- **Node.js** (v18 or v20 LTS recommended)
- **npm** (comes with Node.js)

### 2. Installation
```powershell
npm install
```

### 3. Run Development Server
```powershell
npm run dev
```
Launches Eleventy local server with hot reloading at `http://localhost:8080/`.

### 4. Build for Production
```powershell
npm run build
npm run build:css
```
Or simply run:
```powershell
npm run postinstall
```
Compiled production files are generated in `./dist/`.

---

## 🚢 CI/CD Deployment

The site is configured for continuous deployment to GitHub Pages via GitHub Actions. Every push to the `main` branch triggers `.github/workflows/ci.yml`:
1. Checks out the code.
2. Installs dependencies (`npm ci`).
3. Executes production build (`npm run build && npm run build:css`).
4. Publishes `./dist` to the `gh-pages` branch.

Live URL: **https://jayarajt121-dev.github.io/portfolio/**

---

*Authored for Jayaraj T – Digital Marketer.*
