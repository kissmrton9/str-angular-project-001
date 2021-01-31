import { Component, OnInit } from '@angular/core';
//import { IProduct } from 'src/app/model/product';
import { list } from 'src/app/service/product-service.service';


@Component({
  selector: 'app-cat01',
  templateUrl: './cat01.component.html',
  styleUrls: ['./cat01.component.scss']
})
export class Cat01Component implements OnInit {

  //products: Product[] = this.productService.data;

  //constructor(private productService: ProductServiceService) { }
  products = list;
  ngOnInit(): void {
  }


}
