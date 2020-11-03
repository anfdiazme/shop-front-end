import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  shopService} from './service/shopservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  Category: any;
  constructor(
    public fb: FormBuilder,
    public shopservice: shopService,
  ) {

  } 
  ngOnInit(): void {
    this.shopservice.getAllCategory().subscribe(resp => {
      this.Category = resp;
    },
      error => { console.error(error) }
    );
  }  
}
