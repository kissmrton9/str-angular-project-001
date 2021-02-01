import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {


  transform(value: any[], phrase: string, key: string = '', phrase2?: string): any {
    if (!Array.isArray(value) || !phrase || !key) {
      return value;
    }

    console.log('jelen1');
    if (key === 'price') {
      if (!isNaN(parseInt(phrase)) || !isNaN(parseInt(phrase2))) {
        console.log('jelen2');
        if (!isNaN(parseInt(phrase)) && !isNaN(parseInt(phrase2))) {
          console.log('ketto');
          return value.filter(item => parseInt(phrase) <= parseInt(item[key]) && parseInt(phrase2) >= parseInt(item[key]));
        }
        if (!isNaN(parseInt(phrase))) {
          console.log('from');
          return value.filter(item => parseInt(phrase) <= parseInt(item[key]));
        }
        if (!isNaN(parseInt(phrase2))) {
          console.log('to');
          return value.filter(item => parseInt(phrase2) >= parseInt(item[key]));
        }
      }
      else {
        return value;
      }
    }


    phrase = phrase.toLowerCase();
    return value.filter(item => item[key].toString().toLowerCase().includes(phrase));

  }
}
