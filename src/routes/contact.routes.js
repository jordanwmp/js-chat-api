const express = require('express')
const contactController = require('../controllers/contact.controller')

const router = express.Router()

router
    .route('/api/contact')
    .get(contactController.all)
    .post(contactController.create)
    .patch(contactController.update)

router
    .route('/api/contact/:phone')
    .get(contactController.find)
    .delete(contactController.del)
    
module.exports = router
