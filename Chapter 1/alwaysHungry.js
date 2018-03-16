
//     Always Hungry
// Create a function that accepts an array, and prints "yummy" each time one of the 
// values is equal to "food". If no array elements are "food", then print "I'm hungry" once.

    function alwaysHungry(arr){
        for(var i=0; i<arr.length; i++){
            if(arr[i] == "food"){
                console.log("yummy");
            } else if(arr[i] !== "food"){
                console.log("hungry")
            }
        }
    }
    alwaysHungry([1,2,3]);
    alwaysHungry(["food", 1, "food", 2, "food", 3]);