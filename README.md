# api-agentai-cv

API del agente de inteligencia artificial integrado en `alejandrobolano.com`.

## Objetivo

Construir un asistente que responda preguntas verificables sobre la experiencia, los proyectos y las capacidades profesionales de Alejandro Bolaño. El proyecto evolucionará de un chat con conocimiento controlado a un agente con herramientas y límites explícitos.

## Principios

- KISS antes que abstracciones prematuras.
- Responsabilidades pequeñas y dependencias explícitas.
- Código reutilizable cuando exista un caso real de reutilización.
- Sin comentarios que repitan el comportamiento del código.
- Ninguna afirmación sobre Alejandro sin una fuente aprobada.
- Ningún secreto ni dato personal en el repositorio.

## Requisitos

- Node.js 22 o posterior.
- pnpm 10 o posterior.

## Desarrollo local

```bash
pnpm install
cp .env.example .env
pnpm dev
```

En PowerShell:

```powershell
Copy-Item .env.example .env
pnpm dev
```

## Verificación

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

## Endpoints

### `GET /health`

Informa si el proceso de la API está disponible. El frontend puede utilizarlo para despertar una instancia gratuita de Render al abrir el chat.

```json
{
  "status": "ok"
}
```

## Estado

La base HTTP está preparada. La integración con OpenAI, el chat y el conocimiento del CV se incorporarán en iteraciones separadas.
