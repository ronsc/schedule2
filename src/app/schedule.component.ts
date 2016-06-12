import { Component } from '@angular/core';
import { TestComponent } from './+test';
import { Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
// import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';

@Component({
  moduleId: module.id,
  selector: 'schedule-app',
  templateUrl: 'schedule.component.html',
  styleUrls: ['schedule.component.css'],
  directives: [
    ROUTER_DIRECTIVES,
    MD_BUTTON_DIRECTIVES,
    MD_SIDENAV_DIRECTIVES
  ],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
  {
    path: '/test',
    component: TestComponent
  }
])
export class ScheduleAppComponent {
  title = 'schedule works!';
}
