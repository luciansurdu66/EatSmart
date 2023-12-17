const express = require('express');
const router = express.Router();
const ingredientController = require('../controllers/ingredientController');

router.post('/add', ingredientController.addIngredient);

router.delete('/delete/:id', ingredientController.deleteIngredient);

router.get('/', ingredientController.getIngredients);

module.exports = router;