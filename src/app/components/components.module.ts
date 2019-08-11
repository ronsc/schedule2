import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TopBarComponent } from './top-bar/top-bar.component';
import { TimeTableComponent } from './time-table/time-table.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { CourseItemComponent } from './course-item/course-item.component';

@NgModule({
  declarations: [
    TopBarComponent,
    TimeTableComponent,
    SearchBoxComponent,
    CourseItemComponent
  ],
  imports: [CommonModule],
  exports: [
    TopBarComponent,
    TimeTableComponent,
    SearchBoxComponent,
    CourseItemComponent
  ]
})
export class ComponentsModule {}
