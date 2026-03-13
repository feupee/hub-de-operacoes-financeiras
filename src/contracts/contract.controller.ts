import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags, ApiBody } from '@nestjs/swagger';
import { ContractDto } from './contract.dto';
import { ContractService } from './contract.service';

@ApiTags('contracts')
@Controller('contracts')
export class ContractController {
  constructor(private readonly contractService: ContractService) {}

  @Post()
  @ApiOperation({ summary: 'Criar novo contrato' })
  @ApiBody({ type: ContractDto, description: 'Dados do contrato a ser criado' })
  @ApiResponse({ status: 201, description: 'Contrato criado com sucesso' })
  @ApiResponse({ status: 400, description: 'Dados inválidos' })
  createContract(@Body() payload: ContractDto) {
    return this.contractService.create(payload);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os contratos' })
  @ApiResponse({
    status: 200,
    description: 'Lista de contratos retornada com sucesso',
  })
  getAllContracts() {
    return this.contractService.findAll();
  }
}
