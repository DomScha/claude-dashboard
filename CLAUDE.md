# Claude Code Dashboard

Ein Dashboard zur Visualisierung von Claude API Usage, Projektaktivitäten und Metriken.

## Tech Stack

- **Framework**: Next.js 15 (App Router) + TypeScript
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **API**: Anthropic SDK (Claude API)

## Projektstruktur

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root Layout
│   ├── page.tsx            # Dashboard Übersicht
│   ├── usage/page.tsx      # API Usage Details
│   ├── projects/page.tsx   # Projekt-Übersicht
│   ├── sessions/page.tsx   # Konversations-Log
│   └── api/                # API Routes
│       ├── usage/route.ts
│       ├── projects/route.ts
│       └── sessions/route.ts
├── components/
│   ├── ui/                 # Basis-UI-Komponenten (Button, Card, etc.)
│   ├── charts/             # Chart-Komponenten
│   ├── layout/             # Header, Sidebar, Navigation
│   └── dashboard/          # Dashboard-spezifische Komponenten
├── lib/
│   ├── anthropic.ts        # Anthropic SDK Client
│   ├── data.ts             # Datenaggregation/-transformation
│   └── utils.ts            # Hilfsfunktionen
└── types/
    └── index.ts            # Globale TypeScript-Typen
```

## Entwicklung

```bash
npm install
npm run dev       # Entwicklungsserver auf http://localhost:3000
npm run build     # Production Build
npm run lint      # ESLint
npm run typecheck # TypeScript Prüfung
```

## Umgebungsvariablen

Kopiere `.env.example` zu `.env.local` und trage deine Werte ein:

```
ANTHROPIC_API_KEY=sk-ant-...
```

## Konventionen

- Komponenten: PascalCase, eine Komponente pro Datei
- Hilfsfunktionen: camelCase
- API Routes: Next.js Route Handlers (`route.ts`)
- Commits: Conventional Commits (`feat:`, `fix:`, `chore:`, `refactor:`)
- Sprache im Code: Englisch
- Kommentare: Englisch, nur bei nicht-offensichtlicher Logik
