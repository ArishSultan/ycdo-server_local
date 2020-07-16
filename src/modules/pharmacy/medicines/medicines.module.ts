import { Module } from '@nestjs/common'
import { MedicinesService } from './medicines.service'
import { MedicinesController } from './medicines.controller'
import { MongooseModule } from '@nestjs/mongoose'
import { MedicinesSchema } from '../../../data/schemas/medicines.schema'
import { MedicinesStockSchema } from '../../../data/schemas/medicines-stock.schema'

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: 'medicines',
        useFactory: () => MedicinesSchema
      },
      {
        name: 'medicine-stock',
        useFactory: () => MedicinesStockSchema
      }
    ])
  ],
  providers: [MedicinesService],
  controllers: [MedicinesController],
  exports: [MedicinesService]
})
export class MedicinesModule {}
