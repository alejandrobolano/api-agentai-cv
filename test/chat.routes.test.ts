import type { FastifyInstance } from 'fastify';
import { afterEach, describe, expect, it } from 'vitest';

import { buildApp } from '../src/app/build-app.js';
import type { Environment } from '../src/config/environment.js';

const environment: Environment = {
  ALLOWED_ORIGIN: 'http://localhost:5173',
  HOST: '0.0.0.0',
  NODE_ENV: 'test',
  PORT: 3000,
};

const apps: FastifyInstance[] = [];

afterEach(async () => {
  await Promise.all(apps.splice(0).map(async (app) => app.close()));
});

describe('POST /api/chat', () => {
  it('rejects an invalid request with a stable error', async () => {
    const app = await buildApp(environment);
    apps.push(app);

    const response = await app.inject({
      method: 'POST',
      payload: { message: '   ' },
      url: '/api/chat',
    });

    expect(response.statusCode).toBe(400);
    expect(response.json()).toMatchObject({
      error: {
        code: 'INVALID_CHAT_REQUEST',
        message: 'The chat request is invalid.',
      },
    });
  });

  it('reports honestly that the provider is not implemented', async () => {
    const app = await buildApp(environment);
    apps.push(app);

    const response = await app.inject({
      method: 'POST',
      payload: { message: '¿Quién es Alejandro?' },
      url: '/api/chat',
    });

    expect(response.statusCode).toBe(501);
    expect(response.json()).toEqual({
      error: {
        code: 'CHAT_NOT_IMPLEMENTED',
        message: 'The chat provider is not implemented yet.',
      },
    });
  });
});
