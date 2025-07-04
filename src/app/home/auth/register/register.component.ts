import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../auth.service';
import { MessageService } from 'primeng/api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, CommonModule],
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  isSubmitting = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private messageService: MessageService
  ) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  ngOnInit(): void {
    this.registerForm.valueChanges.subscribe(() => {
      this.isSubmitting = false;
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.authService.register(this.registerForm.value).subscribe({
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
