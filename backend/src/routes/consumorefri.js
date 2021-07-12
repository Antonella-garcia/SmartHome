const {Router}=require('express');
const router = Router();

const {getconsuRefri} = require('../controllers/consumoControl.js');

router.route('/').get(getconsuRefri)

module.exports = router