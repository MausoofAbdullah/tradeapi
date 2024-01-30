const mongoose = require('mongoose');
// const autoIncrement = require('mongoose-auto-increment');

const tradeSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['buy', 'sell'],
    required: true
  },
  user_id: {
    type: Number,
    required: true
  },
  symbol: {
    type: String,
    required: true
  },
  shares: {
    type: Number,
    min: 1,
    max: 100,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
},
{ timestamps: true }
);

// tradeSchema.plugin(autoIncrement.plugin, {
//     model: 'Trade',
//     field: 'id',
//     startAt: 1,
//     incrementBy: 1
//   });
  
  const Trade = mongoose.model('trade', tradeSchema);
  
  module.exports = Trade;
