import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    constructor(private homeService: HomeService, private router: ActivatedRoute) { }

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
