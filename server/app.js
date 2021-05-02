if (!process.env.NODE_ENV || process.env.NODE_ENV === 'dev' || process.env.NODE_ENV === 'test') require('dotenv').config();

const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

const routes = require('./routes');
const errorHandler = require('./middlewares/error_handler');

app.use(cors());
app.use(morgan());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', routes);
app.use(errorHandler);

app.listen(port, () => console.log(`you listen on port ${port}`));
