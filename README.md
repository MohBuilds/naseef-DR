# Naseef Abdulquadri â€” Portfolio

A static personal portfolio built with HTML, CSS, and JavaScript.

## Project structure

```text
public/                    Editable website source
  index.html               Page content and structure
  css/style.css            Styles and responsive layouts
  js/script.js             Photo viewer, navigation, and contact interactions
  js/theme.js              Early theme setup and saved appearance preference
  assets/
    images/profile/        Optimized profile photograph
    images/outreach/       Community health outreach photographs
    images/community/      Orphanage visit photographs
    images/education/      University visit photograph
    images/credentials/    Photograph of diploma
    images/video-posters/  Video preview image
    videos/                Optimized website video
    documents/             Viewable diploma PDF
assets/
  originals/photos/        Original photographs, descriptively renamed
  originals/videos/        Original videos, descriptively renamed
  originals/documents/     Original diploma PDF
  asset-index.json         Original filenames mapped to organized paths
scripts/                   Build and reference validation tools
dist/                      Generated website for deployment (ignored)
archive/                   Prior deployment and review images (ignored)
.openai/hosting.json       Existing Sites deployment configuration
PRODUCT.md                 Portfolio facts and content constraints
DESIGN.md                  Visual system documentation
```

## Run locally

Requires Node.js 18+ and Python 3. No npm packages need to be installed.

```sh
npm run dev
```

Open http://127.0.0.1:4174. Edit files in `public/` and refresh the browser.

## Validate and build

```sh
npm run check
npm run build
npm run preview
```

`dist/` contains the deployable website and is regenerated on each build. Original media and archives stay outside the published directory. Make source edits in `public/`, never `dist/`.

## Deploy on NetlifyImport `MohBuilds/naseef-DR` from GitHub and select the `main` branch. The root `netlify.toml` supplies these settings automatically:- Base directory: repository root (`.`)- Build command: `npm run check && npm run build`- Publish directory: `dist`- Node version: 22, pinned in `.nvmrc` to match the validated local runtimeNo API keys, server functions, or custom environment variables are required. Netlify provides the deployment URL automatically; the build uses it for social-preview metadata. Only `dist/` is published, so original media, development files, and archives stay outside the deployed site. Ordinary anchor links need no SPA catch-all redirect.For a manual drag-and-drop deployment, run `npm run build` and upload the contents of `dist/`.## Asset naming

Filenames use lowercase words separated by hyphens. Profile photographs include Naseef's name. Other names describe the visible subject; they do not assert unverified event dates or roles. All originals are preserved. See `assets/asset-index.json` for the complete old-to-new mapping.

Original media is preserved in `assets/originals/` and included in the repository. The website uses optimized copies in `public/assets/`; only the generated `dist/` directory is deployed.

When changing a website image, update its `src` in `public/index.html` and the matching entry in `photographs` in `public/js/script.js`. `data-photo` values are indices into that collection. Raster source information is recorded alongside each image.

## Appearance and accessibility

The header offers light, dark, and device appearance. Device appearance is the default; explicit choices are stored locally. The initial theme is applied before styles load, avoiding a flash of the wrong theme. The full-photo viewer supports previous/next controls, arrow keys, Escape, and focus restoration. Reduced-motion preferences disable the opening reveal. A one-page professional profile is available as a PDF.

The website is published privately using Sites. `.openai/hosting.json` preserves the existing Site identity. Hanken Grotesk is self-hosted; its SIL Open Font License is included with the font.

## AI-assisted headshot

The portfolio uses an AI-assisted studio portrait generated from Naseef’s supplied photograph at the user’s request. The original selfie remains in `assets/originals/photos/`. The full-resolution PNG and exact prompt are in `assets/generated/headshots/`; the optimized WebP is in `public/assets/images/profile/`. No community photographs were generated.
