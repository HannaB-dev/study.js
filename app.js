const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const mainRoutes = require('./routes/main');
const redirectRoutes = require('./routes/redirect');
const testRoutes = require('./routes/test');

app.use(bodyParser.urlencoded({extended: false}));

app.use(mainRoutes);
app.use(redirectRoutes);
app.use(testRoutes);

app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>');
});

app.listen(3000);
