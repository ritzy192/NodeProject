
const path = require('path')
const express = require('express')
const app = express();

console.log(__dirname)
console.log(path.join(__dirname, '../public/about.html'))

app.use(express.static(path.join(__dirname, '../public')))

app.get('/weather', (req, res) => {
    res.send({
        location: 'Delhi',
        forcast: 50
    })
})

app.listen(3000, ()=>{
    console.log('Server started at port no 3000');
});