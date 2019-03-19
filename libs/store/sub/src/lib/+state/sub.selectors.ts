import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SUB_FEATURE_KEY, SubState } from './sub.reducer';

// Lookup the 'Sub' feature state managed by NgRx
const getSubState = createFeatureSelector<SubState>(SUB_FEATURE_KEY);

const getLoaded = createSelector(
  getSubState,
  (state: SubState) => state.loaded
);
const getError = createSelector(
  getSubState,
  (state: SubState) => state.error
);

const getAllSub = createSelector(
  getSubState,
  getLoaded,
  (state: SubState, isLoaded) => {
    return isLoaded ? state.list : [];
  }
);
const getSelectedId = createSelector(
  getSubState,
  (state: SubState) => state.selectedId
);
const getSelectedSub = createSelector(
  getAllSub,
  getSelectedId,
  (sub, id) => {
    const result = sub.find(it => it['id'] === id);
    return result ? Object.assign({}, result) : undefined;
  }
);

export const subQuery = {
  getLoaded,
  getError,
  getAllSub,
  getSelectedSub
};
