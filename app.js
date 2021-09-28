const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Full Pipeline test after creating DevOps'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
