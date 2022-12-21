var express = require('express');
var postController = require('../controllers/postController')
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.all('/add-new-post', postController.addNewPost);
router.get('/get-all-post', postController.getAllPost);

module.exports = router;
