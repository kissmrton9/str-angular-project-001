import { Component, Input, OnInit } from '@angular/core';
import { Filter } from 'src/app/model/filter';
import { IProduct } from 'src/app/model/product';
import { Sorter } from 'src/app/model/sorter';
import { ConfigService } from 'src/app/service/config.service';
//import { list as products, ProductServiceService } from 'src/app/service/product-service.service';
import { Product } from '../../model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Input() products: IProduct[] = [];
  @Input() filter: Filter;
  @Input() sorter: Sorter;


  constructor() { }

  ngOnInit(): void {
  }

}
