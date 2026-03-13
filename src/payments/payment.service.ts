import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PaymentDto } from './payment.dto';
import { Payment } from './payment.entity';

@Injectable()
export class PaymentService {
  constructor(
    @InjectRepository(Payment)
    private readonly paymentRepository: Repository<Payment>,
  ) {}

  create(payload: PaymentDto): Promise<Payment> {
    const payment = this.paymentRepository.create(payload);
    return this.paymentRepository.save(payment);
  }

  findAll(): Promise<Payment[]> {
    return this.paymentRepository.find();
  }
}
