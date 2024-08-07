import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'cards',
    loadComponent: () =>
      import('./cards/cards.component').then((c) => c.CardsComponent),
  },
  {
    path: 'cardsDetails/:id',
    loadComponent: () =>
      import('./cards-details/cards-details.component').then(
        (c) => c.CardsDetailsComponent
      ),
  },

  {
    path: '**',
    redirectTo: 'cards',
  },
];
