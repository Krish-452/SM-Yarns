const express = require('express');
const router = express.Router();
const { handleContactSubmission } = require('../controllers/contactController');
const { contactValidation, validate } = require('../middleware/validate');
const { contactLimiter } = require('../middleware/rateLimiter');

router.post('/', contactLimiter, contactValidation, validate, handleContactSubmission);

module.exports = router;
