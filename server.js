const express = require('express');
const randomstring = require('randomstring');

const app = express();
const port = 5500;


// Rota para servir o arquivo HTML
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
// Rota para gerar uma senha aleatória
app.get('/gerar-senha', (req, res) => {
  const senha = randomstring.generate({
    length: 8, // Defina o tamanho da senha aqui (neste exemplo, é 10)
    charset: 'alphanumeric'
  });

  res.send(senha);
});

// Iniciar o servidor na porta especificada
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
