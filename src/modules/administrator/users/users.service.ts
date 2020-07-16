import { Model } from 'mongoose'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { IUser } from '../../../data/interfaces/user.interface'
import { SimpleService } from '../../../common/lib/simple.service'

@Injectable()
export class UsersService extends SimpleService<IUser> {
  public constructor(
    @InjectModel('users')
    protected model: Model<IUser>
  ) {
    super(model)
  }

  create(document: IUser): Promise<IUser> {
    // document.password = Utils.hash(document.password)
    return super.create(document)
  }

  change(document: IUser): Promise<IUser> {
    // document.password = Utils.hash(document.password)
    return super.change(document)
  }

  public fetchByUsername(username: string): Promise<IUser | null> {
    return this.model.findOne({ username }).exec()
  }
}
