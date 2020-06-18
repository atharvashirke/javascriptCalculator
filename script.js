var display = document.querySelector("input")
var calculationComplete = false

display.value = 0

document.addEventListener("keypress", function(event) {
	if (event.code === "Enter") {
		calculate()
	}
})

function calculate() {
	var input = display.value
	var expression = input.match(/([-+]?[0-9]*\.?[0-9])\s*([\+÷\*×\-\/])\s*([-+]?[0-9]*\.?[0-9]+)/)
	var output;

	switch(expression[2]) {
		case '+':
			output = parseFloat(expression[1]) + parseFloat(expression[3])
			break;

		case '-':
			output = parseFloat(expression[1]) - parseFloat(expression[3])
			break;

		case '*':
			output = parseFloat(expression[1]) * parseFloat(expression[3])
			break;

		case '×':
			output = parseFloat(expression[1]) * parseFloat(expression[3])
			break;

		case '/':
			output = parseFloat(expression[1]) / parseFloat(expression[3])
			break;

		case '÷':
			output = parseFloat(expression[1]) / parseFloat(expression[3])
			break;

		default:
			error()
	}

	display.value = output
	calculationComplete = true
}

function error() {
	console.log("Improper operator")
}

var numKeys = document.getElementsByClassName("num")
for (var i = 0; i < numKeys.length; i++) {
	numKeys[i].addEventListener("click", function() {
		if (display.value === "0") {
			display.value = this.firstElementChild.textContent
		} else if (!calculationComplete) {
			display.value += this.firstElementChild.textContent
		} else {
			display.value = this.firstElementChild.textContent
			calculationComplete = false;
		}
	})
}

var operators = document.getElementsByClassName("operator")
for (var i = 0; i < operators.length; i++) {
	operators[i].addEventListener("click", function() {
		display.value += this.firstElementChild.textContent
		calculationComplete = false
	})
}

var clear = document.getElementById("clear")
clear.addEventListener("click", function() {
	display.value = 0
	calculationComplete = false
})

var negate = document.getElementById("sign")
negate.addEventListener("click", function() {
	display.value = -1 * Number(display.value)
})

var percent = document.getElementById("percent")
percent.addEventListener("click", function() {
	display.value = 0.01 * Number(display.value)
})

var enter = document.getElementById("enter")
enter.addEventListener("click", calculate)