

// GLOBAL VARIABLES
// =============================================================================================================


var guessedLetters = [];

var hairbands = ["poison", "van halen", "aero smith", "white snake", "twisted sister", "ratt", "motley crue", "metallica", "quiet riot"];

var arr = hairbands[Math.floor(Math.random() * hairbands.length)];

var blank = new Array(arr.lenght);

var numGuessRem = arr.length + 6;

var wrongGuess = 6;

var continueGame = true;

var emoji = document.createElement('img');


// FUNCTIONS
// ===================================================================================

// this for loop adds an underline to each letter of the band name or places a space if there is a space
for (var i = 0; i < arr.length; i++) {
	if (arr[i].indexOf(' ') >= 0) {
		blank[i] = "\u00A0";
	} 
	else {
	blank[i] = ' _ ';
	}	
}

function winCounter() {
    if(typeof(Storage) !== "undefined") {
        if (sessionStorage.wincount) {
            sessionStorage.wincount = Number(sessionStorage.wincount)+1;
            wins = sessionStorage.wincount;
        } else {
            sessionStorage.wincount = 1;
            wins = 0;
        }
        document.getElementById("wins").innerHTML = 'Wins: ' + sessionStorage.wincount;
    } else {
        document.getElementById("wins").innerHTML = "Sorry, your browser does not support web storage...";
    }
}

function lossCounter() {
    if(typeof(Storage) !== "undefined") {
        if (sessionStorage.losscount) {
            sessionStorage.losscount = Number(sessionStorage.losscount)+1;
            losses = sessionStorage.losscount;
        } else {
            sessionStorage.losscount = 1;
            losses = 0;
        }
        document.getElementById("losses").innerHTML = 'Losses: ' + sessionStorage.losscount;
    } else {
        document.getElementById("losses").innerHTML = "Sorry, your browser does not support web storage...";
    }
}

function emojiLogic() {
	if (wrongGuess === 5) {
		emoji.src = 'assets/images/flushedFace.png';
		emojiAppend();
	}
	else if (wrongGuess === 4) {
		emoji.src = 'assets/images/disappointedFace.png';
		emojiAppend();
	}
	else if (wrongGuess === 3) {
		emoji.src = 'assets/images/angryFace.png';
		emojiAppend();
	}
	else if (wrongGuess === 2) {
		emoji.src = 'assets/images/triumphFace.png';
		emojiAppend();
	}
	else if (wrongGuess === 1) {
		emoji.src = 'assets/images/cryingFace.png';
		emojiAppend();
	}
	else if (wrongGuess === 0) {
		emoji.src = 'assets/images/dizzyFace.png';
		emojiAppend();
	}
}

function emojiAppend() {
	emoji.setAttribute('style', 'position: absolute; z-index: 1; height: 80px; width: 80px; top: 25px; left: 45px;');
	document.getElementById('images').appendChild(emoji);
}


function include(arr, obj) {

		if (guessedLetters.indexOf(obj) > -1 && numGuessRem >= 1) {
			wrongGuess--;
			emojiLogic();
			document.getElementById('status').innerHTML = 'You Guessed That Letter Already, you have ' + wrongGuess + ' wrong guess\' remaining';
		} 
		else if (arr.indexOf(obj) === -1 && guessedLetters.indexOf(obj) === -1 && numGuessRem >= 1 && arr.split(" ").toString() != blank.join()) {
			wrongGuess--;
			emojiLogic();
			document.getElementById('status').innerHTML = 'Try Again, you have ' + wrongGuess + ' wrong guess\' remaining';
		} 
		else {
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

	if (arr1.replace(" ", "") == arr2.join("").replace("\u00A0", "")) {
		winCounter();
		emoji.src = 'assets/images/grinningFace.png';
		emojiAppend();
		document.getElementById('status').innerHTML = 'You Win!! Press the Enter key to play again';
		return continueGame = false;
	} 
	else if (wrongGuess === 0) {
		document.getElementById('status').innerHTML = 'You lost, the band is ' + arr + ' Press the Enter key to play again';
		lossCounter();
		return continueGame = false;
	} 
}

	document.getElementById('word').innerHTML = blank.join(' ');
	document.getElementById('guessedLetters').innerHTML = guessedLetters.join(' ');

	if (typeof(sessionStorage.wincount) == "undefined") {
		document.getElementById('wins').innerHTML = 'Wins: ' + 0;
	}
	else {
		document.getElementById("wins").innerHTML = 'Wins: ' + sessionStorage.wincount;
	}
	if (typeof(sessionStorage.losscount) == "undefined") {
		document.getElementById('losses').innerHTML = 'Losses: ' + 0;
	}
	else {
	 	 document.getElementById("losses").innerHTML = 'Losses: ' + sessionStorage.losscount;
	}
	
// ==========================================================================================


document.onkeyup = function(event) {

var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	if (event.keyCode == 13) {
		location.reload();
		continueGame = true;
	}

	else if (continueGame) {

		 if (numGuessRem > 0) {
			numGuessRem --;
			include(arr, userGuess);
			arraysEqual(arr, blank);
		} 
	}
		document.getElementById('word').innerHTML = blank.join(' ');
		document.getElementById('guessedLetters').innerHTML = guessedLetters.join(' ');				
}


