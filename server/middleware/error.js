const notfound = (req, res, next) => {
    res.status(404).send("Route does not exist");
}
const {CustomError} = require('./customError');
const errorMidWare = (err, req, res, next) => {
    if (err instanceof CustomError)
        return res.status(err.status).json({ message: err.message });
    
    res.status(500).json({ message: "Something went Very Wrong!!" });
}
module.exports = { notfound, errorMidWare };