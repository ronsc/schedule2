import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  template: `
    <app-top-bar></app-top-bar>
    <div class="main-page">
      <aside class="sidebar">
        <app-search-box></app-search-box>

        <ng-container *ngFor="let i of courseList">
          <app-course-item></app-course-item>
        </ng-container>

        <div style="text-align: center;">
          <span class="load-more" (click)="loadMore()">Load More ...</span>
        </div>
      </aside>

      <main class="main-table">
        <div class="actions-top">
          <button type="button">ตารางเรียน</button>
          <button type="button">ตารางสอบ</button>
          <button type="button">วิชาเรียน</button>
        </div>

        <app-time-table></app-time-table>
      </main>
    </div>
  `,
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  courseList = Array(6)
    .fill(0)
    .map((_, i) => i + 1);

  constructor() {}

  ngOnInit() {}

  loadMore() {
    this.courseList.push(this.courseList.length + 1);
  }
}
