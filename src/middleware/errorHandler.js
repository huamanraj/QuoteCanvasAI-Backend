const logger = require('../utils/logger');

exports.errorHandler = (err, req, res, next) => {
  logger.error(err.stack);

  if (err.isValidationError) {
    return res.status(400).json({ error: err.message });
  }

  if (err.isGeminiError) {
    return res.status(503).json({ error: 'External service unavailable' });
  }

  return res.status(500).json({ error: 'Internal server error' });
};