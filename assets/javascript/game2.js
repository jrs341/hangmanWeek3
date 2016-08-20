var hairbands = ["poison", "van halen", "aero smith", "white snake"];

var arr = hairbands[Math.floor(Math.random() * hairbands.length)];

var numGuessRem = 6;

var endGame = true;

var blank = new Array(arr.lenght);
for (var i = 0; i < arr.length; i++) {
	blank[i] = '_';
}

for (var i = 0; i < arr.length; i++) {
	if (arr[i] === " ") {
	blank.splice(i, 1, " ");
	}
}




if (endGame = false) {
	console.log('Game Over');
} else {


document.onkeyup = function(event) {

	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	
	
	for(var i=0; i<arr.length; i++) {
		if (arr.split("")[i] === userGuess) {
			console.log(userGuess);
			blank.splice(i, 1, userGuess);
			console.log(i);
			console.log(blank);
		} 
	}

	if (arr.indexOf(userGuess) === -1) {
		console.log('try again');
		numGuessRem --;
	} 

	if (numGuessRem ===0) {
		console.log('game over');
		endGame = false;
	}


	console.log(blank);
	console.log(numGuessRem);

}
}





console.log(arr);
console.log(blank);
console.log(numGuessRem);

