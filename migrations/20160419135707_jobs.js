
exports.up = function(knex, Promise) {
  return knex.schema.createTable('jobs', function(table) {
		table.increments('id').unsigned().primary();
		
		table.string('title').notNull();
		table.text('description').notNull();
		table.integer('minSalary').nullable();
		table.integer('maxSalary').nullable();
		table.integer('companyId').notNull();
		table.integer('userId').notNull();

		table.dateTime('createdAt').notNull();
		table.dateTime('updatedAt').nullable();
		table.dateTime('deletedAt').nullable();

		

	});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('jobs');
};


