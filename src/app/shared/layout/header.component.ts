import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'layout-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {
  title = 'Schedule2';

  constructor() { }

  ngOnInit() {
  }

}
