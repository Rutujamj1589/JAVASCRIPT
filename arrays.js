let array = [23,45,9,67,89,67];
console.log(array);
array[0];

for(let idx = 0; idx < array.length; idx++){
    console.log(array[idx]);
}


// for-of loop:

for(let el of array){
    console.log(el);
}

// practice question:
let marks = [1,2,3];
let sum = 0;
let avg;
for(let idx = 0; idx<marks.length;idx++){
    // console.log(marks[idx]);
    sum = sum + marks[idx];
};
// console.log(sum);
avg= sum / marks.length;
console.log(avg);

let item =[250,645,300,900,50];
let idx = 0;
for(let val of item){
     console.log(`value at index ${idx} = ${val}`);
     let offer = val/10;
     item[idx] = item[idx] - offer;
     console.log(`value after offer ${item[idx]}`);
     idx++;

}

for(let idx=0; idx < item.length; idx++){
    let offer = item[idx] / 10;
    item[idx] = item[idx] - offer;
}
console.log(item);


// array methods:

let veg = [ "potato","tomato","garlic"];
veg.push("choclaate","chips");
console.log(veg);

veg.pop("chips");
console.log(veg);



let number = [1,2,3,4,5,6];
let num2 = [100,200,300,400];
let new1 = number.concat(num2);
console.log(new1);

num2.unshift("@");
console.log(num2);


// practice question:

let companies =["bloomberg","microsoft","uber","google","IBM","netflix"];
console.log(companies);
companies.push("Amazon");
console.log(companies);
companies.splice(2,1,"ola");
console.log(companies);
companies.shift();
console.log(companies);