const {
  body
} = require('express-validator/check');

module.exports = {
  register: [
    body('email').isEmail().withMessage('Invalid email format').exists().withMessage('This information is required'),
    body('password1').isAlphanumeric().withMessage('Invalid format ,need to be alphanumeric').exists().withMessage('This information is required'),
    body('password2').custom((value, {
      req
    }) => {
      if (value !== req.body.password1) {
        return false
      } else {
        return value
      }
    }).withMessage('Both password are not matched.')
  ]

}
