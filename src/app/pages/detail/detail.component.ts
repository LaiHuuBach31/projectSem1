import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  product:any;

  constructor(private proService:ProductService, private router:ActivatedRoute) { }

  ngOnInit(): void {
    let _id = this.router.snapshot.params['id']
    this.proService.getDeatilProduct(_id).subscribe((data)=>{
      this.product = data;
    })
  }

}
