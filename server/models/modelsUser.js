const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  email: String,
  password: String,
  pintaran: [{
    type: Schema.Types.ObjectId,
    ref: 'Pinterest'
  }]
})

const UserModel = mongoose.model('Users', userSchema)

module.exports = UserModel