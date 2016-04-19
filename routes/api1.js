let express = require('express');
let router = express.Router();


// START: Setup Step 2
let bookshelfApi = require('bookshelf-api');
let path = require('path');
let configuredApi = bookshelfApi({
	path: path.join(__dirname, '..', 'models')
});

router.use('/', configuredApi);
// END: Setup Step 2
// router.get('/products', function(req, res, next) {

// });

module.exports = router;
