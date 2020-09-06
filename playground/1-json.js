const fs = require('fs')
const bufferData = fs.readFileSync('1-json.json')
const data = JSON.parse(bufferData.toString())
data.age = 24
const updatedData = JSON.stringify(data)
fs.writeFileSync('1-json.json',updatedData)
