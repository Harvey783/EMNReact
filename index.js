const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const routes = require('./routes/routes');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI, { useNewUrlParser: true });

const app = express();
routes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
