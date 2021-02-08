import { Component, Input, OnInit, OnChanges, HostListener } from '@angular/core';
import { IProduct } from 'src/app/model/product';

@Component({
  selector: 'app-product-pager',
  templateUrl: './product-pager.component.html',
  styleUrls: ['./product-pager.component.scss']
})
export class ProductPagerComponent implements OnInit, OnChanges {

  @Input() products: IProduct[] = [];
  productsForDisplay: IProduct[] = [];
  index: number = 0;
  innerWidth: number = window.innerWidth;
  numberOfCards: number = this.innerWidth < 768 ? 1 : this.innerWidth < 992 ? 2 : 5;
  numberOfLoadedCards: number = 0;
  // isDisableLeft: string = 'scrollArrow--disabled';
  // isDisableRight: string = 'scrollArrow--disabled';
  constructor() {
  }
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
    this.numberOfCards = this.innerWidth < 768 ? 1 : this.innerWidth < 992 ? 2 : 5;
    if (this.numberOfLoadedCards >= this.numberOfCards) {
      this.productsForDisplay = this.products.slice(0, this.numberOfCards);
    }
  }

  ngOnInit(): void {
    //this.onResize();
  }

  ngOnChanges(): void {
    // this.isDisableLeft = this.setDisableLeft();
    // this.isDisableRight = this.setDisableRight();
    this.numberOfLoadedCards = this.products ? this.products.length : 0;
    this.onResize();
  }

  scrollLeft(): void {
    if (this.index !== 0) {
      this.index--;
      this.productsForDisplay = this.products.slice(this.index, this.index + this.numberOfCards);
    }
  }

  scrollRight(): void {
    if (this.numberOfLoadedCards > this.numberOfCards && this.index !== this.products.length - this.numberOfCards && this.index + this.numberOfCards < this.products.length) {
      this.index++;
      this.productsForDisplay = this.products.slice(this.index, this.index + this.numberOfCards);
    }
  }

  setDisableLeft(): string {
    return this.numberOfLoadedCards <= this.numberOfCards || this.index === 0 ? 'scrollArrow--disabled' : '';
  }
  setDisableRight(): string {
    return this.numberOfLoadedCards <= this.numberOfCards || this.index === this.products.length - this.numberOfCards || this.index + this.numberOfCards >= this.products.length ? 'scrollArrow--disabled' : '';
  }

}
