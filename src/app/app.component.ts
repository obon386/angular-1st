import { Component, VERSION } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { range, delay } from 'rxjs';
import { flatMap, map, mergeAll, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  curval = 'called';
  numbers = range(1, 3).pipe(mergeMap((x) => timer(5000).pipe(map(() => x))));

  constructor() {
    this.numbers.subscribe({
      next: (value) => {
        this.curval += ' ' + value;
      },
      complete: () => {
        console.log('Complete!');
      },
    });
  }
}
