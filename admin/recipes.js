const fs = require('fs')
const data = require('../data.json')

exports.index = (request, response) => {
    return response.render('recipes/index')
}

exports.create = (request, response) => {
    return response.render('recipes/create')
}

exports.post = (request, response) => {
    const recipeCreate = request.body
    let index = 0

    const foundRecipe = data.recipes.find((recipe, foundIndex) =>{
        if(recipe[foundIndex] == recipeCreate[foundIndex]) {
            index = foundIndex
            return true
        }
    })

    if(foundRecipe) return response.send("Recipe already exists")
    
    const recipe = { 
        ...request.body
    }

    data.recipes[index] = recipe
  
    fs.writeFile('data.json', JSON.stringify(data, null, 2), (err) => {
        if(err) return response.send('Write file error!')

        return response.redirect('admin/recipes')
    })
}