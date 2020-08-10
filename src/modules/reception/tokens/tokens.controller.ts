import { IToken } from '../../../data/interfaces/token.interface'
import { TokensService } from './tokens.service'
import { SimpleController } from '../../../common/lib/simple.controller'
import {
  Get,
  Res,
  Query,
  HttpStatus,
  Controller,
  HttpException,
} from '@nestjs/common'
import WritableStream = NodeJS.WritableStream;

@Controller('tokens')
export class TokensController extends SimpleController<IToken> {
  constructor(protected service: TokensService) {
    super(service)
  }

  @Get()
  getAll(@Query('state') state?: string): Promise<IToken[] | IToken> {
    if (state) {
      return this.service.fetchByTokenState(state)
    } else {
      return super.getAll()
    }
  }

  @Get('printable')
  async getTokenPrintable(@Query() query: Record<string, any>, @Res() res: WritableStream): Promise<void> {
    if (query.token) {
      if (query.user) {
        (await this.service.print(query.token, query.user)).pipe(res)
      } else {
        res.end('Provide a valid [USER_ID (ObjectId)]')
      }
    } else {
      res.end('Provide a Valid [TOKEN_ID (ObjectId)]')
    }
  }

  @Get('range')
  getRange(@Query('start') start: string, @Query('end') end: string): Promise<IToken[]> {
    return this.service.fetchTokensInRange(new Date(start), new Date(end));
  }

  /** @deprecated */
  @Get('for-sale')
  getTokensForSale(): Promise<IToken[]> {
    return this.service.fetchByTokenState('for-sale')
  }

  /** @deprecated */
  @Get('running')
  getRunningTokens(): Promise<IToken[]> {
    return this.service.fetchByTokenState('running')
  }

  /** @deprecated */
  @Get('pending')
  getPendingTokens(): Promise<IToken[]> {
    return this.service.fetchByTokenState('pending')
  }

  /**
   * A Token is not allowed to be deleted once it has been created.
   */
  delete(): Promise<any> {
    throw new HttpException('Action is not permitted', HttpStatus.BAD_REQUEST)
  }
}
