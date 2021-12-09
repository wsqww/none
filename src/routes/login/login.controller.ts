import { Controller, Get } from '@nestjs/common';

@Controller('login')
export class LoginController {
  // constructor() {}

  @Get()
  index(): string {
    return 'login';
  }
}
