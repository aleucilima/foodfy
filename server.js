const express = require('express')
const nunjucks = require('nunjucks')

const app = express()
const recipe = require('./data')
const recipes = [...recipe ]


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

app.get('/recipe/:index', (request, response) => {
    
    const recipeIndex = request.params.index

    const recipe = recipes.find((recipe) => recipe[recipeIndex] === recipeIndex)
    console.log(recipes[recipeIndex])
    return response.render('recipe', { item: recipe })
})

app.listen(3333)