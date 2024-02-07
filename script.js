//RPS Stands for RPS
const RPS = ["Rock", "Paper", "Scissors"]

function game(){
//Set player choice and prints it out
playerChoice = prompt("Enter your move");
console.log("Player move = " + playerChoice) ;

//Pulls random number from array length called rps and stores value in computerNumber
let computerNumber = Math.floor(Math.random() * RPS.length);
//Converts the random number from computerNumber and converts it to a string option from RPS
let computerChoice = RPS[computerNumber];
console.log("Computer move = " + computerChoice);

//This is the main fuction of the game. Checks player choice vs computer choice and determines a output
if(playerChoice == "Rock" && computerChoice == "Paper" || playerChoice == "Paper" && computerChoice == "Scissors" || playerChoice == "Scissors" && computerChoice == "Rock"){
    console.log("You Lose");
    computerCounter ++;
}
else if(playerChoice == "Rock" && computerChoice == "Scissors" || playerChoice == "Paper" && computerChoice == "Rock" || playerChoice == "Scissors" && computerChoice == "Paper"){
    console.log("You win!!");
    playerCounter ++;
}else{
    console.log("Tie!! or invalid input");
}

console.log("Player Wins Vs Computer Wins " + playerCounter + " " + computerCounter);
}
let playerCounter = 0;
let computerCounter = 0;
console.log(game());
console.log(game());
console.log(game());
console.log(game());
console.log(game());
if(playerCounter > computerCounter){
    console.log("You're the WINNER!!");
}else if (playerCounter < computerCounter){
    console.log("You LOSE!!");
}else if (playerCounter == computerCounter){
    console.log("TIE GAME");
}