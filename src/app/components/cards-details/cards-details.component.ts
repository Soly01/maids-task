import { CardModule } from 'primeng/card';
import { Component, inject, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { Subscription } from 'rxjs';
import { User } from '../../core/interface/user.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { SkeletonModule } from 'primeng/skeleton';
import { AvatarModule } from 'primeng/avatar';
import { SkeletonComponent } from '../../shared/skeleton/skeleton.component';
import { Store } from '@ngrx/store';
import { getUserDetails } from '../../store/user.actions';
import { CardsService } from '../../core/services/cards.service';

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
  userDetails!: User;
  totalRecords: number = 1;
  private cardsDetailsService = inject(CardsService);
  private route = inject(ActivatedRoute);
  private store = inject(Store);
  userDetailsSubscription!: Subscription;

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.userId = +params['id'];
    });
    this.store.dispatch(getUserDetails({ id: this.userId }));
    this.userDetailsSubscription = this.cardsDetailsService
      .selectUserDetails()
      .subscribe({
        next: (res) => {
          this.userDetails = res!;
          console.log(this.userDetails);
        },
        error: (err: HttpErrorResponse) => {
          if (err.status === 404) {
            console.log(err.statusText);
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
