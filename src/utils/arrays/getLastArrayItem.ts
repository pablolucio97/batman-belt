const myArray = [1, 6 , 7, 5]

//returns the last item from the array

function getLastItem(myArray: any[]){
    return myArray.slice(-1)[0]
}

console.log(getLastItem(myArray))