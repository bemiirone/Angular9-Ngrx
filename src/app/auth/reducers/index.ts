import { User } from './../model/user.model';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  createReducer,
  on,
} from '@ngrx/store';
import { AuthActions } from '../action-types';

export interface AuthState {
  user: User;
}

const initialAuthState = {
  user: null
}

export const authReducer = createReducer(
  initialAuthState,
  on(AuthActions.login, (state, action) => {
    return {
      user: action.user
    }
  }
  )
);
