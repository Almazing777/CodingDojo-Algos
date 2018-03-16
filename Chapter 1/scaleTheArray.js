//     Scale the Array
// Given array arr and number num, multiply each arr value by num, 
// and return the changed arr.

    function scaleTheArray(arr, num){
        var changedArr = [];
        for(var i=0; i<arr.length; i++){
            changedArr.push(arr[i] * num);
        }
        console.log(changedArr);
        return changedArr
    }
    scaleTheArray([1,2,3,4], 2);