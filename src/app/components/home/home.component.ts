import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ProductDataService } from 'src/app/services/product-data.service';
import { Product } from 'src/assets/models/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  productsSlice: Product[] = [];

  // MatPaginator Inputs
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 50, 100];

  // MatPaginator Output
  pageEvent: PageEvent | undefined;

  constructor(private productDataService: ProductDataService) {
    this.getProducts();
  }

  ngOnInit(): void {}

  getProducts(): void {
    this.productDataService.getProducts().subscribe((productsData) => {
      this.products = productsData;
      this.productsSlice = this.products.slice(0, 10);
    });
  }

  onPageChange(event: PageEvent) {
    const starIndex = event.pageIndex * event.pageSize;
    let endIndex = starIndex + event.pageSize;
    if (endIndex > this.products.length) {
      endIndex = this.products.length;
    }
    this.productsSlice = this.products.slice(starIndex, endIndex);
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
}
