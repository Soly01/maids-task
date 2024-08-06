import {
  Component,
  inject,
  PLATFORM_ID,
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
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [
    CardModule,
    ButtonModule,
    SkeletonModule,
    CommonModule,
    PaginatorModule,
    FloatLabelModule,

    FormsModule,
  ],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss',
  encapsulation: ViewEncapsulation.None,
  host: { ngSkipHydration: 'true' },
})
export class CardsComponent {
  first: number = 0;
  rows: number = 1;
  cards: Users[] = [];
  totalRecords: number = 2;
  private cardsService = inject(CardsService);
  private router = inject(Router);

  ngOnInit(): void {
    this.getUserCards();
  }

  getUserCards(page: number = 1): void {
    this.cardsService.getUserWithoutChache(page).subscribe({
      next: (res: { data: Users[] }) => {
        this.cards = res.data;
        console.log(res);
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
}
