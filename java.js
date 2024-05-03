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


function humanChoice() {

let Hchoice = prompt("Choose 'Rock', 'Paper' or 'Scissors'")

Hchoice=Hchoice.charAt(0).toUpperCase() + Hchoice.slice(1).toLowerCase();

return Hchoice;
}


console.log(humanChoice());
