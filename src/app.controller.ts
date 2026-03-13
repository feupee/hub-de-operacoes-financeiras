import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('health')
@Controller()
export class AppController {
  @Get()
  @ApiOperation({ summary: 'Verificar saúde da API' })
  @ApiResponse({
    status: 200,
    description: 'API está funcionando corretamente',
  })
  getHealth() {
    return { status: 'ok' };
  }
}
