# Backlog inicial

Cada bloque está preparado para convertirse en una issue de GitHub. La publicación se realizará después de revisar el repositorio y decidir su visibilidad.

## 1. Inicializar la API con Fastify y TypeScript

**Objetivo:** disponer de una base ejecutable, comprobable y preparada para crecer.

**Criterios de aceptación:**

- El servidor arranca con configuración validada.
- `GET /health` devuelve HTTP 200.
- Lint, typecheck, tests y build finalizan correctamente.

## 2. Definir el contrato de chat

**Objetivo:** acordar entradas, salidas y errores de `POST /api/chat` antes de integrar un proveedor.

**Criterios de aceptación:**

- El esquema valida el mensaje y el identificador de conversación.
- Se definen límites de longitud.
- Los errores utilizan un formato consistente.
- El contrato queda documentado y probado.

## 3. Integrar OpenAI Responses API

**Objetivo:** generar respuestas desde el backend sin exponer credenciales.

**Criterios de aceptación:**

- La clave solo se obtiene desde variables de entorno.
- El cliente de OpenAI puede sustituirse en pruebas.
- Los errores del proveedor se traducen a errores seguros.
- Las pruebas no consumen la API real.

## 4. Implementar respuestas en streaming

**Objetivo:** enviar texto progresivamente al frontend.

**Criterios de aceptación:**

- El endpoint transmite eventos con un formato documentado.
- La desconexión del cliente cancela el trabajo cuando sea posible.
- El flujo contempla finalización y error.
- Existe una prueba de integración del protocolo.

## 5. Definir las instrucciones del agente

**Objetivo:** establecer identidad, alcance, tono y límites verificables.

**Criterios de aceptación:**

- El agente distingue hechos, inferencias y ausencia de información.
- No inventa experiencia ni proyectos.
- Rechaza solicitudes fuera del alcance del portfolio.
- Las instrucciones están versionadas.

## 6. Incorporar conocimiento aprobado del CV

**Objetivo:** responder a partir de fuentes controladas sobre Alejandro.

**Criterios de aceptación:**

- Cada afirmación procede de contenido revisado.
- Los documentos no contienen datos privados innecesarios.
- Las respuestas pueden enlazar a proyectos o secciones públicas.
- Existe un conjunto inicial de preguntas de evaluación.

## 7. Evaluar RAG y recuperación semántica

**Objetivo:** determinar si el volumen de contenido justifica búsqueda vectorial.

**Criterios de aceptación:**

- Se compara contexto directo frente a recuperación.
- La decisión considera calidad, latencia y coste.
- No se incorpora una base vectorial sin mejora medida.

## 8. Añadir protección antiabuso

**Objetivo:** controlar consumo, entradas maliciosas y exposición de información.

**Criterios de aceptación:**

- Rate limiting específico para el chat.
- Límites de tamaño y tiempo de ejecución.
- CORS restringido al dominio autorizado.
- Logs sin prompts completos ni datos sensibles por defecto.

## 9. Preparar despliegue en Render

**Objetivo:** desplegar la API de forma reproducible.

**Criterios de aceptación:**

- El servicio escucha en `0.0.0.0` y utiliza `PORT`.
- Existe un health check operativo.
- Las variables necesarias están documentadas.
- El despliegue no contiene secretos en el repositorio.

## 10. Integrar el chat en React y Vite

**Objetivo:** conectar el portfolio con la API.

**Criterios de aceptación:**

- El frontend consume un origen configurable.
- El usuario puede escribir mientras Render se inicia.
- La interfaz distingue inicio, espera, streaming, error y reintento.
- La API se despierta al abrir el chat, no con pings continuos.

## 11. Configurar el subdominio de la API

**Objetivo:** publicar el backend en `api.alejandrobolano.com`.

**Criterios de aceptación:**

- DNS y TLS están activos.
- CORS acepta únicamente los orígenes aprobados.
- El frontend deja de depender del dominio temporal de Render.

## 12. Añadir evaluaciones y observabilidad

**Objetivo:** medir calidad, latencia, errores y coste.

**Criterios de aceptación:**

- Existe un conjunto versionado de preguntas esperadas.
- Se registran métricas sin almacenar contenido sensible.
- Los cambios de modelo se comparan antes de desplegarse.
- Se documentan umbrales mínimos de aceptación.
