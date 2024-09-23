import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./shared/ui/layout/layout/layout.component').then(x => x.LayoutComponent),
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/landing/landing.routes').then(x => x.LandingRoutes),
      }
    ]
  },
  {
    path: '**',
    redirectTo: '',
  },
];
