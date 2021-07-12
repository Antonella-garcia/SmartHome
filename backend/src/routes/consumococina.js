const {Router}=require('express');
const router = Router();

const {getconsuCocina} = require('../controllers/consumoControl.js');

router.route('/').get(getconsuCocina)

module.exports = router