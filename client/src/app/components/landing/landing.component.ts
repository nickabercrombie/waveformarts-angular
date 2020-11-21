import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
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
  music:  HTMLElement;
  panels: HTMLElement[] = [];
  // ------------------

  landing: HTMLElement;

  constructor(private nav: NavigationService, private router: Router) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    if (this.viewWidth < 665) { document.getElementById('arts').classList.add('arts-margin-top'); }
    this.prod =     document.getElementById('prod');
    this.post =     document.getElementById('post');
    this.foley =    document.getElementById('foley');
    this.music =    document.getElementById('music');
    this.panels.push(this.prod, this.post, this.photo, this.color, this.foley, this.music);
  }

  selected(selection: HTMLDivElement): void {
    console.log('selection shit = ', selection.id);
    switch (selection.id) {
      case 'prod':
        this.router.navigate(['productionaudio']);
        break;
      case 'post':
        this.router.navigate(['postaudio']);
        break;
      case 'foley':
        this.router.navigate(['productionaudio']);
        break;
      case 'music':
        this.router.navigate(['productionaudio']);
        break;
    }
  }

  toggleBackButton(): void {
    console.log('what button toggle WAS = ', this.showBackButton);
    if    (this.showBackButton === true) { this.showBackButton = false; }
    else  { this.showBackButton = true; }
    console.log('what button toggle IS = ', this.showBackButton);
  }

}
