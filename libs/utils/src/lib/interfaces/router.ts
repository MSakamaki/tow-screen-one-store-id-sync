import { Params } from '@angular/router';
import { RouterReducerState } from '@ngrx/router-store';

export interface URLParameters {
  mainId?: string;
  subId?: string;
}

export interface RouterStateUrl {
  url: string;
  params: URLParameters;
  queryParams: Params;
}

export interface State {
  router: RouterReducerState<RouterStateUrl>;
}
