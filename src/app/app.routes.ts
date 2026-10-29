import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./productivity-tracker/productivity-tracker').then(m => m.ProductivityTracker)
    }
];
