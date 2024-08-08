import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import {
  getUsers,
  getUsersSuccess,
  getUsersFailure,
  getUserDetails,
  getUserDetailsSuccess,
  getUserDetailsFailure,
} from './user.actions';
import { CardsService } from '../core/services/cards.service';

@Injectable()
export class UserEffects {
  private cardService = inject(CardsService);
  private actions$ = inject(Actions);

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getUsers),
      switchMap(({ Page }) =>
        this.cardService.getUsers(Page).pipe(
          map((usersResponse) => getUsersSuccess({ usersResponse })),
          catchError((error) => of(getUsersFailure({ error })))
        )
      )
    )
  );

  loadUserDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getUserDetails),
      switchMap((action) =>
        this.cardService.getUserDetails(action.id).pipe(
          map((response) =>
            getUserDetailsSuccess({ userDetails: response.data })
          ),
          catchError((error) => of(getUserDetailsFailure({ error })))
        )
      )
    )
  );
}
