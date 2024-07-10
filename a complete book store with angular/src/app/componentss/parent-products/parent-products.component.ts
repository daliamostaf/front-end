import { Component } from '@angular/core';
import { ICategory } from 'src/app/Modelss/icategory';

@Component({
  selector: 'app-parent-products',
  templateUrl: './parent-products.component.html',
  styleUrls: ['./parent-products.component.css']
})
export class ParentProductsComponent {
  catList:ICategory[];
  select:number=0;
  constructor(){
    this.catList=[
        {ID:10,Name:"js"},
        {ID:1,Name:"html"},
        {ID:90,Name:"c#"},
        {ID:55,Name:"Angular"},
        {ID:30,Name:"php"},
      
       ];
  }

}
