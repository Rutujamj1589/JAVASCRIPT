let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");


const gencompchoice = () => {
    const options = ["rock","paper","scissors"];
    let randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawgame = () => {
    msg.innerText = "Game was draw!!. Play agian.";
     msg.style.backgroundColor = "#081b31";
}

const showWinner = (userwin , userchoice , compchoice) => {
    if(userwin){
        userscore++
        userscorepara.innerText = userscore;
        msg.innerText = `You Win !! Your ${userchoice} beats ${compchoice}.`
        msg.style.backgroundColor = "green";
    }
    else{
        compscore++
        compscorepara.innerText =compscore;
        msg.innerText = `You lose. ${compchoice} beats Your ${userchoice}.`
        msg.style.backgroundColor = "red";
    }

}


const playgame = (userchoice ) =>{
    //console.log("user choice = ", userchoice );
    const compchoice = gencompchoice();
    //console.log("computer choice = ", compchoice );

    if (userchoice === compchoice){
        drawgame();
    }
    else {
        let userwin = true;
        if(userchoice === "rock"){
            userwin = compchoice === "paper" ? false : true 
        }
        else if (userchoice === "paper"){
            userwin = compchoice === "scissors" ? false : true;
        }
        else{
           userwin = compchoice === "rock" ? false: true ;
        }

        showWinner(userwin , userchoice , compchoice);

        

    }
}


choices.forEach((choice) => {
    // console.log(choice)
    const userchoice = choice.getAttribute("id");
    choice.addEventListener("click",()=>{
        //console.log("choice was clicked!" , userchoice);
        playgame(userchoice);

    })
});