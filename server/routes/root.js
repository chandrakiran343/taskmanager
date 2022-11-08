const path = require('path');
const express = require('express')

const router = express.Router();
// const app = express();

router.get('/', (req, res, next) => {
    res.send('<h1>Hello from Express!</h1>');
});

router.post("/:id", (req, res, next) => {
    console.log(666)
    console.log(req.body, req.params );
    res.send("<h1>POST request to the homepage</h1>");
});

module.exports = router;