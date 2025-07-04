import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../../services/category.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { DiscountComponent } from '../discount/discount.component';
import { SliderModule } from 'primeng/slider';
import { FormsModule } from '@angular/forms';
import { SkeletonModule } from 'primeng/skeleton';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
    DiscountComponent,
    SliderModule,
    SkeletonModule,
  ],
  templateUrl: './category.component.html',
})
export class CategoryComponent implements OnInit {
  categories: any[] = [];
  isLoading: boolean = true;
  errorMessage: string = '';
  products: any[] = [];
  selectedCategory = '';
  rangeValues: number[] = [0, 1000];
  type: string = '';

  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe({
      next: (data: any) => {
        this.categories = data.data;
        this.isLoading = false;

        this.route.queryParams.subscribe((params) => {
          const range_min = params['range_min'] || 0;
          const range_max = params['range_max'] || 1000;

          this.type = params['type'] || 'new-plants';
          this.rangeValues = [range_min, range_max];
          this.selectedCategory =
            params['category'] || this.categories[0]?.route_path;
        });
      },
      error: (error) => {
        this.errorMessage = error;
        this.isLoading = false;
      },
    });
  }
  applyFilters() {
    const [range_min, range_max] = this.rangeValues;

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { range_min, range_max },
      queryParamsHandling: 'merge',
    });
  }

  onCategoryClick(category: string) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { category },
      queryParamsHandling: 'merge',
    });
  }
}
