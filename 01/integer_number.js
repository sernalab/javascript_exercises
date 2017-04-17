// Integer Numbers 
// Write a function in Javascript that having two integers x1 and x2 returns all the integers between them. 
// If x2 es lower than x1 it should return -1


//Juanma

function getRange(x1,x2){
	var result = "";
	//primero comparo si x2 es menor q x1
	if (x2<x1){
		return -1
	}
	//ahora si x1 es mayor que x2 ejecutamos esto
	//x1+1 arranca a una posicion mas, para que quede entre dos numeros.
	for(var i=x1+1; i<x2; i++){
		//console.log(i)
		//o
		result += i + " "
	}
	return result;
}


function integer(a,b){
	var int = [];
	for(var i=0; i<=a-b; i++){
		console.log(int[i]);
	}
}

