import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/model/product';
import { ProductServiceService } from '../../service/product-service.service';

@Component({
  selector: 'app-cat01',
  templateUrl: './cat01.component.html',
  styleUrls: ['./cat01.component.scss']
})
export class Cat01Component implements OnInit {

  // products: IProduct[] = list.filter(value => value.catId === 0);
  // featuredProducts: IProduct[] = list.filter(value => value.catId === 0 && value.featured);

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
