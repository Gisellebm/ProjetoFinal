// para criar tabela
exports.up = knex => knex.schema.createTable("dishes", table => {
    table.increments("id").primary();
    table.text("name");
    table.text("description");
    table.varchar("image");
    table.decimal("price",10,2).NotNullable();
});

// para deletar tabela
exports.down = knex => knex.schema.dropTable("dishes");