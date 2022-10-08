import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const url = 'http://localhost:3000'
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }
  getCategoriesMain(): Observable<any> {
    return this.http.get<any>(`${url}/category_main`)
  }
  getCategoriesFood(): Observable<any> {
    return this.http.get<any>(`${url}/category_food`)
  }
  getCategoriesBeverage(): Observable<any> {
    return this.http.get<any>(`${url}/category_beverage`)
  }
  getCategoriesCombo(): Observable<any> {
    return this.http.get<any>(`${url}/category_combo`)
  }
  getCategoryById1(): Observable<any> {
    return this.http.get<any>(`${url}/category_main?id=1`)
  }
  getCategoryById2(): Observable<any> {
    return this.http.get<any>(`${url}/category_main?id=2`)
  }
}
