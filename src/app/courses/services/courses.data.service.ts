import { Observable } from 'rxjs';
import { Course } from './../model/course';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpUrlGenerator, DefaultDataServiceConfig, DefaultDataService } from '@ngrx/data';
import { map } from 'rxjs/operators';

@Injectable()
export class CoursesDataService extends DefaultDataService<Course> {
  constructor(
    public http: HttpClient,
    public httpUrlGenerator: HttpUrlGenerator
  ) {
    super('Course', http, httpUrlGenerator);
  }

  getAll(): Observable<Course[]> {
    return this.http.get('/api/courses')
    .pipe(
      map(res => res['payload'])
    );
  }
}
