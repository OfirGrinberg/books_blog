const { myQuery } = require('../DB/config');

const helperFunc = async (res, sql, statusCode = 200) => {
	try {
		const result = await myQuery(sql);
		res.status(statusCode).send(result);
	} catch (err) {
		res.status(500).send(err);
	}
};

module.exports = { helperFunc };
