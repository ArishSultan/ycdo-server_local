import { IPatient } from '../../../data/interfaces/patient.interface'
import { Controller } from '@nestjs/common'
import { PatientsService } from './patients.service'
import { SimpleController } from '../../../common/lib/simple.controller'

@Controller('patients')
export class PatientsController extends SimpleController<IPatient> {
  public constructor(protected service: PatientsService) {
    super(service)
  }
}
