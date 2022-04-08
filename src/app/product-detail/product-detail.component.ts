import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product = {
    id: 0,
    userId: 0,
    title: '',
    body: '',
  };

  constructor(
    private route: ActivatedRoute,
    private service: ProductService) { }

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id') ?? '';
    console.log(productId);
    this.service.getProductDetailById(productId)
      .subscribe(p => this.product = p);
  }

}
