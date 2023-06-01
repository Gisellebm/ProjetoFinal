// para criar tabela
exports.up = knex => knex.schema.createTable("dishes", table => {
    table.increments("id");
    table.text("name").notNullable();
    table.text("description").notNullable();
    table.text("category").notNullable();
    table.varchar("image");
    table.decimal("price",10,2)
});

// para deletar tabela
exports.down = knex => knex.schema.dropTable("dishes");