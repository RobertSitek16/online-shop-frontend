import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminProductUpdate } from '../admin-product-update/model/adminProductUpdate';

@Injectable({
  providedIn: 'root'
})
export class AdminProductAddService {

  constructor(private http: HttpClient) { }

  saveProduct(product: AdminProductUpdate): Observable<AdminProductUpdate> {
    return this.http.post<AdminProductUpdate>("/api/admin/products/", product);
  }

}
