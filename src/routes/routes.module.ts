import { Module } from '@nestjs/common';
import { IndexController } from './index/index.controller';
import { LoginController } from './login/login.controller';

@Module({
  controllers: [IndexController, LoginController],
})
export class RoutesModule {}
