// Define a function called calculator that receives an operation and two numbers and returns the result of the operation 
// applied to the values passed as parameters


function calculator(operator, num1, num2){
	var result;
	if(operator === '+'){
		result = num1 + num2;
	}else if(operator === '-'){
		result = num1 - num2;
	}else if(operator === '*'){
		result = num1 * num2;
	}else if(operator === '/'){
		result = num1 / num2;
	}
	return result
}

