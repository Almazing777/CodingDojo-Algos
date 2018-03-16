    // Increment the Seconds
    // Given arr, add 1 to odd elements ([1], [3], etc.), 
    // console.log all values and return arr.

    function incrSeconds(arr){
        for(var i=0; i<arr.length; i++){
            if(arr[i] % 2 == 1){
                arr[i] += 1;
            }
        }
        console.log(arr);
        return arr;
    }
    incrSeconds([1,3,4,5,6,7,7,8]);