# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

cvman is a CV/resume generator built with React, TypeScript, and Vite. It renders CVs as print-optimized web pages that can be exported to PDF using Playwright. The project supports multiple people, each with their own CV variants.

## Commands

```bash
npm run dev          # Start development server with HMR
npm run build        # TypeScript check + Vite production build
npm run lint         # Run ESLint
npm run preview      # Preview production build locally
```

### PDF Export

```bash
node scripts/exportCvPdf.mjs <person> <variant>
```

Examples:
- `node scripts/exportCvPdf.mjs roman owt-de`
- `node scripts/exportCvPdf.mjs roman bcg-en`
- `node scripts/exportCvPdf.mjs julia default-en`

The script builds the project, starts a preview server, and uses Playwright to render the CV to PDF at `resources/<person>/<variant>/cv.pdf`.

## Architecture

### Multi-Person Structure

```
src/
├── types/cv.ts      # Shared CvProfile and related types
├── roman/           # Roman's CV data files
│   ├── bcgEnCv.ts
│   ├── recruitingDeCv.ts
│   └── ...
├── julia/           # Julia's CV data files
└── components/      # Shared React components

resources/
├── roman/           # Roman's exported PDFs by variant
└── julia/           # Julia's exported PDFs by variant
```

### Data-Driven CV Rendering

The app uses a typed data structure (`CvProfile` in `src/types/cv.ts`) to define CV content:
- Profile info (name, title, summary, contact, location)
- Timeline items for experiences and education
- Skills grouped by category
- Sidebar section configuration with page break control

To create a new CV variant:
1. Add a new data file in `src/<person>/` importing from `../types/cv`
2. Export a `CvProfile` object
3. Import it in `App.tsx` to render

### Component Structure

- `App.tsx` - Main layout with grid (hero, main content, sidebar)
- `HeroCard` - Header with name, title, availability, summary
- `CVSection` - Wrapper for main content sections with accent styling
- `TimelineList` - Renders experience/education items with page break control
- `Sidebar` - Renders configurable sections (personal, contact, skills, languages)

### Print Optimization

Components support `allowPageBreak` props that control CSS `break-inside`/`page-break-inside` properties for proper PDF pagination. The layout uses Tailwind CSS with print-specific considerations.

### Internationalization

CVs support German (`de`) and English (`en`) via the `language` field and localized `labels` object in `CvProfile`.
