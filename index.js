// Receives a callback function and calls it
function receivesAFunction(callbackFunction) { callbackFunction(); }

function returnsANamedFunction() { 
	return function namedFunction() {} 
}