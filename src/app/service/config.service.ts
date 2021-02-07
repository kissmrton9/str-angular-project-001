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


  // ne írd át a textet!!!!
  tableCols: ITableCol[] = [
    { key: 'id', text: 'id', editable: false },
    { key: 'catId', text: 'catId', editable: true },
    { key: 'name', text: 'name', editable: true },
    { key: 'description', text: 'description', editable: true },
    { key: 'image', text: 'image', editable: true },
    { key: 'price', text: 'price', editable: true },
    { key: 'stock', text: 'stock', editable: true },
    { key: 'featured', text: 'featured', editable: true },
    { key: 'active', text: 'active', editable: true },
    { key: 'discount', text: 'discount', editable: true }
  ];

  constructor() { }
}
