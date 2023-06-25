const errorHandlerMiddleware = (err, req, res, next) => {
    // A todos los errores le clava 500, hay que diferenciar por codigo de error.
    const errStatus = 500;
    //const errStatus = err.statusCode;
    const errMsg = err.message;
    res.status(errStatus).send({
        message: errMsg
    });
};

module.exports = { errorHandlerMiddleware }