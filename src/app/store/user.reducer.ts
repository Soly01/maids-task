import { createReducer, on } from '@ngrx/store';
import {
  getUsers,
  getUsersSuccess,
  getUsersFailure,
  getUserDetails,
  getUserDetailsSuccess,
} from './user.actions';
import { initialState } from '../core/interface/user.interface';

export const userReducer = createReducer(
  initialState,
  on(getUsers, (state) => ({ ...state })),

  on(getUsersSuccess, (state, { usersResponse }) => ({
    ...state,
    usersResponse,
  })),
  on(getUserDetails, (state) => ({ ...state })),

  on(getUserDetailsSuccess, (state, { userDetails }) => ({
    ...state,
    userDetails,
  }))
);
