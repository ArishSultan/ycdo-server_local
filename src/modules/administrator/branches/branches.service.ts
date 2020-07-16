import { Model } from 'mongoose'
import { IBranch } from '../../../data/interfaces/branches.interface'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { SimpleService } from '../../../common/lib/simple.service'

@Injectable()
export class BranchesService extends SimpleService<IBranch> {
  public constructor(
    @InjectModel('branches')
    protected model: Model<IBranch>
  ) {
    super(model)
  }
}
