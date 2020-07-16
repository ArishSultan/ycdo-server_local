import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { BranchesSchema } from '../../../data/schemas/branches.schema'
import { BranchesService } from './branches.service'
import { BranchesController } from './branches.controller'

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: 'branches',
        useFactory: () => BranchesSchema
      }
    ])
  ],
  controllers: [BranchesController],
  providers: [BranchesService]
})
export class BranchesModule {}
