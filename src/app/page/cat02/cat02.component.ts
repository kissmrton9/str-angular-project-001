import { Component, OnInit, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Filter } from 'src/app/model/filter';
import { IProduct } from 'src/app/model/product';
import { Sorter } from 'src/app/model/sorter';
import { ProductServiceService } from '../../service/product-service.service';

@Component({
  selector: 'app-cat02',
  templateUrl: './cat02.component.html',
  styleUrls: ['./cat02.component.scss']
})
export class Cat02Component {

  // products: IProduct[] = list.filter(value => value.catId === 1);
  // featuredProducts: IProduct[] = list.filter(value => value.catId === 1 && value.featured);
  // constructor() { }
  filter: Filter = new Filter();
  sorter: Sorter = new Sorter();

  constructor(private productService: ProductServiceService) { }
  productsObservable: Observable<IProduct[]> = this.productService.getAll().pipe(
    map(products => products.filter(product => product.catId === 1))
  );
  featuredProductsObservable: Observable<IProduct[]> = this.productsObservable.pipe(
    map(products => products.filter(product => product.featured))
  );
}
