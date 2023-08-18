const globalErrorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
      error: "Internal Server Error"
    });
  };

  const notFoundHandler = (req, res, next) => {
    res.status(404).json({
      error: "Not Found"
    });
  };

  module.exports={
    notFoundHandler,
    globalErrorHandler
  }