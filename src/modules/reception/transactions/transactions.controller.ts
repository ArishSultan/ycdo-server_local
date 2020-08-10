import { ITransaction } from '../../../data/interfaces/transaction.interface'
import { SimpleController } from '../../../common/lib/simple.controller'
import { TransactionsService } from './transactions.service'
import { Controller, Get, Param } from '@nestjs/common'

@Controller('transactions')
export class TransactionsController extends SimpleController<ITransaction> {
  constructor(protected readonly service: TransactionsService) {
    super(service)
  }

  // @UseGuards(AuthGuard('jwt'))
  @Get('remaining/:id')
  async remainingAmount(@Param() params) {
    return this.service.remainingAmount(params.id)
  }
}
