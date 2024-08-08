import {
  Component,
  inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  ViewEncapsulation,
} from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { SkeletonModule } from 'primeng/skeleton';
import { HttpErrorResponse } from '@angular/common/http';
import { UsersRes } from '../../core/interface/user.interface';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { PaginatorModule } from 'primeng/paginator';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { InputTextModule } from 'primeng/inputtext';
import { OverlayDirective } from '../../core/directives/overlay.directive';
import { SkeletonComponent } from '../../shared/skeleton/skeleton.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { Store } from '@ngrx/store';
import { getUsers } from '../../store/user.actions';
import { SearchPipe } from '../../core/pipe/search.pipe';
import { CardsService } from '../../core/services/cards.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [
    CardModule,
    ButtonModule,
    CommonModule,
    PaginatorModule,
    FloatLabelModule,
    SearchPipe,
    FormsModule,
    InputTextModule,
    OverlayDirective,
    SkeletonComponent,
    SkeletonModule,
    ToastModule,
  ],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss',
  encapsulation: ViewEncapsulation.None,
  providers: [MessageService],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class CardsComponent implements OnInit, OnDestroy {
  first: number = 0;
  rows: number = 1;
  cards!: UsersRes;
  skeleton: any[] = [];
  searchTerm: string = '';
  perPage!: number;
  totalpages!: number;
  cardsSubscription!: Subscription;
  private cardsService = inject(CardsService);
  private router = inject(Router);
  private store = inject(Store);
  private platformID = inject(PLATFORM_ID);
  constructor() {
    this.skeleton.length = 6;
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformID)) {
      const storedPage = localStorage.getItem('page');
      const page = storedPage ? JSON.parse(storedPage) : 1;
      this.first = (page - 1) * this.rows;
      this.store.dispatch(getUsers({ Page: page }));
      this.cardsSubscription = this.cardsService.selectAllUsers().subscribe({
        next: (res) => {
          this.cards = res;
          this.totalpages = res.total_pages;
          this.perPage = res.per_page;
          localStorage.setItem('page', JSON.stringify(res.page));
        },
        error: (err: HttpErrorResponse) => {
          if (err.status === 404) {
            console.log(err.statusText);
          }
        },
      });
    }
  }

  onPageChange(event: any): void {
    this.first = event.first;
    const page = this.first / this.rows + 1;
    localStorage.setItem('page', JSON.stringify(page));
    this.store.dispatch(getUsers({ Page: page }));
  }
  navigateToDetails(userId: number) {
    this.router.navigate([`cardsDetails/${userId}`]);
  }
  ngOnDestroy(): void {
    if (this.cardsSubscription) {
      this.cardsSubscription.unsubscribe();
    }
  }
}
