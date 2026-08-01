function myFuction(){
    console.log("hello rutja ");
    console.log("we are learning js.");
}
myFuction();

function myFun(x,y){
    console.log(x + y );
}
myFun(5,6);
myFun(6,6);

function myfact(x, y){
    s = x + y;
    console.log("before return");
    return s;
    console.log("after return");
}

let val = myfact(3,4);
console.log("value = ",val);


// Arrow functions:

function sum(a,b){
    return a + b;
}

const arrowfuc = (a , b) => {
    console.log(a + b );
};


// practice question:

function countVowels(str){
    let count=0;
    for(const char of str){
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
            count++;
        }
    }
    console.log(count);
};

// countVowels("rutuja jadhav");


// forEach loop:

let arr = [1,2,3,4,5];
arr.forEach(function printvalue(val){
    console.log(val);

})


// practice question:
let num=[2,4,3,5,6];
num.forEach((num) =>{
    console.log(num*num);
})




// filter:

let arr = [1,2,3,4,5,6,7,8,9,10];
let newArr = arr.filter((val) => {
    return val%2 == 0;
})
console.log(newArr);


// practice question:

let arr = [34,78,90,99,89,99,98,100];

let newArr1 = arr.filter((val) =>{
    return val > 90; 
})
console.log(newArr1);

//practice question:

let n = prompt("enter a number:");
let arr = [];

for(i=1; i<=n; i++){
    arr[i - 1]=i;
}
console.log(arr);

let sum = arr.reduce((res , curr) => {
    return res + curr ;
});

console.log("sum = ", sum);

let fact = arr.reduce((res , curr) => {
    return res * curr ;
});

console.log("factorial = ",fact);