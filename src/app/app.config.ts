import { User } from './../../interface/user.interface';
import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { UserEffects } from './store/user.effects';
import { userReducer } from './store/user.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideStore(),
    provideState({ name: 'user', reducer: userReducer }),
    provideEffects(UserEffects),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideRouter(routes, withViewTransitions()),
    provideClientHydration(),
    provideHttpClient(withFetch()),
    provideAnimations(),
    provideStore(),
    provideEffects(),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  ],
};
