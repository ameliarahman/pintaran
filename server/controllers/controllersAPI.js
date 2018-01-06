const Pintaran = require('../models/modelsAPI')
const mongoose = require('mongoose')
const axios = require('axios')
const pinterestAPI = require('pinterest-api');
const redis = require("redis");
const client = redis.createClient();

class PinterestController {
  static getPintaran(req, res) {
    Pintaran.find({})
    .then(data => {
      client.setex('listfoto', 30, JSON.stringify(data))
      res.status(200).send(data)
    })
    .catch(err => {
      res.status(500).send(err)
    })
  }

  static check (req,res,next) {
    client.get('listfoto', function (err, data) {
      if (err) throw err;
      if (data != null) {
          res.send(JSON.parse(data));
      } else {
          next();
      }
    });
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
      .then(data => {
        res.status(200).send(data)
      })
      .catch(err => {
        res.status(500).send(err)
      })
  }

  static getSport(req, res) {
    Pintaran.find({ category: 'Sport' })
      .then(data => {
        res.status(200).send(data)
      })
      .catch(err => {
        res.status(500).send(err)
      })
  }

  static getHumor(req, res) {
    Pintaran.find({ category: 'Humor' })
      .then(data => {
        res.status(200).send(data)
      })
      .catch(err => {
        res.status(500).send(err)
      })
  }

  static getTechnology(req, res) {
    Pintaran.find({ category: 'Technology' })
      .then(data => {
        res.status(200).send(data)
      })
      .catch(err => {
        res.status(500).send(err)
      })
  }

  static getPhotography(req, res) {
    Pintaran.find({ category: 'Photography' })
      .then(data => {
        res.status(200).send(data)
      })
      .catch(err => {
        res.status(500).send(err)
      })
  }

  static postPintaran(req, res) {
    Pintaran.create({
      images: req.file.cloudStoragePublicUrl,
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

  static editPintaran() { }

  static deletePintaran(req, res) {
    Pintaran.findByIdAndRemove({ _id: req.params.id })
      .then(data => {
        res.send({
          message: 'Delete Berhasil',
          data: data
        })
      })
      .catch(err => {
        res.status(500).send(err)
      })

    .catch(err => {
      res.status(500).send(err)
    })
  }
}


module.exports = PinterestController
