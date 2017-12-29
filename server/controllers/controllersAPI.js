const Pintaran = require('../models/modelsAPI')
const mongoose = require('mongoose')
const axios = require('axios')
const pinterestAPI = require('pinterest-api');


class PinterestController {
  static getPintaran (req,res) {
    Pintaran.find({})
    .then(data => {
      res.status(200).send(data)
    })
    .catch(err => {
      res.status(500).send(err)
    })
  }

  static getSport (req,res) {
    Pintaran.find({category: 'Sport'})
    .then(data => {
      res.status(200).send(data)
    })
    .catch(err => {
      res.status(500).send(err)
    })
  }

  static getHumor (req,res) {
    Pintaran.find({category: 'Humor'})
    .then(data => {
      res.status(200).send(data)
    })
    .catch(err => {
      res.status(500).send(err)
    })
  }

  static getTechnology (req,res) {
    Pintaran.find({category: 'Technology'})
    .then(data => {
      res.status(200).send(data)
    })
    .catch(err => {
      res.status(500).send(err)
    })
  }

  static getPhotography (req,res) {
    Pintaran.find({category: 'Photography'})
    .then(data => {
      res.status(200).send(data)
    })
    .catch(err => {
      res.status(500).send(err)
    })
  }

  static postPintaran (req,res) {
    console.log(req.file, req.body)
    Pintaran.create({
      images: req.file.cloudStoragePublicUrl,
      urlImg: req.body.urlImg,
      description: req.body.description,
      category: req.body.category
    })
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send(err)
    })
  }

  static editPintaran () {}

  static deletePintaran (req,res) {
    Pintaran.findByIdAndRemove({_id:req.params.id})
    .then(data => {
      res.send({
        message: 'Delete Berhasil',
        data: data
      })
    })
    .catch(err => {
      res.status(500).send(err)
    })
  }
}


module.exports = PinterestController
