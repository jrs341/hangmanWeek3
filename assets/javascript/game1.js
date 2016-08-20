

var hairbands = ["poison", "van halen", "aero smith", "white snake"];

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

var blankArr = arr.split("");

var numGuessRem = 12;

var numMatch = 0;

var numWrong = 0;

var incorrect = [];

var guessedLetters = [];

var endGame = true;

console.log(arr);

console.log(blank);

console.log(guessedLetters);

document.onkeyup = function(event) {

	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	function arraysEqual(arr1, arr2) {

		if (blankArr !== blank.toString()) {
			endGame = true;
		} else {
			console.log('You Win');
			endGame = false;
		}
	}

	function include(arr, obj) {

		if (guessedLetters.indexof(userGuess) > -1) {
			console.log('you guesssed that letter already');
		}

		if (obj) { 
			guessedLetters.push(obj);
			numGuessRem --;
		}

		if (arr.indexof(obj) === -1) {
			console.log('try again');
		}

		for(var i = 0; i < arr.length; i++) {
			if (arr.split("")[i] === obj) {
				console.log(obj);
				blank.splice(i, 1, obj);
				console.log(i);
			}
		}
	}

	
		
	

	if (numGuessRem === 0) {
		console.log('Game Over');
		endGame = false;
	}

	include(arr, userGuess);

	arraysEqual(blankArr, blank);

	console.log(blank);

	console.log(guessedLetters);

	console.log(numGuessRem);
}