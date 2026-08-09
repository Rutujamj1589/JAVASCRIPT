let boxex = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-button");
let newbtngame = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true;
const winpattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetgame = () => {
    turnO = true;
    enableboxex();
    msgcontainer.classList.add("hide")

}

boxex.forEach((box) => {
    box.addEventListener("click", () => {
        // console.log("button was clicked!");
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkwinner();
    });
});

const disableboxex = () => {
    for(let box of boxex){
        box.disabled = true;
    }
}

const enableboxex = () => {
    for(let box of boxex){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (Winner) =>{
    msg.innerText = `Congratulations! Winner is ${Winner}`;
    msgcontainer.classList.remove("hide");
    disableboxex();

}

const checkwinner = () => {
    for(pattern of winpattern){
        // console.log(pattern[0],pattern[1], pattern[2]);
        // console.log(boxex[pattern[0]].innerText,
        //     boxex[pattern[1]].innerText,
        //     boxex[pattern[2]].innerText,
        // );
        let pos1val = boxex[pattern[0]].innerText;
        let pos2val = boxex[pattern[1]].innerText;
        let pos3val = boxex[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("winner",pos1val);
                showWinner(pos1val);
            }
        }
    };
};

newbtngame.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);
