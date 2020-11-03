import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { shopService } from '../service/shopservice';

@Component({
  selector: 'app-newcategory',
  templateUrl: './newcategory.component.html',
  styleUrls: ['./newcategory.component.css']
})

export class NewcategoryComponent implements OnInit {
  categoryForm: FormGroup;
  Category: any;
  Categories:any;
  constructor(
    public fb: FormBuilder,
    public shopservice: shopService
  ) { }

  ngOnInit(): void {
    this.categoryForm= this.fb.group({
      name: ['', Validators.required],
      father: [''],
    });
    this.shopservice.getAllCategories().subscribe(resp => {
      this.Categories = resp;
    },
      error => { console.error(error) }
    );
  }
   
  guardar(): void {
    this.shopservice.newC(this.categoryForm.value).subscribe(resp => {
      this.categoryForm.reset();
    },
      error => { console.error(error) }
    )
  }

}
