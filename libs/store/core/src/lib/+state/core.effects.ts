import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';

import { CorePartialState } from './core.reducer';
import {
  LoadCore,
  CoreLoaded,
  CoreLoadError,
  CoreActionTypes
} from './core.actions';

@Injectable()
export class CoreEffects {
  @Effect() loadCore$ = this.dataPersistence.fetch(CoreActionTypes.LoadCore, {
    run: (action: LoadCore, state: CorePartialState) => {
      return new CoreLoaded([
        {
          id: 1,
          name: 'one'
        },
        {
          id: 10,
          name: 'ten'
        },
        {
          id: 100,
          name: 'hundred'
        },
        {
          id: 1000,
          name: 'thousand'
        }
      ]);
    },

    onError: (action: LoadCore, error) => {
      console.error('Error', error);
      return new CoreLoadError(error);
    }
  });

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<CorePartialState>
  ) {}
}
