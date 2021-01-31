import { Component, OnInit } from '@angular/core';
//import { Product } from 'src/app/model/product';
import { list } from 'src/app/service/product-service.service';
import { listById } from '../../service/product-service.service';

@Component({
  selector: 'app-cat02',
  templateUrl: './cat02.component.html',
  styleUrls: ['./cat02.component.scss']
})
export class Cat02Component implements OnInit {

  products = listById(2);

  //constructor(private productService: ProductServiceService) { }

  ngOnInit(): void {
  }

}
