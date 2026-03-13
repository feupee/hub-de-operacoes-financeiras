import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags, ApiBody } from '@nestjs/swagger';
import { PaymentDto } from './payment.dto';
import { PaymentService } from './payment.service';

@ApiTags('payments')
@Controller('payments')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post()
  @ApiOperation({ summary: 'Criar novo pagamento' })
  @ApiBody({ type: PaymentDto, description: 'Dados do pagamento a ser criado' })
  @ApiResponse({ status: 201, description: 'Pagamento criado com sucesso' })
  @ApiResponse({ status: 400, description: 'Dados inválidos' })
  createPayment(@Body() payload: PaymentDto) {
    return this.paymentService.create(payload);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os pagamentos' })
  @ApiResponse({
    status: 200,
    description: 'Lista de pagamentos retornada com sucesso',
  })
  getAllPayments() {
    return this.paymentService.findAll();
  }
}
