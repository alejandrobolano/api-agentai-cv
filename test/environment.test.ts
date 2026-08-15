import { describe, expect, it } from 'vitest';

import { parseEnvironment } from '../src/config/environment.js';

describe('parseEnvironment', () => {
  it('parses a valid environment', () => {
    expect(
      parseEnvironment({
        ALLOWED_ORIGIN: 'https://alejandrobolano.com',
        HOST: '0.0.0.0',
        NODE_ENV: 'production',
        PORT: '3000',
      }),
    ).toEqual({
      ALLOWED_ORIGIN: 'https://alejandrobolano.com',
      HOST: '0.0.0.0',
      NODE_ENV: 'production',
      PORT: 3000,
    });
  });

  it('rejects an invalid origin', () => {
    expect(() =>
      parseEnvironment({
        ALLOWED_ORIGIN: 'not-a-url',
      }),
    ).toThrow();
  });
});
