import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/model/product';
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
  phrase: string = '';
  phrase2: string = '';
  keys: string[] = this.config.tableCols.map(item => item.text);
  selectedKeyForSearch: string = 'name';
  sortKey: string = 'name';
  sortAscend: boolean = true;

  constructor(private config: ConfigService,) { }

  ngOnInit(): void {
  }


  onChangePhrase(event: Event): void {

    this.phrase = (event.target as HTMLInputElement).value;
  }
  onChangePhrase2(event: Event): void {
    this.phrase2 = (event.target as HTMLInputElement).value;
  }


  selectKeyForSearch(key: string): void {
    this.selectedKeyForSearch = key;
    if (this.selectedKeyForSearch !== 'price') {
      this.phrase = '';
      this.phrase2 = '';
    }
  }

  selectColumnForSort(column: string): void {
    this.sortKey = column;
  }

  changeSortAscend(): void {
    this.sortAscend = !this.sortAscend;
  }
}
