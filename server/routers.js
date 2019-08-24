const userController = require('./userController')

const express = require('express')
const router = express.Router()

router.post('/signup', userController.createUser, (req, res, err) => {
    if (!err) {
        res.status(200).json()
    }


    
})

module.exports = router