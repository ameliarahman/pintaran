const mongoose = require('mongoose')

const Schema = mongoose.Schema

const pintaranSchema = new Schema({
      images: String,
      urlImg: String,
      description: {type: String, default: 'null'},
      category: {type: String, default: 'null'},
<<<<<<< HEAD
      author: String
=======
      author: {type: String, default: ''}
>>>>>>> 7222c401d6ffd1e657c9efcdd14f540ea35306b0
})

const PinterestModel = mongoose.model('Pinterest', pintaranSchema);

module.exports = PinterestModel
