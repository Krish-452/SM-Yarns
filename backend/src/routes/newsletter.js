const express = require('express');
const router = express.Router();
const { handleNewsletterSubscription } = require('../controllers/newsletterController');
const { newsletterValidation, validate } = require('../middleware/validate');
const { newsletterLimiter } = require('../middleware/rateLimiter');

router.post('/', newsletterLimiter, newsletterValidation, validate, handleNewsletterSubscription);

module.exports = router;
