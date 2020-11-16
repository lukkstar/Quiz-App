const express = require('express');
const app = express();
const path = require('path');

var mongodb = require('./config/db');

app.use(express.json());

app.use('/api/question', require('./routes/questions'));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:8080`);
});
