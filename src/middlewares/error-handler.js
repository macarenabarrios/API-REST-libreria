const errorHandlerMiddleware = (err, req, res, next) => {
    const errStatus = 500;
    const errMsg = err.message;
    res.status(errStatus).send({
        message: errMsg
    });
};

module.exports = { errorHandlerMiddleware }