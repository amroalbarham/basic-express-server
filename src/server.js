'use strict';

const express = require('express');
const app = express();
const errorHandler = require('./error-handler/404');
const notFoundHandler = require('./error-handler/500');
const logger = require('./middleware/logger');
const valdidator = require('./middleware/valdidator');

app.get('/person',valdidator,(req,res)=>{
  console.log(req.query.name);
  const name =req.query.name;
  res.status(200).json({ name: name });

});
app.use('*',notFoundHandler);
app.use(errorHandler);
module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, () => console.log(`Listening on ${port}`));
  },
};
