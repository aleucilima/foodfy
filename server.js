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

app.get('/recipe/:id', (request, response) => {
    const recipes = [ recipe ]
    const { id } = request.params
    
    const recipeId = recipes.find((recipeId) => recipe.id === recipe.id)

    if(!recipeId) {
        return response.send('not found')
    }
    return response.render('recipe', { items: recipe })
})

app.listen(3333)