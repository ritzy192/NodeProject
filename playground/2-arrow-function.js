//Type 1: simple arrow function
const square = (x) => {
    return x*x
}
console.log(square(4))

//Type 2: short hand arrow function
const add = (x) => x+x
console.log(add(2))

//Note: Arrow function do not bind to their own 'this' value.
const event = {
    name: 'Birthday Party',
    guestList: ['aman', 'raman', 'karan', 'suman'],
    //this is ES6 method defination syntax
    printGuestList() {   
        console.log('guest list for ' + this.name)
        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
        //Note: Arrow function do not bind to their own 'this' value.
        //They access the 'this' value in the context in which they are created.
    }
}
event.printGuestList()