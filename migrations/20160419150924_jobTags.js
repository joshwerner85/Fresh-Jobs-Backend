
exports.up = function(knex, Promise) {
return knex.schema.createTable('jobTags', function(table) {
		table.increments('id').unsigned().primary();
		table.integer('jobId').notNull();
		table.integer('tagId').notNull();
		
		table.dateTime('createdAt').notNull();
		table.dateTime('updatedAt').nullable();
		table.dateTime('deletedAt').nullable();

		
		
	});
};

exports.down = function(knex, Promise) {
  
};
