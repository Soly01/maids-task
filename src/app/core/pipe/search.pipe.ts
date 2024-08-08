import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../interface/user.interface';

@Pipe({
  name: 'search',
  standalone: true,
})
export class SearchPipe implements PipeTransform {
  transform(users: User[], searchTerm: string): User[] {
    if (!users || !searchTerm) {
      return users;
    }
    return users.filter((user) => user.id.toString().includes(searchTerm));
  }
}
