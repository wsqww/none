import { Controller, Get } from '@nestjs/common';

@Controller('/')
export class IndexController {
  // constructor() {}

  @Get()
  index() {
    return 'index';
  }
}
