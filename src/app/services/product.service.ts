import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProductsFromServer(): Observable<Product[]> {
    return this.http.get<Product[]>('https://jsonplaceholder.typicode.com/posts');
  }

  getProductDetailById(id: string): Observable<Product> {
    return this.http.get<Product>('https://jsonplaceholder.typicode.com/posts/' + id);
  }
}
