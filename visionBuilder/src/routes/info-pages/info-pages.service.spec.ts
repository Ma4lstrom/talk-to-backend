import { Test, TestingModule } from '@nestjs/testing';
import { InfoPagesService } from './info-pages.service';

describe('InfoPagesService', () => {
  let service: InfoPagesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InfoPagesService],
    }).compile();

    service = module.get<InfoPagesService>(InfoPagesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
