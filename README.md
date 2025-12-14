# Shva Arena - Retail Manager

Terminal management system for Shva/EMV with RTL Hebrew interface.

## Tech Stack

- React 18 + TypeScript
- Vite
- React Router
- Zustand (state management)
- React Hook Form (form handling)
- Axios (HTTP client)
- Styled-components (styling)

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

The project will open at `http://localhost:3000`

## Build

```bash
npm run build
```

## Project Structure

```
src/
├── components/          # Reusable components
├── pages/              # Application pages
├── store/              # Zustand stores
├── services/           # API clients and mocks
├── theme/              # Design system (separate file)
├── types/              # TypeScript types
├── utils/              # Utilities
└── App.tsx
```

## Design System

All colors, typography, spacing, and styles are located in `src/theme/index.ts` for easy design changes from a single location.

