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
  }

  toggleBackButton(): void {
    console.log('what button toggle WAS = ', this.showBackButton);
    if    (this.showBackButton === true) { this.showBackButton = false; }
    else  { this.showBackButton = true; }
    console.log('what button toggle IS = ', this.showBackButton);
  }

}
