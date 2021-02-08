//import { Input, OnChanges, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { IProduct } from 'src/app/model/product';
import { ProductServiceService } from '../../service/product-service.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-cat03',
  templateUrl: './cat03.component.html',
  styleUrls: ['./cat03.component.scss']
})
export class Cat03Component {

  constructor(private productService: ProductServiceService){}
  productsObservable: Observable<IProduct[]> = this.productService.getAll().pipe(
    map(products => products.filter(product => product.catId === 2))
  );
  featuredProductsObservable: Observable<IProduct[]> = this.productsObservable.pipe(
    map(products => products.filter(product => product.featured))
  );
}
