import Shape from "./day2.js" ;
export class Rectangle extends Shape{

        constructor(width, height) {
                  super();
                  this.type = 'Rectangle';
                  this.width = width;
                  this.height = height;
    
                }
      area() {
         return this.width * this.height;
           }
                      
     perimeter() {
         return 2*(this.width + this.height);
      }
             
    }