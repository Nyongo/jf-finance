import { Routes } from '@angular/router';
import { HomePageComponent } from './home/home-page/home-page.component';
import { LoansPageComponent } from './loans/loans-page/loans-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'loans', component: LoansPageComponent },
];
