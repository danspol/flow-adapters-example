import {ActionReducerMap, createSelector} from '@ngrx/store';
import * as fromSearchPaginationReducer from './examples/books/containers/store/reducer';
import {AppSearchPaginationState} from "./examples/books/containers/store/state";

export function debug(reducer) {
  return function (state, action) {
    console.groupCollapsed(action.type);
    console.log('action', action);
    const result = reducer(state, action);
    console.groupEnd();
    return result;
  };
}

export const metaReducers = [debug];

export interface AppState {
  example: AppSearchPaginationState;
}

export const reducers: ActionReducerMap<AppState> = {
  example: fromSearchPaginationReducer.searchPaginationReducer
};

export const getExampleState = (state: AppState) => state.example;
