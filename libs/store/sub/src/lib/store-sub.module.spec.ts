import { async, TestBed } from '@angular/core/testing';
import { StoreSubModule } from './store-sub.module';

describe('StoreSubModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [StoreSubModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(StoreSubModule).toBeDefined();
  });
});
