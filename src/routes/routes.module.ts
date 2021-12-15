import { Module } from '@nestjs/common';
import { IndexController } from './index/index.controller';
import { LoginController } from './login/login.controller';
import { FileConversionController } from './file-conversion/file-conversion.controller';

@Module({
  controllers: [
    IndexController,
    LoginController,
    FileConversionController
  ],
})
export class RoutesModule {}
