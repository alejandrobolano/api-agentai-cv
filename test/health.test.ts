import { afterEach, describe, expect, it } from 'vitest';
import type { FastifyInstance } from 'fastify';

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

describe('GET /health', () => {
  it('reports that the service is available', async () => {
    const app = await buildApp(environment);
    apps.push(app);

    const response = await app.inject({
      method: 'GET',
      url: '/health',
    });

    expect(response.statusCode).toBe(200);
    expect(response.json()).toEqual({ status: 'ok' });
  });
});
