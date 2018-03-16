
//     Celsius to Fahrenheit
// Create celsiusToFahrenheit(cDegrees) that accepts number of degrees Celsius, 
// and returns the equivalent temperature expressed in Fahrenheit degrees.
// (optional) Do Fahrenheit and Celsius values equate at a certain number? Scientific
// calculation can be complex, so for this challenge just try a series of Celsius integer values
// starting at 200, going downward (descending), checking whether it is equal to the
// corresponding Fahrenheit value.

function CtoF(num){
    var F = 0;
    var F = Math.floor((num * 9/5) + 32);
    console.log(F);
    return F;
}

CtoF(20);
CtoF(17);
CtoF(34);
