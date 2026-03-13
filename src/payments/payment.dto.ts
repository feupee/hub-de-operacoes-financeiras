import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class PaymentDto {
  @IsNotEmpty()
  @IsNumber()
  contractId!: number;

  @IsNotEmpty()
  @IsNumber()
  amount!: number;

  @IsNotEmpty()
  @IsString()
  method!: string;

  @IsNotEmpty()
  @IsString()
  status!: string;
}
