// Writes a function that convert a hexadecimal color, "blue" for example "#0000FF" in its RGB representation rgb(0,0,255)". 
// Give the function the name getRGB() and test it with this code

// MINE
//------
// function getRGB(code){
// 	var color;
// 	var r = parseInt(code.slice(1,3),16);
// 	var g = parseInt(code.slice(3,5),16);
// 	var b = parseInt(code.slice(5),16);
// 	if (r === 00 && g === 00 && b === 00){
// 		color = 'Black';
// 	}else if(r === FF && g === FF && b === FF){
// 		color = 'White';
// 	}else if(r === FF && g === 00 && b === 00){
// 		color = 'Red';
// 	}else if(r === 00 && g === FF && b === 00){
// 		color = 'Green';
// 	}else if(r === 00 && g === 00 && b === FF){
// 		color = 'Blue';
// 	}
// 	return ('rgb('+r+','+g+','+b+')' + '\n' + 'The color is: ' + color);
// }

// HELPED by ALEX
function getRGB(code){
    var color;
	code = code.toUpperCase();
    var r = parseInt(code.slice(1,3),16);
    var g = parseInt(code.slice(3,5),16);
    var b = parseInt(code.slice(5),16);
    
    if (code.slice(1,3) === "00" && code.slice(3,5) === "00" && code.slice(5) === "00"){
        color = 'Black';
    }else if(code.slice(1,3) === "FF" && code.slice(3,5) === "FF" && code.slice(5) === "FF"){
        color = 'White';
    }else if(code.slice(1,3) === "FF" && code.slice(3,5) === "00" && code.slice(5) === "00"){
        color = 'Red';
    }else if(code.slice(1,3) === "00" && code.slice(3,5) === "FF" && code.slice(5) === "00"){
        color = 'Green';
    }else if(code.slice(1,3) === "00" && code.slice(3,5) === "00" && code.slice(5) === "FF"){
        color = 'Blue';
    }else console.log("!!")

return ('rgb('+r+','+g+','+b+')' + '\n' + 'The color is: ' + color);
}
getRGB("#000000")
