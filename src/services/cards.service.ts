import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Users } from '../../interface/user.interface';
import { Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  private cache = new Map<number, any>();
  private http = inject(HttpClient);
  getUsers(page: number): Observable<{ data: Users[] }> {
    if (this.cache.has(page)) {
      return of(this.cache.get(page));
    } else {
      return this.http
        .get<{ data: Users[] }>(`https://reqres.in/api/users?page=${page}`)
        .pipe(
          tap((data) => {
            this.cache.set(page, data);
          })
        );
    }
  }
  getUserWithoutChache(page: number): Observable<{ data: Users[] }> {
    return this.http.get<{ data: Users[] }>(
      `https://reqres.in/api/users?page=${page}`
    );
  }
}
