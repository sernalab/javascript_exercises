// Writes a function that convert a hexadecimal color, "blue" for example "#0000FF" in its RGB representation rgb(0,0,255)". 
// Give the function the name getRGB() and test it with this code


function getRGB(code){
	var r = parseInt(code.slice(1,3),16);
	var g = parseInt(code.slice(3,5),16);
	var b = parseInt(code.slice(5),16);
	return 'rgb('+r+','+g+','+b+')'
}

//done