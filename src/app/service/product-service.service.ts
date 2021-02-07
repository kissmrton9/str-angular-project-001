import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product, IProduct } from '../model/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  apiUrl: string = 'http://localhost:3000/products';

  constructor(private http: HttpClient,) {
  }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  get(product: Product): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${product.id}`);
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product);
  }
  remove(product: Product): Observable<Product> {
    return this.http.delete<Product>(`${this.apiUrl}/${product.id}`);
  }
  update(product: Product): Observable<Product> {
    return this.http.patch<Product>(`${this.apiUrl}/${product.id}`, product);
  }
}


// data = data.map(el => {
//   el.catId = modif[el.id].catId;
//   el.image = modif[el.id].image;
//   el.name = modif[el.id].name;
//   el.active = true;
//   el.description = newdesc[el.id];
//   return el
// });

// while (
//   data.filter((el) => el.discount && el.catId === 0).length < 5 ||
//   data.filter((el) => el.discount && el.catId === 1).length < 5 ||
//   data.filter((el) => el.discount && el.catId === 2).length < 5 ||
//   data.filter((el) => el.featured && el.catId === 0).length < 5 ||
//   data.filter((el) => el.featured && el.catId === 1).length < 5 ||
//   data.filter((el) => el.featured && el.catId === 2).length < 5
// ) {
//   data = data
//     .map(el => {
//       el.active = true;
//       el.discount = (Math.random() > 0.5);
//       el.featured = (Math.random() > 0.5);
//       if (Math.random() > 0.9) {
//         el.active = false;
//         el.discount = false;
//         el.featured = false;
//         // el.stock = 0;
//         //Ha többször fut le a while ciklus, lehet, hogy aktív termékekből is kifogy a készlet...
//         // el.price = 'typeof notActive';
//       }
//       return el
//     })
// };
// data = data.map(el => { el.stock = el.active ? el.stock : 0; return el });

// export const list = data;
//export const list = new ProductServiceService(data);
// export const listById = (categoryId: number) => list.filter(value => value.catId === categoryId);
// export const listByFeatured = (featured: boolean) => list.filter(value => value.featured);
// export const listByActive = (active: boolean) => list.filter(value => value.active);
// export const listByDiscount = (discount: boolean) => list.filter(value => value.discount);

// export const listById = (categoryId: number) => new ProductServiceService(data.filter(value => value.catId === categoryId));
// export const listByFeatured = (featured: boolean) => new ProductServiceService(data.filter(value => value.featured === featured));
// export const listByAction = (featured: boolean) => new ProductServiceService(data.filter(value => value.featured === featured));