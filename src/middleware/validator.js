exports.validateTopic = (req, res, next) => {
    const { topic } = req.body;
    
    if (!topic || typeof topic !== 'string' || topic.trim().length === 0) {
      const error = new Error('Topic is required');
      error.isValidationError = true;
      return next(error);
    }
  
    req.body.topic = topic.trim();
    next();
  };