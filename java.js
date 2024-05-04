
let humanScore=0;

let computerScore=0;






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


function humanChoice(Hchoice) {

Hchoice=Hchoice.charAt(0).toUpperCase() + Hchoice.slice(1).toLowerCase();
return Hchoice;
}



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


const humanSelection= humanChoice(prompt("Choose 'Rock', 'Paper' or 'Scissors'"));
const computerSelection = ComputerChoice();

console.log("You Chose: "+ humanSelection);
console.log("Your Oponent Chose: " +computerSelection);



playRound(humanSelection, computerSelection);

console.log("Human Score: " + humanScore + " | Oponenet Score: " + computerScore);




