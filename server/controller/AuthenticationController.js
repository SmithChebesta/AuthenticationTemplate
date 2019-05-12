const User = require('../model/User.js')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
const config = require('../config/key');
const {
  validationResult
} = require('express-validator/check');

const ONE_WEEK = 60 * 60 * 24 * 7
// help function that return token
const jwtSignUser = (user) => {
  return jwt.sign(user, config.secret, {
    expiresIn: ONE_WEEK
  })
}
const jwtCheckToken = (token) => {
  try {
    var decoded = jwt.verify(token, config.secret);
    return decoded != null
  } catch (err) {
    // err
    return false
  }
}



module.exports = {
  register(req, res) {
    let error = validationResult(req)
    if (!error.isEmpty()) {
      res.status(400).send(error.array())
      console.log('validation error');

    } else {

      User.findOne({
        email: req.body.email
      }, (err, data) => {
        if (err) {
          console.log(err);
        } else {
          if (data) {
            res.status(400).send([{
              msg: "This email is already used",
              param: 'email'
            }])
          } else {
            const dataWithHash = {
              email: req.body.email,
              password1: bcrypt.hashSync(req.body.password1, salt)
            }
            new User(dataWithHash).save(err => {
              if (err) {
                console.log(err);
              }

            })

            res.status(200).send({
              user: dataWithHash,
              token: jwtSignUser(dataWithHash)
            })

          }
        }
      })
    }
  },


  login(req, res) {
    const {
      email,
      password1
    } = req.body
    User.findOne({
      email
    }, (err, data) => {
      if (err) {

        console.log(err);
      } else {
        if (!data) {
          res.status(400).send([{
            msg: "Invalid email or password",
            param: 'email'
          }, {
            msg: "Invalid email or password",
            param: 'password1'
          }])
        } else {

          bcrypt.compare(password1, data.password1).then((isValid) => {


            if (isValid) {

              res.status(200).send({
                user: data,
                token: jwtSignUser(data.toJSON())
              })

            } else {
              res.status(400).send([{
                msg: "Invalid email or password",
                param: 'email'
              }, {
                msg: "Invalid email or password",
                param: 'password1'
              }])
            }
          }).catch((err) => {
            console.log(err);

          })


        }


      }
    })

  },

  vertifyToken(req, res) {
    // jwtCheckToken(req.body.token)
    res.status(200).send(jwtCheckToken(req.body.token))
  }
}
