import Shape from "./day2.js" ;
export  class Circle extends Shape{

        constructor( r ){
            super();
            this.type='Circle';
            this.r= r;
        }
     area() {
          return Math.PI * this.r * this.r;
     }
              
      
      perimeter() {
     return 2 * Math.PI * this.r;
       }
    
    }