const express = require('express')
const router = express.Router()
const API = require('../controllers/controllersAPI')
const IMG = require('../helpers/images')
const multer = require('multer')

router.get('/', API.getPintaran)
router.get('/sport', API.getSport)
router.get('/humor', API.getHumor)
router.get('/photography', API.getPhotography)
router.get('/technology', API.getTechnology)
router.post('/', IMG.multer.single('images'), IMG.sendUploadToGCS, API.postPintaran)

router.delete('/:id', API.deletePintaran)
module.exports = router
