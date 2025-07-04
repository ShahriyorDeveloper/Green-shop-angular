import { Component } from '@angular/core';
import { CategoryComponent } from './category/category.component';

@Component({
  selector: 'app-categories',
  imports: [CategoryComponent],
  templateUrl: './categories.component.html',
})
export class CategoriesComponent {}
