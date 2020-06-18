var display = document.querySelector("input")
var calculationComplete = false
var operationLocked = false

display.value = 0

document.addEventListener("keypress", function(event) {
	if (event.code === "Enter") {
		calculate()
	}
})

function calculate() {
	var input = display.value
	var operands = input.match(/[-+]?[0-9]*\.?[0-9]+/g)
	var operator = input.match(/\s[\+÷\*×\-\/]\s/g)
	var output;
	var counter = 0;
	operands.forEach(function(element, index) {
		if (index == 0) {
			output = element;
		} else {
			output = arithmetic(output, element, operator[counter])
			counter++
		}
	})
	
	display.value = output
	calculationComplete = true
}

function arithmetic(x, y, stringOperator) {
	switch(stringOperator) {
		case ' + ':
			return parseFloat(x) + parseFloat(y)
			break;

		case ' - ':
			return parseFloat(x) - parseFloat(y)
			break;

		case ' * ':
			return parseFloat(x) * parseFloat(y)
			break;

		case ' × ':
			return parseFloat(x) * parseFloat(y)
			break;

		case ' / ':
			return parseFloat(x) / parseFloat(y)
			break;

		case ' ÷ ':
			return parseFloat(x) / parseFloat(y)
			break;

		default:
			error()
	}
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
			operationLocked = false
		} else {
			display.value = this.firstElementChild.textContent
			calculationComplete = false
		}
	})
}

var operators = document.getElementsByClassName("operator")
for (var i = 0; i < operators.length; i++) {
	operators[i].addEventListener("click", function() {
		if (!operationLocked) {
			display.value += ' ' + this.firstElementChild.textContent + ' '
			calculationComplete = false
			operationLocked = true
		}
	})
}

var highlightKeys = document.getElementsByClassName("highlight")
window.setInterval(function() {
	var color = randomRGB()
	for (var i = 0; i < highlightKeys.length; i++) {
		highlightKeys[i].style.backgroundColor = color
	}


}, 5000)

function randomRGB() {
	return "rgb(" + getRandomInt(255) + ', ' + getRandomInt(255) + ', ' + getRandomInt(255) + ')'
}

function getRandomInt(max) {
	return Math.floor(Math.random() * max)
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