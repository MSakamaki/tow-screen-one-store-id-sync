import { CoreAction, CoreActionTypes } from './core.actions';
// 7.0.0-beta.0 for ROUTER_NAVIGATED
import { ROUTER_NAVIGATION, RouterNavigationAction } from '@ngrx/router-store';
import { RouterStateUrl } from '@tow-screen-one-store-id-sync/utils';

export const CORE_FEATURE_KEY = 'core';

/**
 * Interface for the 'Core' data used in
 *  - CoreState, and
 *  - coreReducer
 *
 *  Note: replace if already defined in another module
 */

/* tslint:disable:no-empty-interface */
export interface Entity {
  id: number;
  name: string;
}

export interface CoreState {
  list: Entity[]; // list of Core; analogous to a sql normalized table
  selectedId?: string | number; // which Core record has been selected
  loaded: boolean; // has the Core list been loaded
  error?: any; // last none error (if any)
}

export interface CorePartialState {
  readonly [CORE_FEATURE_KEY]: CoreState;
}

export const initialState: CoreState = {
  list: [],
  loaded: false
};

export function coreReducer(
  state: CoreState = initialState,
  action: CoreAction | RouterNavigationAction<RouterStateUrl>
): CoreState {
  switch (action.type) {
    case CoreActionTypes.CoreLoaded: {
      state = {
        ...state,
        list: action.payload,
        loaded: true
      };
      break;
    }
    case ROUTER_NAVIGATION: {
      if (state.selectedId !== +action.payload.routerState.params.mainId) {
        state = {
          ...state,
          selectedId: +action.payload.routerState.params.mainId
        };
      }
      break;
    }
  }
  return state;
}
