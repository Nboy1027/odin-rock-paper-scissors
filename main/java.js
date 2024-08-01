
let humanScore=0;

let computerScore=0;

let round =1;






function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}


// Takes a random  number and assigns a choice

function ComputerChoice() {

    let choice;
   
   
    switch (getRandomInt(3)){

    case 0:
       choice= "Rock";
        break;

     case 1:
       choice= "Paper";
        break;
    
    
    case 2:
       choice= "Scissors";
        break;


   }
   
   return choice;


}

// Takes data from a prompt and cleans the text 

function humanChoice(Hchoice) {

Hchoice=Hchoice.charAt(0).toUpperCase() + Hchoice.slice(1).toLowerCase();
return Hchoice;
}

// Plays a single round while adding score.


function playRound(humanChoice, ComputerChoice){


if (humanChoice===ComputerChoice) {

console.log("DRAW");

}

else if (humanChoice==="Rock" && ComputerChoice==="Scissors") {
    console.log("You win!")

    humanScore++;
}
else if (humanChoice==="Paper" && ComputerChoice==="Rock"){

    console.log("You win!")

    humanScore++;


}

else if (humanChoice==="Scissors" && ComputerChoice==="Paper"){

    console.log("You win!")

    humanScore++;


}

else {
    console.log("You lost!")

    computerScore ++;
}
}

// Play an entire game for 5 rounds


function playGame(){
while (round<=5){

    

    console.log("Round: " + round);

    const humanSelection= humanChoice(prompt("Choose 'Rock', 'Paper' or 'Scissors'"));
    const computerSelection = ComputerChoice();
    
    console.log("You Chose: "+ humanSelection);
    console.log("Your Oponent Chose: " +computerSelection);
    
    
    
    playRound(humanSelection, computerSelection);
    
    console.log("Human Score: " + humanScore + " | Oponenet Score: " + computerScore);

    round = humanScore + computerScore + 1;
    
}
if (humanScore>computerScore){

    console.log("Congrats You won!")

}

    else {
        console.log("You Lost The Game!")
    }




 }

playGame();

    


