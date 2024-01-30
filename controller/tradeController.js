const tradeModel = require("../model/tradeModel.js");

module.exports = {

    //creating trades
    createTrades: async (req, res) => {
        const { type, user_id, symbol, shares, price, timestamp } = req.body;

        try {
          if (!['buy', 'sell'].includes(type) || shares < 1 || shares > 100) {
            return res.status(400).json({ error: 'Invalid trade data' });
          }
      
          const newTrade = new tradeModel({ type, user_id, symbol, shares, price, timestamp });
     
      
          await newTrade.save();
          res.status(201).json(newTrade);
        } catch (error) {
          res.status(500).json({ error: 'Internal Server Error' });
        }
      },

      
  getAllTrades: async (req, res) => {
    try {
        // Extract query parameters
        const { type, user_id } = req.query;
    
        // Fetch trades from the database and sort by id in increasing order
        let filteredTrades;
    
        if (type || user_id) {
          // If at least one query parameter is provided, filter trades based on the parameters
          const filter = {};
          if (type) filter.type = type;
          if (user_id) filter.user_id = user_id;
          
          filteredTrades = await tradeModel.find(filter)
        } else {
          // If no query parameters are provided, fetch all trades
          filteredTrades = await tradeModel.find()
        }
    
        res.status(200).json(filteredTrades);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    },

    
    getTradyById:async(req,res)=>{
        const tradeId = req.params.id;

        try {
            const trade = await tradeModel.findById(tradeId);
        
            if (!trade) {
              return res.status(404).send('ID not found');
            }
        
            res.status(200).json(trade);
          } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
          }
        },
        notAllowedHandler:async(req,res)=>{
            res.status(405).send('Method Not Allowed');
        }

    
}