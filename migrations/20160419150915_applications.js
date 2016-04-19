
exports.up = function(knex, Promise) {
  return knex.schema.createTable('applications', function(table) {
		table.increments('id').unsigned().primary();

		table.text('resumeUrl').notNull();
		table.integer('userId').notNull();
		
		table.dateTime('createdAt').notNull();
		table.dateTime('updatedAt').nullable();
		table.dateTime('deletedAt').nullable();

		
		
		
	});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('applications');
};
