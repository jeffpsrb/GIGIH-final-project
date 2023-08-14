class SendResponse {
  static success(res, data, statusCode = 200) {
    if (data === 204) {
      res.status(204).send();
    } else {
      let response;
      if (data instanceof Array) {
        response = { items: data };
      } else {
        response = { item: data };
      }
      res.status(statusCode).json(response);
    }
  }

  static error(res, err) {
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
      error: {
        type: err.name,
        message: err.message,
      },
    });
  }
}

export default SendResponse;
