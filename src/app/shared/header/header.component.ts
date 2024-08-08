import { Component } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonModule, AvatarModule, BadgeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  changeTheme(theme: string) {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }
}
