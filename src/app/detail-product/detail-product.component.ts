import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/assets/models/product';
import { ProductDataService } from '../services/product-data.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css'],
})
export class DetailProductComponent implements OnInit {
  id: string = '0';
  product: Product = {
    id: 0,
    name: '',
    description: '',
    price: '',
    imageUrl: '',
    quantity: '',
  };
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productDataService: ProductDataService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getProduct(this.id);
  }

  getProduct(id: string): void {
    this.productDataService
      .getProduct(id)
      .subscribe((productData) => (this.product = productData));
  }
}
