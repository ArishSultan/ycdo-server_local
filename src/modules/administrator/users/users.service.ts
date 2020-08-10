import { join } from 'path'
import { Model } from 'mongoose'
import { writeFileSync } from 'fs'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { IUser } from '../../../data/interfaces/user.interface'
import { SimpleService } from '../../../common/lib/simple.service'
import { MessagesQueueService } from '../../message-queue/messages-queue.service'

@Injectable()
export class UsersService extends SimpleService<IUser> {
  public constructor(
    @InjectModel('users')
    protected model: Model<IUser>,
    protected readonly messagesQueueService: MessagesQueueService
  ) {
    super(model, messagesQueueService)
  }

  async create(document: IUser): Promise<IUser> {
    const images = []
    if (document.images) {
      document.images.map((image) => image.split(';base64,').pop())
        .forEach(image => {
          const name = Date.now().toString()
          writeFileSync(join(process.cwd(), '..', 'uploads', name), image, { encoding: 'base64' })

          images.push({ name, path: join('..', name) })
        });
    }

    document.images = images
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
