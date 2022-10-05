import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/service/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blog:any;
  pages:any = 1; 

  constructor(private blogService:BlogService) { }

  ngOnInit(): void {
    this.blogService.getAllPage(this.pages).subscribe((data)=>{
      this.pages = data;
    })
  }

  Pages(number:any){
    this.pages = number
    this.blogService.getAllPage(number).subscribe((data)=>{
      this.pages = data;
      // console.log(data);
    })

    // let changeBg = document.getElementsByClassName('number_one')[number-1]
    // changeBg.classList.add('addClass')

    // document.getElementsByClassName('number_one')[number-1-1].classList.remove('addClass')
    // document.getElementsByClassName('number_one')[number-1-1].classList.add('removeClas')
  }

}
