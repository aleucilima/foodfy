const express = require('express')
const nunjucks = require('nunjucks')

const app = express()
const recipe = require('./data')
const recipes = [ recipe ]

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

app.get('/recipe', (request, response) => {
    const { id } = request.params

    const recipe = recipes.find(recipe => recipe.id === id)
    
    if(!recipe){
        return response.status(404).send('Not Found')
    }

    return response.render('recipe', { item: recipe })
})

app.listen(3333)