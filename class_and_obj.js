//object creation
const student = {
    fullName : "rutuja mahadev jadhav",
    marks : 94.4,
    printMarks : () => {
        console.log("Hello");
    }
}; 

const employee = {
    calcTax1 () {
        console.log("Tax rate is 10% ");
    },
    calcTax2 : function() {
        console.log("Tax rate is 20%")
    }
};

const karan = {
    salary : 50000
};
karan.__proto__ = employee; // prototype in js.


//classes in javascript :

class bmwcar{
    constructor(){
        console.log("Creating an object");
    }
    start(){
        console.log("start");
    }

    stop(){
        console.log("stop");
    }

    setbrand(brand){
        this.brandName = brand;
    }

}

let obj = new bmwcar();
obj.setbrand("fortuner");

//constructor

class student1 {
    constructor(name , age ,marks ){
        this.name = name,
        this.age = age,
        this.marks = marks
    }
} ;

let s1 = new student1("rutuja",22,98);
console.log(s1.name);



//inheritance 

class parent {
    hello(){
        console.log("helllo");
    }
}

class child extends parent{}

let obj = new child();



class person {
    eat(){
        console.log("Eat");

    }

    sleep(){
        console.log("sleep");
    }
}

class Engineer extends person{
    work(){
        console.log("solve problem, build something");
    }
}

let rutuja = new Engineer();

class doctor extends person{
    work(){
        console.log("See pateints");
    }
}

let obj1 = new doctor();



//practice problem:

let data = "secret information";
class user {
    constructor(name,email){
        this.name =name,
        this.email = email
    }

    viewData() {
        console.log("data = ",data);
    }
}

let stu1 = new user("Rutuja","rutu@gmail.com");
let stu2 = new user("Shrijaa","shri@gmail.com");