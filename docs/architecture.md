# Arquitectura

## Contexto

El frontend React con Vite de `alejandrobolano.com` consumirá esta API mediante HTTPS. La API será responsable de proteger las credenciales, validar las entradas, controlar el uso y comunicarse con el proveedor de IA.

## Componentes previstos

```text
React + Vite
    |
    | POST /api/chat
    | GET /health
    v
Fastify + TypeScript
    |
    +-- agente del CV
    +-- conocimiento aprobado
    +-- herramientas controladas
    +-- seguridad y observabilidad
    |
    v
OpenAI Responses API
```

## Decisiones iniciales

- Fastify mantiene pequeña la superficie del backend.
- Zod valida configuración y contratos en los límites del sistema.
- El proveedor de IA se integrará detrás de un contrato cuando exista el primer caso de uso.
- No habrá base de datos hasta que una necesidad de persistencia lo justifique.
- El conocimiento se incorporará primero desde documentos versionados y aprobados.
- El frontend no tendrá acceso a credenciales del proveedor.

## Límites del primer hito

Incluye el servidor, seguridad HTTP, configuración, endpoint de salud y pruebas. No incluye chat, OpenAI, RAG, almacenamiento ni despliegue externo.
