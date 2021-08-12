const myArray = [1, 6 , 7, 5]

//return a shuffled array

function shuffleArray(myArray: any[]){
    return myArray.sort(() => Math.random() - 0.5)
}

console.log(shuffleArray(myArray))