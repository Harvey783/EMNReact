const express = require('express');
require('./services/passport');
const routes = require('./routes/routes');
const mongoose = require('mongoose');
const keys = require('./config/keys');

mongoose.connect(keys.mongoURI, { useNewUrlParser: true });

const app = express();
routes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
