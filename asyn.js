// synchronous and asyn 

function hello(){
    console.log("Rutuja")
}

setTimeout(hello, 1000);


// callback 
function sum(a,b){
    console.log(a+b);
}

function calculator(a,b,sumcall){
    sumcall(a,b)
}
calculator(2,3,sum)


//callback hell 

function getdata(dataID){
    console.log("Data",dataID);

}


// promises

let promise = new Promise((resolve, reject) =>{
    console.log("I am a promise");
    resolve();
})


function async(){
    return new Promise((resolve , reject ) => {
        setTimeout(() => {
            console.log("some data1");
            resolve("success");
        }, 4000)
    })
}
console.log("fetching data1....");
let p1 = async();

p1.then( (res) => {
    console.log(res)
})