import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeService } from 'src/app/service/home.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    cate_main: any
    cate_food: any
    cate_beverage: any
    cate_combo: any
    user: any

    catebyid1: any
    catebyid2: any
    constructor(private homeService: HomeService, private router: ActivatedRoute, private route: Router) { }

    ngOnInit(): void {
        this.homeService.getCategoriesMain().subscribe((data) => {
            this.cate_main = data
        })
        this.homeService.getCategoriesFood().subscribe((data) => {
            this.cate_food = data
        })
        this.homeService.getCategoriesBeverage().subscribe((data) => {
            this.cate_beverage = data
        })
        this.homeService.getCategoriesCombo().subscribe((data) => {
            this.cate_combo = data
        })
        this.homeService.getCategoryById1().subscribe((data) => {
            this.catebyid1 = data
            console.log(this.catebyid1)
        })
        this.homeService.getCategoryById2().subscribe((data) => {
            this.catebyid2 = data
        })
        let data: any = localStorage.getItem('account')
        this.user = JSON.parse(data)
    }
    sign_out() {
        localStorage.removeItem('account')
        let data: any = localStorage.getItem('account')
        this.user = JSON.parse(data)
    }
    another_acc() {
        localStorage.removeItem('account')
        let data: any = localStorage.getItem('account')
        this.user = JSON.parse(data)
        this.route.navigate(['/login'])
    }



    check: any = true
    onMenu() {
        if (this.check) {
            document.getElementById('menuFood_1024')?.classList.add('display_block')
            document.getElementById('menuFood_icon')?.classList.add('change-icon')
            this.check = false
        } else {
            document.getElementById('menuFood_1024')?.classList.remove('display_block')
            document.getElementById('menuFood_icon')?.classList.remove('change-icon')
            this.check = true
        }
    }
    onNav() {

        document.getElementById('nav_1024')?.classList.add('onNav')
        document.getElementById('box_contentmenu')?.classList.add('onNav')
    }
    closeNav() {
        document.getElementById('nav_1024')?.classList.remove('onNav')
        document.getElementById('box_contentmenu')?.classList.remove('onNav')

    }
    onAbout() {
        if (this.check) {
            document.getElementById('about_1024')?.classList.add('display_block')
            document.getElementById('about_icon')?.classList.add('change-icon')
            this.check = false
        } else {
            document.getElementById('about_1024')?.classList.remove('display_block')
            document.getElementById('about_icon')?.classList.remove('change-icon')
            this.check = true
        }
    }
}
