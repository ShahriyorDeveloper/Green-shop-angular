import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../auth.service';
import { MessageService } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { PasswordModule } from 'primeng/password';
import { FloatLabelModule } from 'primeng/floatlabel';
import { IftaLabelModule } from 'primeng/iftalabel';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    RouterLink,
    CommonModule,
    PasswordModule,
    FloatLabelModule,
    FormsModule,
    IftaLabelModule,
  ],
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isSubmitting = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private messageService: MessageService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {
    this.loginForm.valueChanges.subscribe(() => {
      this.isSubmitting = false;
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.isSubmitting = true;
      const { email, password } = this.loginForm.value;
      this.authService.login(email, password).subscribe({
        next: (msg) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Kirish muvaffaqiyatli!',
            detail: msg.message,
          });

          this.router.navigate(['/profile']);
        },
        error: (err) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Xatolik',
            detail: err.error.extraMessage,
          });
        },
        complete: () => {
          this.isSubmitting = false;
        },
      });
    }
  }
}
