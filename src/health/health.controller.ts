import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';

@Controller('health')
export class HealthController {
  @Get()
  @ApiOkResponse({ type: String })
  async get(): Promise<string> {
    return 'OK';
  }
}
