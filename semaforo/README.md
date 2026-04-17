# Semáforo Reboot

Herramienta pública para analizar menús de restaurantes según la filosofía Reboot Lifestyle.

## Setup local

1. `cd semaforo && npm install`
2. Copia `.env.example` a `.env.local` y pon tu API key.
3. `npx vercel dev` para correr en local.

## Deploy

1. `npx vercel` para conectar el proyecto a Vercel.
2. En Vercel dashboard: agrega variable de entorno `ANTHROPIC_API_KEY`.
3. `npm run deploy` para producción.

## Tests

`npm test`
