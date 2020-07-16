import { Injectable } from '@nestjs/common'
import { MongooseModuleOptions, MongooseOptionsFactory } from '@nestjs/mongoose'

@Injectable()
export class MongooseConfigService implements MongooseOptionsFactory {
  private username = ''
  private password = ''

  createMongooseOptions():
    | Promise<MongooseModuleOptions>
    | MongooseModuleOptions {
    return {
      useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
      uri: 'mongodb://localhost:27017/ycdo-hcc__db'
    }
  }
}
