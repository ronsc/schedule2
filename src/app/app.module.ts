import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { LoginPageComponent } from './containers/login-page/login-page.component';
import { MainPageComponent } from './containers/main-page/main-page.component';

@NgModule({
  declarations: [AppComponent, MainPageComponent, LoginPageComponent],
  imports: [BrowserModule, ComponentsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
