console.log("welcome to my rock, paper, scissor game")

//var userChoice = playerSelection();
//var compChoice = getComputerChoice();
/*
for (var i=1; i <=5; i++) {
	var userChoice = playerSelection();
console.log("you chose", userChoice);

console.log("The computer chose", compChoice);

if (userChoice != compChoice) {
 console.log("Loser")
}

else {
	console.log("Winner!");
}
}*/
//console.log(playRound(userChoice, compChoice));
console.log(game());

function  getComputerChoice() {
var	choice = ["rock", "paper", "scissor"];
	var random = Math.floor(Math.random()*choice.length);
	if (random == 0)
		random = "rock";
	else if (random == 1)
		random = "paper";
	else
		random = "scissor";
	return random;
}


function playerChoice() {
 var choice = prompt("Choose: Rock, Paper, Scissor");

	return choice.toLowerCase();
}

function playRound() {
	var result;
	var playerSelection = playerChoice();
	var computerSelection = getComputerChoice();

	if (playerSelection == computerSelection) {
		console.log("Tie, No Winner");
		return null;
	}
	else if ((playerSelection == "rock") && (computerSelection == "scissor")) {
		console.log("You  Win, Rock beats scissors");
		return true;
	}
	else if ((computerSelection == "paper")&&(playerSelection == "rock")){ 
		console.log("You lose, paper beats rock");
		return false;
	}
	else if ((playerSelection == "paper") && (computerSelection == "scissor")){
		console.log("You lose, scissor beats paper");
		return false;
	}
	else if ((playerSelection == "paper") && (computerSelection == "rock")){
		console.log("You win! Paper beats rock");
		return true;
		}
	else if ((playerSelection == "scissor")&& (computerSelection == "rock")){
		console.log("You lose, rock beats scissor");
		return false;

	}
	else{
		console.log( "You win, scissor beats paper");
		return true;
		}

	//console.log("you chose", playerSelection);
	//console.log("comp chose", computerSelection);

}
//playRound();

function game() {
	var count = 0;	
	var round;
	var compWins = 0;
	var playerWins = 0;
	for(var i = 1; i <= 5; i++) {
		round = playRound();
		if (round == true){
			playerWins++;
		}
		else if (round == false) {
			compWins++;
		}
	}
	if (playerWins == compWins) {
		console.log("Out of 5 games, it was a Tie, Nobody Wins");
	}
	else if (playerWins > compWins) {
		console.log("YOU BEAT THE COMPUTER!");
	}
	else {
		console.log("computer wins");
	}
//	console.log("You won ", playerWins, " out of 5 rounds");
//	console.log("You won ", compWins, " out of 5 rounds");
}
//game();
