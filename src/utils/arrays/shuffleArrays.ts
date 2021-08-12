const myArray = [1, 6 , 7, 5]

function shuffleArray(myArray: any[]){
    return myArray.sort(() => Math.random() - 0.5)
}

console.log(shuffleArray(myArray))