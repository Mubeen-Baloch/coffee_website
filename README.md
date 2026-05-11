# Coffee+ | Together We Brew Change

Coffee+ is a purpose-led coffee brand and digital initiative designed to turn everyday coffee moments into meaningful humanitarian impact. Our mission is to provide premium, ethically sourced coffee while supporting vital humanitarian efforts through year-round giving.

## 🌍 The Mission: The Giving Coffee Initiative

Every cup of Coffee+ contributes to the **Giving Coffee Initiative**. In partnership with organizations like the **Canadian Red Cross**, we ensure that every bean roasted translates into actionable support for communities facing crises across the globe.

## ☕ Our Coffee Range

We offer a curated selection of premium Ethiopian Arabica blends, each with its own unique character:

*   **ENERGIZER ⚡**: A bold, full-bodied medium-dark roast for focus and momentum.
*   **FANTASY**: A light-medium roast with smooth, aromatic notes for creative moments.
*   **NOSTALGIA**: A balanced and comforting medium roast that feels timeless.
*   **EXTRAVAGANZA**: A deep, intense dark roast for those who enjoy strong character.
*   **DE JOY VU**: A smooth and satisfying decaffeinated blend to enjoy at your own pace.

## 🚀 Features

*   **Premium Aesthetic**: A modern, high-end design featuring rich coffee textures, glassmorphism, and smooth animations.
*   **Responsive Design**: Fully optimized for desktops, tablets, and mobile devices with a custom hamburger menu.
*   **Impact Tracking**: A dedicated Impact page detailing our partnership with the Canadian Red Cross.
*   **Wholesale Portal**: A streamlined section for business partnerships and bulk enquiries.
*   **Dynamic UI**: Interactive elements including a rotating quality badge, floating coffee bean animations, and reveal-on-scroll effects.

## 🛠️ Built With

*   **HTML5**: Semantic structure for better SEO and accessibility.
*   **CSS3**: Custom Design System with a specialized color palette (Care Red, Charcoal Black, Soft Grey).
*   **JavaScript**: Custom logic for navigation, scroll animations, and interactive components.
*   **Custom Assets**: Bespoke generated imagery reflecting the premium nature of the brand.

## 📖 How to View

1.  Clone this repository or download the source files.
2.  Open `index.html` in any modern web browser.
3.  Navigate through the site using the menu to explore our range and mission.

## Deploy (Vercel)

Default production URL: **https://coffeewebsite-ebon.vercel.app/** — `sitemap.xml`, `robots.txt`, canonicals, and `site-config.js` use this as the committed fallback.

1. Connect the repo; set **Build Command** to `npm run build` and **Install Command** to `npm install` (or leave defaults if Vercel auto-detects `package.json`).
2. **`npm run build`** runs `scripts/patch-site-url.mjs`: on **Preview** deploys it rewrites absolute URLs to `https://$VERCEL_URL` so canonicals match the preview host. On **Production**, set **`SITE_URL`** (e.g. `https://yourbrand.com`) in Vercel environment variables to rewrite from the default Vercel URL to your custom domain (no manual find-replace).
3. **`www` → apex**: `vercel.json` redirects `www.coffeewebsite-ebon.vercel.app` → `coffeewebsite-ebon.vercel.app`. When you add a custom domain with `www`, add another redirect block in `vercel.json` for that host (see [Vercel redirects](https://vercel.com/docs/project-configuration#redirects)).

---

*Copyright © 2026 Coffee+ | Brewing Change Together*
