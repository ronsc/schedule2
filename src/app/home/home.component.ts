import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'home',
  template: `
    <howto></howto>
    <layout-footer></layout-footer>
  `,
  styles: []
})
export class HomeComponent implements OnInit {
  title = 'Schedule2';

  constructor() { }

  ngOnInit() {
  }

}
