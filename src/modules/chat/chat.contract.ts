import { z } from 'zod';

export const MAX_CHAT_MESSAGE_LENGTH = 2_000;

export const chatRequestSchema = z
  .object({
    conversationId: z.uuid().optional(),
    message: z.string().trim().min(1).max(MAX_CHAT_MESSAGE_LENGTH),
  })
  .strict();

export const chatResponseSchema = z.object({
  conversationId: z.uuid(),
  message: z.object({
    content: z.string().min(1),
    role: z.literal('assistant'),
  }),
});

export const chatErrorResponseSchema = z.object({
  error: z.object({
    code: z.enum(['INVALID_CHAT_REQUEST', 'CHAT_NOT_IMPLEMENTED']),
    details: z
      .array(
        z.object({
          message: z.string(),
          path: z.string(),
        }),
      )
      .optional(),
    message: z.string(),
  }),
});

export type ChatRequest = z.infer<typeof chatRequestSchema>;
export type ChatResponse = z.infer<typeof chatResponseSchema>;
export type ChatErrorResponse = z.infer<typeof chatErrorResponseSchema>;
