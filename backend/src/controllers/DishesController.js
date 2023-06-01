const knex = require('../database/knex');

class DishesController {
    async create(req, res) {
        const { name, description, category, ingredients, price, image } = req.body;

        const [dish_id] = await knex("dishes").insert({
            name,
            description,
            category,
            price,
            image
        });

        const ingredientsInsert = ingredients.map(produto => {
            return {
                dish_id,
                produto
            }
        })
        await knex("ingredients").insert(ingredientsInsert);
        
        return res.json();    
    }

    async show(req, res) {
        const { id } = req.params;
        const dish = await knex("dishes").where({ id }).first();
        const ingredients = await knex("ingredients").where({ dish_id: id }).orderBy("produto");
        return res.json({
            ...dish,
            ingredients
        });
    }

    async delete(req, res) {
        const { id } = req.params;
        await knex("dishes").where({ id }).delete();
        return res.json();
    }

    async index(req, res) {

        const { name, ingredients } = req.query;

        let dishes;

        if(ingredients) {
            const filterIngredients = ingredients.split(",").map(ingredient => ingredient.trim());
            
            dishes = await knex("ingredients")
            .select([
                "dishes.id",
                "dishes.name",
                "dishes.description",
                "dishes.category",
                "dishes.price",
                "dishes.image"
            ])
            .whereLike("dishes.name", `%${name}%`)
            .whereIn("produto", filterIngredients)
            .innerJoin("dishes", "ingredients.dish_id", "dishes.id")
            .groupBy("dishes.id")
            .orderBy("dishes.name");

        } else {
            dishes = await knex("dishes")
            .select("*")
            .whereLike("name", `%${name}%`)
            .orderBy("name");
        }

        const dishesIngredients = await knex("ingredients")
        const dishesWithIngredients = dishes.map(dish => {
            const dishIngredients = dishesIngredients.filter(ingredient => ingredient.dish_id === dish.id);
            return {
                ...dish,
                ingredients: dishIngredients
            }
        })


        return res.json(dishesWithIngredients);
    }
}

module.exports = DishesController;