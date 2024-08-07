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
import { Users } from '../../../interface/user.interface';
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
  ],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class CardsComponent implements OnInit, OnDestroy {
  first: number = 0;
  rows: number = 1;
  cards: Users[] = [];
  searchTerm: string = '';
  totalRecords!: number;
  cardsSubscription!: Subscription;
  private cardsService = inject(CardsService);
  private router = inject(Router);

  ngOnInit(): void {
    this.getUserCards();
  }

  getUserCards(page: number = 1): void {
    this.cardsSubscription = this.cardsService.getUsers(page).subscribe({
      next: (res: { data: Users[] }) => {
        this.cards = res.data;
        console.log(res);
        this.totalRecords = res.data.length;
      },
      error: (err: HttpErrorResponse) => {
        if (err.status === 404) {
          console.error('Data not found', err);
        } else {
          console.error('An error occurred', err);
        }
      },
    });
  }

  onPageChange(event: any): void {
    this.first = event.first;
    const page = this.first / this.rows + 1;
    this.getUserCards(page);
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
