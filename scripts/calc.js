$(document).ready(function(){
	// clearAnswer is a Flag Variable
	// If the Answer is displayed on the screen clear the answer on the screen 
	// upon clicking the next calculator button
	var clearAnswer = false;
	var maxCharacters = 19;
	var charCounter = 0;
	var $screen = $('.screen'); // Calculator display DOM element

	$('.btnOutput').click(function(){
		if (clearAnswer) {
			clearScreen();
		}
		if (charCounter < maxCharacters) {
			var btnValue = $(this).val();
			$($screen).append(btnValue);
			clearAnswer = false;
			charCounter++;
		}		
	});

	$('.btnEvaluate').click(function(){
		var answer;
		var value = getScreenText();
		// If the first character in VALUE is divide or multiply
		if (value[0] === '/' || value[0] === '*') {
			value = '0' + value;
		}
		// If the last character in VALUE is an operator
		var lastChar = value.length -1;
		if (isNaN(value[lastChar])) {
			answer = "Invalid expresion!";
		}
		// If the value string is division and divides by zero
		else if (value.indexOf('/') > -1 && value[value.length - 1] === '0') {
			answer = "Error!";
		}
		else {
			answer = eval(value);
		}	
		clearScreen();
		$($screen).text(answer);
		clearAnswer = true;
	});

	$('.btnClear').click(function(){
		clearScreen();
	});

	$('.btnDelete').click(function(){
		var newText = getScreenText().slice(0,-1);
		$($screen).text(newText);
	});

	$('.btnPercent').click(function(){
		$($screen).text(parseFloat(getScreenText()) / 100.0);
	});

	var clearScreen = function() {
		charCounter = 0;
		$($screen).text('');
	};

	var getScreenText = function() {
		var screenText = $($screen).text();
		return screenText;
	}
});

