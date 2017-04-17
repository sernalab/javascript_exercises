// Define a function called calculator that receives an operation and several numbers (can be 2 or 10 or whatever) 
// returns the result of the operation applied to the values passed as parameters


//juanma
function calculatorPlus(){
	var operation = arguments[0]
	var result = arguments[1]//init 1 cause if init 0, when you * the result is 0
	//necesitar iterar con los argmuentos
	var totalElements = arguments.length
	var operand;
	//con el for llegamos a todos los argumentos del array
	for(var i = 2; i<totalElements; i++){
		operand = arguments[i]
		if(operation === 'suma')result += operand
		if(operation === 'resta')result -= operand
		if(operation === 'multi')result *= operand
		if(operation === 'div')result /= operand	
	}
	return result
}