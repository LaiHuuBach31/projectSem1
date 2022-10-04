import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const urlApi = "http://localhost:3000"

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getAllProduct():Observable<any>{
    return this.http.get<any>(`${urlApi}/product`)
  }

  // phân trang
  getAllProductPage(pages:any):Observable<any>{
    return this.http.get<any>(`${urlApi}/product?_page=${pages}&_limit=9`)
  }
}
