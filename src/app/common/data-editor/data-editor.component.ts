import { Component, OnInit, OnChanges, Input } from '@angular/core';
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

export class DataEditorComponent {

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
  ) { }

  onCreate(product: Product): void {
    this.productService.add(product).subscribe(
      addedProduct => console.log(addedProduct)
    );
  }
  onUpdate(product: Product): void {
    this.productService.update(product).subscribe(
      updatedProduct => console.log(updatedProduct)
    );
  }
  onDelete(product: Product): void {
    this.productService.remove(product).subscribe(
      () => console.log('deleted')
    );
  }

}
