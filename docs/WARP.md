# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

Vision X Telemedicine is a Next.js 14 application designed to provide rural healthcare access for Nabha and its 173 surrounding villages. It's built for the Smart India Hackathon 2024 with a focus on low-bandwidth optimization, offline functionality, and multi-language support.

## Development Commands

### Core Development
```bash
# Install dependencies
npm install

# Start development server (default: http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

### Testing & Development Workflow
```bash
# Check TypeScript compilation without emitting files
npx tsc --noEmit

# Build and verify production bundle
npm run build && npm start

# Format and lint code (manual check)
npm run lint

# Check for type errors in specific file
npx tsc --noEmit --skipLibCheck false src/components/ComponentName.tsx
```

## Architecture Overview

### Core Architecture Pattern
The application follows Next.js 14 App Router architecture with a context-based state management approach:

- **Language System**: Context-driven multi-language support (English, Hindi, Punjabi, Telugu) with localStorage persistence
- **Component Architecture**: Functional React components with TypeScript strict typing
- **PWA Implementation**: Service worker-based offline functionality with strategic caching
- **Styling**: Tailwind CSS with custom medical-themed color palette

### Key Architectural Decisions

1. **Multi-Language Context System** (`src/contexts/LanguageContext.tsx`):
   - Uses React Context for global language state
   - Persists language preference in localStorage
   - Provides translation function `t` throughout the app
   - All UI text goes through translation system

2. **Type-Safe Translation System** (`src/types/translations.ts`):
   - Comprehensive TypeScript interface for all translatable strings
   - Ensures no missing translations across languages
   - Centralized in `src/translations/` with per-language files

3. **PWA/Offline Architecture**:
   - Service worker (`public/sw.js`) handles offline caching
   - Manifest file configured for mobile app-like experience
   - Graceful degradation when connectivity is lost

4. **Component Structure**:
   - `Header.tsx`: Language selection, branding, trust indicators
   - `MainLayout.tsx`: Overall page layout wrapper
   - `WelcomeSection.tsx`: Landing page content with features
   - `LoginForm.tsx`/`RegisterForm.tsx`: Authentication forms
   - `Dashboard.tsx`: Post-login user interface

### File Structure Patterns

```
src/
├── app/                    # Next.js 14 App Router
│   ├── layout.tsx         # Root layout with LanguageProvider
│   ├── page.tsx           # Landing page
│   └── globals.css        # Global Tailwind styles
├── components/            # React components (all functional)
├── contexts/             # React contexts (LanguageContext)
├── translations/         # Language files (en, hi, pa, te)
├── types/               # TypeScript type definitions
└── utils/               # Utility functions (currently empty)
```

## Language System Usage

When adding new UI text:

1. Add the key to `src/types/translations.ts` interface
2. Add translations to all language files in `src/translations/`
3. Use in components: `const { t } = useLanguage(); return <div>{t.newTextKey}</div>`

## Styling Guidelines

- Uses custom Tailwind config with medical theme colors
- Primary color palette: Blue (`primary-*`) 
- Medical colors: `medical-red`, `medical-green`, `medical-blue`
- Font: Inter (loaded via Next.js font optimization)
- Mobile-first responsive design approach

## PWA & Offline Considerations

- Service worker handles navigation requests when offline
- Critical assets cached in `CACHE_NAME` version
- Offline page (`public/offline.html`) served for failed navigations
- Manifest includes shortcuts for emergency consultation features

## Development Context

- **Target Users**: Rural patients in Punjab, India
- **Connectivity**: Optimized for low-bandwidth, intermittent connections  
- **Platform**: PWA for cross-device compatibility
- **Accessibility**: Multi-language support for regional languages
- **Deployment**: Designed for rural healthcare infrastructure

## Key Dependencies

- `next`: 14.0.3 (App Router)
- `react`: ^18
- `lucide-react`: Icons optimized for medical UI
- `tailwindcss`: Utility-first styling with custom medical theme
- `typescript`: Strict type checking enabled

## Common Development Tasks

When working with this codebase:

1. **Adding new pages**: Create in `src/app/` following App Router conventions
2. **New components**: Add to `src/components/` with TypeScript + translation support
3. **Language additions**: Update all files in `src/translations/` + type definitions
4. **PWA updates**: Modify `public/manifest.json` and `public/sw.js`
5. **Styling changes**: Use existing Tailwind medical theme classes when possible

## Technical Constraints

- **Next.js 14 App Router**: Uses new app directory structure
- **No backend**: Currently frontend-only (ready for API integration)
- **TypeScript strict mode**: All code must pass type checking
- **PWA compliance**: Maintain offline functionality when adding features
- **Multi-language**: All user-facing text must go through translation system