const { startDb } = require("./db/connect");
const path = require('path');
require('dotenv').config();
const express = require('express');
const tasks = require('./routes/tasks');
const app = express();
const { notfound, errorMidWare } = require('./middleware/error');
const cors = require('cors');
const port = process.env.PORT || 5505;
app.use(cors());
app.use(express.json())

app.use("/tasks", tasks);
app.use(errorMidWare);
app.use(notfound);     


const start = async () => {
    try {
        (await startDb(process.env.MONGO_URI));
        app.listen(port, console.log(`Server running on port ${port}`));
    } catch (error) {
        console.log(error);
    }
}
start();
