import { Input, OnChanges } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/model/product';
import { ProductServiceService } from '../../service/product-service.service';
import { Observable } from 'rxjs';
import { Filter } from 'src/app/model/filter';
import { Sorter } from 'src/app/model/sorter';
import { map } from 'rxjs/operators';
//import { AppComponent } from '../../app.component';

// type IbooleanFilter = {
//   key: string;
//   type: 'boolean';
//   phrase?: 'true' | 'false';
// }
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnChanges {

  constructor(private productService: ProductServiceService) { }
  productsObservable: Observable<IProduct[]> = this.productService.getAll();
  products: IProduct[];
  // featuredProducts: IProduct[];
  // actionProducts: IProduct[];
  filter: Filter = new Filter();
  sorter: Sorter = new Sorter();

  featuredProductsObservable: Observable<IProduct[]> = this.productsObservable.pipe(
    map(products => products.filter(product => product.featured))
  );
  discountProductsObservable: Observable<IProduct[]> = this.productsObservable.pipe(
    map(products => products.filter(product => product.discount))
  );
  // products: IProduct[];
  // featuredProducts: IProduct[];
  // discountProducts: IProduct[];
  // showProducts(){
  //   this.productsObservable
  //     .subscribe((data: IProduct[]) => {
  //       //console.log(data);
  //       this.products = data;
  //       this.featuredProducts = data.filter(value => value.featured);
  //       this.discountProducts = data.filter(value => value.discount);
  //       //console.log(this.featuredProducts);
  //   });
  // //console.log(this.products);
  // }
  //done = this.showProducts();
  //selectDiscount: IbooleanFilter = {key:'discount',type: 'boolean'};
  //selectFeautured: IbooleanFilter = {key:'featured',type: 'boolean'};
  ngOnChanges(): void {
    //this.showProducts();
  }
}
