import { Injectable } from '@angular/core';
import { Observable, pipe, interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ClockService {

  private clock: Observable<Date>;

  constructor() {
    this.clock = interval(1000).pipe(map(tick => new Date()));
  }

  getClock(): Observable<Date> {
    return this.clock;
  }
}
