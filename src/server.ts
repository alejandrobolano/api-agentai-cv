import { buildApp } from './app/build-app.js';
import { parseEnvironment } from './config/environment.js';

const environment = parseEnvironment();
const app = await buildApp(environment);

try {
  await app.listen({
    host: environment.HOST,
    port: environment.PORT,
  });
} catch (error) {
  app.log.error(error);
  process.exit(1);
}
