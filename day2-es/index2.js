import {Person} from './index.js'


export default class Employee extends Person{

    constructor(nm,ag,sal,id){
        super(nm,ag)
        this.salary=sal;
        this.id=id

    }

    printEmployee(){

        console.log(this.salary,this.id);
    }

    displayPerson(){

        // super.displayPerson()

        console.log("test");
    }

}

export var y=50



// export {Employee , y }

