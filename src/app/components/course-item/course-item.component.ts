import { Component, Input, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course';

@Component({
  selector: 'app-course-item',
  template: `
    <div *ngIf="course" class="card clickable">
      <div class="title" [title]="title">
        {{ title }}
      </div>
      <div class="subtitle">
        {{ subtitle }}
      </div>
      <div *ngFor="let dt of dayTimes" [class]="dt.class">
        {{ dt.text }}
      </div>
    </div>
  `,
  styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent implements OnInit {
  @Input() course: Course;

  constructor() {}

  ngOnInit(): void {}

  get title(): string {
    if (this.course) {
      const { code, name } = this.course;
      return `${code} - ${name}`;
    }
    return '';
  }

  get subtitle(): string {
    if (this.course) {
      const { section, unit } = this.course;
      return `กลุ่ม ${section}, ${unit} หน่วย`;
    }
    return '';
  }

  get dayTimes(): { text: string; class: string }[] {
    if (this.course) {
      return this.course.dayTimes.map(({ day, time, room }) => ({
        text: `${day} ${time}, ${room}`,
        class: `day-time ${day.toLowerCase()}`
      }));
    }
    return [];
  }
}
