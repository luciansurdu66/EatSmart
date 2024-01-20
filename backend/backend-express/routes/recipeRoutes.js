const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');

router.post('/add', recipeController.addRecipe);

router.delete('/delete/:id', recipeController.deleteRecipe);

router.get('/', recipeController.getRecipes);

router.get('/searchByIngredients', recipeController.searchRecipesByIngredients);

module.exports = router;