//Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.


function maxOfthree(a,b,c){
	if (a>b && a>c){
		return a
	}else if (b>a && b>c){
		return b
	}else{
		return c
	}
}


//minimazed

function maxOfthree(a,b,c){
	if (a>b && a>c) return a
	if (b>a && b>c)	return b
	return c
}

//with math

function maxOfthree(a,b,c){
	return Math.max(a,b,c)
}
