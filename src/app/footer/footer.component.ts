import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, FormsModule],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  email: string = '';

  services = [
    {
      title: 'Garden Care',
      icon: 'cactus-heart.svg',
      description:
        'We are an online plant shop offering a wide range of cheap and trendy plants.',
    },
    {
      title: 'Plant Renovation',
      icon: 'cactus-teapot.svg',
      description:
        'We are an online plant shop offering a wide range of cheap and trendy plants.',
    },
    {
      title: 'Watering Graden',
      icon: 'cactus-heart.svg',
      description:
        'We are an online plant shop offering a wide range of cheap and trendy plants.',
    },
  ];

  accountLinks = ['My Account', 'Address', 'Wishlist'];

  categories = [
    'House Plants',
    'Potter Plants',
    'Seeds',
    'Small Plants',
    'Accessories',
  ];

  socialMedia = [
    { name: 'Facebook', icon: 'facebook' },
    { name: 'Instagram', icon: 'instagram' },
    { name: 'Twitter', icon: 'twitter' },
    { name: 'LinkedIn', icon: 'linkedin' },
    { name: 'YouTube', icon: 'youtube' },
  ];

  paymentMethods = [
    'https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Fpaypal.svg?alt=media&token=51f12650-aff4-485a-bbcb-0ee3f4e64cca',
    'https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Fmastercard.svg?alt=media&token=cb5cc08d-e2a0-4625-8fc7-86448ce7628a',
    'https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Fvisa.svg?alt=media&token=4fffddbd-bd42-4523-a201-06650a09e8a2',
    'https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Fvisa.svg?alt=media&token=4fffddbd-bd42-4523-a201-06650a09e8a2',
  ];
}
