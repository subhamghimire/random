import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private randomNumbers$: BehaviorSubject<number> = new BehaviorSubject<number>(
    0
  );
  constructor() {
    this.init();
  }

  init() {
    setInterval(() => {
      this.randomNumbers$.next(Math.ceil(Math.random() * 100));
    }, 2000);
  }

  getRandomNumbers(): Observable<number> {
    return this.randomNumbers$;
  }
}
