import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultComponent } from './default';
import { LoginComponent } from './login';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', component: DefaultComponent },
//   { path: '**', component: PageNotFoundComponent },
  { path: 'login', component: LoginComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);