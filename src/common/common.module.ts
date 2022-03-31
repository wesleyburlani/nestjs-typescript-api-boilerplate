import { Global, Module } from '@nestjs/common';
import { ConfigurationService } from './configuration/configuration.service';

@Global()
@Module({
  providers: [ConfigurationService],
  exports: [ConfigurationService],
})
export class CommonModule {}
