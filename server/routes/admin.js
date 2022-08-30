const router = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { myQuery } = require('../DB/config');
const { helperFunc } = require('../helpers/helperFunc');

router.post('/login', async (req, res) => {
	const { username, password } = req.body;
	try {
		if (!username || !password) {
			return res.status(400).send('Missing some info.');
		}
		const sql = `SELECT * FROM users WHERE username = "${username}"`;
		let user = await myQuery(sql);
		user = user[0];
		if (!user) return res.status(404).send('User not found.');
		const match = await bcrypt.compare(password, user.password);
		if (!match) return res.status(403).send('Wrong password.');
		jwt.sign(
			{ ...user, password: '*********' },
			process.env.JWT_SECRET,
			{ expiresIn: '1h' },
			(err, token) => {
				err ? res.status(500).send(err) : res.status(201).send({ token });
			}
		);
	} catch (err) {
		res.status(500).send(err);
	}
});

router.post('/register', async (req, res) => {
	let { username, password } = req.body;
	try {
		password = await bcrypt.hash(password, 10);
		sql = `INSERT INTO users (username, password) VALUES ("${username}", "${password}")`;
		helperFunc(res, sql, 201);
	} catch (err) {
		res.status(500).send(err);
	}
});

module.exports = router;
