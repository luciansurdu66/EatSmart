const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');

router.post('/add', recipeController.addRecipe);

router.delete('/delete/:id', recipeController.deleteRecipe);

router.get('/', recipeController.getRecipes);

module.exports = router;