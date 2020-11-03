import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class shopService {
  private API_SERVER = "http://localhost:8080/allcategory";
  private API_SERVER1 = "http://localhost:8080/allcategories";
  private Api_newc = "http://localhost:8080/newcategory";
  private API_son ="http://localhost:8080/categoryson";
  private API_newp="http://localhost:8080/newproduct";
  private API_pro="http://localhost:8080/allproduct";

  constructor(private httpClient: HttpClient) { }



  public getAllCategory(): Observable<any> {
    return this.httpClient.get(this.API_SERVER);
  }
  public newC (category:any): Observable<any>{
    return this.httpClient.post(this.Api_newc,category);
  }
  public getAllCategories(): Observable<any> {
    return this.httpClient.get(this.API_SERVER1);
  } 
  public getAllson():Observable<any> {
    return this.httpClient.get(this.API_son);
  } 
  public newp (product:any): Observable<any>{
    return this.httpClient.post(this.API_newp,product);
  }
  public getAllproduct():Observable<any> {
    return this.httpClient.get(this.API_pro);
  } 
}

