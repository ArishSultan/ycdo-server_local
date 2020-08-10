import { Module } from '@nestjs/common'
import { AppController } from './app.controller'

import { DbModule } from './common/db/db.module'
import { AuthModule } from './common/auth/auth.module'
import { UsersModule } from './modules/administrator/users/users.module'
import { AdminModule } from './modules/administrator/admin.module'
import { BranchesModule } from './modules/administrator/branches/branches.module'
import { PharmacyModule } from './modules/pharmacy/pharmacy.module'
import { ReceptionModule } from './modules/reception/reception.module'
import { LaboratoryModule } from './modules/laboratory/laboratory.module'
import { MessagesQueueModule } from './modules/message-queue/messages-queue.module'
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    DbModule,

    MessagesQueueModule,
    AuthModule,

    UsersModule,
    AdminModule,

    ServeStaticModule.forRoot({
      rootPath: join(process.cwd(), '..', 'face-images'),
    }),

    BranchesModule,
    PharmacyModule,
    ReceptionModule,
    LaboratoryModule
  ],
  controllers: [AppController]
})
export class AppModule {}
