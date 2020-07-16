import { IToken } from '../../../data/interfaces/token.interface'
import { TokensService } from './tokens.service'
import { SimpleController } from '../../../common/lib/simple.controller'
import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Res
} from '@nestjs/common'
// import { Utils } from '../../../utils'

@Controller('tokens')
export class TokensController extends SimpleController<IToken> {
  constructor(protected service: TokensService) {
    super(service)
  }

  @Get('for-sale')
  getTokensForSale() {
    return this.service.getTokensForSale()
  }

  @Get('running')
  getRunningTokens() {
    return this.service.getRunningToken()
  }

  @Get('pending')
  getPendingTokens() {
    return this.service.getPendingToken()
  }

  @Get('report/:id/:iid')
  async getReport(@Param('id') id: any, @Param('iid') iid, @Res() res) {
    let report

    if (await this.service.isPrinted(id)) report = 'duplicate-token'
    else report = 'token'
    report += '.report.odt'

    // await Utils.handleReport(res, report, this.service.find(id))
  }

  /**
   * A Token is not allowed to be deleted once it has been created.
   *
   * @param {any} params
   */
  delete(params): Promise<any> {
    throw new HttpException('Action is not permitted', HttpStatus.BAD_REQUEST)
  }
}
