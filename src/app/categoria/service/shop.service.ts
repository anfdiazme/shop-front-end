import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class shopService {
  private API_SERVER = "http://localhost:8080/subcategory/";

  constructor(private httpClient: HttpClient) { }



  public getAllCategory(id): Observable<any> {
    var ids = id;
    var dir= this.API_SERVER+ids.toString();
    return this.httpClient.get(dir);
  }


}
