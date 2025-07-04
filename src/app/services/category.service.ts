import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private apiUrl = 'https://green-shop-backend.onrender.com/api';
  constructor(private http: HttpClient) {}

  // Barcha kategoriyalarni olish
  getCategories(): Observable<any[]> {
    return this.http.get<any[]>(
      `${this.apiUrl}/flower/category?access_token=64bebc1e2c6d3f056a8c85b7`
    );
  }

  getDiscount(): Observable<any[]> {
    return this.http.get<any[]>(
      `${this.apiUrl}/features/discount?access_token=64bebc1e2c6d3f056a8c85b7`
    );
  }
  getProductDetails(id: string, category: string): Observable<any[]> {
    return this.http.get<any[]>(
      `${this.apiUrl}/flower/category/${category}/${id}?access_token=64bebc1e2c6d3f056a8c85b7`
    );
  }

  getByCategoryProducts(
    category: string,
    type?: string,
    range_min?: string,
    range_max?: string
  ): Observable<any[]> {
    let params = new HttpParams().set(
      'access_token',
      '64bebc1e2c6d3f056a8c85b7'
    );

    if (type) {
      params = params.set('type', type);
    }
    if (range_min) {
      params = params.set('range_min', range_min);
    }
    if (range_max) {
      params = params.set('range_max', range_max);
    }
    return this.http.get<any[]>(`${this.apiUrl}/flower/category/${category}`, {
      params,
    });
  }
}
