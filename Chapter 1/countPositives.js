//     Count Positives
// Given array of numbers, create function to replace last value with number of positive values.
// Example, countPositives([-1,1,1,1]) changes array to [-1,1,1,3] and returns it.
    
    function countPositives(arr){
        var lastValue = 3;
        var priorIndex = arr[0];
        for(var i=0; i<arr.length; i++){
            priorIndex = i;
        }
        arr[priorIndex] = lastValue;
        console.log(arr);
        return arr;
    }
    countPositives([-1,1,1,1]);