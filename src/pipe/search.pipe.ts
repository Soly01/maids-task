import { Pipe, PipeTransform } from '@angular/core';
import { Users } from '../../interface/user.interface';

@Pipe({
  name: 'search',
  standalone: true,
})
export class SearchPipe implements PipeTransform {
  transform(users: Users[], searchTerm: string): Users[] {
    if (!users || !searchTerm) {
      return users;
    }
    searchTerm = searchTerm.toLowerCase();
    return users.filter(
      (user) =>
        user.first_name.toLowerCase().includes(searchTerm) ||
        user.last_name.toLowerCase().includes(searchTerm)
    );
  }
}
