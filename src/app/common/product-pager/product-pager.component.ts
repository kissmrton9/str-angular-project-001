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
  index: number = 0;

  constructor() {
  }

  ngOnInit(): void {
    this.productsForDisplay = this.products.slice(0, 5);
  }

  scrollLeft(): void {
    if (this.index !== 0) {
      console.log('left');
      this.index--;
      this.productsForDisplay = this.products.slice(this.index, this.index + 5);
    }
  }

  scrollRight(): void {
    if (this.index !== this.products.length - 5) {
      console.log('right');
      this.index++;
      this.productsForDisplay = this.products.slice(this.index, this.index + 5);
    }
  }

}
