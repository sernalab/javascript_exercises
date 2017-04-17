// Calculation

// Write a program that writes in the console all the multiples of 23 less than 500 and at the end writes the sum of all of them

// Manera 1
function multiples23() {
  var elements = "Elements: "
  var sum = 0
  for (var i=0; i<500; i++) {
    if (i%23===0) {
      elements += i + " "
      sum += i
    }
  }
  return elements + '\n' + 'Suma: ' + sum;
}

// Manera 2
function multiples23() {
  var elements = "Elements: "
  var sum = 0
  for (var i=23; i<500; i+=23) {
    elements += i + " "
    sum += i
  }
  return elements + '\n' + 'Suma: ' + sum;
}