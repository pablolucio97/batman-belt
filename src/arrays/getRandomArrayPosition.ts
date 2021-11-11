//returns a random element from an array

export function getRandomArrayPosition(myArray: unknown[]){
    return Math.floor(Math.random() * myArray.length)
}

