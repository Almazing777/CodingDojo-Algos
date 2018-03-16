//     Print One, Return Another
// Build a function that takes array of numbers. 
// The function should print second-to-last value in
// the array, and return first odd value in the array.
    function returnAnother(arr){
        var odd = arr[0];
        for(var i=0; i<arr.length; i++){
            if(arr[i] % 2 == 1){
                odd = arr[i];
                break;
            }
        }
        console.log(arr[arr.length-1]);
        return odd;
    }
    returnAnother([1,2,3,4,5]);