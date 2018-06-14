let count = 0;
let win = 0;
let lose = 0;

let buttons = Array.from(document.querySelectorAll('.buttons button'));
buttons.forEach(button => button.addEventListener('click',play));
buttons.forEach(button => button.addEventListener('click',function(){
    document.querySelector('#reset').style.display = "block";
}));
let resetButton = document.querySelector('#reset');
resetButton.addEventListener('click',reset);

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

function showResult(player,ai,result){
    console.log(player == "");
    if(!(player == "")){
       player = player[0].toUpperCase() + player.slice(1);
    }
//    document.querySelector("#ply").innerText = player;
    document.querySelector("#whoWon").innerText = result;
//    document.querySelector("#ai").innerText = ai;
    return;
}

function game(playerSelection,computerSelection){
  if (playerSelection.toLowerCase() == computerSelection.toLowerCase()){
    showResult(playerSelection,computerSelection,"Draw");
    return;
  }
    showResult("","","");
  switch(playerSelection.toLowerCase()){
    case "paper":
      if (computerSelection == "Rock"){
//        showResult(playerSelection,computerSelection,"You Won!");
        return 1;
      } else {
//        showResult(playerSelection,computerSelection,"You Lose!");
        return 0;
      }
    case "rock":
    if (computerSelection == "Scissors"){
//      showResult(playerSelection,computerSelection,"You Won!");
      return 1;
    } else {
//      showResult(playerSelection,computerSelection,"You Lose!");
      return 0;
    }
    case "scissors":
    if (computerSelection == "Paper"){
//      showResult(playerSelection,computerSelection,"You Won!");
      return 1;
    } else {
//      showResult(playerSelection,computerSelection,"You Lose!");
      return 0;
    }
 }
}

function play(a){
  if (!(win == 5 || lose == 5)){
  count++;
  document.querySelector("#round").innerText = "Round " + count;
  let result = game(a.target.id,computerPlay());
  (result == 1) ? win++ : (result == 0) ? lose++ : "";
  document.querySelector("#win").innerText = win;
  document.querySelector("#lose").innerText = lose;
  }
  if (win == 5 || lose == 5){
    document.querySelector("#title").innerText = "YOU WON!";
    if (lose == 5) document.querySelector("#title").innerText = "YOU LOSE!";
    document.querySelector("#title").innerHTML 
    return;
  }
}

function reset(){
    count = 0,win = 0,lose = 0;
    document.querySelector("#round").innerText = ""
    document.querySelector("#win").innerText = win;
    document.querySelector("#lose").innerText = lose;
    showResult("","","");
    document.querySelector("#title").innerText = "Rock Paper Scissors";
    document.getElementById('reset').style.display = "none";
}