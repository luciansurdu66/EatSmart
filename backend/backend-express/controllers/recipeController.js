const db = require('../models/index');
const axios = require('axios');

exports.addRecipe = async (req, res) => {
    console.log(req.body);
    const name = req.body.name;
    const ingredients = req.body.ingredients;
    const image = req.body.image;

    try {
        const recipe = await db.Recipe.create({name, ingredients, image});
        res.status(200).json({recipe, message: 'Recipe created successfully'});
    } catch (err) {
        console.log(err);
        res.status(400).json({err, message: 'Recipe could not be created'});
    }

}

exports.deleteRecipe = async (req, res) => {
    const id = req.params.id;

    try {
        const recipe = await db.Recipe.destroy({where: {id}});
        res.status(200).json({recipe, message: 'Recipe deleted successfully'});
    } catch (err) {
        console.log(err);
        res.status(400).json({err, message: 'Recipe could not be deleted'});
    }
}

exports.getRecipes = async (req, res) => {
    try {
        const recipes = await db.Recipe.findAll();
        res.status(200).json({recipes});
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }

}

exports.searchRecipesByIngredients = async (req, res) => {
    const ingredients = req.query.ingredients; 
    const spoonacularEndpoint = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${encodeURIComponent(ingredients)}&apiKey='547fbf1b9fa94aba8ee5aa221c02d35a'`;

    try {
        const response = await axios.get(spoonacularEndpoint);
        res.status(200).json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching recipes from Spoonacular');
    }
}


