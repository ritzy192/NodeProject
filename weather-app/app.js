const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=3b01490a702d8d41d46cba938459868c&query=Dehradun'

request( {url: url, json: true }, (error, response) => {
    const data = response.body.current
    console.log(data.weather_descriptions[0] + '. It is currently ' + data.temperature +' degrees out. It feels like ' + data.feelslike + ' degrees out.')
})