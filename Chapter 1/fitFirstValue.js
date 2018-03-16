    // Your function should accept an array. If value at [0] is greater than array’s length, 
    // print "Too big!"; if value at [0] is less than array’s length, print "Too small!"; 
    // otherwise print "Just right!".

    function fitFirstValue(arr){
        if(arr[0] > arr.length){
            console.log("Too Big!")
        }
        else if(arr[0] < arr.length){
            console.log("Too Small!")
        }
        else {
            console.log("Just Right")
        }
        return fitFirstValue
    }

    fitFirstValue([10,4,5,6]);
    fitFirstValue([4,5,6,7]);
    fitFirstValue([9,8,7,6]);