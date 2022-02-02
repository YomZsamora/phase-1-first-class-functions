// Receives a callback function and calls it
function receivesAFunction(callbackFunction) { callbackFunction(); }

/* Functions can also return other functions. This is useful 
when we want to package up a function and its environment, but when we don't want to call it just yet. */
function returnsANamedFunction() { 
	return function namedFunction() {} 
}