//RPS Stands for RPS
const RPS = ["Rock", "Paper", "Scissors"];
let playerCounter = 0;
let computerCounter = 0;

//Pulls objects from the dom
let playerResult = document.querySelector('#playResult');
let computerResult = document.querySelector('#computerResult');
let playerScore = document.querySelector('#playersScore');
let computerScore = document.querySelector('#computerScore');
let endGame = document.querySelector('#end');
let theGame = document.querySelector('body');


function game(playerChoice){

//Set player choice and shows it on screen and in console.
playerResult.textContent = playerChoice;
console.log("Player move = " + playerChoice) ;

//Pulls random number from array length called rps and stores value in computerNumber
let computerNumber = Math.floor(Math.random() * RPS.length);
//Converts the random number from computerNumber and converts it to a string option from RPS
let computerChoice = RPS[computerNumber];

//Displays computers choice both on screen and in console.
computerResult.textContent = computerChoice;
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

//Shows score on screen and console.
playerScore.textContent = playerCounter;
computerScore.textContent = computerCounter;
console.log("Player Wins Vs Computer Wins " + playerCounter + " " + computerCounter);


const endItAll = function(winner){
    let endDivGame = document.createElement('div');
    endDivGame.setAttribute('id', 'endDiv');
    
    let endButton = document.createElement('button');
    endButton.textContent = "Restart";
    endButton.setAttribute('id', 'endButton');
    endButton.addEventListener('click', function(){
        window.location.reload()
    })
    
    let headerText = document.createElement('h1');
    headerText.textContent = winner;
    theGame.appendChild(endDivGame)
    endDivGame.appendChild(headerText);
    endDivGame.appendChild(endButton);

}
//End Game. Will show winner and add restart button. 
if(playerCounter == 5){
    
    console.log("You're the WINNER!!");
    endGame.remove();
    endItAll("You're a Winner!!");


}else if (computerCounter == 5){
    console.log("You LOSE!!");
    endGame.remove();
    endItAll("You're a loser!!")
}
}




//adds functions to buttons
let rockChoice = document.querySelector('#rock');
let paperChoice = document.querySelector('#paper');
let scissorChoice = document.querySelector('#scissors');

rockChoice.addEventListener('click', function(){
    game(RPS[0])
});

paperChoice.addEventListener('click', function() {
     game(RPS[1])
});

scissorChoice.addEventListener('click', function(){
    game(RPS[2])
});



