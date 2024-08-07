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
    return users.filter((user) => user.id.toString().includes(searchTerm));
  }
}
