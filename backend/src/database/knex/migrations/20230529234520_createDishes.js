// para criar tabela
exports.up = knex => knex.schema.createTable("dishes", table => {
    table.increments("id");
    table.text("name");
    table.text("description");
    table.text("category");
    table.varchar("image");
    table.decimal("price",10,2)
});

// para deletar tabela
exports.down = knex => knex.schema.dropTable("dishes");