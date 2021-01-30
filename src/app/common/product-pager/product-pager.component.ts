import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product-pager',
  templateUrl: './product-pager.component.html',
  styleUrls: ['./product-pager.component.scss']
})
export class ProductPagerComponent implements OnInit {

  @Input() products: Product[] = [];
  productsForDisplay: Product[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.productsForDisplay = this.products.slice(0, 5);
  }

}
