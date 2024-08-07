import { CardModule } from 'primeng/card';
import { Component, inject, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardsService } from '../../services/cards.service';
import { Subscription } from 'rxjs';
import { Users } from '../../../interface/user.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { SkeletonModule } from 'primeng/skeleton';
import { AvatarModule } from 'primeng/avatar';
import { SkeletonComponent } from '../skeleton/skeleton.component';

@Component({
  selector: 'app-cards-details',
  standalone: true,
  imports: [
    CardModule,
    ButtonModule,
    RouterLink,
    CommonModule,
    SkeletonModule,
    AvatarModule,
    SkeletonComponent,
  ],
  templateUrl: './cards-details.component.html',
  styleUrl: './cards-details.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class CardsDetailsComponent implements OnInit {
  userId!: number;
  userDetails!: Users;
  totalRecords: number = 1;
  private cardsDetailsService = inject(CardsService);
  private route = inject(ActivatedRoute);
  userDetailsSubscription!: Subscription;

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.userId = +params['id'];
      this.getUserDetails(this.userId);
    });
  }
  getUserDetails(id: number) {
    this.userDetailsSubscription = this.cardsDetailsService
      .getUserDetails(id)
      .subscribe({
        next: (res: { data: Users }) => {
          this.userDetails = res.data;

          console.log(res);
        },
        error: (err: HttpErrorResponse) => {
          if (err.status === 404) {
            console.log('User not found');
          } else {
            console.log('An error occurred', err);
          }
        },
      });
  }
  ngOnDestroy(): void {
    if (this.userDetailsSubscription) {
      this.userDetailsSubscription.unsubscribe();
    }
  }
}
