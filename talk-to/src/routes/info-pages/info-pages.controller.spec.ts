import { Test, TestingModule } from '@nestjs/testing';
import { InfoPagesController } from './info-pages.controller';
import { InfoPagesService } from './info-pages.service';

describe('InfoPagesController', () => {
  let controller: InfoPagesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InfoPagesController],
      providers: [InfoPagesService],
    }).compile();

    controller = module.get<InfoPagesController>(InfoPagesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
