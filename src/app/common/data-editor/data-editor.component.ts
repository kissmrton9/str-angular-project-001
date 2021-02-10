import { Component, OnInit, OnChanges, Input, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct, Product } from 'src/app/model/product';
import { ITableCol } from 'src/app/service/config.service';
import { ProductServiceService } from '../../service/product-service.service';
import { ConfigService } from '../../service/config.service';
import { Filter } from 'src/app/model/filter';
import { Sorter } from 'src/app/model/sorter';

@Component({
  selector: 'app-data-editor',
  templateUrl: './data-editor.component.html',
  styleUrls: ['./data-editor.component.scss']
})

export class DataEditorComponent{

  @Input() products: IProduct[] = [];
  @Input() filter: Filter;
  @Input() sorter: Sorter;

  // selectedKeyForSearch: string = 'name';
  // productList$: Observable<Product[]> = this.productService.getAll();
  cols: ITableCol[] = this.config.tableCols;

  // phrase: string = '';
  // phrase2: string = '';
  keys: string[] = this.config.tableCols.map(item => item.text);
  // sortKey: string = 'name';
  // sortAscend: boolean = true;


  constructor(
    private productService: ProductServiceService,
    private config: ConfigService,
//    private ref: ChangeDetectorRef
  ){}
  
  trackItem (product: IProduct) {
    return product.id;
  }
  
  // ngOnChanges(){
  //   if(this.products && this.products.length >= 50){
  //     this.ref.detach();
  //   }
  // }

  maxId(): number{
    return Math.max(...this.products.map(product => product.id));
  }

  onCreate(product: Product): void {
    const baseid = product.id;
    const newid = this.maxId() + 1;
    const num = this.products.indexOf(product);
    this.productService.add(product).subscribe(
      () => console.log('Created product ' + newid + 'based on' + baseid)
    );
    // Changing this.products to make angular *ngFor refresh the list
    product.id = newid; //give new id
    this.productService.getOne(baseid).subscribe(
      (p) => {
        this.products[num] = p;
        this.products.splice(num,0,product);
      }
    );
//    this.ref.detectChanges();
  }
  onUpdate(product: Product): void {
    this.productService.update(product).subscribe(
      updatedProduct => console.log('Updated product:' + updatedProduct.id)
    );
  }
  onDelete(product: Product): void {
    const id = product.id;
    this.productService.remove(product).subscribe(
      () => console.log('Deleting product:' + product.id)
    );
    // This doesn't work, angular doesn't refresh:
    //
    this.products.splice(this.products.indexOf(product),1);
//    this.ref.detectChanges();
    //
    // But this works:
    //let list: IProduct[] = this.products;
    //list.splice(id,1);
    //this.products = list;
  }

}
