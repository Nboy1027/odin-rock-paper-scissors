const container = document.querySelector("#container");


// creating a div to display human score

const humanScoreDisplay = document.createElement("div");

// adding a class to the div and asigning style top it

humanScoreDisplay.classList.add("humanScoreDisplay");
humanScoreDisplay.setAttribute("style", "border: solid black; background: pink; display:flex; width:300px; margin-top:50px;")
// linking the div to the container as a child of "container"
container.appendChild(humanScoreDisplay);

// creating the header of the div

    const humanScoreheader = document.createElement("h1")
    humanScoreheader.textContent = "Human Score:";
    const humanPoints = document.createElement("h1")
    
    //  this should be added instead of console.log in the human 
    // display score.
    
    humanScoreDisplay.appendChild(humanScoreheader);
    humanScoreDisplay.appendChild(humanPoints);

    // same structure but fot computer score

const computerScoreDisplay = document.createElement("div");
computerScoreDisplay.classList.add("computerScoreDisplay");
computerScoreDisplay.setAttribute("style", "border: solid black; background: pink; display:flex; width:300px")
container.appendChild(computerScoreDisplay);
    
    
        const computerScoreheader = document.createElement("h1")
        computerScoreheader.textContent = "Computer Score:"

        const computerPoints = document.createElement("h1")
        


    computerScoreDisplay.appendChild(computerScoreheader);
    computerScoreDisplay.appendChild(computerPoints);



let humanScore=0;

let computerScore=0;

let round =1;

const buttons = document.querySelectorAll("button");

var humanChoice;



// Generates a Random number for the rock paper scissors

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}


// Takes a random  number and assigns a choice

function computerChoice() {

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




// round functions: Plays a single round while adding score.


function playRound(human, computer){


    if (human== computer) {
    
    console.log("DRAW");
    
    }
    
    else if (human==="Rock" && computer==="Scissors") {
        console.log("You win!")
    
        humanScore++;
    }
    else if (human==="Paper" && computer==="Rock"){
    
        console.log("You win!")
    
        humanScore++;
    
    
    }
    
    else if (human==="Scissors" && computer==="Paper"){
    
        console.log("You win!")
    
        humanScore++;
    
    
    }
    
    else {
        console.log("You lost!")
    
        computerScore ++;
    }
    }


    // Defining for each button to assign a human choice when clicked and initiate a round, and intiates a round!

    



      function playGame(){

            // we use the .forEach method to iterate through each button
        
            buttons.forEach((button) => {

                // and for each one we add a 'click' listener
              
                button.addEventListener("click", e => {
            
                    if (round<=5) {
                // Stating the round played

                console.log("Round: " + round);

                // Giving human choice a value, in this case the same as the button id

                humanChoice=button.id;

                // Printing the choices

                console.log("You Chose: "+ humanChoice);

                let computerChoiceValue = computerChoice();
                console.log("Your Opponent Chose: " + computerChoiceValue);

                // Initiates a round with values

                playRound(humanChoice, computerChoiceValue)


                // after round prints score

                humanPoints.textContent = " " + humanScore;
                computerPoints.textContent= " " + computerScore;
                console.log("Human Score: " + humanScore + " | Oponenet Score: " + computerScore);
                    
                // counts what round are we in (stops at 5)

                round = humanScore + computerScore + 1;

                if (round > 5) {
                    // after the rounds, state a winner
                    if (humanScore > computerScore) {
                        console.log("Congrats, You won!");
                    } else {
                        console.log("You Lost The Game!");
                    }
                    }
                    }
                });
                  
                
              });

             }
        


         playGame();
      