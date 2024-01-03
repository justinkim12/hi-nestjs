import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist:true, //유효하지 않은 속성(데코레이터 없는 것들)은 자동으로 거름
    forbidNonWhitelisted: true, //유효하지 않은 속성이 있으면 바로 오류
    transform: true //객체의 필드 타입으로 자동 변환됨
  }))
  await app.listen(3000);
}
bootstrap();
//git Test Branch