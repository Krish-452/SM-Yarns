const { body, validationResult } = require('express-validator');

const contactValidation = [
  body('name').trim().notEmpty().withMessage('Name is required').isLength({ min: 2, max: 100 }).escape(),
  body('email').trim().notEmpty().withMessage('Email is required').isEmail().withMessage('Invalid email').normalizeEmail(),
  body('phone').optional({ checkFalsy: true }).trim().isLength({ max: 20 }),
  body('company').optional({ checkFalsy: true }).trim().isLength({ max: 200 }).escape(),
  body('product').optional({ checkFalsy: true }).trim().isLength({ max: 200 }).escape(),
  body('message').optional({ checkFalsy: true }).trim().isLength({ max: 5000 }).escape(),
];

const newsletterValidation = [
  body('email').trim().notEmpty().withMessage('Email is required').isEmail().withMessage('Invalid email').normalizeEmail(),
];

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ error: 'Validation failed', details: errors.array().map(e => ({ field: e.path, message: e.msg })) });
  }
  next();
};

module.exports = { contactValidation, newsletterValidation, validate };
