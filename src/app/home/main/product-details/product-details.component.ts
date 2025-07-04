import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../../../services/category.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
})
export class ProductDetailsComponent implements OnInit {
  porductId: string | null = '';
  productDetails: any;
  isLoading: boolean = true;
  errorMessage: string = '';
  category: string | null = '';
  selectedSize = 'M';
  sizes = ['S', 'M', 'L', 'XL'];
  tabs = ['Product Description', 'Reviews (0)'];
  selectedImage: number | null = null;
  activeTab = 0;

  constructor(
    private route: ActivatedRoute,
    private categoryDetails: CategoryService
  ) {}

  selectSize(size: string): void {
    this.selectedSize = size;
  }

  setActiveTab(index: number): void {
    this.activeTab = index;
  }

  selectImage(index: number): void {
    this.selectedImage = index;
  }
  ngOnInit(): void {
    this.porductId = this.route.snapshot.paramMap.get('id');
    this.category = this.route.snapshot.paramMap.get('category');

    this.categoryDetails
      .getProductDetails(this.porductId!, this.category!)
      .subscribe({
        next: (data: any) => {
          this.productDetails = data.data;
          this.isLoading = false;
          console.log(this.productDetails);
        },
        error: (error) => {
          this.errorMessage = error;
          this.isLoading = false;
        },
      });
  }
}
