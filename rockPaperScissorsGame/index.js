
const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resolutDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice){
    const computeChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    // console.log(playerChoice, "   ", computeChoice);
    // console.log(playerChoice.length, "   ", computeChoice.length);
    // console.log(typeof(playerChoice), "   ", typeof(computeChoice));

    if(playerChoice === computeChoice){
        result = "IT'S A TIE!";  
        resolutDisplay.classList.remove("greenText", "redText");
        resolutDisplay.textContent = result;      
    }
    else{
        switch(playerChoice){
            case "rock":
                result = (computeChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "paper":
                result = (computeChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "scissors":
                result = (computeChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
                break;
        }

    // console.log("result: ", result);
    resolutDisplay.textContent = result;
    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computeChoice}`;
    

    resolutDisplay.classList.remove("greenText", "redText");

    switch(result){
        case "YOU WIN!":
            resolutDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "YOU LOSE!":
            resolutDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
        case "IT'S A TIE!":
            break;
    }

    }

}