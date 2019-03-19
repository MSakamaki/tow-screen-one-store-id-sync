import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  SUB_FEATURE_KEY,
  initialState as subInitialState,
  subReducer
} from './+state/sub.reducer';
import { SubEffects } from './+state/sub.effects';
import { SubFacade } from './+state/sub.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(SUB_FEATURE_KEY, subReducer, {
      initialState: subInitialState
    }),
    EffectsModule.forFeature([SubEffects])
  ],
  providers: [SubFacade]
})
export class StoreSubModule {}
