// console.log("Hello, World!");

function playRound(playerSelection, computerSelection) {
	playerSelection = playerSelection.toLowerCase();
	var declaration;
	if (playerSelection == computerSelection) {
		declaration = "It's a tie! You both chose " + playerSelection;
	} else if (
		(playerSelection == "rock" && computerSelection == "scissors") ||
		(playerSelection == "paper" && computerSelection == "rock") ||
		(playerSelection == "scissors" && computerSelection == "paper")) {
		declaration = "You Win! " + playerSelection + " beats " + computerSelection;
	} else {
		declaration = "You Lose! " + computerSelection + " beats " + playerSelection;
	}
	return declaration;

}

function computerPlay() {
	let random = Math.floor(Math.random() * 3);

	if (random == 0) { 
		return "rock";
	} else if (random == 1) {
		return "paper";
	} else if (random == 2) {
		return "scissors";
	}
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));