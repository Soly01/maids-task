import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectUserDetails, selectUsers } from '../../store/user.selectors';
import { UsersRes, User } from '../interface/user.interface';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  private usersCache = new Map<number, any>();
  private usersDetailsCache = new Map<number, any>();
  private http = inject(HttpClient);
  private store = inject(Store);
  getUsers(page: number): Observable<UsersRes> {
    if (this.usersCache.has(page)) {
      console.log(`Retrieving data for page ${page} from cache`);
      return of(this.usersCache.get(page));
    } else {
      console.log(`Fetching data for page ${page} from server`);
      return this.http
        .get<UsersRes>(`https://reqres.in/api/users?page=${page}`)
        .pipe(
          tap((data) => {
            this.usersCache.set(page, data);
            console.log(`Data for page ${page} has been cached`);
          })
        );
    }
  }
  selectAllUsers(): Observable<UsersRes> {
    return this.store.select(selectUsers);
  }
  getUserDetails(id: number): Observable<{ data: User }> {
    if (this.usersDetailsCache.has(id)) {
      console.log(`Retrieving data for user ID ${id} from cache`);
      return of(this.usersDetailsCache.get(id));
    } else {
      console.log(`Fetching data for user ID ${id} from server`);
      return this.http
        .get<{ data: User }>(`https://reqres.in/api/users/${id}`)
        .pipe(
          tap((data) => {
            this.usersDetailsCache.set(id, data);
            console.log(`Data for user ID ${id} has been cached`);
          })
        );
    }
  }
  selectUserDetails(): Observable<User | null> {
    return this.store.select(selectUserDetails);
  }
}
