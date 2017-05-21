import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/layout';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { NotFoundModule } from './not-found/not-found.module';

export const firebaseConfig = {
  apiKey: 'AIzaSyCv9lUkasSL6ehYyxNpExS07Xl1lNO6GXU',
  authDomain: 'schedule2-fcf72.firebaseapp.com',
  databaseURL: 'https://schedule2-fcf72.firebaseio.com',
  storageBucket: 'schedule2-fcf72.appspot.com',
  messagingSenderId: '657536714769'
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    HomeModule,
    NotFoundModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
