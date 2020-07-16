import { Model } from 'mongoose'
// import { Utils } from '../../utils'
import { IUpdate } from './schema/update.interface'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { SimpleService } from '../lib/simple.service'
import { CommonUtils } from '../lib/common-utils'

@Injectable()
export class UpdatesService extends SimpleService<IUpdate> {
  private readonly username = 'ArishSultan'

  private readonly repositories = {
    server: 'ycdo-hcc-server-local'
  }

  constructor(
    @InjectModel('updates')
    protected readonly model: Model<IUpdate>
  ) {
    super(model)
  }

  // async checkForUpdate(module: string) {
  // CommonUtils.download('https://api.github.com/repos/ArishSultan//releases')
  // }
}
