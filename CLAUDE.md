# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Core Commands
- `npm run dev` - Start development server at http://localhost:3000
- `npm run build` - Build production version
- `npm run start` - Start production server
- `npm run lint` - Run ESLint checks

### Development Workflow
- Use `npm run dev` for development with hot reloading
- Run `npm run build` to test production builds
- Always run `npm run lint` before commits

### Docker Commands
- `docker build -t chatagent-web .` - Build Docker image
- `docker run -p 3000:3000 chatagent-web` - Run container on port 3000
- `docker run -d --name chatagent-web -p 3000:3000 chatagent-web` - Run detached container

## Project Architecture

### Technology Stack
- **Framework**: Next.js 15.3.5 with App Router
- **Language**: TypeScript with strict mode
- **Styling**: Tailwind CSS v4 + SCSS modules
- **UI Library**: Custom components with Lucide React icons
- **Animation**: Lottie animations (@lottiefiles/dotlottie-react)
- **Font**: Onest from Google Fonts

### Directory Structure
```
app/
├── components/
│   ├── Home/          # Landing page sections
│   ├── FAQ/           # FAQ page components
│   ├── Pricing/       # Pricing page components
│   └── UI/            # Reusable UI components
├── hooks/             # Custom React hooks
├── utils/             # Utility functions
├── styles/            # Global SCSS files (_colors.scss)
├── assets/            # Static assets
├── faq/              # FAQ page
├── pricing/          # Pricing page
└── globals.css       # Global styles with Tailwind imports
```

### Component Architecture

#### Page Structure
- Main pages use a shared `Layout` component from `app/components/UI/Layout/Layout`
- Homepage (`page.tsx`) uses section-based architecture with separate desktop/mobile layouts
- Sections are imported from `app/components/Home/` and rendered conditionally

#### UI Components
- All reusable UI components in `app/components/UI/`
- Each component has its own directory with TypeScript file and SCSS module
- Components follow barrel exports (index.ts files)
- Available UI components: Accordion, Button, Card, LanguageSelection, Layout, Navigation, ProgressBar, Separator

#### Styling System
- **Primary approach**: SCSS modules for component-specific styles
- **Utility classes**: Tailwind CSS v4 for layout and utilities
- **Color system**: Centralized in `app/styles/_colors.scss` with comprehensive color palette including gradients
- **Responsive design**: Separate desktop/mobile layouts where needed

### Key Patterns

#### Import Aliases
- Use `@/*` for absolute imports (configured in tsconfig.json)
- Import UI components from barrel exports: `import { Component } from './components/UI/Component'`

#### Styling Patterns
- SCSS variables from `_colors.scss` for consistent theming
- Module-scoped styles: `import styles from './Component.module.scss'`
- Tailwind for layout, SCSS modules for component styling

#### Responsive Design
- Homepage renders different component orders for desktop vs mobile
- Use CSS classes like `.desktopLayout` and `.mobileLayout` for conditional rendering
- Mobile-first responsive breakpoints

### State Management
- Client-side components marked with `'use client'`
- Custom hooks in `app/hooks/` directory
- No global state management library - uses React built-ins

### Animation & Assets
- Lottie animations stored in `public/animations/`
- Dark/light favicon switching via `FaviconSwitcher` utility
- Static assets in `public/imgs/` directory

### TypeScript Configuration
- Strict mode enabled
- Path mapping configured for `@/*` imports
- Target ES2017 with modern module resolution