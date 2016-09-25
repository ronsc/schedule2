import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    // styleUrls: ['./app.component.scss']
})
export class AppComponent {
    items: FirebaseListObservable<any[]>;

    constructor(af: AngularFire) { 
        this.items = af.database.list('items');
    }
}