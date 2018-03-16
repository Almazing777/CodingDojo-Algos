//     Reverse Array
// Given array, write a function to reverse values, in-place. 
// Example: reverse([3,1,6,4,2]) returns same array, containing [2,4,6,1,3].
    function reverseArray(arr){
        for(var i=0; i<arr.length; i++){
            arr.reverse();
        }
        console.log(arr);
        return arr;
    }
    reverseArray([1,2,3,4,5]);