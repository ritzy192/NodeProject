const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoicml0enkxOTIiLCJhIjoiY2tnZGs1YWlmMDBseTJwcGZyYXE3bWs4NyJ9.DMsirETTR4JOlIdu8dmizw&limit=1'

    request({url: url, json: true}, (error, response) => {
        if(error) {
            callback('Unable to connect location services!')
        }
        else if(response.body.features.length === 0) {
            callback('Unable to find location. try another search.')
        }
        else{
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
        //console.log(response)
    })
}

module.exports = geocode