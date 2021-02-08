import { Component, OnInit, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ITableCol } from 'src/app/service/config.service';
import { ProductServiceService } from '../../service/product-service.service';
import { ConfigService } from '../../service/config.service';

@Component({
  selector: 'app-data-editor',
  templateUrl: './data-editor.component.html',
  styleUrls: ['./data-editor.component.scss']
})

export class DataEditorComponent {


  selectedKeyForSearch: string = 'name';
  productList$: Observable<Product[]> = this.productService.getAll();
  cols: ITableCol[] = this.config.tableCols;

  phrase: string = '';
  phrase2: string = '';
  keys: string[] = this.config.tableCols.map(item => item.text);
  sortKey: string = 'name';
  sortAscend: boolean = true;


  constructor(
    private productService: ProductServiceService,
    private config: ConfigService,
  ) { }

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


  onChangePhrase(event: Event): void {

    this.phrase = (event.target as HTMLInputElement).value;
  }
  onChangePhrase2(event: Event): void {
    this.phrase2 = (event.target as HTMLInputElement).value;
  }


  selectKeyForSearch(key: string): void {
    this.selectedKeyForSearch = key;
    if (this.selectedKeyForSearch !== 'price') {
      this.phrase = '';
      this.phrase2 = '';
    }
  }

  selectColumnForSort(column: string): void {
    this.sortKey = column;
  }

  changeSortAscend(): void {
    this.sortAscend = !this.sortAscend;
  }

}
