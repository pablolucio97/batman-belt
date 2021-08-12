const myArray = [1, 6 , 7, 5]

//returns a random element from an array

function getRandomArrayPosition(myArray: any[]){
    return Math.floor(Math.random() * myArray.length)
}
console.log(getRandomArrayPosition(myArray))
