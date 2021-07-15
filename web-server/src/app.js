const express = require('express')
const app = express();

app.get('', (req, res) => {
    res.send('<h1>Hello Express!</h1>')
})

app.get('/about', (req, res) => {
    res.send([{
        name: 'Rythem',
        age: 25
    }, {
        name: 'Vatsala',
        age: 35
    }])
})

app.get('/help', (req, res) => {
    res.send('<h2>Help Page</h2>')
})

app.get('/weather', (req, res) => {
    res.send({
        location: 'Delhi',
        forcast: 50
    })
})

app.listen(3000, ()=>{
    console.log('Server started at port no 3000');
});