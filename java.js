function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}



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

ComputerChoice();

console.log(ComputerChoice());
