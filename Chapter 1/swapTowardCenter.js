//     Swap Toward the Center
// Given array, swap first and last, third and third-to-last, etc. 
// Input[true,42,"Ada",2,"pizza"] becomes ["pizza",42,"Ada",2,true].
// Change [1,2,3,4,5,6] to [6,2,4,3,5,1].

    function swapTowardCenter(arr){
        for(var i=0; i<arr.length; i++){
            if( i % 2 == 0){
                temp=arr[i];
                arr[i] = arr[arr.length-1-i];
                arr[arr.length-1-i] = temp;
            }
        }
        console.log(arr);
        return arr;
    }
    swapTowardCenter([1,2,3,4,5,6]);