import { Params, RouterStateSnapshot } from '@angular/router';
import {
  RouterStateSerializer,
  routerReducer,
  RouterReducerState
} from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';
import { RouterStateUrl, State } from '@tow-screen-one-store-id-sync/utils';

export class CustomSerializer implements RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    let route = routerState.root;
    let params: Params = {};

    while (route.firstChild) {
      route = route.firstChild;
      params = { ...params, ...route.params };
    }

    const {
      url,
      root: { queryParams }
    } = routerState;

    return { url, params, queryParams };
  }
}
export const reducers: ActionReducerMap<State> = {
  router: routerReducer
};
