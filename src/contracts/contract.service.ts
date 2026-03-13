import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ContractDto } from './contract.dto';
import { Contract } from './contract.entity';

@Injectable()
export class ContractService {
  constructor(
    @InjectRepository(Contract)
    private readonly contractRepository: Repository<Contract>,
  ) {}

  create(payload: ContractDto): Promise<Contract> {
    const contract = this.contractRepository.create(payload);
    return this.contractRepository.save(contract);
  }

  findAll(): Promise<Contract[]> {
    return this.contractRepository.find();
  }
}
