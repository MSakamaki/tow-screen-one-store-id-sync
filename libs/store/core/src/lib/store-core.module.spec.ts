import { async, TestBed } from '@angular/core/testing';
import { StoreCoreModule } from './store-core.module';

describe('StoreCoreModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [StoreCoreModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(StoreCoreModule).toBeDefined();
  });
});
