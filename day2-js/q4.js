"use strict"
var studentsdegree =[60, 100, 10, 15, 85];
studentsdegree.sort((a, b) => b - a);
console.log(studentsdegree);



var res = studentsdegree.find(function(studentsdegree){
         return studentsdegree <= 100;
     });

     console.log("find degree less than  or equal 100 = " + " " + res);

     var res = studentsdegree.filter(function(studentsdegree){

            return studentsdegree < 60 ;
        });
        console.log(" degrees below 60 =" + " " +res);
        