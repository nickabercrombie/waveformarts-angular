import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  currentTime = moment().format('LLLL');
  screenWidth = window.innerWidth;
  device = false;
  deviceMenuOpen = false;

  constructor() { }

  ngOnInit(): void {
    console.log(this.screenWidth);
    document.addEventListener('DOMContentLoaded', event => {
      this.adjustToScreenWidth();
    })
  }

  adjustToScreenWidth() {
    // if the screen's absolutely on mobile/small device: 
    if (this.screenWidth < 630) {
      // users must be able to toggle the menu
      this.device = true;
    }
  }

  async toggleNavMenu() {
    if (this.deviceMenuOpen === true) { 
      this.closeMenu();
      setTimeout(() => {
        this.deviceMenuOpen = false;
      }, 200);
    } 
    else  {this.deviceMenuOpen = true; }
  }

  async closeMenu(): Promise<any> {
    const nc = document.getElementById('nav-container');
    nc.style.animation = 'de-spand';
    nc.style.animationDuration = '.2s';
    nc.style.animationTimingFunction = 'ease';
    Promise.resolve(true);
  }

}
