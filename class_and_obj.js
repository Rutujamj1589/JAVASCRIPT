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
    }
    // calcTax2 : function() {
    //     console.log("Tax rate is 20%")
    // }
};

const karan = {
    salary : 50000
};
karan.__proto__ = employee; // prototype in js.


// classes in javascript :

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

// constructor

class student1 {
    constructor(name , age ,marks ){
        this.name = name,
        this.age = age,
        this.marks = marks
    }
} ;

let s1 = new student1("rutuja",22,98);
console.log(s1.name);