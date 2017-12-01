require('env2')('config.env');
const express = require('express');
const path = require('path');
const app = express();

// setup the app middlware
require('./middlewares/appMiddlware')(app, express);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'public', 'index.html'));
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
  next();
});

app.listen(process.env.PORT || 3000, () => {
  console.log('server runs on 3000');
});
