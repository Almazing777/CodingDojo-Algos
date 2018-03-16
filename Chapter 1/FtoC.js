//     Fahrenheit to Celsius
// Kelvin wants to convert between temperature scales. Create fahrenheitToCelsius(fDegrees)
// that accepts a number of degrees in Fahrenheit, and returns the equivalent temperature as
// expressed in Celsius degrees. For review, Fahrenheit = (9/5 * Celsius) + 32.
    
    function FtoC(num){
        var C = 0;
        var C = Math.floor((num-32)* 5/9);
        console.log(C);
        return C;
    }

    FtoC(100);
    FtoC(75);
    FtoC(32);
