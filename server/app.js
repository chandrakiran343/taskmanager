const path = require('path');
const express = require('express')
const root = require('./routes/root');
const app = express();

app.use("/", root);


app.use("/*", (req, res, next) => {
    res.send("<h1>404 Not Found</h1>");
    });

app.listen(4000);
