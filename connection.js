const mongoose = require('mongoose');
const dotenv=require('dotenv')


dotenv.config();
// Initialize Mongoose with MongoDB
const db=mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// db.once('open', () => {
//   console.log('Connected to MongoDB');
// });

module.exports = db;