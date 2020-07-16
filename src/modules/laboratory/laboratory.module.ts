import { Module } from '@nestjs/common'
import { DiagnosticsModule } from './diagnostics/diagnostics.module'

@Module({
  imports: [DiagnosticsModule]
})
export class LaboratoryModule {}
