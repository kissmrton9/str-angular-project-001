import { HostListener } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/model/product';

@Component({
  selector: 'app-product-pager',
  templateUrl: './product-pager.component.html',
  styleUrls: ['./product-pager.component.scss']
})
export class ProductPagerComponent implements OnInit {

  @Input() products: IProduct[] = [];
  productsForDisplay: IProduct[] = [];
  index: number = 0;
  innerWidth: number;
  numberOfCard: number = 5;
  constructor() {
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    this.numberOfCard = this.innerWidth < 768 ? 1 : this.innerWidth < 1200 ? 2 : 5;
    this.productsForDisplay = this.products.slice(0, this.numberOfCard);
  }

  ngOnInit(): void {
    this.productsForDisplay = this.products.slice(0, 5);
    this.innerWidth = window.innerWidth;
  }

  scrollLeft(): void {
    if (this.index !== 0) {
      this.index--;
      this.productsForDisplay = this.products.slice(this.index, this.index + this.numberOfCard);
    }
  }

  scrollRight(): void {
    if (this.index !== this.products.length - this.numberOfCard) {
      this.index++;
      this.productsForDisplay = this.products.slice(this.index, this.index + this.numberOfCard);
    }
  }

}
