//return a shuffled array

function shuffleArray(myArray: unknown[]){
    return myArray.sort(() => Math.random() - 0.5)
}
