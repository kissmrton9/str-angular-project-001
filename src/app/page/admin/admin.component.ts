import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Filter } from 'src/app/model/filter';
import { IProduct } from 'src/app/model/product';
import { Sorter } from 'src/app/model/sorter';
import { ProductServiceService } from 'src/app/service/product-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  productsObservable: Observable<IProduct[]> = this.productService.getAll();

  filter: Filter = new Filter();
  sorter: Sorter = new Sorter();
  constructor(private productService: ProductServiceService,) { }

  ngOnInit(): void {
  }

}
