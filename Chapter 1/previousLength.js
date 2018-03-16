//Previous Lengths
// You are passed an array containing strings. Working within that same array, 
// replace each string with a number – the length of the string at previous
// array index – and return the array.

    function previousLength(arr){
        for(var i=0; i<arr.length; i++){
            if(typeof arr[i] == "string"){
                arr[i] = arr[i].length;
                console.log("string");
            } else {
                console.log("do nothing");
            }
        }
        console.log(arr);
        return arr;
    }
    previousLength([1,"coding", "dojo", "rocks", 2])