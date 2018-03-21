function playRound(playerSelection, computerSelection) {
	playerSelection = playerSelection.toLowerCase();
	var output;
	if (playerSelection == computerSelection) {
		// declaration = "It's a tie! You both chose " + playerSelection;
		output = 0;
	} else if (
		(playerSelection == "rock" && computerSelection == "scissors") ||
		(playerSelection == "paper" && computerSelection == "rock") ||
		(playerSelection == "scissors" && computerSelection == "paper")) {
		// declaration = "You Win! " + playerSelection + " beats " + computerSelection;
		output = 1;
	} else {
		// declaration = "You Lose! " + computerSelection + " beats " + playerSelection;
		output = 2;
	}
	return output;

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

function game() {
	// let final = 5;
	let playerSelection;
	let computerSelection;
	let player = 0;
	let computer = 0;

	for (let i = 0; i <= 4; i++) {
		playerSelection = prompt();
		computerSelection = computerPlay();
		let result = playRound(playerSelection, computerSelection);
		if (result == 1) {
			console.log("You Win! " + playerSelection + " beats " + computerSelection);
			player++;
		} else if (result == 2) {
			console.log("You Lose! " + computerSelection + " beats " + playerSelection);
			computer++;
		} else {
			console.log("It's a tie! You both chose " + playerSelection);
		}
	}

	let declaration;
	if (player == computer) {
		declaration = "It's a tie";
	} else if (player > computer) {
		declaration = "You Win!";
	} else {
		declaration = "You Lose!";
	}
	declaration += " " + player + " vs " + computer;
	return declaration;
}

console.log(game());