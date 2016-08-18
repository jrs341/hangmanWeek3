
/*var band0 = "poison";
var band1 = "van halen";
var band2 = "aero smith";*/

var hairbands = ["poison", "van halen", "aero smith", "white snake"];

/*hairbands [0] = band0.split("");
hairbands [1] = band1.split("");
hairbands [2] = band2.split("");*/
// var letters = 
var arr = hairbands[Math.floor(Math.random() * hairbands.length)];

var blank = new Array(arr.lenght);
for (var i = 0; i < arr.length; i++) {
	blank[i] = '_';
}

for (var i = 0; i < arr.length; i++) {
	if (arr[i] === " ") {
	blank.splice(i, 1, " ");
	}
}

var numGuessRem = 12;

var numMatch = 0;

var numWrong = 0;

var incorrect = [];

var guessedLetters = [];
	// for (var i =0; i < 12; i++) {
		// guessedLetters[i] = '_';
	// }

console.log(arr);

console.log(blank);

console.log(guessedLetters);

var endGame = true;

document.onkeyup = function(event) {

	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	if (numGuessRem === 0) {
		console.log('Game Over');
		endGame = false;
		
	} else {
		
	function include(arr, obj) {

	

		/*else {
                    lettersGuessed += guess;
                    lives--;
                    man.innerHTML = 'You have ' + lives + ' lives remaining';
                    if (lives === 0) gameOver();*/

	// if ((lettersMatched && lettersMatched.indexOf(guess) > -1) || (lettersGuessed && lettersGuessed.indexOf(guess) > -1))

		// need something to count here
	/*for (count = 0; i < 4; i++) */


		/*if (guess.indexOf(userGuess) === userGuess) {
				console.log('guess again you already chose that letter')
			}*/


		if (guessedLetters.indexOf(userGuess) > -1) {
			console.log('you guessed that letter already knuckles');
		}

		if (obj) {
			guessedLetters.push(obj);
			numGuessRem --;
		}

		if (arr.indexOf(obj) === -1) {
			console.log('try again');	
		}

		for(var i = 0; i < arr.length; i++) {
			if (arr[i] === obj) { 
				console.log(obj);
				blank.splice(i, 1, obj);
				console.log(i);	
			}
		}
	} 

	include(arr, userGuess) 

	console.log(blank);

	console.log(guessedLetters);

	console.log(numGuessRem);

	

	/*for (var i = 0; i < arr.length; i++) {/*and not for spaces to this
		if (arr === blank.join()) {
			console.log("You Win");
		}
	}*/
}	
}

