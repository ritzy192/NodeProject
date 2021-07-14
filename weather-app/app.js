const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]
if(!address)
    console.log('Please provide an address to get weather data');
else{
    geocode(address,(error, geoCodeData) => {
        if(error) {
            return console.log(error)
        }
        
        forecast(geoCodeData.latitude, geoCodeData.longitude, (error, forecasrData) => {
            if(error) {
                return console.log(error)
            }
            console.log(geoCodeData.location)
            console.log(forecasrData)
          })
    })
}

