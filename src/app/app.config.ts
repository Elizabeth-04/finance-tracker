import { ApplicationConfig, provideBrowserGlobalErrorListeners, InjectionToken } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes)
  ]
};

export const transactionConfig = new InjectionToken<{ maxAmount: number }>(
  'transactionConfig',
  {
    providedIn: 'root',
    factory: () => ({
      maxAmount: 1000000,
    }),
  }
);