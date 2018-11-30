import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import Swiper from 'swiper';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';



@Component({
  selector: 'home-swiper',
  templateUrl: './home-swiper.component.html',
  styleUrls: ['./home-swiper.component.scss']
})
export class HomeSwiperComponent implements AfterViewInit ,OnInit {
  title = 'Example';
  arrBirds: string [];
  mySwiper: Swiper;
  slides = [
    'https://www.duracell.in/upload/sites/10/2016/06/slide2-3.jpg',
    'https://www.duracell.in/upload/sites/10/2016/06/slide3-2-2.jpg',
    'https://www.duracell.in/upload/sites/10/2016/06/slide5-1.jpg',
    'https://www.duracell.in/upload/sites/10/2016/06/slide6-5.jpg',
    'https://www.duracell.in/upload/sites/10/2016/06/slide2-3.jpg',
    'https://www.duracell.in/upload/sites/10/2016/06/slide3-2-2.jpg',
    'https://www.duracell.in/upload/sites/10/2016/06/slide5-1.jpg',
    'https://www.duracell.in/upload/sites/10/2016/06/slide6-5.jpg'
  ];


  @ViewChild('swipercontainer') swipercontainer : ElementRef;

  constructor(private httpService: HttpClient) { }

  ngAfterViewInit() {
    this.mySwiper = new Swiper(this.swipercontainer.nativeElement, {
      init: true,
      effect: 'slide',
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      speed: 300,
      //autoplay: true,
      slidesPerView: 4,
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },
  
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
            delay: 10000,
      },

      on: {
             init: function () {
               // do something
               console.log("swiper init");
             },
           }
  
    });
    //this.mySwiper.init();
  }
  ngOnInit () {
    this.httpService.get('./assets/image.json').subscribe(
      data => {
        this.arrBirds = data as string [];	 // FILL THE ARRAY WITH DATA.
         console.log(this.arrBirds[1]);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }


}
