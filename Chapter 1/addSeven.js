//     Add Seven to Most
// Build function that accepts array. 
// Return a new array with all values except first, adding 7 to each.
// Do not alter the original array.
    
    function addSevenToMost(arr){
        var newArr = [];
        for(var i=0; i<arr.length; i++){
            if(typeof arr[i] == 'number'){
                arr.shift(newArr.push(arr[i] + 7));
            }
        }

        console.log(newArr);
        return newArr;
    }
    addSevenToMost([1,2,3,4,5])