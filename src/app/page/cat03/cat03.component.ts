import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/model/product';
import { ProductServiceService } from '../../service/product-service.service';

@Component({
  selector: 'app-cat03',
  templateUrl: './cat03.component.html',
  styleUrls: ['./cat03.component.scss']
})
export class Cat03Component implements OnInit {

  // products: IProduct[] = list.filter(value => value.catId === 2);
  // featuredProducts: IProduct[] = list.filter(value => value.catId === 2 && value.featured);
  // constructor() { }


  products: Observable<IProduct[]> = this.productService.getAll();
  featuredProducts: Observable<IProduct[]> = this.productService.getAll();
  actionProducts: Observable<IProduct[]> = this.productService.getAll();
  constructor(
    private productService: ProductServiceService,
  ) { }


  ngOnInit(): void {
  }

}
