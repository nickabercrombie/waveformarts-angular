import { Component, AfterViewInit } from '@angular/core';
import { NavigationService } from './services/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'client';
  gradient = '';
  routerOutlet: HTMLElement;

  constructor(private nav: NavigationService) {
    nav.gradient$.subscribe(gradient => {
      this.setGradient(gradient);
    });
    // const routerOutlet = await document.getElementById('');

  }

  ngAfterViewInit(): void {
    this.routerOutlet = document.getElementById('router-outlet-container');
    return;
  }

  setGradient(selection): void {
    switch (selection) {
      case 'prod':
        this.routerOutlet.classList.remove('router-outlet-container');
        this.routerOutlet.classList.add('router-outlet-container1');
        console.log('derrr 1', this.routerOutlet.classList);
        break;
      case 'post':
        this.routerOutlet.classList.remove('router-outlet-container');
        this.routerOutlet.classList.add('router-outlet-container2');
        break;
      case 'foley':
        this.routerOutlet.classList.remove('router-outlet-container');
        this.routerOutlet.classList.add('router-outlet-container3');
        break;
      case 'music':
        this.routerOutlet.classList.remove('router-outlet-container');
        this.routerOutlet.classList.add('router-outlet-container4');
        break;
    }
  }

  addClassToRouterOutlet(): void {
    this.routerOutlet.classList.add('router-outlet-container1 ');
  }
}
