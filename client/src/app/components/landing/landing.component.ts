import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit, AfterViewInit {
  viewHeight: number = window.innerHeight;
  viewWidth: number = window.innerWidth;
  readyState = document.readyState;
  selectionMade = false;
  showBackButton = false;

  // ------------------
  prod:   HTMLElement;
  post:   HTMLElement;
  photo:  HTMLElement;
  color:  HTMLElement;
  foley:  HTMLElement;
  panels: HTMLElement[] = [];
  // ------------------

  landing: HTMLElement;

  constructor(private nav: NavigationService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    if (this.viewWidth < 665) { document.getElementById('arts').classList.add('arts-margin-top'); }
    this.landing =  document.getElementById('landing');
    this.prod =     document.getElementById('prod');
    this.post =     document.getElementById('post');
    this.photo =    document.getElementById('photo');
    this.color =    document.getElementById('color');
    this.foley =    document.getElementById('foley');
    this.panels.push(this.prod, this.post, this.photo, this.color, this.foley);
    this.prod.addEventListener('click', () => {
      this.sortPanels(this.prod);
      this.nav.navigateTo('prod');
    });
    this.post.addEventListener('click', () => {
      this.sortPanels(this.post);
    });
    this.photo.addEventListener('click', () => {
      this.sortPanels(this.photo);
    });
    this.color.addEventListener('click', () => {
      this.sortPanels(this.color);
    });
    this.foley.addEventListener('click', () => {
      this.sortPanels(this.foley);
    });
  }

  sortPanels(save: HTMLElement): void {
    console.log('this.panels = ', this.panels);
    this.toggleBackButton();
    const spliceVal = this.panels.indexOf(save, 0);
    this.panels.splice(spliceVal, 1);
    this.panels.forEach(panel => {
      this.panelFadeOut();
      panel.classList.add('fadeAway');
    });
    setTimeout(() => {
      this.panels.forEach(panel => {
        this.panelFadeOut();
        this.landing.classList.add('lower-height');
        // panel.classList.add('display-none');
      });
    }, 400);
  }

  toggleBackButton(): void {
    console.log('what button toggle WAS = ', this.showBackButton);
    if    (this.showBackButton === true) { this.showBackButton = false; }
    else  { this.showBackButton = true; }
    console.log('what button toggle IS = ', this.showBackButton);
  }

  panelFadeOut(): void {

  }

  showAllPanels(): void {
    this.toggleBackButton();
    this.landing.classList.remove('lower-height');
    this.panels.forEach(panel => {
      panel.classList.remove('fadeAway');
    });
    this.panels = [];
    this.panels.push(this.prod, this.post, this.photo, this.color, this.foley);
  }

}
