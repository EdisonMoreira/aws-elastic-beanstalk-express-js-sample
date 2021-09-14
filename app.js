const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Saudações de Aprender Sempre!'));

app.get('/', (req, res) => res.send('Teste de Pipeline!'));

app.listen(port);
console.log(`App rodando e testando em http://localhost:${port}`);
