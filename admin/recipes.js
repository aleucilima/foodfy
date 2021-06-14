const fs = require('fs')

exports.index = (request, response) => {
    return response.render('recipes/create')
}

exports.post = (request, response) => {
    
}