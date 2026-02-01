# Lexfortune Advisory

Website for lexfortune.in - legal & financial advisory, Ghaziabad.

## Run locally

```bash
npm install
npm run dev
```

## Build (for GoDaddy)

```bash
npm run build
```

Upload `dist/` contents to hosting. Root = where index.html goes.

## Config

- **Logo**: Add `logo.png` in `public/` (falls back to logo.svg)
- **Formspree**: Sign up at formspree.io, create form, add `VITE_FORMSPREE_ID` to `.env`
- **Contact info**: Edit ContactUs.jsx and Footer.jsx
