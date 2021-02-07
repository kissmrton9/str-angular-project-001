import { Component } from '@angular/core';
//import { ProductServiceService } from './service/product-service.service';
//import { ProductServiceService, list } from './service/product-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'str-angular-project001';
  //constructor(private productService: ProductServiceService){
  //
  // This doesn't work don't know why
  //    this.productService.add(some_product_data);
  //};
  //
  // The following lines generates json data (needs import of 'list'):
  //
  // sorted = list.sort((a, b) => a.id - b.id);
  //     console.log(JSON.stringify(this.sorted));
}
