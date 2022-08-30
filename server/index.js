const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 1000;

dotenv.config();
app.use(cors());
app.use(express.json());

app.use('/admin', require('./routes/admin'));
app.use('/articles', require('./routes/articles'));

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
