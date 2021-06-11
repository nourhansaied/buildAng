import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home-slider',
  templateUrl: './home-slider.component.html',
  styleUrls: ['./home-slider.component.scss']
})
export class HomeSliderComponent implements OnInit {
  ouValue
  @Input() childData;


@Output() currentValue: EventEmitter<any> = new EventEmitter(null)
  baseURL = "https://image.tmdb.org/t/p/w500"

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    margin: 10,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 8
      }
    },
    nav: true
  }
  constructor() { }

  ngOnInit(): void {
  }



  sendValue() {
    this.currentValue.emit(this.ouValue)
  }
}
