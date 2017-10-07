var wins = 0;
var losses = 0;
var guessLeft = 9;
//letter guessed so far *this will populate what the user has already picked
var guessesSoFar = [];
//options the game has to choose (and user!!)
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

/////////////////////////////////////////////////////////////////////
/////Pseudocode Steps!!!////////////////////////////////////////////
///////////////////////////////////////////////////////////////////

// 1. game select a random letter

// 2. take user guess of letter and assign to do something (function)

// 3. add player's selected guess to the "guesses so far"

// 4. do if loop where something will happen if player wins, 

// 5. if player loses, 

// 6. or if player needs to "keeps playing"

// 7. somehow add all these results and such to the html
/////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////

//game selects a random letter from the letters array
var gameChoice = letters[Math.floor(Math.random()*letter.length)];
	console.log(gameChoice);

//user guess is a "string" which is just a letter. each letter is assinged a keycode.
var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	console.log(userGuess);
	//Could this be var userGuess = event.key????

//GAMETIME!!////////////////
//when key is let up perform the function
document.onkeyup = function(event) {
	var userGuess;
	var gameChoice;
	guessesSoFar.push(userGuess);

	//if player's guess in the game choice (win)
	if (userGuess === gameChoice) {
		wins++; //adds one to the wins score
		guessLeft = 9; //resets guesses left to 9
		guessesSoFar.length = 0; //resets guesses so far to none
	}
	//if player has no guesses left (lose)
	else if (guessLeft === 0) {
		losses++; //adds one to the losses score
		guessLeft = 9; //resets guess left to 9
		guessesSoFar.length = 0; //resets guesses so far to none
	}
	//if player guess is not equal to the gameChoice 
	else (userGuess !== gameChoice) {
		guessLeft--; //then decrease guesses left by one
	}
	//still need to show all this on html page
	document.querySelector("all").innerHTML = "<h1>Mia's Psychic Game</h1>" + "<p>Guess what letter I'm thinking of</p>" + "<p>Wins: " + wins + "</p>" + "<p>Losses: " + losses + "</p>" + "<p>Guesses Left: " + guessLeft + "</p>" + "<p>Your Guesses So Far: " + guessesSoFar + "</p>";
}






















