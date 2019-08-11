import { Component, Input, OnInit } from '@angular/core';

import { daysOfWeek } from '../../utils/constants';

@Component({
  selector: 'app-time-table',
  template: `
    <div class="wrapper-outer">
      <div class="wrapper-inner">
        <table class="time-table">
          <thead>
            <tr>
              <th>Day/Time</th>
              <th *ngFor="let time of timeslots" colspan="2">
                {{ time }}:00-00:00
              </th>
            </tr>
          </thead>

          <tbody>
            <tr *ngFor="let day of daysColumn">
              <td>{{ day }}</td>
              <td *ngFor="let time of timeslots" colspan="2"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
  styleUrls: ['./time-table.component.scss']
})
export class TimeTableComponent implements OnInit {
  @Input() days = 5;
  @Input() startingHour = 8;
  @Input() endingHour = 20;

  daysColumn = [];
  timesColumn = [];

  timeslots = Array(11)
    .fill(0)
    .map((_, i) => `${i + 8}`.padStart(2, '0'));

  constructor() {}

  ngOnInit() {
    this.updateDaysColumn();
    this.updateTimesColumn();

    const timetable = Array.from(Array(this.days), () => [
      ...Array(this.endingHour - this.startingHour).keys()
    ]);

    console.log(timetable);
  }

  private updateDaysColumn() {
    this.daysColumn = Array(this.days)
      .fill(0)
      .map((_, i) => daysOfWeek[i]);
  }

  private updateTimesColumn() {}
}
