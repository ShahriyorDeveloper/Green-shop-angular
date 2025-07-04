import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './profile.component.html',
})
export class ProfileComponent {
  accountForm: FormGroup;
  selectedFile: File | null = null;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.accountForm = this.fb.group({
      firstName: ['Shahriyor', [Validators.required]],
      lastName: ['Xudoyorov', [Validators.required]],
      email: [
        'xudayorov1399@gmail.com',
        [Validators.required, Validators.email],
      ],
      phoneNumber: ['', [Validators.required]],
      username: ['Shahriyordev', [Validators.required]],
      profilePhoto: [''],
    });
  }

  ngOnInit(): void {}

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length) {
      this.selectedFile = input.files[0];
    }
  }

  onSubmit(): void {
    if (this.accountForm.valid) {
      console.log('Form submitted:', this.accountForm.value);
      // Implement API call to save user data
    } else {
      // Mark all fields as touched to trigger validation messages
      Object.keys(this.accountForm.controls).forEach((key) => {
        const control = this.accountForm.get(key);
        control?.markAsTouched();
      });
    }
  }

  logout() {
    this.authService.logout();
  }
}
