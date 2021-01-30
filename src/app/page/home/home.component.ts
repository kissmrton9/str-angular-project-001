import { Component, OnInit } from '@angular/core';
//import { IProduct } from 'src/app/model/product';
import { list } from '../../service/product-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  //products: Product[] = this.productService.data;
  products = list;
  //constructor(private productService: ProductServiceService) {
  //}

  ngOnInit(): void {
  }

}
