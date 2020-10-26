const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=3b01490a702d8d41d46cba938459868c&query='
const locationUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'
const locationUrlAccessToken = 'access_token=pk.eyJ1Ijoicml0enkxOTIiLCJhIjoiY2tnZGs1YWlmMDBseTJwcGZyYXE3bWs4NyJ9.DMsirETTR4JOlIdu8dmizw&limit=1'
// request( {url: url, json: true }, (error, response) => {
//     if(error)
//     {
//         console.log('Unabke to connect to weather service')
//     }
//     else if(response.body.error)
//     {
//         console.log('Unable to find weather location')
//     }
//     else
//     {
//         const data = response.body.current
//         console.log(data.weather_descriptions[0] + '. It is currently ' + data.temperature +' degrees out. It feels like ' + data.feelslike + ' degrees out.')
//     }
// })

const locations = ['Delhi','Dehradun','Jammu','Bareilly']



const currentWeather = (place) => {
    const location = locationUrl + place + '.json?' + locationUrlAccessToken
    request({ url: location, json: true}, (error, response) => {
        if(error)
        {
            console.log('Unable to connect to location service')
        }
        else if(response.body.features.length == 0)
        {
            console.log('Unable to find geocode of the location')
        }
        else
        {
            const data = response.body.features
            longitude = data[0].center[0]
            latitude = data[0].center[1]
            console.log('Latitude is ' + latitude)
            console.log('Longitude is ' + longitude)

            weatherUrl = url + latitude + ',' + longitude
            request( {url: weatherUrl, json: true }, (error, response) => {
                if(error)
                {
                    console.log('Unabke to connect to weather service')
                }
                else if(response.body.error)
                {
                    console.log('Unable to find current weather for the location provided.')
                }
                else
                {
                    const data = response.body.current
                    console.log(place + ' is ' + data.weather_descriptions[0] + '. It is currently ' + data.temperature +' degrees out. It feels like ' + data.feelslike + ' degrees out.')
                }
            })
        }
    })
}

locations.forEach(place => {
    currentWeather(place)
});