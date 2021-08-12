
const myArray = [1, 6 , 7, 5]

//returns the higher value from an array of numbers

function getMinValueFromArray(myArray: number[]){
    return Math.max.apply(null, myArray)
}

console.log(getMinValueFromArray(myArray))


