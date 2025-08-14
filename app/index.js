const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const secret = process.env.SECRET_MESSAGE || 'shh';

app.get('/', (req, res) => {
  res.send(`hello_world ${secret}\n`);
});

app.get('/healthz', (req, res) => {
  res.status(200).send('ok\n');
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});