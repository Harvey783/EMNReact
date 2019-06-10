const express = require('express');
require('./services/passport');
const routes = require('./routes/routes');

const app = express();
routes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
