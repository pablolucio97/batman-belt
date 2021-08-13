type User = {
    name: String;
    age: Number
}

const users = [
    {
        name: 'Pablo',
        age: 26
    },
    
    {
        name: 'Camila',
        age: 25
    },
]

function sortUsersByName(users: User[]){
    return users.sort((a,b) => {
        if(a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) return 1
        if(a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) return -1
        return 0
    } )
}