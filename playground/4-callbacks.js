const geocode = (address, callback) => {
    setTimeout(() => {
        const data = {
            latitude: 0,
            longitude: 0
        }
        callback(data)
    }, 2000);
}

geocode('New add', (data) => {
    console.log(data)
})


// Hands on

const add = (a,b,callback) => {
    setTimeout(() => {
        const sum = a+b
        callback(sum)
    }, 2000);
}

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})