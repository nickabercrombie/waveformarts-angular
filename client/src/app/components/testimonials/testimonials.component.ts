import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {
  
  scrollLeft: 0;

  constructor() { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit() {
    const reviews = document.getElementById('reviews');
    this.scrollAnimation(reviews);
  }

  scrollAnimation(reviews: HTMLElement) {
     
    reviews.style.transform = 'translateX("200px")';
    reviews.style.transform = 'ease';
    console.log('reviews shit: ', reviews.scrollLeft);
  }

}
