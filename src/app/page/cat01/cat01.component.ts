import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/model/product';
import { list } from '../../service/product-service.service';

@Component({
  selector: 'app-cat01',
  templateUrl: './cat01.component.html',
  styleUrls: ['./cat01.component.scss']
})
export class Cat01Component implements OnInit {

  products: IProduct[] = list.filter(value => value.catId === 1);
  featuredProducts: IProduct[] = list.filter(value => value.catId === 1 && value.featured);

  constructor() { }

  ngOnInit(): void {
  }


}
