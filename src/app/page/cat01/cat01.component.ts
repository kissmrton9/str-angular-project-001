//import { Input, OnChanges, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { IProduct } from 'src/app/model/product';
import { ProductServiceService } from '../../service/product-service.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-cat01',
  templateUrl: './cat01.component.html',
  styleUrls: ['./cat01.component.scss']
})
export class Cat01Component {

  constructor(private productService: ProductServiceService){}
  productsObservable: Observable<IProduct[]> = this.productService.getAll().pipe(
    map(products => products.filter(product => product.catId === 0))
  );
  featuredProductsObservable: Observable<IProduct[]> = this.productsObservable.pipe(
    map(products => products.filter(product => product.featured))
  );
}
