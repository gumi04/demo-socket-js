const express = require('express');
const bodyParser = require('body-parser');
const SubscriptionController = require('../controllers/suscription');

let router = express.Router();


router.get('/', SubscriptionController.greeting);

router.route('/notificacion').post(SubscriptionController.suscription)


module.exports = router;