const express = require('express')
const nunjucks = require('nunjucks')

const app = express()

app.use(express.static('public'))

nunjucks.configure('views', {
    express:app
})

app.listen(3333)