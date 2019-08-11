import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  apiURL = 'assets';

  constructor(private http: HttpClient) {}

  findAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(
      `${this.apiURL}/reg_db_2562_1_20190811_1357.json`
    );
  }
}
