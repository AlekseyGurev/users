const express = require('express');
const path = require('path');
const app = express();
const port = 5174;

app.use(express.static('frontend/dist'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve('./frontend/dist/index.html'));
});

app.get('/frontend/src/assets/:name', function (req, res) {
  const { name } = req.params;
  res.sendFile(path.resolve(`./frontend/src/assets/${name}`));
});

app.listen(port, () =>
  console.log(`server has been started on port ${port} ...`)
);
