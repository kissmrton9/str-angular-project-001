import { Component, OnInit, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Filter } from 'src/app/model/filter';
import { IProduct } from 'src/app/model/product';
import { Sorter } from 'src/app/model/sorter';
import { ProductServiceService } from '../../service/product-service.service';

@Component({
  selector: 'app-cat03',
  templateUrl: './cat03.component.html',
  styleUrls: ['./cat03.component.scss']
})
export class Cat03Component {

  // products: IProduct[] = list.filter(value => value.catId === 2);
  // featuredProducts: IProduct[] = list.filter(value => value.catId === 2 && value.featured);
  // constructor() { }

  filter: Filter = new Filter();
  sorter: Sorter = new Sorter();

  constructor(private productService: ProductServiceService) { }
  productsObservable: Observable<IProduct[]> = this.productService.getAll().pipe(
    map(products => products.filter(product => product.catId === 2))
  );
  featuredProductsObservable: Observable<IProduct[]> = this.productsObservable.pipe(
    map(products => products.filter(product => product.featured))
  );
}
