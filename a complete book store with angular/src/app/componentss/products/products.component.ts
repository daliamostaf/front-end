import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ICategory } from 'src/app/Modelss/icategory';
import { IProduct } from 'src/app/Modelss/iproduct';
import { Store } from 'src/app/Modelss/store';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnChanges{
  // productName:string="angular books";
  // productQuantity:number=200;
  // productId:number=90;
  // prises:number=1000;
  // price():number{
  //   return this.prises;
  // }
  //logo

  str1:Store=new Store("Ahmed","https://thumbs.dreamstime.com/b/gradient-fire-phoenix-bird-simple-logo-design-black-bird-simple-logo-design-simple-gradient-fire-phoenix-bird-logo-158339374.jpg",[2,3,4,6,78,8,9,67]);
  // p1:IProduct={
  //   ID:22,
  //   Name:"Ali",
  //   Quantity:4,
  //   Price:777,
  //   CategoryID:8


  // }


  // prodect:IProduct[]
  d1:Date=new Date();
  lo:boolean=true;
  // catList:ICategory[];
  // select:number=0;

  card:string="0000000000000000";
  clintname: string="dalia";
  @Input() selectcatfromparentv:number=0;   //q1
  productsAfterFilter:IProduct[]=[];
  constructor(public Productsservice:ProductsService){
    // this.prodect=[
    //   {
    //     ID: 1,
    //     Name:" js",
    //     Quantity: 0,
    //     Price: 100,
    //     imgUrl: "https://m.media-amazon.com/images/I/81YP3U214EL._SY522_.jpg",
    //     CategoryID: 10,
    //   },
  
    //   {
    //     ID: 4,
    //     Name:"html",
    //     Quantity: 1,
    //     Price: 200,
    //     imgUrl: "https://m.media-amazon.com/images/I/411+6ncEBGL._SX342_SY445_.jpg",
    //     CategoryID: 1,
    //   },
  
    //  {
    //   ID: 10,
    //   Name:"c#",
    //   Quantity: 3,
    //   Price: 540,
    //   imgUrl: "https://m.media-amazon.com/images/I/411hfJ41UzL._SY445_SX342_.jpg",
    //   CategoryID: 90,
    // },
  
    // {
    //   ID: 14,
    //   Name:"angular",
    //   Quantity: 1,
    //   Price: 345,
    //   imgUrl: "https://m.media-amazon.com/images/I/41Ii4bQoFLL._SY445_SX342_.jpg",
    //   CategoryID: 55,
    // },
  
    // {
    //   ID: 155,
    //   Name:"c#",
    //   Quantity: 3,
    //   Price: 40,
    //   imgUrl: "https://m.media-amazon.com/images/I/41CfTgrMfqL._SY445_SX342_.jpg",
    //   CategoryID: 55,
    // },
    // {
    //   ID: 23,
    //   Name:"php",
    //   Quantity: 10,
    //   Price: 487,
    //   imgUrl: "https://m.media-amazon.com/images/I/61wqqshq-CL._SY522_.jpg",
    //   CategoryID: 30,
    // }
       
     
    // ];
   
 
//  this.catList=[
//   {ID:10,Name:"js"},
//   {ID:1,Name:"html"},
//   {ID:90,Name:"c#"},
//   {ID:55,Name:"Angular"},
//   {ID:30,Name:"php"},

//  ];


}
  ngOnChanges(changes: SimpleChanges): void {
    // throw new Error('Method not implemented.');
    // this.productsAfterFilter=this.getproductbycat(this.selectcatfromparentv);  //q1
    this.productsAfterFilter=this.Productsservice.getproductbycat(this.selectcatfromparentv);//q2
  }


fun():boolean{
  return this.lo=!this.lo;
}

decreaseQuantity(i:IProduct){
  if(i.Quantity >0){
    i.Quantity--;
  }
}




// day4-q1
// getproductbycat(ID:number):IProduct[]{
//   if(ID==0){
//     return this.prodect;
//   }

//   else{
//     return this.prodect.filter(i=>i.CategoryID==ID)
//   }
// }
}
