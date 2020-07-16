import { IBranch } from '../../../data/interfaces/branches.interface'
import { Controller } from '@nestjs/common'
import { BranchesService } from './branches.service'
import { SimpleController } from '../../../common/lib/simple.controller'

@Controller('branches')
export class BranchesController extends SimpleController<IBranch> {
  public constructor(protected service: BranchesService) {
    super(service)
  }
}
