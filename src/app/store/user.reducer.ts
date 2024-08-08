import { createReducer, on } from '@ngrx/store';
import {
  loadUsers,
  loadUsersSuccess,
  loadUsersFailure,
  loadUserDetails,
  loadUserDetailsSuccess,
} from './user.actions';
import {
  UsersResponse,
  initialState,
  User,
} from '../../../interface/user.interface';

export const userReducer = createReducer(
  initialState,
  on(loadUsers, (state) => ({ ...state })),

  on(loadUsersSuccess, (state, { usersResponse }) => ({
    ...state,
    usersResponse,
  })),
  on(loadUserDetails, (state) => ({ ...state })),

  on(loadUserDetailsSuccess, (state, { userDetails }) => ({
    ...state,
    userDetails,
  }))
);
