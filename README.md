## Portfolio Hero

Custom shader-driven hero section and supporting content that powers `GoosieGav.github.io`.

### Stack
- Next.js App Router + TypeScript
- Tailwind CSS v4 & shadcn/ui structure (`src/components/ui`)
- Lucide icons and a WebGL canvas background

### Local editing (optional)
```bash
npm install
npm run dev
```
Updates happen live at `http://localhost:3000`.

### Build & publish to GitHub Pages
The repository root is served directly by GitHub Pages, so publishing means generating static files and committing them.

```bash
npm install
npm run build   # writes static files to ./out
Copy-Item out/* . -Recurse -Force   # or copy the contents manually
git add .
git commit -m "Update site"
git push origin main
```

The copy step ensures `index.html`, `_next/`, and supporting assets live at the repo root where GitHub Pages expects them.

### Component usage
The hero lives at `src/components/ui/animated-shader-hero.tsx`. Pass your trust badge, headline, subtitle, and CTA callbacks as props. See `src/app/page.tsx` for an example configuration.
