
// var a =2; //q1
// var b =3;

// console.log(` before swap : a = ${a}, b = ${b}`);
// [a, b] = [b,a]
// console.log(` after swap : a = ${a}, b = ${b}`);

//////////////////////////////////////////////////////////////
//q2


//  var arr=[89,23,8,2,4,100];
//  var arr2=[77,23,4,5,7,5,1];
// var g = arr.concat(arr2);

// var maxarr = Math.max(...g);
//  var minarr = Math.min(...g);
// console.log("Max is =" + maxarr, "Min is =" + minarr);


/////////////////////////////////////////////////////////////
//q3
var fruits = ["apple", "strawberray","orange","mango"];


// var all = fruits.every(function(element) {//////// q1- every 
//     return typeof element ==='string';

// });
// console.log(all);




//////////////////////////////////////////////////////////////////////
// var some = fruits.some(function(element) {//////// q2- some
//     return element.startsWith("a");
// });
// if (some){
//     console.log( `yes ,some element start with "a"`)
// }else{
//     console.log( `No ,some element start with "a"`)
// }

// console.log(some);

/////////////////////////////////////////////////////////// c
var find = fruits.filter(function(x) {
    return x.startsWith('b') || x.startsWith('s');

} );
console.log(find);





/////////////////////////////////////////////////////////////////
var  generate= fruits.map(function(x){
    return " I Like " + x;


});
console.log(generate);

generate.forEach(function(x){
    console.log(x);
})

