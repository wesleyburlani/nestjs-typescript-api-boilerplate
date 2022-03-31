import { Test, TestingModule } from '@nestjs/testing';
import { ConfigurationService } from './configuration.service';

describe('ConfigurationService', () => {
  let service: ConfigurationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConfigurationService],
    }).compile();

    service = module.get<ConfigurationService>(ConfigurationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return the value of the environment variable', () => {
    process.env.MY_VAR = 'test';
    expect(service.get('MY_VAR')).toBe('test');
  });

  it('should return the undefined on an undefined environment variable', () => {
    expect(service.get('UNDEFINED_VAR')).toBe(undefined);
  });

  it('should return that it is not the development environment', () => {
    process.env.NODE_ENV = 'production';
    expect(service.isDevelopment).toBe(false);
  });

  it('should return that it is the development environment', () => {
    process.env.NODE_ENV = 'development';
    expect(service.isDevelopment).toBe(false);
  });
});
