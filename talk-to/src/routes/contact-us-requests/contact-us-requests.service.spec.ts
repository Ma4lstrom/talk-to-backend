import { Test, TestingModule } from '@nestjs/testing';
import { ContactUsRequestsService } from './contact-us-requests.service';

describe('ContactUsRequestsService', () => {
  let service: ContactUsRequestsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContactUsRequestsService],
    }).compile();

    service = module.get<ContactUsRequestsService>(ContactUsRequestsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
