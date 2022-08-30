const { createConnection } = require('mysql');

const connection = createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'blog',
});

connection.connect(err => {
	err ? console.log(err) : console.log('Connected to mysql');
});

const myQuery = q =>
	new Promise((resolve, reject) =>
		connection.query(q, (err, results) =>
			err ? reject(err) : resolve(results)
		)
	);

module.exports = { myQuery };
