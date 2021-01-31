import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/model/product';
import { list } from 'src/app/service/product-service.service';

@Component({
  selector: 'app-cat02',
  templateUrl: './cat02.component.html',
  styleUrls: ['./cat02.component.scss']
})
export class Cat02Component implements OnInit {

  products: IProduct[] = list.filter(value => value.catId === 2);
  constructor() { }

  ngOnInit(): void {
  }

}
