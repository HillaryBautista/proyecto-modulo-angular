import { Routes } from "@angular/router";

export const LandingRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home.component').then(x => x.HomeComponent),
  },
];
