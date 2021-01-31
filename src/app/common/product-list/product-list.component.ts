import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/model/product';
//import { list as products, ProductServiceService } from 'src/app/service/product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Input() products: IProduct[] = [];
  phrase: string = '';
  keys: string[];
  selectedKeyForSearch: string = 'name';

  constructor() { }

  ngOnInit(): void {
    this.keys = Object.keys(this.products[0]);
  }


  onChangePhrase(event: Event): void {
    this.phrase = (event.target as HTMLInputElement).value;
  }

  selectKeyForSearch(key: string): void {
    this.selectedKeyForSearch = key;
  }
}
