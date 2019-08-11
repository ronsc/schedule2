import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { take } from 'rxjs/operators';

import { Course } from '../../models/course';
import { RestApiService } from '../../services/rest-api.service';

@Component({
  selector: 'app-main-page',
  template: `
    <app-top-bar></app-top-bar>
    <div class="main-page">
      <aside>
        <app-search-box (searchText)="filterCourses($event)"></app-search-box>
        <div>ค้นหาพบ : {{ (result$ | async).length | number }} รายวิชา</div>
        <div class="sidebar">
          <ng-container *ngFor="let c of result$ | async">
            <app-course-item [course]="c"></app-course-item>
          </ng-container>
        </div>
      </aside>

      <main class="main-table">
        <div class="actions-top">
          <a [routerLink]="['/time-table']" routerLinkActive="active-link"
            >ตารางเรียน</a
          >
          <a [routerLink]="['/exam-table']" routerLinkActive="active-link"
            >ตารางสอบ</a
          >
          <a [routerLink]="['/course-table']" routerLinkActive="active-link"
            >วิชาเรียน</a
          >
        </div>

        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  courseList = Array(6)
    .fill(0)
    .map((_, i) => i + 1);

  courses$ = new Subject<Course[]>();
  result$ = this.courses$.asObservable();

  private courses: Course[];

  constructor(private restApi: RestApiService) {}

  ngOnInit() {
    this.restApi
      .findAllCourses()
      .pipe(take(1))
      .subscribe(courses => {
        this.courses = courses;
        this.filterCourses('');
      });
  }

  filterCourses(searchText: string): void {
    console.log(searchText);

    this.courses$.next(
      this.courses.filter(
        c =>
          c.code.indexOf(searchText) !== -1 ||
          c.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
      )
    );
  }
}
