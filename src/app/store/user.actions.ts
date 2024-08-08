import { createAction, props } from '@ngrx/store';
import { UsersRes, User } from '../core/interface/user.interface';

export const getUsers = createAction(
  '[User] get Users',
  props<{ Page: number }>()
);

export const getUsersSuccess = createAction(
  '[User] get Users Success',
  props<{ usersResponse: UsersRes }>()
);

export const getUsersFailure = createAction(
  '[User] get Users Failure',
  props<{ error: any }>()
);

export const getUserDetails = createAction(
  '[User] get User Details',
  props<{ id: number }>()
);

export const getUserDetailsSuccess = createAction(
  '[User] get User Details Success',
  props<{ userDetails: User }>()
);

export const getUserDetailsFailure = createAction(
  '[User] get User Details Failure',
  props<{ error: any }>()
);
