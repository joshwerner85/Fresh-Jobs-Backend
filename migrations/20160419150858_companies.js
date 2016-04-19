
exports.up = function(knex, Promise) {
  return knex.schema.createTable('companies', function(table) {
		table.increments('id').unsigned().primary();
		
		table.string('name').notNull();
		table.string('headquarters').notNull();
		table.string('description').notNull();
		table.integer('userId').notNull();

		table.dateTime('createdAt').notNull();
		table.dateTime('updatedAt').nullable();
		table.dateTime('deletedAt').nullable();

		
		
		
		
	});
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('companies');

};
