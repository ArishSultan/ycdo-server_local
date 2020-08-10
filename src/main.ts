import { join } from 'path'
import { AppModule } from './app.module'
import { NestFactory } from '@nestjs/core'

import * as bodyParser from 'body-parser'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.enableCors()
  app.use(bodyParser.json({ limit: '50mb' }))

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  app.useStaticAssets(join(process.cwd(), '..', 'uploads'))
  await app.listen(4000)
}
bootstrap().then(null)
