import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { CourseItemComponent } from './course-item/course-item.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { TimeTableComponent } from './time-table/time-table.component';
import { TopBarComponent } from './top-bar/top-bar.component';

@NgModule({
  declarations: [
    TopBarComponent,
    TimeTableComponent,
    SearchBoxComponent,
    CourseItemComponent
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [
    TopBarComponent,
    TimeTableComponent,
    SearchBoxComponent,
    CourseItemComponent
  ]
})
export class ComponentsModule {}
