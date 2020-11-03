import { Component, OnInit } from '@angular/core';
import { shopService } from '../service/shopservice';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  Category: any;
  
  constructor(
    public shopservice: shopService
  ) { }

  ngOnInit(): void {
    this.shopservice.getAllCategory().subscribe(resp => {
      this.Category = resp;
    },
      error => { console.error(error) }
    );
  }

}
