import { Component, OnInit } from '@angular/core';
import {  shopService} from './service/shop.service'

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
  Category: any;
  constructor(
    public shopservice: shopService
  ) { }

  ngOnInit(): void {
    this.shopservice.getAllCategory(1).subscribe(resp => {
      this.Category = resp;
    },
      error => { console.error(error) }
    );
  }

}
