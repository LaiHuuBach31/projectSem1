import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-filter-product',
  templateUrl: './filter-product.component.html',
  styleUrls: ['./filter-product.component.css']
})
export class FilterProductComponent implements OnInit {
  id: any
  product: any;
  page: any = 1;
  cate_food: any
  cate_beverage: any
  dataPro: any = []
  constructor(private productService: ProductService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.productService.getCategoryFood().subscribe((data) => {
      this.cate_food = data
    })
    this.productService.getCategoryBeverage().subscribe((data) => {
      this.cate_beverage = data
    })
    this.router.paramMap.subscribe((params: ParamMap) => {
      this.id = Number(params.get('id'))
      Number.isInteger(Number(this.id)) ? this.getPro() : this.getProductChild()
    }
    )
  }

  getPro() {
    this.productService.getPro(this.id).subscribe((data) => {
      this.dataPro = data
      console.log(this.dataPro)
    })
  }
  getProductChild() {
    this.productService.getProChild(this.id).subscribe((data) => {
      this.dataPro = data
    })
  }

  // PageChange(number: any) {
  //   // alert(number)
  //   this.page = number;
  //   this.productService.getAllProductPage(this.page).subscribe((data) => {
  //     this.product = data;
  //   })
  // }

  // }







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
}
