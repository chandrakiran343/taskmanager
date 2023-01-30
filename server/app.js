const { startDb } = require("./db/connect");
const path = require('path');
require('dotenv').config();
const express = require('express');
const tasks = require('./routes/tasks');
const app = express();
const cors = require('cors');
const port = 5505;
app.use(cors());
app.use(express.json())

app.use("/tasks", tasks);


app.use("/*", (req, res, next) => {
    res.send("<h1>404 Not Found</h1>");
});     


const start = async () => {
    try {
        await (await startDb(process.env.MONGO_URI));
        app.listen(port, console.log(`Server running on port ${port}`));
    } catch (error) {
        console.log(error);
    }
}
start();
