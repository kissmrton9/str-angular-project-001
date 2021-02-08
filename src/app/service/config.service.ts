import { Injectable } from '@angular/core';

export interface IMenuItem {
  text: string;
  link: string;
  icon?: string;
}


export interface ITableCol {
  key: string;
  text: string;
  editable: boolean;
  inputType: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  appName: string = 'FilmShop';

  menuItems: IMenuItem[] = [
    { text: 'Home', link: '/', icon: 'home' },
    { text: 'Action', link: '/cat01' },
    { text: 'Family', link: '/cat02' },
    { text: 'Horror', link: '/cat03' },
    { text: 'Admin', link: '/admin' },
  ];


  tableCols: ITableCol[] = [
    { key: 'id', text: 'Id', editable: false, inputType: 'input' },
    { key: 'catId', text: 'Category Id', editable: true, inputType: 'input' },
    { key: 'name', text: 'Name', editable: true, inputType: 'input' },
    { key: 'description', text: 'Description', editable: true, inputType: 'input' },
    { key: 'image', text: 'Image', editable: true, inputType: 'input' },
    { key: 'price', text: 'Price', editable: true, inputType: 'input' },
    { key: 'stock', text: 'Stock', editable: true, inputType: 'input' },
    { key: 'featured', text: 'Featured', editable: true, inputType: 'checkbox' },
    { key: 'active', text: 'Active', editable: true, inputType: 'checkbox' },
    { key: 'discount', text: 'Discount', editable: true, inputType: 'checkbox' }
  ];

  searchByProperties: string[] = ['name', 'description', 'price'];
  orderByProperties: string[] = ['name', 'description', 'price', 'featured', 'discount'];


  constructor() { }
}
