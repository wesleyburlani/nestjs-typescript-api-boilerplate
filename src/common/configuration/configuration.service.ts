import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigurationService {
  private environmentHosting: string = process.env.NODE_ENV || 'development';

  get(name: string): string {
    return process.env[name];
  }

  get isDevelopment(): boolean {
    return this.environmentHosting === 'development';
  }
}
