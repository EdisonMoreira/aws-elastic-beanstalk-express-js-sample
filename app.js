const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Saudações de Aprender Sempre!'));

app.listen(port);
console.log(`App rodando em http://localhost:${port}`);
