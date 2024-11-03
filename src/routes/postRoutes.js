const express = require('express');
const { validateTopic } = require('../middleware/validator');
const postController = require('../controllers/postController');

const router = express.Router();

router.post('/generateText', validateTopic, postController.generateText);
router.get('/fonts', postController.getFonts);

module.exports = router;