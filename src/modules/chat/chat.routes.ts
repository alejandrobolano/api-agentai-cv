import type { FastifyPluginCallback } from 'fastify';

import { chatRequestSchema, type ChatErrorResponse } from './chat.contract.js';

export const chatRoutes: FastifyPluginCallback = (app, _options, done) => {
  app.post<{ Body: unknown; Reply: ChatErrorResponse }>(
    '/api/chat',
    (request, reply) => {
      const result = chatRequestSchema.safeParse(request.body);

      if (!result.success) {
        reply.status(400);
        return {
          error: {
            code: 'INVALID_CHAT_REQUEST',
            details: result.error.issues.map((issue) => ({
              message: issue.message,
              path: issue.path.join('.'),
            })),
            message: 'The chat request is invalid.',
          },
        };
      }

      reply.status(501);
      return {
        error: {
          code: 'CHAT_NOT_IMPLEMENTED',
          message: 'The chat provider is not implemented yet.',
        },
      };
    },
  );
  done();
};
