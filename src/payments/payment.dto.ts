import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class PaymentDto {
  @ApiProperty({
    description: 'ID do contrato associado',
    example: 1,
    type: 'number',
  })
  @IsNotEmpty()
  @IsNumber()
  contractId!: number;

  @ApiProperty({
    description: 'Valor do pagamento',
    example: 1250,
    type: 'number',
  })
  @IsNotEmpty()
  @IsNumber()
  amount!: number;

  @ApiProperty({
    description: 'Método de pagamento',
    example: 'credit_card',
    enum: ['credit_card', 'bank_transfer', 'pix', 'boleto'],
  })
  @IsNotEmpty()
  @IsString()
  method!: string;

  @ApiProperty({
    description: 'Status do pagamento',
    example: 'pending',
    enum: ['pending', 'processing', 'completed', 'failed'],
  })
  @IsNotEmpty()
  @IsString()
  status!: string;
}
