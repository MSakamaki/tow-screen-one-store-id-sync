import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';

import { SubPartialState } from './sub.reducer';
import {
  LoadSub,
  SubLoaded,
  SubLoadError,
  SubActionTypes
} from './sub.actions';

@Injectable()
export class SubEffects {
  @Effect() loadSub$ = this.dataPersistence.fetch(SubActionTypes.LoadSub, {
    run: (action: LoadSub, state: SubPartialState) => {
      // Your custom REST 'load' logic goes here. For now just return an empty list...
      return new SubLoaded([
        {
          id: 'a',
          name: 'SUB=A'
        },
        {
          id: 'b',
          name: 'SUB=B'
        }
      ]);
    },

    onError: (action: LoadSub, error) => {
      console.error('Error', error);
      return new SubLoadError(error);
    }
  });

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<SubPartialState>
  ) {}
}
