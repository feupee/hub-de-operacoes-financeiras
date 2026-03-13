import { Body, Controller, Get, Post } from '@nestjs/common';
import { PaymentDto } from './payment.dto';
import { PaymentService } from './payment.service';

@Controller('payments')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post()
  createPayment(@Body() payload: PaymentDto) {
    return this.paymentService.create(payload);
  }

  @Get()
  getAllPayments() {
    return this.paymentService.findAll();
  }
}
