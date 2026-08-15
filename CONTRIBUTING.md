# Contribución

## Flujo

1. Crear una rama desde `main`.
2. Resolver una issue con alcance limitado.
3. Ejecutar todas las comprobaciones locales.
4. Crear un commit con Conventional Commits.
5. Abrir una pull request con evidencia de verificación.

## Commits

Ejemplos:

```text
feat(chat): add streaming response endpoint
fix(config): reject invalid allowed origins
test(health): cover service availability response
docs(architecture): explain agent boundaries
```

## Criterios de calidad

- El código debe compilar en modo estricto.
- Cada cambio de comportamiento debe incluir pruebas relevantes.
- No se permiten secretos, datos personales ni respuestas inventadas.
- Las dependencias nuevas deben resolver una necesidad concreta.
- Los comentarios solo documentan decisiones o restricciones no evidentes.
