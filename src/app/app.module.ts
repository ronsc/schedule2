import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { CoursetablePageComponent } from './containers/coursetable-page/coursetable-page.component';
import { ExamtablePageComponent } from './containers/examtable-page/examtable-page.component';
import { LoginPageComponent } from './containers/login-page/login-page.component';
import { MainPageComponent } from './containers/main-page/main-page.component';
import { TimetablePageComponent } from './containers/timetable-page/timetable-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    LoginPageComponent,
    TimetablePageComponent,
    ExamtablePageComponent,
    CoursetablePageComponent
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
