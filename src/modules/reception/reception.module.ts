import { Module } from '@nestjs/common'
import { PatientsModule } from './patients/patients.module'
import { TokensModule } from './tokens/tokens.module'
import { TransactionsModule } from './transactions/transactions.module'

@Module({
  imports: [TokensModule, PatientsModule, TransactionsModule]
})
export class ReceptionModule {}
