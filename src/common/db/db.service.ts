import { Model } from 'mongoose'
import * as io from 'socket.io-client'
import { scheduleJob } from 'node-schedule'
import { Constants } from '../../constants'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { resolveCollectionName } from '../utils'
import { IMessage } from '../../modules/message-queue/message.interface'

@Injectable()
export class DbService {
  constructor(
    @InjectModel('medicines')
    private readonly medicinesModel: Model<any>,
    @InjectModel('medicine-stock')
    private readonly medicinesStockModel: Model<any>,

    @InjectModel('surgical-items')
    private readonly surgicalItemsModel: Model<any>,
    @InjectModel('surgical-items-stock')
    private readonly surgicalItemsStockModel: Model<any>,

    @InjectModel('diagnostic-equipments')
    private readonly diagnosticEquipmentsModel: Model<any>,
    @InjectModel('diagnostic-equipments-stock')
    private readonly diagnosticEquipmentsStockModel: Model<any>,

    @InjectModel('branches')
    private readonly branchesModel: Model<any>,
    @InjectModel('doctors')
    private readonly doctorsModel: Model<any>,
    @InjectModel('patients')
    private readonly patientsModel: Model<any>,
    @InjectModel('transactions')
    private readonly transactionsModel: Model<any>
  ) {
    DbService.connectSocket()
    scheduleJob('0 1 * * * *', () => {
      DbService.recheck()
    })
  }

  private static handleMessage(data: IMessage) {
    const service: Model<any> = this[
      resolveCollectionName(data?.collectionName)
    ]

    if (service) {
      switch (data.action) {
        case 'insert':
          service.create(data.data).catch((err) => console.log(err))
          break
        case 'delete':
          service.findByIdAndDelete(data.data._id)
          break
        case 'update':
          service.findByIdAndUpdate(data.data._id, data.data)
          break
      }
    } else {
      console.log('An Invalid Collection Name was provided to the Server.')
    }
  }

  private static connectSocket() {
    Constants.socket = io(Constants.globalUrl)
    Constants.socketStatus = 1

    Constants.socket.on('connect', () => {
      Constants.socketStatus = 0
    })
    Constants.socket.on('message', this.handleMessage)
    Constants.socket.on('disconnect', () => {
      Constants.socketStatus = 2
    })
  }

  private static recheck() {
    if (Constants.socketStatus == 2) {
      this.connectSocket()
    }
  }
}
