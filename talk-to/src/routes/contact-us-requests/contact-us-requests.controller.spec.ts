import { Test, TestingModule } from '@nestjs/testing';
import { ContactUsRequestsController } from './contact-us-requests.controller';
import { ContactUsRequestsService } from './contact-us-requests.service';

describe('ContactUsRequestsController', () => {
  let controller: ContactUsRequestsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContactUsRequestsController],
      providers: [ContactUsRequestsService],
    }).compile();

    controller = module.get<ContactUsRequestsController>(ContactUsRequestsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
