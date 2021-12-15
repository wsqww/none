import { Controller, Get } from '@nestjs/common';

@Controller('file_conversion')
export class FileConversionController {
  constructor() {}

  @Get()
  index() {
    return 'File conversion';
  }

  json2excel() {
    return 'json2excel';
  }

  excel2json() {
    return 'excel2json';
  }
}
