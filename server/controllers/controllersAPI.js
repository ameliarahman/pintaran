const Pintaran = require('../models/modelsAPI')
const mongoose = require('mongoose')
const axios = require('axios')
const pinterestAPI = require('pinterest-api');
const redis = require("redis");
const client = redis.createClient();
const Version = require('../models/modelVersion')
const express = require('express');
const app = express()

class PinterestController {
  static getPintaran(req, res) {
    Pintaran.find({})
    .then(data => {
      client.get('versibaru', function (err,dataVersion) {
        if (err) {
          // reject(err)
          console.log(err);
        } else {
          Version.findOne({})
          .then(version => {
            console.log('DATANYA :', version.version, dataVersion);
            if (version.version === dataVersion) {
              res.send(data)
            } else {  
              client.setex('listfoto', 30, JSON.stringify(data))
              res.send(data)
            }
          })
          .catch(err => {
            res.send(err)
          })
        }
      })
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

  static version(req,res,next) {
    Version.findOne({})
    .then(version => {
      console.log('INI VERSION', version)
      next()
    })
    .catch(err => {
      res.send(err)
    })
  }

  static getSport (req,res) {
    Pintaran.find({category: 'Sport'})
    .then(data => {
      res.status(200).send(data)
      getAPIRedis()
    })
    .catch(err => {
      res.status(500).send(err)
    })
  }

  static getHumor (req,res) {
    Pintaran.find({category: 'Humor'})
    .then(data => {
      res.status(200).send(data)
      getAPIRedis()
    })
    .catch(err => {
      res.status(500).send(err)
    })
  }

  static getTechnology (req,res) {
    Pintaran.find({category: 'Technology'})
    .then(data => {
      res.status(200).send(data)
      getAPIRedis()
    })
    .catch(err => {
      res.status(500).send(err)
    })
  }

  static getPhotography (req,res) {
    Pintaran.find({category: 'Photography'})
    .then(data => {
      res.status(200).send(data)
      getAPIRedis()
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
      category: req.body.category,
      author: req.body.author
    })
      .then(data => {
        Version.findOne({})
        .then(dataVersion => {
          console.log('INI VERSI LAMA', dataVersion);
          dataVersion.version++
          console.log('INI VERSI BARU', dataVersion);
          client.set('versibaru', JSON.stringify(dataVersion.version))
          dataVersion.save()
          .then(newVersion => {
            res.send({
              status: newVersion,
              message: 'Version Updated'
            })
          })
          .catch(err => {
            res.send(err)
          })
        })
        .catch(err => {
          res.send(err)
        })
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
