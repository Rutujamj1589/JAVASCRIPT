let btn1 = document.querySelector("#btn1")
btn1.onclick = () =>{
    console.log("button first was clicked ")
    let a=25;
    a++;
    console.log(a);
}

btn1.addEventListener("click", () => {
    console.log("button@ was clicked!")
});

let modebtn = document.querySelector("#mode");
let currmode = "light";
modebtn.addEventListener("click",()=>{
    
    if(currmode==="light"){
        currmode="dark";
        document.querySelector("body").style.backgroundColor = "black";
        console.log(currmode);
    }
    else{
        currmode="light";
        document.querySelector("body").style.backgroundColor = "white";
        console.log(currmode);
    }
})



