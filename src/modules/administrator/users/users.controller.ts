import { Controller } from '@nestjs/common'
import { UsersService } from './users.service'
import { IUser } from '../../../data/interfaces/user.interface'
import { SimpleController } from '../../../common/lib/simple.controller'

@Controller('users')
export class UsersController extends SimpleController<IUser> {
  public constructor(protected service: UsersService) {
    super(service)
  }
}
