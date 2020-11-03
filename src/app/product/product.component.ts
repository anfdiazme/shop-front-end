import { Component, OnInit } from '@angular/core';
import { shopService } from '../service/shopservice';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  Product: any;
  constructor(
    public shopservice: shopService
  ) { }

  ngOnInit(): void {
    this.shopservice.getAllproduct().subscribe(resp => {
      this.Product = resp;
    },
      error => { console.error(error) }
    );
  }

}
