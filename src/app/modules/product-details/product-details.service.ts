import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Review } from '../product/model/review';
import { ProductDetails } from './model/productDetails';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {

  constructor(private http: HttpClient) { }

  getProductDetails(slug: string): Observable<ProductDetails> {
    return this.http.get<ProductDetails>("/api/products/" + slug);
  }

  saveProductReview(review: Review): Observable<Review> {
    return this.http.post<Review>("/api/reviews", review);
  }

}
