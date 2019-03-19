import { async, TestBed } from '@angular/core/testing';
import { FeaturesPageTowModule } from './features-page-tow.module';

describe('FeaturesPageTowModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FeaturesPageTowModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FeaturesPageTowModule).toBeDefined();
  });
});
