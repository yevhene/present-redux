const express = require('express');
const app = express();

app.use(express.static('presentation'));

const port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log(`App listening ${port} port`);
});
