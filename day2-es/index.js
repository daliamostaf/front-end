//sync 


// function second(){
//     //async
//     setTimeout(function(){
//         console.log("second");

//     },1000)
// }

// function first(){
//     console.log("first");
//     second()
//     console.log("third");
// }

// first()


// var x;

// setTimeout(function () {
//     x = 10
//     console.log(x);
// }, 2000)


// var x;

// document.getElementById("mybtn").addEventListener("click", function(){

//     x=20
//     console.log(x);


// })



//callback hell
// setTimeout(function () {
//     var ids = [1, 2, 3, 4]
//     console.log(ids);

//     setTimeout(function () {
//         var user = {
//             id: ids[1],
//             name: "ali",
//             age: 15
//         }

//         console.log(user);

//         setTimeout(function () {
//             var address = {
//                 name: user.name,
//                 city: "cairo"
//             }
//             console.log(address);

//         }, 1000)

//     }, 500)

// }, 2000)




//promise 

// var getIds = new Promise(function (resolve, reject) {

//     setTimeout(function () {
//         var ids = [1, 2, 3, 4]
//         if (ids) {
//             resolve(ids)
//         } else {
//             reject("error in get ids")
//         }
//     }, 2000)

// })







//handle promises 
// getIds.then(function (ids) {
//     console.log(ids);
//     return getUser(ids[1])
// }).then((user) => {
//     console.log(user);
//     return getAddress(user.name)
// }).then((address) => {

//     console.log(address);
// }).catch(function (err) {

//     console.log(err);
// })




// function getUser(id) {

//     return new Promise(function (res, rej) {

//         setTimeout(function () {
//             var user = {
//                 id: id,
//                 name: "ali",
//                 age: 15
//             }

//             if (user) {
//                 res(user)
//             } else {
//                 rej("error in get user")
//             }

//         }, 500)

//     })


// }



// function getAddress(userName) {

//     return new Promise(function (res, rej) {

//         setTimeout(function () {
//             var address = {
//                 name: userName,
//                 city: "cairo"
//             }
//             if (address) {
//                 res(address)
//             } else {
//                 rej("error in get address")
//             }
//         }, 1000)


//     })

// }





// getUser(5).then((user)=>{
// console.log(user);
// }).catch((err)=>{

// console.log(err);

// })



//async await

// async function handlePromises(){

//     try{
//         var ids = await getIds
//         console.log(ids);

//         var user = await getUser(ids[1])
//         console.log(user);

//         var address = await getAddress(user.name)

//         console.log(address);

//     }catch(e){
//         console.log(e);
//     }



// }

// handlePromises()


// console.log("hello");



//ES6   >>>  2015         >> fetch

// async function getData() {

//     try {
//         var res = await fetch('https://fakestoreapi.com/products')
//         // console.log(res);

//         var products = await res.json()
//         //    console.log(products);


//         for (var prd of products) {
//             // console.log(prd.title);

//            var ele= document.createElement("h1")
//            ele.textContent=prd.title

//            document.body.appendChild(ele)


//         }


//     } catch (err) {
//         console.log(err);
//     }



// }

// getData()



///////////////////////////////////////////////////////////////////////////////////////////////

//oop

// class Student {
//     static counter = 0


//     constructor(nm, ag, grade) {
//         this.name = nm;
//         this.age = ag;
//         this.grades = grade;
//         Student.counter++

//     }

//     printStd() {
//         console.log(this.name, this.grades);
//     }

//    static printCounter(){ //to print nums
//          console.log(Student.counter);
//     }

// }


// var std1 = new Student("ali", 15, 80);
// std1.printStd()
// // console.log(std1);

// var std2 = new Student("hager", 20, 100);

// Student.printCounter()








export class Person{

    constructor(nm,ag){
        this.name=nm;
        this.age=ag
    }

    displayPerson(){
     console.log(this.name,this.age);

    }

}















