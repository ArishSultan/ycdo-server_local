import { join } from 'path'
import { UsersService } from './users.service'
import { unlinkSync, mkdirSync, writeFileSync } from 'fs';
import { Body, Controller, Post } from '@nestjs/common'
import { IUser } from '../../../data/interfaces/user.interface'
import { SimpleController } from '../../../common/lib/simple.controller'

@Controller('users')
export class UsersController extends SimpleController<IUser> {
  public constructor(protected service: UsersService) {
    super(service)
  }

  @Post('face-image')
  registerFaceImage(@Body() data: { image, user }): any {
    const base64Data = data.image.replace(/^data:image\/png;base64,/, "");
    const path = join(process.cwd(), '..', 'face-images', data.user)

    mkdirSync(path, { recursive: true })
    writeFileSync(join(path, Date.now().toString()), base64Data, { encoding: 'base64' })

    return null
  }
}
