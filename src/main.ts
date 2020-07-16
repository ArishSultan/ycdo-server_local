import * as io from 'socket.io-client'
import { AppModule } from './app.module'
import { NestFactory } from '@nestjs/core'
import { Constants } from './constants'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.enableCors()
  await app.listen(4000)
}
bootstrap().then(null)
