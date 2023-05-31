const knex = require('../database/knex');

class DishesController {
    async create(req, res) {
        const { title, description, category, dish_ingredients, price, image } = req.body;

        const [dish_id] = await knex("dishes").insert({
            title,
            description,
            category,
            price,
            image
        });

        const ingredientsInsert = ingredients.map(ingredient => {
            return {
                dish_id,
                ingredient_id: ingredient
            }
        })
        await knex("ingredients").insert(ingredientsInsert);

        
    }
}

module.exports = DishesController();