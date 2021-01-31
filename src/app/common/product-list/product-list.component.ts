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

  constructor() { }

  ngOnInit(): void {
  }


  onChangePhrase(event: Event): void {
    this.phrase = (event.target as HTMLInputElement).value;
  }
}
