
/*var band0 = "poison";
var band1 = "van halen";
var band2 = "aero smith";*/

var hairbands = ["poison", "van halen", "aero smith", "white snake"];

/*hairbands [0] = band0.split("");
hairbands [1] = band1.split("");
hairbands [2] = band2.split("");*/

var arr = hairbands[Math.floor(Math.random() * hairbands.length)];

var blank = new Array(arr.lenght);
for (var i = 0; i < arr.length; i++) {
	blank[i] = '_';
}

var isSpaceInWord = false;

		for (var i = 0; i < arr.length; i++) {
			if (arr[i] === " ") {
				isSpaceInWord = true;
				var space = arr.indexOf(" ");
				blank.splice(space, 1, " ");
			}
		}

var numGuess = 0;

var numMatch = 0;

var numWrong = 0;

var incorrect = [];

var guessedLetters = [];
	for (var i =0; i < 5; i++) {
		guessedLetters[i] = '_';
	}

console.log(arr);

console.log(blank);

console.log(guessedLetters);



document.onkeyup = function(event) {

	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	function getIndex(obj) {
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] === obj) {
				return i;
			}
		}
	}

	function getIndex2(obj) {
		for (var i = getIndex(obj) + 1; i < arr.length; i++) {
			if (arr[i] === obj) {
				return i;
			}
		}
	}

	function getIndex3(obj) {
		for (var i = getIndex2(obj) + 1; i < arr.length; i++) {
			if (arr[i] === obj) {
				return i;
			}
		}
	}

	function changeI(obj) {

	}
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
		if (userGuess) {
			guessedLetters.push(String.fromCharCode(event.keyCode).toLowerCase());
		}


		if (guessedLetters.indexOf(userGuess) === -1) {
			console.log('you guess that letter already knuckles');
		}


		if (arr.indexOf(obj) === -1) {
			console.log('try again');	
		}


		var isLetterInWord = false;
		
		for(var i = 0; i < arr.length; i++) {
			if (arr[i] === obj) { 
				isLetterInWord = true;
				getIndex(obj);
				console.log(obj);
				blank.splice(getIndex(obj), 1, obj);
				console.log(getIndex(obj));	
			} 
			if (isLetterInWord == true) {
				for (var i = (getIndex(obj)) + 1 ; i < arr.length; i++) {
					if (arr[i] == obj) {
						isLetterInWord = true;
						getIndex2(obj);
						blank.splice(getIndex2(obj), 1, obj);
						console.log(getIndex2(obj));
					}				
				}
			}
			if (isLetterInWord == true) {
				for (var i = (getIndex2(obj)) + 1; i < arr.length; i++) {
					if (arr[i] == obj) {
						getIndex3(obj);
						blank.splice(getIndex3(obj), 1, obj);
						console.log(getIndex3(obj));
					}	
				}
			} 
		}
	} 

	include(arr, userGuess) 	

	console.log(blank);

	console.log(guessedLetters);
	
}