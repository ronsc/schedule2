import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { ScheduleAppComponent } from '../app/schedule.component';

beforeEachProviders(() => [ScheduleAppComponent]);

describe('App: Schedule', () => {
  it('should create the app',
      inject([ScheduleAppComponent], (app: ScheduleAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'schedule works!\'',
      inject([ScheduleAppComponent], (app: ScheduleAppComponent) => {
    expect(app.title).toEqual('schedule works!');
  }));
});
