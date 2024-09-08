exports.success = function (req, res, msg = '', status = 200){
    res.status(status).send({
        status: status,
        body: msg
    });
}

exports.error = function (req, res, msg = 'Internal Error', status = 500){
    res.status(status).send({
        status: status,
        body: msg
    });
}