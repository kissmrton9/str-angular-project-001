import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { Cat01Component } from './page/cat01/cat01.component';
import { Cat02Component } from './page/cat02/cat02.component';
import { Cat03Component } from './page/cat03/cat03.component';
import { HomeComponent } from './page/home/home.component';
//import { ProductServiceService } from 'src/app/service/product-service.service';
import { ProductCardComponent } from './common/product-card/product-card.component';
import { ProductPagerComponent } from './common/product-pager/product-pager.component';
import { ProductListComponent } from './common/product-list/product-list.component';
import { FilterPipe } from './pipe/filter.pipe';
import { SorterPipe } from './pipe/sorter.pipe';
import { ProductPropertyFilterPipe } from './pipe/product-property-filter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './page/admin/admin.component';
import { DataEditorComponent } from './common/data-editor/data-editor.component';
import { FormsModule } from '@angular/forms';
import { SearcbarComponent } from './common/searcbar/searcbar.component'
// import { Routes } from '@angular/router';

// const appRoutes: Routes = [
//   {path: "", component:HomeComponent},
//   {path: "admin", component:AdminComponent},
//   {path: "home", component:HomeComponent},
//   {path: "cat01", component:Cat01Component},
//   {path: "cat02", component:Cat02Component},
//   {path: "cat03", component:Cat03Component},
//   {path: "**", component:HomeComponent},
// ]

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AdminComponent,
    Cat01Component,
    Cat02Component,
    Cat03Component,
    HomeComponent,
    ProductCardComponent,
    ProductPagerComponent,
    ProductListComponent,
    FilterPipe,
    SorterPipe,
    ProductPropertyFilterPipe,
    DataEditorComponent,
    SearcbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
