import Shape from "./day2.js" ;
export class Square extends Shape{
        constructor( l ){
            super();
            this.type='Square';
            this.l= l;
        }
      area() {
         return this.l * this.l;
     }
              
      
      perimeter() {
         return 4 * this.l;
      }
    
    }