const express = require('express');

const app = express();
app.get('/', (_req, res) => res.send('Hello Holberton School!'));
app.listen(1245);
module.exports = app;
