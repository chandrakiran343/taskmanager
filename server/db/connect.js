const mongoose = require('mongoose');


const connectString = "";

const startDb = (url) => {
    return mongoose.connect(url)
}

module.exports = { startDb };