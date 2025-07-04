import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, ButtonModule, RouterLink],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  isAuthenticated: boolean = false;
  name: string | null = null;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.name = localStorage.getItem('name');
    this.isAuthenticated = !!localStorage.getItem('token');
    this.authService.authStatus$.subscribe((status) => {
      this.isAuthenticated = status;
    });
  }
}
