
exports.up = function(knex, Promise) {
  return knex.schema.createTable('tags', function(table) {
		table.increments('id').unsigned().primary();

		table.string('name').nullable();
		
		table.dateTime('createdAt').notNull();
		table.dateTime('updatedAt').nullable();
		table.dateTime('deletedAt').nullable();

		
		
		
	});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tags');
};
