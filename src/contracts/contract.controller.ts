import { Body, Controller, Get, Post } from '@nestjs/common';
import { ContractDto } from './contract.dto';
import { ContractService } from './contract.service';

@Controller('contracts')
export class ContractController {
  constructor(private readonly contractService: ContractService) {}

  @Post()
  createContract(@Body() payload: ContractDto) {
    return this.contractService.create(payload);
  }

  @Get()
  getAllContracts() {
    return this.contractService.findAll();
  }
}
