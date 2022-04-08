import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-content',
  templateUrl: './product-content.component.html',
  styleUrls: ['./product-content.component.css']
})
export class ProductContentComponent implements OnInit {

  products: Product[] = [];

  constructor(private service: ProductService) { }

  ngOnInit(): void {
    // 서버로 요청하여 데이터를 가져와서, products 변수에 할당해 준다.
    this.service.getProductsFromServer()
      .subscribe(data => this.products = data);
    
  }

  refreshScreen() {
    this.service.getProductsFromServer()
      .subscribe(data => {
        this.products = data;
        console.log(this.products);
      });
  }

  goDetail() {
    console.log('hello');
  }

}
