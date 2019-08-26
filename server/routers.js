const userController = require('./userController')
const locationController = require('./locationController')

const express = require('express')
const router = express.Router()


//post request that stores users sign up info in our database
router.post('/signup', userController.createUser, (req, res, err) => {
    if (!err) {
        res.status(200).json()
    }
})

//post request that checks users login info against that of the database
router.post('/login', userController.loginUser, (req, res, err) => {
    if (!err) {
        res.status(200).json()
    }
})

router.post('/addInfo', locationController.addInfo, (req, res, err) => {
    if (!err) {
        res.status(200).json()
    }
})

router.get('/getAllInfo', locationController.getAllInfo, (req, res, err) => {
    if (!err) {
        res.status(200).json()
    }
})

router.delete('/deleteInfo', locationController.deleteInfo, (req, res, err) => {
    if (!err) {
        res.status(200).json()
    }
})

module.exports = router