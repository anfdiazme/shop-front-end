import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CategoriaComponent} from './categoria/categoria.component'

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { NewcategoryComponent } from './newcategory/newcategory.component';
import { NewproductComponent } from './newproduct/newproduct.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriaComponent,
    CategoryComponent,
    NewcategoryComponent,
    NewproductComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path :'category',component: CategoryComponent},
      {path :'subcategory', component: CategoriaComponent},
      {path :'newcategory', component:NewcategoryComponent},
      {path :'newproduct', component:NewproductComponent},
      {path :'products', component:ProductComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
