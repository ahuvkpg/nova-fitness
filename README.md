# Nova Fitness: one-page sales funnel

Static site. No build step.

- `index.html`: page markup
- `css/styles.css`: styles (black/white, yellow highlights, gunmetal/chrome accents)
- `js/config.js`: **edit here** for the Google Form link (FORM_URL), prices (THB + kyat), payment placeholders, contact links, default language
- `js/i18n.js`: all copy in English (`en`) and Burmese (`my`)
- `js/main.js`: language switcher (saved in localStorage, `?lang=en` URL override), form embed, payment rendering
- `assets/img/`: optimized images (webp + jpg fallback)

## Run locally
    python3 -m http.server 8080      # or: npm install && npm start

## Railway (later)
Deploy this folder as a Node service. Railway runs `npm install` then `npm start`,
which serves the folder with `serve` on `$PORT`. No other config needed.
