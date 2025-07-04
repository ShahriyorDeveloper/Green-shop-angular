import { Component } from '@angular/core';
import { CategoryService } from '../../../../services/category.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-discount',
  imports: [CommonModule],
  templateUrl: './discount.component.html',
})
export class DiscountComponent {
  discount: any = {};
  isLoading: boolean = true;
  errorMessage: string = '';

  constructor(private categoryService: CategoryService) {}
  ngOnInit(): void {
    this.categoryService.getDiscount().subscribe({
      next: (data: any) => {
        this.discount = data.data;
        this.isLoading = false;
      },
      error: (error) => {
        this.errorMessage = error;
        this.isLoading = false;
      },
    });
  }
}
