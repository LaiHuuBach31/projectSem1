import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  check: any = true
  clickIcon() {
    if (this.check) {
      document.getElementById('icon')?.classList.add('change_icon')
      document.getElementById('filter')?.classList.add('none_sort')
      this.check = false
    } else {
      document.getElementById('icon')?.classList.remove('change_icon')
      document.getElementById('filter')?.classList.remove('none_sort')
      this.check = true
    }

  }
  clickIcon1() {
    if (this.check) {
      document.getElementById('icon1')?.classList.add('change_icon')
      document.getElementById('menu_food')?.classList.add('none_sort')
      this.check = false
    } else {
      document.getElementById('icon1')?.classList.remove('change_icon')
      document.getElementById('menu_food')?.classList.remove('none_sort')
      this.check = true
    }

  }
  clickIcon2() {
    if (this.check) {
      document.getElementById('icon2')?.classList.add('change_icon')
      document.getElementById('menu_drink')?.classList.add('none_sort')
      this.check = false
    } else {
      document.getElementById('icon2')?.classList.remove('change_icon')
      document.getElementById('menu_drink')?.classList.remove('none_sort')
      this.check = true
    }
  }

  add_favorite(){
    
  }
}
