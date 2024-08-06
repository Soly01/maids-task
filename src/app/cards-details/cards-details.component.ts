import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cards-details',
  standalone: true,
  imports: [],
  templateUrl: './cards-details.component.html',
  styleUrl: './cards-details.component.scss',
})
export class CardsDetailsComponent implements OnInit {
  userId!: number;
  private route = inject(ActivatedRoute);
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.userId = +params['id'];
    });
  }
}
