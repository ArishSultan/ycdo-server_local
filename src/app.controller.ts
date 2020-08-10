import { Body, Controller, Get, Post } from '@nestjs/common';
import { Constants } from './constants';

@Controller()
export class AppController {
  @Get()
  ping(): string {
    return 'Local Server is running !!!'
  }

  @Get('current-shift')
  getCurrentShift(): string {
    return Constants.currentShift
  }

  @Post('current-shift')
  changeCurrentShift(@Body() shift: string): string {
    Constants.currentShift = shift
    return shift
  }
}
