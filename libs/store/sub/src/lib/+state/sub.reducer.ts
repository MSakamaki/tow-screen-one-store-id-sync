import { SubAction, SubActionTypes } from './sub.actions';
import { ROUTER_NAVIGATION, RouterNavigationAction } from '@ngrx/router-store';
import { RouterStateUrl } from '@tow-screen-one-store-id-sync/utils';

export const SUB_FEATURE_KEY = 'sub';

/**
 * Interface for the 'Sub' data used in
 *  - SubState, and
 *  - subReducer
 *
 *  Note: replace if already defined in another module
 */

/* tslint:disable:no-empty-interface */
export interface Entity {
  id: string;
  name: string;
}

export interface SubState {
  list: Entity[]; // list of Sub; analogous to a sql normalized table
  selectedId?: string | number; // which Sub record has been selected
  loaded: boolean; // has the Sub list been loaded
  error?: any; // last none error (if any)
}

export interface SubPartialState {
  readonly [SUB_FEATURE_KEY]: SubState;
}

export const initialState: SubState = {
  list: [],
  loaded: false
};

export function subReducer(
  state: SubState = initialState,
  action: SubAction | RouterNavigationAction<RouterStateUrl>
): SubState {
  switch (action.type) {
    case SubActionTypes.SubLoaded: {
      state = {
        ...state,
        list: action.payload,
        loaded: true
      };
      break;
    }
    case ROUTER_NAVIGATION: {
      if (state.selectedId !== action.payload.routerState.params.subId) {
        state = {
          ...state,
          selectedId: action.payload.routerState.params.subId
        };
      }
      break;
    }
  }
  return state;
}
