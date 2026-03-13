import { Injectable } from '@nestjs/common';
import { ConfigService as NestConfigService } from '@nestjs/config';

@Injectable()
export class AppConfigService {
  constructor(private readonly configService: NestConfigService) {}

  get(key: string): string {
    return this.configService.get<string>(key) ?? '';
  }

  getNumber(key: string): number {
    const value = this.configService.get<string>(key);
    return value ? Number(value) : 0;
  }
}
