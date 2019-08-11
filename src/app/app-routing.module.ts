import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginPageComponent } from './containers/login-page/login-page.component';
import { MainPageComponent } from './containers/main-page/main-page.component';
import { TimetablePageComponent } from './containers/timetable-page/timetable-page.component';
import { ExamtablePageComponent } from './containers/examtable-page/examtable-page.component';
import { CoursetablePageComponent } from './containers/coursetable-page/coursetable-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'time-table'
      },
      {
        path: 'time-table',
        component: TimetablePageComponent
      },
      { path: 'exam-table', component: ExamtablePageComponent },
      { path: 'course-table', component: CoursetablePageComponent }
    ]
  },
  { path: 'login', component: LoginPageComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
