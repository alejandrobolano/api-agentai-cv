import { describe, expect, it } from 'vitest';

import {
  chatRequestSchema,
  chatResponseSchema,
  MAX_CHAT_MESSAGE_LENGTH,
} from '../src/modules/chat/chat.contract.js';

describe('chatRequestSchema', () => {
  it('accepts and normalizes a valid request', () => {
    expect(
      chatRequestSchema.parse({
        conversationId: '3d6f0a45-2601-46a6-9056-8f358f751228',
        message: '  Hola  ',
      }),
    ).toEqual({
      conversationId: '3d6f0a45-2601-46a6-9056-8f358f751228',
      message: 'Hola',
    });
  });

  it.each([
    { message: '' },
    { message: '   ' },
    { message: 'a'.repeat(MAX_CHAT_MESSAGE_LENGTH + 1) },
    { conversationId: 'invalid', message: 'Hola' },
    { message: 'Hola', unknown: true },
  ])('rejects an invalid request: %o', (request) => {
    expect(chatRequestSchema.safeParse(request).success).toBe(false);
  });
});

describe('chatResponseSchema', () => {
  it('accepts the documented assistant response', () => {
    expect(
      chatResponseSchema.safeParse({
        conversationId: '3d6f0a45-2601-46a6-9056-8f358f751228',
        message: {
          content: 'Hola, ¿en qué puedo ayudarte?',
          role: 'assistant',
        },
      }).success,
    ).toBe(true);
  });
});
