import { async, TestBed } from '@angular/core/testing';
import { FeaturesPageOneModule } from './features-page-one.module';

describe('FeaturesPageOneModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FeaturesPageOneModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FeaturesPageOneModule).toBeDefined();
  });
});
