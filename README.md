# Lexfortune Advisory

Website of lexfortune.in

## Tech

- React 18
- JavaScript
- Vite
- React Router
- Formspree (contact form)
- CSS (no framework)
- Hosted on GoDaddy

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

- **Logo**: `lexfortunelogo.jpeg` in `public/`
- **Formspree**: Sign up at formspree.io, create form, add `VITE_FORMSPREE_ID` to `.env`
- **Contact info**: Edit ContactUs.jsx and Footer.jsx
