# Admin Dashboard

A minimal React + Vite starter that highlights the separation between navigation (sidebar) and main content for an admin layout. Tailwind is pulled via CDN for quick styling, and the layout mirrors the provided dashboard rationale.

## Getting started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the dev server:
   ```bash
   npm run dev
   ```
3. Open the printed local URL (usually http://localhost:5173).

## Notes

- Styling uses Tailwind via CDN in `index.html`, so no Tailwind build step is required.
- The core layout lives in `src/App.js`; entry wiring is in `src/main.jsx`.
- Fonts use Space Grotesk from Google Fonts to give a distinct look from default stacks.
