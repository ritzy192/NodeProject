const request = require("request");

const forecast = (lat, long, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=3b01490a702d8d41d46cba938459868c&query=' + long + ',' + lat

    request({url: url, json: true}, (error, response) => {
        if(error)
        {
            callback('Unabke to connect to weather service')
        }
        else if(response.body.error)
        {
            callback('Unable to find weather location')
        }
        else
        {
            
            callback(undefined,response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature +' degrees out. It feels like ' + response.body.current.feelslike + ' degrees out.')
        }
    })
}

module.exports = forecast