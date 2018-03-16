    // Given two numbers, return array of length num1 with each value num2. 
    // Print "Jinx!" if they are same.
    function thisLength(num1, num2){
        var newArr = [];
        newArr.push(num1, num2);

        if(num1 == num2){
            console.log("Jinx!")
        }
        console.log(newArr);
        return newArr;
    }

    thisLength(2,2);