const db = require('../models/index');


exports.addIngredient = async (req, res) => {
    console.log(req.body);
    const name = req.body.name;
    const quantity = req.body.quantity;
    const unit = req.body.unit;
    const description = req.body.description;

    try {
        const ingredient = await db.Ingredient.create({name, quantity, unit, description});
        res.status(200).json({ingredient, message: 'Ingredient created successfully'});
    } catch (err) {
        console.log(err);
        res.status(400).json({err, message: 'Ingredient could not be created'});
    }
}

exports.deleteIngredient = async (req, res) => {
    const id = req.params.id;

    try {
        const ingredient = await db.Ingredient.destroy({where: {id}});
        res.status(200).json({ingredient, message: 'Ingredient deleted successfully'});
    } catch (err) {
        console.log(err);
        res.status(400).json({err, message: 'Ingredient could not be deleted'});
    }
}

exports.getIngredients = async (req, res) => {
    try {
        const ingredients = await db.Ingredient.findAll();
        res.status(200).json({ingredients});
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
}