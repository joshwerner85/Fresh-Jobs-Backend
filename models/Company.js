module.exports = bookshelf.model('Company', {
	tableName: 'Companies',
	hasTimestamps: ['createdAt', 'updatedAt', 'deletedAt']
});