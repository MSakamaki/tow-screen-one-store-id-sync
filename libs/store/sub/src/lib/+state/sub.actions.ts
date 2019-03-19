import { Action } from '@ngrx/store';
import { Entity } from './sub.reducer';

export enum SubActionTypes {
  LoadSub = '[Sub] Load Sub',
  SubLoaded = '[Sub] Sub Loaded',
  SubLoadError = '[Sub] Sub Load Error'
}

export class LoadSub implements Action {
  readonly type = SubActionTypes.LoadSub;
}

export class SubLoadError implements Action {
  readonly type = SubActionTypes.SubLoadError;
  constructor(public payload: any) {}
}

export class SubLoaded implements Action {
  readonly type = SubActionTypes.SubLoaded;
  constructor(public payload: Entity[]) {}
}

export type SubAction = LoadSub | SubLoaded | SubLoadError;

export const fromSubActions = {
  LoadSub,
  SubLoaded,
  SubLoadError
};
