import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from 'angularfire2';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { routing, appRoutingProviders } from './app.routing';
import { AppComponent } from './app.component';
import { DefaultComponent } from './default';
import { LoginComponent } from './login';

export const firebaseConfig = {
    apiKey: "AIzaSyC5vT0siZ8MaBTY1R8K1AzaEr--6BnxJD4",
    authDomain: "schedule2-2dfe6.firebaseapp.com",
    databaseURL: "https://schedule2-2dfe6.firebaseio.com",
    storageBucket: "schedule2-2dfe6.appspot.com",
};

@NgModule({
    declarations: [
        AppComponent,
        DefaultComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        AngularFireModule.initializeApp(firebaseConfig),
        NgbModule,
        routing
    ],
    providers: [appRoutingProviders],
    bootstrap: [AppComponent]
})
export class AppModule { }