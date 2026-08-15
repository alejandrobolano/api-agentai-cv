import cors from '@fastify/cors';
import helmet from '@fastify/helmet';
import rateLimit from '@fastify/rate-limit';
import Fastify, { type FastifyInstance } from 'fastify';

import type { Environment } from '../config/environment.js';
import { healthRoutes } from '../modules/health/health.routes.js';

export async function buildApp(
  environment: Environment,
): Promise<FastifyInstance> {
  const app = Fastify({
    logger: environment.NODE_ENV !== 'test',
  });

  await app.register(helmet);
  await app.register(cors, {
    origin: environment.ALLOWED_ORIGIN,
  });
  await app.register(rateLimit, {
    max: 100,
    timeWindow: '1 minute',
  });
  await app.register(healthRoutes);

  return app;
}
