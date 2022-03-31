import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CommonModule } from './common/common.module';
import { HealthController } from './health/health.controller';
import { LoggerModule } from 'nestjs-pino';

@Module({
  imports: [
    LoggerModule.forRoot({
      pinoHttp: {
        customReceivedMessage: (req) => {
          const { method, url } = req;
          return `${method} ${url} received`;
        },
        customSuccessMessage: (res) => {
          const { statusCode } = res;
          return `status code ${statusCode} response`;
        },
        customErrorMessage: function (error, res) {
          const { statusCode } = res;
          return `status code ${statusCode} error response`;
        },
        customAttributeKeys: {
          req: 'request',
          res: 'response',
          err: 'error',
        },
        prettyPrint: {
          colorize: true,
          levelFirst: true,
          translateTime: 'UTC:mm/dd/yyyy, h:MM:ss TT',
        },
      },
    }),
    CommonModule,
    ConfigModule.forRoot(),
  ],
  controllers: [HealthController],
  providers: [],
})
export class AppModule {}
