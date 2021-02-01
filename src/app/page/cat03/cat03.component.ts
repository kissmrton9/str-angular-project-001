import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/model/product';
import { list } from 'src/app/service/product-service.service';

@Component({
  selector: 'app-cat03',
  templateUrl: './cat03.component.html',
  styleUrls: ['./cat03.component.scss']
})
export class Cat03Component implements OnInit {

  products: IProduct[] = list.filter(value => value.catId === 2);
  featuredProducts: IProduct[] = list.filter(value => value.catId === 2 && value.featured);
  constructor() { }

  ngOnInit(): void {
  }

}
