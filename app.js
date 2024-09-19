const express = require('express');
const app = express();
const port = 4200;

app.get('/', (req, res) => {
  res.send('Hola World 2.0!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});