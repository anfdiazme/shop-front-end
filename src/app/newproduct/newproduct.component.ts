import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { shopService } from '../service/shopservice';

@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.css']
})
export class NewproductComponent implements OnInit {
  productForm: FormGroup;
  Product: any;
  Categories:any;
  constructor(
    public fb: FormBuilder,
    public shopservice: shopService
  ) { }

  ngOnInit(): void {
    this.productForm= this.fb.group({
      id:null,
      name: ['', Validators.required],
      price: ['', Validators.required],
      description:['', Validators.required],
      category:['', Validators.required],
    });
    this.shopservice.getAllson().subscribe(resp => {
      this.Categories = resp;
    },
      error => { console.error(error) }
    );
  }
   
  guardar(): void {
    this.shopservice.newp(this.productForm.value).subscribe(resp => {
      this.productForm.reset();
    },
      error => { console.error(error) }
    )
  }

}
