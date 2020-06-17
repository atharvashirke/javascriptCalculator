var display = document.querySelector("input")

display.value = 0

document.addEventListener("keypress", function(event) {
	if (event.code === "Enter") {
		calculate()
	}
})

function calculate() {
	var input = display.value
	console.log(input)
	var operand = input.match(/[-+]?[0-9]*\.?[0-9]+/g)
	var operator = display.value.match(/[\+\*\-\/]/)
	console.log(operand)
	console.log(operator)
	console.log(parseFloat(operand[0]))
	var output;

	switch(operator[0]) {
		case '+':
			output = parseFloat(operand[0]) + parseFloat(operand[1])
			break;

		case '-':
			output = parseFloat(operand[0]) - parseFloat(operand[1])
			break;

		case '*':
			output = parseFloat(operand[0]) * parseFloat(operand[1])
			break;

		case '/':
			output = parseFloat(operand[0]) / parseFloat(operand[1])
			break;

		default:
			error()
	}

	console.log("Answer is " + output)

	display.value = output
}

function error() {
	console.log("Improper operator")
}

