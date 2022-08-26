import { Component, OnInit } from '@angular/core';
import { ProductDataService } from 'src/app/services/product-data.service';
import { Product } from 'src/assets/models/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
products: Product[]=[];
  constructor(private productDataService: ProductDataService) { 
    this.getProducts();
  }

  ngOnInit(): void {
  }

  getProducts(): void{
    this.productDataService.getProducts()
    .subscribe(productsData=>{this.products=productsData})
  }
}
