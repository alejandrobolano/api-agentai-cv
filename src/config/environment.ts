import { z } from 'zod';

const environmentSchema = z.object({
  ALLOWED_ORIGIN: z.url(),
  HOST: z.string().min(1).default('0.0.0.0'),
  NODE_ENV: z
    .enum(['development', 'test', 'production'])
    .default('development'),
  PORT: z.coerce.number().int().positive().max(65_535).default(3000),
});

export type Environment = z.infer<typeof environmentSchema>;

export function parseEnvironment(
  source: NodeJS.ProcessEnv = process.env,
): Environment {
  return environmentSchema.parse(source);
}
