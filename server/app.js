if (!process.env.NODE_ENV || process.env.NODE_ENV === 'dev' || process.env.NODE_ENV === 'test') require('dotenv').config();

const cors = require('cors');
const morgan = require('morgan');
const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
// const errorHandler = require('./middlewares/error_handler');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect('mongodb://localhost:27017/_goodvibe', { useNewUrlParser: true }, (error) => {
  if (error) {
    console.log(`ops somthing went wrong, here the error ${error}`)
  } else {
    console.log('success connection to mongoose')
  }
});

app.use('/', routes);
// app.use(errorHandler);

app.listen(port, () => console.log(`you listen on port ${port}`));