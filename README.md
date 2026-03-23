# Ronak Panchal Portfolio (Frontend)

This repository contains the source code for a professional portfolio website featuring interactive UI and 3D visuals.

## Tech Stack

- React + TypeScript
- Vite
- GSAP (animations)
- Three.js + WebGL (3D visuals)
- @react-three/* (React Three Fiber ecosystem)

## Features

- Project and experience showcase
- Interactive animations (GSAP)
- 3D/WebGL sections (Three.js)

## Installation & Setup

### Prerequisites

- Node.js (LTS recommended)
- npm

### Steps

1. Install dependencies:
   - `npm install`
2. Start the development server:
   - `npm run dev`
3. Open the app in your browser:
   - `http://localhost:5173`

## Build & Preview

- Build for production:
  - `npm run build`
- Preview the production build locally:
  - `npm run preview`

## Lint

- `npm run lint`

## Notes on GSAP Trial Plugins

This project uses `gsap-trial` for some GSAP features during development.

Depending on GSAP licensing for the specific Club/paid plugins you use, you may need to replace `gsap-trial` with the official licensed packages for production deployments.

For the recommended installation approach for GSAP Club plugins, see:
- https://gsap.com/docs/v3/Installation/

If you plan to host the site publicly with Club-level features, follow the GSAP documentation and update to the licensed packages as required.

## Assets

- Resume file: `public/Resume.pdf` (served as `/Resume.pdf`)

## License

This project is open source and available under the [MIT License](LICENSE).
