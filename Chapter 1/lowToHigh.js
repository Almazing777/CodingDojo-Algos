//     Print Low, Return High
// Create a function that takes array of numbers. 
// The function should print the lowest value in the array,
// and return the highest value in the array.
    function ReturnHigh(arr){
        var min = arr[0];
        var max = arr[0];

        for(var i=0; i<arr.length; i++){
            if(arr[i] > max){
                max = arr[i];
            }
        }
        console.log(min);
        return max;
    }
    ReturnHigh([1,2,3,4,6]);