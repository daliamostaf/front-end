"use strict"
var students = [
    {name:"Dalia" ,degree: 120},
    {name:"Ali" ,degree: 110},
    {name:"Ahmed" ,degree: 100},
    {name:"Fatma" ,degree: 111},
    {name:"Nora" ,degree: 90},
    {name:"mona" ,degree: 89},
    {name:"roaa" ,degree: 99}


];

var res = { name: "mohamed", degree: 133 };
students.push(res);
console.log(students);

students.pop();
