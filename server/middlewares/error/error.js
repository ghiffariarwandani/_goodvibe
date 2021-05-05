module.exports = {

  errorHandling(error, req, res, next) {
    let status = null;
    let message = {};

    if (error.code === 404) {
      status = 404;
      message.error = 'Data not found';
    } else if (error.name === 'ValidationError' || error.name === 'MongoError') {
      status = 400;
      message.error = error.message.split('failed: ')[1]
    } else if (typeof error === 'string') {
      status = 400;
      message.error = error.message;
    } else {
      status = 500;
      message.error = 'Internal server error'
    }

    return res.status(status).json(message);
  }
}