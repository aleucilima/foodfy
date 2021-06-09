const express = require('express')
const recipe = require('./data')

const routes = express.Router()

routes.get('/', (request, response) => {
    return response.render('index', { items: recipe })
})

routes.get('/sobre', (request, response) => {
    return response.render('sobre')
})

routes.get('/recipe/:index', (request, response) => {
    const recipeIndex = request.params.index - 1

    return response.render('recipe', {items: recipe[recipeIndex]})
})

module.exports = routes