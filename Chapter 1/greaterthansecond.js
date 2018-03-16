//Write a function that accepts any array, and returns a new array with the array values that are greater
//than its 2nd value. Print how many values this is. What will you do if the array is only one element
//long?
    
    function GreaterThanSecond(arr){
        var newArr = [];
        var count = 0;
        if(arr.length == 0){
            console.log("the array is empty")
        }
        else if (arr.length == 1){
            console.log("the array has 1 element")
        }

        else{
            for(var i =0; i<arr.length; i++){
                if(arr[i] > arr[1]){
                    count++
                }
            }
            return count
        }
    }
    console.log(GreaterThanSecond([1,2,3,4,5,6]));