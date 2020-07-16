import { IDoctor } from '../../../data/interfaces/doctor.interface'
import { Controller } from '@nestjs/common'
import { DoctorsService } from './doctors.service'
import { SimpleController } from '../../../common/lib/simple.controller'

@Controller('doctors')
export class DoctorsController extends SimpleController<IDoctor> {
  constructor(protected readonly service: DoctorsService) {
    super(service)
  }
}
