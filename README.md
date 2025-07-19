# Portfolio

## Development Flow:
Run npm run dev → Vite starts dev server
Vite reads vite.config.ts → Loads React plugin
Serves index.html → Loads /src/index.tsx
TypeScript compiles using tsconfig.json
Tailwind processes CSS using PostCSS

## Build Process:
npm run build → Vite builds for production
TypeScript compiles all .tsx/.ts files
Tailwind purges unused CSS
Outputs optimized static files
So I can use this static files on my server, it is pure javascript now which can be understand by browser

## Installation Steps

```
npm install
```
npm need to be higher than version 11.4.2 so you can install vite@7.0.4 library.

```
npm run dev
```
