import { Component, OnInit, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/model/product';
import { ProductServiceService } from '../../service/product-service.service';

@Component({
  selector: 'app-cat03',
  templateUrl: './cat03.component.html',
  styleUrls: ['./cat03.component.scss']
})
export class Cat03Component implements OnChanges {

  // products: IProduct[] = list.filter(value => value.catId === 2);
  // featuredProducts: IProduct[] = list.filter(value => value.catId === 2 && value.featured);
  // constructor() { }


  constructor(private productService: ProductServiceService) { }
  productsObservable: Observable<IProduct[]> = this.productService.getAll();
  products: IProduct[];
  featuredProducts: IProduct[];
  actionProducts: IProduct[];
  showProducts() {
    this.productsObservable
      .subscribe((data: IProduct[]) => {
        //console.log(data);
        this.products = data;
        this.featuredProducts = data.filter(value => value.featured);
        this.actionProducts = data.filter(value => value.discount);
        //console.log(this.featuredProducts);
      });
    //console.log(this.products);
  }
  done = this.showProducts();
  ngOnChanges(): void {
    this.showProducts();
  }
}
