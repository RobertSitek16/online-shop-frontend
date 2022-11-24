import { Injectable } from '@angular/core';
import { Product } from './model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Product[] {
    return [
      {
        name: "Product 1",
        category: "Category 1",
        description: "Product description 1",
        price: 11.99,
        currency: "EUR"
      },
      {
        name: "Product 2",
        category: "Category 2",
        description: "Product description 2",
        price: 12.99,
        currency: "EUR"
      },
      {
        name: "Product 3",
        category: "Category 3",
        description: "Product description 3",
        price: 13.99,
        currency: "EUR"
      }
    ];
  }

}
