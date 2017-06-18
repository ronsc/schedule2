import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { UrlSafePipe } from './url-safe.pipe';
import { CourseIframeComponent } from './course-iframe/course-iframe.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CoursesRoutingModule
  ],
  declarations: [CoursesComponent, UrlSafePipe, CourseIframeComponent, CourseFormComponent]
})
export class CoursesModule { }
