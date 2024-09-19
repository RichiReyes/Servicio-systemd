const express = require('express');
const app = express();
const port = 4200;

app.get('/', (req, res) => {
  res.send('New Commit - Other Computer!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});