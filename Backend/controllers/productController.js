const fs = require('fs')

const getProducts = async(req, res) => {
    fs.readFile('database/products.json', 'utf8', (err, data) => {
        const d = JSON.parse(data)
        console.log(JSON.stringify(d))
        res.send(`I am a product in controller ${JSON.stringify(d?.products.tablet)}`)
    })
}
module.exports = {
    getProducts
}