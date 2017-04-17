//Improve the previous function to add a random number between 0 and 1000 every 7 characters



function encodeWord(enterString){
	var str = enterString.toUpperCase();
	var myString = str.replace(/T/g,'7').replace(/A/g, '4').replace(/S/g,'5').replace(/O/g,'0');
	for (j = 7; j<=myString; j += 7){
		myString.splice(j, 0,Math.floor((Math.random() * 1000) + 1))
	}
	return myString 
}
