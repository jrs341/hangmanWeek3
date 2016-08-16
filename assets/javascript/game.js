var blank = ['-', '-', '-', '-', '-', '-'];

var arr = ['m', 'a', 'd', 'a', 'n', 'a'];

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
	function include(arr, obj) {

		var isLetterInWord = false;

		for(var i=0; i<arr.length; i++) {
			if (arr[i] == obj) {
				isLetterInWord = true;
				getIndex(obj);
				console.log(obj);
				blank.splice(getIndex(obj), 1, obj);
				console.log(getIndex(obj));		 
			}

			if (isLetterInWord == true) {
				for (var i = (getIndex(obj)) + 1 ; i < arr.length; i++) {
						if (arr[i] == obj) {
						getIndex2(obj);
						blank.splice(getIndex2(obj), 1, obj);
						console.log(getIndex2(obj));
						}
					
				}
			}
		}
	}

	include(arr, userGuess) 	

	/*blank.splice(arr.indexOf(userGuess), 1, userGuess);*/

	console.log(blank);

		
	/*else {
		console.log('try again');
	}*/
	

}