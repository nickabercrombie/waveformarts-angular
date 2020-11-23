import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private gradient = new Subject<string>();
  gradient$ =  this.gradient.asObservable();

  constructor(private router: Router) { }

  changeGradient(selection: string): void {
    console.log('changing gradient to: ', selection);
    this.gradient.next(selection);
  }
}
