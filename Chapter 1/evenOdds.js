//     Evens and Odds
// Create a function that accepts an array. Every time that array has three odd values in a
// row, print "That’s odd!" Every time the array has three evens in a row, print "Even more
// so!".

    function evenAndOdds(arr){
        var threeOdds = 0;
        var threeEvens = 0;

        for(var i=0; i<arr.length; i++){
            if(arr[i] % 2 == 1){
                threeOdds++;
            }
            if(threeOdds % arr[i]){
                console.log("that's odd")
            }
            else {
                console.log("Even So!")
            }
        }
        return evenAndOdds
    }
    evenAndOdds([1,1,1,2,4,5,2,2,2]);