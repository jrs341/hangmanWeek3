

var guessedLetters = [];

var hairbands = ["poison", "van halen", "aero smith", "white snake"];

var arr = hairbands[Math.floor(Math.random() * hairbands.length)];

var blank = new Array(arr.lenght);

var numGuessRem = arr.length + 3;

var wins = 0;

var continueGame = true;

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

		if (arr.indexOf(obj) === -1 && numGuessRem >= 1 && arr.split("").toString() != blank.join()) {
			console.log('try again');	
		}

		for(var i = 0; i < arr.length; i++) {
			if (arr.split("")[i] === obj) { 
				blank.splice(i, 1, obj);
			}
		}
}

// reference: http://stackoverflow.com/questions/30820611/javascript-arrays-cannot-equal-each-other
function arraysEqual(arr1, arr2) {

		if (arr1.split("").toString() == arr2.join()) {
			console.log('You Win');
			wins ++;
			return continueGame = false;
		} else {
			console.log('Keep Going');
		}	
	
}

	console.log(arr);

	console.log(blank);

	console.log(numGuessRem);

	console.log(wins);

	document.onkeyup = function(event) {

		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

		if (continueGame) {

			if(numGuessRem >= 1) {

			numGuessRem --;

			include(arr, userGuess);

			arraysEqual(arr, blank);

			} 

			else if (numGuessRem === 0) {

			arraysEqual(arr, blank);

			console.log('Game Over');

			}
		}

		console.log(arr);

		console.log(blank);

		console.log(guessedLetters);

		console.log(numGuessRem);

		console.log(wins);
	}

