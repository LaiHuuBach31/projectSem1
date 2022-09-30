import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  check:any = true
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
