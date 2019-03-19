import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  CORE_FEATURE_KEY,
  initialState as coreInitialState,
  coreReducer
} from './+state/core.reducer';
import { CoreEffects } from './+state/core.effects';
import { CoreFacade } from './+state/core.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(CORE_FEATURE_KEY, coreReducer, {
      initialState: coreInitialState
    }),
    EffectsModule.forFeature([CoreEffects])
  ],
  providers: [CoreFacade]
})
export class StoreCoreModule {}
