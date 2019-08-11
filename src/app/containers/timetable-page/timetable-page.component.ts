import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timetable-page',
  template: `
    <app-time-table></app-time-table>
  `,
  styleUrls: ['./timetable-page.component.scss']
})
export class TimetablePageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
