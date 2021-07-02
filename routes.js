const express = require('express')
const recipe = require('./data')
const recipes = require('./controllers/recipes')

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

routes.get('/admin/recipes', recipes.index)
routes.get('/admin/recipes/create', recipes.create)
routes.post('/admin/recipes', recipes.post)
routes.get('/admin/recipes/:id', recipes.show)
routes.get('/admin/recipes/:id/edit', recipes.edit)

module.exports = routes