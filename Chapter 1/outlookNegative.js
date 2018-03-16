//     Outlook: Negative
// Given an array, create and return a new one containing all the values of the 
// provided array, made negative (not simply multiplied by -1). 
// Given [1,-3,5], return [-1,-3,-5].    

    function outlookNegative(arr){
        var newArr = [];
        for(var i=0; i<arr.length; i++){
            if(arr[i] > 0){
                newArr.push(arr[i] * -1);
            } else {
                newArr.push(arr[i]);
            }
        }
        console.log(newArr);
        return newArr;
    }
    outlookNegative([1,-3,5]);