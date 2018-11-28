import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import Swiper from 'swiper';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  title= "hgshgshgsjh";
  mySwiper: Swiper;
  slides = [
    'https://www.duracell.in/upload/sites/10/2016/05/Europe_Ultra_4_AA_FOP_1004200_5002266_5000394121355.png',
    'https://www.duracell.in/upload/sites/10/2016/07/5000394116924_81559693_CBAA8IN.jpg_PNGWebUse-1-11.png',
    'https://www.duracell.in/upload/sites/10/2016/07/5000394023369_81546719_DULI20321BLVENXCEEMEA-card.psd_PNGWebUse-1.png'
  ];
  Product = [
    'ssssss',
    'sssssss',
    'ssss'
  ];
  private loadComponent = false;
    loadMyChildComponent(){
       this.loadComponent = true;
    }

  @ViewChild('swipercontainer') swipercontainer : ElementRef;

  constructor() { }

  ngAfterViewInit() {
    this.mySwiper = new Swiper(this.swipercontainer.nativeElement, {
      init: true,
      effect: 'slide',
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      speed: 300,
      autoplay: true,
      slidesPerView: 3,
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },
  
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
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

}