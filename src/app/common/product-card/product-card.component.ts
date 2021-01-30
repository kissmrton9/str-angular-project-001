import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input('product') product: Partial<Product>;
  constructor() { };

  //product: IProduct = {id:2,catId:3,name:"Flesh Gordon",description:"revolutionize virtual action-items",image:"Ultrices.jpeg",price:5466,stock:28,featured:false,active:false};

  ngOnInit(): void {
  }

}
