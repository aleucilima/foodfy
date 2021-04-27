const express = require('express')
const nunjucks = require('nunjucks')

const app = express()
const recipe = require('./data')

app.use(express.static('public'))

app.set('view engine', "njk")

nunjucks.configure('views', {
    express: app,
    autoescape: false,
    noCache: true
})

app.get('/', (request, response) => {
    return response.render('index', { items: recipe })
})

app.get('/sobre', (request, response) => {
    return response.render('sobre')
})

app.get('/recipe/:index', (request, response) => {
    const recipeIndex = request.params.index - 1

    return response.render('recipe', {items: recipe[recipeIndex]})
})

app.listen(3333)