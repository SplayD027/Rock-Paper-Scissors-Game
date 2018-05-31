var computerSelection = "";
var playerSelection = "";
var win = 0;
var lose = 0;

function computerPlay(){
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
//  let hand = getRandomIntInclusive(1,3);
  switch(getRandomIntInclusive(1,3)){
    case 1:
      return "Rock";
    case 2:
      return "Paper";
    case 3:
      return "Scissors";
  }
}

function play(playerSelection,computerSelection){
  if (playerSelection.toLowerCase() == computerSelection.toLowerCase()){
    alert("Tie! You Both Chose" + computerSelection);
    return;
  }
  switch(playerSelection.toLowerCase()){
    case "paper":
      if (computerSelection == "Rock"){
        console.log("You Won! Paper beats Rock")
        return 1;
      } else {
        console.log("You Lose! Scissors beats Paper")
        return 0;
      }
//        (computerSelection == "Rock") ? (
//          alert("You Won! Paper beats Rock"),
//          return 1;
//        ):(
//          alert("You Lose! Scissors beats Paper"),
//          return 0;
//        );
    case "rock":
    if (computerSelection == "Scissors"){
      console.log("You Won! Rock beats Scissors")
      return 1;
    } else {
      console.log("You Lose! Paper beats Rock")
      return 0;
    }
//        (computerSelection == "Scissors") ? (
//          alert("You Won! Rock beats Scissors"),
//          return 1;
//        ):(
//          alert("You Lose! Paper beats Rock"),
//          return 0;
//        );
    case "scissors":
    if (computerSelection == "Paper"){
      console.log("You Won! Scissors beats Paper")
      return 1;
    } else {
      console.log("You Lose! Rock beats Scissors")
      return 0;
    }

//        (computerSelection == "Paper") ? (
//          alert("You Won! Scissors beats Paper"),
//          return 1;
//        ):(
//          alert("You Lose! Rock beats Scissors"),
//          return 0;
//        );
 }
}

function game(){
  let result = 0;
  for (let i=0;i!=5;i++){
    playerSelection = prompt().toLowerCase();
    console.log(playerSelection);
    if (playerSelection != "paper" || playerSelection != "rock" || playerSelection != "scissors"){
      console.log('Please type in "Paper" "Rock" "Scissors"')
      return "Play Again";
    }
    computerSelection = computerPlay();
    result = play(playerSelection,computerSelection);
    (result == 1) ? win++ : (result == 0) ? lose++ : "";
  }
  if (win > lose){
    console.log("You Won! Score: " + win);
  }else{
    console.log("You Lose! Score: " + win);
  }
}
