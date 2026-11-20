# Sana Hameed — Portfolio

Personal academic portfolio of **Sana Hameed**, Microbiologist — a **no-build React app** (React 18 + HTM via CDN). No npm, no bundler, no Jekyll. Just static files.

## Files

| File | Purpose |
|---|---|
| `index.html` | Page shell, loads React/ReactDOM/HTM from CDN |
| `data.js` | **All site content** — edit this to update profile, education, experience, projects, etc. |
| `app.js` | React components (sidebar, education, experience, projects, skills, etc.) |
| `styles.css` | All styling |
| `Assets/Sana.png` | Profile photo |
| `Assets/SanaCV.pdf` | CV (linked from the sidebar) |
| `Assets/benazirbhuttologo.gif` | University logo |
| `serve.js` | Optional tiny local server |

## Run locally

- Easiest: open `index.html` directly in a browser — it just works.
- Or serve it: `node serve.js` → http://localhost:8000 (or use VS Code Live Server, `python -m http.server`, etc.)

## Deploy

Push to a GitHub repo named `<username>.github.io` and GitHub Pages serves it automatically from the `main` branch root.

## Updating content

Edit `data.js` — education, experience, projects, skills, certificates and hobbies are all plain JS arrays. No other files need to change for content updates.
