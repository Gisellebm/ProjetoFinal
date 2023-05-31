exports.up = knex => knex.schema.createTable("dish_ingredients", table => {
    table.integer("dish_id").references("id").inTable("dishes");
    table.integer("ingredient_id").references("id").inTable("ingredients");
  });
    
  
  exports.down = knex => knex.schema.dropTable("dish_ingredients");
