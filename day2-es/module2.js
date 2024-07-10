import { Square } from "./square.js" ;
import {Circle } from "./circle.js" ;
import { Rectangle } from "./rectangle.js" ;

var rec1=new Rectangle(9,3);
  rec1.toString();
  console.log(rec1.area());
  console.log(rec1.perimeter());


var cir1 = new Circle(4);
 cir1.toString();
 console.log(cir1.area()) ; 
 console.log(cir1.perimeter()) ;

var sq1 = new Square(3) ;
console.log(sq1.area()) ; 
console.log(sq1.perimeter()) ;