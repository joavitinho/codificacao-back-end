import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service.js';

@Controller('status')
export class AppController {
  constructor(private readonly appService: AppService) {}

  
  getHello(): string {
    return this.appService.getHello();
  }
}