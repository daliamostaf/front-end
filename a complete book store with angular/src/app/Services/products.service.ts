import { Injectable } from '@angular/core';
import { IProduct } from '../Modelss/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  prodect:IProduct[]
  constructor() { 
    this.prodect=[   //Q2-services
        {
          ID: 1,
          Name:" js",
          Quantity: 0,
          Price: 100,
          imgUrl: "https://m.media-amazon.com/images/I/81YP3U214EL._SY522_.jpg",
          CategoryID: 10,
        },
    
        {
          ID: 4,
          Name:"html",
          Quantity: 1,
          Price: 200,
          imgUrl: "https://m.media-amazon.com/images/I/411+6ncEBGL._SX342_SY445_.jpg",
          CategoryID: 1,
        },
    
       {
        ID: 10,
        Name:"c#",
        Quantity: 3,
        Price: 540,
        imgUrl: "https://m.media-amazon.com/images/I/411hfJ41UzL._SY445_SX342_.jpg",
        CategoryID: 90,
      },
    
      {
        ID: 14,
        Name:"angular",
        Quantity: 1,
        Price: 345,
        imgUrl: "https://m.media-amazon.com/images/I/41Ii4bQoFLL._SY445_SX342_.jpg",
        CategoryID: 55,
      },
    
      {
        ID: 155,
        Name:"c#",
        Quantity: 3,
        Price: 40,
        imgUrl: "https://m.media-amazon.com/images/I/41CfTgrMfqL._SY445_SX342_.jpg",
        CategoryID: 55,
      },
      {
        ID: 23,
        Name:"php",
        Quantity: 10,
        Price: 487,
        imgUrl: "https://m.media-amazon.com/images/I/61wqqshq-CL._SY522_.jpg",
        CategoryID: 30,
      }
         
       
      ];
  }
  getAllProducts(): IProduct[] {
    return this.prodect;
  }



  getproductbycat(ID:number):IProduct[]{
      if(ID==0){
        return this.getAllProducts();
      }
    
      else{
        return this.prodect.filter(i=>i.CategoryID==ID)
      }
  }



  getProductByID(prodTD:number):IProduct|undefined {

    return this.prodect.find(i=>i.ID==prodTD);

  }

}
