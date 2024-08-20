import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as config from 'config';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ['http://localhost:3000']
  });

  const serverConfig = config.get('server');
  const port = serverConfig.port;
  await app.listen(port);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
