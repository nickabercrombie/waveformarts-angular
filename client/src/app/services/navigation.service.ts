import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private router: Router) { }

  navigateTo(destination) {
    console.log('destination: ', destination);
    this.router.navigate([`/${destination}`]);
  }
}
