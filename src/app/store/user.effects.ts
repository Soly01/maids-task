import { CardsService } from './../../services/cards.service';
import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import {
  loadUsers,
  loadUsersSuccess,
  loadUsersFailure,
  loadUserDetails,
  loadUserDetailsSuccess,
  loadUserDetailsFailure,
} from './user.actions';

@Injectable()
export class UserEffects {
  private cardService = inject(CardsService);
  private actions$ = inject(Actions);

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUsers),
      switchMap(({ Page }) =>
        this.cardService.getUsers(Page).pipe(
          map((usersResponse) => loadUsersSuccess({ usersResponse })),
          catchError((error) => of(loadUsersFailure({ error })))
        )
      )
    )
  );

  loadUserDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUserDetails),
      switchMap((action) =>
        this.cardService.getUserDetails(action.id).pipe(
          map((response) =>
            loadUserDetailsSuccess({ userDetails: response.data })
          ),
          catchError((error) => of(loadUserDetailsFailure({ error })))
        )
      )
    )
  );
}
