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

app.listen(3333)