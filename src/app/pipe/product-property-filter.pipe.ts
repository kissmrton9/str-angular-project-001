import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productPropertyFilter'
})
export class ProductPropertyFilterPipe implements PipeTransform {

  searchByProperties: string[] = ['Name', 'Description', 'Price'];
  orderByProperties: string[] = ['Name', 'Description', 'Price', 'Featured', 'Discount'];

  transform(properties: string[], filterFunction: string) {
    switch (filterFunction) {
      case 'search':
        return properties.filter(item => this.searchByProperties.includes(item));

      case 'order':
        return properties.filter(item => this.orderByProperties.includes(item));

    }
  }

}
