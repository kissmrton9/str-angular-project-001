import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productPropertyFilter'
})
export class ProductPropertyFilterPipe implements PipeTransform {

  searchByProperties: string[] = ['name', 'description', 'price'];
  orderByProperties: string[] = ['name', 'description', 'price', 'featured', 'discount'];

  transform(properties: string[], filterFunction: string) {
    switch (filterFunction) {
      case 'search':
        return properties.filter(item => this.searchByProperties.includes(item));

      case 'order':
        return properties.filter(item => this.orderByProperties.includes(item));

    }
  }

}
