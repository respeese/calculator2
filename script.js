function add (a, b) {
	return a+b;
}

function subtract (a, b) {
	return a-b;
}

function multiply (a, b) {
	return a*b;
}

function divide(a, b) {
	return a/b;
}

function operate(operator, num1, num2){
	let result = operator(num1, num2);
	return result;
}

console.log(operate(divide, 2, 3));