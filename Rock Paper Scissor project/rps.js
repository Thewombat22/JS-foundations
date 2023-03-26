// Simple rock paper scissor game using JavaScript.


const computerOptions = ["rock", "paper", "scissors"]; // array for computer choice and for user input validation


function getComputerChoice(){
    const computerPick = Math.floor(Math.random() * computerOptions.length); // Generating computer pick from the computerOptions array
    return computerOptions[computerPick];
};

function getPlayerChoice(){
    var playerPick = prompt("What your choice?").toLowerCase(); 
    
    while (!(computerOptions.includes(playerPick))){
        console.log("Invaild entry please try again.");
        playerPick = prompt("What your choice?").toLowerCase(); // Input validation for user pick
    }
    return playerPick;
}

function playRound(){
    const computer = getComputerChoice();
    const player =  getPlayerChoice();

    console.log("Lets play Rock, Paper, Scissors."); 
    console.log("Ready 3 2 1 .... Shoot!"); 
   
   

    if (computer == player){
        console.log("Draw!");
    }
    else if (computer == 'rock' & player == 'scissors'){
        console.log(`You lose ${computer} beats ${player}!`);
        return false;
    }
    else if (computer == 'paper'& player == 'rock'){
        console.log(`You lose ${computer} beats ${player}!`);
        return false;
    }
    else if (computer == 'scissors' & player == 'paper'){
        console.log(`You lose ${computer} beats ${player}!`);
        return false;
    }
    else{
        console.log(`You win ${player} beats ${computer}!`);
        return true;
    }

};

function game(){
    var roundCount = 0;
    var computerWins = 0;
    var playerWins= 0;
    

    while(roundCount < 5){
        var winner = (playRound());
        roundCount ++;
        

        if(winner == true){
            playerWins ++;
        }
        else if(winner == false){
            computerWins ++;
        }
    }
    
    if(playerWins > computerWins){
        console.log(`Player wins with a total of ${playerWins}`);
    }
    else{
        console.log(`Computer wins with a total of ${computerWins}`);
    }
       

    
}

game();
