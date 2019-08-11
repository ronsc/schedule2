import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginPageComponent } from './containers/login-page/login-page.component';
import { MainPageComponent } from './containers/main-page/main-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: MainPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
