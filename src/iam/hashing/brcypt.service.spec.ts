import { Test, TestingModule } from '@nestjs/testing';
import { BrcyptService } from './brcypt.service';

describe('BrcyptService', () => {
  let service: BrcyptService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BrcyptService],
    }).compile();

    service = module.get<BrcyptService>(BrcyptService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
