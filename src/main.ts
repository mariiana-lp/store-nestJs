import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common/pipes';
import { AppModule } from './app.module'; 

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, //nigea todos los atributos no definidos en el dto -- ignora
    forbidNonWhitelisted: true, //alerta cuando envia atributos no validos
  }));
  await app.listen(3000);
}
bootstrap();
