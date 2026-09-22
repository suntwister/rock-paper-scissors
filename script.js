 function getComputerChoice(){
    let numberPicked = Math.random();
    if (numberPicked <= 0.33) {
        return "rock";
    } else if (numberPicked <= 0.66){
        return "paper";
    } else{
        return "scissors";
    }    
};

function playRound(computerChoice, humanChoice) {
    if (computerChoice === humanChoice) {
        return "It is a tie";
    } else if (computerChoice === "rock" && humanChoice === "paper") {
        return "You win, paper beats rock";
    } else if (computerChoice === "scissors" && humanChoice === "rock") {
        return "You win, rock beats scissors";
    } else if (computerChoice === "paper" && humanChoice === "scissors") {
        return "You win, scissors beats paper";
    } else {
        return `You lost, ${computerChoice} beats ${humanChoice}`;
    }
};

let humanScore = 0;
let computerScore = 0;
let gameOverStatus = false;

const score = document.querySelector("#score");
const results = document.querySelector("#result");
const gameOver = document.querySelector("#game-over");
const resetButton = document.querySelector("#reset");


const rockButton = document.querySelector("#rock");

const paperButton = document.querySelector("#paper");

const scissorsButton = document.querySelector("#scissors");

function playGameRound(humanChoice){
    if (gameOverStatus){
        return;
    }

    const computerChoice = getComputerChoice();
    const result = playRound(computerChoice, humanChoice);

    results.textContent = result;
    if (result.includes("You win")){
        humanScore += 1;
    } else if (result.includes("You lost")){
        computerScore += 1;
    }
    score.textContent = `Player: ${humanScore} | Computer: ${computerScore}`

    if(humanScore === 5){
        gameOverStatus = true;
        gameOver.textContent = "You win the game" ;
    }else if (computerScore === 5){
        gameOverStatus = true;
        gameOver.textContent = "Computer wins the game"
    }
};

rockButton.addEventListener("click", function(){
    playGameRound("rock");
});

paperButton.addEventListener("click", function(){
    playGameRound("paper");
})

scissorsButton.addEventListener("click", function(){
    playGameRound("scissors");
})

resetButton.addEventListener("click", function(){
    humanScore = 0;
    computerScore = 0;
    gameOverStatus = false;

    score.textContent = "Player: 0 | Computer: 0";
    results.textContent = "";
    gameOver.textContent = "";
});
   