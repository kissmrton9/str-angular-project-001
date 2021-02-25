import { Input, OnChanges } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Filter } from 'src/app/model/filter';
import { IProduct } from 'src/app/model/product';
import { Sorter } from 'src/app/model/sorter';
import { ProductServiceService } from '../../service/product-service.service';

@Component({
  selector: 'app-cat01',
  templateUrl: './cat01.component.html',
  styleUrls: ['./cat01.component.scss']
})
export class Cat01Component implements OnChanges {

  // products: IProduct[] = list.filter(value => value.catId === 0);
  // featuredProducts: IProduct[] = list.filter(value => value.catId === 0 && value.featured);

  // constructor() { }

  filter: Filter = new Filter();
  sorter: Sorter = new Sorter();

  constructor(private productService: ProductServiceService) { }
  productsObservable: Observable<IProduct[]> = this.productService.getAll()
    .pipe(map(products => products.filter(product => product.catId === 0)));
  // products: IProduct[];
  // featuredProducts: IProduct[];
  // actionProducts: IProduct[];


  featuredProductsObservable: Observable<IProduct[]> = this.productsObservable.pipe(
    map(products => products.filter(product => product.featured))
  );
  ngOnChanges(): void {
  }

  // export class Cat01Component {

  // constructor(private productService: ProductServiceService){}
  // productsObservable: Observable<IProduct[]> = this.productService.getAll().pipe(
  //   map(products => products.filter(product => product.catId === 0))
  // );
  // featuredProductsObservable: Observable<IProduct[]> = this.productsObservable.pipe(
  //   map(products => products.filter(product => product.featured))
  // );
}
