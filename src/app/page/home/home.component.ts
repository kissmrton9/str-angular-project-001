import { Input, OnChanges } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/model/product';
import { ProductServiceService } from '../../service/product-service.service';
import { Observable } from 'rxjs';
import { Filter } from 'src/app/model/filter';
import { Sorter } from 'src/app/model/sorter';
//import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnChanges {

  constructor(private productService: ProductServiceService) { }
  productsObservable: Observable<IProduct[]> = this.productService.getAll();
  products: IProduct[];
  featuredProducts: IProduct[];
  actionProducts: IProduct[];
  filter: Filter = new Filter();
  sorter: Sorter = new Sorter();
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
