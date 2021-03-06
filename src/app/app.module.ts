import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppLayoutComponent } from './_layout/app-layout/app-layout.component';
import { SiteLayoutComponent } from './_layout/site-layout/site-layout.component';
import { AppHeaderComponent } from './_layout/app-header/app-header.component';
import { SiteHeaderComponent } from './_layout/site-header/site-header.component';
import { SiteFooterComponent } from './_layout/site-footer/site-footer.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import {ReadMoreComponent} from './read-more/read-more.component';
import {LeadMoreTechComponent} from './load-more-tech/load-more-tech.component';
import {HomeSwiperComponent} from './home-swiper/home-swiper.component';
// import { HttpClientModule } from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http';


import { Comp1Component } from './comp1.component';
import { Comp2Component } from './comp2.component';
import { routing } from './app.routing';
import { CollapseModule , BsDropdownModule ,CarouselModule  } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent, Comp1Component, Comp2Component, HelloComponent, AppLayoutComponent, SiteLayoutComponent, AppHeaderComponent, SiteHeaderComponent, SiteFooterComponent, LoginComponent, DashboardComponent, HomeComponent, AboutComponent, RegisterComponent, ProfileComponent, ReadMoreComponent, LeadMoreTechComponent, HomeSwiperComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,  FormsModule, routing ,CollapseModule.forRoot(), BsDropdownModule.forRoot(), CarouselModule.forRoot() 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
