import { AppService } from './app.service';
import { Controller, Get } from '@nestjs/common';
import { Public } from './utils/decorators/public.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Public()
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
