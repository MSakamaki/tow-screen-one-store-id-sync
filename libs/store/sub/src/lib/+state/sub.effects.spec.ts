import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';

import { NxModule } from '@nrwl/nx';
import { DataPersistence } from '@nrwl/nx';
import { hot } from '@nrwl/nx/testing';

import { SubEffects } from './sub.effects';
import { LoadSub, SubLoaded } from './sub.actions';

describe('SubEffects', () => {
  let actions: Observable<any>;
  let effects: SubEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NxModule.forRoot(),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([])
      ],
      providers: [
        SubEffects,
        DataPersistence,
        provideMockActions(() => actions)
      ]
    });

    effects = TestBed.get(SubEffects);
  });

  describe('loadSub$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: new LoadSub() });
      expect(effects.loadSub$).toBeObservable(
        hot('-a-|', { a: new SubLoaded([]) })
      );
    });
  });
});
