// Side Effects
// Functions can do more than just return values. They can also have side effects. *Side effects of this exercise may include insomnia, sweating, and an unnatural feeling of euphoria.

// Take a look at this code

var addOne = function (x) {
    cow = "hamburger"
    return x = x+1
};

// What happens? The variable cow is set to "sleepy", then x is set to 12. But suddenly out of nowhere, cow is set to "purple". You can see it in the definition of double. The function does its job of doubling the input, but it has the side effect of setting cow from outside the function to "purple".

// This is different than regular mathematical functions. In math, functions just map inputs to outputs. They don't have any magical super cow powers like double.

// Define a function named addOne that appears to simply return its argument plus one, but secretly turns cow to "hamburger".


var addOne = function (x) {
    cow = "hamburger"
    return x = x+1
};