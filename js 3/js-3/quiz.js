
//prompt("Enter first num :");
var n1 = prompt("Enter first num :");

var op = prompt("Enter opertor :");

var n2 = prompt("Enter second num :");
n1 = parseInt(n1);
n2 = parseInt(n2);

switch(op){
    case "+":
        var sum = n1 + n2;
        alert(sum);
        break;
    case "*":
         var mult = n1 * n2;
         alert(mult);
         break;
    case "-":
          var sub = n1 - n2;
          alert(sub);
          break;
     default:
        var sum = n1/n2;     

}
