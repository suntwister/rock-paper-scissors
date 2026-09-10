// console.log("Hello World");
function getComputerChoice(){
    let numberPicked = Math.random();
    if (numberPicked <= 0.33) {
        return "rock";
    } else if (numberPicked <= 0.66){
        return "paper";
    } else{
        return "scissors";
    }    
}
// console.log(getComputerChoice());

function getHumanChoice(){
    let choice = prompt("Enter one of the three choices of the game (Rock, Paper or Scissors): ").toLowerCase();
    while (choice !== "rock" && choice !== "paper" && choice !== "scissors"){
        console.log("Invalid choice. Please try again.");
        choice = prompt("Enter one of the three choices of the game (Rock, Paper or Scissors): ").toLowerCase();

    }
    return choice
}
// console.log(getHumanChoice())

function playRound(computerChoice, humanChoice){
    if (computerChoice === humanChoice){
        return "It is a tie";
    } else if (computerChoice === "rock" && humanChoice === "paper"){
        return "You win, paper beats rock";
    } else if (computerChoice === "scissors" && humanChoice === "rock"){
        return "You win, rock beats scissors";
    } else if (computerChoice === "paper" && humanChoice === "scissors"){
        return "You win, scissors beats paper";
    } else {
        return `You lost, ${computerChoice} beats ${humanChoice}`;
    }
    
}

function playGame(){
    console.log("The game is starting!");

    let humanScore = 0;
    let computerScore = 0;

    for (let i = 1; i <= 5; i++){
        console.log(`This is round ${i}`);

        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();

        let result = playRound(computerChoice, humanChoice);
        console.log(result)

        if (result.includes("You win")){
            humanScore += 1;
        } else if(result.includes("You lost")){
            computerScore += 1;
        }

        console.log("Human: ", humanChoice);
        console.log("Computer: ", computerChoice);
        
        
    }
        console.log(`Result: human: ${humanScore} computer: ${computerScore}`)

        if (humanScore > computerScore){
            console.log("You win the game");
        } else if (humanScore < computerScore){
            console.log("Computer wins the game")
        } else {
            console.log("It is a tie")
        }
}

playGame();
