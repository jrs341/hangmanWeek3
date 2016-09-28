
var guessedLetters = [];

var hairbands = ["poison", "van halen", "aero smith", "white snake"];

var arr = hairbands[Math.floor(Math.random() * hairbands.length)];

var blank = new Array(arr.lenght);

var numGuessRem = arr.length + 6;

var wrongGuess = 0;

var wins = 0;

var losses = 0;

var continueGame = true;

var emoji = document.createElement('img');

// this adds an underline to each letter of the band name
for (var i = 0; i < arr.length; i++) {
	blank[i] = ' _ ';
	if (arr[i] == ' ') {
		blank[i] = ' ';
	}
}
// this looks for a space in the band name
// for (var i = 0; i < arr.length; i++) {
	// if (arr[i] === " ") {
	// blank.splice(i, 1, "-");
	// }
// }
function emojiAppend() {
	emoji.setAttribute('style', 'position: absolute; z-index: 1; height: 100px; width: 100px; top: 38px; left: 82px;');
	document.getElementById('images').appendChild(emoji);
}
function include(arr, obj) {

		if (guessedLetters.indexOf(obj) > -1 && numGuessRem >= 1) {
			wrongGuess++;
			document.getElementById('status').innerHTML = 'You Guessed That Letter Already';
		} // this is where the hangman will go
		else if (arr.indexOf(obj) === -1 && guessedLetters.indexOf(obj) === -1 && numGuessRem >= 1 && arr.split(" ").toString() != blank.join()) {
			wrongGuess++;
			document.getElementById('status').innerHTML = 'Try Again';
				if (wrongGuess === 1) {
					emoji.src = 'assets/images/flushedFace.png';
					emojiAppend();
				}
				else if (wrongGuess === 2) {
					emoji.src = 'assets/images/disappointedFace.png';
					emojiAppend();
				}
				else if (wrongGuess === 3) {
					emoji.src = 'assets/images/angryFace.png';
					emojiAppend();
				}
				else if (wrongGuess === 4) {
					emoji.src = 'assets/images/triumphFace.png';
					emojiAppend();
				}
				else if (wrongGuess === 5) {
					emoji.src = 'assets/images/cryingFace.png';
					emojiAppend();
				}
				else if (wrongGuess === 6) {
					emoji.src = 'assets/images/dizzyFace.png';
					emojiAppend();
				}
		} else {
			document.getElementById('status').innerHTML = 'Good Guess';
		}

		if (obj) {
			guessedLetters.push(obj);
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
		wins ++;
		emoji.src = 'assets/images/grinningFace.png';
		emojiAppend();
		document.getElementById('status').innerHTML = 'You Win';
		return continueGame = false;
	} else if (wrongGuess === 6) {
		document.getElementById('status').innerHTML = 'You lost, the band is ' + arr + ' would you like to play again?';
		losses++;
		return continueGame = false;
	} 
}

function reload() {
	location.relaod(false);
}

	document.getElementById('word').innerHTML = blank.join(' ');
	document.getElementById('guessedLetters').innerHTML = guessedLetters.join(' ');
	document.getElementById('wins').innerHTML = 'Wins: ' + wins;
	document.getElementById('losses').innerHTML = 'Losses: ' + losses;

document.onkeyup = function(event) {

var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

if (continueGame) {

	if(numGuessRem > 0) {

		numGuessRem --;

		include(arr, userGuess);

		arraysEqual(arr, blank);

		} 

		else if (event.keyCode == 13 ) {

		location.relaod(false);
		
		}
	}

		document.getElementById('word').innerHTML = blank.join(' ');
		document.getElementById('guessedLetters').innerHTML = guessedLetters.join(' ');
		document.getElementById('wins').innerHTML = 'Wins: ' + wins;
		document.getElementById('losses').innerHTML = 'Losses: ' + losses;
	}


