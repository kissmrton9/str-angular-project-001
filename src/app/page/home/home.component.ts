import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { IProduct, Product } from 'src/app/model/product';
import { ProductServiceService } from '../../service/product-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  products$: Observable<IProduct[]> = this.productService.getAll();
  featuredProducts$: Observable<IProduct[]> = this.productService.getAll();
  actionProducts$: Observable<IProduct[]> = this.productService.getAll();
  constructor(
    private productService: ProductServiceService,
  ) { }

  // products = list;
  // featuredProducts = this.products.filter(value => value.featured);
  // actionProducts = this.products.filter(value => value.discount);

  ngOnInit(): void {
  }

}
