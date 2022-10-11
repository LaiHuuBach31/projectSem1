import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from '../class/cart';

const url = 'http://localhost:3000'
@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }
  getCart(id: any): Observable<any> {
    return this.http.get<any>(`${url}/cart?id_user=${id}`)
  }
  postCart(data: Cart): Observable<Cart> {
    return this.http.post<Cart>(`${url}/cart`, data)
  }
  putCart(data: Cart): Observable<Cart> {
    return this.http.put<Cart>(`${url}/cart/${data.id}`, data)
  }
  removeCart(id: any): Observable<any> {
    return this.http.delete<any>(`${url}/cart/${id}`)
  }
  // removeAll(id: number): Observable<any> {
  //   return this.http.delete<any>(`${url}/cart?id_user=${id}`)
  // }
}
