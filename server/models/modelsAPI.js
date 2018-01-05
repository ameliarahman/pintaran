const mongoose = require('mongoose')

const Schema = mongoose.Schema

const pintaranSchema = new Schema({
      images: String,
      urlImg: String,
      description: {type: String, default: 'null'},
      category: {type: String, default: 'null'},
      author: String
})

const PinterestModel = mongoose.model('Pinterest', pintaranSchema);

module.exports = PinterestModel
