//return a shuffled array

export function shuffleArray(myArray: unknown[]){
    return myArray.sort(() => Math.random() - 0.5)
}
