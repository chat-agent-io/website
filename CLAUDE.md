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
- **Framework**: Next.js 15.5.3 with App Router
- **Language**: TypeScript with strict mode
- **Styling**: Tailwind CSS v4 + SCSS modules
- **UI Library**: Custom components with Lucide React icons
- **Animation**: Lottie animations (@lottiefiles/dotlottie-react)
- **Carousel**: Swiper for slideshows
- **Data Fetching**: TanStack Query (React Query) with Axios
- **Font**: Onest from Google Fonts

### Directory Structure
```
app/
├── components/
│   ├── Home/          # Landing page sections (ChatSection, DataPrivacySection, etc.)
│   ├── CaseStudy/     # Case study page components (HeaderSection, etc.)
│   ├── FAQ/           # FAQ page components
│   ├── Pricing/       # Pricing page components
│   └── UI/            # Reusable UI components
├── hooks/             # Custom React hooks (useAutoSwipe, useIntersectionObserver, useMediaQuery)
├── services/          # API service layer with React Query hooks
│   ├── careers/       # Career-related API calls
│   ├── industries/    # Industry data fetching
│   ├── studies/       # Case study data fetching (useStudies, useStudyBySlug)
│   └── httpClient.ts  # Axios client instances
├── config/            # API configuration (api.ts defines endpoints)
├── providers/         # React context providers (QueryProvider)
├── utils/             # Utility functions (FaviconSwitcher, assets.ts)
├── styles/            # Global SCSS files (_colors.scss)
├── assets/            # Static assets
├── industries/        # Dynamic industry routes with [category] and case study pages
├── faq/              # FAQ page
├── pricing/          # Pricing page
├── careers/          # Careers page
├── about-us/         # About page
└── globals.css       # Global styles with Tailwind imports
```

### Data Fetching Architecture

#### API Configuration
- Centralized API configuration in `app/config/api.ts`
- Two external APIs: NocoDB and ChatAgent CMS (Directus-based)
- Environment variables: `NEXT_PUBLIC_API_NOCO_URL`, `NEXT_PUBLIC_API_NOCO_KEY`, `NEXT_PUBLIC_API_CHATAGENT_URL`
- HTTP clients defined in `app/services/httpClient.ts` using Axios

#### Service Layer Pattern
- All API calls organized in `app/services/` by domain (careers, industries, studies)
- React Query hooks encapsulate data fetching logic (e.g., `useStudies()`, `useStudyBySlug()`)
- Query keys follow pattern: `["resource"]` or `["resource", id]`
- Services handle response transformation and type safety

#### TanStack Query Setup
- Global QueryClient wrapped in `QueryProvider` at root layout
- Client-side only (`'use client'`) provider pattern
- All pages using data fetching must be client components

### Dynamic Routes and CMS Integration

#### Industries/Case Studies System
- Dynamic routes: `/industries/[category]/case-study/[case]`
- Data sourced from ChatAgent CMS (Directus)
- Case study pages render sections dynamically based on `section.blocks` with different collection types:
  - `block_statistics` - Hero stats cards
  - `block_card` - Various content cards (problems, benefits, features, timeline)
  - `block_faqs` - FAQ accordion items
  - `block_banner` - Final CTA banners
- Section rendering logic uses title matching and block collection detection to determine layout
- Breadcrumb navigation built from URL params

#### Image Handling
- Remote images from `api.builder.io` and `cms.chatagent.io`
- Configured in `next.config.ts` under `remotePatterns`
- Asset URL helper: `getAssetCloud()` in `app/utils/assets.ts`

### Component Architecture

#### Page Structure
- Root layout (`app/layout.tsx`) provides SEO metadata, QueryProvider, and FaviconSwitcher
- Main pages use shared `Layout` component from `app/components/UI/Layout/Layout`
- Homepage uses section-based architecture with separate desktop/mobile layouts (conditional rendering via CSS)
- Sections are imported from `app/components/Home/` and rendered conditionally

#### UI Components
- All reusable UI components in `app/components/UI/`
- Each component has its own directory with TypeScript file and SCSS module
- Components follow barrel exports (index.ts files)
- Available UI components: Accordion, Button, Card, LanguageSelection, Layout (with Header, Footer, MobileMenu, PreFooterNav), Navigation, ProgressBar, Separator

#### Styling System
- **Primary approach**: SCSS modules for component-specific styles
- **Utility classes**: Tailwind CSS v4 for layout and utilities
- **Color system**: Centralized in `app/styles/_colors.scss` with comprehensive color palette including gradients
- **Responsive design**: Separate desktop/mobile layouts where needed

### Key Patterns

#### Import Aliases
- Use `@/*` for absolute imports (configured in tsconfig.json)
- Import UI components from barrel exports: `import { Component } from './components/UI/Component'`
- Import hooks: `import { useAutoSwipe } from '@/app/hooks/useAutoSwipe'`
- Import services: `import { useStudyBySlug } from '@/app/services/studies/useStudies'`

#### Styling Patterns
- SCSS variables from `_colors.scss` for consistent theming
- Module-scoped styles: `import styles from './Component.module.scss'`
- Tailwind for layout, SCSS modules for component styling

#### Responsive Design
- Homepage renders different component orders for desktop vs mobile
- Use CSS classes like `.desktopLayout` and `.mobileLayout` for conditional rendering
- Mobile-first responsive breakpoints
- Custom `useMediaQuery` hook available for JS-based responsive logic

#### Client vs Server Components
- All components using hooks, state, or browser APIs must use `'use client'` directive
- Data fetching components are client-side due to TanStack Query
- Pages with dynamic data are client components

### Custom Hooks
- `useAutoSwipe` - Auto-advancing carousel/swiper functionality
- `useIntersectionObserver` - Scroll-based animations and lazy loading
- `useMediaQuery` - Responsive breakpoint detection in JavaScript

### TypeScript Configuration
- Strict mode enabled
- Path mapping configured for `@/*` imports
- Target ES2017 with modern module resolution