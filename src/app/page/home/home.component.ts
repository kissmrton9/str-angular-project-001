import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/model/product';
import { ProductServiceService } from '../../service/product-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  //products: Product[] = this.productService.data;

  //constructor(private productService: ProductServiceService) {
  //}

  products: IProduct[] = this.productService.data;
  constructor(private productService: ProductServiceService) { }

  // products = list;
  featuredProducts = this.products.filter(value => value.featured);
  actionProducts = this.products.filter(value => value.discount);

  ngOnInit(): void {
  }

}
