
const myArray = [1, 6 , 7, 5]

//returns a random element position from an array

function getRandomArrayElement(myArray: any[]){
    return myArray[Math.floor(Math.random() * myArray.length)]
}

console.log(getRandomArrayElement(myArray))


