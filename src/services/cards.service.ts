import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Users } from '../../interface/user.interface';
import { Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  private usersCache = new Map<number, any>();
  private usersDetailsCache = new Map<number, any>();
  private http = inject(HttpClient);
  getUsers(
    page: number
  ): Observable<{ data: Users[]; total_pages: number; per_page: number }> {
    if (this.usersCache.has(page)) {
      console.log(`Retrieving data for page ${page} from cache`);
      return of(this.usersCache.get(page));
    } else {
      console.log(`Fetching data for page ${page} from server`);
      return this.http
        .get<{ data: Users[]; total_pages: number; per_page: number }>(
          `https://reqres.in/api/users?page=${page}`
        )
        .pipe(
          tap((data) => {
            this.usersCache.set(page, data);
            console.log(`Data for page ${page} has been cached`);
          })
        );
    }
  }
  getUserDetails(id: number): Observable<{ data: Users }> {
    if (this.usersDetailsCache.has(id)) {
      console.log(`Retrieving data for user ID ${id} from cache`);
      return of(this.usersDetailsCache.get(id));
    } else {
      console.log(`Fetching data for user ID ${id} from server`);
      return this.http
        .get<{ data: Users }>(`https://reqres.in/api/users/${id}`)
        .pipe(
          tap((data) => {
            this.usersDetailsCache.set(id, data);
            console.log(`Data for user ID ${id} has been cached`);
          })
        );
    }
  }
}
