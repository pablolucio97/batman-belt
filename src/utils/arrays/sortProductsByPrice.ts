type Product = {
    description: String;
    price: Number
}

const products = [

    {
        description: 'Smartphone',
        price: 1326.99
    },
    
    {
        description: 'Headphone',
        price: 125.99
    },
]

function sortProductsByPrice(products: Product[]){
    return products.sort((a, b) => {
        if(a.price > b.price) return 1
        if(a.price < b.price) return -1
        return 0
    }) 
}

console.log(sortProductsByPrice(products))