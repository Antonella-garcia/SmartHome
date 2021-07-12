const {Router}=require('express');
const router = Router();

const {getTop10} = require('../controllers/consumoControl.js');

router.route('/').get(getTop10)

module.exports = router
