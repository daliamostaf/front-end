  export class Shape{
    constructor(){
        this.type ='Shape' ;
    }

area() {
    return 'none';
  }
perimeter() {
   return 'none';
 }
    
 toString(){
   return `Shapename: ${this.type}\n Area:${this.area()}\n perimeter:${this.perimeter()}`
}        


}



// export default Shape;

// class Rectangle extends Shape{

//     constructor(width, height) {
//               super();
//               this.type = 'Rectangle';
//               this.width = width;
//               this.height = height;

//             }
//   area() {
//      return this.width * this.height;
//        }
                  
//  perimeter() {
//      return 2*(this.width + this.height);
//   }
         
// }

// class Circle extends Shape{

//     constructor( r ){
//         super();
//         this.type='Circle';
//         this.r= r;
//     }
//  area() {
//       return Math.PI * this.r * this.r;
//  }
          
  
//   perimeter() {
//  return 2 * Math.PI * this.r;
//    }

// }

// class Square extends Shape{
//     constructor( l ){
//         super();
//         this.type='Square';
//         this.l= l;
//     }
//   area() {
//      return this.l * this.l;
//  }
          
  
//   perimeter() {
//      return 4 * this.l;
//   }

// }


// const rectangle = new Rectangle(4, 6);
//   const square = new Square(5);
//   const circle = new Circle(3);

//   console.log(rectangle.toString());
//     console.log(square.toString());
//     console.log(circle.toString());







