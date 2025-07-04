import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { MainComponent } from './main/main.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    CarouselModule,
    CarouselModule,
    ButtonModule,
    TagModule,
    MainComponent,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor() {}

  products = [
    {
      welcome: 'WELCOME TO GREENSHOP',
      name: "LET'S MAKE A BETTER PLANET",
      image: 'product1.jpg',
      description:
        'We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!',
    },
    {
      welcome: 'WELCOME TO GREENSHOP',
      name: "LET'S MAKE A BETTER PLANET",
      image: 'product2.jpg',
      description:
        'We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!',
    },
    {
      welcome: 'WELCOME TO GREENSHOP',
      name: "LET'S MAKE A BETTER PLANET",
      image: 'product3.jpg',
      description:
        'We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!',
    },
  ];

  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1,
    },
  ];
}
