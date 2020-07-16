import { Model } from 'mongoose'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { IRoom } from '../../../data/interfaces/room.interface'
import { SimpleService } from '../../../common/lib/simple.service'

@Injectable()
export class RoomsService extends SimpleService<IRoom> {
  constructor(
    @InjectModel('rooms')
    protected readonly model: Model<IRoom>
  ) {
    super(model)
  }

  getByBranch(branch: string): Promise<IRoom | IRoom[]> {
    if (branch) {
      return this.model.find().where({ branch }).exec()
    } else return super.fetch()
  }
}
