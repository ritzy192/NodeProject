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

// const request = require('request')
// const request = require('request')
// const geoCode = (location, callback) => {
//     const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(location) + '.json?access_token=pk.eyJ1Ijoicml0enkxOTIiLCJhIjoiY2tnZGs1YWlmMDBseTJwcGZyYXE3bWs4NyJ9.DMsirETTR4JOlIdu8dmizw&limit=1'
//     console.log(url);
//     request({url: url, json: true}, (error, response) => {
//         if(error) {
//             callback('Unable to connect location services!')
//         }
//         else if(response.body.message)
//             callback('Please pass a valid location')
//         else if(response.body.features.length === 0) {
//             callback('Unable to find location. try another search.')
//         }
//         else{
//             callback(undefined, {
//                 latitude: response.body.features[0].center[1],
//                 longitude: response.body.features[0].center[0],
//                 location: response.body.features[0].place_name
//             })
//         }
//     })
// }



// geoCode('Dehradun',(error, geoCodeData) => {
//     if(error)
//         return console.log(error)
//     console.log(geoCodeData)
//     forcast(geoCodeData.latitude, geoCodeData.longitude, (error, forecasrData) => {
//         if(error)
//             return console.log(error)
//         console.log(geoCodeData.location)
//         console.log(forecasrData)
//     })
// })

// const forcast = (lat, long, callback) => {
//     const url = 'http://api.weatherstack.com/current?access_key=3b01490a702d8d41d46cba938459868c&query=' + lat + ',' + long

//     request({url: url, json: true}, (error, response) => {
//         if(error)
//         {
//             callback('Unabke to connect to weather service')
//         }
//         else if(response.body.error)
//         {
//             callback('Unable to find weather location')
//         }
//         else
//         {
//             callback(undefined,response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature +' degrees out. It feels like ' + response.body.current.feelslike + ' degrees out.')
//         }
//     })
// }