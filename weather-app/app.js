const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=3b01490a702d8d41d46cba938459868c&query=Dehradun'

request( {url: url }, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.current)
})