const mongoose = require('mongoose')

const Schema = mongoose.Schema

const versionSchema = new Schema({
      version: String
})

const VersionModel = mongoose.model('Version', versionSchema);

module.exports = VersionModel
