import {
  Component,
  inject,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CardsService } from '../../services/cards.service';
import { SkeletonModule } from 'primeng/skeleton';
import { HttpErrorResponse } from '@angular/common/http';
import { UsersResponse } from '../../../interface/user.interface';
import { CommonModule } from '@angular/common';
import { PaginatorModule } from 'primeng/paginator';
import { FloatLabelModule } from 'primeng/floatlabel';
import { SearchPipe } from '../../pipe/search.pipe';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { InputTextModule } from 'primeng/inputtext';
import { OverlayDirective } from '../../directives/overlay.directive';
import { SkeletonComponent } from '../skeleton/skeleton.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { Store } from '@ngrx/store';
import { loadUsers } from '../store/user.actions';

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
})
export class CardsComponent implements OnInit, OnDestroy {
  first: number = 0;
  rows: number = 1;
  cards!: UsersResponse;
  skeleton: any[] = [];
  searchTerm: string = '';
  perPage!: number;
  totalpages!: number;
  cardsSubscription!: Subscription;
  private cardsService = inject(CardsService);
  private router = inject(Router);
  private store = inject(Store);
  constructor() {
    this.skeleton.length = 6;
  }

  ngOnInit(): void {
    // this.getUserCards();
    this.store.dispatch(loadUsers({ Page: 1 }));
    this.cardsService.selectAllUsers().subscribe((data) => {
      this.cards = data;
      this.totalpages = data.total_pages;
      this.perPage = data.per_page;
      console.log(data);
    });
  }

  // getUserCards(page: number = 1): void {
  //   this.cardsSubscription = this.cardsService.getUsers(page).subscribe({
  //     next: (data: UsersResponse) => {
  //       this.cards = data;
  //       this.totalpages = data.total_pages;
  //       this.perPage = data.per_page;
  //       console.log(data);
  //     },
  //     error: (err: HttpErrorResponse) => {
  //       if (err.status === 404) {
  //         console.error('Data not found', err);
  //       } else {
  //         console.error('An error occurred', err);
  //       }
  //     },
  //   });
  // }

  onPageChange(event: any): void {
    this.first = event.first;
    const pagee = this.first / this.rows + 1;
    this.store.dispatch(loadUsers({ Page: pagee }));
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
