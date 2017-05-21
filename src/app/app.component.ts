import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <layout-header></layout-header>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent { }
