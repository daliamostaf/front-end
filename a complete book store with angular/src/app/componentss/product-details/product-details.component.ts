import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/Modelss/iproduct';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {


  currentProdID:number = 0;
  prodect: IProduct | undefined=undefined;
  constructor(public prdService:ProductsService,public activatedRoute:ActivatedRoute){

  }
  ngOnInit(): void {
   
    this.currentProdID= (this.activatedRoute.snapshot.paramMap.get('prodTD'))?Number(this.activatedRoute.snapshot.paramMap.get('prodTD')):0;

    this.prodect=this.prdService.getProductByID(this.currentProdID);
    


  }


}
