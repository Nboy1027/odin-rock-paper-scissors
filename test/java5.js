
// const rock = document.querySelector("#rock");

// const paper = document.querySelector("#paper");

// const scissors = document.querySelector("#scissors");





// rock.addEventListener("click", e => {

//     choice = rock.id;
//     console.log(choice);

// })




// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");
var choice;

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    choice=button.id;
    console.log(choice);
  });
});