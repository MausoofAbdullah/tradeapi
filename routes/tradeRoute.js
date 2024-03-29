const express=require('express')
const router = express.Router()

const tradeController = require('../controller/tradeController.js');

// routes handling get and post method
router.post('/trades',tradeController.createTrades)
router.get('/trades',tradeController.getAllTrades)
router.get('/trades/:id',tradeController.getTradyById)

// Handling unsupported methods
router.delete('/trades/:id', tradeController.notAllowedHandler);
router.put('/trades/:id', tradeController.notAllowedHandler);
router.patch('/trades/:id', tradeController.notAllowedHandler);

module.exports = router;
