import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class ContractDto {
  @IsNotEmpty()
  @IsString()
  customerName!: string;

  @IsNotEmpty()
  @IsNumber()
  amount!: number;

  @IsNotEmpty()
  @IsString()
  status!: string;
}
