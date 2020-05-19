import { RouterState, routerReducer } from '@ngrx/router-store';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';

export interface AppState {

}

export function logger(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    console.log('State before', state);
    console.log('action', action);

    return reducer(state, action);
  }
  
}

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer

};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [logger] : [];
