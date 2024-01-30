const express=require('express')
const router = express.Router()

const tradeController = require('../controller/tradeController.js');

router.post('/trades',tradeController.createTrades)
router.get('/trades',tradeController.getAllTrades)

module.exports = router;
