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