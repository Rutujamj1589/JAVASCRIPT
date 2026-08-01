console.log(window);

document.getElementById();
document.getElementsByClassName();
document.getElementsByTagName();
let h2 = document.querySelector("h2");
console.dir(h2.innerText);
h2.innerText = h2.innerText + "from Rutuja jadhav."


let newbtn = document.createElement("button");
newbtn.innerText = "click me!";
newbtn.style.color = "white";
newbtn.style.backgroundColor = "red";
document.querySelector("body").prepend(newbtn);