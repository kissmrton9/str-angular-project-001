import { Pipe, PipeTransform } from '@angular/core';

type IstringFilter = {
    key: string;
    type?: 'string';
    phrase: string;
}
type InumberFilter = {
  key: string;
  type: 'number';
  min?: number | string;
  max?: number | string;
}
type IbooleanFilter = {
  key: string;
  type: 'boolean';
  phrase?: 'true' | 'false';
}
type IFilter = IstringFilter | InumberFilter | IbooleanFilter;

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filter: IFilter): any {
    if (!Array.isArray(value) || !filter.key) {
      return value;
    }
    //const type:string = filter.type ? filter.type : 'string';
    const key = filter.key;
    switch(filter.type){
      case 'number':
        const min =
          typeof filter.min==='undefined' ? '' :
          typeof filter.min==='string' && filter.min ? parseFloat(filter.min) : filter.min;
        const max =
          typeof filter.max==='undefined' ? '' :
          typeof filter.max==='string' && filter.max ? parseFloat(filter.max) : filter.max;
        if(min===''){
          if(max===''){
            return value;
          }
          else{
            return value.filter(item => item[key] <= filter.max);
          }
        }
        else{
          if(max===''){
            return value.filter(item => item[key] >= filter.min);
          }
          else{
            return value.filter(item => item[key] <= filter.max && item[key] >= filter.min);
          }
        }
      case 'boolean':
        const phrase = typeof filter.phrase === 'undefined' ? true : filter.phrase;
        return value.filter(item => item[key] === phrase);
      default:
        return value.filter(item => item[key].toLocaleLowerCase().includes(filter.phrase.toLocaleLowerCase()));
      }
  }
}
