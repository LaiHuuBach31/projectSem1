import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  mark(mark: any) {
    let quantily: any = document.getElementById('quantity')
    let quantily_768: any = document.getElementById('quantity_768')
    if (mark == '-') {
      if (quantily.value > 1) {
        quantily.value = quantily.value - 1
      }
    } else {
      quantily.value = Number(quantily.value) + 1
    }
    if (mark == '-') {
      if (quantily_768.value > 1) {
        quantily_768.value = quantily_768.value - 1
      }
    } else {
      quantily_768.value = Number(quantily_768.value) + 1
    }

  }

}
