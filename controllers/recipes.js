const fs = require('fs')
const data = require('../data.json')

exports.index = (request, response) => {
    return response.render('recipes/index', { recipes:data.recipes})
}

exports.create = (request, response) => {
    return response.render('recipes/create')
}

exports.post = (request, response) => {
   const keys = Object.keys(request.body)

   for(key of keys) {
       if (request.body[key] == '')
        return response.send('Please, fill all fields')
   }

   let id = 1
   const lastRecipe = data.recipes[data.recipes.length - 1]

   if(lastRecipe) {
       id = lastRecipe.id + 1
   }

   data.recipes.push({
       id,
       ...request.body
   })

   fs.writeFile('data.json', JSON.stringify(data, null, 2), (err) => {
       if (err) return response.send('Write file error!')

       return response.redirect('/admin/recipes')
   })

}

exports.show = (request, response) => {
    const { id } = request.params

    const foundRecipe = data.recipes.find((recipe) => recipe.id == id)

    if (!foundRecipe) return response.send('Recipe not exist')

    const recipe = {
        ...foundRecipe,
    }

    return response.render('recipes/show', { recipe })
}

exports.edit = (request, response) => {
    const { id } = request.params

    const foundRecipe = data.recipes.find((recipe) => recipe.id == id)

    if (!foundRecipe) return response.send('Recipe not exist')

    
    const recipe = {
        ...foundRecipe,
    }

    return response.render('recipes/edit', { recipe })
}