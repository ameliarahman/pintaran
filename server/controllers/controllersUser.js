const User = require('../models/modelsUser')
const jwt = require('jsonwebtoken')

class UserController {

  static getDataUser(req, res) {
    User.findOne({
      email: req.body.email
    })
      .then((dataUser) => {
        if (!dataUser) {
          User.create({
            email: req.body.email,
            password: req.body.password,
            pintaran: req.body.pintaran
          }).then((newDataUser) => {
            const payload = {
              id: newDataUser._id,
              email: newDataUser.email,
              password: newDataUser.password
            }
            jwt.sign(payload, 'pintaranApplication', function (err, token) {
              if (err) {
                throw err
              } else {
                res.send({
                  data: payload,
                  token: token
                })
              }
            })
          }).catch((reason) => {
            res.send(reason)
          })
        } else {
          if (dataUser.password === req.body.password) {
           const payload = {
             id: dataUser._id,
             email: dataUser.email,
             password: dataUser.password
           }
            jwt.sign(payload, "pintaranApplication", function (err, token) {
              if (err) {
                throw err
              } else {
                res.send({
                  data: payload,
                  token: token
                })
              }
            })
          } else {
            res.send("")
          }
        }
      })
      .catch((reason) => {
        res.send(reason)
      })
  }

  static getAllDataUser(req, res) {
    User.find()
      .then((dataUsers) => {
        res.send(dataUsers)
      })
      .catch((reason) => {
        res.send(reason)
      })
  }
}

module.exports = UserController