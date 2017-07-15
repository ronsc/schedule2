import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'courses',
  templateUrl: './courses.component.html',
  styles: [`
    .columns:last-child {
      margin-bottom: initial;
    }
  `]
})
export class CoursesComponent implements OnInit {

  ngOnInit() {
  }

}
