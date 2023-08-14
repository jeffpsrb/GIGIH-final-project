class ResponseError extends Error {
  constructor(message, statusCode = 500) {
    super(message);
    this.name = 'ResponseError';
    this.statusCode = statusCode;
  }
}

export default ResponseError;
