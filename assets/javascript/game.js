// assume each word is an array or an object?


// how to display a blank until correct key is pushed?
	// if else statment for each letter?

// need to display a blank array, then overwrite blank array with correct letter or "SWITCH FUNCTION"?

var blank = ['-', '-', '-', '-', '-', '-'];

var madona = ['m', 'a', 'd', 'o', 'n', 'a'];

var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

document.onkeyup = function(event) {
// is there a funtion to test key up in an array???

	if ((userGuess === 'm') || (userGuess === 'a') || (userGuess === 'd') || (userGuess === 'o') || (userGuess === 'n') || (userGuess === 'a')) {

		if (userGuess === 'm') {
		console.log(blank[]);// insert function to replace element in array)

		}
	}




}

// hijacked count code

/*var counter = function(count) {
    console.log(">> setting count to " + this.count);
    return {
        getCount: function(){
           return ++count;
        }
    }
}*/