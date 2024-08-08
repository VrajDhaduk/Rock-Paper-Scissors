let userScore = 0;
let computerScore = 0;

const msg = document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");
const userscorep = document.querySelector("#userScore");
const compscorep = document.querySelector("#ComputerScore");
let elem = document.querySelector(".Comp-choice");
let rock_id = document.getElementById("c_rock");
let paper_id = document.getElementById("c_paper");
let scissors_id = document.getElementById("c_scissors");
var x = document.getElementById("myAudio"); 





function playAudio() { 
    x.play(); 
} 


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

const drawGame = () =>{
    msg.innerText = "Game was Draw Play again!";
    msg.style.backgroundColor = "#081b31";

}

const showWin = (userWin) => {
    if(userWin === true){
        userScore ++;
        userscorep.innerText = userScore;
        msg.innerText = "You Win!"
        msg.style.backgroundColor = "green";
    }else{
        computerScore ++;
        compscorep.innerText = computerScore;
        msg.innerText = "You Lose!"
        msg.style.backgroundColor = "red";

    }
}

const playGame = (userChoice) => {
    const compChoice = genComputerChoice();
    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
            
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
           
        }else{
            userWin = compChoice === "rock" ? false :true;
     
        }
        showWin(userWin);
    }

}

const ComputerChoicecolor = (idx) => {
    if(idx === "rock"){
        rock_id.style.backgroundColor = "#081b31";
        paper_id.style.backgroundColor = "white";
        scissors_id.style.backgroundColor =  "white";

    }
    else if(idx === "paper"){
        paper_id.style.backgroundColor = "#081b31";
        scissors_id.style.backgroundColor =  "white";
        rock_id.style.backgroundColor = "white";
    }
    else{
        scissors_id.style.backgroundColor =  "#081b31";
        rock_id.style.backgroundColor = "white";
        paper_id.style.backgroundColor = "white";
    }
}

const genComputerChoice = () => {
    let option = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    let idx = option[randIdx];
    ComputerChoicecolor(idx);
    return option[randIdx];
}




elem.onmouseenter = () => {
    alert("Sorry,You can don't click this option");
};