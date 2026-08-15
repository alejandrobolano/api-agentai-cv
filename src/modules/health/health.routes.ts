import type { FastifyPluginCallback } from 'fastify';

type HealthResponse = {
  status: 'ok';
};

export const healthRoutes: FastifyPluginCallback = (app, _options, done) => {
  app.get<{ Reply: HealthResponse }>('/health', () => ({
    status: 'ok',
  }));
  done();
};
