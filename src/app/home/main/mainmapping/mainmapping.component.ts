import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../services/category.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SkeletonModule } from 'primeng/skeleton';

@Component({
  selector: 'app-mainmapping',
  standalone: true,
  imports: [CommonModule, HeaderComponent, SkeletonModule],
  templateUrl: './mainmapping.component.html',
})
export class MainmappingComponent implements OnInit {
  products: any[] = [];
  isLoading: boolean = true;
  errorMessage: string = '';
  typeParam: string = '';

  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const category = params['category'] || 'house-plants';
      const type = params['type'];
      const range_min = params['range_min'];
      const range_max = params['range_max'];

      this.typeParam = type;

      this.getProductsByCategory(category, type, range_min, range_max);
    });
  }

  navigateToProduct(id: string, category: string) {
    this.router.navigate([`/shop/${category}/${id}`]);
  }

  getProductsByCategory(
    category: string,
    type?: string | undefined,
    range_min?: string,
    range_max?: string
  ): void {
    this.isLoading = true;
    this.categoryService
      .getByCategoryProducts(category, type, range_min, range_max)
      .subscribe({
        next: (data: any) => {
          this.products = data.data;
          this.isLoading = false;
        },
        error: (error) => {
          this.errorMessage = error;
          this.isLoading = false;
        },
      });
  }
}
