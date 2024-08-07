import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ToastModule } from 'primeng/toast';
import { SearchPipe } from '../pipe/search.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ToastModule, SearchPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Maids-task';
  ngOnInit(): void {
    const theme = localStorage.getItem('theme');
    if (theme) {
      document.body.setAttribute('data-theme', theme);
    }
  }
}
