import { Model } from 'mongoose';
import { Injectable } from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose';
import { MedicinesService } from './medicines/medicines.service';
import { SurgicalItemsService } from './surgical-items/surgical-items.service';
import { DiagnosticEquipmentsService } from './diagnostic-equipments/diagnostic-equipments.service';

@Injectable()
export class StockSaleService {
  // constructor(
    // @InjectModel('medicine-sales')
    // private readonly medicineSalesModel: Model<any>,
    // @InjectModel('surgical-items-sales')
    // private readonly surgicalItemSalesModel: Model<any>,
    // @InjectModel('diagnostic-equipments-sales')
    // private readonly diagnosticEquipmentSalesModel: Model<any>,

    // private readonly medicinesService: MedicinesService,
    // private readonly surgicalItemsService: SurgicalItemsService,
    // private readonly diagnosticItemsService: DiagnosticEquipmentsService,
  // ) {
  // }
  //
  // saleMedicine() {
  //
  // }
}
