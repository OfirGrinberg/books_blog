const router = require('express').Router();
const { helperFunc } = require('../helpers/helperFunc');
let sql;
// Get all articles:
router.get('/', (req, res) => {
	helperFunc(res, 'SELECT * FROM articles');
});
// Get specific article:
router.get('/:id', (req, res) => {
	sql = `SELECT * FROM articles WHERE id = ${req.params.id}`;
	helperFunc(res, sql);
});
// New article:
router.post('/new', (req, res) => {
	const { title, author, summary, review, image } = req.body;
	sql = `INSERT INTO articles (title, author, summary, review, image) 
   VALUES ("${title}", "${author}", "${summary}", "${review}", "${image}")`;
	helperFunc(res, sql, 201);
});
// Edit article:
router.put('/edit/:id', (req, res) => {
	const { id } = req.params;
	const { title, author, summary, review, image } = req.body;
	sql = `UPDATE articles
          SET title = "${title}",
              author = "${author}",
              summary = "${summary}", 
              review = "${review}", 
              image = "${image}"
          WHERE id = ${id}`;
	helperFunc(res, sql);
});
// Delete article:
router.delete('/remove/:id', (req, res) => {
	sql = `DELETE FROM articles WHERE id = ${req.params.id}`;
	helperFunc(res, sql);
});

module.exports = router;
