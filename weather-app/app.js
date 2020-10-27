const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

geocode('Delhi',(error, geoCodeData) => {
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

