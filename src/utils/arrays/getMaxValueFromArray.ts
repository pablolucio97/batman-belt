const myArray = [1, 6 , 7, 5]

//returns the lowest value from an array of numbers

function getMinValueFromArray(myArray: any[]){
    return Math.min.apply(null, myArray)
}

console.log(getMinValueFromArray(myArray))


