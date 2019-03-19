import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { SubPartialState } from './sub.reducer';
import { subQuery } from './sub.selectors';
import { LoadSub } from './sub.actions';

@Injectable()
export class SubFacade {
  loaded$ = this.store.pipe(select(subQuery.getLoaded));
  allSub$ = this.store.pipe(select(subQuery.getAllSub));
  selectedSub$ = this.store.pipe(select(subQuery.getSelectedSub));

  constructor(private store: Store<SubPartialState>) {}

  loadAll() {
    this.store.dispatch(new LoadSub());
  }
}
