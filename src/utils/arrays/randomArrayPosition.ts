const myArray = [1, 6 , 7, 5]

function randomArrayPosition(myArray: any[]){
    return Math.floor(Math.random() * myArray.length)
}
console.log(randomArrayPosition(myArray))
