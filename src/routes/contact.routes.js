const { fileUpload } = require('../helpers/fileUpload')

const express = require('express')
const contactController = require('../controllers/contact.controller')

const router = express.Router()

router
    .route('/api/contact')
    .get(contactController.all)
    .post(
        fileUpload.single('file'), 
        contactController.create
    )
    .patch(contactController.update)

router
    .route('/api/contact/:phone')
    .get(contactController.find)
    .delete(contactController.del)
    
module.exports = router
