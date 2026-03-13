import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ContractDto {
  @ApiProperty({
    description: 'Nome do cliente',
    example: 'Empresa XYZ',
  })
  @IsNotEmpty()
  @IsString()
  customerName!: string;

  @ApiProperty({
    description: 'Valor do contrato',
    example: 5000,
    type: 'number',
  })
  @IsNotEmpty()
  @IsNumber()
  amount!: number;

  @ApiProperty({
    description: 'Status do contrato',
    example: 'pending',
    enum: ['pending', 'active', 'completed', 'cancelled'],
  })
  @IsNotEmpty()
  @IsString()
  status!: string;
}
