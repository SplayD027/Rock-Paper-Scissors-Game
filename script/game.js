function computerPlay(){
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  switch(getRandomIntInclusive(1,3)){
    case 1:
      return "Rock";
    case 2:
      return "Paper";
    case 3:
      return "Scissors";
  }
}

function game(playerSelection,computerSelection){
  if (playerSelection.toLowerCase() == computerSelection.toLowerCase()){
    document.querySelector(".text p").innerText = "Tie! You Both Chose" + computerSelection;
    return;
  }
  switch(playerSelection.toLowerCase()){
    case "paper":
      if (computerSelection == "Rock"){
        document.querySelector(".text p").innerText = "You Won! Paper beats Rock";
        return 1;
      } else {
        document.querySelector(".text p").innerText = "You Lose! Scissors beats Paper";
        return 0;
      }
    case "rock":
    if (computerSelection == "Scissors"){
      document.querySelector(".text p").innerText = "You Won! Rock beats Scissors";
      return 1;
    } else {
      document.querySelector(".text p").innerText = "You Lose! Paper beats Rock";
      return 0;
    }
    case "scissors":
    if (computerSelection == "Paper"){
      document.querySelector(".text p").innerText = "You Won! Scissors beats Paper";
      return 1;
    } else {
      document.querySelector(".text p").innerText = "You Lose! Rock beats Scissors";
      return 0;
    }
 }
}
/*
function play(a){
  console.log('Best of 5!');
  let result = 0,win = 0,lose = 0,playerSelection = "";
  for (let i=0;i!=5;i++){
    playerSelection = a.target.id;
    console.log(playerSelection);
      if (playerSelection != "paper" && playerSelection != "rock" && playerSelection != "scissors"){
        console.log('Please type in "Paper" "Rock" "Scissors"');
        return;
      }
    result = game(playerSelection,computerPlay());
    (result == 1) ? win++ : (result == 0) ? lose++ : "";
  }
  if (win > lose){
    console.log("You Won! Score: " + win);
  }else{
    console.log("You Lose! Score: " + win);
  }
}
*/
function play(a){
  if (win == 5 || lose == 5){
    document.querySelector(".text h1").innerText = "YOU WON!";
    if (lose == 5) document.querySelector(".text h1").innerText = "YOU LOSE!";
    return;
  }
  if (!(win == 5 || lose == 5)) count++;
  document.querySelector("#round").innerText = "Round " + count;
  let playerSelection = a.target.id;
  console.log(playerSelection);

  let result = game(playerSelection,computerPlay());
  (result == 1) ? win++ : (result == 0) ? lose++ : "";

  document.querySelector("#win").innerText = win;
  document.querySelector("#lose").innerText = lose;
}

let buttons = Array.from(document.querySelectorAll('.buttons button'));
buttons.forEach(button => button.addEventListener('click',play));

let text = document.querySelector(".text h1");
let smallText = document.querySelector(".text p");

let count = 0;
let win = 0;
let lose = 0;