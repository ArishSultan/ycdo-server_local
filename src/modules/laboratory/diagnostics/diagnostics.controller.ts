import { Controller } from '@nestjs/common'
import { IDiagnostic } from '../../../data/interfaces/diagnostics.interface'
import { SimpleController } from '../../../common/lib/simple.controller'
import { DiagnosticsService } from './diagnostics.service'

@Controller('diagnostics')
export class DiagnosticsController extends SimpleController<IDiagnostic> {
  public constructor(protected service: DiagnosticsService) {
    super(service)
  }
}
