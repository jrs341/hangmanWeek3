var numGuessRem = 6;

var guessedLetters = [];

var hairbands = ["poison"/*, "van halen", "aero smith", "white snake"*/];

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

function include(arr, obj) {

		if (guessedLetters.indexOf(obj) > -1 && numGuessRem >= 1) {
			console.log('you guessed that letter already');
		}

		if (obj) {
			guessedLetters.push(obj);
		}

		if (arr.indexOf(obj) === -1 && numGuessRem >= 1) {
			console.log('try again');	
		}

		for(var i = 0; i < arr.length; i++) {
			if (arr.split("")[i] === obj) { 
				blank.splice(i, 1, obj);
			}
		}
	}

	console.log(arr);

	console.log(blank);

	document.onkeyup = function(event) {

		var continueGame = true;

		// var gameOver = continueGame;

		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

		// console.log(userGuess);
	
		if (continueGame = true) {

			if(numGuessRem >= 1) {

			numGuessRem --;

			include(arr, userGuess);

			console.log(userGuess);
			} 
			else if (numGuessRem === 0) {

			// numGuessRem --;

			// include(arr, userGuess);

			console.log('Game Over');

			return continueGame = false;
			}

		console.log(arr);

		console.log(blank);

		console.log(guessedLetters);

		console.log(numGuessRem);

		} else {
			console.log('Game Over 2');
		}
	}

