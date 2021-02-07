import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/model/product';
import { ProductServiceService } from '../../service/product-service.service';

@Component({
  selector: 'app-cat02',
  templateUrl: './cat02.component.html',
  styleUrls: ['./cat02.component.scss']
})
export class Cat02Component implements OnInit {

  // products: IProduct[] = list.filter(value => value.catId === 1);
  // featuredProducts: IProduct[] = list.filter(value => value.catId === 1 && value.featured);
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
