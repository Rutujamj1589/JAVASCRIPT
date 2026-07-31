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