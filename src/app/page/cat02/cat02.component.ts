import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/model/product';
import { ProductServiceService } from 'src/app/service/product-service.service';

@Component({
  selector: 'app-cat02',
  templateUrl: './cat02.component.html',
  styleUrls: ['./cat02.component.scss']
})
export class Cat02Component implements OnInit {

  products: IProduct[] = this.productService.data.filter(value => value.catId === 2);
  constructor(private productService: ProductServiceService) { }

  ngOnInit(): void {
  }

}
