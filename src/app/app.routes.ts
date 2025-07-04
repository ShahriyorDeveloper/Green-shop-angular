import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './home/auth/login/login.component';
import { RegisterComponent } from './home/auth/register/register.component';
import { ProductDetailsComponent } from './home/main/product-details/product-details.component';

export const routes: Routes = [
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'shop/:category/:id', component: ProductDetailsComponent },
];
